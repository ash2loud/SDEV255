const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ash_dbadmin_7467:44826173@sdev255.o7hky5o.mongodb.net/?retryWrites=true&w=majority&appName=SDEV255", { useNewUrlParser: true });
module.exports = mongoose