const config = {
    env: {
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
            apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
        },

    },
};

export default config;
