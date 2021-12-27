//api.openweathermap.org/data/2.5/weather?q=Delhi&appid=15a3d910f23e1d43c5a64cdbb976fef4
import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./weathercard";

const Temp = () => {
	//search value variable and function
	const [searchValue, setSearchValue] = useState("Bangalore");
	//result value variable and function
	const [tempInfo, setTempInfo] = useState({});

	// api calling function
	const getWeatherInfo = async () => {
		try {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=15a3d910f23e1d43c5a64cdbb976fef4`;
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);

			//Extract from api object
			const { temp, humidity, pressure } = data.main;
			const { main: myweathermood } = data.weather[0];
			const { name } = data;
			const { speed } = data.wind;
			const { country, sunset } = data.sys;

			//create new object with extracted api object
			const myWeatherObject = {
				temp,
				humidity,
				pressure,
				myweathermood,
				name,
				speed,
				country,
				sunset,
			};

			//set function call
			setTempInfo(myWeatherObject);
		} catch (error) {
			console.log(error);
		}
	};

	//run function only once first landing
	useEffect(() => {
		getWeatherInfo();
	}, []);

	return (
		<>
			<div className='wrap'>
				<div className='search'>
					<input
						type='search'
						placeholder='search'
						autofocus
						id='search'
						className='searchTerm'
						value={searchValue}
						onChange={(event) => {
							setSearchValue(event.target.value);
						}}
					/>

					<button
						type='button'
						className='searchButton'
						onClick={() => getWeatherInfo()}>
						Search
					</button>
				</div>
			</div>

			{/* weather card */}

			<WeatherCard tempInfo={tempInfo} />
		</>
	);
};

export default Temp;
