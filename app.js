const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

app.listen(process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes');
app.use(routes);

// app.use((req, res, next) => {
// 	const err = new Error('Not Found');
// 	err.status = 404;
// 	next(err);
// });

// app.use((err, req, res) => {
// 	res.status(err.status);
// 	res.render('error', {
// 		error: err
// 	});
// });