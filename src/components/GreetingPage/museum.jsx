    import Image from "next/image";
    import './greetingPage.css';

    const MuseumBg = () => {
        return (
            <Image 
                src='/museum.png'
                alt="museum_bg"
                width={1300}
                height={600}
                className="museum_img"
                loading="eager"
            />
        )
    }

    export default MuseumBg;