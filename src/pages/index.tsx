import RedirectButtonsComponent from "@/components/RedirectButtons/RedirectButtons.component";
import HeaderTitleComponent from "@/components/HeaderTitle/HeaderTitle.component";
import MiddleTitleComponent from "@/components/MiddleTitle/MiddleTitle.component";
import Footer from "@/components/Footer/Footer.component";
import BigTextWithImagesModule from "@/components/BigTextWithImages/BigTextWithImages.component";
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
