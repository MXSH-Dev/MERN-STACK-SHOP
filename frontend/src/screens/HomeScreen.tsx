import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

// import ProductDetail from "../interfaces/ProductDetail";
// import axios from "axios";

import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { useTypedSelector } from "../hooks/useTypedSelector";

import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen: React.FC = () => {
  // const [products, setProducts] = useState<ProductDetail[] | undefined>();

  const dispatch = useDispatch();

  const { loading, error, products } = useTypedSelector(
    (state) => state.productList
  );

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(actionCreators.listProducts());
  }, [dispatch]);

  // const products: ProductDetail[] = [];

  return (
    <div className="">
      <h1>Lastest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products
            ? products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
            : ""}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
