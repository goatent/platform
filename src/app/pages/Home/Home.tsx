import React, { useState } from 'react';
import styled from 'styled-components';
import ApolloTest from '../../components/Tests/ApolloTest';
import { useTranslation } from 'react-i18next';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

const Test = styled.div``;
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = props => {
    const [currentState, setCurrentState] = useState(null);
    const { t, i18n } = useTranslation();

    return (
        <Test>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{t('title')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <ApolloTest />
        </Test>
    );
};
export default Home;
