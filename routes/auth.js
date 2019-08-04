const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
        return {
            [error.param]: error.msg,
        };
    },
});

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post(
    '/register',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please provide a valid email address').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    ],
    async (req, res) => {
        // check for validation errors
        const errorFormatter = ({ msg, param }) => {
            return { [param]: msg };
        };
        const errors = myValidationResult(req); //.formatWith(errorFormatter);
        console.log(errors.array());
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors });
        }
        // check if user already exists
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists)
            return res
                .status(400)
                .json({ errors: [{ msg: 'This user is already registered', param: 'email' }] });

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        // save new user to DB
        try {
            const newUser = await user.save();
            res.send(newUser);
        } catch {
            res.status(400).send(err);
        }
    }
);

// @route   POST api/users/login
// @desc    Login user
// @access  Public
router.post(
    '/login',
    [
        check('email', 'Please provide a valid email address').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    ],
    async (req, res) => {
        // check for validation errors
        const errors = myValidationResult(req); //.formatWith(errorFormatter);
        if (!errors.isEmpty()) {
            // reduce error array into simple error object
            const errorResult = errors.array().reduce((accum, err) => {
                accum[Object.keys(err)[0]] = err[Object.keys(err)[0]];
                return accum;
            }, {});
            return res.status(400).json(errorResult);
        }
        // check if user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res
                .status(400)
                .json({ errors: [{ msg: 'This email is not registered', param: 'email' }] });
        // check password
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass)
            return res
                .status(400)
                .json({ errors: [{ msg: 'Incorrect password', param: 'password' }] });

        // generate jwt
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
        };
        // Sign Token
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.header('auth-token', token).json({ token: token });
    }
);

module.exports = router;
