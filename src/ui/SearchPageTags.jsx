import styles from "../css/SearchPage.module.css";

function SearchPageTags() {
  return (
    <div className={styles.tagsWrapper}>
      <hr />
      <div className={`container ${styles.tags}`}>
        <button className={styles.tagsBtnActive}>Popular</button>
        <button className={styles.tagsBtn}>Nearby</button>
      </div>
    </div>
  );
}

export default SearchPageTags;
