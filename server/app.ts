import express, { Application ,/* Request , Response , Nextfunction*/} from 'express';
//console.log("Hello")
const app: Application = express();
export { app };

app.lisen(1337,()=> console.log('Server Running'))

