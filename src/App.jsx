import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";
import Error from "./components/Error";
import Clima from "./components/Clima";

function App() {
	const [error, setError] = useState(false);
	const [ciudad, setCiudad] = useState("");
	const [pais, setPais] = useState("");
	const [resultado, setResultado] = useState({});

	useEffect(() => {
		//Prevenir ejecucion
		if (ciudad === "" || pais === "") return;
		const consultarAPI = async () => {
			const appID = "fad5e2070f5ffbb3cdebec9f7526b8ab";
			const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

			try {
				const res = await fetch(URL);
				const data = await res.json();
				setResultado(data);
			} catch (error) {
				console.error("Error al consultar la API:", error);
			}
		};
		consultarAPI();
	}, [ciudad, pais]);

	const datosConsulta = (datos) => {
		if (datos.ciudad === "" || datos.pais === "") {
			setError(true);
			return;
		}
		//Si existe la ciudad y el pais
		setCiudad(datos.ciudad);
		setPais(datos.pais);
		setError(false);
	};

	return (
		<>
			<Header />
			<div className="container mx-auto my-10">
				<div className="grid md:grid-cols-2 grid-cols-1 mx-4 gap-4">
					<Formulario datosConsulta={datosConsulta} />
					<div>
						{error ? (
							<Error mensaje="Ambos campos son obligatorios" />
						) : resultado.cod === "404" ? (
							<Error mensaje="La ciudad no existe" />
						) : (
							<Clima resultado={resultado} />
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
