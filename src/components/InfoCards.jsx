"use client"

import React from 'react';
import {Card} from 'antd';
import Image from 'next/image';
import styles from './InfoCards.module.css';


const InfoCards = ({HeaderImage, title, description, WindowUrl, ButtonTitle}) => {
  return (
    <Card className={styles.ApiFirstCard}>
            <div className={styles.CardPhoto}>
              <Image
                className={styles.CardImage}
                src={HeaderImage}
                alt="API Card"
                width={300}
                height={200}
              />
            </div>
            <div className={styles.CardContent}>
              <h3 className={styles.CardTitle}>{title}</h3>
              <p className={styles.CardDescription}>
                {description}
              </p>
            {
                ButtonTitle && (         
              <div className={styles.CardActions}>
                <button
                    className={styles.CardButton}
                  onClick={() =>
                    window.open(WindowUrl, "_blank")
                  }
                >
                  {ButtonTitle}
                </button>
              </div>
                )
            }
            </div>
          </Card>
  )
}

export default InfoCards