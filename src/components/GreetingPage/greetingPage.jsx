    import './greetingPage.css';
    import MuseumBg from './museum';

    import { Instrument_Serif } from "next/font/google";
    
    const instrumentSerif = Instrument_Serif({
        subsets: ["latin"],
        weight: ['400']
    });
    
    const GreetingPage = () => {
        return (
            <div className='greeting-page'>
                <MuseumBg />

                <div className='greet_group_1'>
                    <div>
                        <h2>Where the future lives.</h2>
                        <p>An exciting journey to 2071: innovations, space, AI, and sustainability. Visit Dubai's icon — Museum of the Future!</p>
                    </div>
                    
                    <a href="/about">
                        <button className={`more_btn ${instrumentSerif.className}`}> See more </button>
                    </a>
                </div>

            </div>
        )
    }

    export default GreetingPage;