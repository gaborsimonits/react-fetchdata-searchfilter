import React from "react";

const Laptop = (data) => {
	return (
		<div>
			<hr />
			<div>{data.laptop.name}</div>
			<hr />
		</div>
	);
};

export default Laptop;
