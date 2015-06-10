var noflo = require('noflo');

exports.getComponent = function() {
  var component = new noflo.Component();
  component.description = "This is a test component";

  component.inPorts.add('in', {datatype: 'array'}, function(e, payload) {
    switch (e) {
      case 'data':
        var first = payload.pop();
        console.log(first);

        return component.outPorts.out.send(payload);

       default: 
        console.log(e, payload); 
    }
  });

  component.outPorts.add('out', {datatype: 'array'});

  return component;
};