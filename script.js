const quotes = [
    { text: "All the world's a stage, and all the men and women merely players.", author: "William Shakespeare" },
    { text: "Be kind, for everyone you meet is fighting a hard battle.", author: "Plato" },
    { text: "Don't let your happiness depend on something you may lose.", author: "C.S. Lewis" },
    { text: "We are all broken, that's how the light gets in.", author: "Ernest Hemingway" },
    { text: "Don't let your happiness depend on something you may lose.", author: "C.S. Lewis" },
    { text: "Life is tough my darling, but so are you.", author: "Stephanie Bennett Henry" },
    { text: "Self-awareness and self-love matter. Who we are is how we lead.", author: "Brene Brown" },
    { text: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "That it will never come again is what makes life so sweet.", author: "Emily Dickinson" },
    
];

        const fetchButton = document.querySelector('.fetchButton');
        const quoteElement = document.querySelector('.quote');
        const authorElement = document.querySelector('.author');

        fetchButton.addEventListener('click', fetchRandomQuote);

        function fetchRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
           
            quoteElement.innerHTML = randomQuote.text;
            authorElement.innerHTML = `<span>__</span>${randomQuote.author}`;
        }