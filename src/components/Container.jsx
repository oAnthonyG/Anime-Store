import styles from './Container.module.scss';

function Container() {

  return (
    <>
      <section className={styles.container}>
        <div className={styles.containerGroup}>
          <h1 className={styles.containerTitle}>Dezembro Promocional</h1>
          <p className={styles.containerDescription}>Produtos selecionados com 33% de desconto</p>
          <button className={styles.containerButton}>Ver Consoles</button>
        </div>
      </section>
    </>
  ) 
}

export default Container