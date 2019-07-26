import React from "react";
import { Navbar } from "./navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center">
				<Navbar />
				<h1>Hello Rigo!</h1>
			</div>
		);
	}
}
