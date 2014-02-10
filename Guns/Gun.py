class Player(object):
    move_dict = {'1':'reload', '2':'shoot', '3':'block'}

    def __init__(self, name, bullets = 0):
        self.name = name
        self.bullets = bullets
    
    def reload(self):
        self.bullets += 1
        print('{0} reloaded!'.format(self.name))

    def shoot(self):
        if self.bullets >= 5:
            self.bullets -= 5
            print('{0} super fired!'.format(self.name))
        elif self.bullets > 0:
            self.bullets -= 1
            print('{0} fired!'.format(self.name))
        else:
            print('{0} fired an empty bullet!'.format(self.name))

    def block(self):
        print('{0} blocked!'.format(self.name))

class Run(object):
    
    def __init__(self):
        P1 = input('Player 1 name: ')
        P2 = input('Player 2 name: ')
        player1 = Player(P1)
        player2 = Player(P2)
        self.player1 = player1
        self.player2 = player2
        self.winner = None

    def make_move(self):
        num = input('Enter 1 to reload, 2 to shoot, 3 to block. Your move: ')
        return Player.move_dict[num]

    def simulate(self):
        self.mov1 = self.make_move()
        self.mov2 = self.make_move()
        if self.mov1 == 'reload' and self.mov2 == 'shoot' and self.player2.bullets > 0 or self.mov2 == 'shoot' and self.player2.bullets >= 5 and self.mov1 != 'shoot':
            self.winner = self.player2.name
        elif self.mov1 == 'shoot' and self.player1.bullets > 0 and self.mov2 == 'reload' or self.mov1 == 'shoot' and self.player1.bullets >= 5 and self.mov2 != 'shoot':
            self.winner = self.player1.name
        self.player1.__getattribute__(self.mov1)()
        self.player2.__getattribute__(self.mov2)()
    
    def get_winner(self):
        while self.winner is None:
            self.simulate()
        else:
            print('{0} WINS!'.format(self.winner))

    def play(self):
        self.get_winner()
        self.winner = None
        self.play()