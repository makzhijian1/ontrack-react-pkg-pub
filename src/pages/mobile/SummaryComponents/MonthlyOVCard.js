import Card from '../../../cmn_components/Card';
import classes from './MonthlyOVCard.module.css';
import { useState, useEffect } from "react";
import {Buffer} from 'buffer';
import { useParams } from 'react-router';


function MonthlyOVCard(props) {
    const { chatid } = useParams(); //This is the dynamic chatid from URL, to be used in API calls

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const currentMonthNum = (new Date().getMonth()+1)

    const currentYear = new Date().getFullYear()
 
    const urlToFetch = "https://safe-tor-15832.herokuapp.com/https://www.thepoginc.com/ontrack/track/get_mthov/"+chatid+"?month="+currentMonthNum+"&year="+currentYear

    useEffect(() => {
        fetch(urlToFetch,{
            method: 'get',
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from('admin' + ":" + 'password').toString('base64')
              })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            ) }, []);

        console.log(items)

    return (
        <Card>
            <div className={classes.outer_row}>
                <div className={classes.column_1}>Salary</div>
                <div className={classes.column_1}>Expenses</div>
                <div className={classes.column_1}>Balance</div>
            </div>
            <div className={classes.outer_row}>
                <div className={classes.column_2_left}>${items.income}</div>
                <div className={classes.column_2_left}>${items.expense}</div>
                <div className={classes.column_2_left}>${items.income - items.expense}</div>
            </div>
        </Card>
    );
}

export default MonthlyOVCard;