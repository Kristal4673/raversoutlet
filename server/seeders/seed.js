const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");
const { Product } = require("../models");
const productsSeed = require("./productSeed.json");
const { Category } = require("../models");
const categorySeed = require("./categorySeed.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Product.deleteMany({});
    const products = await Product.create(productsSeed);
    await Category.create(categorySeed);

    console.log("Products seeded!");
    console.log("Users seeded!");
    console.log("Categories seeded!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
