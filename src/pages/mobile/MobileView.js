import classes from "./MobileView.module.css";
import BugdetOVCard from "./SummaryComponents/BudgetOVCard";
import ExpenseOVCard from "./SummaryComponents/ExpenseOVCard";
import DateSavingOVCard from "./SummaryComponents/DateSavingOVCard";
import BugdetCTACard from "./SummaryComponents/BudgetCTACard";
import { useState, useEffect } from "react";

import ActivityDetails from "./SummaryComponents/ActivityDetails";
import ActivityCTA from "./SummaryComponents/ActivityCTA";

function MobileView(props) {

    /* Receive and Assign Props */
    const expSummaryVal = props.expSummaryVal;
    const budgetData = props.budgetData;
    const expChartData = props.expChartData;
    const expListData = props.expListData;
    const hasBudget = (budgetData > 0);
    const hasExpense = (expSummaryVal > 0);

    // console.log("From MBV : expSummaryVal: " + expSummaryVal);
    // console.log("From MBV : BudgetData : " + budgetData);
    // console.log("From MBV : expChartData : " + JSON.stringify(expChartData));
    // console.log("From MBV : expListData : " + JSON.stringify(expListData));

    /*Display Toggles for Budget Section, Activity Section */
    const [budgetCTAShow, setBCTAShow] = useState(!hasBudget);
    const [budgetOVShow, setBudgetOVShow] = useState(hasBudget);
    const [activityCTAShow, setACTAShow] = useState(!hasExpense);
    const [activityDetailsShow, setADShow] = useState(hasExpense);

    return (
        <div>
            <div className={classes.summary_container}>
                <div className={classes.header_container}>

                    <div className={classes.header_col_left}>
                        <ExpenseOVCard expSummaryVal={expSummaryVal}/>
                    </div>
                    <div className={classes.header_col_right}>
                        <DateSavingOVCard />
                    </div>
                </div>
                <div className={classes.budget_container}>
                    {budgetOVShow && <BugdetOVCard />}
                    {budgetCTAShow && <BugdetCTACard />}
                </div>
            </div>

            <div className={classes.activity_container}>
                {activityDetailsShow && <ActivityDetails expChartData={expChartData} expListData={expListData} />}
                {activityCTAShow && <ActivityCTA />}
            </div>
        </div>
    );
}

export default MobileView;