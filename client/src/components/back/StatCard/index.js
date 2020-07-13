import React from 'react';

function StatCard({title, value}){

    return(
        <div className="stat-card flex column">
            <label>
                {title}
            </label>
            <p>
                {value}
            </p>
        </div>
    )

}

export default StatCard;