// ==UserScript==
// @name        Return UT score
// @namespace   Violentmonkey Scripts
// @match       https://app.usertesting.com/my_dashboard/*
// @grant       none
// @version     1.3
// @author      pacjo
// @description Shows current rating and more
// ==/UserScript==

setTimeout(function () {

  // Calculate values
  
  console.log("ReturnUTRating started")
  
  let current_rating = document.body.textContent.match(/"tester_quality_rating":.+?(?=,)/)[0].substring(document.body.textContent.match("tester_quality_rating")[0].length + 3)
  let tests_completed = document.body.textContent.match(/"total_tests_completed":.+?(?=,)/)[0].substring(document.body.textContent.match("total_tests_completed")[0].length + 3)
  //let account_id = document.body.textContent.match(/"account":{"id":.+?(?=})/)[0].substring(document.body.textContent.match("\"account\":{\"id\":")[0].length)
  
  // Extended menu

  // rating
  doc = document.createElement("tk-dropdown-footer")
  doc.innerHTML = "<p class=\"dropdown__link\"></p>"
  doc.firstChild.innerText = "Current rating: " + current_rating
  document.getElementsByClassName("mv-2x hydrated")[0].append(doc)
  
  // tests completed
  doc2 = document.createElement("tk-dropdown-item")
  doc2.innerHTML = "<p class=\"dropdown__link\"></p>"
  doc2.firstChild.innerText = "Tests completed: " + tests_completed
  document.getElementsByClassName("mv-2x hydrated")[0].append(doc2)
  
  /*
  
  // account id
  doc3 = document.createElement("tk-dropdown-item")
  doc3.innerHTML = "<p class=\"dropdown__link\"></p>"
  doc3.firstChild.innerText = "Account ID: " + account_id
  document.getElementsByClassName("mv-2x hydrated")[0].append(doc3)

  */

  console.log("Modification succesful")
  
}, 2000);