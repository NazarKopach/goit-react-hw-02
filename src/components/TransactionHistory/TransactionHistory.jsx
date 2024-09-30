import styles from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.table_thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.table_body}>
        {items.map((item) => (
          <tr key={item.id} className={styles.table_tr}>
            <td className={styles.table_td}>{item.type}</td>
            <td className={styles.table_td}>{item.amount}</td>
            <td className={styles.table_td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
