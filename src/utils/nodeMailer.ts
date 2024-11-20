import * as nodeMailer from 'nodemailer'
import * as sendGrid from 'nodemailer-sendgrid-transport'

export class Nodemailer {
    private static initializeTransport() {
        return nodeMailer.createTransport(sendGrid({
            auth: {
                api_key: ''
            }
        }))
    }

    static sendEmail(data: { to: [string], subject: string, html: string }): Promise<any> {
        return Nodemailer.initializeTransport().sendMail({ from: 'nurjaman.shekh@wikiance.in', to: data.to, subject: data.subject, html: data.html })
    }
}