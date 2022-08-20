"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nodemailer = void 0;
const nodeMailer = require("nodemailer");
const sendGrid = require("nodemailer-sendgrid-transport");
class Nodemailer {
    static initializeTransport() {
        return nodeMailer.createTransport(sendGrid({
            auth: {
                api_key: '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'
            }
        }));
    }
    static sendEmail(data) {
        return Nodemailer.initializeTransport().sendMail({ from: 'nurjaman.shekh@wikiance.in', to: data.to, subject: data.subject, html: data.html });
    }
}
exports.Nodemailer = Nodemailer;
