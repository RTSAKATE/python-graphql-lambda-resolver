import os
import traceback

class ResolverBuilder(object):
    def __init__(self):
        self.resolvers = []

    @staticmethod
    def is_dynamic_resolver(event):
        # is this a batch invoke?
        if isinstance(event, list):
            # check the first event
            return event[0].get('resolvers') is not None
        return event.get('resolvers') is not None

    def _instantiate_resolver(self, resolver_class, args, kwargs):
        return resolver_class(*args, **kwargs)

    def _load_resolver_class(self, fqn):
        return self.load_class(fqn)

    def load_class(self, module_name):
        module_name_parts = module_name.split('.')
        module_name = ".".join(x for x in module_name_parts[:-1])
        module = __import__(module_name)
        resolver_class_obj = module
        for x in module_name_parts[1:]:
            resolver_class_obj = getattr(resolver_class_obj, x)
        if type(resolver_class_obj).__name__ != 'type':
            raise Exception('{0} is not a class'.format(resolver_class_obj))
        return resolver_class_obj

    def _resolvers_from_event(self, event):
        resolvers = []
        # is this a batch invoke?
        if isinstance(event, list):
            resolvers = event[0].get('resolvers')
        else:
            resolvers = event.get('resolvers')
        for resolver in resolvers:
            class_name = resolver.get('resolverClass')
            assert class_name
            resolver_class = self._load_resolver_class(class_name)
            args = resolver.get('args', [])
            kwargs = resolver.get('kwargs', {})
            resolver_obj = self._instantiate_resolver(resolver_class, args,
                                                      kwargs)
            self.resolvers.append(resolver_obj)

    def resolve(self, event):
        try:
            if self.is_dynamic_resolver(event):
                self._resolvers_from_event(event)
                result = event
                for resolver in self.resolvers:
                    result = resolver.resolve(result)
                return result
        except Exception as exc:
            print(traceback.format_exc())
            error_type = getattr(exc, 'error_type', type(exc).__name__)
            error_message = getattr(exc, 'error_message', 'An Exception has Occured')
            return {
                'error_type': error_type,
                'error_message': error_message
            }
