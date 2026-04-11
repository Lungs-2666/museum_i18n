    import './greetingPage.css';
    import NavBar from '../NavBar/navBar';
    import MuseumBg from './museum';
    
    const GreetingPage = () => {
        return (
            <div className='greeting-page'>
                <MuseumBg />
                <NavBar />

                <div className='greet_group_1'>
                    <h2>Where the future lives.</h2>
                    <p>An exciting journey to 2071: innovations, space, AI, and sustainability. Visit Dubai's icon — Museum of the Future!</p>
                </div>
            </div>
        )
    }

    export default GreetingPage;