import React from "react";
import { connect } from "react-redux";
import { refresh } from "../reducer/Actions";
//import { dashboard } from "./Dashboard"

const Home = ({ refresh }, { dashboard }) => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to Smartwallet</h1>
                <p className="col-md-8 fs-4">SmartWallet is a cutting-edge expense management application designed to simplify your financial life. Whether you're tracking daily expenses, managing budgets, or saving for future goals, 
                SmartWallet provides you with the tools you need to stay in control of your finances</p>
                <button className="btn btn-primary btn-lg" type="button" onClick={ refresh }>Refresh</button>
                
            </div>
        </div>
    )
}

export default connect(null, { refresh })(Home);