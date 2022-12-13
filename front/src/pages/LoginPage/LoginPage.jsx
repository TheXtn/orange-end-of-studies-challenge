import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./loginPage.css";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setFormErrors(validate(formData));
    //if (Object.keys(formErrors).length === 0) {
    const user = { email, password };
    console.log(user);
    fetch(`http://localhost:5000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("user", user.email);
        setEmail("");
        setPassword("");
        window.location.href = "http://localhost:3000";
      }
    });
  };

  return (
    <section className="login">
      <div className="login__container">
        <div className="login__content">
          <h1 className="d-flex justify-content-center">Login</h1>
          <Form
            name="myForm"
            className="form mb-2 mt-1"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <FormGroup className="w-100">
              <Label for="exampleName" className="label">
                Email
              </Label>
              <Input
                id="exampleName"
                name="nom"
                placeholder="Tapez votre Nom..."
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </FormGroup>

            <FormGroup className="mt-2 w-100">
              <Label for="examplePrenom" className="label">
                Password
              </Label>
              <Input
                id="examplePrenom"
                name="prenom"
                placeholder="Tapez votre Prenom..."
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>

            {/* {!isSubmit && ( */}
            <div className="d-flex justify-content-center">
              <Button
                //disabled={Object.keys(formErrors).length !== 0}
                type="submit"
              >
                Login
              </Button>
            </div>
            {/* )} */}
          </Form>
          <a href="/signUp">Dont have an account?</a>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
