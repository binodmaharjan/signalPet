import { text } from "stream/consumers";
import axios from 'axios';
const TRANSLATION_URL = process.env.TRANSLATION_URL || "http://localhost:5001/translate";

export const TranslateText = async ( text: string, targetLang: string) => {

    const data = {
            "q": text,
            "source": "en",
            "target": targetLang 
    }

    try{
        const response = await axios.post<{ translatedText: string }>(TRANSLATION_URL, data,{});
        if(response.data && response.data.translatedText){
            return response.data.translatedText;
        }
        return text;
        
    }catch(e){
        console.log(e);
        return text;
    }
   

}