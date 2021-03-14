import Head from "next/head";
import Link from "next/link";
import classes from "./ggg.module.css";

function MainLayout({ title, icon, children }) {
  return (
    <div>
      <Head>
        <title>{title ? title : "Car service"} </title>
        <link rel="icon" href={icon} />
      </Head>
      <div className={classes.header}>
        <div className={classes.headerSection}>
          <div className={classes.headerlogo}>INNOWISE-GROUP</div>
          <div className={classes.headerItem}>
            <Link href="/cars">
              <a className={classes.a}>CARS</a>
            </Link>
          </div>
          <div className={classes.headerItem}>
            <Link href="/weather">
              <a className={classes.a}>WEATHER</a>
            </Link>
          </div>
          <div className={classes.headerItem}>
            <Link href="/rickandmorty">
              <a className={classes.a}>RICK AND MORTY</a>
            </Link>
          </div>
          <div className={classes.headerItem}>
            <Link href="/todo-list">
              <a className={classes.a}>TODO-LIST</a>
            </Link>
          </div>
        </div>
        <div className={classes.headerSection}>
          <div className={classes.headerItem}>
            <Link href="/">
              <a className={classes.a}>SIGN IN</a>
            </Link>
          </div>
          <div className={classes.headerItem}>
            <Link href="/">
              <a className={classes.a}>LOG IN</a>
            </Link>
          </div>
        </div>
      </div>
      <main className={classes.component}>{children}</main>
    </div>
  );
}

export default MainLayout;

// import Head from "next/head";
// import Link from "next/link";
// // import classes from "../../styles/mainLayout.module.css";
// import classes from "./ggg.module.css";

// function MainLayout({ title, icon, children }) {
//   return (
//     //  <div className={classes.container}>
//     //    <Head>
//     //      <title>{title ? title : "Car service"} </title>
//     //      <link rel="icon" href={icon} />
//     //    </Head>
//     //    <nav className={classes.nav}>
//     //     <Link href="/">
//     //       <a className={classes.link}>Главная</a>
//     //     </Link>
//     //     <Link href="/rickandmorty">
//     //       <a className={classes.link}>Рик и морти</a>
//     //     </Link>
//     //     <Link href="/cars">
//     //       <a className={classes.link}>Машины</a>
//     //     </Link>
//     //     <Link href="/weather">
//     //       <a className={classes.link}>Погода</a>
//     //     </Link>
//     //     <Link href="/todo-list">
//     //       <a className={classes.link}>Тудушка</a>
//     //     </Link>
//     //   </nav>
//       // <main className={classes.component}>{children}</main>
//     // </div>
//   );
// }

// export default MainLayout;
