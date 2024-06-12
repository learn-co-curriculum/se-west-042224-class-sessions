class Game:
    def __init__(self, title):
        self.title = title

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, value):
        if isinstance(value, str) and len(value) > 0 and not hasattr(self, "title"):
            self._title = value
        else:
            raise Exception

    def results(self):
        return [result for result in Result.all if result.game == self]

    def players(self):
        return list(set([result.player for result in self.results()]))

    def average_score(self, player):
        player_scores = [
            result.score for result in self.results() if result.player == player
        ]
        if player_scores:
            return sum(player_scores) / len(player_scores)
        return 0


class Player:

    all = []

    @classmethod
    def highest_scored(cls, game):
        # if cls.all:
        #     max_player = None
        #     max_score = 0
        #     for player in cls.all:
        #         if game.average_score(player) > max_score:
        #             max_player = player
        #             max_score = game.average_score(player)
        #     return max_player
        # return None
        # return max(cls.all, key=lambda player: game.average_score(player))
        return sorted(cls.all, key=lambda player: game.average_score(player))[-1]

    def __init__(self, username):
        self.username = username
        self.__class__.all.append(self)

    @property
    def username(self):
        return self._username

    @username.setter
    def username(self, value):
        if isinstance(value, str) and 2 <= len(value) <= 16:
            self._username = value
        else:
            raise ValueError("Username must be string between 2 and 16 characters")

    def results(self):
        return [result for result in Result.all if result.player == self]

    def games_played(self):
        return list({*[result.game for result in self.results()]})

    def played_game(self, game):
        return game in self.games_played()

    def num_times_played(self, game):
        return len([r.game for r in self.results() if r.game == game])


class Result:

    all = []

    def __init__(self, player, game, score):
        self.player = player
        self.game = game
        self.score = score
        self.__class__.all.append(self)

    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, score):
        if type(score) == int and 1 <= score <= 5000 and not hasattr(self, "score"):
            self._score = score
        else:
            raise Exception
