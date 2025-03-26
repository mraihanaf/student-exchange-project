import adapter from '@sveltejs/adapter-auto';

const config = { kit: { adapter: adapter(), env: { dir: "./"}, alias: {
    $db: "./src/db",
    $aws: "./src/aws"
} } };

export default config;
