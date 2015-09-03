# Static File Server
This module create a http server and serve all files using a hash.


The module only have one method (```serve```). This method receives a file path as first parameter, an object to provide custom response headers and a callback to receives the file URL.
```javascript
var smfs = require('smfs');

smfs.serve(process.argv[2], {
  headers: {
    'custom-header': 'test'
  }
}, function(err, url){
  console.log(url);
});

```
