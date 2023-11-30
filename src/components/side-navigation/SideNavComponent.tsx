import React from "react";
import {books} from "../../books";
import {ListMember} from "../../editors/ListMember/ListMember"
import '../../App.css';

export class SideNavComponent extends React.PureComponent <{changeBook}> {

    render() {
        return (
            <div >
                    <ListMember changeBook={this.props.changeBook}/>
            </div>
        );
    }
}