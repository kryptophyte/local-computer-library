import React from "react";
import {books} from "../../books";
import {ListMember} from "../../editors/ListMember/ListMember"
import '../../App.css';

export class SideNavComponent extends React.PureComponent {

    render() {
        return (
            <div className={'sideNav'}>
                    <ListMember/>
            </div>
        );
    }
}