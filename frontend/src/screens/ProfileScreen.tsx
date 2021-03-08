import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, useParams } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";

import {
  getUserDetails,
  updateUserProfile,
} from "../state/action-creators/index";
import { useTypedSelector } from "../hooks/useTypedSelector";
import UserInformation from "../interfaces/userInfo";
import { AuthActionType } from "../state/action-types";

const ProfileScreen: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetailsState = useTypedSelector((state) => state.userDetails);
  const { loading, error, user } = userDetailsState;

  const userLoginState = useTypedSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;

  const userUpdateProfileState = useTypedSelector(
    (state) => state.userUpdateProfile
  );
  const { success } = userUpdateProfileState;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || success) {
        dispatch({ type: AuthActionType.USER_UPDATE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    }

    const updatedProfile: UserInformation = {
      _id: user?._id,
      name: name,
      email: email,
      password: password,
    };

    dispatch(updateUserProfile(updatedProfile));
  };
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2> My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
