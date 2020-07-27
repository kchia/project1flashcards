# Feedback

Congrats on satisfying the project requirements! Here's some feedback for you:

## Code Quality

Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

- Code is generally well-named and contains few style / quality issues. Code formattting could be improved - please make sure you have auto-formatting turned on in your VSCode so it auto-fixes any formatting issues! If you're unsure, please come to office hours to check if your VSCode is properly set up.

- Take a look at the way I've refactored some of your code, and feel free to reach out to me directly if anything does not make sense. Also, make sure to remove any unused code (e.g., take a look at the unused CSS I removed) from your HTML/JS/CSS files!

- In terms of code organization, I'd recommend first listing out all your selectors at the top of the script, followed by any `.addEventListener` calls, then the callback function definitions, and finally any function invocations that happen when the script is loaded.

- I noticed a mix of `document.getElementById()` and `document.querySelector()` in the script. I'd recommend sticking with just one DOM API syntax for simplicity and consistency.

## Technical Requirements

How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

- Your game renders in the browser with no major errors and separates concerns into distinct HTML, CSS, and JavaScript files. I was impressed that you made your game mobile-responsive and incorporated sound effects into your game!

## Creativity and Interface

Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

- Your app looks really cool! I thought the overall design, especially the modal, was neat.

## Functionality

Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

- The application works with few errors or bugs. One error I can see is when the user is on the last question in the deck and attempts to view the next question, the `Uncaught TypeError: Cannot read property 'question' of undefined` error appears in the browser console.

## Presentation

Is there adequate documentation? Is the repository well organized and free of clutter?

- Your readme contains relevant information about the application. To make it even more informative, consider adding the live url for your game and other sections such as wireframes and installation instructions. See these examples: https://github.com/esin87/travelogue or https://github.com/esin87/StarTrek_TNG_Trivia_Game

## Additional Feedback

- Take a look at some of my inline comments on your code. You can find my comments by searching for "Hou comment:".
