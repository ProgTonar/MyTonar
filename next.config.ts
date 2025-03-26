import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: false,
	images: {
		domains: ['my.tonar.info', '127.0.0.1:8080'],
	},
	webpack: (config) => {
		config.resolve.alias = {
		  ...config.resolve.alias,
		  'react-dom$': 'react-dom/profiling',
		  'scheduler/tracing': 'scheduler/tracing-profiling',
		}
		return config
	  }
}

export default nextConfig
