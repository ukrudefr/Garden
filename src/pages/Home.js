import Slider from "../components/Slider"
import { Row, Col, Image, Container } from 'react-bootstrap'
import keimen from './img_home/keimen.jpg'
import aussat from './img_home/aussat.jpeg'
import ernte from './img_home/ernte.jpeg'
import kohl from './img_home/kohl-s.jpeg'
import kraft from './img_home/kraft.jpeg'
import Footer from "../components/Footer"
import Section from "../components/Section"
import Section2 from "../components/Section2"
import { useTranslation } from "react-i18next"

export default function Home() {

	const { t } = useTranslation();

	return (
		<>
		<Slider/>
		<article>
			<figure className="text-center">
				<blockquote className="blockquote">
				  <h5><em>{t("citation")}
					</em></h5>
				</blockquote>
				<figcaption className="blockquote-footer">
				  J. W. von Goethe <cite title="Source Title"></cite>
				</figcaption>
			  </figure>
		  </article>
				<Container fluid className="section">

				<Row className="row">
					
						<Col className="col-xs-6 col-md-6">
						<Section className="txt"><h3>{t("sprouted")}</h3></Section>
						</Col>
						<Col className="col-xs-6 col-md-6">
						<Section2><Image src={keimen} alt="" className="pic"/>
						</Section2>
						</Col>
						
						
						<Col className="col-xs-6 col-md-6">
						<Section className="txt"><h3>{t("seedling")}</h3></Section>
						</Col>
						<Col className="col-xs-6 col-md-6">
						<Section2><Image src={kohl} alt="" className="pic"/></Section2>
						</Col>
					
						<Col className="col-xs-6 col-md-6">
						<Section className="txt"><h3>{t("plant")}</h3></Section>
						</Col>
						<Col className="col-xs-6 col-md-6">
						<Section2><Image src={aussat} alt="" className="pic"/></Section2>
						</Col>
				
						
						<Col className="col-xs-6 col-md-6">
						<Section className="txt"><h3>{t("raise")}</h3></Section>
						</Col>
						<Col className="col-xs-6 col-md-6">
						<Section2><Image src={kraft} alt="" className="pic"/></Section2>
						</Col>
				
				
						<Col className="col-xs-6 col-md-6">
						<Section className="txt"><h3>{t("harvest")}</h3></Section>
						</Col>
						<Col className="col-xs-6 col-md-6">
						<Section2><Image src={ernte} alt="" className="pic"/></Section2>
						</Col>
						
				</Row>
				</Container>
		<Footer/>
		</>
	)
}