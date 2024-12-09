function Clima({ resultado }) {
	const { name, main } = resultado;

	if (!name) return null;

	//Transformar kelvin a centigrados
	const kelvin = 273.15;

	return (
		<div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow">
			<div className="mb-6 text-3xl text-center text-gray-800">
				<h2 className="text-2xl font-bold">El clima de {name} es:</h2>
				<p className="text-4xl my-10">
					{parseInt(main.temp - kelvin, 10)} <span className="text-lg">°C</span>
				</p>
				<p className="text-lg">
					Temperatura Minima: {parseInt(main.temp_min - kelvin, 10)} °C
				</p>
				<p className="text-lg">
					Temperatura Máxima: {parseInt(main.temp_max - kelvin, 10)} °C
				</p>
			</div>
		</div>
	);
}

export default Clima;
