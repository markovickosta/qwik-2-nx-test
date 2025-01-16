import { join } from 'path';

module.exports = {
	plugins: {
		tailwindcss: {
			config: join(__dirname, 'tailwind.config'),
		},
		autoprefixer: {},
		cssnano: {},
	},
};
