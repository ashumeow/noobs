(function () {
	"use strict";

	WinJS.UI.Pages.define("./pages/nav_settings/nav_settings.html", {
		// This function is called whenever a user navigates to this page. It
		// populates the page elements with the app's data.
		ready: function (element, options) {
			// Initialize the page here.

			//keeps effect button for split views after page change
			functionsExample.hoverSplitView('cmdSettings');

			//back button
			document.addEventListener("backbutton", functionsExample.onBackKeyDown, false);

			//Creates ToggleSwitch and apply label
			var exampleSwitchControl = new WinJS.UI.ToggleSwitch(document.querySelector("#exampleSwitch"));
			exampleSwitchControl.labelOn = "On";
			exampleSwitchControl.labelOff = "Off";

			//recover setting from localstorage
			if (functionsExample.readItem("exampleSwitch") != null && functionsExample.readItem("exampleSwitch") == "1") {
				exampleSwitchControl.checked = true;
			}
			else {
				exampleSwitchControl.checked = false;
			}

			// control event for switch
			exampleSwitchControl.addEventListener('change', function () { ctrlExampleSwitch(exampleSwitchControl); });

			//enter animation effect
			WinJS.UI.Animation.enterPage([[document.querySelector("header")], [document.querySelector("section")]], null);

		}

	});

	function ctrlExampleSwitch(exampleSwitchControl) {
		if (exampleSwitchControl.checked == true) {
			functionsExample.saveItem("exampleSwitch", "1");//save setting in localstorage (see index.js)
		}
		else {
			functionsExample.saveItem("exampleSwitch", "0");//save setting in localstorage (see index.js)
		}
	};


})();
