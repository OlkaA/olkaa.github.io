import React from "react";
import moment from "moment";
import * as API from "../api";
import "../scss/profile.scss";
import "../scss/index.scss";
class UserProfile extends React.Component {
  state = {
    user: {},
  };

  async getUserData() {
    const { login } = this.props;
    this.setState({ isLoading: true });
    const user = await API.fetchDetailedInfoUser(login);
    this.setState({ user });
  }

  async componentDidMount() {
    this.getUserData();
  }

  render() {
    const {
      avatar_url,
      name,
      bio,
      location,
      blog,
      followers,
      created_at,
      html_url,
      updated_at,
      public_repos,
    } = this.state.user;

    const dates = `${moment(created_at).format("MMM Do YY")} - ${moment(
      updated_at
    ).format("MMM Do YY")}`;

    return (
        <div className="app profile">
          <div>
            <img src={avatar_url} alt={avatar_url} />
            <div>
              {name && <div>{name}</div>}
              {bio && <div className="bio">{bio}</div>}
            </div>
          </div>
          <div>
            {location && <div>Location: {location}</div>}
            {blog && (
              <div>
                Portfolio/Blog:{" "}
                <a href={blog} target="_blank">
                  {blog}
                </a>
              </div>
            )}
          </div>
          <div className="card">
            {created_at && updated_at && <div> {dates}</div>}
            {public_repos && <div>Public repositories: {public_repos}</div>}
            {followers && <div>Followers: {followers}</div>}
            {html_url && (
              <a href={html_url} target="_blank">
                Go to github
              </a>
            )}
          </div>
        </div>
    );
  }
}

export default UserProfile;
