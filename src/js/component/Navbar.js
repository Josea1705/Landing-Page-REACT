import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<span className="navbar-text text-light" aria-current="page">
					Start Boostrap
				</span>
				<div
					className="collapse navbar-collapse d-flex"
					id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link" href="#">
							About
						</a>
						<a className="nav-link" href="#">
							Services
						</a>
						<a className="nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
