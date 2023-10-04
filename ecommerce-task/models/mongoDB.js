const mongoose = require("mongoose");
const {Schema , model} = mongoose;

const personSchema = new Schema({

    social_id:String,
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    dob: Date,
    role:String,
    profileImage: {
        data: Buffer, // Store image data as a Buffer
        contentType: String // Store the image's MIME type
      },
    password: String,
});

const Person = model('Person',personSchema);

const productSchema = new Schema({
    name:String,
    price: Number,
    company: String,
    quantity: Number,
    productImage: {
        data: Buffer, // Store image data as a Buffer
        contentType: String // Store the image's MIME type
    },

});
const Product = model('Product',productSchema);

const cartSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: "Person", // Reference to the User model
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  });
  
const Cart = model("Cart", cartSchema);

module.exports = {Person,Product,Cart};