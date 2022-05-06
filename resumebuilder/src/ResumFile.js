import React from "react";

function ResumeFile({ values }) {
  return (
    <div style={{ float: "center" }}>
      <h1>
        {values.fname} {values.lname}
      </h1>
      <table
        style={{
          float: "center",
          margin: "0 auto",
          borderWidth: "1px",
          borderColor: "black",
          borderCollapse: "collapse",
          border: "3px solid rgb(0, 0, 0)"
        }}
      >
        <tr>
          <h4>Personal Details:</h4>
        </tr>
        <tr>
          <td>Email : </td>
          <td>{values.email}</td>
        </tr>
        <tr>
          <td>Phone : </td>
          <td>{values.pnumber}</td>
        </tr>
        <tr>
          <td>Website : </td>
          <td>{values.website}</td>
          <td>{values.linkedin}</td>
        </tr>
        <tr>
          <td>FaceBook : </td>
          <td>{values.fb}</td>
          <td>{values.gitHub}</td>
        </tr>
        <tr>
          <td>Twitter : </td>
          <td>{values.twitter}</td>
          <td>{values.insta}</td>
        </tr>
        <tr>
          <h4>Educational Details:</h4>
        </tr>
        <tr>
          <td>College : </td>
          <td>{values.college}</td>
          <td>College Date: </td>
          <td>{values.collegeDs} -</td>
        </tr>
        <tr>
          <td>Qualification: </td>
          <td>{values.collegeQualification}</td>
          <td>{values.collegeDe}</td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>{values.collegeDesciption}</td>
        </tr>
        <tr>
          <td>School: </td>
          <td>{values.school}</td>
        </tr>
        <tr>
          <td>School Date:</td>
          <td>{values.schoolDs}-</td>
          <td>{values.schoolDe}</td>
        </tr>
        <tr>
          <td>Qualification: </td>
          <td>{values.schoolQualification}</td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>{values.schoolDescription}</td>
        </tr>
        <tr>
          <td>Project Details</td>
          <td>{values.pr1title}</td>
          <td>{values.pr1oneLink}</td>
          <td>{values.pr1description}</td>
        </tr>
        <tr>
          <td></td>
          <td>{values.pr2Title}</td>
          <td>{values.pr2link}</td>
          <td>{values.pr2description}</td>
        </tr>

        <tr>
          <h4>Work Experience:</h4>
          <td>{values.exp1institute}</td>
          <td>{values.exp1position}</td>
        </tr>
        <tr>
          <td></td>
          <td>{values.exp1duration}</td>
          <td>{values.exp1description}</td>
        </tr>
        <tr>
          <td></td>
          <td>{values.exp2institute}</td>
          <td>{values.exp2position}</td>
        </tr>
        <tr>
          <td></td>
          <td>{values.exp2duration}</td>
          <td>{values.exp2description}</td>
        </tr>
        <tr>
          <h4>Skills:</h4>
          <td>{values.skill1}</td>
          <td>{values.skill2}</td>
          <td>{values.skill3}</td>
        </tr>
        <tr>
          <td></td>
          <td>{values.skill4}</td>
          <td>{values.skill5}</td>
          <td>{values.skill6}</td>
        </tr>
        <tr>
          <h4>Interests:</h4>
          <td>{values.interest1}</td>
          <td>{values.interest2}</td>
          <td>{values.interest3}</td>
        </tr>
        <tr>
          <td></td>
          <td>{values.interest4}</td>
          <td>{values.interest5}</td>
          <td>{values.interest6}</td>
        </tr>
      </table>
    </div>
  );
}

export default ResumeFile;
