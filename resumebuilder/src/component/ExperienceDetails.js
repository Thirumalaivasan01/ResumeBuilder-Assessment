import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExperienceDetails({ handleChange, values }) {
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
          <h2>Experience Details</h2>
        </div>
        <hr></hr>
        <div class="col-sm-4">
          <h4>Experience 1</h4>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                required
                onChange={handleChange("exp1institute")}
                name="exp1institute"
                type="text"
                class="form-control"
                placeholder="Institute/Organisation*"
                value={values.exp1institute}
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("exp1position")}
                name="exp1position"
                type="text"
                class="form-control"
                placeholder="Position"
                value={values.exp1position}
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("exp1duration")}
                name="exp1duration"
                type="text"
                class="form-control"
                placeholder="Duration"
                value={values.exp1duration}
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("exp1description")}
                name="exp1description"
                type="text"
                class="form-control"
                placeholder="Description*"
                value={values.exp1description}
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="col-sm-4">
          <h4>Experience 2</h4>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("exp2institute")}
                name="exp2institute"
                type="text"
                class="form-control"
                placeholder="Institute/Organisation*"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("exp2position")}
                name="exp2position"
                type="text"
                class="form-control"
                placeholder="Position"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("exp2duration")}
                name="exp2duration"
                type="text"
                class="form-control"
                placeholder="Duration"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("exp2description")}
                name="exp2description"
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
              <button style={leftButton}> Back </button>
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
      <p style={{ color: "grey" }}>Page 04</p>
    </div>
  );
}

export default ExperienceDetails;
