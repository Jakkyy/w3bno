import StackCard from "./components/StackCard/StackCard";
import Image from "next/image";
import cross from "../../public/assets/cross.svg";
import mark from "../../public/assets/mark.svg";

export default function Home() {
	return (
		<div className="test">
			<StackCard />
			<div className="bg-tertiary pt-10 pb-12 ">
				<h1 className="text-main mb-8">Perché scegliere noi?</h1>
				<div className="container mx-auto flex flex-col md:flex-row p b-8 gap-8">
					<div
						id="box-1"
						className="border border-accent h-auto w-auto md:w-1/2 bg-card rounded-xl">
						<h1 className="text-accent font-bold text-3xl flex justify-center py-8">
							GLI ALTRI SITI WEB
						</h1>
						<div className="flex items-stretch flex-col pb-8 mx-6">
							{Array(4)
								.fill()
								.map((i) => {
									return (
										<div
											className="flex justify-around mb-2"
											key={i}>
											<Image
												width={16}
												height={16}
												src={cross}></Image>
											<p className="text-accent font-light">
												Gli alti siti non hanno, lorem
												ipsum dolor sit amet...
											</p>
										</div>
									);
								})}
						</div>
					</div>
					<div
						id="box-1"
						className="border border-accent h-auto w-auto md:w-1/2 bg-card rounded-xl">
						<h1 className="text-primary font-bold text-3xl flex justify-center py-8">
							I NOSTRI SITI WEB
						</h1>
						<div className="flex items-stretch flex-col pb-8 mx-6">
							{Array(4)
								.fill()
								.map((i) => {
									return (
										<div
											className="flex justify-around mb-2"
											key={i}>
											<Image
												width={16}
												height={16}
												src={mark}></Image>
											<p className="text-accent font-light">
												Gli alti siti non hanno, lorem
												ipsum dolor sit amet...
											</p>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

