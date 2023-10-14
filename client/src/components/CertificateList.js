import React, { useState, useEffect } from 'react';

const CertificateList = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        // Fetch the list of certificates from the server (or directly from Solana)
    }, []);

    return (
        <div>
            <h2>List of Issued Certificates</h2>
            <ul>
                {certificates.map(cert => (
                    <li key={cert.id}>
                        {cert.name} - {cert.course}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CertificateList;
