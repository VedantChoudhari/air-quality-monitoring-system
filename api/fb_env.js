export default (req, res) => {
  res.json({
    apiKey: process.env.REACT_APP_api_key,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
    databaseURL: process.env.REACT_APP_databaseURL,
    var1: process.env.REACT_APP_var1,
    var2: process.env.REACT_APP_var2,
  });
};

