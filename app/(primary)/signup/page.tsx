"use client";

import { IconBox, Logo, NavLink, Show } from "@/components/common";
import { Button, Form, Select } from "@/components/ui";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { Main } from "../_components";
import DropZoneInput from "./DropZoneInput";

function SignUpPage() {
	const methods = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			specialty: "",
			license: null,
			country: "",
			photo: null,
		},
	});

	const { control } = methods;

	const type = useSearchParams().get("type") as "doctor" | "patient" | null;

	return (
		<Main className="md:w-full">
			<div
				className="rounded-[16px] border-[1.4px] border-medinfo-light-2
					shadow-[0_0_0_2px_hsl(0,0%,0%,0.25)] md:flex"
			>
				<section className="p-6 md:flex md:w-full md:flex-col md:items-center md:p-11">
					<Logo className="max-lg:h-[46px] max-lg:w-[60px]" />

					<div className="mt-3 flex flex-col items-center gap-8 md:w-max md:px-12">
						<h1
							className="max-w-[186px] text-center text-[24px] font-semibold leading-[32px]
								text-medinfo-primary-darker md:mx-[42px] md:max-w-[375px] md:text-[48px]
								md:font-bold md:leading-[56px]"
						>
							Join MedInfo Nigeria
						</h1>

						<Form.Root methods={methods} className="w-full gap-[14px]">
							<Form.Item
								control={control}
								name="firstName"
								className="gap-1 font-roboto font-medium"
							>
								<Form.Label className="md:text-[20px]">First name</Form.Label>

								<Form.InputGroup
									className="h-[48px] gap-4 rounded-[8px] border-[1.4px]
										border-medinfo-primary-main px-4 py-3 md:h-[64px] md:py-5"
								>
									<Form.InputLeftItem className="size-5 md:size-6">
										<IconBox icon="majesticons:user-line" className="size-full" />
									</Form.InputLeftItem>

									<Form.Input
										type="text"
										placeholder="enter first name"
										className="placeholder:text-medinfo-dark-4 md:text-base"
									/>
								</Form.InputGroup>
							</Form.Item>

							<Form.Item
								control={control}
								name="lastName"
								className="gap-1 font-roboto font-medium"
							>
								<Form.Label className="md:text-[20px]">Last name</Form.Label>

								<Form.InputGroup
									className="h-[48px] gap-4 rounded-[8px] border-[1.4px]
										border-medinfo-primary-main px-4 py-3 md:h-[64px] md:py-5"
								>
									<Form.InputLeftItem className="size-5 md:size-6">
										<IconBox icon="majesticons:user-line" className="size-full" />
									</Form.InputLeftItem>

									<Form.Input
										type="text"
										placeholder="enter last name"
										className="placeholder:text-medinfo-dark-4 md:text-base"
									/>
								</Form.InputGroup>
							</Form.Item>

							<Form.Item control={control} name="country" className="gap-1 font-roboto font-medium">
								<Form.Label className="md:text-[20px]">Country</Form.Label>

								<Form.Controller
									render={({ field }) => (
										<Select.Root
											name={field.name}
											value={field.value}
											onValueChange={field.onChange}
										>
											<Select.Trigger
												classNames={{
													base: `group h-[48px] gap-2 rounded-[8px] border-[1.4px]
													border-medinfo-primary-main px-4 font-medium
													data-[placeholder]:text-medinfo-dark-4 md:h-[64px] md:text-base`,
													icon: `text-medinfo-body-color group-data-[state=open]:rotate-180
													md:size-6`,
												}}
											>
												<Select.Value placeholder="select your country" />
											</Select.Trigger>

											<Select.Content
												classNames={{
													base: `border-[1.4px] border-medinfo-primary-main bg-white/90
													backdrop-blur-lg`,
												}}
											>
												<Select.Item
													withIndicator={false}
													value="Nigeria"
													className="h-[48px] bg-medinfo-light-3 font-medium
														text-medinfo-dark-4 focus:bg-medinfo-light-1
														focus:text-medinfo-body-color
														data-[state=checked]:bg-medinfo-light-1 md:h-[64px] md:text-base"
												>
													Nigeria
												</Select.Item>
												<Select.Item
													withIndicator={false}
													value="Ghana"
													className="h-[48px] bg-medinfo-light-3 font-medium
														text-medinfo-dark-4 focus:bg-medinfo-light-1
														focus:text-medinfo-body-color
														data-[state=checked]:bg-medinfo-light-1 md:h-[64px] md:text-base"
												>
													Ghana
												</Select.Item>
											</Select.Content>
										</Select.Root>
									)}
								/>
							</Form.Item>

							<Show when={type === "doctor"}>
								<Form.Item
									control={control}
									name="specialty"
									className="gap-1 font-roboto font-medium"
								>
									<Form.Label className="md:text-[20px]">Specialty</Form.Label>

									<Form.Controller
										render={({ field }) => (
											<Select.Root
												name={field.name}
												value={field.value}
												onValueChange={field.onChange}
											>
												<Select.Trigger
													classNames={{
														base: `group h-[48px] gap-2 rounded-[8px] border-[1.4px]
														border-medinfo-primary-main px-4 font-medium
														data-[placeholder]:text-medinfo-dark-4 md:h-[64px] md:text-base`,
														icon: `text-medinfo-body-color group-data-[state=open]:rotate-180
														md:size-6`,
													}}
												>
													<Select.Value placeholder="select your specialty" />
												</Select.Trigger>

												<Select.Content
													classNames={{
														base: `border-[1.4px] border-medinfo-primary-main bg-white/90 p-0
														backdrop-blur-lg`,
													}}
												>
													<Select.Item
														withIndicator={false}
														value="steeze"
														className="h-[48px] bg-medinfo-light-3 font-medium
															text-medinfo-dark-4 focus:bg-medinfo-light-1
															focus:text-medinfo-body-color
															data-[state=checked]:bg-medinfo-light-1 md:h-[64px]
															md:text-base"
													>
														Steeze
													</Select.Item>
													<Select.Item
														withIndicator={false}
														value="cooking"
														className="h-[48px] bg-medinfo-light-3 font-medium
															text-medinfo-dark-4 focus:bg-medinfo-light-1
															focus:text-medinfo-body-color
															data-[state=checked]:bg-medinfo-light-1 md:h-[64px]
															md:text-base"
													>
														Cooking
													</Select.Item>
												</Select.Content>
											</Select.Root>
										)}
									/>
								</Form.Item>
							</Show>

							<Show when={type === "doctor"}>
								<Form.Item
									control={control}
									name="license"
									className="gap-1 font-roboto font-medium"
								>
									<Form.Label className="md:text-[20px]">
										Upload medical license/certificate
									</Form.Label>

									<Form.Controller
										render={({ field }) => <DropZoneInput onChange={field.onChange} />}
									/>
								</Form.Item>
							</Show>

							<Form.Item
								control={control}
								name="password"
								className="gap-1 font-roboto font-medium"
							>
								<Form.Label className="md:text-[20px]">Password</Form.Label>

								<Form.InputGroup
									className="h-[48px] gap-4 rounded-[8px] border-[1.4px]
										border-medinfo-primary-main px-4 py-3 md:h-[64px] md:py-5"
								>
									<Form.InputLeftItem className="size-5 md:size-6">
										<IconBox icon="mynaui:lock-password" className="size-full" />
									</Form.InputLeftItem>

									<Form.Input
										type="password"
										placeholder="enter password"
										className="placeholder:text-medinfo-dark-4 md:text-base"
									/>
								</Form.InputGroup>
							</Form.Item>

							<Form.Item
								control={control}
								name="confirmPassword"
								className="gap-1 font-roboto font-medium"
							>
								<Form.Label className="md:text-[20px]">Confirm password</Form.Label>

								<Form.InputGroup
									className="h-[48px] gap-4 rounded-[8px] border-[1.4px]
										border-medinfo-primary-main px-4 py-3 md:h-[64px] md:py-5"
								>
									<Form.InputLeftItem className="size-5 md:size-6">
										<IconBox icon="mynaui:lock-password" className="size-full" />
									</Form.InputLeftItem>

									<Form.Input
										type="password"
										placeholder="enter password"
										className="placeholder:text-medinfo-dark-4 md:text-base"
									/>
								</Form.InputGroup>
							</Form.Item>

							<article className="flex flex-col items-center gap-[14px] md:mt-[14px] md:gap-7">
								<Show when={type !== "doctor"}>
									<p className="font-roboto text-medinfo-dark-4 md:text-[20px]">Or</p>

									<div className="flex gap-8">
										<Button size="icon" theme="secondary" className="rounded-[8px]">
											<IconBox
												icon="icon-park-outline:google"
												className="size-[18px] lg:size-6"
											/>
										</Button>

										<Button size="icon" theme="secondary" className="rounded-[8px]">
											<IconBox
												icon="basil:facebook-outline"
												className="size-[18px] lg:size-6"
											/>
										</Button>
									</div>
								</Show>

								<Button type="submit">Sign Up</Button>

								<div className="grid justify-items-center gap-2 text-center">
									<NavLink
										transitionType="Regular"
										href={{
											query: { type: type === "doctor" ? "patient" : "doctor" },
										}}
										className="text-medinfo-primary-main md:text-[20px]"
									>
										{type === "doctor" ? "Register as a patient" : "Register as a doctor"}
									</NavLink>

									<p className="md:hidden">
										Already have an account?{" "}
										<NavLink
											transitionType="Regular"
											href="/signin"
											className="text-medinfo-primary-main"
										>
											Sign in
										</NavLink>
									</p>
								</div>
							</article>
						</Form.Root>
					</div>
				</section>

				<section
					className="flex w-[432px] flex-col items-center justify-center rounded-r-[16px]
						bg-medinfo-primary-main px-[35px] text-center text-white max-md:hidden xl:shrink-0"
				>
					<h2 className="text-[32px] font-semibold">Hello friend!</h2>

					<p className="mt-6 text-[18px]">
						Enter in your details and lets continue from where you stopped
					</p>

					<Button theme="secondary-inverted" className="mt-[38px]" asChild={true}>
						<NavLink
							href={{
								pathname: "/signin",
								query: { type: type === "doctor" ? "doctor" : "patient" },
							}}
						>
							Sign in
						</NavLink>
					</Button>
				</section>
			</div>
		</Main>
	);
}

// == This wrapper is necessary due to vercel's stupid rule for using useSearchParams in a component
// LINK - https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
const WithSuspense = () => (
	<Suspense>
		<SignUpPage />
	</Suspense>
);
export default WithSuspense;
