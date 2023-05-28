import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensuresAuth = (req: Request, res: Response, next: NextFunction) => {
  const containsAuth = req.headers.authorization;
  if (!containsAuth) {
    return res.status(401).json({
      message: "Token not passed"
    })
  }

  const token = containsAuth.split(" ")[1];

  const jwtSecretKey = process.env.SECRET_KEY!;
  const jwtCallback = (error: any, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid token"
      })
    }

    res.locals.client_id = decoded.client_id;

    return next();
  }

  jwt.verify(token, jwtSecretKey, jwtCallback);
}

export default ensuresAuth;
