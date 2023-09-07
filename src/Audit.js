import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ProgressBar,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import English from "../src/images/English.png";
import French from "../src/images/French.webp";
import Spanish from "../src/images/spanish.avif";
import pdf from "../src/images/pdf.png";
import slides from "../src/images/slides.png";
import powerpoint from "../src/images/powerpoint.jpeg";

const Audit = () => {
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const isBackButtonDisabled = currentStep === 1;

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
  const renderThemeSign = (themeName) => {
    return selectedTheme === themeName ? " ✓" : "";
  };

  const renderLanguageSign = (language) => {
    return selectedLanguage === language ? " ✓" : "";
  };

  const handleThemeClick = (themeName) => {
    setSelectedTheme(themeName);
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  // const handleNextClick = () => {
  //   setCurrentStep(currentStep + 1);
  // };
  // const simulateProgressBar = () => {
  //   // setCurrentStep(4);
  //   const interval = setInterval(() => {
  //     if (progress < 100) {
  //       setProgress(progress + 1);
  //     } else {
  //       clearInterval(interval);
  //       if (currentStep === 3) {
  //         setCurrentStep(4);
  //       }
  //     }
  //   }, 10);
  // };

  useEffect(() => {
    if (currentStep === 3 || currentStep === 4) {
      const interval = setInterval(() => {
        if (progress < 100) {
          setProgress(progress + 1);
        } else {
          clearInterval(interval);
          setCurrentStep(4);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [currentStep, progress]);

  const handleNextClick = () => {
    // if (currentStep === 2) {
    //   // When on the second page (currentStep === 2)
    //   console.log("Current step: " + currentStep);
    //   setShowProgressBar(true);

    //   const interval = setInterval(() => {
    //     if (progress < 100) {
    //       setProgress(progress + 10);
    //     } else {
    //       clearInterval(interval);
    //       setCurrentStep(currentStep + 1);
    //     }
    //   }, 1000);
    // } else {
    setCurrentStep(currentStep + 1);
    // }
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
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
                      selectedLanguage === "English"
                        ? "0 0 5px 2px blue"
                        : "none",
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
                      selectedLanguage === "French"
                        ? "0 0 5px 2px blue"
                        : "none",
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
                      selectedLanguage === "Spanish"
                        ? "0 0 5px 2px blue"
                        : "none",
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
      case 2:
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
                    boxShadow: selectedFormats.includes("PDF")
                      ? "0 0 5px 2px blue"
                      : "none",
                  }}
                  // onClick={() => handleAmountClick(10)}
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
                  // onClick={() => handleAmountClick(20)}
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
                  // onClick={() => handleAmountClick(30)}
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

      case 3:
        return (
          <div>
            <h4>Running Audit</h4>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Checking inactive data streams</Card.Title>
                <div className="mt-4" style={{ width: "100%" }}>
                  <ProgressBar now={progress} label={`${progress}%`} />
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      case 4:
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
                  Your audit is ready! please click on any of the formates below
                  to download it:
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
      default:
        return null;
    }
  };

  const renderBackButton = () => {
    if (currentStep === 1 || currentStep === 2) {
      return (
        <Button variant="secondary" onClick={handleBackClick}>
          Back
        </Button>
      );
    } else {
      return null;
    }
  };

  const renderNextButton = () => {
    if (currentStep === 2) {
      return (
        <Button variant="primary" onClick={handleNextClick}>
          Next
        </Button>
      );
    } else if (currentStep < 3) {
      return (
        <Button variant="primary" onClick={handleNextClick}>
          Next
        </Button>
      );
    } else {
      return null;
    }
  };
  return (
    // <Container
    //   className="d-flex flex-column justify-content-center align-items-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   {renderCurrentStep()}
    //   <div
    //     className="mt-4"
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       gap: "380px",
    //       maxWidth: "40%",
    //     }}
    //   >
    //     <Button
    //       variant="secondary"
    //       className="mr-2"
    //       onClick={handleBackClick}
    //       disabled={isBackButtonDisabled}
    //     >
    //       Back
    //     </Button>
    //     {currentStep < 2 ? (
    //       <Button variant="primary" onClick={handleNextClick}>
    //         Next
    //       </Button>
    //     ) : (
    //       <Button variant="primary" disabled>
    //         Next
    //       </Button>
    //     )}
    //   </div>
    // </Container>
    // <Container
    //   className="d-flex flex-column justify-content-center align-items-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   {renderCurrentStep()}

    //   <div
    //     className="mt-4"
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       gap: "10px",
    //       width: "40%",
    //     }}
    //   >
    //     <Button variant="secondary" onClick={handleBackClick}>
    //       Back
    //     </Button>
    //     {currentStep === 2 ? (
    //       <Button variant="primary" onClick={handleNextClick}>
    //         Next
    //       </Button>
    //     ) : (
    //       currentStep < 3 && (
    //         <Button variant="primary" onClick={handleNextClick}>
    //           Next
    //         </Button>
    //       )
    //     )}
    //   </div>
    // </Container>
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      {renderCurrentStep()}

      <div
        className="mt-4"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          width: "40%",
        }}
      >
        {renderBackButton()}
        {renderNextButton()}
      </div>
    </Container>
  );
};

export default Audit;
