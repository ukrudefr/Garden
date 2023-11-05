import React from "react"
import { useTranslation } from "react-i18next";
import DE from './DE'
import FR from './FR'



export default function Knowledge() {

	const { t } = useTranslation();

	return (
		<>
	<aside className="sidenav">
		<h4>{t("to do")}</h4>
		<a href="#januar">{t("january")}</a>
		<a href="#februar">{t("february")}</a>
		<a href="#märz">{t("march")}</a>
		<a href="#april">{t("april")}</a>
		<a href="#mai">{t("may")}</a>
		<a href="#juni">{t("june")}</a>
		<a href="#juli">{t("july")}</a>
		<a href="#august">{t("august")}</a>
		<a href="#september">{t("september")}</a>
		<a href="#oktober">{t("october")}</a>
		<a href="#november">{t("november")}</a>
		<a href="#dezember">{t("december")}</a>
	</aside>
		<DE/>
		<FR/>
	</>
	)
}
