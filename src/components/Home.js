import React from "react";
import { Link, withRouter } from "react-router-dom";

const Home = () => {
  return (
    <div className="content text-center">
      <h1>Welcome to Nepal and Nepalese cultural Fun Facts!</h1>
      <p>Choose a fun fact from the link below.</p>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/fact1">
              <button>
                <h2>Fun Fact 1</h2>
              </button>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/fact2">
              <button>
                <h2>Fun Fact 2</h2>
              </button>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/fact3">
              <button>
                <h2>Fun Fact 3</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);