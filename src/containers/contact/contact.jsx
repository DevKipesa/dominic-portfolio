import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent/header";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object and append form fields
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("description", formData.description);
    form.append("_gotcha", ""); // hidden honeypot field to prevent spam

    // Use fetch API to send form data to Getform endpoint
    fetch("https://getform.io/f/aqonkxya", {
      method: "POST",
      body: form,
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            description: "",
          });
        } else {
          alert("Form submission failed!");
        }
      })
      .catch((error) => {
        alert("Form submission failed!");
      });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form onSubmit={handleSubmit} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
              <input type="hidden" name="_gotcha" style={{ display: "none" }} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
