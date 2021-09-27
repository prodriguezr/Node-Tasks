import mongoose from "mongoose";

import keys from "./keys";

class Database {
    connect() {
        (async () => {
            const db = await mongoose.connect(keys.MONGODB_URI);
            
            console.log(`Database "${db.connection.name}" is connected`);        
        })();
    }
}

export default new Database();
