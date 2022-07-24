import pool from "../config/connectDB";

const Controller = {
    async homePage(req, res) {
        pool.execute("select * from `product-list`", (err, results, field) => {
            return res.render("home", { data: results });
        });
    },
};

module.exports = Controller;
