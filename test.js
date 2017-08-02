//console.log('hello');

function fn(namespace) {
    return console.log.bind(console, namespace);
}

var f = fn('hello');
f('world');