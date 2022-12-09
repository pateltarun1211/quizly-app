const { UserType, QuizType, SubmissionType } = require('./types')
const { User, Quiz, Submission } = require('../models')
const { GraphQLString, GraphQLID, GraphQLList } = require('graphql')

// query for all users
const users = {
    type: new GraphQLList(UserType),
    description: 'Query a list of Users',
    resolve(parent, args){
        return User.find()
    }
}

// Get user by id = returns a single user
const user = {
    type: UserType,
    description: 'query for a user by their id',
    args: {
        id: {type: GraphQLID}
    },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}

/* 
* Get a quiz based on a slug
*/
const quizBySlug = {
    type: QuizType,
    description: 'Query a quiz by its slug',
    args: {
        slug: { type: GraphQLString }
    },
    resolve(parent, args) {
        return Quiz.findOne({
            slug: args.slug
        })
    }
}

const submissionById = {
    type: SubmissionType,
    description: 'Query a submission by ID',
    args: {
        idk: { type: GraphQLID }
    },
    resolve(parent, args) {
        return Submission.findById(args.id)
    }
}

module.exports = {
    users,
    user,
    quizBySlug,
    submissionById
}