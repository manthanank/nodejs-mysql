//Name of the file : insert-mysql.js
const mysql = require('mysql');

const connect =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});


const insert_R = 'INSERT INTO details(name,age) VALUE(?,?)';
//establishing connection
connect.getConnection(function(err, connection){
    
  //Inserting a record into details
   connection.query(insert_R,['rejii',24], function(err,res){
    if(err) throw err;
    else {
        console.log('Details added successfully');
    }
  });

//releasing connection
 connection.release();

});	