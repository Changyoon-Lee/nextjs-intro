/** @type {import('next').NextConfig} */

const API_KEY = "487c7e46020529d34bff89e5434a23cf";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "",
  //       destination: "",
  //       permanent: false,
  //     }
  //   ]
  // },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ]
  },
}

module.exports = nextConfig
