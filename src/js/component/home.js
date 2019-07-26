import React from "react";
import { Card } from "./card.js";
import { Navbar } from "./navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Card />
				<Navbar />
				<h1>Hello Rigo!</h1>
			</div>
		);
	}
}
