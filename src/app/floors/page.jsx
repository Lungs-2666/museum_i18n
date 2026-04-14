    import styles from './page.module.css';
    import Cards from '@/components/Cards/cards';
    import AuroraBg from '@/components/PrismBg/auroraBgComp';

    const Home = () => {
        return (
            <div className={styles.page}>
                <AuroraBg/>

                <Cards />
            </div>
        )
    }

    export default Home;