import { feature1, feature2, feature3, hero } from "@public/assets/images";
import Image from "next/image";

function Home() {
	return (
		<main>
			<h1>Free access to knowledge and an easy chit-chat with the best doctors</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur. Amet nunc bibendum vitae pretium ultrices pulvinar
				lacus ultrices. A id fermentum aliquet facilisi consequat tortor. Est donec tincidunt diam sit.
				Arcu ut platea ac purus. Tincidunt faucibus tristique interdum pharetra cras duis mauris.
				Viverra a placerat maecenas felis tristique lectus erat. Tempus nec vel euismod amet cras.
			</p>

			<button>Join Us</button>

			<Image src={hero as string} alt="" width={223} height={273} />

			<h2>Our Core Services</h2>

			<figure>
				<Image src={feature1 as string} alt="" width={223} height={273} />
				<figcaption>Subspecialists</figcaption>
			</figure>
			<figure>
				<Image src={feature2 as string} alt="" width={223} height={273} />
				<figcaption>Open source library</figcaption>
			</figure>
			<figure>
				<Image src={feature3 as string} alt="" width={223} height={273} />
				<figcaption>Virtual consultancy</figcaption>
			</figure>

			<h3>Why MedInfo Nigeria?</h3>
		</main>
	);
}

export default Home;
