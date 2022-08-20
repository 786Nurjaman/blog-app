import * as nodeMailer from 'nodemailer'
import * as sendGrid from 'nodemailer-sendgrid-transport'

export class Nodemailer {
    private static initializeTransport() {
        return nodeMailer.createTransport(sendGrid({
            auth: {
                api_key: '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'
            }
        }))
    }

    static sendEmail(data: { to: [string], subject: string, html: string }): Promise<any> {
        return Nodemailer.initializeTransport().sendMail({ from: 'nurjaman.shekh@wikiance.in', to: data.to, subject: data.subject, html: data.html })
    }
}