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
	}, [url]);
	return { loading, data, error };
};

const App = () => {
	const { loading, data, error } = useData("/api/laptop");

	return (
		<div className='App'>
			<h1>Laptops</h1>
			{data &&
				data.map((laptop) => (
					<Laptop key={laptop.name} data={data} laptop={laptop} />
				))}
		</div>
	);
};

export default App;
