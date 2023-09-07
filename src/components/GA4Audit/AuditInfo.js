import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import English from "../../images/English.png";
import French from "../../images/French.webp";
import Spanish from "../../images/spanish.avif";

const AuditInfo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const renderLanguageSign = (language) => {
    return selectedLanguage === language ? " ✓" : "";
  };

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div>
          <h4>Audit Info</h4>
        </div>
        <Form>
          <Form.Group
            controlId="reportName"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Form.Label>Report Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter report name"
              style={{ width: "100%" }}
            />
          </Form.Group>
        </Form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "45px",
        }}
      >
        <div>
          <h4>Report Language</h4>
        </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            paddingTop: "10px",
            gap: "30px",
          }}
        >
          <Button
            variant="light"
            className="rupee"
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "rgb(227, 227, 227)",
              boxShadow:
                selectedLanguage === "English" ? "0 0 5px 2px blue" : "none",
            }}
            onClick={() => handleLanguageClick("English")}
          >
            <img
              src={English}
              alt="English Flag"
              style={{ width: "60px", height: "60px" }}
            />
            <br />
            <span> English</span>
            {renderLanguageSign("English")}
          </Button>
          <Button
            variant="light"
            className="rupee"
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "rgb(227, 227, 227)",
              boxShadow:
                selectedLanguage === "French" ? "0 0 5px 2px blue" : "none",
            }}
            onClick={() => handleLanguageClick("French")}
          >
            <img
              src={French}
              alt="English Flag"
              style={{ width: "60px", height: "60px" }}
            />
            <br />
            French{renderLanguageSign("French")}
          </Button>
          <Button
            variant="light"
            className="rupee"
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "rgb(227, 227, 227)",
              boxShadow:
                selectedLanguage === "Spanish" ? "0 0 5px 2px blue" : "none",
            }}
            onClick={() => handleLanguageClick("Spanish")}
          >
            <img
              src={Spanish}
              alt="English Flag"
              style={{ width: "60px", height: "60px" }}
            />
            <br />
            Spanish{renderLanguageSign("Spanish")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuditInfo;
