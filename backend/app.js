const express = require("express");
const cors = require("cors");
const app = express();
const postsRoutes = require("./routes/posts-routes");
const userRoutes = require("./routes/user-routes");

// basic setup for recieving and sending requests.
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/api/post", postsRoutes);
app.use("/api/user", userRoutes);

app.use((req, res, next) => {
	const error = new HttpError(
		"Could not find this route.",
		404
	);
	throw error;
});

mongoose
	.connect(
		`mongodb+srv://pranjal:pranjal@cluster0.zhanm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		app.listen(5000, () => {
			console.log("Listening on port 5000.");
		});
	})
	.catch((err) => {
		console.log(err);
	});
