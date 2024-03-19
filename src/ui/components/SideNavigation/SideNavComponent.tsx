import React from "react";
import styles from '../../css/SideNav.module.css';
import sideNavState from "../../../mobx/SideNavStore";
import {observer} from "mobx-react";
import {NavLink} from "react-router-dom";

 class SideNavComponent extends React.PureComponent {

    render() {

        return (
            <div style={{
                width: sideNavState.width,
                borderColor: sideNavState.border.color,
                borderStyle: sideNavState.border.style
            }} className={styles.sideNav}>
                <NavLink to={'/library'}></NavLink>
            </div>
        );
    }
}

export default observer(SideNavComponent)