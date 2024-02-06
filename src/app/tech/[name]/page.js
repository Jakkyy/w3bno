export default function techName({ params }) {
	const { name } = params;

	return (
		<div className="container mx-auto mt-6">
			<h1 className="text-main">{name.toUpperCase()} </h1>;
			<div className="bg-tertiary rounded-xl h-72 border border-accent"></div>
		</div>
	);
}
