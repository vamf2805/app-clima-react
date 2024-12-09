function Error({ mensaje }) {
	return (
		<div
			className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4"
			role="alert"
		>
			<p className="font-bold">Danger</p>
			<p>{mensaje}</p>
		</div>
	);
}

export default Error;
