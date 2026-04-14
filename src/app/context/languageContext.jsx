    'use client'

    import { createContext, useContext, useState } from "react";
    
    import en from "../locales/en/en";
    import ru from "../locales/ru/ru";
    import zn from "../locales/zn/zn";
    import ja from "../locales/ja/ja";
    import tr from "../locales/tr/tr";

    const LanguageContext = createContext(0);

    export function LanguageProvider({ children }){
        const [lang, setLang] = useState('en');

        const languages = {en, ru, zn, ja, tr};
        const value = {lang, setLang, c: languages[lang]} //c - current

        return (
            <LanguageContext.Provider value={value}>
                {children}
            </LanguageContext.Provider>
        );
    }

    export function useLanguage(){
        return useContext( LanguageContext );
    }