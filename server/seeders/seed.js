const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");
const { Product } = require("../models/Product");
const productsSeed = require("./productSeed.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log("Users seeded!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
db.once("open", async () => {
  await Tech.deleteMany({});

  const products = await Product.insertMany(productsSeed);

  console.log("Products seeded!");
  process.exit(0);
});
