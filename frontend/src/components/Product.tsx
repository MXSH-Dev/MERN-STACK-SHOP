import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

import ProductDetail from "../interfaces/ProductDetail";

// interface ProductDetail {
//   _id: string;
//   name: string;
//   image: string;
//   description: string;
//   brand: string;
//   category: string;
//   price: number;
//   countInStock: number;
//   rating: number;
//   numReviews: number;
// }

interface ProductProps {
  product: ProductDetail;
}

const Product: React.FC<ProductProps> = ({ product }: ProductProps) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{Product.name}</strong>{" "}
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
Rating.defaultProps = {
  color: "#f8e825",
};
export default Product;
