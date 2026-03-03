class GeneralObject:
    def hi(self, word):
        print(f"hi {word}")

    def hi2(self, word):
        print(f"hi2 {word}")


class Car(GeneralObject):
    def hello(self, word):
        print(word)


Car().hello("word")
Car().hi("jim")
Car().hi2("jim")
