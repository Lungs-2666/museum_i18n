    'use client'
    
    import './navBar.css';
    import { Instrument_Serif } from "next/font/google";
    import { useLanguage } from '@/app/context/languageContext';
        
    const instrumentSerif = Instrument_Serif({
        subsets: ["latin"],
        weight: ['400']
    });

    const NavBar = () => {
        const { c } = useLanguage();
        
        return (
            <nav className={`nav_bar ${instrumentSerif.className}`}>
                <p className='nav_logo'> Future </p>

                <div className='nav_items'>
                    <a href="/"> {c.nav_bar.home_btn} </a>
                    <a style={{animationDelay: ".2s"}} href="/about"> {c.nav_bar.about_btn} </a>
                    <a style={{animationDelay: ".4s"}} href="/floors"> {c.nav_bar.floors_btn} </a>
                </div>
            </nav>
        )
    }

    export default NavBar;