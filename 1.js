function con(val){
    console.log(val)
    postMessage(val)
 
}
self.onmessage=function(event){
    con(event.data);
}
