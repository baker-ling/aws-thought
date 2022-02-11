const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/user-routes');
const imageRoutes = require('./routes/image-upload');

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/api', userRoutes);
app.use('/api', imageRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now listening on PORT ${PORT}`);
});