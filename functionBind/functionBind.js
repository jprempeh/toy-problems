/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/



    Function.prototype.bind = function (oThis) {

        var aArgs = Array.prototype.slice.call(arguments, 1),
            functionToBind = this,
            fNOP = function () {},
            fBound = function () {
                return functionToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };



// var alice = {
//       name: 'alice',
//   shout: function(){
//     console.log(this.name);
//   }
// };
// var boundShout = alice.shout.bind(alice);
//boundShout(); // alerts 'alice'
// boundShout = alice.shout.bind({name: 'bob'});
//boundShout(); // alerts 'bob'
//
// var func = function(a, b){ return a + b };
// var boundFunc = func.bind(null, 'foo');
// var result = boundFunc('bar');
// console.log(result === 'foobar'); // true