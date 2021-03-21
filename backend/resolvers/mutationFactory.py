import logging
import uuid
import os
from dynamodb import DynamoDBRepository
import logging

_logger = logging.getLogger(name=__name__)
_logger.setLevel(os.getenv('MODE', logging.DEBUG))


class createPatient(DynamoDBRepository):

    # This function is use to add new item
    def resolve(self, event):
        logging.debug('executing resolve')
        try:
            data = event.get('arguments').get('input', None)

            if 'name' not in data:
                logging.error("Validation Failed")
                raise Exception("Couldn't create the item.")

            item = {
                'id': str(uuid.uuid1()),
                'name': data.get('name', ''),
                'age': data.get('age', '')
            }
            # write the item to the database
            Item = self.add_item(item=item)
            return Item

        except Exception as e:
            _logger.error(e)


class createObervation(DynamoDBRepository):

    # This function is use to add new item
    def resolve(self, event):
        logging.debug('executing resolve')
        try:
            data = event.get('arguments').get('input', None)

            if 'observationPatientId' not in data:
                logging.error("Validation Failed")
                raise Exception("Couldn't create the item.")

            item = {
                'id': str(uuid.uuid1()),
                'observationPatientId': data.get('observationPatientId', ''),
                'pulse': data.get('pulse', ''),
                'bloodPressure': data.get('bloodPressure', ''),
                'respiration': data.get('respiration', '')
            }
            # write the item to the database
            Item = self.add_item(item=item)
            return Item

        except Exception as e:
            _logger.error(e)


if __name__ == "__main__":
    pass
