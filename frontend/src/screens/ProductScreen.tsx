import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { RouteComponentProps } from "react-router-dom";
// import ProductDetail from "../interfaces/ProductDetail";
// import axios from "axios";

import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { useTypedSelector } from "../hooks/useTypedSelector";

import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductDetail from "../interfaces/ProductDetail";

const ProductScreen: React.FC<RouteComponentProps<any>> = ({ match }) => {
  // const [product, setProduct] = useState<ProductDetail | undefined>(
  //   {} as ProductDetail
  // );

  const dispatch = useDispatch();

  const { loading, product, error } = useTypedSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    // const fetchProduct = async () => {
    //   const { data } = await axios.get(`/api/products/${match.params.id}`);
    //   setProduct(data);
    // };

    // fetchProduct();
    dispatch(actionCreators.listProductDetail(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product?.image} alt={product?.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product?.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product ? product.rating : 0}
                  text={`${product ? product.numReviews : 0} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product?.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product?.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product
                        ? product?.countInStock > 0
                          ? "In Stock"
                          : "Out of Stock"
                        : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product ? product.countInStock === 0 : true}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default ProductScreen;
