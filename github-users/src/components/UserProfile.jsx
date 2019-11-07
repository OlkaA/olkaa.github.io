import React from 'react';
import { Link } from 'react-router-dom';
import { userTags } from '../config';

class UserProfile extends React.Component {
    state = {
        user: {}
    };

    async componentDidMount() {
        const { login } = this.props;
        const resp = await fetch(`https://api.github.com/users/${login}`);
        const user = await resp.json();
        this.setState({ user });
    }

    render() {
        const { avatar_url, name } = this.state.user;

        const userTag = userTags.map((tag, idx) => {
            return (
                this.state.user[tag.value] && <li key={idx}>{tag.label} {this.state.user[tag.value]}</li>
            )
        })

        return (
            <>
                <Link to='/' className="arrow-back">&larr;</Link>
                <div className="flex">
                    <img src={avatar_url} alt={avatar_url} />
                    <ul>
                        {name && <li className="name">{name}</li>}
                        {userTag}
                    </ul>
                </div>
            </>
        );
    }
}

export default UserProfile;
