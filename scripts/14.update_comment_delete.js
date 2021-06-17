db.restaurants.update (
    {"_id" : ObjectId("60c909ac20e1d6e43117b4b0")},
    {$unset : {"comment" : "My new comment"}}
);
