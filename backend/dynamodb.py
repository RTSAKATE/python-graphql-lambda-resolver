import logging
import os
import boto3
import json
import decimal
from decimal import Decimal
from boto3.dynamodb.conditions import Attr, Key


class DynamoDBRepository(object):

    def __init__(self):
        self.dynamo_db = boto3.resource("dynamodb")
        self.table = self.dynamo_db.Table(os.environ['DYNAMODB_TABLE'])

    def get_item(self, key):
        response = self.table.get_item(Key=key)
        item = response.get('Item', {})
        return item

    def add_item(self, item):
        item = dict(**item)
        item = json.loads(json.dumps(
            item, cls=DecimalEncoder), parse_float=Decimal)
        self.table.put_item(
            Item=item, ConditionExpression=Attr('id').not_exists())
        return self.get_item(key={'id': item['id']})

    def dynamodb_query_all(self, _id=None, sort_key_begins_with=None):
        key_condition_expression = Key('id').eq(_id)
        args = {
            "Limit": 50,
            "ScanIndexForward": False,
            "KeyConditionExpression": key_condition_expression,
        }
        while True:
            response = self.table.query(**args)
            last_evaluated_key = response.get("LastEvaluatedKey")
            for item in response.get("Items"):
                yield item
            if last_evaluated_key is None:
                break

    def delete_item(self, key):
        return self.table.delete_item(Key=key)


# Helper class to convert a DynamoDB item to JSON.
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            if o % 1 > 0:
                return float(o)
            else:
                return int(o)
        return super(DecimalEncoder, self).default(o)
