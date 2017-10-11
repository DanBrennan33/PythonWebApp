import pymongo, bcrypt
from pymongo import MongoClient

class RegisterModel:
    
    def __init__(self):
        self.client = MongoClient()
        self.db = self.client.CodeScape
        self.Users = self.db.users
        
    def insert_user(self, data):
        hashed = bcrypt.hashpw(data.password.encode(), bcrypt.gensalt())
        
        id = self.Users.insert({"username": data.username, "name": data.name, "password": hashed,
                                "email": data.email, "avatar": "", "background": "", "about": "", 
                                "hobbies": "", "birthday": ""})
        print("uid is " + str(id))
        