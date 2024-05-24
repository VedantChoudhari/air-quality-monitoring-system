// this will run on the client side:

export const getConfig = async () => {
    const response = await fetch('/api/fb_env.js');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const config = await response.json();
    return config;
};