import React from "react";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import '../../../components/TimelineComponent.css'
const ExportPDFButton = ({ elementId }) => {
  const handleExportPDF = () => {
    const input = document.getElementById(elementId);

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "pt",
          format: "a4",
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // Calculate the dimensions to fit the image within the PDF
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const aspectRatio = canvasWidth / canvasHeight;

        let imgWidth = pdfWidth;
        let imgHeight = pdfWidth / aspectRatio;

        if (imgHeight > pdfHeight) {
          imgHeight = pdfHeight;
          imgWidth = pdfHeight * aspectRatio;
        }

        // Center the image within the PDF
        const marginX = (pdfWidth - imgWidth) / 2;
        const marginY = (pdfHeight - imgHeight) / 2;

        pdf.addImage(imgData, "PNG", marginX, marginY, imgWidth, imgHeight);
        pdf.save("timeline.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF", error);
      });
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleExportPDF}>
      Exportar a PDF
    </Button>
  );
};

export default ExportPDFButton;
