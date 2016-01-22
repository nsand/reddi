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
		global.reddi = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	module.exports = reddi;
	var doc = window.document;
	var dcl = 'DOMContentLoaded';
	var cbs = [];

	doc.addEventListener(dcl, function handler() {
		doc.removeEventListener(dcl, handler);
		cbs.forEach(function (cb) {
			cb();
		});
	}, false);

	function reddi(cb) {
		// interactive/complete means it's ready
		if (/^i|^c/.test(doc.readyState)) {
			cb();
		} else {
			// Otherwise, queue up the callbacks
			cbs.push(cb);
		}
	}

	;
});