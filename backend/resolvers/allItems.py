import logging
import os
from dynamodb import DynamoDBRepository

_logger = logging.getLogger(name=__name__)
_logger.setLevel(os.getenv('MODE',logging.DEBUG))

class listItems(DynamoDBRepository):
    
    # This function is use to get all items
    def resolve(self, event):
        try:
            # fetch all items from the database
            result = self.table.scan()

            return result['Items']

        except Exception as e:
            _logger.error(e)

if __name__ == "__main__":
    pass