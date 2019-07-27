import React from "react";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Jumbotron />
				<Card />
			</React.Fragment>
		);
	}
}
