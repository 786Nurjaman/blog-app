export declare class Nodemailer {
    private static initializeTransport;
    static sendEmail(data: {
        to: [string];
        subject: string;
        html: string;
    }): Promise<any>;
}
