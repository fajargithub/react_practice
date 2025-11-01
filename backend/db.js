import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_practice_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

export default db;