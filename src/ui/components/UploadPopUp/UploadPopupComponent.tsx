import {observer} from "mobx-react";
import React from "react";
import styles from '../../css/Popup.module.css'
import bookUploadState from "../../../mobx/BookUploadStore";

class UploadPopupComponent extends React.PureComponent{

    render() {
        return (
            <div style={{display: bookUploadState.display}} className={styles.popup}>
                <button value={'close'} onClick={bookUploadState.closePopup}><p>a</p></button>
                <form className={styles.form}>
                    <label></label>
                    <input type={"text"} name={"name"} required={true}/>
                    <label></label>
                    <input type={"text"} name={"genre"} required={true}/>
                    <label></label>
                    <input type={"text"} name={"language"} required={true}/>
                    <label></label>
                    <input type={"text"} name={'subgenre'}/>
                    <label></label>
                    {/*<input type={"file"}   onInput={()=> {}}/>*/}
                    <label></label>
                    <input type={"submit"} value={"upload file"} />
                </form>

            </div>
        )
    }
}

export default observer(UploadPopupComponent)