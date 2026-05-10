import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> learning
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (B.Tech)</h4>
                <h5>First Year Student</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Relevant Learning: Data Structures & Algorithms, Web Development, Programming Fundamentals, Problem Solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
