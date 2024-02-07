const path = require('path');
const { config } = require('./wdio.shared.conf');


// ====================
// Runner Configuration
// ==================== 
config.port = 4723,

//
// ============
// Specs
// ============ 
config.specs = [
    './test/specs/android/*.spec.js'
];

//
// ============
// Capabilities
// ============ 
config.capabilities = [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 3',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        //C:\Users\m.lialik\projects\appium\app\android\ApiDemos-debug.apk
        //'appium:app': path.join(process.cwd(), './app/android/ApiDemos-debug.apk'),
        'appium:app': path.join(process.cwd(), './app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true,
}]

 
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance    // your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
  
config.services = [
    ['appium', {
        logPath: './'
    }]
],

exports.config = config;

