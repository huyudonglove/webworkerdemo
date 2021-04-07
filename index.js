var AsyncLock = require('async-lock');
var lock = new AsyncLock();
lock.acquire("kandy", function (done) {
    console.log(">kandy 1");
    done("hello","world");
    },function (err,ret) {
        console.log("in k1's cd~"+err+" "+ret);
      }
 )
