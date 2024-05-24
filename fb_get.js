// public/fb_get.js
console.log("FBget: Firebase dependency file loaded!!!");

// Function to fetch configuration from the serverless function
const getConfig = async () => {
    const response = await fetch('/api/config');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const config = await response.json();
    return config;
};

// Function to initialize Firebase and export Firebase services
let f_config;

export const initFirebase = async () => {
    try {
        const config = await getConfig();

        f_config = {
            apiKey: config.apiKey,
            authDomain: config.authDomain,
            projectId: config.projectId,
            storageBucket: config.storageBucket,
            messagingSenderId: config.messagingSenderId,
            appId: config.appId,
            measurementId: config.measurementId,
            databaseURL: config.databaseURL,
        };

        console.log("Firebase Config Extracted: ", f_config);

    } catch (error) {
        console.error('Error initializing Firebase:', error);
    }
};

// Export the configuration object
export { f_config };
