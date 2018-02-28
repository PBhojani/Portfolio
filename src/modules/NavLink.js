 // modules/NavLink.js
import React from 'react';
import { Link } from 'react-router';
import {Button} from 'react-bootstrap';

export default class NavLink extends React.Component{
  render() {
    return (
    	<Link {...this.props} />
    );
  }
}