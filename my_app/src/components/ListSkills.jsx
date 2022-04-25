import React, { Component } from 'react';
import skills from '../data/skills';
import Skills from './Skills';

class ListSkills extends Component {
	render() {
		return (
			<section   >
				<ul 
					className='soft-skills ' >
					{skills.map((skilsJs)=> <Skills key={skilsJs.name }  titleSkills={skilsJs.name} listSkills={skilsJs} />)}
				</ul>
			</section>
		);
	}
}

export default ListSkills;