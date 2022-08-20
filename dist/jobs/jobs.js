"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jobs = void 0;
const database_1 = require("./database");
const email_1 = require("./email");
class Jobs {
    static runRequiredJobs() {
        database_1.Database.runDatabaseJobs();
        email_1.Email.runEmailJobs();
    }
}
exports.Jobs = Jobs;
