// ContactForm.js
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

 
   const [status, setStatus] = useState("");
   const [errors, setErrors] = useState({});

//validate Sumbit
const validateForm = () => {
      let newErrors = {};
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }
  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }
  return newErrors;
};


// Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


   // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted with data: " + JSON.stringify(formData));
    //validation part
      const validationErrors = validateForm();

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
       return;
       }

      // If no errors → call API
       console.log("Form submitted:", formData);
       setErrors({});
    //validation part end

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error connecting to server.");
    }
  };

    return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{
          border: errors.name ? "1px solid red" : "1px solid #ccc",}}
        />
         {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
          border: errors.email ? "1px solid red" : "1px solid #ccc",
}}
        />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br /><br />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
      border: errors.message ? "1px solid red" : "1px solid #ccc",
    }}
        />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        <br /><br />

        <button type="submit">Send</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );


};

export default Contact;