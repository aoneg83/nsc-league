import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';

const dockerBuild = process.env.DOCKER_BUILD;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: dockerBuild ? node() : vercel(), // No runtime specification
	}
};

export default config;

