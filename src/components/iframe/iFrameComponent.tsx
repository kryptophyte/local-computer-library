import {books} from "../../books";
import React from "react";

export class IFrameComponent extends React.PureComponent <{props: any}> {

    getBookPath = () => {

        return '0';
    }

    render() {
        return (
            <div>
                <iframe src={this.getBookPath()}/>
            </div>
        )
    }
}