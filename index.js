/*
enter items they need to purchase by entering text 
and hitting "Return" or clicking the "Add item" button
check and uncheck items on the list by clicking the 
"Check" button permanently remove items from the list

First, you have to specify which event to listen for. 
Second, you have to provide a callback function that runs 
whenever the event occurs.
*/

// where will they enter items they need to purchase?
// => id="shopping-list-entry"

// does the text they enter needs to be checked against reg ex?
// => no for now, maybe later?

// what should the check event do - strike through the item?
// => yes

// I don't see uncheck button, do I write code to dynamically
// change the button text on click event on check button?
// => yes, use toggle to make it check / uncheck as in lightbulb example

// 1. create a function called handleItemEntries

// 2. listen for input entry and store it in userItem variable

// 3. create callback function that dynamically adds
// input value from step 2 item to the top of the list

// 4. When dynamically adding the result to page, use
// template literal string and the <li> format provided in the example html.

function handleItemEntries() {
  $("input").submit(function(event) {
    event.preventDefault();
    const userItem = $(this).val();
    $("h2").text(userItem);
  });
}

$(handleItemEntries);
