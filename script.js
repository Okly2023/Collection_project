
        document.addEventListener('DOMContentLoaded', function () {
            // Sample data for multiple books
            const books = [
                {
                    button: 'Related',
                    title: 'Shape of you',
                    author: 'Ed Sheeran',
                    genre: 'Pop',
                    imageUrl: 'images/new1.jpg', // Replace with the actual image URL
                    imageUrl2: 'images/icon.png', // Replace with the actual icon URL
                },
                {
                    button: 'Related',
                    title: 'one love',
                    author: 'Bob Marley',
                    genre: 'Reggae',
                    imageUrl: 'images/new2.jpg', // Replace with the actual image URL
                    imageUrl2: 'images/icon.png', // Replace with the actual icon URL
                },
                {
                    button: 'Related',
                    title: 'Sicko Mode',
                    author: 'Travis Scott',
                    genre: 'Hip-Hop',
                    imageUrl: 'images/song7.jpg', // Replace with the actual image URL
                    imageUrl2: 'images/icon.png', // Replace with the actual icon URL
                },
                {
                    button: 'Related',
                    title: 'Wake Me Up',
                    author: 'Avicii',
                    genre: 'Dance',
                    imageUrl: 'images/new4.jpg', // Replace with the actual image URL
                    imageUrl2: 'images/icon.png', // Replace with the actual icon URL
                },
                // Add more books as needed
                {
                    button: 'Related',
                    title: 'Summertime',
                    author: 'Ella Fitzgerald',
                    genre: 'Jazz',
                    imageUrl: 'images/new6.jpg', // Replace with the actual image URL
                    imageUrl2: 'images/icon.png', // Replace with the actual icon URL
                },
                {
                    button: 'Related',
                    title: 'Tennessee Whiskey',
                    author: 'Chris Stapleton',
                    genre: 'Country',
                    imageUrl: 'images/new5.jpg', // Replace with the actual image URL
                    imageUrl2: 'images/icon.png', // Replace with the actual icon URL
                },
                {
                    button: 'Related',
                    title: 'Electric Feel',
                    author: 'MGMT',
                    genre: 'Indie',
                    imageUrl: 'images/new3.jpg', // Replace with the actual image URL
                    imageUrl2: 'images/icon.png', // Replace with the actual icon URL
                },
                {
                    button: 'Related',
                    title: 'Enter Sandman',
                    author: 'Metallica',
                    genre: 'Metal',
                    imageUrl: 'images/song8.jpg', // Replace with the actual image URL
                    imageUrl2: 'images/icon.png', // Replace with the actual icon URL
                },
                // Add more books as needed
            ];
              // Create a h1 to display a title
            
            // Get the bookInfoContainer
            const bookInfoContainer = document.getElementById('bookInfoContainer');
            // Create a single title element (e.g., <h1>) for all book cards
            const mainTitleElement = document.createElement('h1');
            mainTitleElement.textContent = "SONGS COLLECTION COVERS"; // Set the title text

             // Append the mainTitleElement to the bookInfoContainer
             bookInfoContainer.appendChild(mainTitleElement);



            // Create a div to hold all book cards
            const maindiv = document.createElement('div');
            maindiv.classList.add('main-card', 'main');

            

            // Loop through the books and create book cards
            books.forEach(book => {
                // Create a div to hold the individual book card
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('book-card', 'main');

                // Create an image element
                const img = document.createElement('img');
                img.src = book.imageUrl;
                img.alt = book.title;
                img.classList.add('book-image');

                // Create a button element
                const relatedButton = document.createElement('button');
                relatedButton.classList.add('related-button', 'main');
                relatedButton.textContent = `${book.button}`;

                // Create a paragraph for genre
                const genrePara = document.createElement('p');
                genrePara.textContent = `Type: ${book.genre}`;

                // Create a paragraph for title
                const titleAuthorPara = document.createElement('p');
                titleAuthorPara.textContent = `Title: ${book.title}`;

                const titleAuthorPara2 = document.createElement('p');
                titleAuthorPara2.textContent = ` by ${book.author}`;

                // Create an icon element
                const img2 = document.createElement('img');
                img2.src = book.imageUrl2;
                img2.alt = book.title;
                img2.classList.add('book-image2');

                // Append elements to the cardDiv
                cardDiv.appendChild(img);
                cardDiv.appendChild(relatedButton);
                cardDiv.appendChild(genrePara);
                cardDiv.appendChild(titleAuthorPara);
                cardDiv.appendChild(titleAuthorPara2);
                cardDiv.appendChild(img2);

                // Append the cardDiv to the maindiv
                maindiv.appendChild(cardDiv);
            });

            // Append the maindiv to the bookInfoContainer
            bookInfoContainer.appendChild(maindiv);
        });
    



