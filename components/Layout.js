import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>
          <Link href="/">
            <a>yama-gialog</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>
    </>
  );
}
