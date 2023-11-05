import React from "react";
import { useTranslation } from "react-i18next";  
import { Button } from "react-bootstrap";

export default function LanguageSelector() {

	const { i18n } = useTranslation();
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('lng', language);
	};
	

	return (
		<>
		<Button variant="outline-success" onClick={() => changeLanguage
			("de")}>DE</Button>
			<Button variant="outline-success" onClick={() => changeLanguage
			("fr")}>FR</Button>
		</>
	)

}