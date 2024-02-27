// full_server/server.js

import express from 'express';
import routes from './routes';

const app = express();

app.use('/', routes);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
