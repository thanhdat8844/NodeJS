const mongodb = require("mongodb");
const MongoCilent = mongodb.MongoClient;
const mongoConnect = (callback) => {
  MongoCilent.connect(
    "mongodb+srv://ThanhDat:Anhk0biet@cluster0.ppyhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((cilent) => {
      console.log("Connected!");
      callback(cilent);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = mongoConnect;
