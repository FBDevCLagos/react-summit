import React from "react";
import Particles from "react-particles-js";

export default ({ backgroundColor }) => (
	<Particles
		params={{
			particles: {
				number: {
					value: 50,
					density: {
						enable: true,
						value_area: 800
					}
				},
				line_linked: {
					enable: true
				},
				move: {
					speed: 10,
					out_mode: "out"
				},
				shape: {
					type: ["images", "circle"],
					images: [
						{
							src:
								"https://cdn0.froala.com/assets/editor/pages/B/frameworks/react-6a9ca3fcd0c84c07c1d8bbbad0eb7dfe.svg",
							height: 20,
							width: 23
						},
						{
							src:
								"https://cdn0.froala.com/assets/editor/pages/B/frameworks/react-6a9ca3fcd0c84c07c1d8bbbad0eb7dfe.svg",
							height: 20,
							width: 20
						},
						{
							src:
								"https://cdn0.froala.com/assets/editor/pages/B/frameworks/react-6a9ca3fcd0c84c07c1d8bbbad0eb7dfe.svg",
							height: 20,
							width: 20
						}
					]
				},
				color: {
					value: "#CCC"
				},
				size: {
					value: 30,
					random: false,
					anim: {
						enable: true,
						speed: 4,
						size_min: 10,
						sync: false
					}
				}
			},
			retina_detect: false
		}}
		style={{
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%"
		}}
	/>
);
