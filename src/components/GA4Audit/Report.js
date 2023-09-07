import React, { useState } from "react";
import pdf from "../../images/pdf.png";
import slides from "../../images/slides.png";
import powerpoint from "../../images/powerpoint.jpeg";
import { Button } from "react-bootstrap";

const Report = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedFormats, setSelectedFormats] = useState([]);

  const handleFormatClick = (formatId) => {
    if (selectedFormats.includes(formatId)) {
      setSelectedFormats(selectedFormats.filter((id) => id !== formatId));
    } else {
      setSelectedFormats([...selectedFormats, formatId]);
    }
  };
  const renderTickSign = (formatName) => {
    return selectedFormats.includes(formatName) ? " ✓" : "";
  };
  const handleThemeClick = (themeName) => {
    setSelectedTheme(themeName);
  };

  const renderThemeSign = (themeName) => {
    return selectedTheme === themeName ? " ✓" : "";
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "45px",
        }}
      >
        <div>
          <h4>Report Theme</h4>
        </div>
        <div
          style={{
            display: "flex",
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
                selectedTheme === "Modern" ? "0 0 5px 2px blue" : "none",
            }}
            onClick={() => handleThemeClick("Modern")}
          >
            Modern{renderThemeSign("Modern")}
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "45px",
        }}
      >
        <div>
          <h4>Report Format</h4>
        </div>
        <div
          style={{
            display: "flex",
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
              boxShadow: selectedFormats.includes("PDF")
                ? "0 0 5px 2px blue"
                : "none",
            }}
            onClick={() => handleFormatClick("PDF")}
          >
            <img
              src={pdf}
              alt="pdf"
              style={{ width: "60px", height: "60px" }}
            />
            <br />
            PDF{renderTickSign("PDF")}
          </Button>
          <Button
            variant="light"
            className="rupee"
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "rgb(227, 227, 227)",
              boxShadow: selectedFormats.includes("PowerPoint")
                ? "0 0 5px 2px blue"
                : "none",
            }}
            onClick={() => handleFormatClick("PowerPoint")}
          >
            <img
              src={powerpoint}
              alt="powerpoint"
              style={{ width: "60px", height: "60px" }}
            />
            <br />
            Power Point{renderTickSign("PowerPoint")}
          </Button>
          <Button
            variant="light"
            className="rupee"
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "rgb(227, 227, 227)",
              boxShadow: selectedFormats.includes("GoogleSlides")
                ? "0 0 5px 2px blue"
                : "none",
            }}
            onClick={() => handleFormatClick("GoogleSlides")}
          >
            <img
              src={slides}
              alt="slides"
              style={{ width: "60px", height: "60px" }}
            />
            <br />
            Google Slides{renderTickSign("GoogleSlides")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Report;
