import App from './app';
import db from './db';

const app = new App();

app.listen();

db.connect();
