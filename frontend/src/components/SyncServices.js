import React from 'react'; // Importing React
import './SyncServices.css'; // Importing styles for SyncServices

// SyncServices component
const SyncServices = () => {
    return (
        <div className="sync-services">
            <h2>Sync with External Services</h2> {/* Section Title */}
            <button>Sync with Fitbit</button> {/* Button to sync with Fitbit */}
            <button>Sync with Google Fit</button> {/* Button to sync with Google Fit */}
        </div>
    );
};

export default SyncServices; // Exporting SyncServices component
