import { useState } from "react";

function Formulario({ datosConsulta }) {
	const [weather, setWeather] = useState({
		ciudad: "",
		pais: "",
	});

	const handleChange = (e) => {
		setWeather({ ...weather, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//Funcion que toma los datos para realizar la busqueda
		datosConsulta(weather);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="ciudad" className="text-gray-700">
					Ciudad
				</label>
				<input
					className="rounded-lg border border-transparent border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mt-4"
					type="text"
					name="ciudad"
					id="ciudad"
					onChange={handleChange}
				/>
			</div>
			<div>
				<select
					name="pais"
					id="pais"
					className="rounded-lg px-4 py-2 text-gray-700 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-400 focus:border-primary-500 w-full mt-4"
					onChange={handleChange}
				>
					<option value="">Seleccionar un Pais</option>
					<option value="US">Estados Unidos</option>
					<option value="MX">Mexico</option>
					<option value="AR">Argentina</option>
					<option value="ES">España</option>
					<option value="VE">Venezuela</option>
				</select>
			</div>
			<div>
				<button
					className="py-2 px-4 bg-blue-600 rounded-lg mt-4 text-white hover:bg-blue-800 transition ease-in duration-200 focus:outline-none"
					type="submit"
				>
					Buscar Clima
				</button>
			</div>
		</form>
	);
}

export default Formulario;
