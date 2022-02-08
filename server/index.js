"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require('cors');
const User = require('./models/user.ts');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
app.use(cors());
app.use(express_1.default.jason());
// app.get('/hello',(req,res)=>{
//     res.send('Hello World')
// })
mongoose.connect('mongodb://localhost:27017/Full-Stack_App');
app.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findOne({
        email: req.body.email,
    });
    if (!user) {
        return { status: 'error', error: 'Invalid login' };
    }
    const isPasswordValid = yield bcrypt.compare(req.body.password, user.password);
    if (isPasswordValid) {
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        }, 'secret123');
        return res.json({ status: 'ok', user: token });
    }
    else {
        return res.json({ status: 'error', user: false });
    }
}));
app.get('/api/quote', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers[];
    try {
        const decoded = jwt.verify(token, 'secret123');
        const email = decoded.email;
        const user = yield User.findOne({ email: email });
        return res.json({ status: 'ok', quote: user.quote });
    }
    catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'invalid token' });
    }
}));
app.listen(1337, () => {
    console.log("Server Started as 1337");
});
//# sourceMappingURL=index.js.map