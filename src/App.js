import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";
import "./App.css";

const useData = (url) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error("Could not fetch the data");
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setLoading(false);
				setError(null);
				console.log(data);
			})
			.catch((err) => {
				setLoading(false);
				setError(err.message);
			});
		// setTimeout(() => {
		// 	setLoading(false);
		// }, 2000);
	}, [url]);
	return { loading, data, error };
};

const App = () => {
	const { loading, data, error } = useData("/api/laptop");
	const [sorted, setSorted] = useState(false);
	const [laptops, setLaptops] = useState(data);

	const sortLaptops = () => {
		if (sorted) {
			data.sort((a, b) => b.weigth - a.weigth);
		} else {
			data.sort((a, b) => a.weigth - b.weigth);
		}
		setLaptops(laptops);
		setSorted(!sorted);
	};

	return (
		<div className='App'>
			{error && <div>{error}</div>}
			{loading && <LoadingMask />}
			{data && (
				<>
					<h1>Laptops</h1>
					<hr />
					<div>
						<input type='text' />
						<hr />
						<button onClick={sortLaptops}>
							{sorted
								? "Click to arrange laptops descending by weight!"
								: "Click to arrange laptops ascending by weight!"}
						</button>
					</div>
					{data.map((laptop) => (
						<Laptop key={laptop.name} data={data} laptop={laptop} />
					))}
				</>
			)}
		</div>
	);
};

export default App;
