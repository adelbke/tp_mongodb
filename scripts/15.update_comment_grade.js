db.restaurants.updateMany (
    {'grades.grade':{"$not":{"$eq":"C"}}},
    {$set : {"comment" : "acceptable"}}
);