import React from 'react'
import Aux from '../../hoc/Auxilliary'
import classes from '../Layout/Layout.css'
const Layout = (props) =>(
    <Aux>
        <div>
            toolbar,
            sidebar,
            events
        </div>
        <main className={classes.content}>
            
            {props.children}
        </main>
    </Aux>
);

export default Layout;