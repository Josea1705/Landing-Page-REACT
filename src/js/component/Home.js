import React, { Fragment } from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";

//create your first component
export const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Cards
					title="Carticas"
					imgURL="http://www.protekdevices.com/xyz/images/placeholder/700x400.gif"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
					footer="Find out more"
				/>
			</div>
		</Fragment>
	);
};
