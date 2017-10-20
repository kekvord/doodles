# doodles
A library for interacting with the Google Doodles API

## Installation
```npm install doodles```

### Usage
```js
const doodles = require("doodles");

// Search for doodles matching 'earth day' and return the second page of results, if the 'page' param is not included, it defaults to page one.
doodles.search("earth day", 2).then(console.log);
```
