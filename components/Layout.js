import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link href="/">
          <a className={styles.link}>
            <svg
              width="246"
              height="242"
              viewBox="0 0 246 242"
              role="img"
              aria-label="yamanoku logo"
              className={styles.svg}
            >
              <path
                d="M64,67v54l82,82-46,46v60h56L310,155V96H230l-21,20L160,67H64ZM176,203l-45,46h25L293,113H230l-39,39-31-31H94Z"
                className={styles.path}
              />
            </svg>
            yama-gialog
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
}
