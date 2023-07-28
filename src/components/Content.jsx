import styles from './Content.module.scss';

function Content() {
  return (
    <>
      <article>
        <section >
          <div>
            <h2>Star Wars</h2>
            <button>Ver tudo</button>
          </div>
          <div className={styles.ContentItem}>
            <article >
              <img src="../src/assets/StarWars-imgs/Skill.png" alt="" />
              <p>Produto XYZ</p>
              <h3>R$ 60,00</h3>
              <button>Ver produto</button>
            </article>
            <article>
              <img src="../src/assets/StarWars-imgs/Skill.png" alt="" />
              <p>Produto XYZ</p>
              <h3>R$ 60,00</h3>
              <button>Ver produto</button>
            </article>
            <article>
              <img src="../src/assets/StarWars-imgs/Skill.png" alt="" />
              <p>Produto XYZ</p>
              <h3>R$ 60,00</h3>
              <button>Ver produto</button>
            </article>
            <article>
              <img src="../src/assets/StarWars-imgs/Skill.png" alt="" />
              <p>Produto XYZ</p>
              <h3>R$ 60,00</h3>
              <button>Ver produto</button>
            </article>
            <article>
              <img src="../src/assets/StarWars-imgs/Skill.png" alt="" />
              <p>Produto XYZ</p>
              <h3>R$ 60,00</h3>
              <button>Ver produto</button>
            </article>
            <article>
              <img src="../src/assets/StarWars-imgs/Skill.png" alt="" />
              <p>Produto XYZ</p>
              <h3>R$ 60,00</h3>
              <button>Ver produto</button>
            </article>
          </div>
        </section>

        <section>
          <div>
            <h2>Consoles</h2>
            <button>Ver tudo</button>
          </div>
          <article>
            <img src="../src/assets/Console-imgs/console-img1.png" alt="" />
            <p>Produto XYZ</p>
            <h3>R$ 60,00</h3>
            <button>Ver produto</button>
          </article>
        </section>

        <section>
          <div>
            <h2>Diversos</h2>
            <button>Ver tudo</button>
          </div>
          <article>
            <img src="../src/assets/Diversos-imgs/diversos-img1.png" alt="" />
            <p>Produto XYZ</p>
            <h3>R$ 60,00</h3>
            <button>Ver produto</button>
          </article>
        </section>

      </article>
    </>
  )
}


export default Content;