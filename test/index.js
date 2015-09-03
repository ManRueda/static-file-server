var smfs = require('../src/smfs');

smfs.serve(process.argv[2], {
  headers: {
    'custom-header': 'test'
  }
}, function(err, url){
  console.log(url);
});
