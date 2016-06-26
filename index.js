'use strict';

var through = require('through');
var L10n = require('csv-l10n');

module.exports = function (langFile, opt) {
	var l10n = L10n(langFile, opt);

	l10n.transform = function (file) {
		var data = '';
		var stream = through(write, end);

		function write(buf) {
			data += buf
		}

		function end() {
			var results = l10n.render(data);

			if(l10n.count)
				stream.emit('file', langFile);

			stream.queue(results);
			stream.queue(null);
		}

		return stream;
	};

	return l10n;
};