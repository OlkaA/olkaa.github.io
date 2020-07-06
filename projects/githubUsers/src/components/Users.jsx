import React, { Component } from "react";
import { UsersItem } from "./UsersItem";
import Loading from "./Loading";
import Error from "./Error";
import { StateContext } from "../context/context";
import "../scss/index.scss";

export default class Users extends Component {
  render() {
    return (
      <StateContext.Consumer>
        {({ users, userName, isLoading, errorText }) => {
          return (
            <div>
              <div className="loading">
                {isLoading && <Loading />}
                {errorText && <Error error={errorText} />}
              </div>
              <ul className="user-list">
                {this.props.data.users.map((user) => {
                  return <UsersItem userInfo={user} key={user.id} />;
                })}
              </ul>
            </div>
          );
        }}
      </StateContext.Consumer>
    );
  }
}
