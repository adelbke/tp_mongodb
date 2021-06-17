db.restaurants.update (
    {"_id" : ObjectId("60c909ac20e1d6e43117b4b0")},
    {$set : {"comment" : "My new comment"}}
);

// restaurant choisi

let restaurant = {
    "_id" : ObjectId("60c909ac20e1d6e43117b4b0"),
    "address" : {
        "building" : "8825",
        "coord" : {
            "type" : "Point",
            "coordinates" : [ 
                -73.8803827, 
                40.7643124
            ]
        },
        "street" : "Astoria Boulevard",
        "zipcode" : "11369"
    },
    "borough" : "Queens",
    "cuisine" : "American ",
    "grades" : [ 
        {
            "date" : ISODate("2014-11-15T00:00:00.000Z"),
            "grade" : "Z",
            "score" : 38
        }, 
        {
            "date" : ISODate("2014-05-02T00:00:00.000Z"),
            "grade" : "A",
            "score" : 10
        }, 
        {
            "date" : ISODate("2013-03-02T00:00:00.000Z"),
            "grade" : "A",
            "score" : 7
        }, 
        {
            "date" : ISODate("2012-02-10T00:00:00.000Z"),
            "grade" : "A",
            "score" : 13
        }
    ],
    "name" : "Brunos On The Boulevard",
    "restaurant_id" : "40356151"
}