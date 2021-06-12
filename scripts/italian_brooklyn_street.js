db.getCollection('restaurants').find(
    {'borough':'Brooklyn','cuisine':'Italian'},
    {'name':1,'address.street':1}
    )