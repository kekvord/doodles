# doodles
A library for interacting with the Google Doodles API

## Installation
```npm install doodles (i havent published it yet)```

### Usage
```js
const doodles = require("doodles");

// Search for doodles matching 'earth day' and return the second page of results, if the 'page' param is not included, it defaults to page one.
doodles.search("earth day", 2).then(console.log); // Get the third page (If you're confused, remember, arrays start at 0)
doodles.archive(2012, 1).then(console.log); // Get doodles from the year 2012 in the month of January
```
