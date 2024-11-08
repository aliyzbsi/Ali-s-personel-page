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

        <meta
          name="keywords"
          content="Ali Yüzbaşı, yazılım geliştirici, React, JavaScript, portföy, frontend developer"
        />

        <meta name="author" content="Ali Yüzbaşı" />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Ali Yüzbaşı | Yazılım Geliştirici" />
        <meta
          property="og:description"
          content="Ali Yüzbaşı'nın yazılım geliştirme becerilerini ve projelerini inceleyin."
        />
        <meta property="og:image" content="/assets/thumbnail.jpg" />
        <meta property="og:url" content="https://aliyzbsi.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ali Yüzbaşı | Yazılım Geliştirici"
        />
        <meta
          name="twitter:description"
          content="Ali Yüzbaşı'nın yazılım geliştirme projelerine göz atın."
        />
        <meta name="twitter:image" content="/assets/thumbnail.jpg" />
      </Helmet>
      {design === 0 && <FirstDesign />}

      {design === 1 && <SecondDesign />}
      {design === 2 && <ThirdDesign />}
    </div>
  );
}

export default Main;
