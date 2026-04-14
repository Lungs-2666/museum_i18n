    'use client'

    import styles from './page.module.css';

    import { Unna } from 'next/font/google';        
    const unna = Unna({
        subsets: ["latin"],
        weight: ['700']
    });

    import AuroraBg from '@/components/PrismBg/auroraBgComp';
    import { useLanguage } from '../context/languageContext';
    
    const Home = () => {
        const { c } = useLanguage();

        return (
            <div className={`${styles.page} ${unna.className}`}>
                <AuroraBg />

                <main className={styles.main}>
                    <section className={styles.why_visit}>
                        <h2> {c.about_page.visit_section.heading} </h2>

                        <ul>
                            <li> {c.about_page.visit_section.visit_1} </li>
                            <li> {c.about_page.visit_section.visit_2} </li>
                            <li> {c.about_page.visit_section.visit_3} </li>
                        </ul>
                    </section>

                    <section className={styles.facts}>
                        <h2> {c.about_page.facts_section.heading} </h2>

                        <ul>
                            <li> {c.about_page.facts_section.facts_1} </li>
                            <li> {c.about_page.facts_section.facts_2} </li>
                            <li> {c.about_page.facts_section.facts_3} </li>
                        </ul>
                    </section>

                    <section className={styles.info}>
                        <h2> {c.about_page.info_section.heading} </h2>

                        <ul>
                            <li> {c.about_page.info_section.info_1} </li>
                            <li> {c.about_page.info_section.info_2} </li>
                        </ul>
                    </section>
                </main>
            </div>   
        )
    }

    export default Home;