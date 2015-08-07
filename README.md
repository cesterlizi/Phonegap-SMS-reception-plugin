SMS reception plugin for Phonegap
===============================
By Pierre-Yves Orban

This Android Phonegap plugin allows you to receive incoming SMS. You have the possibility to stop the message broadcasting and, thus, avoid theincoming message native popup.

This plugin was successfully tested with Phonegap 2.5 and Android 4.2.2 (on a Samsung Galaxy Nexus device).
This plugin was successfully tested with Codova 4.0.0 and Android 4.3/5.0.1 (on a Samsung Galaxy S3 & S4 & S5).

## Adding this plugin to your project ##

cordova plugin add https://github.com/cesterlizi/Phonegap-SMS-reception-plugin.git


## Using the plugin ##

### isSupported ###
Check if the SMS technology is supported by the device.

Example:
```javascript
    if(window.cordova && window.cordova.plugins && cordova.plugins.smsin) {
      console.log("SMS Plugin: check if supported");
      
      if(cordova.plugins.smsin) {
          cordova.plugins.smsin.isSupported (function(supported) {
              cordova.plugins.smsin.supported = supported;
              console.log("SMS supported: "+cordova.plugins.smsin.supported );
            }, function() {
              cordova.plugins.smsin.supported = false;
              console.log("SMS init error");
            });
      }
```

### startReception ###
Start the SMS receiver waiting for incoming message
The success callback function will be called everytime a new message is received.
The given parameter is the received message formatted such as: phoneNumber>message (Exemple: +32472345678>Hello World)
The error callback is called if an error occurs.

Example:
```javascript
  cordova.plugins.smsin.startReception (function(msg) {
    alert(msg);
  }, function() {
    alert("Error while receiving messages");
  });
```

### stopReception ###
Stop the SMS receiver

Example:
```javascript
  cordova.plugins.smsin.stopReception (function() {
    alert("Correctly stopped");
  }, function() {
    alert("Error while stopping the SMS receiver");
  });
```

### Aborting a broadcast ###
If you abort the broadcast using this plugin (by setting the broadcast variable to true in the SmsReceiver), the SMS will not be broadcast to other applications like the native SMS app. So ... be careful !

A good way to manage this is to stop the sms reception when the onPause event is fired and, when the onResume event is fired, restart the reception.
  
## Licence ##

The MIT License

Copyright (c) 2013 Pierre-Yves Orban

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
