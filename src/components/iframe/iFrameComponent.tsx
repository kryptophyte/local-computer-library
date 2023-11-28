import {books} from "../../books";
import React from "react";
import '../../App.css';
import {state} from "../../redux/state";
import Iframe from "react-iframe";
import {Document, Page, pdfjs } from "react-pdf";
//import * from '../../../public/books/biodiversity_eval.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class IFrameComponent extends React.PureComponent <{props: any}, { pageNumber: number }> {
    //pageNumber = 5;

    constructor(props) {
        super(props);
        this.state = {
            pageNumber : 1
        }
    }
//books/biology/russian/biodiversity_eval.pdf
    getBookPath = () => {
        let bookPath
        return  'books/biology/russian/virusology.pdf';
    }

    render() {
        return (
            // <div className={'iFrame'}>
            //     <iframe title={'doin ur mmom'} src={this.getBookPath()} height={600}/>
            // </div>
             <div >
                 <p>
                     Page {this.state.pageNumber} of {39}
                     <button onClick={() => {this.setState({pageNumber : this.state.pageNumber +1 })}}></button>
                 </p>
                <Document file={this.getBookPath()}>
                    <Page pageNumber={this.state.pageNumber} />
                </Document>
            </div>
        )
    }
}