import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="72" />
      <p className={styles.friend_list_name}>{name}</p>
      <p
        className={
          isOnline ? styles.friend_is_online : styles.friend_is_offline
        }
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
