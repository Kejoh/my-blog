import styles from './header.module.css'
import Image from 'next/image'
import Head from 'next/head'

export default function Header() {
    return (
        <div className={styles.principal}>
            <Head>
                <Image
                    priority
                    src="/images/koi.jpeg"
                    className={utilStyles.borderCircle}
                    height={50}
                    width={50}
                    alt={name}
                />
            </Head>
        </div>
    )
} 