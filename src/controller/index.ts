import { Request, Response } from 'express';
const oper = ( a : number , b : number , opp : string) : number | string => {
    switch(opp) {
        case "add":
            return a+b;
        case "minus":
            return a-b;
        case "multiply":
            return a*b;
        case "divide":
            return a/b; 
        default:
            return "wrong input";
    }
}

const calcController = (req: Request , res : Response) => {
    const { a , b , opp } : { a : number , b : number , opp : string} = req.body;
    const c = oper(a,b,opp);
    res.json({success : true , ans : c});
}

export default {calcController};