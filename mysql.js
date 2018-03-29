var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Black',
    password: '123456',
    port: '3306',
    database: 'db_test'
});

connection.connect();

var sql = 'SELECT * FROM t_user WHERE sex = "女"';

connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR]', err.message);
        return;
    }

    console.log(result);
});

sql = 'INSERT INTO t_user (id, name, sex, age) VALUES (?, ?, ?, ?)';
var params = [5, '钱六', '女', 27];

connection.query(sql, params, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR]', err.message);
        return;
    }

    console.log(result);
});

sql = 'UPDATE t_user SET name = ?, sex = ?, age = ? WHERE id = ?';
params = ['貂蝉', '女', 28, 4];

connection.query(sql, params, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR]', err.message);
        return;
    }

    console.log(result);
});

sql = 'DELETE FROM t_user WHERE id = 5';

connection.query(sql, function (err, result) {
    if (err) {
        console.log('[DELETE ERROR]', err.message);
        return;
    }

    console.log(result);
});

connection.end();
