(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'module'], factory);
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.redy = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	module.exports = redy;
	var document = window.document;
	var dcl = 'DOMContentLoaded';
	var cbs = [];

	function handler() {
		cbs.forEach(function (cb) {
			cb();
		});
		document.removeEventListener(dcl, handler);
	}
	document.addEventListener(dcl, handler, false);

	function redy(cb) {
		// interactive/complete means it's ready
		if (/^(i|c)/.test(document.readyState)) {
			cb();
		} else {
			// Otherwise, queue up the callbacks
			cbs.push(cb);
		}
	}

	;
});