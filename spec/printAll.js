var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('in', function (event, payload) {
    if (event !== 'data') {
      return;
    }
    // Do something with the packet, then
    
    var len = payload.length;
    
    for (var i=0; i<len; i++) {
     	console.log('i', payload[i]); 
    }
    
    c.outPorts.out.send(payload);
  });
  c.outPorts.add('out');
  return c;
};