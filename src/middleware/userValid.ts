
import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

const awt = function(req : Request, res : Response, next : NextFunction) {
    const token = req.header("token");
    if (!token) return res.status(401).json({ message: "Auth Error" });

    try {
      const decoded = jwt.verify(token, ) as any;
      req.user = decoded.user ;
      NextFunction();
    } 
  };

  export default awt;
