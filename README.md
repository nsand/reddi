# reddi
A tiny, UMD script that executes code when the DOM is ready

## Usage

### Global
```javascript
reddi(function () {
  // This code will execute only once the DOM has loaded
});
```

### CommonJS
```javascript
var reddi = require('reddi');
reddi(function () {
  // This code will execute only once the DOM has loaded
});
```

### AMD
```javascript
define(['reddi'], function (reddi) {
  reddi(function () {
    // This code will execute only once the DOM has loaded
  });
});
```
