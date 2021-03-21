import os
import logging
from dynamodb import DynamoDBRepository

_logger = logging.getLogger(name=__name__)
_logger.setLevel(os.getenv('MODE',logging.DEBUG))

class getItems(DynamoDBRepository):

    def resolve(self, event):

        try:
            itemid = event.get('arguments').get('id', None)
            
            # fetch item from the database
            result = self.get_item(
                key={
                    'id': itemid
                }
            )
            logging.error(result)
            return result
        except Exception as e:
            _logger.error(e)

if __name__ == "__main__":
    pass