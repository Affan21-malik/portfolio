import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            Passionate first-year B.Tech student interested in web development,
            Artificial Intelligence, and problem solving. Currently learning
            C++, JavaScript, React.js, and Data Structures & Algorithms while
            building projects to improve practical skills. Focused on
            consistency, discipline, and continuous learning.
          </p>
        </div>
        <div className="about-details">
          <div className="about-details-box">
            <h3>Strengths</h3>
            <ul>
              <li>Fast Learner</li>
              <li>Consistency & Discipline</li>
              <li>Self-Motivated</li>
              <li>Dedicated to Self Improvement</li>
            </ul>
          </div>
          <div className="about-details-box">
            <h3>Languages</h3>
            <ul>
              <li>English</li>
              <li>Hindi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
