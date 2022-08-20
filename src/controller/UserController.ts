import User from "../models/User";
import { Nodemailer } from "../utils/nodeMailer";
import { Utils } from "../utils/utils";
import * as Jwt from 'jsonwebtoken';
import { getEnvironment } from "../environments/env";




export class UserController {
    static async signUp(req, res, next) {
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password
        const verification_token = Utils.generateVerificationToken();
        try {
            const hash = await Utils.encryptPassword(password)
            const data = {
                email: email,
                password: hash,
                username: username,
                verification_token: verification_token,
                verification_token_time: Date.now() + new Utils().Max_Token_Time,
                created_at: new Date(),
                updated_at: new Date()
            }
            let user = await new User(data).save();
            res.send(user)
            await Nodemailer.sendEmail({
                to: [`${email}`],
                subject: 'Signup Email Verification',
                html: `<h1>Verification Token: ${verification_token}</h1>`
            })
        } catch (e) {
            next(e)
        }
    }

    static async verify(req, res, next) {
        const verification_token = req.body.verification_token
        const email = req.user.email
        try {
            const user = await User.findOneAndUpdate({
                email: email, verification_token: verification_token,
                verification_token_time: { $gt: Date.now() }
            }, { verified: true }, { new: true });
            if (user) {
                res.send(user)
            } else {
                throw new Error('Some thing wrong or token expired..!! ')
            }
        } catch (e) {
            next(e)
        }
    }

    static async resendverificationEmail(req, res, next) {
        const email = req.user.email;
        const verificationToken = Utils.generateVerificationToken()
        try {
            const user = await User.findOneAndUpdate({ email: email }, { verification_token_time: Date.now() + new Utils().Max_Token_Time, verification_token: verificationToken })
            if (user) {
                const mailer = await Nodemailer.sendEmail({
                    to: [`${email}`],
                    subject: 'Signup Email Verification',
                    html: `<h1>Verification Token: ${verificationToken}</h1>`
                })
                res.json({
                    success: true
                })
            } else {
                throw new Error('User does not exist ')
            }
        } catch (e) {
            next(e)
        }
    }


    static async login(req, res, next) {
        const password = req.query.password
        const user = req.user;
        try {
            await Utils.comparePassword({
                plainPassword: password,
                encryptedPassword: user.password
            })
            const token = Jwt.sign({ email: user.email, _id: user._id }, getEnvironment().jwt_secret, { expiresIn: '120d' })
            const data = { token: token, user: user }
            res.json(data)
        } catch (e) {
            next(e)
        }
    }


    static async updatePassword(req, res, next) {
        const user_id = req.user._id;
        const password = req.body.password;
        const new_password = req.body.new_password
        try {
            const user: any = await User.findOne({ _id: user_id })
            await Utils.comparePassword({ plainPassword: password, encryptedPassword: user.password })
            const encrytedPassword = await Utils.encryptPassword(new_password)
            const newUser = await User.findOneAndUpdate({ _id: user._id }, { password: encrytedPassword, updated_at: new Date() }, { new: true })
            res.send(newUser)
        } catch (e) {
            next(e)
        }
    }

    static async sendResetPasswordEmail(req, res, next) {
        const email = req.query.email
        const resetPasswordToken = Utils.generateVerificationToken();
        try {
            const updateUser = await User.findOneAndUpdate({ email: email }, {
                updated_at: new Date(), reset_password_token: resetPasswordToken,
                reset_password_token_time: Date.now() + new Utils().Max_Token_Time
            }, { new: true })
            res.send(updateUser)
            await Nodemailer.sendEmail({
                to: [`${email}`],
                subject: 'Reset password email',
                html: `<h1>Verification Token: ${resetPasswordToken}</h1>`
            })
        } catch (e) {
            next(e)
        }
    }

    static async verifyResetPasswordToken(req, res, next) {
        res.json({
            success: true
        })
    }

    static async resetPassword(req, res, next) {
        const user = req.user
        const new_password = req.body.new_password
        try {
            const encryptedPassword = await Utils.encryptPassword(new_password);
            const updateUser = await User.findOneAndUpdate({ _id: user._id }, {
                updated_at: new Date(),
                password: encryptedPassword
            }, { new: true })
            res.send(updateUser)
        } catch (e) {
            next(e)
        }
    }

    static async updateProfilePic(req, res, next) {
        const userId = req.user
        const fileUrl = 'http://localhost:5000/src/uploads/' + req.file.originalname;
        console.log(fileUrl)
        try {
            const user = await User.findOneAndUpdate({ _id: userId._id }, { updated_at: new Date(), profile_pic_url: fileUrl }, { new: true })
            res.send(user)
        } catch (e) {
            next(e)
        }
    }

    static async test(req, res, next) {
        // const user = await User.find({ email: 'nurjamanshekh01@gmail.com' }).setOptions({ explain: 'executionStats' }) // user for single field index
        const user = await User.find({ username: 'Nurjaman Shekh', password: '$2b$10$J8r8tQ8C3EKcy43VCWLcUevQx731XLbllOoT9SY5VkYvZKBOtGg0u' }).setOptions({ explain: 'executionStats' }) //user for compound field index
        res.send(user)
    }
}