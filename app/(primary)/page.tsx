"use client";

import { IconBox, NavLink, getElementList } from "@/components/common";
import { ChevronDownIcon } from "@/components/icons";
// FIXME - Change accordions component to another suitable one and then remove use client from this page`
import { Accordion, Button } from "@/components/ui";
import { cnJoin } from "@/lib/utils/cn";
import { feature1, feature2, feature3, hero } from "@/public/assets/images/landing-page";
import Image from "next/image";
import { Main } from "./_components";
import ScrollableTipCards from "./daily-tips/ScrollableTipCards";

const coreServices = [
	{ imageSrc: feature1 as string, description: "SubSpecialists" },
	{ imageSrc: feature2 as string, description: "Open source library" },
	{ imageSrc: feature3 as string, description: "Virtual consultancy" },
];

const features = [
	{ icon: "ic:sharp-access-time", description: "Efficient and user-friendly" },
	{ icon: "fluent:access-time-24-regular", description: "Accessible consultations" },
	{ icon: "mynaui:lock-password", description: "Ensured confidentiality" },
	{ icon: "mage:book-text", description: "Open library" },
];

const advantages = [
	{ icon: "mage:book-text", title: "24/7 availability" },
	{ icon: "solar:user-check-rounded-outline", title: "Remote visitation" },
	{ icon: "tabler:calendar-check", title: "Zero appointments" },
];

