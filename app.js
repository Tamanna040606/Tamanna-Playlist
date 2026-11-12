import express from "express";

const app = express();
const port = 3000;

// Configure EJS
app.set("view engine", "ejs");

// Serve CSS, images and other static files
app.use(express.static("public"));

// Website details
const appName = "Tamanna Playlist";
const tagline = "A playlist made with love ❤️";

// Homepage
app.get("/", (req, res) => {
    res.render("index", {
        appName,
        tagline
    });
});

// Personalised SHASHANK playlist
const songs = [
    {
        letter: "S",
        title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop"
    },
    {
        letter: "H",
        title: "Heat Waves",
        artist: "Glass Animals",
        genre: "Indie Pop"
    },
    {
        letter: "A",
        title: "Annange Love Agide",
        artist: "Kannada",
        genre: "Romance"
    },
    {
        letter: "S",
        title: "Saiba",
        artist: "To be confirmed",
        genre: "Romance"
    },
    {
        letter: "H",
        title: "Hrudyake Hedarike",
        artist: "Kannada",
        genre: "Romance"
    },
    {
        letter: "A",
        title: "Aalochane",
        artist: "Kannada",
        genre: "Romance"
    },
    {
        letter: "N",
        title: "Nintalli Nilalaare",
        artist: "Kannada",
        genre: "Romance"
    },
    {
        letter: "K",
        title: "Kannale",
        artist: "Kannada",
        genre: "Romance"
    }
];

// Songs page
app.get("/songs", (req, res) => {
    res.render("songs", {
        appName,
        tagline,
        songs
    });
});

// Start server
app.listen(port, () => {
    console.log(`🎵 ${appName} running at http://localhost:${port}`);
});