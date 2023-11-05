import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import img1 from './img_pictures/2.jpeg'
import img2 from './img_pictures/5.jpeg'
import img3 from './img_pictures/8.jpeg'
import img4 from './img_pictures/11.jpeg'
import img5 from './img_pictures/14.jpeg'
import img6 from './img_pictures/15.jpeg'
import img7 from './img_pictures/20.jpeg'
import img8 from './img_pictures/21.jpeg'
import img9 from './img_pictures/22.jpeg'
import img10 from './img_pictures/23.jpeg'
import img11 from './img_pictures/24.jpeg'
import img12 from './img_pictures/25.jpeg'
import img13 from './img_pictures/27.jpeg'
import img14 from './img_pictures/29.jpeg'
import img15 from './img_pictures/30.jpeg'
import img16 from './img_pictures/31.jpeg'
import img17 from './img_pictures/32.jpeg'
import img18 from './img_pictures/33.jpeg'
import img19 from './img_pictures/34.jpeg'
import img20 from './img_pictures/35.jpeg'
import img21 from './img_pictures/36.jpeg'
import img22 from './img_pictures/37.jpeg'
import img23 from './img_pictures/38.jpeg'
import img24 from './img_pictures/39.jpeg'
import img25 from './img_pictures/40.jpeg'
import img26 from './img_pictures/41.jpeg'
import img27 from './img_pictures/42.jpeg'
import img28 from './img_pictures/43.jpeg'
import img29 from './img_pictures/44.jpeg'
import img30 from './img_pictures/45.jpeg'

const Gallery = () => {
	let data = [
		{
			id: 1,
			imgSrc: img1,
		},
		{
			id: 2,
			imgSrc: img2,
		},
		{
			id: 3,
			imgSrc: img3,
		},
		{
			id: 4,
			imgSrc: img4,
		},
		{
			id: 5,
			imgSrc: img5,
		},
		{
			id: 6,
			imgSrc: img6,
		},
		{
			id: 7,
			imgSrc: img7,
		},
		{
			id: 8,
			imgSrc: img8,
		},
		{
			id: 9,
			imgSrc: img9,
		},
		{
			id: 10,
			imgSrc: img10,
		},
		{
			id: 11,
			imgSrc: img11,
		},
		{
			id: 12,
			imgSrc: img12,
		},
		{
			id: 13,
			imgSrc: img13,
		},
		{
			id: 14,
			imgSrc: img14,
		},
		{
			id: 15,
			imgSrc: img15,
		},
		{
			id: 16,
			imgSrc: img16,
		},
		{
			id: 17,
			imgSrc: img17,
		},
		{
			id: 18,
			imgSrc: img18,
		},
		{
			id: 19,
			imgSrc: img19,
		},
		{
			id: 20,
			imgSrc: img20,
		},
		{
			id: 21,
			imgSrc: img21,
		},
		{
			id: 22,
			imgSrc: img22,
		},
		{
			id: 23,
			imgSrc: img23,
		},
		{
			id: 24,
			imgSrc: img24,
		},
		{
			id: 25,
			imgSrc: img25,
		},
		{
			id: 26,
			imgSrc: img26,
		},
		{
			id: 27,
			imgSrc: img27,
		},
		{
			id: 28,
			imgSrc: img28,
		},
		{
			id: 29,
			imgSrc: img29,
		},
		{
			id: 30,
			imgSrc: img30,
		}
	]
	const [model, setModel] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState('');
	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setModel(true);
	}

	return (
		<>
		<div className={model ? "model open" : "model"}>
			<img src={tempImgSrc} alt="" />
			<FontAwesomeIcon icon={faXmark} size="2x"  onClick={() => setModel(false)}/> 
		</div>
			<div className="gallery">
				{data.map((item, index)=> {
					return (
						<div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
							<img src={item.imgSrc} style={{width:'100%'}} alt=""/>
						</div>
					)
				})}
			</div>
			
		</>
	)
}

export default Gallery