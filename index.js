const express = require("express");//importing express
const app = express();//this create our server application
const PORT = 3000;//Our server will run on port 3000
app.use(express.json());//json middleware
//custom log middleware
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();

    console.log(`[${time}] ${req.method} ${req.path} ${req.originalUrl}`);//to show the complete url including query params use original url

    next();
});

//initial mock book data
let books = [
    {
        id: 1,
        name: "B# Mehrunisa",
        author: "Zill Ahmed Rao",
        category: "thriller",
        price: 500,
        available: true
    },
    {
        id: 2,
        name: "Amarbail",
        author: "Umera Ahmed",
        category: "thriller",
        price: 450,
        available: true
    },
    {
        id: 3,
        name: "Peer-e-Kamil",
        author: "Umera Ahmed",
        category: "spiritual",
        price: 600,
        available: true
    },
    {
        id: 4,
        name: "Aab-e-Hayat",
        author: "Umera Ahmed",
        category: "spiritual",
        price: 650,
        available: true
    },
    {
        id: 5,
        name: "Jannat Ke Pattay",
        author: "Nimra Ahmed",
        category: "romance",
        price: 550,
        available: true
    },
    {
        id: 6,
        name: "Namal",
        author: "Nimra Ahmed",
        category: "romance",
        price: 700,
        available: false
    },
    {
        id: 7,
        name: "Aag Ka Darya",
        author: "Qurratulain Hyder",
        category: "history",
        price: 800,
        available: true
    },
    {
        id: 8,
        name: "Udaas Naslain",
        author: "Abdullah Hussain",
        category: "history",
        price: 750,
        available: true
    },
    {
        id: 9,
        name: "Raja Gidh",
        author: "Bano Qudsia",
        category: "pakistan",
        price: 500,
        available: false
    },
    {
        id: 10,
        name: "La-Hasil",
        author: "Umera Ahmed",
        category: "romance",
        price: 450,
        available: true
    }
];

//get all books or books by category
app.get("/api/books", (req, res) => {

    let result = books;

    if (req.query.category) {
        result = books.filter(book =>
            book.category === req.query.category
        );
    }

    res.status(200).json(result);

});
//get one book by is
app.get("/api/books/:id", (req, res) => {

    const id = Number(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);

});
//add a new book

app.post("/api/books", (req, res) => {

    const { name, author, category, price, available } = req.body;

    // Validate name and price
    if (!name || !price || price <= 0) {
        return res.status(400).json({
            message: "Name and valid price are required"
        });
    }

    // Create new book
    const newBook = {
        id: books.length + 1,
        name: name,
        author: author,
        category: category,
        price: price,
        available: available === undefined ? true : available
    };

    // Add book to array
    books.push(newBook);

    // Send response
    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });

});
//toggle specific book availibility
app.patch("/api/books/:id/toggle", (req, res) => {

    const id = Number(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.available = !book.available;

    res.status(200).json({
        message: "Book availability updated",
        book: book
    });

});
//delete a specific book
app.delete("/api/books/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(index, 1);

    res.status(200).json({
        message: "Book deleted successfully",
        book: deletedBook[0]
    });

});

//start our express server
app.listen(PORT, () => {
    console.log(`Kitab Khana API running on port ${PORT}`);
});