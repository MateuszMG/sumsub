import { config } from './config/config';

import { app } from './app';

app.listen({ port: config.PORT }, () => {
  console.log('Server running on port: ' + config.PORT);
});
