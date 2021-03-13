import MainLayout from "../components/MainLayout/MainLayout";
import Button from "@material-ui/core/Button";
import classes from "../styles/index.module.css";
import Router from "next/router";


export default function Home() {
  const showAllCars = () => {
    Router.push("/cars");
  };

  return (
    <MainLayout title={"Home page"}icon={"/home.png"}>
      <div className={classes.showCar}>
        <Button
          variant="contained"
          color="primary"
          onClick={showAllCars}
          className={classes.button}
        >
          посмотреть модели машин
        </Button>
      </div>
    </MainLayout>
  );
}

