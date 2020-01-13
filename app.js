const app = require("express")();
const bodyparser = require("body-parser");
const path = require("path");

const CONFIG = require("./config");

app.set("view engine", "ejs");
app.use(require("express").static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// mongoose.connect('mongodb://plug:123456d@ds127842.mlab.com:27842/project02')

app.use("/", require("./routes/route"));

app.listen(CONFIG.PORT, () => {
    CONFIG.INIT();
});