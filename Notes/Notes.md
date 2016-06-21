Note:
  - javascript is single threaded and only has access to once CPU
  - web server
  - command line based


Node.js
  - server side javascript
  - integration with OS
  - Evented non-blocking I/O
  - CommonJS module system
  - dynamic web apps with Express
  - realtime web app with socket.IO (multi player game, something like google docs)
  - frontend build tools; grunt, gulp, webpack, broccoli, browserify


What you can create with node.js...?
  - CLI programs
  - make network programs (servers, clients)
  - program robots
  - bitcoin

  npm - repository of node.js modules

For 21 June
  - process.argv -- get command line args
  - Evented/ASYNC I/O
  - modules
    - breaking up large app into smaller pieces (multi files)
    - can publish modules on npm and other will be able to use it

Node and ASYNC I/O (the cost of I/O)
  - cpu
    - work horse
    - running all of your instructions
    - cache (L1 3 cpu cycles and L2 14 cpu cycles)
        - remember short term things,
  - ram (250 cpu cycles)

Continuation passing style
 - These have to be a async call - make a request and NOT wait for the data, but once the data comes back  call the call back
 - Similar to what an ajax call does

  - hard drive ( 41,000,000 cpu cycles)
  - network(240 000 000 cpu cycles)
    - ethernet cable
