from pymongo import MongoClient
from config import config

mongo_client = MongoClient(
    host=config.MONOGO_URL,
    username=config.MONGO_USERNAME,
    password=config.MONGO_PASSWORD,
    port=config.MONGO_PORT
)

def insert_test_document():
    """insert sample document to test collection of test db"""
    db = mongo_client.test
    test_collection = db.test_collection
    res = test_collection.insert_one({'name': 'Elham', 'student': True})
    print(res)