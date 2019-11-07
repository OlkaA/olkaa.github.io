import React from 'react';
import '../App.css';
import Users from "./Users";
import Input from "./Input";
import * as API from "../api";
import { contextState, StateContext } from "../context/context";
import { Link } from "react-router-dom";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: contextState.users,
            userName: contextState.userName,
            isLoading: contextState.isLoading,
            errorText: contextState.errorText
        };
    }

    async componentDidMount() {
        this.getFetchData();
    }

    async getFetchData() {
        //if (this.state.userName) {
        this.setState({ isLoading: true });
        const resp = await API.fetchGitUsers(this.state.userName);
        const errorText = typeof resp === 'string' ? resp : null;
        const users = resp.items || [];
        this.setState({ users, isLoading: false, errorText: errorText });
        //}
    }

    updateData = (value) => {
        this.setState({ userName: value, users: [], errorText: '' }, () => this.getFetchData());
    }

    render() {
        const { users, userName, isLoading, errorText } = this.state;
        return (
            <StateContext.Provider value={{ users, userName, isLoading, errorText }}>
                <div className="App">
                    <Link to='/about' className="about">
                        About
                    </Link>
                    <h1>GitHub Users Search</h1>
                    <Input updateData={this.updateData} />
                    <Users data={this.state} />
                </div>
            </StateContext.Provider>
        );
    }
}

export default MainComponent;
