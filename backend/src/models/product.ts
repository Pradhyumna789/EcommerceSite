import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Name"],
    },
    photo: {
      type: String,
      required: [true, "Please enter Photo"],
    },
    price: {
      type: Number,
      required: [true, "Please enter Price"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter Stock"],
    },
    category: {
      type: String,
      required: [true, "Please enter Category"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", schema);

// {{name:"14-inch MacBook Pro - Space Grey",photo:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""},{name:"",photo:"",price: , stock: category:""}}