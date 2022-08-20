"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    static runEmailJobs() {
        this.sendEmailJob();
    }
    static sendEmailJob() {
        // JobScheduler.scheduleJob('send email job', '55 * * * *', () => {
        //     console.log('email job schedule')
        // })
    }
}
exports.Email = Email;
