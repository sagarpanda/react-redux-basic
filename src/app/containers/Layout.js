import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";

@connect((store) => {
  return {
    user: store.user.user
  };
})
export default class Layout extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchUser())
	}

	render() {
		const { user } = this.props;

		return (<div>
		  <h1>Name: {user.name}</h1>
		</div>)
	}
}
