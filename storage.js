(function () {
    var PREFIX = 'furniturePampanga';
    var FB_PATH = 'siteData';
    var STORAGE_READY_EVENT = 'furniturePampangaStorageReady';

    function getAllLocalData() {
        var out = {};
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (key && key.indexOf(PREFIX) === 0) {
                    out[key] = localStorage.getItem(key);
                }
            }
        } catch (e) {}
        return out;
    }

    function applyToLocalStorage(data) {
        if (!data || typeof data !== 'object') return;
        try {
            for (var key in data) {
                if (data.hasOwnProperty(key) && key.indexOf(PREFIX) === 0) {
                    localStorage.setItem(key, data[key]);
                }
            }
        } catch (e) {}
    }

    function setReady() {
        window.__storageReady = true;
        try {
            window.dispatchEvent(new Event(STORAGE_READY_EVENT));
        } catch (err) {
            var e = document.createEvent('Event');
            e.initEvent(STORAGE_READY_EVENT, true, true);
            window.dispatchEvent(e);
        }
    }

    function runWhenStorageReady(callback) {
        if (window.__storageReady) {
            callback();
            return;
        }
        window.addEventListener(STORAGE_READY_EVENT, function once() {
            window.removeEventListener(STORAGE_READY_EVENT, once);
            callback();
        });
    }

    function syncToFirebase() {
        var config = window.FIREBASE_CONFIG;
        if (!config || !config.databaseURL || typeof firebase === 'undefined') return Promise.resolve();
        try {
            var app = firebase.app();
            var db = firebase.database();
            var data = getAllLocalData();
            return db.ref(FB_PATH).set(data).then(function () {
                return true;
            });
        } catch (e) {
            return Promise.resolve(false);
        }
    }

    window.runWhenStorageReady = runWhenStorageReady;
    window.syncToFirebase = syncToFirebase;
    window.__storageReady = false;

    var config = window.FIREBASE_CONFIG;
    if (!config || !config.databaseURL) {
        setReady();
        return;
    }

    if (typeof firebase === 'undefined') {
        setReady();
        return;
    }

    try {
        if (!firebase.apps || !firebase.apps.length) {
            firebase.initializeApp(config);
        }
        var db = firebase.database();
        var ref = db.ref(FB_PATH);
        var timeout = setTimeout(function () {
            setReady();
        }, 6000);
        ref.once('value').then(function (snapshot) {
            clearTimeout(timeout);
            var val = snapshot.val();
            if (val && typeof val === 'object') {
                applyToLocalStorage(val);
            }
            setReady();
        }).catch(function () {
            clearTimeout(timeout);
            setReady();
        });
    } catch (e) {
        setReady();
    }
})();
