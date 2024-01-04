show dbs

use viralproject

db

show collections

db.createCollection('users');

db.users.insert({username:"rohan",usermobile:9820098210,useremail:'v2@v.com',userpass:1234});
db.users.insert([
    {username:"roshan",usermobile:9820098221,useremail:'v4@v.com',userpass:1234},
    {username:"jay",usermobile:9820098222,useremail:'v5@v.com',userpass:1234}
]);
db.users.insertOne({username:"viral",usermobile:9820098200,useremail:'v@v.com',userpass:1234});
db.users.insertMany([
    {username:"akshay",usermobile:9820098201,useremail:'v1@v.com',userpass:1234},
    {username:"ajay",usermobile:9820098202,useremail:'v2@v.com',userpass:1234}
])


db.users.find();
db.users.find().pretty();

db.users.find({username:"viral"});
db.users.find({username:"viral",userpass:2345});
db.users.find({username:{$in:['viral','roshan','jay','manav']}});
db.users.find({$or:[{username:'viral'},{usermobile:9820098222}]});
db.users.find({$and:[{username:'viral'},{usermobile:9820098222}]});

db.users.update({username:'viral'},{$set:{username:'viral borana',usermobile:9820098222}});

db.users.remove({});
db.users.remove({username:'rohan'});


brands
{
    _id:1,
    brname:'adidas'
}
{
    _id:2,
    brname:'puma'
}
{
    _id:3,
    brname:'nike'
}


categories

{
    _id:1,
    caname:'men'
}
{
    _id:2,
    caname:'women'
}
{
    _id:3,
    caname:'kids'
}



products
{
    _id:1,
    proname:'kids tshirt',
    price:2000,
    discount:20,
    categoryid:3,
    brandid:1
}

{
    _id:2,
    proname:'kids blue tshirt',
    price:2100,
    discount:10,
    categoryid:3,
    brandid:2
}

{
    _id:3,
    proname:'woman blue tshirt',
    price:1900,
    discount:20,
    categoryid:2,
    brandid:3
}
{
    _id:4,
    proname:'woman black tshirt',
    price:1800,
    discount:40,
    categoryid:2,
    brandid:1
}

{
    _id:5,
    proname:'mens black tshirt',
    price:7800,
    discount:40,
    categoryid:1,
    brandid:1
}

{
    _id:6,
    proname:'mens blue tshirt',
    price:7900,
    discount:60,
    categoryid:1,
    brandid:3
}