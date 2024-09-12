import { getElementList } from "@/components/common";
import type { SingleTip } from "@/lib/types";
import { callBackendApi } from "@/lib/utils/callBackendApi";
import Image from "next/image";
import { Main } from "../../_components";
import { HealthFinderLogo } from "../DailyTipCard";
import ScrollableTipCards from "../ScrollableTipCards";

async function TipExpandedPage({ params }: { params: { id: string } }) {
	const { data, error } = await callBackendApi<SingleTip>(`/dailyTips/tip/${params.id}`);

	if (error) {
		console.error(error.errorData);
		return null;
	}

	const [ArticleList] = getElementList();

	return (
		<Main className="flex w-full flex-col max-md:max-w-[400px]">
			<section className="h-[190px] w-[297px] lg:h-[410px] lg:w-[644px]">
				<Image
					src={data.imageUrl}
					className="size-full rounded-br-[16px] rounded-tl-[16px]"
					priority={true}
					width={297}
					height={190}
					alt={data.imageAlt}
				/>
			</section>

			<section className="mt-8 flex flex-col gap-6 lg:mt-10 lg:gap-8">
				<h1 className="text-[32px] font-bold text-medinfo-primary-main lg:text-[60px]">
					{data.mainTitle}
				</h1>

				<ArticleList
					as="article"
					className="flex flex-col gap-8 lg:gap-[64px]"
					each={data.mainBody}
					render={(item) => (
						<div className="flex flex-col gap-4 lg:min-w-[616px] lg:gap-7">
							<h4 className="text-[20px] font-semibold text-medinfo-primary-main lg:text-[24px]">
								{item.Title}
							</h4>

							{/* eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml */}
							<div
								className="prose max-w-[80ch] [&>h4]:text-[18px] [&>h4]:font-medium
									[&>h4]:text-medinfo-primary-main [&>p]:text-pretty"
								dangerouslySetInnerHTML={{ __html: item.Content }}
							/>
						</div>
					)}
				/>

				<HealthFinderLogo lastUpdated={data.lastUpdated} />
			</section>

			<section className="mt-14 flex flex-col items-center lg:mt-[92px]">
				<h2 className="text-center text-[28px] font-bold text-medinfo-primary-main lg:text-[52px]">
					Checkout Other Tips
				</h2>

				<ScrollableTipCards />
			</section>
		</Main>
	);
}
export default TipExpandedPage;
