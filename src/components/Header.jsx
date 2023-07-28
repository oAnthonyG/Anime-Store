import { useState } from 'react';
import styles from './Header.module.scss'
import 'boxicons';
import SearchResults from './SearchResults';

function Header() {
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (!value) {
      setData([]);
      return
    };

    const url = `http://localhost:3000/items?q=${value}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })

  }
  return (
    <>
      <header>
        <article>
          <div className={styles.logo}>
            <box-icon type='solid' name='invader' color='#2A7AE4' size='md'></box-icon>
            <h1>Anime<span>Geek</span></h1>
          </div>
          <div className={styles.headerFormButton}>
            <div className={styles.search}>
              <form >
                <input
                  type="search"
                  placeholder='O que deseja encontrar?'
                  onChange={handleInputChange} />

                <button className={styles.buttonSearch}><box-icon name='search' color='#A2A2A2'></box-icon></button>
              </form>
              <SearchResults data={data} />
            </div>
            <button className={styles.buttonLogin}>Login</button>
          </div>
        </article>
      </header>
    </>
  )
}


export default Header