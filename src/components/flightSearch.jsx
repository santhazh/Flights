import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import FlightResults from './flightResults';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state/index"
import Moment from 'moment';

function FlightSearch() {
    const [startDate, setStartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [sourceCity, setSourceCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const history = useHistory();

    const state = useSelector((state) => state);
    console.log("state", state)

    const dispatch = useDispatch();

    const { depositMoney } = bindActionCreators(actionCreators, dispatch);
    console.log(depositMoney)

    let onSubmit = (e) => {
        e.preventDefault()
        console.log("new Date()")
        let searchDetails = {
            sourceCity: sourceCity,
            destinationCity: destinationCity,
            startDate: startDate,
            returnDate: returnDate
        }
        depositMoney(searchDetails);
        const { withdrawMoney } = bindActionCreators(actionCreators, dispatch);
        withdrawMoney()
        // if(sourceCity == "" || destinationCity == "") {

        // } else {
        //     history.push("/flightResults");
        // }
        history.push("/flightResults");

    }

    return (
        <div className="backgroundSearch">
            <div className="row">
                <div>
                    <h1>Flight Search</h1>
                </div>
                <form className="col-lg-12" onSubmit={onSubmit}>

                    <div className="customInputs col-lg-12">
                        <div className="floatLeft col-lg-4">
                            <label className="floatRight">Source City : </label>
                        </div>
                        <div className="floatLeft col-lg-6 customInputDiv">
                            <input className="floatLeft" type="text" name="SourceCity" required value={sourceCity} onChange={(e) => setSourceCity(e.target.value)} />
                        </div>
                    </div>
                    <div className="customInputs col-lg-12">
                        <div className="floatLeft col-lg-4">
                            <label className="floatRight">Destination City : </label>
                        </div>
                        <div className="floatLeft col-lg-6 customInputDiv">
                            <input className="floatLeft" type="text" name="destinationCity" required value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} />
                        </div>
                    </div>
                    <div className="customInputs col-lg-12">
                        <div className="floatLeft col-lg-4">
                            <label className="floatRight">Travel Date : </label>
                        </div>
                        <div className="floatLeft col-lg-2 customInputDiv">
                            <DatePicker className="floatLeft" selected={startDate} required onChange={(date) => setStartDate(date)} dateFormat="Pp"/>
                        </div>
                    </div>
                    <div className="customInputs col-lg-12">
                        <div className="floatLeft col-lg-4">
                            <label className="floatRight">Return Date : </label>
                        </div>
                        <div className="floatLeft col-lg-2 customInputDiv">
                            <DatePicker className="floatLeft" selected={returnDate} required onChange={(date) => setReturnDate(date)} />
                        </div>
                    </div>
                    <div className="customInputs col-lg-12">
                        <button type="submit" className="searchButton" >Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FlightSearch;