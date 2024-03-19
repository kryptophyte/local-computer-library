import React from "react";

class ChuvashCounterPage extends React.Component {
    render() {
        return (
            <div>
                <form>
                <textarea name={'parser'} style={{color: 'black'}}/>
                    {/*<input*/}
                    {/*    type={"button"}*/}
                    {/*    style={{color: "wheat", width: '50vh'}}*/}
                    {/*    onSubmit={*/}
                    {/*    (e)=>{console.log(e)}}*/}
                    {/*    title={'ajdfhfd'}*/}
                    {/*/>*/}
                    <button
                        type={"submit"}
                        onSubmit={
                        (e)=>{console.log(e)}}/>
                </form>
            </div>
        );
    }
}
export default ChuvashCounterPage