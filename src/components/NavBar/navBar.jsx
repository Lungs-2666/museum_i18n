    import './navBar.css';
    import { Instrument_Serif } from "next/font/google";
        
    const instrumentSerif = Instrument_Serif({
        subsets: ["latin"],
        weight: ['400']
    });

    const NavBar = () => {
        return (
            <nav className={`nav_bar ${instrumentSerif.className}`}>
                <p className='nav_logo'> Future </p>

                <div className='nav_items'>
                    <a href="/"> Home </a>
                    <a style={{animationDelay: ".2s"}} href="/about"> About </a>
                </div>
            </nav>
        )
    }

    export default NavBar;