import os
import logging
from resolvers.mapping_resolver import MappingResolver

_logger = logging.getLogger(name=__name__)
_logger.setLevel(os.getenv('MODE',logging.DEBUG))


# This is lambda handler function
def graphqlHanlder(event, context):
  try:
    _logger.debug("event " + str(event))
    result = MappingResolver().resolve_mapping(event)
    _logger.debug("result " + str(result))
    return result
  except Exception as e:
    _logger.error(e)