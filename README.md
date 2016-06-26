# csv-l10nify
csv-l10n for browserify

```
npm install csv-l10nify
```

### Usage:
```js
var browserify = require('browserify');
var fs = require('fs');

var opt = {};	//csv-l10n options
var csvL10nify = require('csv-l10nify')('./langFile.csv', opt);

var b = browserify({
	entries: ['src/main.js'],
	transform: [csvL10nify.transform]
});

b.bundle().pipe(fs.createWriteStream('dist/build.js'));
```
