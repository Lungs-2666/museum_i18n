    'use client'
    
    import './greetingPage.css';
    import MuseumBg from './museum';
    import AuroraBg from '../PrismBg/auroraBgComp';
    import { useLanguage } from '@/app/context/languageContext';

    import { Instrument_Serif } from "next/font/google";
    
    const instrumentSerif = Instrument_Serif({
        subsets: ["latin"],
        weight: ['400']
    });
    
    const GreetingPage = () => {
        const {c} = useLanguage();

        return (
            <div className='greeting-page'>
                <AuroraBg />
                <MuseumBg />

                <div className='greet_group_1'>
                    <div>
                        <h2> {c.home_page.greet_heading} </h2>
                        <p> {c.home_page.greet_deskrip} </p>
                    </div>
                    
                    <a href="/about">
                        <button className={`more_btn ${instrumentSerif.className}`}> {c.home_page.greet_btn} </button>
                    </a>
                </div>

            </div>
        )
    }

    export default GreetingPage;