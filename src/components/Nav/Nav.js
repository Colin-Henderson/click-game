import React from 'react';
import {Navbar} from 'reactstrap';

const Nav = () => {
    return (
        <Navbar color="light" light expand="md">
        <ul>
            <li class="name">Lab Game</li>
            <li class="name">Score: || Top Score:  </li>
        </ul>
        </Navbar>
    )};

export default Nav;