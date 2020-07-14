import React, { useEffect } from "react";
import HistoryLists from "../HistoryLists";
import useHistory from "../../../hooks/useHistory";

function ContentHistory() {

    const { selectors, actions } = useHistory();
    

    useEffect(() => {
        actions.getHistoryList();
    }, [])

    function displayListHistory() {
        let history = selectors.getHistory();
    
        return history.map(history => {
            return (
                <HistoryLists
                    key={history.id} 
                    id={history.id} 
                    date={history.date}
                    price={history.price}
                    status={history.status}
                />
            )
        })
    }

    return(
        <div className="history-card-content">
            {displayListHistory()}
        </div>
    )

}


export default ContentHistory;