function Greeter() {}

Greeter.prototype.greet = function(name) {
    return `Hello ${name}!`;
};

module.exports = new Greeter();