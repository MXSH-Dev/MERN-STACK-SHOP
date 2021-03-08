import express from "express";

import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       // res.status(404), json({ message: "product not found" });
//       res.status(404);
//       throw new Error("Product not found");
//     }
//   })
// );

export default router;
