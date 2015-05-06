#!/bin/bash

mongo users --eval "db.dropDatabase();"
mongo quizzes --eval "db.dropDatabase();"