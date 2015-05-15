/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  obj.__proto__.on = function(event, callback) {
      if(!this.hasOwnProperty('events')) {
        this.events = {};
      }
      if (!this.events.hasOwnProperty(event)) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    };

  obj.__proto__.trigger = function(event) {
      var callbacks = this.events[event];
      var tail = Array.prototype.slice.call(arguments, 1);
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].apply(this, tail);
      }
    };
  return obj;
};