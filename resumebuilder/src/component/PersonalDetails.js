import React from "react";
import EducationDetails from "./EducationDetails";
import { Form } from "react-bootstrap";
import validator from "validator";
import { useState } from "react";
function PersonalDetails({ handleChange, values }) {
  //   function submithandler(e) {
  //     e.preventDefault();
  //     return (
  //       <div>
  //         <EducationDetails />
  //       </div>
  //     );
  //   }
  const validate = e => {
    if (e.target.value == null) {
      return false;
    } else return true;
  };
  const [error, seterror] = useState(false);
  const next = e => {
    console.log("inside next");
    //var sam = Form.checkValidity();
    //  console.log(sam);
    // await Form.checkValidity();

    // e.preventDefault();
    // if (validator.isEmpty(values.firstName)) {
    //   seterror(true);
    // } else {
    //   handleNextClick();
    // }
    // Form.CheckValidity();
    //handleNextClick();
    //var bool = e.checkValidity();
    //console.log("hellllllllllllllllllo:::" + bool);
  };
  const columnstyle = {
    padding: "30px 50px 05px 50px",
    fontFamily: "Arial"
  };
  const divstyle = {
    padding: "20px 50px 05px 50px",
    fontFamily: "Arial"
  };
  const leftButton = {
    float: "right",
    borderRadius: 6
  };
  const rightButton = {
    flost: "left",
    color: "white",
    borderRadius: 6,
    backgroundColor: "#E24767"
  };

  return (
    <div style={divstyle}>
      <h2>Personal Details</h2>
      <hr></hr>
      <Form>
        <div>
          <div class="row g-3">
            <Form.Group class="col" style={columnstyle}>
              <Form.Control
                validator={validate}
                value={values.fname}
                name="fname"
                onChange={handleChange("fname")}
                required
                type="text"
                class="form-control"
                placeholder="First name*"
              />
            </Form.Group>
            <div class="col" style={columnstyle}>
              <input
                name="lname"
                onChange={handleChange("lname")}
                required
                type="text"
                class="form-control"
                placeholder="Last name*"
                value={values.lname}
              />
            </div>
          </div>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                name="email"
                onChange={handleChange("email")}
                required
                type="email"
                class="form-control"
                placeholder="Email*"
                value={values.email}
              />
            </div>
            <div class="col" style={columnstyle}>
              <input
                required
                name="pnumber"
                onChange={handleChange("pnumber")}
                type="text"
                class="form-control"
                placeholder="Phone Number*"
                value={values.pnumber}
              />
            </div>
          </div>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                type="text"
                class="form-control"
                placeholder="Your Website"
                onChange={handleChange("website")}
                name="website"
                value={values.website}
              />
            </div>
            <div class="col" style={columnstyle}>
              <input
                type="text"
                class="form-control"
                placeholder="GitHub"
                aria-label="GitHub"
                onChange={handleChange("github")}
                name="github"
                value={values.github}
              />
            </div>
          </div>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                type="text"
                className="form-control"
                placeholder="Linked In"
                onChange={handleChange("linkedin")}
                name="linkedin"
                value={values.linkedin}
              />
            </div>
            <div class="col" style={columnstyle}>
              <input
                type="text"
                class="form-control"
                placeholder="Twitter"
                onChange={handleChange("twitter")}
                name="twitter"
                value={values.twitter}
              />
            </div>
          </div>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                type="text"
                class="form-control"
                placeholder="Facebook"
                onChange={handleChange("fb")}
                name="fb"
                value={values.fb}
              />
            </div>
            <div class="col" style={columnstyle}>
              <input
                type="text"
                className="form-control"
                placeholder="Instagram"
                onChange={handleChange("insta")}
                name="insta"
              />
            </div>
          </div>
        </div>
        {/* <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <button s disabledtyle={leftButton} disabled>
                Back
              </button>
            </div>
            <div class="col" style={columnstyle}>
              <button type="submit" style={rightButton} onClick={next}>
                Next
              </button>
            </div>
          </div>
        </div> */}
      </Form>
      <hr></hr>
      <p style={{ color: "grey" }}>Page 01</p>
    </div>
  );
}

export default PersonalDetails;
export { Form };
