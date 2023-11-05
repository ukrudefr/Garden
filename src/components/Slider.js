import React from "react"
import { Carousel } from "react-bootstrap"
import tomaten from './img/tomaten.jpg'
import blume from './img/blume.jpg'
import aubergine from './img/aubergine.jpg'
import moehren from './img/moehren.jpg'

export default function Slider() {
	return (
		<>
		<Carousel className="carousel">
      <Carousel.Item className="slide" >
        <img
          className="d-block w-100"
          src={moehren}
          alt="Große Tomaten"
        />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100"
          src={tomaten}
          alt="Blumen"
        />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100"
          src={blume}
          alt="Aubergin"
        />
      </Carousel.Item>
		<Carousel.Item className="slide">
        <img
          className="d-block w-100"
          src={aubergine}
          alt="Aubergin"
        />
      </Carousel.Item>
    </Carousel>
	 </>
	)
}