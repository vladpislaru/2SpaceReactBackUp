import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import Modal from 'react-bootstrap/Modal';
import { FaWindowClose } from "react-icons/fa";

const PdfModal = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [show, setShow] = useState(false);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="Modal"  style={{zIndex:20, overflow:'scroll'}}>
            {/* <div>
                <FaWindowClose color={"#999"} size={"20"}></FaWindowClose>
            </div> */}
            <div className="pdf-view">
                <Document
                    file={props.pdf}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
                </Document>
            </div>
        </div>
    )

}
export default PdfModal;