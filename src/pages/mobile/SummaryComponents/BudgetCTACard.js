import Card from '../../../cmn_components/Card';
import classes from './BudgetCTACard.module.css';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function BugdetCTACard() {

    return (
        <Card>
            <div className={classes.cta_container}>
                You have not set a budget yet  <Tooltip title="You can do so via our Telegram Bot">
                    <InfoIcon style={{ fontSize: "85%" }} className={classes.icon_color} />
                    </Tooltip>
            </div>
            <div className={classes.main_container}>

                <div className={classes.col_left}>

                </div>
                <div className={classes.noDataImg_container}>

                </div>
                <div className={classes.col_left}>

                </div>
            </div>
        </Card>
    );
}

export default BugdetCTACard;