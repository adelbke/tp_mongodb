mapFunction = function () {
    emit(this.borough, 1);};
    reduceFunction = function (key, values) {
    return Array.sum(values);};
    queryParam = {"query":{}, "out":{"inline":true}};
    db.paris.mapReduce(mapFunction, reduceFunction, queryParam);