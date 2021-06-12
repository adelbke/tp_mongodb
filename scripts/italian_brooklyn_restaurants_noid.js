db.getCollection('restaurants').find(
    {'borough':'Brooklyn','cuisine':'Italian'},
    {'_id':0,'name':1,'address.street':1})