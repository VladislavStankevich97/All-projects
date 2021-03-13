import MainLayout from "../../components/MainLayout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/TMBL.module.css";
import Button from "@material-ui/core/Button";
import Router from 'next/router'

function Bmw() {

  const showMercedes = () => {
    Router.push("/cars/mercedes")
  }

  const showLada = () => {
    Router.push("/cars/lada")
  }

  const showAllCars = () => {
    Router.push("/cars");
  };

  const arr = [
    {
      name: "Bmw 3 series",
      src: "/cars/Bmw 3 series.jpg",
      href: "/cars/bmw/3-series",
      info: "Посмотреть информацию о модели Bmw 3 series ",
    },
    {
      name: "Bmw 5 series",
      src: "/cars/Bmw 5 series.jpg",
      href: "/cars/bmw/5-series",
      info: "Посмотреть информацию о модели Bmw 5 series",
    },
    {
      name: "Bmw 7 series",
      src: "/cars/Bmw 7 series.jpeg",
      href: "/cars/bmw/7-series",
      info: "Посмотреть информацию о модели Bmw 7 series",
    },
  ];
  return (
    <MainLayout title={"Bmw"} icon={"/cars/bmw.png"}>
      <div className={classes.container}>
        <div className={classes.cars}>
          {arr.map((car, ind) => {
            return (
              <div className={classes.car} key={car.name}>
                <Image
                  src={car.src}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
                <h2 key={car.name}>{car.name}</h2>
                <Link href={car.href}>
                  <a key={car.name} className={classes.link}>
                    {car.info}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={classes.divLink}>
        <Button
          variant="contained"
          color="primary"
          onClick={showMercedes}
          className={classes.button}
        >
          посмотреть Mercedes
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={showAllCars}
          className={classes.button}
        >
          посмотреть все марки
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={showLada}
          className={classes.button}
        >
          посмотреть lada
        </Button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Bmw;
