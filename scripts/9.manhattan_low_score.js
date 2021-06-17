db.getCollection('restaurants').find(
    {'borough': 'Manhattan', 'grades': {
        '$filter':{
            'input':'$grades.score',
            'cond':{ '$lt':10 }
        }
    }
})

db.restaurants.aggregate([
    { $match: {'borough': 'Manhattan'}},
    { $project: {
        grades: {$filter: {
            input: '$grades',
            as: 'item',
            cond: { $lt: ['$$item.score', 10]}
        }},
        name:'$name'
    }}
])