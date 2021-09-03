const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Apoorva Agarwal");
    data = data.replace(
      /{{description}}/,
      "Apoorva Agarwal test assignment"
    );
    data = data.replace(
      /{{imageUrl}}/,
      "https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70"
    );

    res.send(data);
  });
});

app.get("/about", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "About ");
    data = data.replace(/{{description}}/, "About Apoorva's Assignment");
    data = data.replace(
      /{{imageUrl}}/,
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    );

    res.send(data);
  });
});

app.get("/contact", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Contact ");
    data = data.replace(/{{description}}/, "Contact Apoorva");
    data = data.replace(
      /{{imageUrl}}/,
      "https://m.media-amazon.com/images/I/61NCmdeMPOL._SX425_.jpg"
    );

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("*", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Apoorva Agarwal");
    data = data.replace(
      /{{description}}/,
      "Apoorva Agarwal Assignment"
    );
    data = data.replace(
      /{{imageUrl}}/,
      "https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70"
    );

    res.send(data);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
