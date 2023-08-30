import { useState, useEffect } from "react"
import styles from './Content.module.scss';
import ContentItems from './ContentItems';

import { IoArrowForward } from 'react-icons/io5';


function Content() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <>
      <article>
        <section >

          <ul className={styles.ContentItems}>
            <div className={styles.Content_title_itens}>
              <h2>Star Wars</h2>
              <button>Ver tudo <IoArrowForward className={styles.Content_icon} /></button>
            </div>
            {windowWidth >= 786 ? (
              <>
                <ContentItems />
                <ContentItems />
                <ContentItems />
                <ContentItems />
                {windowWidth >= 1050 && <ContentItems />}
                {windowWidth >= 1270 && <ContentItems />}

              </>
            ) : (
              <>
                <ContentItems />
                <ContentItems />
                <ContentItems />
                <ContentItems />
              </>
            )}
          </ul>
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
  );
};


export default Content;