import React from "react";

function ProjectsDeveloped({ handleChange, values }) {
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
          <h2>Projects Developed</h2>
        </div>
        <hr></hr>
        <div class="col">
          <h4>Project 1</h4>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("pr1title")}
                name="pr1title"
                type="text"
                class="form-control"
                placeholder="Title*"
                value={values.pr1title}
              />
            </div>
          </div>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("pr1link")}
                name="pr1link"
                type="text"
                class="form-control"
                placeholder="Link*"
                value={values.pr1link}
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("pr1description")}
                name="pr1description"
                type="text"
                class="form-control"
                placeholder="Description*"
                value={values.pr1description}
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="col">
          <h4>Project 2</h4>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("pr2title")}
                name="pr2title"
                type="text"
                class="form-control"
                placeholder="Title*"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("pr2link")}
                name="pr2link"
                type="text"
                class="form-control"
                placeholder="Link*"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row g-3">
            <div class="col" style={columnstyle}>
              <input
                onChange={handleChange("pr2description")}
                name="pr2description"
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
      <p style={{ color: "grey" }}>Page 03</p>
    </div>
  );
}

export default ProjectsDeveloped;
