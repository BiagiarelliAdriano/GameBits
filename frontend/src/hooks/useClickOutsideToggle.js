import { useEffect, useRef, useState } from 'react'

const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        // Close dropdown if click happens outside referenced element
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setExpanded(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, [ref]);

    return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;