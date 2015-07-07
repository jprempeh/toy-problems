Function.prototype.bind = function(func, context) {
    // return a function bound to the context
    var prevArgs = Array.prototype.slice.call(arguments, 2);
    var func = this;

    return function(){
        var args = Array.prototype.slice.call(arguments);
        args = prevArgs.concat(args);

        return func.apply(context, args);
    }

};