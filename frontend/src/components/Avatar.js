import React from 'react';
import styles from '../styles/Avatar.module.css';

/**
 * Avatar component renders a user avatar image
 * and optional text next to it.
 */
const Avatar = ({ src, height = 45, text, alt = "avatar" }) => {
    return (
        <span>
            <img
                className={styles.Avatar}
                src={src}
                height={height}
                width={height}
                alt={alt || text || "user avatar"}
            />
            {text && <span> {text} </span>}
        </span>
    );
};

export default Avatar;
