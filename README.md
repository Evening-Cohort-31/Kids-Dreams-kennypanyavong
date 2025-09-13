# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > When a child is clicked on in the browser, the code that will execute on that event is located in the Kids.js module. 

   The Kids() function generates an ordered list by iterating over the children array that is imported from the database. For each child, the for...of loop appends an <li> element with the child's name. Each child is also given data attributes: data-id, data-type, and data-wish.

   The Kids.js module also has a click event listener. When a user clicks anywhere on the web page, the listener checks whether the clicked element has data-type="child". If true, the child's data-id is captured, converted into an integer and stored in kidId. It then iterates over the children array to find a child that has a matching id property and shows a window alert with the child's wish.
   
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The findCelebrityMatch() function is invoked inside the for...of loop is to compare each kid to the array of celebrities to find the matching celebrityId.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The click event listener waits for a user to click on the web page. If the clicked element has data-type="celebrity", the data-id is converted to an integer and stored in the celebrityId variable. A for...of loop then iterates over the celebrities array to find the matching celebrity id. When it finds a match, a window alert displays a message with the celebrity's name and matching sport.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Pairings, Celebrities, and Kids are imported from their modules. Each function returns an HTML string. 
   
   The element with an id of "container" is selected with document.querySelector and is assigned the mainContainer variable.
   
   applicationHTML then builds an HTML string that includes a header, articles and sections. The articles use template literals to insert each function's HTML string to this larger string. 

   The container element is then replaced with new HTML string with mainContainer.innerHTML = applicationHTML to render the HTML to the DOM.
