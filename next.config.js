// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     Images: {
//         domains: ['cdn.imagin.studio']
//     },
//     typescript: {
//         ignoreBuildErrors: true,
//     }
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript: {
        ignoreBuildErrors: true
    },
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig