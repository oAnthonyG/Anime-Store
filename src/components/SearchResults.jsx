import styles from './Header.module.scss'


function SearchResults({ data }) {
  if (!data || !data.length) return null;

  const resultList = data.map(({ id, name }) => {
    return (
      <li key={id}>
        {name}
      </li>
    )
  })

  return (
    <div className={styles.searchResults}>
      <ul>
        {resultList}
      </ul>
    </div>
  )
}


export default SearchResults;