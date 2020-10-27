import { User } from "../models/User";


let fireBird = require('node-firebird');

let options = require('../modules/database-connection.module');

export class AuthRepository {
    getUser(username: string): Promise<User> {
        return new Promise((resolve, rejects) => {
            fireBird.attach(options.opt, (err, db) => {
                if (err) {
                    throw err;
                }
                db.query("SELECT CONTACT_LOGIN, CONTACT_PASS FROM ACC_CONTACTS WHERE CONTACT_LOGIN = ?", [username], (err, result) => {
                    if (err) {
                        console.log("Error while reading database!");
                        throw err;
                    }
                    db.detach();
                    console.log(result);
                    if (result.length == 0) {
                        resolve(null);
                    } else {
                        const res = this.convertDataType(result[0]);
                        res.username = res.CONTACT_LOGIN;
                        res.password = res.CONTACT_PASS;
                        delete res.CONTACT_LOGIN;
                        delete res.CONTACT_PASS;
                        resolve(res);
                    }
                });
            });
        });
    }

    private convertDataType(obj: any): any {
        for (let [key, value] of Object.entries(obj)) {
            console.log(key, value);
            if (Buffer.isBuffer(value)) {
                obj[key] = value.toString();
            }
        }
        return obj;
    };
}

