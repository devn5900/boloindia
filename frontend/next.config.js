/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        REACT_APP_API_URL:"http://localhost:8080"
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'blogger.googleusercontent.com',
            port: '',
            pathname: '/**/**',
          },
          {
            protocol:"https",
            hostname:"res.cloudinary.com",
            pathname:"/**/**"
          },
          {
            protocol:"https",
            hostname:"www.pinclipart.com",
            pathname:"/**/**"
          }
        ],
      },
}

module.exports = nextConfig
