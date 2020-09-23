import React from "react";

function About() {
  return (
    <React.Fragment>
      <div style={aboutStyle}>
        <h1>About</h1>
        <p>
          This app will help you have all your day goal listed and increase more
          productivities to your schedule You can do the following with this
          app:
        </p>
        <p>Add a todo name</p>
        <p>Make it as done using the checkbox</p>
        <p>Delete the todo name</p>
        <p>Add as many todo as you want</p>
        <p>
          ...And some more features will be added for a better experience...<span role="img">&#128540;</span>
        </p>
      </div>
    </React.Fragment>
  );
}

const aboutStyle = {
  backgroundColor: "#f0e68c",
  padding: '20px 40px',
};
export default About;
