import React from "react";

export class IFrameComponent extends React.PureComponent {

    getBookPath = () => {

    }

    render() {
        return (
            <div>
                <iframe src={this.getBookPath()}/>
            </div>
        )
    }
}