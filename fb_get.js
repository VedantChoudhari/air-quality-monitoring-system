// this will run on the client side:

console.log("FBjs: Firebase JS file started successfully!!!");

// Function to fetch configuration from the serverless function
export const getConfig = async () => {
    const response = await fetch('/api/config');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const config = await response.json();
    return config;
};

// Function to initialize Firebase and export Firebase services
export let f_config;

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
