import React, { useEffect, useRef } from 'react';

const Popup = () => {
    const buttonRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        const buttonElem = buttonRef.current;
        const modalElem = modalRef.current;

        if (!buttonElem || !modalElem) {
            return; // return if either element is not found
        }

        modalElem.style.cssText = `
            display: flex;
            visibility: hidden;
            opacity: 0;
            transition: opacity 300ms ease-in-out;
        `;

        const closeModal = event => {
            const target = event.target;

            if (target === modalElem) {
                modalElem.style.opacity = 0;

                setTimeout(() => {
                    modalElem.style.visibility = 'hidden';
                }, 300);
            }
        };

        const openModal = () => {
            modalElem.style.visibility = 'visible';
            modalElem.style.opacity = 1;
        };

        buttonElem.addEventListener('click', openModal);
        modalElem.addEventListener('click', closeModal);

        return () => {
            buttonElem.removeEventListener('click', openModal);
            modalElem.removeEventListener('click', closeModal);
        };
    }, []);

    return (
        <>
            <button ref={buttonRef} className="section_button">Open Modal</button>
            <div ref={modalRef} className="modal"></div>
        </>
    );
};

export default Popup;

