import Image from 'next/image';
import { useState } from 'react';
import styles from './BookInfo.module.css';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
}

export default function BookInfo(props: Props) {
  return (
    <div className={styles.content}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />

      <div className={styles.description}>
        <span>Description</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
