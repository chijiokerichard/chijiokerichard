
class Name:
    def __init__(self, name):
        self.x = int(input('Enter your age\n'))
        self.name =name

    # // "start": "npx concurrently \"npm run server\" \"react-scripts start\"",

    # "server": "json-server --watch db.json --port 3000"


class Check(Name):
        def __init__(self):
            self.age = 4
            self.result =0
            super().__init__(self)
            if type(self.x) == int:
                self.result= self.x * self.age
            print(f'{self.name} you are {self.result} years old')
             
                     
                  
  
        

Check()