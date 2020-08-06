const withOffline = require("next-offline")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
})

module.exports = withBundleAnalyzer(
	withOffline({
		exportPathMap: async function () {
			const paths = {
				"/": { page: "/" },
			}

			return paths
		}
	})
)
