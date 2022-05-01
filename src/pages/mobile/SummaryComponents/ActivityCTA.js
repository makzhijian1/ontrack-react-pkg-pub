import classes from './ActivityCTA.module.css';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

function ActivityCTA() {

    return (
        <div>
            <div className={classes.cta_container}>
                You have not tracked any income or expense yet  <Tooltip title="You can do so via our Telegram Bot">
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
        </div>
    );
}

export default ActivityCTA;