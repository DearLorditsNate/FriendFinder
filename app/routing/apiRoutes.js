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


            // if (Math.abs(req.body.scores.reduce(sum) - friends[i].scores.reduce(sum)) ) {
            //     bestMatch = friends[i].scores.reduce(sum);
            // }
        }

        function findMatch() {
            for (var i = 0; i < scores.length; i++) {
                // If scores are equal, then return that match
                if (Math.abs(req.body.scores.reduce(sum) - scores[i]) === 0) {
                    bestMatch = friends[i];
                // Else, find the lowest number difference and return that match
                } else {

                }
            }
        }

        console.log(friends);
        console.log(scores);

        res.json(bestMatch);
    });
}
