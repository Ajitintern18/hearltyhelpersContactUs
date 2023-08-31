import React from "react";
import { useForm } from "react-hook-form";
import "./ContactUsPage.css";


const ContactUs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Contact-us">
      <div className="Contact-form">
        <div className="Contact-title">
          <h3>Contact us </h3>
          <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h6>
        </div>

        {/* Contact Us form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="forms-heading">
            <div className="forms-box">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <p>First Name is required</p>}
            </div>

            <div className="forms-box">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <p>Last Name is required</p>}
            </div>
          </div>
          <div className="forms-heading">
            <div className="forms-box">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    // message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="forms-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
              />
              {errors.phoneNumber?.type === "required" && (
                <p>Phone Number is required</p>
              )}
              {errors.phoneNumber?.type === "pattern" && (
                <p>Invalid Phone Number </p>
              )}
            </div>
          </div>

          {/* Radio button */}
          <div className="form-group">
            <label>Which best describes you?</label>
            <div>
              <div className="forms-heading3">
                <label>
                  <input
                    type="radio"
                    value="customer"
                    {...register("selectedOption")}
                  />
                  Customer
                </label>

                <label>
                  <input
                    type="radio"
                    value="employee"
                    {...register("selectedOption")}
                  />
                  Employee
                </label>
              </div>
              <label>
                <input
                  type="radio"
                  value="others"
                  {...register("selectedOption")}
                />
                Others
              </label>
            </div>
          </div>

          {/* message box */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Type your message....."
              id="messagebox"
              {...register("message", { required: true })}
            />
            {errors.message && <p>message write is required </p>}
          </div>
          {/* CheckBox terms */}
          <div className="form-groups">
            <label htmlFor="termsCheckbox">
              <input
                type="checkbox"
                id="termsCheckbox"
                {...register("terms")}
              />{" "}
              I accept the Terms
            </label>
          </div>
          {/* Submit Button  */}
          <button id="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
     
    </div>
    
    
  );
};

export default ContactUs;
