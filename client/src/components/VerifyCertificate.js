import React, { useState } from 'react';

const VerifyCertificate = () => {
    const [certificateId, setCertificateId] = useState('');

    const handleVerify = () => {
        // Logic to verify the certificate with the given ID
    }

    return (
        <div>
            <h2>Verify Certificate</h2>
            <input type="text" placeholder="Certificate ID" value={certificateId} onChange={(e) => setCertificateId(e.target.value)} />
            <button onClick={handleVerify}>Verify</button>
        </div>
    );
}

export default VerifyCertificate;
