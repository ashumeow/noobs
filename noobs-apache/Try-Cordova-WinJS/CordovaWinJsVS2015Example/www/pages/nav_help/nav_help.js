﻿(function () {
	"use strict";

	WinJS.UI.Pages.define("./pages/nav_help/nav_help.html", {
		// This function is called whenever a user navigates to this page. It
		// populates the page elements with the app's data.
		ready: function (element, options) {
			// Initialize the page here.

			//keeps effect button for split views after page change
			functionsExample.hoverSplitView('cmdHelp');

			//back button
			document.addEventListener("backbutton", functionsExample.onBackKeyDown, false);

			//native alert/dialog button (see index.js for "functionsExample.naviteAlert")
			var exampleAlertButton = document.querySelector("#alertButton");
			exampleAlertButton.addEventListener('click', function () { functionsExample.naviteAlert("This is a native alert/dialog"); });

			//enter animation effect
			WinJS.UI.Animation.enterPage([[document.querySelector("header")], [document.querySelector("section")]], null);

		}

	});

})();