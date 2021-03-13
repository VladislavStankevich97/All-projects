import MainLayout from "../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import Link from "next/link";

function Mercedes() {
  const router = useRouter();
  let text;
  if (router.query.mercedes === "c-class") {
    text = "Это хорошая машина";
  } else if (router.query.mercedes === "e-class") {
    text = "Это пиздатая машина";
  } else if (router.query.mercedes === "s-class") {
    text = "Это лучшая машина";
  }

  return (
    <MainLayout title={`Mercedes | ${router.query.mercedes}`} icon={"/mercedes.ico"}>
      <div className="div">
        <h1>Вы открыли информацию о модели "{router.query.mercedes}"</h1>
        <br />
        <h2>{text}</h2>
        <Link href="/cars/mercedes">
          <a>Вернуться к просмотру всех Mercedes</a>
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
