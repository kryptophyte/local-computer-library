import React from "react";
import {SideNavToggleAction} from "../../../redux/reducers/SideNavReducer";
import styles from '../../css/Header.module.css';

export class HeaderComponent extends React.PureComponent <{buttonText, dispatch}> {

    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch(SideNavToggleAction())}> <p className={styles.button}>{this.props.buttonText}</p></button>
            </div>
        );
    }
}