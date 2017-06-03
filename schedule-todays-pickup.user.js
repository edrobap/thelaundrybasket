// ==UserScript==
// @name         TLB
// @namespace    http://edrobap.com/
// @version      0.1
// @description  Book today's laundry pickup!
// @author       Edrobap
// @match        *://thelaundrybasket.in/schedule-pickup.html
// @match        *://www.thelaundrybasket.in/schedule-pickup.html
// @icon         http://thelaundrybasket.in/images/bx6.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('datepicker').value =  ['getDate', 'getMonth', 'getFullYear'].map(i => new Date()[i]()).map(i => i < 10 ? '0' + i : i).join('-');
})();
