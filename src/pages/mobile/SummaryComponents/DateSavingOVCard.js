import Card from '../../../cmn_components/Card';
import classes from "./DateSavingOVCard.module.css";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';

function DateSavingOVCard() {
 
    const savings = "SAVINGS";

    return (
        <Card>
            <div className={classes.header}>
                Dec | 2021
            </div>
            <div className={classes.body}>
                <div className={classes.body_saving}>
                    $0.00
                </div>
                <div className={classes.body_desc}>
                    SAVINGS     <Tooltip title="Budget - Expenses (Beta, Coming Soon)">
                    <InfoIcon style={{ fontSize: "85%" }} className={classes.icon_color} />
                    </Tooltip>
                </div>
            </div>

        </Card>
    );
}

export default DateSavingOVCard;