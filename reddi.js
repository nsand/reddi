const doc = document;
const dcl = 'DOMContentLoaded';
const cbs = [];

doc.addEventListener(dcl, function handler() {
	doc.removeEventListener(dcl, handler);
	cbs.forEach(cb => {
		cb();
	});
}, false);

export default function reddi(cb) {
	// interactive/complete means it's ready
	if (/^i|^c/.test(doc.readyState)) {
		cb();	
	}
	else {
		// Otherwise, queue up the callbacks
		cbs.push(cb);
	}

};
