import React from "react";
import "./index.scss";

const Stepper = () => {
  return (
    <div>
      <div>Project</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="stepper-div">
          <div className="stepper">
            <div className="step-num">1</div>
          </div>
        </div>

        <div style={{ width: 50 }}>
          <hr
            style={{
              border: "1px solid #1890ff",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
