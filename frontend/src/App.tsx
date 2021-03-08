import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { RouteComponentProps } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Switch>
              {/* <Route path="/product/:id" component={ProductScreen} /> */}
              <Route path="/login" exact={true}>
                <LoginScreen></LoginScreen>
              </Route>
              <Route path="/register" exact={true}>
                <RegisterScreen></RegisterScreen>
              </Route>
              <Route path="/profile" exact={true}>
                <ProfileScreen />
              </Route>
              <Route
                path="/product/:id"
                render={(props: RouteComponentProps<any>) => (
                  <ProductScreen hi="hello from app component" {...props} />
                )}
              />
              <Route
                path="/cart/:id?"
                render={(props: RouteComponentProps<any>) => (
                  <CartScreen {...props} />
                )}
              />
              <Route path="/" component={HomeScreen} exact={true} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
