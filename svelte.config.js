import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';

const dockerBuild = process.env.DOCKER_BUILD;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: dockerBuild ? node() : vercel({
			runtime: 'nodejs18.x' // Use 'nodejs18.x' for Vercel runtime
		}),
	}
};

export default config;
