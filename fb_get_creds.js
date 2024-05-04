// take this from window.prompt:
const config_link = window.prompt("Enter the config URL: ");

var firebaseConfig;

// Fetch file content
fetch(`https://drive.google.com/uc?id=${config_link.split("/")[5]}`)
    .then(response => response.text())
    .then(data => {
        const fireConfig = JSON.parse(data);
        console.log("Firebase Config fetched.");
        console.log(fireConfig);
        // console.log(typeof (data));
        // console.log(typeof (fireConfig));

        firebaseConfig = fireConfig;
    })
    .catch(error => console.error('Error fetching file:', error));

export { firebaseConfig };
