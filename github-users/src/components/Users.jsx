import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Loading from "./Loading";
// import NoResults from './NoResults';
import Error from './Error';
import { StateContext } from "../context/context";

export default class Users extends Component {

  render() {

    const userList = this.props.data.users.map(user => {
      const path = `/users/${user.login}`;
      return (<li key={user.id}>
        <Link to={path}>
          {user.login}
        </Link>
      </li>)
    });

    return (
      <StateContext.Consumer>
        {({ users, userName, isLoading, errorText }) => {
          return (
            <div>
              <div className="loading">
                {isLoading && <Loading />}
                {errorText && <Error error={errorText} />}

              </div>
              {/* {!userName && <NoResults />} */}
              <ul class="user-list">
                {userList}
              </ul>
            </div>
          )
        }
        }
      </StateContext.Consumer>
    );
  }
}
