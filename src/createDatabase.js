const mongoose = require('mongoose');
const subscriberModel = require('./models/subscribers');
const data = require('./data');

// Connect to DATABASE
const DATABASE_URL =
  'mongodb+srv://yatharthshahrawat97:HTWHMq5mj1tbEd9P@nodeexpressprojects.6n4kl6k.mongodb.net/?retryWrites=true&w=majority';
//* used mongoDB driver
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database created...'));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  // console.log(connection)
  await subscriberModel.insertMany(data);
  await mongoose.disconnect();
};
refreshAll();
