const qrServerUrl='https://api.qrserver.com/v1/create-qr-code/';

export const generateQRCode = (qrData,qrSize) =>{
    const qrImageurl=`${qrServerUrl}?data=${encodeURIComponent(qrData)}&size=${qrSize}`;
    return qrImageurl;
}

export default generateQRCode;