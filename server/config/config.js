const mongoose = require('mongoose');

/// ====================
/// Puerto
/// ====================
process.env.PORT = process.env.PORT || 3000;


/// ====================
/// ENVIROMENT
/// ====================
// Sets connection to our remote database

    // let dev_db_url = 'mongodb+srv://admin:admin@te-de-tetera-4vpbw.mongodb.net/test?retryWrites=true';
    //
    // let mongoDB = process.env.MONGO_URI || dev_db_url;
    // mongoose.connect(mongoDB);
    // mongoose.Promise = global.Promise;
    // let db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

// end code of connection to remote database

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/// ====================
/// DATABASE
/// ====================

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb+srv://admin:admin@te-de-tetera-4vpbw.mongodb.net/test?retryWrites=true';
    // urlDB = 'mongodb://localhost:27017/te-de-teteras';

} else {
    urlDB = 'mongodb://localhost:27017/te-de-teteras';
    // urlDB = 'mongodb+srv://admin:admin@te-de-tetera-4vpbw.mongodb.net/test?retryWrites=true';
}
process.env.URLDB = urlDB;

/// ====================
/// AUTH SEED
/// ====================

process.env.SEED = process.env.SEED || 'este-es-el-secret-dev';

/// ====================
/// Vencimiento Token
/// ====================
// 60 segundos * 60 minutos * 24 horas * 30 dias

process.env.CADUCIDAD_TOKEN = '48h';