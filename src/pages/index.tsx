import RedirectButtonsComponent from "@/components/IndexPage/RedirectButtons/RedirectButtons.component";
import HeaderTitleComponent from "@/components/IndexPage/HeaderTitle/HeaderTitle.component";
import MiddleTitleComponent from "@/components/IndexPage/MiddleTitle/MiddleTitle.component";
import Footer from "@/components/IndexPage/Footer/Footer.component";
import BigTextWithImagesModule from "@/components/IndexPage/BigTextWithImages/BigTextWithImages.component";
import {IndexPage} from "@/styles/indexPage.style";
export default function Home() {

    return (
      <IndexPage>
          <HeaderTitleComponent />
          <RedirectButtonsComponent />
          <MiddleTitleComponent />
          <BigTextWithImagesModule />
          <Footer />
      </IndexPage>
  )
}
