import React from "react";

function ExtraDetails({ handleChange, values }) {
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
          <h2>Extra Details</h2>
        </div>
        <hr></hr>
        <div class="col-sm-4">
          <h4>Skills/Languages</h4>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("skill1")}
                name="skill1"
                type="text"
                class="form-control"
                placeholder="Skill 1"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("skill2")}
                name="skill2"
                type="text"
                class="form-control"
                placeholder="Skill 2"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("skill3")}
                name="skill3"
                type="text"
                class="form-control"
                placeholder="Skill 3"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("skill4")}
                name="skill4"
                type="text"
                class="form-control"
                placeholder="Skill 4"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("skill5")}
                name="skill5"
                type="text"
                class="form-control"
                placeholder="Skill 5"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("skill6")}
                name="skill6"
                type="text"
                class="form-control"
                placeholder="Skill 6"
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="col-sm-4">
          <h4>Interest</h4>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("interest1")}
                name="interest1"
                type="text"
                class="form-control"
                placeholder="Interest 1"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("interest2")}
                name="interest2"
                type="text"
                class="form-control"
                placeholder="Interest 2"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("interest3")}
                name="interest3"
                type="text"
                class="form-control"
                placeholder="Interest 3"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("interest4")}
                name="interest4"
                type="text"
                class="form-control"
                placeholder="Interest 4"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("interest5")}
                name="interest5"
                type="text"
                class="form-control"
                placeholder="Interest 5"
              />
            </div>
            <div class="col-sm-4" style={columnstyle}>
              <input
                onChange={handleChange("interest6")}
                name="interest6"
                type="text"
                class="form-control"
                placeholder="Interest 6"
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
      <p style={{ color: "grey" }}>Page 05</p>
    </div>
  );
}

export default ExtraDetails;
