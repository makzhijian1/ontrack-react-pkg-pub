import Card from '../../../cmn_components/Card';
import classes from './BudgetOVCard.module.css';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";

function BugdetOVCard() {
    
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: "100%",
        borderRadius: 20,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#3C3056',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: "20 0 0 20",
            backgroundColor: '#0DC7B1',
        },
    }));

    return (
        <Card>
            <div className={classes.title}>
                Budget
            </div>
            <div className={classes.budget_bar_header}>
                $1067.00 of $2000.00 remaining
            </div>
            <div className={classes.budget_bar}>
                <BorderLinearProgress variant="determinate" value={50} />
            </div>

            <div className={classes.budget_rating_container}>
                <div className={classes.budget_rating_col_a}>
                    OnTrack Rating:
                </div>
                <div className={classes.budget_rating_col_b}>
                    Slightly Off
                </div>
                <div className={classes.budget_rating_col_c}>
                    <InfoIcon style={{ fontSize: "100%" }} className={classes.icon_color} />
                </div>
            </div>
        </Card>
    );
}

export default BugdetOVCard;