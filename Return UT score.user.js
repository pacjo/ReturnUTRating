// ==UserScript==
// @name        Return UT score
// @namespace   Violentmonkey Scripts
// @match       https://app.usertesting.com/my_dashboard/available_tests_v3
// @grant       none
// @version     1.1
// @author      pacjo
// @description Shows current rating as a number
// ==/UserScript==

let current_rating = document.body.textContent.match(/"tester_quality_rating":.+?(?=,)/)[0].substr(document.body.textContent.match("tester_quality_rating")[0].length + 3, 4)

// document.getElementsByClassName("t-ghost mb-0x")[0].innerText = document.getElementsByClassName("t-ghost mb-0x")[0].innerText.substring(1, document.getElementsByClassName("t-ghost mb-0x")[0].innerText = document.getElementsByClassName("t-ghost mb-0x")[0].innerText.length - 1) + ": " + document.getElementsByClassName("sr-only")[1].innerText.substring(8, 11)
document.getElementsByClassName("t-ghost mb-0x")[0].innerText = document.getElementsByClassName("t-ghost mb-0x")[0].innerText.substring(1, document.getElementsByClassName("t-ghost mb-0x")[0].innerText = document.getElementsByClassName("t-ghost mb-0x")[0].innerText.length - 1) + ": " + current_rating
