/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"myapp./worklist-sap/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
