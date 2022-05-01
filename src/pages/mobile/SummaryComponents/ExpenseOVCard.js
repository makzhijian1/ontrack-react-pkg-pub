import Card from '../../../cmn_components/Card';
import classes from "./ExpenseOVCard.module.css";

function ExpenseOVCard(props) {
    const expSummaryVal = props.expSummaryVal;

    return (
        <Card>
            <div className={classes.header}>
                EXPENSES
            </div>
            <div className={classes.body}>
                ${(expSummaryVal > 0) ? expSummaryVal: "N/A" }
            </div>
        </Card>
    );
}

export default ExpenseOVCard;