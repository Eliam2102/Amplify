// api/middlewares/uploadConfig.js
const multer = require('multer');

const storage = multer.memoryStorage();
const uploadConfig = multer({ storage: storage });

module.exports = uploadConfig;
