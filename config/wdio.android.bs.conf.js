require('dotenv').config()
const { config } = require('./wdio.shared.conf');


//
// ========================
// Browserstack Credentials
// ======================== 
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

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
        'appium:deviceName': 'Google Pixel 3',
        'appium:platformVersion': '10.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://9411644a3249b2cf8a67f3c8d366e26ad2154bda',
        'appium:autoGrantPermissions': true,
}]

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance    // your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [
    ['browserstack', {
        logPath: './'
    }]
],

exports.config = config;

