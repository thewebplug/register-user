import React, { useEffect, useState } from "react";
import { getUser, getUsers } from "../apis";
import { useParams } from "react-router-dom";

const IDCardDisplay = () => {
  const pathname = useParams();

  const [user, setUser] = useState(null)

  const handleGetUser = async () => {
    const response2 = await getUsers();
    const response = await getUser(pathname?.id);
    setUser(response?.data)
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div className="id-display__container">
    <div className="id-display__card">
      <div className="id-display__content">
        {/* Header */}
        <div className="id-display__header">
          <h1 className="id-display__header-title">
            COMPANY-NAME
          </h1>
        </div>

        {/* User Info */}
        <div className="id-display__info">
          {/* Profile Image */}
          <div className="id-display__photo">
            <img
              src={user?.photo}
              alt={user?.name}
              className="id-display__photo-image"
            />
          </div>

          {/* User Details */}
          <div className="id-display__details">
            <div className="id-display__details-group">
              <label className="id-display__details-label">FULL NAME</label>
              <p className="id-display__details-value">
                {user?.name}
              </p>
            </div>

            <div className="id-display__details-group">
              <label className="id-display__details-label">ID NUMBER</label>
              <p className="id-display__details-value">
                {user?._id}
              </p>
            </div>

            <div className="id-display__details-group">
              <label className="id-display__details-label">ISSUED DATE</label>
              <p className="id-display__details-value">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="id-display__footer">
          <div className="id-display__footer-text">
            <p>This ID card is property of Company Name.</p>
            <p>If found, please return to nearest office.</p>
          </div>
          <div className="id-display__footer-qr">
            <img 
              src={user?.qrCodeUrl} 
              alt="QR Code" 
              className="id-display__footer-qr-code"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default IDCardDisplay;