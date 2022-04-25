import React from 'react';
import clash from '../img/clash.jpg';
import trybeImg from '../img/trybe.png';
import naruto from '../img/naruto.jpg';
import anime from '../img/crunch.png';
import video from '../videos/video.mp4';
import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';

function Hobbies() {
	return (
		<>
			<section className="hobbies-containers">
				<h1 id="hobbies">Hobbies</h1>
				<section className="Hobbies" >
					<img src={ clash } alt="clash-royale" />
					<img src={ trybeImg } alt="trybe" />
					<img src={ naruto } alt="naruto" />
					<img src={ anime } alt="site de anime" />

				</section>
			</section>

			<section className="videos"> 
				<h1>Videos</h1>
				<div className="iframe1"> 
					<video controls src={ video }></video>
					<video controls src={ video1 }></video>
					<video controls src={ video2 }></video>
				</div>
			</section>
        
		</>
	);
}

export default Hobbies;