const FAQs = [
	{
		question: "Question 1",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
	{
		question: "Question 2",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing",
	},
	{
		question: "Question 3",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor torto tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
	{
		question: "Question 4",
		answer:
			"Lorem ipsum dolor sit ame Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing",
	},
	{
		question: "Question 5",
		answer:
			"Lorem ipsum dolor sit amet consectetur tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
];

function HomePage() {
	const [CoreServiceList] = getElementList();
	const [FeatureList] = getElementList();
	const [AdvantageList] = getElementList();
	const [FAQList] = getElementList();
	return (
		<Main className="flex w-full flex-col gap-14 max-md:max-w-[400px] md:gap-[92px]">
			<section className="flex flex-col items-center md:flex-row-reverse md:gap-[67px]">
				<div className="flex flex-col items-center max-md:text-center md:items-start">
					<h1
						className="text-[clamp(32px,5.2vw,68px)] font-bold leading-10 text-medinfo-primary-main
							md:text-balance md:leading-[76px] [&:hover>span]:text-medinfo-secondary-darker
							[&>span]:[transition:color_250ms_ease-in-out]"
					>
						Free <span>access</span> to knowledge and an easy chit-chat with the best{" "}
						<span>doctors</span>
					</h1>

					<p className="mt-[15px] md:text-[18px] md:leading-[26px]">
						Lorem ipsum dolor sit amet consectetur. Amet nunc bibendum vitae pretium ultrices
						pulvinar lacus ultrices. A id fermentum aliquet facilisi consequat tortor. Est donec
						tincidunt diam sit. Arcu ut platea ac purus. Tincidunt faucibus tristique interdum
						pharetra cras duis mauris. Viverra a placerat maecenas felis tristique lectus erat.
						Tempus nec vel euismod amet cras.
					</p>
					<Button asChild={true} className="mt-6">
						<NavLink href={{ pathname: "/signup", query: { type: "patient" } }}>Join Us</NavLink>
					</Button>
				</div>

				<div
					className="relative ml-[--offset] w-max shrink-0 [--offset:19px]
						max-md:mt-[calc(40px_+_var(--offset))]"
				>
					<span
						className="absolute bottom-[--offset] right-[--offset] z-[-1] block size-full
							rounded-[16px] bg-medinfo-primary-main md:bottom-[28px] md:right-[28px]
							md:rounded-[24px]"
					/>
					<Image
						className="aspect-[223/273] min-h-[273px] md:aspect-[340/415] md:min-h-[415px]"
						src={hero as string}
						alt=""
						priority={true}
						width={223}
						height={273}
					/>
				</div>
			</section>

			<section>
				<h2
					className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary-main
						md:text-[52px] md:font-bold md:leading-[60px]"
				>
					Our Core Services
				</h2>

				<CoreServiceList
					className="mt-6 flex flex-col items-center gap-4 text-center md:mt-14 md:flex-row
						md:justify-between md:gap-[28px]"
					each={coreServices}
					render={(coreService, index) => (
						<li key={coreService.description} className="group">
							<div className="relative">
								<Image
									className={cnJoin(
										"aspect-[272/292] max-h-[292px] md:aspect-[340/362] md:max-h-[362px]",
										index === 1 && "md:mt-[80px]"
									)}
									src={coreService.imageSrc}
									alt=""
									width={272}
									height={292}
								/>

								<span
									className="absolute inset-0 flex items-end rounded-[16px]
										bg-medinfo-primary-main p-7 font-normal text-white opacity-0
										[transition:opacity_300ms_ease] group-hover:opacity-100 md:text-[18px]"
								>
									Lorem ipsum dolor sit amet consectetur. Malesuada viverra neque euismod amet
									vel. Erat id sed at praesent sagittis porttitor. Cras quisque lacinia.
								</span>
							</div>

							<p
								className="mt-4 text-[22px] font-medium [transition:opacity_300ms_ease]
									group-hover:opacity-0 md:text-[24px] md:font-semibold"
							>
								{coreService.description}
							</p>
						</li>
					)}
				/>
			</section>

			<section>
				<h2
					className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary-main
						md:text-[52px] md:font-bold md:leading-[60px]"
				>
					Why MedInfo Nigeria?
				</h2>

				<FeatureList
					className="mt-12 grid grid-cols-2 justify-center gap-x-5 gap-y-10 text-center md:mt-[88px]
						md:grid-cols-[repeat(4,_minmax(161px,248px))] md:justify-between md:gap-x-[28px]"
					each={features}
					render={(feature) => (
						<li
							key={feature.description}
							className="relative flex flex-col items-center justify-center rounded-[16px] border
								border-medinfo-primary-main px-[3.5px] py-[54px] text-medinfo-primary-main
								md:px-[47px] md:py-[67px]"
						>
							<span
								className="absolute top-[-24px] block size-12 rounded-full bg-white p-3 text-[24px]
									[box-shadow:0_4px_4px_hsl(0,0%,0%,0.12)] md:size-16 md:text-[40px]"
							>
								<IconBox icon={feature.icon} />
							</span>
							<p className="md:text-[20px]">{feature.description}</p>
						</li>
					)}
				/>
			</section>

			<section>
				<h2
					className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary-main
						md:text-[52px] md:font-bold md:leading-[60px]"
				>
					Advantages of Virtual Healthcare
				</h2>
				<AdvantageList
					className="mt-6 flex flex-col gap-6 md:mt-14 md:flex-row md:gap-[28px]"
					each={advantages}
					render={(advantage) => (
						<li key={advantage.title}>
							<span
								className="block size-[92px] rounded-[16px] bg-medinfo-primary-subtle p-6
									text-[44px] text-medinfo-primary-main"
							>
								<IconBox icon={advantage.icon} />
							</span>
							<h3 className="mt-5 text-[24px] font-semibold text-medinfo-primary-main">
								{advantage.title}
							</h3>
							<p className="mt-3">Lorem ipsum dolor sit amet consectetur. Placerat cras id.</p>
						</li>
					)}
				/>
			</section>

			<section className="flex flex-col items-center">
				<h2
					className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary-main
						md:text-[52px] md:font-bold md:leading-[60px]"
				>
					Did you know?
				</h2>

				<ScrollableTipCards />
			</section>

			<section>
				<h2
					className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary-main
						md:text-[52px] md:font-bold md:leading-[60px]"
				>
					Frequently Asked Questions
				</h2>

				<Accordion.Root type="single" collapsible={true} asChild={true}>
					<FAQList
						className="mt-6 grid w-full gap-2 md:mt-14 md:gap-4"
						each={FAQs}
						render={(FAQ) => (
							<Accordion.Item key={FAQ.question} value={FAQ.answer} asChild={true}>
								<li>
									<Accordion.Trigger
										icon={
											<span
												className="flex items-center justify-center rounded-full
													bg-medinfo-primary-main p-[10px] md:p-4"
											>
												<ChevronDownIcon className="size-4 md:size-6" />
											</span>
										}
										classNames={{
											base: `min-h-[68px] rounded-t-[16px] border-x border-t
											border-medinfo-primary-darker px-6 py-[15px] text-[22px]
											text-medinfo-primary-main data-[state=closed]:rounded-b-[16px]
											data-[state=closed]:border-b md:p-6 md:text-[32px] md:font-semibold`,
										}}
									>
										{FAQ.question}
									</Accordion.Trigger>
									<Accordion.Content
										className="rounded-b-[16px] border-x border-b border-medinfo-primary-darker
											px-6 pb-6 pt-0"
									>
										<hr className="mb-4 h-[2px] bg-medinfo-secondary-main" />
										{FAQ.answer}
									</Accordion.Content>
								</li>
							</Accordion.Item>
						)}
					/>
				</Accordion.Root>
			</section>
		</Main>
	);
}

export default HomePage;
