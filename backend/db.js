const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ash_dbadmin_7467:2bigpingas@sdev255.o7hky5o.mongodb.net/?retryWrites=true&w=majority&appName=SDEV255", { useNewUrlParser: true });
module.exports = mongoose