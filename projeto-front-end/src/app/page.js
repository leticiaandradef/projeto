import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Primeira Seção */}
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lojas próprias em diversos países e nos Universal Studios em
            Hollywood e Orlando, EUA.
          </h1>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/image/store.png"
            alt="Imagem da loja da Sanrio"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
        {/* Personagem */}
        <Image
          src="/image/cinna2.png"
          alt="Personagem Sanrio"
          width={140}
          height={100}
          className={`${styles.character} ${styles.characterTopRight}`}
        />
      </div>

      {/* Segunda Seção */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="/image/hotel.png"
            alt="Imagem de espaço temático"
            width={500}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Restaurantes, Cafés, Hotéis, Karaokês, SPAs, Maternidade, Avião,
            Trem-bala e muitos outros espaços temáticos de personagens.
          </p>
        </div>
        {/* Personagem */}
        <Image
          src="/image/my melody2.png"
          alt="Personagem Sanrio"
          width={100}
          height={100}
          className={`${styles.character} ${styles.characterBottomLeft}`}
        />
      </div>
    </div>
  );
}