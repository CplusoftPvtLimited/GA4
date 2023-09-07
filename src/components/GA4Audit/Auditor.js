import React, { useState, useEffect } from "react";
import { Container, Form, Button, ProgressBar, Card } from "react-bootstrap";
import AuditInfo from "./AuditInfo";
import Reports from "./Report";
import Formates from "./Formates";

const Audit = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const isBackButtonDisabled = currentStep === 1;

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
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <AuditInfo />;
      case 2:
        return <Reports />;

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
        return <Formates />;
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
