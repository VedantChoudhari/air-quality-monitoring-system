console.log("FBjs: Firebase JS file started successfully!!!");

//--------------------------------------------------------------------------------
// firebase app:

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

// // firebase database:
// import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// // firebase auth:
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// // get config from .env
// import { getConfig } from './fb_get.js';


// getConfig().then(config => {
//     const f_config = {
//         apiKey: config.apiKey,
//         authDomain: config.authDomain,
//         projectId: config.projectId,
//         storageBucket: config.storageBucket,
//         messagingSenderId: config.messagingSenderId,
//         appId: config.appId,
//         measurementId: config.measurementId,
//         databaseURL: config.databaseURL,
//     };

//     const data1 = config.var1;
//     const data2 = config.var2;

//     const firebaseConfigSpecific = f_config;
//     console.log("Firebase Config Extracted: ");

//     const app = initializeApp(firebaseConfigSpecific);
//     const auth = getAuth(app);
//     const db = getDatabase();

// }).catch(error => {
//     console.error('Error fetching configuration:', error);
// });

// get config from .env
import { f_config, initFirebase, data1, data2 } from './fb_get.js';

// Import Firebase modules
const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js');

const { getDatabase, ref, child, get } = await import('https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js');

const { getAuth, signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js');

// wait to fetch config:
await initFirebase();

// Initialize Firebase with the fetched config
const app = initializeApp(f_config);
const auth = getAuth(app);
const db = getDatabase(app);
console.log("Firebase initialized successfully");

//--------------------------------------------------------------------------------
var usr_uid, usr_token_id;

async function login(time_pass) {
    let t = new Date();
    console.log("fn login() called @ " + t);

    return signInWithEmailAndPassword(auth, data2, data1)
        .then((response) => {
            // console.log(response);
            usr_uid = response.user.uid;
            usr_token_id = response.user.accessToken;

            alert("Authentication successful: ");
            console.log(usr_uid + " signed in successfully...");
        })
        .catch((error) => {
            console.log("Couldn't log in!");
            console.log("Error: " + error);
            alert("Couldn't log in!" + "\nError: " + error);
        })
}

//--------------------------------------------------------------------------------
var firebase_node;

async function get_data(ideal_mode = false) {
    let t = new Date();
    console.log("fn get_data() called @ " + t);

    // console.log("get_data: Using the token `" + usr_token_id.slice(0, 5) + "...`");

    var db_ref = ref(db);

    var loc = "";
    if (!ideal_mode) {
        loc = "users/" + usr_uid + "/live_data";
    }
    else {
        loc = "users/" + usr_uid + "/full_day_data";
    }

    // console.log("DEBUG:", loc);

    // get(child(db_ref, "users/" + usr_uid + "/fire_node"), usr_token_id)
    return get(child(db_ref, loc), usr_token_id)
        .then((response_node) => {
            firebase_node = response_node;

            console.log("Got data under UID: " + response_node.key);

            var bs_temp = [];
            var bs_hum = [];
            var bs_feel = [];
            var bs_mq135 = [];
            var bs_mq4 = [];
            var bs_keys = [];

            var bs_gas = response_node.val()['gas_node'];
            var bs_fire = response_node.val()['fire_node'];

            var lastValidReading = null; // Initialize last valid reading

            for (const key in response_node.val()) {
                if (key !== "fire_node" && key !== "gas_node") {
                    bs_keys.push(key);

                    const currentReading = response_node.val()[key];
                    // Check if the current reading is valid (not undefined, NaN, or any other invalid value)
                    if (isValidReading(currentReading)) {
                        // Use the current reading
                        bs_temp.push(currentReading.temp);
                        bs_hum.push(currentReading.hum);
                        bs_feel.push(currentReading.feel);
                        bs_mq135.push(currentReading.mq135);
                        bs_mq4.push(currentReading.mq4);
                        lastValidReading = currentReading; // Update last valid reading
                    }
                    else {
                        // Use the last valid reading if available
                        if (lastValidReading !== null) {
                            bs_temp.push(lastValidReading.temp);
                            bs_hum.push(lastValidReading.hum);
                            bs_feel.push(lastValidReading.feel);
                            bs_mq135.push(lastValidReading.mq135);
                            bs_mq4.push(lastValidReading.mq4);
                        }
                        else {
                            // If no valid readings encountered yet, use default values (you can adjust this based on your requirements)
                            bs_temp.push(33);
                            bs_hum.push(67);
                            bs_feel.push(39);
                            bs_mq135.push(130);
                            bs_mq4.push(153);
                        }
                    }
                }
            }

            function isValidReading(reading) {
                // Check if the reading is a number and not NaN
                return typeof reading === "object" &&
                    !isNaN(reading.temp) &&
                    !isNaN(reading.hum) &&
                    !isNaN(reading.feel) &&
                    !isNaN(reading.mq135) &&
                    !isNaN(reading.mq4);
            }

            console.log("Fire_Node = " + bs_fire + "; Gas_Node = " + bs_gas);
            // console.log("Done processing the data received from the firebase...");

            var result = {
                bs_temp: bs_temp,
                bs_hum: bs_hum,
                bs_feel: bs_feel,
                bs_mq135: bs_mq135,
                bs_mq4: bs_mq4,
                bs_keys: bs_keys,
                bs_gas: bs_gas,
                bs_fire: bs_fire,
                total_length: bs_temp.length
            };

            // Return the result object
            return result;

        })
        .catch((error) => {
            alert("Error in extracting data: " + error);
        })
}

var var_random = "bhushan_s";
export { login, get_data, var_random, firebase_node };