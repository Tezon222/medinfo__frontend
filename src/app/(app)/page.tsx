import { feature1, feature2, feature3, hero } from "@public/assets/images/landing-page";
import Image from "next/image";

const images = [{}];

function Home() {
	return (
		<>
			<main className="mt-[5.6rem] space-y-[5.6rem] px-[2.4rem]">
				<section>
					<h1 className="text-medinfo-primary text-[4rem] font-bold leading-[4.8rem]">
						Free access to knowledge and an easy chit-chat with the best doctors
					</h1>

					<p className="mt-[1.5rem]">
						Lorem ipsum dolor sit amet consectetur. Amet nunc bibendum vitae pretium ultrices
						pulvinar lacus ultrices. A id fermentum aliquet facilisi consequat tortor. Est donec
						tincidunt diam sit. Arcu ut platea ac purus. Tincidunt faucibus tristique interdum
						pharetra cras duis mauris. Viverra a placerat maecenas felis tristique lectus erat.
						Tempus nec vel euismod amet cras.
					</p>

					<button className="bg-medinfo-primary mt-[2.4rem] rounded-[8px] px-[2.4rem] py-[1.2rem] text-white">
						Join Us
					</button>

					<div className="relative ml-[1.9rem] mt-[calc(4rem+1.9rem)] w-max">
						<span className="bg-medinfo-primary absolute bottom-[1.9rem] right-[1.9rem] z-[-1] block size-full rounded-[16px]" />

						<Image
							className="h-[27.3rem] max-w-[22.3rem]"
							src={hero as string}
							alt=""
							width={223}
							height={273}
						/>
					</div>
				</section>

				<section>
					<h2 className="text-medinfo-primary text-center text-[3.2rem] font-semibold leading-[4rem]">
						Our Core Services
					</h2>

					<article className="mt-[2.4rem] flex flex-col items-center gap-[1.6rem] text-center text-[2.2rem] font-medium">
						<figure>
							<Image
								className="h-[29rem] max-w-[27.2rem]"
								src={feature1 as string}
								alt=""
								width={272}
								height={290}
							/>
							<figcaption className="mt-[1.6rem]">Subspecialists</figcaption>
						</figure>

						<figure>
							<Image
								className="h-[29rem] max-w-[27.2rem]"
								src={feature2 as string}
								alt=""
								width={272}
								height={290}
							/>
							<figcaption className="mt-[1.6rem]">Open source library</figcaption>
						</figure>

						<figure>
							<Image
								className="h-[29rem] max-w-[27.2rem]"
								src={feature3 as string}
								alt=""
								width={272}
								height={290}
							/>
							<figcaption className="mt-[1.6rem]">Virtual consultancy</figcaption>
						</figure>
					</article>
				</section>

				<section>
					<h2 className="text-medinfo-primary text-center text-[3.2rem] font-semibold leading-[4rem]">
						Why MedInfo Nigeria?
					</h2>
				</section>

				<section>
					<h2 className="text-medinfo-primary text-center text-[3.2rem] font-semibold leading-[4rem]">
						Advantages of Virtual Healthcare
					</h2>
				</section>

				<section>
					<h2 className="text-medinfo-primary text-center text-[3.2rem] font-semibold leading-[4rem]">
						Did you know?
					</h2>
				</section>

				<section>
					<h2 className="text-medinfo-primary text-center text-[3.2rem] font-semibold leading-[4rem]">
						Frequently Asked Questions
					</h2>
				</section>
			</main>

			<footer className="bg-medinfo-primary"></footer>
		</>
	);
}

export default Home;
