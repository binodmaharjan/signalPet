import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextProps {
    language: string;
    setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<string>('en');

    useEffect(() => {

        console.log('navigator.language', navigator.language);  
        const browserLanguage = navigator.language || navigator.languages[0];
      
        setLanguage(browserLanguage ? browserLanguage.split('-')[0] :'en');
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};