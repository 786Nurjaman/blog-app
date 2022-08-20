import { Database } from "./database";
import { Email } from "./email";

export class Jobs{
    static runRequiredJobs() {
        Database.runDatabaseJobs();
        Email.runEmailJobs();
    }
}