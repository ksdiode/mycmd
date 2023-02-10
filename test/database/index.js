import mongoose from 'mongoose';

async function connect(url, f = async () => {}) {
  console.log(url);
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .then(f)
    .catch((e) => console.error(e));
}

export default connect;
