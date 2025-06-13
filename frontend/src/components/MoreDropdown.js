import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
// Custom toggle for dropdown
const ThreeDots = React.forwardRef(({ onClick, className }, ref) => (
    <i
        className={`fas fa-ellipsis-v ${className}`}
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle className={styles.DropdownToggle} />

            <Dropdown.Menu
                className={`${styles.DropdownMenu} text-center`}
                popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit"
                >
                    <i className="fas fa-edit" /> Edit
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label="delete"
                >
                    <i className="fas fa-trash-alt" /> Delete
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export const UserEditDropdown = ({ id }) => {
    const history = useHistory();
    return (
        <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
            <Dropdown.Toggle className={styles.DropdownToggle} as={ThreeDots} />
            <Dropdown.Menu className={styles.DropdownMenu}>
                <Dropdown.Item
                    as="button"
                    onClick={(e) => {
                        e.preventDefault();
                        history.push(`/users/${id}/edit`);
                    }}
                    aria-label="edit-profile"
                    className={styles.DropdownItem}
                >
                    <i className="fas fa-edit" /> Edit User
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={(e) => {
                        e.preventDefault();
                        history.push(`/users/${id}/edit/username`);
                    }}
                    aria-label="edit-username"
                    className={styles.DropdownItem}
                >
                    <i className="far fa-id-card" />
                    Change Username
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={(e) => {
                        e.preventDefault();
                        history.push(`/users/${id}/edit/password`);
                    }}
                    aria-label="edit-password"
                    className={styles.DropdownItem}
                >
                    <i className="fas fa-key" />
                    Change Password
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
