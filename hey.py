class hello():
    def __init__(self, *args):
        self.hello = args
    def printy(self):
        return print(self.hello)


a = hello(1, 32, 3)
a.printy()
