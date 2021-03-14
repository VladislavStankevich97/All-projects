import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/cars.module.css";
import MainLayout from "../../components/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout title={"Car brands"}icon={"/icon.png"}>
      <div >
          <div  className={classes.cars}>
            <div className={classes.car}>
              <Image
                src="/cars/Tesla.jpeg"
                alt="Picture of the author"
                width={400}
                height={400}
              />
              <h2>Tesla</h2>
              <Link href="/cars/tesla">
                <a className={classes.link}>Посетить страницу с Tesla</a>
              </Link>
            </div>

            <div className={classes.car}>
              <Image
                src="/cars/Mercedes.jpg"
                alt="Picture of the author"
                width={400}
                height={400}
              />
              <h2>Mercedes</h2>
              <Link href="/cars/mercedes">
                <a className={classes.link}>Посетить страницу с Mercedes</a>
              </Link>
            </div>

            <div className={classes.car}>
              <Image
                src="/cars/Bmw.jpeg"
                alt="Picture of the author"
                width={400}
                height={400}
              />
              <h2>Bmw</h2>
              <Link href="/cars/bmw">
                <a className={classes.link}>Посетить страницу с Bmw</a>
              </Link>
            </div>

            <div className={classes.car}>
              <Image
                src="/cars/Lada.jpg"
                alt="Picture of the author"
                width={400}
                height={400}
              />
              <h2>Lada</h2>
              <Link href="/cars/lada">
                <a className={classes.link}>Посетить страницу с Lada</a>
              </Link>
            </div>
          </div>
          <div className={classes.error}>
            <Link href="/">
              <a className={classes.link}>ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</a>
            </Link>
          </div>
      </div>
    </MainLayout>
  );
}
