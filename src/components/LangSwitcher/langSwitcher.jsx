    'use client'
    
    import './langSwitcher.css';
    import { useState } from "react";
    import { useLanguage } from "@/app/context/languageContext";

    const LangSwitcher = () => {
        const [ langs, setLangs ] = useState(['en', 'ru', 'tr', 'ja', 'zn',]);
        const [ langCount, setLangCount ] = useState(0);
        const { lang, setLang, c } = useLanguage();

        function switchLang(){
            if (langCount > 4) {
                setLangCount( 0 );
            } else {
                setLangCount( langCount+1 );
            }

            setLang(langs[langCount + 1]);
        }

        return (
            <button className='switch_btn' onClick={ switchLang }>
                { langs[langCount].toUpperCase() }
            </button>
        )
    }

    export default LangSwitcher;