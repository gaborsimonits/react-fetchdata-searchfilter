import React, { useState } from "react";

const Laptop = ({ laptop }) => {
	// const laptop = props.laptop;
	const [show, setShow] = useState(false);
	function toggle() {
		setShow(!show);
	}

	return (
		<div className='laptopCard'>
			<h4>Laptop Brand: {laptop.brand}</h4>

			<button id='detailsBtn' onClick={toggle}>
				{show ? "Hide Details" : "Show Details"}
			</button>

			{show && (
				<>
					<div className='laptopCard2'>
						<p>Laptop Name: {laptop.name}</p>
						<p>Laptop Weigth: {laptop.weigth}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default Laptop;
