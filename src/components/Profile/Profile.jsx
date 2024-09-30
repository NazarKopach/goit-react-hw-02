import styles from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div>
        <img className={styles.img} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.location}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.stats_list}>
          <span className={styles.stats_item}>Followers</span>
          <span className={styles.stats_number}>{stats.followers}</span>
        </li>
        <li className={styles.stats_list}>
          <span className={styles.stats_item}>Views</span>
          <span className={styles.stats_number}>{stats.views}</span>
        </li>
        <li className={styles.stats_list}>
          <span className={styles.stats_item}>Likes</span>
          <span className={styles.stats_number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
