import React from 'react'
import { AppFrame } from './AppFrame'
import  samplePdf from "../files/samplepdf.pdf"
import "../style/PdfViewer.css"
import pdfFileIcon from "../images/apps/pdffileicon.png"
export const PdfViewer = (props) => {
  return (
        <div className='pdf-viewer'>
            <AppFrame popClose={props.popClose} titlename={props.filename||"PDF Viewer"} icon={pdfFileIcon}>
            <iframe className="pv-style"
            src={props.location ||samplePdf }
                width="100%" 
                height="100%">
        </iframe>
            </AppFrame>
        </div>
    )
}
