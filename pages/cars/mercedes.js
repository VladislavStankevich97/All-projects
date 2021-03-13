import MainLayout from "../../components/MainLayout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/TMBL.module.css";
import Button from "@material-ui/core/Button";
import Router from 'next/router'

function Mercedes() {
  const showTesla = () => {
    Router.push("/cars/tesla")
  }

  const showBmw = () => {
    Router.push("/cars/bmw")
  }

  const showAllCars = () => {
    Router.push("/cars");
  };

  const arr = [
    {
      name: "Mercedes C-class",
      src: "/cars/Mercedes C-class.jpg",
      href: "/cars/mercedes/c-class",
      info: "Посмотреть информацию о модели Mercedes-banz C-class ",
    },
    {
      name: "Mercedes E-class",
      src: "/cars/Mercedes E-class.jpeg",
      href: "/cars/mercedes/e-class",
      info: "Посмотреть информацию о модели Mercedes-banz E-class",
    },
    {
      name: "Mercedes S-class",
      src: "/cars/Mercedes S-class.jpg",
      href: "/cars/mercedes/s-class",
      info: "Посмотреть информацию о модели Mercedes-banz S-class",
    },
  ];

  return (
    <MainLayout title={"Mercedes"} icon={"/cars/mercedes.ico"}>
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
          onClick={showTesla}
          className={classes.button}
        >
          посмотреть tesla
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
          onClick={showBmw}
          className={classes.button}
        >
          посмотреть bmw
        </Button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Mercedes;
