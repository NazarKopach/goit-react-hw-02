import FriendListItem from "../FriendsListItem/FriendListItem";
import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map((friendItem) => (
        <li className={styles.friend_item} key={friendItem.id}>
          <FriendListItem
            avatar={friendItem.avatar}
            name={friendItem.name}
            isOnline={friendItem.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
