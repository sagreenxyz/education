export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/sagreenxyz/education/blob/main/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: 'Introduction', header: true },
		{ text: 'Overview', link: 'en/introduction' },

		
		{ text: 'Basics', header: true },
		{ text: 'HTML', link: 'en/' },
		{ text: 'CSS', link: 'en/' },
		{ text: 'JavaScript', link: 'en/' },

		{ text: 'Intermediate JavaScript', header: true },
		{ text: 'Destructuring and Spread Operator', link: 'en/' },
		{ text: 'Asynchronous JavaScript', link: 'en/' },
		{ text: 'Fetch API', link: 'en/' },
		{ text: 'Modules', link: 'en/' },
		{ text: 'Nodejs and Node Package Manager', link: 'en/' },
		
		{ text: 'REST API and Databases', header: true },
		{ text: 'JSON Data', link: 'en/' },
		{ text: 'Express', link: 'en/' },
		{ text: 'Document Databases', link: 'en/' },
		{ text: 'MongoDB', link: 'en/' },
		{ text: 'Mongoose (ODM)', link: 'en/' },
		{ text: 'MongoDB Atlas', link: 'en/' },
		{ text: 'SQL Databases', link: 'en/' },
		{ text: 'PostgreSQL', link: 'en/' },
		{ text: 'Prisma (ORM)', link: 'en/' },
		{ text: 'Supabase', link: 'en/' },
		{ text: 'SQLite', link: 'en/' },
		{ text: 'Redis', link: 'en/' },

		{ text: 'Front-End Libraries and Frameworks', header: true },
		{ text: 'React', link: 'en/' },
		{ text: 'Astro', link: 'en/' },
		{ text: 'NextJS', link: 'en/' },

		{ text: 'Libaries', header: true },
		{ text: 'BootstrapCSS and Components', link: 'en/' },
		{ text: 'TailwindCSS and HeadlessUI', link: 'en/' },
		{ text: 'Styled Components', link: 'en/' },
		{ text: 'MaterialUI', link: 'en/' },


		{ text: 'Resources', header: true },
		{ text: 'Fonts', link: 'en/' },
		{ text: 'Icons', link: 'en/' },
	],
};
