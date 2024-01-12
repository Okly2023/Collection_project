# CollectionJS

CollectionJS is a JavaScript project that dynamically generates a collection of song cards on a webpage.

## Table of Contents

- Technology Stack
- Code Overview
- Live Site

## Technology Stack

This project uses the following technologies:

- HTML
- SASS
- JavaScript

## Code Overview

The script.js file contains the main logic of the application. It listens for the DOMContentLoaded event and then executes the following steps:

1. Defines an array of song objects, each with properties for the    related button text, title, author, genre, and image URLs.
2. Gets a reference to the bookInfoContainer element from the DOM.
3. Creates a h1 element, sets its text content to "SONGS COLLECTION COVERS", and appends it to the bookInfoContainer.
4. Creates a div element with the classes main-card and main to hold all song cards.
5. Loops through the array of songs and for each song:
   - Creates a div element with the classes book-card and main to hold the individual song card.
   - Creates an img element for the song image and a button element for the related button.
   - Creates p elements for the genre, title, and author.
   - Creates an img element for the icon.
   - Appends all these elements to the song card div.
   - Appends the song card div to the main div.
6. Appends the main div to the bookInfoContainer.


## Live Site

You can view the live site at https://okly2023.github.io/Collection_project/

