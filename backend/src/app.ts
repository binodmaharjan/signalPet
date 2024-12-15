import express, { Request, Response } from "express";

const app = express();

import dotenv from "dotenv";
import RedisCache from "./libs/RedisCache";
import { TranslateText } from "./libs/translation";
import { TranslationConfig } from "./utils/Tranlation";
import cors from "cors";
import { SUPPORTED_LANGUAGE } from "./utils/constants";
import e from "express";
dotenv.config();
app.use(express.json());
app.use(cors());


app.post("/translate", async (req: Request, res: Response) => {

    const { q, target } = req.body as TranslationConfig;

    if (!q || !target) {
        res.status(400).json({ error: "Invalid request" });
        return;
    }

    // if( !SUPPORTED_LANGUAGE.includes(target)){
    //     res.status(400).json({error: "Language not supported"});
    //     return;
    // }

    try {
        if(await  RedisCache.getInstance().get(`${q}:${target}`)){
            console.log("Cache hit");
            const translatedText = await RedisCache.getInstance().get(`${q}:${target}`);
            res.status(200).json({translatedText: translatedText});
            return;
        }
    
        console.log("Fetch hit");
        const translatedText = await TranslateText(q, target);
    
        await RedisCache.getInstance().set(q, target, translatedText);
        res.status(400).json({translatedText: translatedText});
        
    } catch (error) {
        res.status(400).json({error: "Something went wrong !!!"});
    }

    
});

export default app;
