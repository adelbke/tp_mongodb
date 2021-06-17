db.restaurants.aggregate(
    [
        {
            $project:{
                'name':1,
                'grades':1,
                'newscore':{
                    $cond:{
                        if:{
                            '$eq':['$grades.grade', "A"]
                        },
                        then:3,
                        else:0
                    }
                }
            }
        }
    ]
)

db.restaurants.mapReduce(
    function(){
        
        emit(this.name,this.grades)
    },
    function(key, values){
        var new_scores = values[0].map(
        function(val){
            if(val.grade == 'A')
                return 3;
            if(val.grade == 'B')
                return 1;
            if(val.grade == 'C')
                return -1;
            
            return 0;
            }
        )
        return Array.sum(new_scores)
        // return new_score;
    },
    {
        query: {},
        out: "new_score"
    }
)