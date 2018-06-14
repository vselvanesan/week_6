"use strict";

/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
var app = void 0;
(function (app) {
    "use strict";

    // About Button Click event handler

    function Start() {
        // local variable
        var title = document.title;

        console.log("%c App Started!", "font-weight:bold; font-size: 20px;");
        console.log("%c ----------------------------", "font-weight:bold; font-size: 20px;");
        console.log("Title: " + title);

        try {

            switch (title) {
                case "COMP125 - Home":

                    content.HomeContent();
                    break;

                case "COMP125 - About":
                    content.AboutContent();
                    break;

                case "COMP125 - Contact":
                    content.ContactContent();
                    break;

                default:
                    throw "Title not Defined";
                    break;
            }
        } catch (err) {
            console.log(err);
            console.warn("Something went wrong when switching pages");
        }
    }

    //window.onload = Start;

    window.addEventListener("load", Start);

    // these are all app properties
    app.Title = document.title;
})(app || (app = {}));