/**
 * Firebase config para sa shared image data (makikita sa lahat ng browser).
 * 1. Pumunta sa https://console.firebase.google.com
 * 2. Create project (o piliin ang existing)
 * 3. Project Settings (gear) > Your apps > Add web app > Copy the config
 * 4. Ilagay dito ang config object. Kung blank, localStorage lang ang gagamitin (hindi shared).
 */
window.FIREBASE_CONFIG = {
    apiKey: '',
    authDomain: '',
    databaseURL: 'https://console.firebase.google.com/u/0/project/furniturepampanga-94d0f/overview?authuser=0',  // hal. https://YOUR-PROJECT.firebaseio.com
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
};
// Kung may databaseURL na, i-sync ang images sa Firebase at makikita sa lahat ng browser.
