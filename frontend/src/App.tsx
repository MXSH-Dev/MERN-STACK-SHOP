import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import { RouteComponentProps } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact={true} />
            {/* <Route path="/product/:id" component={ProductScreen} /> */}
            <Route
              path="/product/:id"
              render={(props: RouteComponentProps<any>) => (
                <ProductScreen hi="hello from app component" {...props} />
              )}
            />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
