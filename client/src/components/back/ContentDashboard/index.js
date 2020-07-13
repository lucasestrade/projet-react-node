import React, { useEffect } from 'react';
import StatCard from '../StatCard';
import useDashboard from "../../../hooks/useDashboard";
import { Bar } from 'react-chartjs-2';

function ContentDashboard(){

    const { selectors, actions } = useDashboard();

    useEffect(() => {
        actions.setDashboardDatas();
    }, [])

    function setDatas(){
        let datas = selectors.getTransacPerDate();
        let labels = [];
        let values = [];
        if(datas.lenght !== 0){
            datas.map(data => {
                labels.push(data.date);
                values.push(data.nb);
            })

            return {
                labels: labels,
                datasets: [{
                label: 'Nombre de transactions',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: values
                }]
            };
        }
    }

    return(
        <>
            <StatCard title="Prix moyens" value={"$" + selectors.getPricesAverage()} />
            <Bar 
                data={setDatas}
            />
        </>
    )

}

export default ContentDashboard;