import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import axios from "axios";
import Laptop from "./components/Laptop";
import "./App.css";

//CUSTOM HOOK FETCH w ERRORHANDLING______________________________
// const useData = (url) => {
// 	const [loading, setLoading] = useState(true);
// 	const [data, setData] = useState(null);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		fetch(url)
// 			.then((res) => {
// 				if (!res.ok) {
// 					throw Error("Could not fetch the data");
// 				}
// 				return res.json();
// 			})
// 			.then((data) => {
// 				setData(data);
// 				setLoading(false);
// 				setError(null);
// 				console.log(data);
// 			})
// 			.catch((err) => {
// 				setLoading(false);
// 				setError(err.message);
// 			});
// 	}, [url]);
// 	return { loading, data, error };
// };

const App = () => {
	// const { loading, data, error } = useData("/api/laptop");

	const [laptopsData, setLaptopsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [search, setSearch] = useState("");
	const [sorted, setSorted] = useState(false);

	//AXIOS FETCH______________________________

	// const url = "/api/laptop";
	// const getData = async () => {
	// 	try {
	// 		const res = await axios.get(url);
	// 		setLaptopsData(res.data);
	// 		console.log(data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// 	setIsLoading(false);
	// };

	// useEffect(() => {
	// 	getData();
	// }, []);

	//FETCH______________________________
	useEffect(() => {
		fetch("/api/laptop")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setLaptopsData(data);
				setIsLoading(false);
			});
	}, []);

	//SORT LAPTOPS BY WEIGHT______________________________
	const sortLaptops = () => {
		if (sorted) {
			laptopsData.sort((a, b) => b.weigth - a.weigth);
		} else {
			laptopsData.sort((a, b) => a.weigth - b.weigth);
		}
		setSorted(!sorted);
	};

	//FILTER SEARCH LAPTOPS BY NAME______________________________
	const filteredLaptops = laptopsData.filter((laptop) => {
		return laptop.name.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<div className='App'>
			{/* {error && <div>{error}</div>} */}

			{isLoading && <LoadingMask />}
			<main>
				{laptopsData && (
					<>
						<div className='navish'>
							<h1>Laptops</h1>
							<input
								type='text'
								placeholder='Search laptops'
								onChange={(e) => {
									setSearch(e.target.value);
								}}
							/>
							<div className='sort'>
								<p>Sort by weigth</p>
								<button id='sortBtn' onClick={sortLaptops}>
									{sorted ? "↑" : "↓"}
								</button>
							</div>
						</div>
						{filteredLaptops.map((laptop) => (
							<Laptop key={laptop.name} laptop={laptop} />
						))}
					</>
				)}
			</main>
		</div>
	);
};

export default App;
