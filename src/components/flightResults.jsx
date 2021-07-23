import React, { useEffect, useState } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {useHistory} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state/index"

let columnDefs = [
    {headerName: "Flight Number", field: "flightnumber"},
    {headerName: "Airline Name", field: "airlineName"},
    {headerName: "Departure and Arrival Time", field: "departureTime"},
    {headerName: "Duration", field: "duration"},
    {headerName: "No. of Stops", field: "stops"},
    {headerName: "Price", field: "price"},
    {headerName: "Total number of results", field: "flightnumber"},
]
let rowData = []

function FlightResults() {
    const history = useHistory();
    // const [result, setResult] = useState('');
    const state = useSelector((state) => state);
    const [tableData, setTableDate] = useState([]);
    console.log("state", state)
    const dispatch = useDispatch();

    useEffect(() => {
        const { withdrawMoney } = bindActionCreators(actionCreators, dispatch);
        withdrawMoney()
        
        var rowData = state?.flight?.rowData[0]?.flightDetails.filter(item => (item.sourceCity == state.flight.sourceCity 
            && item.destinationCity == state.flight.destinationCity ))
        setTableDate(rowData)
      },[]);

    let onSubmit = () => {
        history.push("/");
     }

    return (
        <div className="row">
        <div>
        <h1>Available flights</h1>
        </div>
        <div className="agGridTable">
           <div
				className="ag-theme-balham"
				style={{
					height: '500px',
					width: '92%'
				}}
			>
				<AgGridReact
					columnDefs={columnDefs}
					rowData={tableData}
                    pagination={true}
                    paginationPageSize={5}
                    >
				</AgGridReact>
			</div>
            </div>
            <div className="customInputs col-lg-12">
                        <button type="submit" className="searchButton" onClick={onSubmit}>Back</button>
                    </div>
            </div>
    );
}
export default FlightResults;