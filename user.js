const mysql = require("mysql2");

// Thiết lập kết nối
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "user_database"
});

// Kết nối đến MySQL
connection.connect((err) => {
    if (err) {
        console.error("Lỗi kết nối: " + err.stack);
        return;
    }
    console.log("Kết nối thành công với ID " + connection.threadId);
});

// Truy vấn danh sách người dùng
connection.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    console.log("Danh sách người dùng:", results);
});

// Đóng kết nối
connection.end();
