import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './style.module.css';
import Link from 'next/link';

interface CardProps {
    id: number,
    backgroundImageSrc: StaticImageData;
    title: string,
    description: string
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ backgroundImageSrc, id, children, title, description }) => {
    const url = `/detalhe/${id}`;
    return (
        <Link key={id} href={url} className={styles.backgroundContainer}>
            <div
                className={styles.backgroundImage}
                style={{ backgroundImage: `url(${backgroundImageSrc.src})` }}
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
                {children}
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>
    );
};

export default Card;
