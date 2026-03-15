class Logger {
  constructor(prefix, ...messages) {
    this.prefix = prefix;
    this.messages = messages;
  }

  logAll() {
    this.messages.forEach(msg => {
      console.log(`${this.prefix}: ${msg}`);
    });
  }
}


const myLogger = new Logger("INFO", "System started", "User logged in", "Data loaded");
myLogger.logAll();