import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


export default function Footer() {

	const { t } = useTranslation();
	

	return (
		<div className="footer">
		<Container className="container text-center text-md-left">
			<Row className="row text-center text-md-left">
				<Col className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-4">
					<h5 className="text-uppercase mb-4 font-weight-bold text-white">{t("title")}</h5>
					<p> <FontAwesomeIcon icon={faCopyright}/>{t("footer")}</p>
				</Col>
				<Col className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
					<h5 className="text-uppercase mb-4 font-weight-bold text-white">{t("contacts")}</h5>
					<div className="contact-links">
        <a
          href="https://facebook.com/Tania Schmitt"
          target="_blank"
          className="btn contact-details"
			 rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </a>
        <a
          id="profile-link"
          href="https://github.com/ukrudefr"
          target="_blank"
          className="btn contact-details"
			 rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        <a href="mailto:ukrudefr@gmail.com" className="btn contact-details">
          <FontAwesomeIcon icon={faEnvelope} size="2x"/>
        </a>
      </div>
				</Col>
			</Row>
		</Container>
		</div>
	)
}