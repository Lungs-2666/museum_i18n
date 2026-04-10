    import styles from "./page.module.css";
    import GreetingPage from "@/components/GreetingPage/greetingPage";

    import { Instrument_Serif } from "next/font/google";

    const instrumentSerif = Instrument_Serif({
        subsets: ["latin"],
        weight: ['400']
    });

    const Home = () => {
        return (
            <div className={`${styles.page} ${instrumentSerif.className}`}>
                <main className={styles.main}>
                    <GreetingPage />
                </main>
            </div>
        )
    }

    export default Home;
