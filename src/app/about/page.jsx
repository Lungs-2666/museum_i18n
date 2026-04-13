    import styles from './page.module.css';
    import Cards from '@/components/Cards/cards';
    
    const Home = () => {
        return (
            <div className={styles.page}>
                <section className={styles.about_info}>

                </section>

                <section className={styles.about_cards}>
                    <Cards />
                </section>
            </div>   
        )
    }

    export default Home;

    //Museum of the Future — это не просто музей, а портал в будущее, открытый в феврале 2022 года в Финансовом районе Дубая. Здание в форме тора высотой 77 метров украшено стихами шейха Мохаммеда бин Рашида о инновациях и наследии.
    //Семь этажей с иммерсивными экспонатами: от космической станции OSS Hope до детской зоны Future Heroes. Более 2 млн посетителей уже открыли для себя технологии 2071 года — присоединяйся!