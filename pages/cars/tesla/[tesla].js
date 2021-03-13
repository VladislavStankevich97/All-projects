import MainLayout from "../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import Link from "next/link";

function Mercedes() {
  const router = useRouter();
  console.log(router.query.tesla);
  let text;
  if (router.query.tesla === "model-s") {
    text = "Илон Mаск лучший";
  } else if (router.query.tesla === "model-y") {
    text = "Электоркары заебись";
  } else if (router.query.tesla === "model-x  ") {
    text = "За ними будущее";
  }

  return (
    <MainLayout title={`Tesla | ${router.query.tesla}`} icon={"/tesla.png"}>
      <div className="div">
        <h1>Вы открыли информацию о модели "{router.query.tesla}"</h1>
        <br />
        <h2>{text}</h2>
        <Link href="/cars/tesla">
          <a>Вернуться к просмотру всех Tesla</a>
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