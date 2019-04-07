const mongoService = require('./mongo-service')

const ObjectId = require('mongodb').ObjectId;

function query(filterBy) {
    // console.log(filterBy);
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('comments');
            return collection.find({}).toArray();
            // if (!filterBy.name && !filterBy.type && !filterBy.inStock) {
            //     return collection.find({}).toArray();
            // } else {
            //     var queryToMongo = {};
            //     queryToMongo.name = { '$regex': filterBy.name };
            //     if (filterBy.type !== 'All') queryToMongo.type = filterBy.type;
            //     if (filterBy.inStock === 'true') queryToMongo.inStock = true;
            //     var sortToMongo = {};
            //     if (filterBy.sortBy === 'name') sortToMongo.name = 1;
            //     else if (filterBy.sortBy === 'price') sortToMongo.price = 1;

            //     return collection.find(queryToMongo).collation({ locale: 'en' }).sort(sortToMongo).toArray();
            // }
        })
}

// function remove(commentId) {
//     commentId = new ObjectId(commentId)
//     return mongoService.connect()
//         .then(db => {
//             const collection = db.collection('comments');
//             return collection.remove({ _id: commentId })
//                 .then(res => {
//                     // comment._id = res.insertedId
//                     // return comment;
//                 });
//         })
// }

function getById(commentId) {
    commentId = new ObjectId(commentId)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('comments');
            return collection.findOne({ _id: commentId });
        });
}

function add(comment) {
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('comments');
            return collection.insertOne(comment)
                .then(res => {
                    comment._id = res.insertedId
                    return comment;
                })
        })
}

// function update(comment) {
//     comment._id = new ObjectId(comment._id);
//     return mongoService.connect()
//         .then(db => {
//             const collection = db.collection('comments');
//             return collection.updateOne({ _id: comment._id }, { $set: comment })
//                 .then(res => {
//                     return comment;
//                 })
//         })
// }

module.exports = {
    query,
    // remove,
    getById,
    add,
    // update
}