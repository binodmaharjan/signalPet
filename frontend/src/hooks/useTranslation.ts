import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';

const useTranslation = () => {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const { language } =  useLanguage();

  const translate = async (text: string): Promise<string> => {
    
    if (language === 'en') {
        return text;
    }
   if(language !== 'es' && language !== 'fr' && language!== 'de' && language!=='pt'){
      console.error('Unsupported language:', language);
      return text;
   }
    try {
        const response = await axios.post<{ translatedText: string }>('http://localhost:4000/translate', {
            q: text,
            target: language
        });
        if (response.data && response.data.translatedText) {
            return response.data.translatedText;
        }
        return text;
    } catch (error) {
        console.error('Error fetching translation:', error);
        return text;
    }
  };

  const fetchTranslation = async (key: string) => {
    const translation = await translate(key);
    setTranslations((prev) => ({
      ...prev,
      [key]: translation,
    }));

  };

  return { translate, fetchTranslation, translations };
};

export default useTranslation;

