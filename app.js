const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost/ProductDb'

/**Initiliase the express framework */
const app = express();

/**Root Router */
const root = express.Router();

/**Establishing connection between mongoose and mongoDb */
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

con.on('open', () => {
    console.log('...Connected to MongoDb...')
})

/**Using body-parser to parse the request*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**clothesRouter to handle API request for
 *   http://localhost:9000/api/clothes
 */
const clothesRouter = require('./controller/clothes');
app.use('/api/clothes', clothesRouter);

/**electronicsRouter to handle API request for
 *   http://localhost:9000/api/electronics
 */
const electronicRouter = require('./controller/electronics');   
app.use('/api/electronics', electronicRouter);


/**rootRouter to handle API request for
 *   http://localhost:9000
 */
app.use('/', root);
root.get('/', (req, res) => {
    res.send('<h1>Welcome to products</h1>')
})

app.listen(9000, () => {
    console.log('......Server started......');
})