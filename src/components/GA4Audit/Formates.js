import React from "react";
import { Card } from "react-bootstrap";
import pdf from "../../images/pdf.png";
import slides from "../../images/slides.png";
import powerpoint from "../../images/powerpoint.jpeg";

const Formates = () => {
  return (
    <div>
      <Card
        style={{
          width: "100%",
          borderRadius: "25px",
          backgroundColor: "floralwhite",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Card.Title>
            Your audit is ready! please click on any of the formates below to
            download it:
          </Card.Title>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <img
              src={pdf}
              alt="pdf"
              style={{ width: "35px", height: "35px" }}
            />
            <img
              src={powerpoint}
              alt="powerpoint"
              style={{ width: "35px", height: "35px" }}
            />
            <img
              src={slides}
              alt="slides"
              style={{ width: "35px", height: "35px" }}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Formates;
