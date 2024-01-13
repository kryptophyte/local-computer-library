import React from "react";
import styles from '../../css/BookContainer.module.css';
import Iframe from "react-iframe";
import {Document, Page, pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class BookComponent extends React.PureComponent <{bookPath}, { pageNumber: number }> {


    constructor(props) {
        super(props);
        this.state = {
            pageNumber : 1
        }
    }

    render() {
        return (
            // <div className={'iFrame'}>
            //     <BookView title={'doin ur mmom'} src={this.getBookPath()} height={600}/>
            // </div>react-pdf

             <div className={styles.bookContainer}>
                 <p className={styles.page}>
                     Page {this.state.pageNumber} of {39}
                     <button onClick={() => {this.setState({pageNumber : this.state.pageNumber +1 })}}>{'>>'}</button>
                 </p>
                <Document file={this.props.bookPath} className={styles.book}>
                    <Page pageNumber={this.state.pageNumber} />
                </Document>
            </div>
        )
    }
}