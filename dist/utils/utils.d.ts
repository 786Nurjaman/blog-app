import * as Multer from 'multer';
export declare class Utils {
    Max_Token_Time: number;
    multer: Multer.Multer;
    static generateVerificationToken(size?: number): number;
    static encryptPassword(password: string): Promise<any>;
    static comparePassword(password: {
        plainPassword: string;
        encryptedPassword: string;
    }): Promise<any>;
}
