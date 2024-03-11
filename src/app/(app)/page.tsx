import { IconBox } from "@/components/common";
import { useElementList } from "@/lib/hooks/useElementList";
import { feature1, feature2, feature3, hero } from "@public/assets/images/landing-page";
import Image from "next/image";

const features = [
	{ icon: "ic:sharp-access-time", description: "Efficient and user-friendly" },
	{ icon: "fluent:access-time-24-regular", description: "Accessible consultations" },
	{ icon: "mynaui:lock-password", description: "Ensured confidentiality" },
	{ icon: "mage:book-text", description: "Open library" },
];

function HomePage() {
	const { For: FeatureList } = useElementList();

	return (
		<main className="mx-auto max-w-[40rem] space-y-[5.6rem] px-[2.4rem] py-[5.6rem]">
			<section>
				<h1 className="text-[4rem] font-bold leading-[4.8rem] text-medinfo-primary">
					Free access to knowledge and an easy chit-chat with the best doctors
				</h1>

				<p className="mt-[1.5rem]">
					Lorem ipsum dolor sit amet consectetur. Amet nunc bibendum vitae pretium ultrices pulvinar
					lacus ultrices. A id fermentum aliquet facilisi consequat tortor. Est donec tincidunt diam
					sit. Arcu ut platea ac purus. Tincidunt faucibus tristique interdum pharetra cras duis
					mauris. Viverra a placerat maecenas felis tristique lectus erat. Tempus nec vel euismod amet
					cras.
				</p>

				<button className="mt-[2.4rem] rounded-[8px] bg-medinfo-primary px-[2.4rem] py-[1.2rem] text-white">
					Join Us
				</button>

				<div className="relative ml-[1.9rem] mt-[calc(4rem+1.9rem)] w-max">
					<span className="absolute bottom-[1.9rem] right-[1.9rem] z-[-1] block size-full rounded-[16px] bg-medinfo-primary" />

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
				<h2 className="text-center text-[3.2rem] font-semibold leading-[4rem] text-medinfo-primary">
					Our Core Services
				</h2>

				<ul className="mt-[2.4rem] flex flex-col items-center gap-[1.6rem] text-center text-[2.2rem] font-medium">
					<li>
						<Image
							className="h-[29rem] max-w-[27.2rem]"
							src={feature1 as string}
							alt=""
							width={272}
							height={290}
						/>
						<p className="mt-[1.6rem]">Subspecialists</p>
					</li>

					<li>
						<Image
							className="h-[29rem] max-w-[27.2rem]"
							src={feature2 as string}
							alt=""
							width={272}
							height={290}
						/>
						<p className="mt-[1.6rem]">Open source library</p>
					</li>

					<li>
						<Image
							className="h-[29rem] max-w-[27.2rem]"
							src={feature3 as string}
							alt=""
							width={272}
							height={290}
						/>
						<p className="mt-[1.6rem]">Virtual consultancy</p>
					</li>
				</ul>
			</section>

			<section>
				<h2 className="text-center text-[3.2rem] font-semibold leading-[4rem] text-medinfo-primary">
					Why MedInfo Nigeria?
				</h2>

				<ul className="mt-[4.8rem] grid grid-cols-2 gap-x-[2rem] gap-y-[4rem] text-center">
					<FeatureList
						each={features}
						render={(feature) => (
							<li className="relative flex flex-col items-center justify-center rounded-[16px] border border-medinfo-primary px-[0.35rem] py-[5.4rem]">
								<div className="absolute top-[-2.4rem] size-[4.8rem] rounded-full bg-white p-[1.2rem] text-[2.4rem] [box-shadow:0_4px_4px_hsl(0,0%,0%,0.12)]">
									<IconBox icon={feature.icon} />
								</div>

								<p>{feature.description}</p>
							</li>
						)}
					/>
				</ul>
			</section>

			<section>
				<h2 className="text-center text-[3.2rem] font-semibold leading-[4rem] text-medinfo-primary">
					Advantages of Virtual Healthcare
				</h2>

				<ul>
					<li></li>
				</ul>
			</section>

			<section>
				<h2 className="text-center text-[3.2rem] font-semibold leading-[4rem] text-medinfo-primary">
					Did you know?
				</h2>
			</section>

			<section>
				<h2 className="text-center text-[3.2rem] font-semibold leading-[4rem] text-medinfo-primary">
					Frequently Asked Questions
				</h2>
			</section>
		</main>
	);
}

export default HomePage;
