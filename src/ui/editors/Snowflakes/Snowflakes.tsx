import React, {createRef} from "react";
import {SnowController} from "../../../mobx/SnowController";
import styles from '../../css/Snow.module.css';
import {observer} from "mobx-react";


class Snowflakes extends React.Component {
    private manager: SnowController;

    constructor(props) {
        super(props);
        this.manager = new SnowController()

    }



    renderStarfall = () => {
        let stars = []
        for (let i = 0; i < 30; i++) {
            let style = {
                animationDelay:  `${this.manager.getRndInteger(6, -1)}s`,
                animationDuration: `${this.manager.getRndInteger(5, 1)}s`,
                fontSize: `${this.manager.rndFloat(1, 0.1)}em`,
                // top: `${Math.random()*100}%`,
                left: `${(Math.random()*100)*(Math.round(Math.random()) * 2 - 1)}%`,

            }

            let a =
                <p
                    key={i}
                    className={styles.starLeft}
                    style={style}
                >*</p>
            stars.push(a);
        }
        return stars
    }

    renderStars = ( ) => {
        let stars = []
        for (let i = 0; i < 50; i++) {
            let style = {
                // animationDelay:  `${this.manager.getRndInteger(4, -1)}s`,
                // animationDuration: `${this.manager.getRndInteger(10, 6)}s`,
                fontSize: `${this.manager.rndFloat(1, 0.1)}em`,
                left: `${Math.random()*100}%`,
                top: `${Math.random()*100}%`,

            }
            // debugger
            let a =
                <p
                    key={i}
                    className={styles.starUp}
                    style={style}
                >*</p>
            stars.push(a);
        }
        return stars
    }


    render(){
        // this.manager.snowflakeFallidk(this.snowflakeRef)
        return(
            <div >
                <span className={styles.snow} >
                    {this.renderStarfall()}
                </span>
                <span className={styles.snow} >
                    {this.renderStars()}
                </span>
            </div>
        )
    }
}

export default observer(Snowflakes)