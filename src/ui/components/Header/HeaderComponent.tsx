import React from "react";
import {SideNavToggleAction} from "../../../redux/reducers/SideNavReducer";
import styles from '../../css/Header.module.css';
import sideNavState from "../../../mobx/SideNavStore";
import {observer} from "mobx-react";
import bookUploadStore from "../../../mobx/BookUploadStore";

class HeaderComponent extends React.PureComponent {

    render() {
        return (
            <div>
                <button onClick={() => {
                    sideNavState.toggleSideNav()
                }}> <p className={styles.button}>{sideNavState.buttonText}</p></button>
                {/*<button onClick={() => bookUploadStore.viewPopup()}*/}
                {/*    style={{textAlign:'end', marginLeft: '10'}}><p> upload</p></button>*/}
            </div>
        );
    }
}

export default observer(HeaderComponent)