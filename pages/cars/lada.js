import MainLayout from "../../components/MainLayout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/TMBL.module.css";
import Button from "@material-ui/core/Button";
import Router from "next/router";

function Bmw() {
  const showBmw = () => {
    Router.push("/cars/bmw");
  };

  const showAllCars = () => {
    Router.push("/cars");
  };
  const arr = [
    {
      name: "Lada vesta",
      src: "/cars/Lada vesta.jpg",
      href: "/cars/lada/vesta",
      info: "Посмотреть информацию о модели Lada vesta ",
    },
    {
      name: "Lada granta",
      src: "/cars/Lada granta.jpg",
      href: "/cars/lada/granta",
      info: "Посмотреть информацию о модели Lada granta",
    },
    {
      name: "Lada calina",
      src: "/cars/Lada calina.jpg",
      href: "/cars/lada/calina",
      info: "Посмотреть информацию о модели Lada calina",
    },
  ];
  return (
    <MainLayout title={"Lada"} icon={"/cars/lada.png"}>
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
              onClick={showBmw}
              className={classes.button}
            >
              посмотреть bmw
            </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={showAllCars}
            className={classes.button}
          >
            посмотреть все марки
          </Button>

          <div className="hide">
            <Button variant="contained" color="primary">
              посмотреть mercedes
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide {
          visibility: hidden
        }
      `}</style>
    </MainLayout>
  );
}

export default Bmw;
