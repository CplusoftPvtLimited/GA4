import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  ListGroup,
} from "react-bootstrap";

const Accounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Account 1", properties: ["Property 1", "Property 2"] },
    { id: 2, name: "Account 2", properties: ["Property 3", "Property 4"] },
    { id: 3, name: "Account 3", properties: ["Property 5", "Property 6"] },
    { id: 4, name: "Account 4", properties: ["Property 7", "Property 8"] },
    { id: 5, name: "Account 5", properties: ["Property 9", "Property 10"] },
  ]);

  const [filteredAccounts, setFilteredAccounts] = useState(accounts);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(null);

  const handleAccountSearch = (searchTerm) => {
    // Filter accounts based on the search term
    const filtered = accounts.filter((account) =>
      account.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAccounts(filtered);
    setSelectedAccount(null); // Clear selected account when searching
  };

  const handlePropertySearch = (searchTerm) => {
    // Filter properties based on the search term
    if (selectedAccount) {
      const filteredProperties = selectedAccount.properties.filter((property) =>
        property.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSelectedProperty(filteredProperties);
    }
  };

  const handleAccountClick = (accountId) => {
    // Find the selected account by ID
    const selected = accounts.find((account) => account.id === accountId);
    setSelectedAccount(selected);
    setSelectedProperty(selected.properties);
  };

  return (
    <Container
    // style={{ backgroundColor: "#f0f0f0" }}
    >
      <h4 className="text-center">Sample Cart</h4>
      <Row className="justify-content-center mt-4">
        <Col md={4} className="bg-white p-3">
          <h5>Accounts</h5>
          <Form style={{ paddingTop: "15px", paddingBottom: "15px" }}>
            <FormControl
              type="text"
              placeholder="Search accounts..."
              onChange={(e) => handleAccountSearch(e.target.value)}
            />
          </Form>
          <ListGroup>
            {/* List of filtered accounts */}
            {filteredAccounts.map((account) => (
              <ListGroup.Item
                key={account.id}
                action
                className={
                  selectedAccount && selectedAccount.id === account.id
                    ? "selected-account"
                    : ""
                }
                onClick={() => handleAccountClick(account.id)}
              >
                {account.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={4} className="bg-white p-3">
          <h5>Properties</h5>
          <Form style={{ paddingTop: "15px", paddingBottom: "15px" }}>
            <FormControl
              type="text"
              placeholder="Search properties..."
              onChange={(e) => handlePropertySearch(e.target.value)}
            />
          </Form>
          <div>
            {/* List of properties */}
            <ListGroup>
              {selectedProperty &&
                selectedProperty.map((property, index) => (
                  <div style={{ paddingTop: "7px" }} key={index}>
                    <ListGroup.Item>{property}</ListGroup.Item>
                  </div>
                ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Accounts;
