// Masoud.js (Node.js server)

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        // Serve the HTML page with the background image
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Quote</title>
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                    }
                    body {
                        background-image: url('https://images.pexels.com/photos/584179/pexels-photo-584179.jpeg');
                        background-size: cover;
                        background-position: center;
                        color: black; /* Change text color to black */
                        font-family: Arial, sans-serif;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start; /* Change to flex-start */
                        align-items: center;
                    }
                    .quote-container {
                        max-width: 80%; /* Adjust as needed */
                        padding: 20px;
                    }
                    h1 {
                        margin: 0;
                    }
                </style>
            </head>
            <body>
                <div class="quote-container">
                    <h1>Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.</h1>
                </div>
            </body>
            </html>
        `);
    } else if (req.url === '/submit-form' && req.method === 'POST') {
        // Handle POST request for form submission
        // This is where you would process the form data
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Form submission successful');
    } else {
        // Handle 404 Not Found error for other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});