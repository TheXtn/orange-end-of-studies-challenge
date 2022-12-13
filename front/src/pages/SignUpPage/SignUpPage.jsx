import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

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
    const user = { name, lastName, email, password };
    console.log(user);
    fetch(`http://localhost:5000/user/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setEmail("");
        setPassword("");
        setName("");
        setPassword("");
      }
    });
  };

  return (
    <section className="login">
      <div className="login__container">
        <div className="login__content">
          <h1 className="d-flex justify-content-center">SignUp</h1>
          <Form
            name="myForm"
            className="form mb-2 mt-1"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <FormGroup className="w-100">
              <Label for="name" className="label">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name..."
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </FormGroup>
            <FormGroup className="w-100">
              <Label for="lastName" className="label">
                LastName
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your lastName..."
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </FormGroup>
            <FormGroup className="w-100">
              <Label for="email" className="label">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email..."
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </FormGroup>

            <FormGroup className="mt-2 w-100">
              <Label for="password" className="label">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password..."
                type="text"
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
                SignUp
              </Button>
            </div>
            {/* )} */}
          </Form>
          <a href="/login">Already have an account?</a>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
