var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        friends.push(req.body);

        // If only one friend in arr, return that person
        var bestMatch = friends[0];

        // Stores compiled scores
        var scores = [];

        // Sum function to run as callback for reduce
        function sum(total, num) {
            return total + num;
        }

        // Push compiled scores to array
        for (var i = 0; i < friends.length; i++) {
            //Converts array to strings to ints to sum
            var ints = friends[i].scores.toString().split(',').map(function (item) {
                return parseInt(item, 10);
            });

            scores.push(ints.reduce(sum));
        }

        // Finds item in array (not itself) that has lowest difference
        function findMatch(currentScore) {
            var result;
            var max = 50;
            var current;
            for (var i = 0; i < scores.length - 1; i++) {
                current = Math.abs(scores[i] - currentScore);
                if (current < max) {
                    max = current;
                    result = i;
                }
            }
            // Returns index of best match
            return result;
        }

        // Turns current score arr into integers
        var currentScore = req.body.scores.toString().split(',').map(function (item) {
            return parseInt(item, 10);
        });

        // If there is more than one friend in array, run findMatch with current score as argument
        if (friends.length > 1) {
            bestMatch = friends[findMatch(currentScore.reduce(sum))];
        }

        // Return best match
        res.json(bestMatch);
    });
}
