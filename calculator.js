const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 80;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var cal = req.body.submit;

    if (cal === "add") {
        var result = num1 + num2;
    } else if (cal === "sub") {
        var result = num1 - num2;
    } else if (cal === "mul") {
        var result = num1 * num2;
    } else if (cal === "div") {
        var result = num1 / num2;
    }

    res.send(`<h1 style="min-height: 100vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgba(45, 145, 110, 0.798);">Your addition is : ${result}</h1>`);

})


app.listen(port, () => {
    console.log("Your server is runing at port " + port);
});


