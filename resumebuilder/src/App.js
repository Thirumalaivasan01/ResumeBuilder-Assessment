import "./App.css";
import "./component/Appbarfixed";
import Appbarfixed from "./component/Appbarfixed";
import PersonalDetails from "./component/PersonalDetails";
import EducationDetails from "./component/EducationDetails";
import ExperienceDetails from "./component/ExperienceDetails";
import ExtraDetails from "./component/ExtraDetails";
import ProjectsDeveloped from "./component/ProjectsDeveloped";
import React, { useState } from "react";
//import { Form } from "react-bootstrap";

import { Form } from "./component/PersonalDetails";
import ResumeFile from "./ResumFile";

function App() {
  const [values, setvalues] = useState({
    // //personal details
    // first_name: "",
    // last_name: "",
    // email: "",
    // phone_number: "",

    //personal_details
    fname: "",
    lname: "",
    email: "",
    pnumber: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    fb: "",
    insta: "",
    //education_details
    college: "",
    collegeDs: "",
    collegeDe: "",
    collegeQualification: "",
    collegeDescription: "",
    school: "",
    schoolDs: "",
    schoolDe: "",
    schoolQualification: "",
    schoolDescription: "",
    //experience_details
    exp1institute: "",
    exp1position: "",
    exp1duration: "",
    exp1description: "",
    exp2institute: "",
    exp2position: "",
    exp2duration: "",
    exp2description: "",
    //extra_details
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",

    //projects_developed
    pr1title: "",
    pr1link: "",
    pr1description: "",
    pr2title: "",
    pr2link: "",
    pr2description: ""
  });
  const [step, setstep] = useState(1);
  const nextStep = () => {
    if (step < 5) {
      if (step == 1) {
        if (values.fname == "") alert("First name is required");
        else if (values.lname == "") alert("Last name is required");
        else if (values.email == "") alert("Email is required");
        else if (values.email.indexOf("@") == -1) alert("give proper Email Id");
        else if (values.pnumber == "") alert("Phone number is required");
        else setstep(step + 1);
      } else if (step == 2) {
        if (values.college == "") alert("College Name is required");
        else if (values.collegDs == "") alert("College Start date is required");
        else if (values.collegeDe == "") alert("Colleg end date is required");
        else if (values.collegeQualification == "")
          alert("College Qualification is required");
        else if (values.collegeDescription == "")
          alert("College Description is required");
        else setstep(step + 1);
      } else if (step == 3) {
        if (values.pr1title == "") alert("Project title is required");
        else if (values.pr1link == "") alert("project Link is required");
        else if (values.pr1description == "")
          alert("Project desciption is required");
        else setstep(step + 1);
      } else if (step == 4) {
        if (values.exp1institute == "") alert("Organization name is required");
        else if (values.exp1position == "") alert("Position is required");
        else if (values.exp1duration == "") alert("duration is required");
        else if (values.exp1description == "") alert("Description is required");
        else setstep(step + 1);
      }
    } else if (step == 5) {
      setstep(step + 1);
      console.log("Completed:  " + values.email + values.first_name);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setstep(step - 1);
    }
  };
  const handleChange = name => e => {
    setvalues({ ...values, [name]: e.target.value });
  };
  const leftButton = {
    float: "center",
    borderRadius: 6,
    padding: "5px",
    margin: "0px 30px 30px 30px",
    backgroundColor: "#E24767",
    color: "white"
  };
  const leftDisButton = {
    float: "center",
    borderRadius: 6,
    padding: "5px",
    margin: "0px 30px 30px 30px"
  };
  const rightButton = {
    // flost: "left",
    color: "white",
    borderRadius: 6,
    backgroundColor: "#E24767",
    margin: "0px 30px 30px 30px ",
    padding: "5px"
  };
  return (
    <div className="App">
      {/* <form> */}
      <Appbarfixed></Appbarfixed>
      {
        {
          1: <PersonalDetails handleChange={handleChange} values={values} />,
          2: <EducationDetails handleChange={handleChange} values={values} />,
          3: <ProjectsDeveloped handleChange={handleChange} values={values} />,
          4: <ExperienceDetails handleChange={handleChange} values={values} />,
          5: <ExtraDetails handleChange={handleChange} values={values} />,
          6: <ResumeFile handleChange={handleChange} values={values} />
        }[step]
      }
      {/* <PersonalDetails></PersonalDetails> */}
      {/* <EducationDetails /> */}
      {/* <ExperienceDetails /> */}
      {/* <ExtraDetails></ExtraDetails> */}
      {/* <ProjectsDeveloped /> */}
      <div>
        {step == 6 ? (
          <div class="col-sm-12">
            <button style={leftButton} onClick={prevStep}>
              Back
            </button>
          </div>
        ) : (
          <div className="col">
            {step > 1 ? (
              <button style={leftButton} onClick={prevStep}>
                {"< Back"}
              </button>
            ) : (
              <button disabled style={leftDisButton}>
                {"< Back"}
              </button>
            )}

            <button style={rightButton} onClick={nextStep}>
              {step === 5 ? "Submit" : "Next >"}
            </button>
          </div>
        )}
      </div>
      {/* </form> */}
    </div>
  );
}

export default App;
