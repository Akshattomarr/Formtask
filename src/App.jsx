import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (Object.values(formValues).some((value) => value.trim() !== "")) {
      setItems([...items, formValues]);

      setFormValues({
        name: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
      });
    }
  };

  return (
    <div>
      <h1>Form Input</h1>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
        />{" "}
        <br />
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="number"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <br />
        <input
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <br />
        <button type="submit">Add</button>
      </form>
      {/* Conditionally render the <ol> only if there are items */}
      {items.length > 0 && (
        <ol style={{ display: "flex", flexWrap: "wrap", padding: "16px", margin: "16px", border: "2px solid red", listStyleType: "none" }}>
          {items.map((item, index) => (
            <li key={index} style={{ margin: "8px", padding: "8px", border: "1px solid black", borderRadius: "4px", width: "200px" }}>
              <div>
                <strong>Name:</strong> {item.name}
              </div>
              <div>
                <strong>First Name:</strong> {item.firstName}
              </div>
              <div>
                <strong>Last Name:</strong> {item.lastName}
              </div>
              <div>
                <strong>Email:</strong> {item.email}
              </div>
              <div>
                <strong>Phone Number:</strong> {item.phoneNumber}
              </div>
              <div>
                <strong>Address:</strong> {item.address}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
