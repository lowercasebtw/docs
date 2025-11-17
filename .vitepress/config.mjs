import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Animatium",
	description: "Documentation on Animatium",
	outDir: "./docs",
	appearance: "dark",
	assetsDir: "./docs/assets",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "Home", link: "/" }],

		sidebar: [
			{
				text: "Pages",
				items: [
					{ text: "Welcome", link: "/welcome" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/lowercasebtw/docs" },
		],
	},
});
