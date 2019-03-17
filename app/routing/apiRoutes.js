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

        // Matching logic
        function sum(total, num) {
            return total + num;
        }

        // Push compiled scores to array
        for (var i = 0; i < friends.length; i++) {
            var ints = friends[i].scores.toString().split(',').map(function (item) {
                return parseInt(item, 10);
            });

            scores.push(ints.reduce(sum));


            // if (Math.abs(req.body.scores.reduce(sum) - friends[i].scores.reduce(sum)) ) {
            //     bestMatch = friends[i].scores.reduce(sum);
            // }
        }
        console.log(friends[0].scores);
        console.log(friends);
        console.log(scores);

        res.json(bestMatch);
    });
}
