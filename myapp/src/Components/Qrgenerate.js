import React,{useState} from 'react';
import generateQRCode from './generateQRCode';

const Qrgenerate = () => {
    const [qrData, setQrData] = useState('Welcome To QR generator');
    const [qrSize, setQrSize] = useState('128x128');

    return(
        <div className='container'>
            <div className='main'>
                <div className='box'>
                    <div className='row' style={{paddingTop:'20px'}}>
                        <div className='col-md-6'>
                            <input type='text' placeholder='Enter QR Data' value={qrData} className='form-control' onChange={(e) => setQrData(e.target.value)}/>
                        </div>
                        <div className='col-md-6'>
                            <input type='text' placeholder='Enter Size' value={qrSize} className='form-control' onChange={(e) => setQrSize(e.target.value)}/>
                        </div>
                    </div>

                    <div className='Qrcode' style={{paddingTop:'20px'}}>
                        <img className='qr-image' src={generateQRCode(qrData,qrSize)} alt='QR Code'/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Qrgenerate;