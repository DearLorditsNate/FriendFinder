var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        friends.push(req.body);

        // Matching logic
        function sum(total, num) {
            return total + num;
        }

        // If only one friend in arr, return that person
        var bestMatch = friends[0];

        // 
        // for (var i = 0; i < friends.length; i++) {
        //     if (Math.abs(req.body.scores.reduce(sum) - friends[i].scores.reduce(sum)) ) {
        //         bestMatch = friends[i].scores.reduce(sum);
        //     }
        // }
    });
}
