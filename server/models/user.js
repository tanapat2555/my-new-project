const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // สามารถเพิ่มฟิลด์อื่นๆ ตามที่ต้องการได้
});

module.exports = mongoose.model('User', userSchema);
