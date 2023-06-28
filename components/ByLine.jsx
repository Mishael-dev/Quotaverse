/** @format */

import React from "react";
import Link from "next/link";
import TwitterLogo from "./twitterLogo";

export default function ByLine() {
	return (
		<div className=" mt-8 flex flex-col gap-y-2">
			<p>Javascript Mastery practice project</p>
			<div className=" flex gap-x-2 items-center">
				<p className="font-bold flex-shrink-0">Developed by</p>{" "}
				<Link href="https://twitter.com/DaapMishae85585">
					<span className="h-full w-full bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 px-4 py-2 rounded-full flex items-center gap-2 hover:border-blue-600/30">
						Mishael <TwitterLogo />
					</span>
				</Link>
			</div>
		</div>
	);
}
