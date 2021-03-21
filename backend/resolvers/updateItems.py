import json
import logging
import uuid
from dynamodb import DynamoDBRepository

class update(DynamoDBRepository):
    
    # This function is use to update existing item
    def resolve(self, event):
        data = event.get('arguments').get('input', None)
        itemId = event.get('arguments').get('id', None)

        if 'text' not in data or 'checked' not in data:
            logging.error("Validation Failed")
            raise Exception("Couldn't update the item.")
            return

        # update the item in the database
        result = self.table.update_item(
            Key={
                'id': itemId
            },
            ExpressionAttributeNames={
            '#item_text': 'text',
            '#item_description': 'description'
            },
            ExpressionAttributeValues={
            ':text': data.get('text', ''),
            ':description' : data.get('description', ''),
            ':checked': data.get('checked', False)
            },
            UpdateExpression='SET #item_text = :text, '
                            '#item_description = :description, '
                            'checked = :checked',
            ReturnValues='ALL_NEW',
        )

        return result['Attributes']

