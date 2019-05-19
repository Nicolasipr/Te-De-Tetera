/// ====================
/// Puerto
/// ====================
process.env.PORT = process.env.PORT || 3000;


/// ====================
/// ENVIROMENT
/// ====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/// ====================
/// DATABASE
/// ====================

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/te-de-teteras';

} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;