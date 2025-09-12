"use client"

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        console.log('Menu toggle clicked:', !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        console.log('Menu closed');
        setIsMenuOpen(false);
    };

    const handleLogoClick = () => {
        router.push('/');
    };

    // Debug para verificar se está em mobile
    React.useEffect(() => {
        const checkMobile = () => {
            const isMobileSize = window.innerWidth <= 768;
            console.log('Window width:', window.innerWidth);
            console.log('Is mobile:', isMobileSize);
            setIsMobile(isMobileSize);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.title} onClick={handleLogoClick}> 
                    <span className="text-blue-700">Caron</span>.
                </h1>
            </div>

            {/* Menu Desktop */}
            <div className={styles.navigation}>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item}><a href="/">Home</a></li>
                        <li className={styles.item}><a href="/api">Conheça a API</a></li>
                        <li className={styles.item}><a href="/personagens">Personagens</a></li>
                        <div className={styles.contatoContainer}>
                            <li className={styles.contato}><a href="/contato">Contato</a></li>
                        </div>
                    </ul>
                </nav>
            </div>

            {/* Botão Menu Mobile */}
            <button 
                className={styles.menuButton}
                onClick={toggleMenu}
                aria-label="Menu"
                style={{
                    display: isMobile ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Menu Mobile */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <nav className={styles.mobileNav}>
                    <ul className={styles.mobileList}>
                        <li className={styles.mobileItem}>
                            <a href="/" onClick={closeMenu}>Home</a>
                        </li>
                        <li className={styles.mobileItem}>
                            <a href="/api" onClick={closeMenu}>Conheça a API</a>
                        </li>
                        <li className={styles.mobileItem}>
                            <a href="/personagens" onClick={closeMenu}>Personagens</a>
                        </li>
                        <li className={styles.mobileItem}>
                            <a href="/contato" onClick={closeMenu} className={styles.mobileContato}>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Overlay para fechar menu */}
            {isMenuOpen && (
                <div 
                    className={styles.overlay}
                    onClick={closeMenu}
                ></div>
            )}
        </header>
    );
}

