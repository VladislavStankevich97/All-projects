import MainLayout from "../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import Link from "next/link";

function Mercedes() {
  const router = useRouter();
  let text;
  if (router.query.lada === "vesta") {
    text = "Эта рыгало у бати";
  } else if (router.query.lada === "granta") {
    text = "Эта говно";
  } else if (router.query.lada === "calina") {
    text = "Эта ещё хуже";
  }

  return (
    <MainLayout title={`Lada | ${router.query.lada}`} icon={"/lada.png"}>
      <div className="div">
        <h1>Вы открыли информацию о модели "{router.query.lada}"</h1>
        <br />
        <h2>{text}</h2>
        <Link href="/cars/lada">
          <a>Вернуться к просмотру всех Lada</a>
        </Link>
      </div>
      <style jsc>{`
            .div {
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
      `}</style>
    </MainLayout>

  );
}

export default Mercedes;