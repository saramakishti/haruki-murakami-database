import Image from 'next/image';
import styles from './BookInfo.module.css';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
}

export default function BookInfo({
  src,
  alt,
  width = 200,
  height = 200,
  description,
}: Props) {
  return (
    <div className={styles.content}>
      <Image src={src} alt={alt} width={width} height={height} />

      <div className={styles.description}>
        <span>Description</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
