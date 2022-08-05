import pool from '../config/connectDB';
import data from '../config/handleErr';

const Controller = {
    async homePage(req, res) {
        pool.execute('Select * from user1', (err, data) => {
            return res.render('home', { data: data });
        });
    },
};

module.exports = Controller;
