db = db.getSiblingDB('quizzr');

db.quizzes.insert([
{
    "quiz_id": 1,
    "name": "test",
    "questions": {
        "1": {
            "question_str": "You ran a study examining how much males vs females like a particular website. What test would you use to determine whether males and females like the website equally?",
            "correct_answer_id": 2,
            "answers": {
                "1": {
                    "answer": "Chi-square test",
                    "control_explanation": "Chi-square tests are used to test one mean of a population. Here, we need to compare multiple means.",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": "Chi-square tests are used to test one mean of a population. Here, we need to compare multiple means.",
                        "upvotes": 5
                    },
                    {
                        "explanation_id": 2,
                        "explanation": "Chi-squared tests examine how far a value is from 'expected', but can't compare multiple values.",
                        "upvotes": 2
                    }]
                },
                "2": {
                    "answer": "t-test",
                    "control_explanation": "This is correct because we are examining two independent groups, males vs females.",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "This is correct because we are examining two independent groups, males vs females.",
                        "upvotes": 100
                    },
                    {
                        "explanation_id": 2,
                        "explanation": "t-tests are always used to compare two groups.",
                        "upvotes": -2
                    }]
                },
                "3": {
                    "answer": "Paired t-test",
                    "control_explanation": "Paired t-tests are used for two means when their respective subjects have some sort of relationship.",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "Paired t-tests are used for two means when their respective subjects have some sort of relationship.",
                        "upvotes": -3
                    }]
                },
                "4": {
                    "answer": "ANOVA",
                    "control_explanation": "ANOVA tests are used if you have more than two means to compare.",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "ANOVA tests are used if you have more than two means to compare.",
                        "upvotes": 3
                    }]
                }
            }
        },
        "2": {
            "question_str": "Post-test questionnaires (conducted after a usability test) are particularly useful for measuring",
            "correct_answer_id": 4,
            "answers": {
                "1": {
                    "answer": "safety",
                    "control_explanation": "Safety isn't really relevant.",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "Safety isn't really relevant.",
                        "upvotes": 0
                    }]
                },
                "2": {
                    "answer": "efficiency",
                    "control_explanation": "",
                    "explanations": []
                },
                "3": {
                    "answer": "learnability",
                    "control_explanation": "",
                    "explanations": []
                },
                "4": {
                    "answer": "user satisfaction",
                    "control_explanation": "",
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
                "upvoted_explanations": [1],
                "downvoted_explanations": [],
                "wrote_explanation": 2
            },
            {
                "question_id": 2,
                "is_correct": true,
                "answer_given": 1,
                "upvoted_explanations": [1],
                "downvoted_explanations": [],
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
    "quizzes_taken": {
        "1": {
            "time_started": date2,
            "attempts": []
        }
    }
}]);
