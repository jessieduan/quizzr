db = db.getSiblingDB('quizzr');

db.quizzes.insert([
{
    "quiz_id": 1,
    "name": "test",
    "questions": {
        "1": {
            "question_str": "Which of the following would lead to a more significant result in a t-test comparing the means of two groups?",
            "correct_answer_id": 1,
            "control_explanation": "A t-test measures whether two things have the same mean, so a larger difference between two means gives a more significant result.",
            "answers": {
                "1": {
                    "answer": "Larger difference between the two means",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": "A t-test measures whether two things have the same mean, so a larger difference between two means gives a more significant result.",
                        "upvotes": 1
                    },
                    ]
                },
                "2": {
                    "answer": "Higher variance in each group",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "Higher variance means that the data is more scattered and less concentrated around a mean, so we can’t have as much confidence in the result.",
                        "upvotes": 3
                    },
                    ]
                },
                "3": {
                    "answer": "Fewer samples in each group",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "Fewer samples means we have less information, so the result is less significant.",
                        "upvotes": 1
                    }]
                },
                "4": {
                    "answer": "More overlap between samples of each group",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "More overlap means that it’s harder to tell if the two populations are really separate..",
                        "upvotes": 3
                    }]
                }
            }
        },
        "2": {
            "question_str": "A home security system frequently goes off, even though most of the time there is no security issue. However, every time there has been an intruder, the system has alerted the homeowner. This system has:",
            "correct_answer_id": 4,
            "control_explanation": "Precision is the percentage of positive predictions that are correct, while recall is the percentage of positive cases that we caught.",
            "answers": {
                "1": {
                    "answer": "High precision and high recall",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The system does not have high precision because very few of its positive predictions are actually correct.",
                        "upvotes": 0
                    }]
                },
                "2": {
                    "answer": "High precision and low recall",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The system does not have high precision because very few of its positive predictions are actually correct.",
                        "upvotes": 0
                    }]
                },
                "3": {
                    "answer": "Low precision and high recall",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The system has low precision because very few of its positive predictions are actually correct. It also has high recall because it has correctly gone off each time there was an intruder.",
                        "upvotes": 0
                    }]
                },
                "4": {
                    "answer": "Low precision and low recall",
                    "control_explanation": "",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The system has high recall because it has correctly gone off each time there was an intruder.",
                        "upvotes": 0
                    }]
                }
            }
        },
        "3": {
            "question_str": "You ran a study examining how much males vs females like a particular website. What test would you use to determine whether males and females like the website equally?",
            "correct_answer_id": 2,
            "control_explanation": "An unpaired t-test is used to compare two independent groups.",
            "answers": {
                "1": {
                    "answer": "Chi-square test",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": "A chi-square test looks at how far a statistic is from the mean.",
                        "upvotes": 1
                    },
                    {
                        "explanation_id": 2,
                        "explanation": "Chi-squared tests examine how far a value is from 'expected', but can't compare multiple values.",
                        "upvotes": 2
                    }]
                },
                "2": {
                    "answer": "Unpaired t-test (student’s t-test)",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "This is correct because we are examining two independent groups, males vs females.",
                        "upvotes": 1
                    },
                    {
                        "explanation_id": 2,
                        "explanation": "An unpaired t-test is used to compare two independent groups.",
                        "upvotes": 0
                    }]
                },
                "3": {
                    "answer": "Paired t-test",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "A paired t-test is used to compare results from one group measured at two time points, but this study is examining two independent groups.",
                        "upvotes": 1
                    }]
                },
                "4": {
                    "answer": "ANOVA",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "ANOVA could probably be used here, but we had to choose the first test listed that would work, which is the unpaired t-test.",
                        "upvotes": 0
                    }]
                }
            }
        },
        "4": {
            "question_str": "A paper says “Our results show that the perceived visual complexity of websites is a strong predictor of appeal (F(1) = 23.96, p < .001)”. Which of the following is true?",
            "correct_answer_id": 2,
            "control_explanation": "The p-value measures the probability that we would see our data, given that the null hypothesis is true. Here, our null hypothesis is that perceived visual complexity is not a strong predictor of appeal.",
            "answers": {
                "1": {
                    "answer": "There is a <.1% chance that, given an F-value of 23.96, the perceived visual complexity of websites is not a strong predictor of appeal",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": 'This statement doesn’t really make sense because you never make a conditional statement like “given an F-value of x”.',
                        "upvotes": 2
                    }]
                },
                "2": {
                    "answer": "There is a <.1% chance that, given that perceived visual complexity of websites is not a strong predictor of appeal, we would’ve seen these results",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The p-value measures the probability that we would see our data, given that the null hypothesis is true. Here, our null hypothesis is that perceived visual complexity is not a strong predictor of appeal.",
                        "upvotes": 2
                    }]
                },
                "3": {
                    "answer": "The F-value of 23.96 is higher than .1% of all F-values",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "Actually, the opposite is true: the F-value of 23.96 is less than <.1% of all F-values",
                        "upvotes": 2
                    }]
                },
                "4": {
                    "answer": "<.1% of users did not perceive visual complexity of websites as a strong predictor of appeal",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The p-value says nothing about percentage of users.",
                        "upvotes": 1
                    }]
                }
            }
        },
        "5": {
            "question_str": "We are conducting a statistical test comparing 3 means across 42 numbers. How many degrees of freedom will our test have?",
            "correct_answer_id": 4,
            "control_explanation": "We have 3 means, so we have 42-3=39 degrees of freedom.",
            "answers": {
                "1": {
                    "answer": "42",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": "You forgot to subtract 3 (we have N-3 degrees of freedom)",
                        "upvotes": 2
                    }]
                },
                "2": {
                    "answer": "41",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "We have N-3 degrees of freedom, so this is 39, not 41",
                        "upvotes": -1
                    }]
                },
                "3": {
                    "answer": "40",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "We have N-3 degrees of freedom, so this is 39, not 40",
                        "upvotes": 0
                    }]
                },
                "4": {
                    "answer": "39",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "We have 3 means, so we have 42-3=39 degrees of freedom",
                        "upvotes": 2
                    }]
                }
            }
        },
        "6": {
            "question_str": "Which of the following would lead to a less significant result in a t-test comparing the means of two groups?",
            "correct_answer_id": 3,
            "control_explanation": "A t-test measures whether two groups have the same mean. Fewer samples means that we have less information, so we can’t be as confident in our results, and therefore our results are less significant.",
            "answers": {
                "1": {
                    "answer": "Lower variance in each group",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": 'Lower variance means that data is less scattered and more concentrated around the mean, so we have more confidence in the result.',
                        "upvotes": 0
                    }]
                },
                "2": {
                    "answer": "Less overlap between samples of each group",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "Less overlap means that the two populations are more separate, so we have a more significant result.",
                        "upvotes": 0
                    }]
                },
                "3": {
                    "answer": "Fewer samples in each group",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "Fewer samples means we have less information, so the result is less significant",
                        "upvotes": 2
                    }]
                },
                "4": {
                    "answer": "Larger difference between the two means",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "A t-test measures whether two things have the same mean, so a larger difference between two means gives a more significant result.",
                        "upvotes": 1
                    }]
                }
            }
        },
        "7": {
            "question_str": "Every time you upload pictures to Facebook, Facebook identifies your friends in the photos and asks if you’d like to tag them. Facebook never identifies friends incorrectly, but doesn’t identify every friend. This photo tagging feature has:",
            "correct_answer_id": 2,
            "control_explanation": "Precision is the percentage of positive predictions that are correct, while recall is the percentage of positive cases that we caught.",
            "answers": {
                "1": {
                    "answer": "High precision and high recall",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": 'The system does not have high recall because it doesn’t recognize every face.',
                        "upvotes": 2
                    }]
                },
                "2": {
                    "answer": "High precision and low recall",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The system has high precision because it always identifies correctly when it does identifies a friend, but low recall because it doesn’t identify every friend.",
                        "upvotes": 3
                    }]
                },
                "3": {
                    "answer": "Low precision and high recall",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The system has high precision because it always identifies correctly when it does identifies a friend, but low recall because it doesn’t identify every friend.",
                        "upvotes": 2
                    }]
                },
                "4": {
                    "answer": "Low precision and low recall",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The system has high precision because it always identifies correctly when it does identifies a friend.",
                        "upvotes": 2
                    }]
                }
            }
        },
        "8": {
            "question_str": "Google is considering changing its signature color. They ran a study to see which color would lead users to make the most searches, by assigning each user to either bright yellow, bright green, or the old color, and then giving each user his/her assigned color when visiting www.google.com. They then compared the average number of searches per user among those groups. What test would you use to decide which color leads to the most searches per user? (choose the first test listed if multiple apply)",
            "correct_answer_id": 4,
            "control_explanation": " ANOVA is used to compare >2 groups, and here we’re comparing 3 groups.",
            "answers": {
                "1": {
                    "answer": "Chi-square test",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": 'A chi-square test looks at how far a statistic is from the mean.',
                        "upvotes": 2
                    }]
                },
                "2": {
                    "answer": "Unpaired t-test (student’s t-test)",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "An unpaired t-test is used to compare two independent groups.",
                        "upvotes": 4
                    }]
                },
                "3": {
                    "answer": "Paired t-test",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "A paired t-test is used to compare results from one group measured at two time points.",
                        "upvotes": 2
                    }]
                },
                "4": {
                    "answer": "ANOVA",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "ANOVA could probably be used here, but we had to choose the first test listed ANOVA is used to compare >2 groups, and here we’re comparing 3 groups.",
                        "upvotes": 4
                    }]
                }
            }
        },
        "9": {
            "question_str": "A study says “Our results show that teams with beginners tend to put forth more effort (t = 1.87, p < .06)”. Which of the following is true?",
            "correct_answer_id": 4,
            "control_explanation": "The p-value measures the probability that we would see our data, given that the null hypothesis is true. Here, our null hypothesis is that teams with beginners put forth as much or less effort as teams without beginners.",
            "answers": {
                "1": {
                    "answer": ">94% of teams with beginners that were studied put forth more effort than all teams without beginners.",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": 'The p-value says nothing about percentage of users.',
                        "upvotes": 0
                    }]
                },
                "2": {
                    "answer": "There is a <6% chance that, given an t-value of 1.87, a team with beginners would have put in less effort than a team with no beginners",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "This statement doesn’t really make sense because you never make a conditional statement like “given an F-value of x”",
                        "upvotes": 1
                    }]
                },
                "3": {
                    "answer": "There is a <6% chance that, given a t-value of 1.87, a team that put in more effort than average would consist of beginners.",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "This statement doesn’t really make sense because you never make a conditional statement like “given an F-value of x”",
                        "upvotes": 2
                    }]
                },
                "4": {
                    "answer": "There is a <6% chance that, given a t-value of 1.87, a team that put in more effort than average would consist of beginners",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "The p-value measures the probability that we would see our data, given that the null hypothesis is true. Here, our null hypothesis is that teams with beginners put forth as much or less effort as teams without beginners.",
                        "upvotes": 0
                    }]
                }
            }
        },
        "10": {
            "question_str": "We are conducting a statistical test comparing 2 means across 5 numbers. How many degrees of freedom will our test have?",
            "correct_answer_id": 2,
            "control_explanation": "We have 2 means, so we have 5-2=3 degrees of freedom.",
            "answers": {
                "1": {
                    "answer": "There is a <.1% chance that, given an F-value of 23.96, the perceived visual complexity of websites is not a strong predictor of appeal",
                    "explanations": [
                    {
                        "explanation_id": 1,
                        "explanation": 'We have N-2 degrees of freedom, so this is 3, not 2',
                        "upvotes": 0
                    }]
                },
                "2": {
                    "answer": "There is a <.1% chance that, given that perceived visual complexity of websites is not a strong predictor of appeal, we would’ve seen these results",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "We have 2 means, so we have 5-2=3 degrees of freedom.",
                        "upvotes": 3
                    }]
                },
                "3": {
                    "answer": "The F-value of 23.96 is higher than .1% of all F-values",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "We have N-2 degrees of freedom, so this is 3, not 4",
                        "upvotes": 0
                    }]
                },
                "4": {
                    "answer": "<.1% of users did not perceive visual complexity of websites as a strong predictor of appeal",
                    "explanations": [{
                        "explanation_id": 1,
                        "explanation": "You forgot to subtract 2 (we have N-2 degrees of freedom)",
                        "upvotes": 0
                    }]
                }
            }
        },
    }
},
]);

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
