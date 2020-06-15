// +--------+
// | Insert |
// +--------+

// inserts a document into the collection

db.posts.insert({
    title: 'Post One',
    body: 'Hi Deb, how are you doing?',
    category: 'text-message',
    id: 0,
    tags: ['interest', 'love'],
    date: Date(),
    user: {
        name: 'Davin',
        status: 'single',
    },
});


db.posts.insertMany([
    {
        title: 'Post Two',
        body: 'How was the conference meeting?',
        category: 'Checkin',
        date: Date(),
    },
    {
        title: 'Post Three',
        body: 'How was your day?',
        category: 'Checkin',
        date: Date(),
    },
    {
        title: 'Post Four',
        body: 'Do you also notice a difference in the way I text and the way I speak?...I\'m starting to think that I\'m in love',
        category: 'Worry',
        date: Date(),
    },
]);


// +-------+
// | Query |
// +-------+

// find
// seems to return every document in the collection an array?
db.posts.find();
db.posts.find().pretty();

// where
// pass in an object
db.posts.find({ category: 'Checkin' });

// .find().sort()
// pass in an object into sort
// {field : /pm 1} 
// +1 for ascending
// -1 for descending
// ascending and descending in what sense?
// in the sense of the field
// look into comparators?

// .find().count()
// to count the number of documents


// .find().limit()
// pass in a number to limit the number of documents
// seems to be fixed order

// iterating through collections
// .find().forEach(function)

db.posts.find().forEach(doc => {
    print(doc.tags);
});

// .findOne()
// finds the first document that matches a given object

// +--------+
// | Update |
// +--------+

// db.collections.update(doc-spec, object that will replace, options (upsert--update+insert)
// update replaces
// to only change only the field add the $set key in the object passed
// for the most part, you will be using set when updating

db.posts.update({ title: 'Post Five' },
    {
        body: 'I don\'t feel like I\'m doing enough to "deserve you".',
    },
    {
        upsert: true,
    });

// $set operator
db.posts.update({ body: 'I don\'t feel like I\'m doing enough to "deserve you".', },
    {
        $set: {
            title: 'Post Five',
            body: 'I don\'t every want to you to ever feel like I\'m not putting in any effort.',

        },
    });

// $inc operator, 
// pass in object with the field you want to increment and then the amount to increment by

// $rename, to change a field name

// +--------+
// | Delete |
// +--------+

// normally identify for object id
// collections.remove


// Document
db.posts.update({ title: 'Post Five' },
    {
        $set: {
            tags: [
                'love', 'insecurity',
            ],
        },
    });

// $elemMatch; finds all that have match an element
db.posts.find({
    
});

// creating an index
// $text, $search;  a text search
// $gt, $gte, $lt, $lte


// think about conditionals like if not exist or if null
