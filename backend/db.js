const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ash_dbadmin_7467:fuckyou@sdev255.o7hky5o.mongodb.net/?retryWrites=true&w=majority&appName=SDEV255",
  {useNewURLParser: true})
module.exports = mongoose