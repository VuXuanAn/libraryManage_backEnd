const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

//routes
const authRoutes = require("./routes/auth");
const nxbRoutes = require("./routes/nxb")
const adminRoutes = require("./routes/admin/auth")
const initDataRoutes = require("./routes/admin/initData")
const bookRoutes = require("./routes/book")
env.config();
// mongodb+srv://Vuxuanan:<password>@cluster0.jjn8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.jjn8u.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        }
    )
    .then(() => {
        console.log("Database connected");
    });

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));

app.use("/api", authRoutes);
app.use("/api", nxbRoutes);
app.use("/api", adminRoutes);
app.use("/api", initDataRoutes);
app.use("/api", bookRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});