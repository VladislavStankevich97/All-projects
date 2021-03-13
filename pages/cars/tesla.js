import MainLayout from "../../components/MainLayout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/TMBL.module.css";
import Button from "@material-ui/core/Button";
import Router from "next/router";

function Tesla() {
  const showMercedes = () => {
    Router.push("/cars/mercedes");
  };

  const showAllCars = () => {
    Router.push("/cars");
  };
  const arr = [
    {
      name: "Tesla model S",
      src: "/cars/Tesla model S.jpg",
      href: "/cars/tesla/model-s",
      info: "Посмотреть информацию о модели Tesla model S ",
    },
    {
      name: "Tesla model Y",
      src: "/cars/Tesla model Y.jpg",
      href: "/cars/tesla/model-y",
      info: "Посмотреть информацию о модели Tesla model Y",
    },
    {
      name: "Tesla model X",
      src: "/cars/Tesla model X.jpg",
      href: "/cars/tesla/model-x",
      info: "Посмотреть информацию о модели Tesla model X",
    },
  ];

  return (
    <MainLayout title={"Tesla"} icon={"/cars/tesla.png"}>
      <div className={classes.container}>
        <div className={classes.cars}>
          {arr.map((car) => {
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
          <div className="hide">
          <Button variant="contained" color="primary">
            посмотреть Mercedes
          </Button>
          </div>
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
            onClick={showMercedes}
            className={classes.button}
          >
            посмотреть mercedes
          </Button>
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

export default Tesla;
