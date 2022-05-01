import classes from "./ExpenseList.module.css";

function ExpenseList(props) {

  const expListData = props.expListData; 

  const dateString = '2020-05-14T04:00:00Z'

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
      <div>
        <ul>
          {expListData.map((activity) => (
            <li key={activity.id}>
              <div className={classes.date}>
                <b>
                  {formatDate(activity.t_date)}
                </b>
              </div>

              <div className={classes.expense_amt}>
                ${activity.amount}
              </div>
              <br className={classes.linebreak} />

              <div className={classes.category}>
                <span>{activity.cat}
                </span>
              </div>

              <div className={classes.description}>
                {activity.desc}
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default ExpenseList;
