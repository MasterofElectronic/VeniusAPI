import { NextFunction, Request, Response } from "express";
import { ADMIN_PASSWORD, ADMIN_USERNAME } from "../../../config/env";



export function checkAuth(_req: Request, _res: Response, next: NextFunction){
    //falta logica de autentificacion 
    next();
}

export function checkAdmin(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send('Unauthorized');
    }
    const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD){
        return next();
    }

    return res.status(403).send('Forbidden');
}