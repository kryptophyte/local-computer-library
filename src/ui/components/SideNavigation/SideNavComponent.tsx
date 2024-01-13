import React from "react";
import styles from '../../css/SideNav.module.css';

export class SideNavComponent extends React.PureComponent <{ width }>{

    render() {
        return (
            <div style={{width: this.props.width}} className={styles.sideNav}>

            </div>
        );
    }
}