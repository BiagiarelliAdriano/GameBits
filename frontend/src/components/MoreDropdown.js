import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
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
                className="text-center"
                popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit"
                >
                    <i className="fas fa-edit" />
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label="delete"
                >
                    <i className="fas fa-trash-alt" />
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
                    onClick={() => history.push(`/users/${id}/edit`)}
                    aria-label="edit-profile"
                    className={styles.DropdownItem}
                >
                    <i className="fas fa-edit" /> edit user
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/users/${id}/edit/username`)}
                    aria-label="edit-username"
                    className={styles.DropdownItem}
                >
                    <i className="far fa-id-card" />
                    change username
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/users/${id}/edit/password`)}
                    aria-label="edit-password"
                    className={styles.DropdownItem}
                >
                    <i className="fas fa-key" />
                    change password
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
