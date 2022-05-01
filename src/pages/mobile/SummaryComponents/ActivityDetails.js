import Card from '../../../cmn_components/Card';
import classes from './ActivityDetails.module.css';
import PieChartIcon from '@mui/icons-material/PieChart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import IconButton from '@mui/material/IconButton';
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function ActivityDetails(props) {

    const expChartData = props.expChartData;
    const expListData = props.expListData;

    const [listShow, setListShow] = useState(true);
    const [chartShow, setChartShow] = useState(false);
    function listBtnHandler() {
        setListShow(true);
        setChartShow(false);
    }
    function chartBtnHandler() {
        setListShow(false);
        setChartShow(true);
    }
    return (
        <div >
            <div className={classes.activity_toggle_container}>
                    <IconButton>
                        {chartShow && <FormatListBulletedIcon sx={{ color: '#CCCCCC' }} onClick={listBtnHandler} />}
                        {listShow && <FormatListBulletedIcon sx={{ color: '#000000' }} onClick={listBtnHandler} />}
                    </IconButton>
                    <IconButton  >
                        {chartShow && <PieChartIcon sx={{ color: '#000000' }} onClick={chartBtnHandler} />}
                        {listShow && <PieChartIcon sx={{ color: '#CCCCCC' }} onClick={chartBtnHandler} />}
                    </IconButton>
                </div>
                <div className={classes.activity_details_container}>
                    {chartShow && <ExpensesChart expChartData = {expChartData}/>}
                    {listShow && <ExpenseList expListData = {expListData}/>}
                </div>
        </div>
    );
}

export default ActivityDetails;