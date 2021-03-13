import Head from "next/head";
import Link from "next/link";
import classes from "../../styles/mainLayout.module.css";

function MainLayout({ title, icon, children }) {
  return (
    <div className={classes.container}>
      <Head>
        <title>{title ? title : "Car service"} </title>
        <link rel="icon" href={icon} />
      </Head>
      <nav className={classes.nav}>
        <Link href="/">
          <a className={classes.link}>Главная</a>
        </Link>
        <Link href="/rickandmorty">
          <a className={classes.link}>Рик и морти</a>
        </Link>
        <Link href="/cars">
          <a className={classes.link}>Машины</a>
        </Link>
        <Link href="/weather">
          <a className={classes.link}>Погода</a>
        </Link>
        <Link href="/todo-list">
          <a className={classes.link}>Тудушка</a>
        </Link>
      </nav>
      <main className={classes.component}>{children}</main>
    </div>
  );
}

export default MainLayout;
