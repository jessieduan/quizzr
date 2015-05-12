db = db.getSiblingDB('quizzr');

db.quizzes.insert([
{
    "quiz_id": 1,
    "name": "CS376",
    "questions": {
        "1": {
            "question_str": "What year was Stanford founded?",
            "correct_answer_id": 1,
            "answers": {
                "1": {
                    "answer": 1885,
                    "control_explanation": "Correct! I should only be shown to control users.",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": "I am an explanation for the correct answer, and I should be voted on.",
                        "upvotes": 2
                    },
                    {
                        "explanation_id": 2,
                        "explanation": "I am a second explanation for the correct answer, and I should be voted on.",
                        "upvotes": 5
                    }]
                },
                "2": {
                    "answer_id": 2,
                    "answer": 1880,
                    "control_explanation": "Wrong year. I should only be shown to control users.",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "No rounding.",
                        "upvotes": 100
                    },
                    {
                        "explanation_id": 2,
                        "explanation": "Second explanation for 1880.",
                        "upvotes": -2
                    }]
                },
                "3": {
                    "answer_id": 3,
                    "answer": 2015,
                    "control_explanation": "Too recent. I should only be shown to control users.",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "You probably saw \'year\' and didn\'t think about the question.",
                        "upvotes": -3
                    }]
                },
                "4": {
                    "answer_id": 4,
                    "answer": 1900,
                    "control_explanation": "Also wrong. I am the control explanation.",
                    "explanations": []
                }
            }
        },
        "2": {
            "question_str": "What's Melissa's last name?",
            "correct_answer_id": 1,
            "answers": {
                "1": {
                    "answer": "Johnson",
                    "control_explanation": "Correct! Control explanation.",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "It's true.",
                        "upvotes": 10
                    }]
                },
                "2": {
                    "answer": "Skortcheva",
                    "control_explanation": "Wrong person. Control explanation.",
                    "explanations": []
                },
                "3": {
                    "answer": "Duan",
                    "control_explanation": "Wrong person. Control explanation.",
                    "explanations": []
                },
                "4": {
                    "answer": "Bernstein",
                    "control_explanation": "Wrong person. Control explanation.",
                    "explanations": []
                }
            }
        }
    }
},
{
    "quiz_id": 2,
    "name": "CS110",
    "questions": {}
}]);

var date1 = new Date(2015, 5, 5);
var date2 = new Date(2015, 5, 6);
var date3 = new Date(2015, 5, 7);
db.users.insert([
{
    "user_id": 1,
    "name": "Melissa Johnson",
    "email": "melj@stanford.edu",
    "is_control": false,
    "quizzes_taken": {
        "1": {
            "time_started": date1,
            "attempts": [{
                "question_id": 1,
                "is_correct": false,
                "answer_given": 2,
                "upvoted_explanation": 1,
                "wrote_explanation": 2
            },
            {
                "question_id": 2,
                "is_correct": true,
                "answer_given": 1,
                "upvoted_explanation": 1,
                "wrote_explanation": 2
            }]
        },
        "2": {
            "time_started": date3,
            "attempts": []
        }
    }
},
{
    "user_id": 2,
    "name": "Maggie Skortcheva",
    "email": "magsko@stanford.edu",
    "is_control": true,
    "quizzes_taken": {
        "1": {
            "time_started": date2,
            "attempts": []
        }
    }
},
{
    "user_id": 3,
    "name": "Jessie Duan",
    "email": "jduan1@stanford.edu",
    "is_control": false,
    "quizzes_taken": {}
}]);
