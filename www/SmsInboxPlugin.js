var exec = require('cordova/exec');

/**
 * Check if the device has a possibility to send and receive SMS
 */
exports.isSupported = function(successCallback,failureCallback) {
  return exec(successCallback, failureCallback, 'SmsInboxPlugin', 'HasSMSPossibility', []);
}

/**
 * Check if the device has a possibility to send and receive SMS
 * the successCallback function receives one string as parameter
 * formatted such as: [phonenumber]>[message].
 * Example: +32472345678>Hello World
 */
exports.startReception = function(successCallback,failureCallback) {
  return exec(successCallback, failureCallback, 'SmsInboxPlugin', 'StartReception', []);
}

/**
 * Stop the receiving sms.
 */
exports.stopReception = function(successCallback,failureCallback) {
  return exec(successCallback, failureCallback, 'SmsInboxPlugin', 'StopReception', []);
}
