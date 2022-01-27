const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/raversoutlet',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(res => {
  console.log('Database connected')
}).catch(err => {
  console.log(err);
});

module.exports = mongoose.connection;
