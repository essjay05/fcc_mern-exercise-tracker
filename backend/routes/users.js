// Constants
const router = require('express').Router();
let User = require('../models/user.model');

// CRUD Routes
    // Read All Users
    router.route('/').get(( req, res ) => {
        User.find()
            .then( users => res.json(users))
            .catch( err => res.status(400).json(`Error: ${err}`));
    })

    // Read One User

    // Create User
    router.route('/add').post(( req, res ) => {
        const username = req.body.username;

        const newUser = new User({username});

        newUser.save()
            .then(() => res.json(`Username ${username} successfully added!`))
            .catch( err => res.status(400).json(`Error: ${err}`));
    })

    // Update User

    // Delete User

// Export routes
module.exports = router;