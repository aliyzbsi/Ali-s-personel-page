import { Helmet } from "react-helmet";
import { useDesign } from "../context/DesignContext";
import FirstDesign from "./FirstDesign";
import SecondDesign from "./SecondDesign";
import ThirdDesign from "./ThirdDesign";

function Main() {
  const { design } = useDesign();
  return (
    <div>
      <Helmet>
        <title>Ali Yüzbaşı | Software Engineer</title>

        <meta
          name="description"
          content="Ali Yüzbaşı'nın yazılım geliştirme becerilerini, projelerini ve profesyonel profilini keşfedin."
        />
      </Helmet>
      {design === 0 && <FirstDesign />}

      {design === 1 && <SecondDesign />}
      {design === 2 && <ThirdDesign />}
    </div>
  );
}

export default Main;
