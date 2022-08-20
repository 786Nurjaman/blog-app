import * as JobScheduler from 'node-schedule'

export class Email{
    static runEmailJobs() {

        this.sendEmailJob();
    }
    static sendEmailJob() {
        // JobScheduler.scheduleJob('send email job', '55 * * * *', () => {
        //     console.log('email job schedule')
        // })
    }
}