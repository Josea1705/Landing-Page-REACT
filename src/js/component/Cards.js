import React from "react";
import PropTypes from "prop-types";

const numbers = ["1", "2", "3", "4"];

export const Cards = (props) => {
	return (
		<div classNameName="card-group">
			{numbers.map((card, i) => {
				return (
					<div key={i} className="card">
						<img
							src={props.imgURL}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{props - title}</h5>
							<p className="card-text">{props.description}</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">{props.footer}</small>
						</div>
					</div>
				);
			})}
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	imgURL: PropTypes.string,
	description: PropTypes.string,
};
