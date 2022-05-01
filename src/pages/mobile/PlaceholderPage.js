import Card from "../../cmn_components/Card";
import classes from "./PlaceholderPage.module.css";
function PlaceholderPage() {
    return (
        <div className={classes.main_container}>
            <Card>
                <h1>Placeholder</h1>
            </Card>
        </div>
    );
}

export default PlaceholderPage;