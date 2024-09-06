import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import './Menu.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle menu open/close and prevent background scroll
    const handleMenuToggle = (isOpen) => {
        setIsMenuOpen(isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Clean up when component unmounts or menu closes
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto'; // Ensure scroll is re-enabled on unmount
        };
    }, []);

    return (
        <Menu 
            menuButton={
                <MenuButton className="menu">
                    {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
                </MenuButton>
            } 
            onMenuChange={({ open }) => handleMenuToggle(open)}
        >
            <Link to="/">
                <MenuItem>{t("Home")}</MenuItem>
            </Link>
            <Link to="/Professions">
                <MenuItem>{t("Profession")}</MenuItem>
            </Link>
            <Link to="/Admission">
                <MenuItem>{t("Admission")}</MenuItem>
            </Link>
            <Link to="/About">
                <MenuItem>{t("About")}</MenuItem>
            </Link>
        </Menu>
    );
}

export default MenuBar;
