import React, { Fragment } from 'react';

import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <Fragment>
            <nav className={classes.home_nav}>
                <div className={classes.logo_name}>
                    QR Code generator
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar