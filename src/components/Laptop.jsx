import React, { useState } from "react";

const Laptop = ({ laptop }) => {
	// const laptop = props.laptop;
	const [show, setShow] = useState(false);
	function toggle() {
		setShow(!show);
	}

	return (
		<div>
			<hr />
			<div>Laptop Name: {laptop.name}</div>
			{show && (
				<>
					<div>Laptop Brand: {laptop.brand}</div>
					<div>Laptop Weigth: {laptop.weigth}</div>
				</>
			)}
			<button onClick={toggle}>{show ? "Show Less" : "Show More"}</button>
			<hr />
		</div>
	);
};

export default Laptop;
