import Link from "next/link";
import data from "./StackCard.json";
import Image from "next/image";

export default function StackCard() {
	const carouselItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
	return (
		<div className="mt-10 border-b border-accent">
			<h1 className="text-main mb-8">Le nostre tecnologie</h1>
			<div className="justify-center flex flex-row flex-wrap overflow-hidden">
				{data.map((element, i) => {
					return (
						<div
							key={i}
							className="border border-accent mb-10 rounded-2xl py-8 px-6 card items-center flex flex-col min-h-[415px] h-auto w-[340px] bg-tertiary mx-4">
							<Image
								src={`/assets/${element.image}`}
								width={56}
								alt={`${element.name}'s logo`}
								height={56}
								style={{ height: 56 }}
							/>
							<h2 className="text-accent my-4 font-bold text-3xl">
								{element.name}
							</h2>
							<h3 className="text-accent text-center text-2xl my-4 leading-7  font-extralight items-center ">
								{element.description}
							</h3>
							<Link
								className="text-tertiary font-semibold text-2xl my-4 rounded-md py-2 px-4 bg-primary p hover:bg-[#FFCC11] transition duration-300"
								href="/">
								SCOPRI DI PIU
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
