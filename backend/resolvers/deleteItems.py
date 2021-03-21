import os
import logging
from dynamodb import DynamoDBRepository

_logger = logging.getLogger(name=__name__)
_logger.setLevel(os.getenv('MODE',logging.DEBUG))

class delete(DynamoDBRepository):
    
    # This function is use to add new item
    def resolve(self, event):
        try:
            itemId = event.get('arguments').get('id', None)

            # delete the item from the database
            result = self.delete_item(
                key={
                    'id': itemId
                }
            )
            return result

        except Exception as e:
            _logger.error(e)

if __name__ == "__main__":
    pass