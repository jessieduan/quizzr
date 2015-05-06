// quizzes
db = db.getSiblingDB('quizzes');
db.quizzes.insert([
{
    "_id": 1,
    "name": "CS376"
},
{
    "_id": 2,
    "name": "CS110"
}
]);


// questions
db = db.getSiblingDB('questions');
db.questions.insert([
{
    "_id": 1,
    "quiz_id": 1,
    "answer_id": 1,
    "question": "What year was Stanford founded?",
},
{
    "_id": 2,
    "quiz_id": 1,
    "answer_id": "5",
    "question": "What's Melissa's last name?"
}]);


// answers
db = db.getSiblingDB('answers');
db.answers.insert([
{
    "_id": 1,
    "question_id": 1,
    "answer": 1885
},
{
    "_id": 2,
    "question_id": 1,
    "answer": 1880
},
{
    "_id": 3,
    "question_id": 1,
    "answer": 2015
},
{
    "_id": 4,
    "question_id": 1,
    "answer": 1900
},
{
    "_id": 5,
    "question_id": 2,
    "answer": "Johnson"
},
{
    "_id": 6,
    "question_id": 2,
    "answer": "Skortcheva"
},
{
    "_id": 7,
    "question_id": 2,
    "answer": "Duan"
},
{
    "_id": 8,
    "question_id": 2,
    "answer": "Bernstein"
}]);



// explanations
db = db.getSiblingDB('explanations');
db.explanations.insert([
{
    "_id": 1,
    "answer_id": 1,
    "explanation": "I should only be shown to control users.",
    "isControl": true
},
{
    "_id": 2,
    "answer_id": 1,
    "explanation": "I am an explanation for the correct answer, and I should be voted on.",
    "upvotes": 2,
    "isControl": false
},
{
    "_id": 3,
    "answer_id": 1,
    "explanation": "I am a second explanation for the correct answer, and I should be voted on.",
    "upvotes": 5,
    "isControl": false
},
{
    "_id": 4,
    "answer_id": 2,
    "explanation": "No rounding.",
    "upvotes": 100,
    "isControl": false
},
{
    "_id": 5,
    "answer_id": 3,
    "explanation": "You probably saw \'year\' and didn\'t think about the question.",
    "upvotes": -3,
    "isControl": false
},
{
    "_id": 6,
    "question_id": 2,
    "explanation": "Wheeeeeee.",
    "isControl": true
},
{
    "_id": 7,
    "question_id": 2,
    "explanation": "Yay!",
    "upvotes": 4,
    "isControl": true
},
{
    "_id": 8,
    "question_id": 2,
    "explanation": "Wrong person...",
    "upvotes": 4,
    "isControl": false
}]);

// users
db = db.getSiblingDB('users');
db.users.insert([
{
    "_id": 1,
    "name": "Melissa Johnson",
    "email": "melj@stanford.edu",
    "isControl": false
},
{
    "_id": 2,
    "name": "Maggie Skortcheva",
    "email": "magsko@stanford.edu",
    "isControl": true
},
{
    "_id": 3,
    "name": "Jessie Duan",
    "email": "jduan1@stanford.edu",
    "isControl": false
}]);


// userquizzes
db = db.getSiblingDB('userquizzes');
var date1 = new Date(2015, 5, 5);
var date2 = new Date(2015, 5, 6);
var date3 = new Date(2015, 5, 7);
db.userquizzes.insert([
{
    "_id": 1,
    "user_id": 1,
    "quiz_id": 1,
    "time_started": date1
},
{
    "_id": 2,
    "user_id": 1,
    "quiz_id": 2,
    "time_started": date2
},
{
    "_id": 3,
    "user_id": 2,
    "quiz_id": 1,
    "time_started": date3
}]);


// userattempts
db = db.getSiblingDB('userattempts');
db.userattempts.insert([
{
    "_id": 1,
    "userquiz_id": 1,
    "question_id": 1,
    "isCorrect": true,
    "upvoted": true,
    "explanation_id": 2
},
{
    "_id": 2,
    "userquiz_id": 1,
    "question_id": 2,
    "isCorrect": false,
    "upvoted": false,
    "explanation_id": 8
},
{
    "_id": 3,
    "userquiz_id": 3,
    "question_id": 1,
    "isCorrect": false,
    "upvoted": true
}
]);

