import React from "react";
import PropTypes from "prop-types";

const numbers = ["1", "2", "3", "4"];

export const Cards = ({title, imgURL, description, footer}) => {
	return (
		<div className="card-group d-flex">
			{numbers.map((card, i) => {
				return (
					<div key={i} className="card ms-3">
						<img
							src={imgURL}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{title}</h5>
							<p className="card-text">{description}</p>
						</div>
						<div className="card-footer">
							<small
								className="btn btn-primary">
								{footer}
							</small>
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
	footer: PropTypes.string,
};
