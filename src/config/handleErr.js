import { renderSync } from 'node-sass';
import pool from '../config/connectDB';

const query = () => {
    return new Promise((resolve, reject) => {
        pool.execute('select * from user1', (err, results, fields) => {
            if (err) return reject(new Error(err));
            resolve(results);
        });
    });
};

query().then(
    (data) => {
        console.log('Data:', data);
        module.exports = data;
    },
    (err) => {
        console.log(err + '');
    }
);
