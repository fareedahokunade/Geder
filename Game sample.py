# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
import random
class Geder:


    def __init__(self):
        self.turn = 0
        self.play = ""

    def game(questions):
        pass

    def TruthorDare(self):
        print("Welcome to truth or dare, we know how this goes so there's no need for a lot of explanation.\n  "
              "The only thing here is the choice of truth or dare is random and the player is gonna be random")
        print("Player one readdyyy!!!!")
        print("Player two readddyyy!!!!")

        exit = "true";
        while exit == "true":
            self.turn = random.choice([1, 2])
            self.play = random.choice(["truth", "dare"])
            print("Player " + str(self.turn) + " goes now asking a " + self.play + " question")
            question = input("Enter your question player " + str(self.turn) + ".....")
            answer = input("Enter your answer if it's a question or Done if it's a dare after completing it" + ".....")
            again = input("Click the enter button to end,  click any other key to continue").strip()
            if again == "":
                print("Thanks for playing with us, We hope to see you soon")
                exit = "false"
            else:
                print("Next round")
        return self.turn

class Modify(Geder):

    def TruthorDare(self):
        exit = "true";
        while exit == "true":
            num = int(input("How many people are playing the game?"))
            self.turn = random.choice([i for i in range(1, num + 1)])

            print("Settings saved")

            turn = random.choice([i for i in range(1, num+1) if i != self.turn])
            self.play = random.choice(["truth", "dare"])
            print("Welcome to truth or dare, we know how this goes so there's no need for a lot of explanation.\n  "
                  "The only thing here is the choice of truth or dare is random and the player is gonna be random")
            print("Player one readdyyy!!!!")
            print("Player two readddyyy!!!!")
            print("Player " + str(self.turn) + " goes now asking a " + self.play + " question to player " + str(turn) )
            question = input("Enter your question player " + str(self.turn) + ".....")
            answer = input(
                "Enter your answer if it's a question or Done if it's a dare after completing it" + ".....")
            again = input("Click the enter button to end,  click any other key to continue").strip()
            if again == "":
                print("Thanks for playing with us, We hope to see you soon")
                exit = "false"
            else:
                print("Next round")


    def player_size(self):
        num = input("How many people are playing the game?")
        self.turn = random.choice[range(1, num+1)]


def options():
    print("These are some options we have for personalization of games, you can enter as much as possible. One at a time")
    option = input("A - User Size"
                   "B - Names"
                   )
    if option == 'A' or 'a':
        x = Modify()
        x.TruthorDare()





x = Modify()
#x.TruthorDare()
options()



