import React from "react";
import { borderRadius } from "@material-ui/system";

function EducationDetails({ handleChange, values }) {
  const columnstyle = {
    padding: "30px 25px 05px 25px",
    fontFamily: "Arial",

    // backgroundColor: "skyblue",
    borderRadius: 7
  };
  const divstyle = {
    padding: "5px 50px 05px 50px",
    fontFamily: "Arial",
    //backgroundColor: "blue",
    margin: "0px 50px 05px 50px"
  };
  const leftButton = {
    float: "right",
    color: "white",
    borderRadius: 6,
    backgroundColor: "#CF0063"
  };
  const rightButton = {
    float: "left",
    color: "white",
    borderRadius: 6,
    backgroundColor: "#CF0063"
  };
  return (
    <div style={divstyle}>
      <form>
        <div style={columnstyle}>
          <h2>Education Details</h2>
        </div>
        <hr></hr>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                type="text"
                class="form-control"
                placeholder="College/University*"
                onChange={handleChange("college")}
                name="college"
                value={values.college}
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("collegeDs")}
                name="collegeDs"
                type="date"
                class="form-control"
                placeholder="dd-mm-yyyy"
                value={values.collegeDs}
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                name="collegeDe"
                onChange={handleChange("collegeDe")}
                type="date"
                class="form-control"
                placeholder="dd-mm-yyyy"
                value={values.collegeDe}
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row g-3">
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("collegeQualification")}
                name="collegeQualification"
                type="text"
                class="form-control"
                placeholder="Qualification*"
                value={values.collegeQualification}
              />
            </div>
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("collegeDescription")}
                name="collegeDescription"
                type="text"
                class="form-control"
                placeholder="Description*"
                value={values.collegeDescription}
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("school")}
                name="school"
                type="text"
                class="form-control"
                placeholder="School*"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("schoolDs")}
                name="schoolDs"
                type="date"
                class="form-control"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                ronChange={handleChange("schoolDe")}
                name="schoolDe"
                type="date"
                class="form-control"
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row g-3">
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("schoolQualification")}
                name="schoolQualification"
                type="text"
                class="form-control"
                placeholder="Qualification*"
              />
            </div>
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("schoolDescription")}
                name="schoolDescription"
                type="text"
                class="form-control"
                placeholder="Description*"
              />
            </div>
          </div>
        </div>
        {/* <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <button style={leftButton} onClick={}>
                {" "}
                Back{" "}
              </button>
            </div>
            <div class="col" style={columnstyle}>
              <button type="submit" style={rightButton}>
                Next >
              </button>
            </div>
          </div>
        </div> */}
      </form>
      <hr></hr>
      <p style={{ color: "grey" }}>Page 02</p>
    </div>
  );
}

export default EducationDetails;
