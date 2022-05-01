import { useState, useEffect } from "react";
import { Buffer } from 'buffer';
import LoaderMobile from "./LoaderMobile";
import MobileView from "./MobileView";
import { useParams } from 'react-router';

function Service() {

    /* State Management */
    //const [error, setError] = useState(null);
    const [isExpSummaryLoaded, setIsExpSummaryLoaded] = useState(false);
    const [isExpChartLoaded, setIsExpChartLoaded] = useState(false);
    const [isExpDataLoaded, setIsExpDataLoaded] = useState(false);
    const loadComplete = isExpSummaryLoaded && isExpChartLoaded && isExpDataLoaded;
    const isLoading = !loadComplete;


    const { chatid } = useParams(); /* Get Chat ID from URL Path */

    /* Constants to form URL based on Current Month/Year */
    const currentMonthNum = (new Date().getMonth() + 1);
    const currentMonthName = new Date().toLocaleString("en-US", { month: "long" });
    const currentYear = new Date().getFullYear();

    const commonURLParams = chatid + "?month=" + currentMonthNum + "&year=" + currentYear;

    const getExpSummaryURL = "{EC2-Domain}/ontrack/track/get_mthov/" + commonURLParams;
    const getExpChartDataURL = "{EC2-Domain}/ontrack/track/get_mthex/" + commonURLParams;
    const getExpListDataURL = "{EC2-Domain}/ontrack/track/get_currentexpenselist/" + commonURLParams;


    /* Store the API Responses */
    const [expSummaryItems, setExpSummaryItems] = useState([]);
    const [expListItems, setExpListItems] = useState([]);
    const [expChartItems, setExpChartItems] = useState([]);

    /* API Fetch */
    useEffect(() => {
        fetch(getExpSummaryURL, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from('{SpringAuthUser}' + ":" + '{SpringAuthPW}').toString('base64')
            }),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsExpSummaryLoaded(true);
                    setExpSummaryItems(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }, []);

    useEffect(() => {
        fetch(getExpChartDataURL, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from('{SpringAuthUser}' + ":" + '{SpringAuthPW}').toString('base64')
            }),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsExpChartLoaded(true);
                    setExpChartItems(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }, []);

    useEffect(() => {
        fetch(getExpListDataURL, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from('{SpringAuthUser}' + ":" + '{SpringAuthPW}').toString('base64')
            }),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsExpDataLoaded(true);
                    setExpListItems(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }, []);

    return (
        <div>
            {loadComplete && <MobileView
                expSummaryVal={expSummaryItems.expense}
                budgetData={0}
                expChartData={expChartItems}
                expListData={expListItems}
            />}
            {isLoading && <LoaderMobile />}
        </div>
    )
}

export default Service; 