import os
import traceback
import logging

class MappingResolver(object):
    def __init__(self):
        self.resolvers = []

    # @staticmethod
    # def is_dynamic_resolver(event):
    #     # is this a batch invoke?
    #     if isinstance(event, list):
    #         # check the first event
    #         return event[0].get('resolvers') is not None
    #     return event.get('resolvers') is not None

    def resolve_mapping(self, event):
        try:
            if event.get('resolvers') is not None:
                logging.debug('found resolver | ' + str(event.get('resolvers')))
                self.get_resolver_from_event(event)
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

    def get_resolver_from_event(self, event):
        resolvers = []
        # is this a batch invoke?
        # if isinstance(event, list):
        #     resolvers = event[0].get('resolvers')
        # else:
        resolvers = event.get('resolvers')
        for resolver in resolvers:
            class_name = resolver.get('resolverClass')
            logging.debug('class_name | ' + str(class_name))
            #assert class_name
            resolver_class = self.load_class(class_name)
            logging.debug('resolver_class | ' + str(resolver_class))
            args = resolver.get('args', [])
            kwargs = resolver.get('kwargs', {})
            resolver_obj = self.instantiate_resolver(resolver_class, args,
                                                      kwargs)
            self.resolvers.append(resolver_obj)

    def load_class(self, module_name):
        module_path = module_name.split('.')
        module_name = ".".join(x for x in module_path[:-1])
        logging.debug('module_name | ' + str(module_name))
        module = __import__(module_name)
        class_obj = module
        for x in module_path[1:]:
            class_obj = getattr(class_obj, x)
        if type(class_obj).__name__ != 'type':
            raise Exception('{0} is not a class'.format(class_obj))
        return class_obj

    def instantiate_resolver(self, resolver_class, args, kwargs):
        return resolver_class(*args, **kwargs)

    
