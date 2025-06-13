import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

/**
 * Asset component displays either:
 * - a loading spinner,
 * - an image,
 * - or a message,
 * depending on the props passed.
 */
const Asset = ({ spinner, src, message }) => {
    return (
        <div className={`${styles.Asset} p-4`}>
            {/* Show spinner if spinner prop is true */}
            {spinner && <Spinner animation="border" />}
            {/* Show message if src prop is provided */}
            {src && <img src={src} alt={message} />}
            {/* Show message text if provided */}
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
};

export default Asset;