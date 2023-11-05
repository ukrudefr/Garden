import React from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'
import coccinelle from '../icons/coccinelle.png'
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export default function Header() {

	const { t } = useTranslation();
	
	return (
		<>
	<Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand  href="/home">
			<img
				alt="coccinelle"
				src={coccinelle}
				width="40"
				height="40"
				className="d-unline-block align-top"/>
			{t("title")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center me-auto mx-auto mb-2 mb-lg-0">
            <Nav.Link href="/home">{t("home")}</Nav.Link>
            <Nav.Link href="/knowledge">{t("knowledge")}</Nav.Link>
				<Nav.Link href="/gallery">{t("gallery")}</Nav.Link>
          </Nav>
			 <LanguageSelector/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
		</>
	)
}