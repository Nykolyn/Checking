import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const  data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


const chart =()=>{
    return <Doughnut data={data} data={data}
    width={420}
    height={400}
    options={{ maintainAspectRatio: false }} />
}
 
export default chart