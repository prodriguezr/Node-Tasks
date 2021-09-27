import express from 'express';
import morgan from 'morgan';

import keys from './keys';
import { RootRoute, TasksRoute } from './routes'; 

export default class App {
    constructor() {
        this.app = express();
    
        this.app.set('port', keys.PORT);

        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use('/', RootRoute);
        this.app.use('/api/tasks', TasksRoute);
    }

    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening on port', this.app.get('port'));
        });
    }
}