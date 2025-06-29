/** @type {import('next').NextConfig} */
// Inside of the object we will set up the images object
const nextConfig = {
    images: {
        // this is an array
        // We can add multiple URLs
        // For every URL, we will construct an object & in this case we are looking for HTTPS
        // We then want to use the host name
        remotePatterns: [
            { 
                protocol:'https',
                hostname: 'www.course-api.com',
                port: '',
                pathname: '/images/**'
            }
        ]
    }
};

export default nextConfig;
