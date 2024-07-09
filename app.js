const express = require('express');
const morgan = require('morgan');
const requestLogger = require('./middlewares/requestLogger');
const routes = require('./routes/routes');

const app = express();


app.use(morgan('combined'));


app.use(requestLogger);


app.use('/', routes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
