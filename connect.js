import { createPool } from "mysql2";
export const connect =createPool({
    host:'localhost',
    user:'root',
    password:'Loki@123',
    database:'pillowmart'
}).promise();