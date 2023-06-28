/** @format */

import Feed from "@components/Feed";
import ByLine from "@components/ByLine";

const Home = () => (
	<section className="w-full flex-center flex-col">
		<h1 className="head_text text-center">
			Quotes that Resonate,
			<br className="max-md:hidden" />
			<span className="orange_gradient text-center"> Inspire Greatness</span>
		</h1>
		<p className="desc text-center">
			Quotaverse is a captivating hub of inspiration, connecting quote
			enthusiasts worldwide through profound words and shared wisdom.
		</p>

		<ByLine />

		<Feed />
	</section>
);

export default Home;
