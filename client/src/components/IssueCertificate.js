import React, { useState } from 'react';

const IssueCertificate = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to issue the certificate
    }

    return (
        <div>
            <h2>Issue Certificate</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Course:</label>
                    <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
                </div>
                <button type="submit">Issue</button>
            </form>
        </div>
    );
}

export default IssueCertificate;
