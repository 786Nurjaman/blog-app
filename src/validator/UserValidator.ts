import { body, query } from 'express-validator'
import User from '../models/User'

export class UserValidators {
    static signUp() {
        return [body('email', 'Email is required').isEmail().custom((email, { req }) => {
            return User.findOne({ email: email }).then(user => {
                if (user) {
                    throw new Error('User already exist');
                } else {
                    return true;
                }
            })
        }),
        body('password', 'Password is required').isAlphanumeric()
            .isLength({ min: 8, max: 20 }).withMessage('Password can be from 8-20 charecters only'),
        body('username', 'Username is required').isString()]
    }

    static verifyUser() {
        return [body('verification_token', 'Verification token is required').isNumeric()]
    }
    static updatePassword() {
        return [body('password', 'Password is required').isAlphanumeric(),
        body('confirm_password', 'Confirm password is required').isAlphanumeric(),
        body('new_password', 'New password is required').isAlphanumeric().custom((new_password, { req }) => {
            if (new_password === req.body.confirm_password) {
                return true;
            } else {
                req.errorStatus = 422;
                throw new Error('Confirm password does not match');
            }
        })]
    }
    static resendverificationEmail() {
        return [query('email', 'Email is required').isEmail()]
    }

    static login() {
        return [query('email', 'Email is required').isEmail().custom((email, { req }) => {
            return User.findOne({ email: email }).then(user => {
                if (user) {
                    req.user = user
                    return true;
                } else {
                    throw new Error('User does not exist..!!')
                }
            })
        }), query('password', 'Password is Required').isAlphanumeric()]
    }

    static sendResetPasswordEmail() {
        return [query('email', 'Email is required').isEmail().custom((email, { req }) => {
            return User.findOne({ email: email }).then(user => {
                if (user) {
                    return true;
                } else {
                    throw new Error('Email does not exist..!!')
                }
            })
        })]
    }

    static verifyResetPasswordToken() {
        return [query('reset_password_token', 'Reset password token is required').isNumeric().custom((token, { req }) => {
            return User.findOne({ reset_password_token: token, reset_password_token_time: { $gt: Date.now() } }).then((user) => {
                if (user) {
                    return true;
                } else {
                    throw new Error('Token does not exist please request new one')
                }
            })
        })]
    }
    static resetPassword() {
        return [body('email', 'Email is required').isEmail().custom((email, { req }) => {
            return User.findOne({ email: email }).then(user => {
                if (user) {
                    req.user = user
                    return true;
                } else {
                    throw new Error('User does not exist..!!')
                }
            })
        }), body('new_password', 'New password is required').isAlphanumeric().custom((newPassword, { req }) => {
            if (newPassword === req.body.confirm_password) {
                return true;
            } else {
                throw new Error('Confirm password and new password does not match')
            }
        }),
        body('confirm_password', 'Confirm password is required').isAlphanumeric(),
        body('reset_password_token', 'Token is required').isNumeric().custom((token, { req }) => {
            if (Number(req.user.reset_password_token) === Number(token)) {
                return true;
            } else {
                req.errorStatus = 422;
                throw new Error('Reset password token is invalid. Please try again..!')
            }
        })]
    }

    static updateProfilePic() {
        return [body('profile_pic').custom((profilePic, { req }) => {
            if (req.file) {
                return true;
            } else {
                throw new Error("File not uploaded.!!")
            }
        })]
    }

}