import { useState } from "react";

const RegisterationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
    setSubmit(false)
  };

  const handleLastName = (e) => {
      setLastName(e.target.value)
      setSubmit(false)
  };

  const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmit(false);
  };

  const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmit(false);
  };

  const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
      setSubmit(false);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (firstName != '' || lastName != '' || email != '' || password == confirmPassword) {
          setSubmit(true);
          setError(false);
          console.log({firstName, lastName, email, password, confirmPassword});
      } else {
          setError(true);
      };
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submit ? '' : 'none',
        }}>
        <h1>Welcome {firstName} you are successfully registered!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div>

         <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <div className="registerForm">
        <form>
          <h1>Register</h1>

          <label className="firstName">First Name</label>
          <input
            onChange={handleFirstName}
            className="input-firstname"
            value={firstName}
            type="text"
          />

          <label className="lastName">Last Name</label>
          <input
            className="input-lastname"
            type="text"
            value={lastName}
            onChange={handleLastName}
          />

          <label className="email">Email Address</label>
          <input
            className="input-email"
            type="email"
            value={email}
            onChange={handleEmail}
          />

          <label className="password">Password</label>
          <input
          required={true}
            className="input-password"
            type="password"
            value={password}
            onChange={handlePassword}
          />

          <label className="confirm-password">Confirm Password</label>
          <input
            required={true}
            className="input-confirm-password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />

          <button type="submit" className="btn-register" onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterationForm;
