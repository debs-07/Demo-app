import ArrowRightIcon from "../Icons/arrowRight";
import FacilityIcon from "../Icons/facility";
import TeleHealthIcon from "../Icons/telehealth";
import CareIcon from "../Icons/care";
import ClaimIcon from "../Icons/claim";
import Coverage from "../Icons/coverage";
import DeliveryIcon from "../Icons/delivery";
import DocVariantOneIcon from "../Icons/doc_variant_one";

import HomeIcon from "../Icons/home";
import NotificationsIcon from "../Icons/notifications";
import ProfileIcon from "../Icons/profile";
import SymptomsCheckerIcon from "../Icons/symptomChecker";
import ServicesCard from "../components/ServicesCard";
import InsuranceCard from "../components/InsuranceCard";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="HomeTopBar">
          <NotificationsIcon />
          <ProfileIcon />
        </div>

        <div className="HomeBanner">
          <div className="HomeBannerText">
            <div className="HomeBannerHeaderText">Our Network</div>
            <div className="HomeBannerContentText">
              Navigate within our network of healthcare providers
            </div>
            <div className="HomeBannerButton">
              Search Network <ArrowRightIcon />
            </div>
          </div>
          <div className="HomeBannerImage">
            <DocVariantOneIcon />
          </div>
        </div>

        <div className="Services">
          <div className="SubHeaderText">Medical Services</div>
          <div className="ServicesContent">
            <div className="ServicesSection ServicesSectionLeft">
              <ServicesCard
                icon={<SymptomsCheckerIcon />}
                label="Symptom Checker"
                onClickNav="/symptoms-checker"
              />
              <ServicesCard
                icon={<FacilityIcon />}
                label="Facility Search & Booking"
              />
            </div>
            <div className="ServicesSection">
              <ServicesCard icon={<TeleHealthIcon />} label="Telehealth" />
              <ServicesCard icon={<DeliveryIcon />} label="Medicine Delivery" />
            </div>
          </div>
        </div>

        <div className="Insurance">
          <div className="SubHeaderText">Insurance Service</div>
          <InsuranceCard />
          <InsuranceCard />
        </div>
      </div>
      <div className="bottomBar">
        <div className="bottomBarContent">
          <HomeIcon />
          <CareIcon />
          <Coverage />
          <ClaimIcon />
        </div>
      </div>
    </>
  );
};

export default Home;
