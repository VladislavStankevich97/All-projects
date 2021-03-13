import MainLayout from "../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import Link from "next/link";

function Mercedes() {
  const router = useRouter();
  let text;
  if (router.query.bmw === "3-series") {
    text = "Я не люблю бмв";
  } else if (router.query.bmw === "5-series") {
    text = "Эту тоже не люблю";
  } else if (router.query.bmw === "7-series") {
    text = "И эту";
  }

  return (
    <MainLayout title={`BMW | ${router.query.bmw}`} icon={"/bmw.png"}>
      <div className="div">
        <h1>Вы открыли информацию о модели "{router.query.bmw}"</h1>
        <br />
        <h2>{text}</h2>
        <Link href="/cars/bmw">
          <a>Вернуться к просмотру всех Bmw</a>
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