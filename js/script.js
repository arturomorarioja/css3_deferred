/*
    Upon clicking on the "Load CSS" button, the attribute "disabled" will be removed from uncritical.css
    This way uncritical.css will be loaded for the first time.

    Check it out in the web developer tools' option "Coverage":
    - Upon page load only script.js and styles.css are loaded
    - Upon clicking on the button, uncritical.css gets loaded
*/ 
'use strict';

document.getElementById("load-css").addEventListener("click", function() {
    document.getElementById("uncritical-css").removeAttribute("disabled");
});