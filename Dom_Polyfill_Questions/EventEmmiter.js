class EventEmitter {
    constructor() {
      this.events = {}; // Holds event-name to callbacks mapping
    }
  
    // Subscribe to an event
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    // Emit an event (i.e., trigger all listeners for the event)
    emit(event, ...args) {
      if (this.events[event]) {
        this.events[event].forEach(listener => {
          listener(...args);
        });
      }
    }
  
    // Remove a specific listener from an event
    off(event, listenerToRemove) {
      if (!this.events[event]) return;
  
      this.events[event] = this.events[event].filter(
        listener => listener !== listenerToRemove
      );
    }
  
    // Subscribe to an event only once
    once(event, listener) {
      const wrapper = (...args) => {
        listener(...args);
        this.off(event, wrapper); // remove after first call
      };
      this.on(event, wrapper);
    }
  }
  const emitter = new EventEmitter();

  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Listen to 'greet' event
  emitter.on('greet', greet);
  
  // Emit the 'greet' event
  emitter.emit('greet', 'Shaikh');  // Output: Hello, Shaikh!
  
  // Remove the listener
  emitter.off('greet', greet);
  
  // Try emitting again (no output this time)
  emitter.emit('greet', 'Siddiq');
  
  // Listen once
  emitter.once('sayHi', name => {
    console.log(`Hi, ${name} (once only)`);
  });
  
  emitter.emit('sayHi', 'Siddiq'); // Output: Hi, Siddiq (once only)
  emitter.emit('sayHi', 'Siddiq'); // No output
    