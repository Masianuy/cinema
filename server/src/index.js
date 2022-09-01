const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const path = require('path');
const movieRouter = require('./routers/movieRouters');
const actorRouter = require('./routers/actorRouters');
const directorRouter = require('./routers/directorRouters');
const studioRouter = require('./routers/studioRouters');
const PORT= process.env.PORT || 5000;

require('dotenv').config();

app.get('/', (req, res) => {
  res.send(__dirname + '../public/index.html');
})

app.use('/api', movieRouter)
app.use('/api', actorRouter)
app.use('/api', directorRouter)
app.use('/api', studioRouter)

app.listen(PORT, () => console.log('server start'));