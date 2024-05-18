import React from "react";
import CancelIcon from "../Icons/cancel";
import RotateIcon from "../Icons/rotate";
import HumanModel from "../components/HumanModel";
import AlertModal from "../components/AlertModal";
import { useNavigate } from "react-router-dom";

const initialAlertModal = { id: null, show: false };

const SymptonsChecker = () => {
  const [alertModal, setAlertModal] = React.useState(initialAlertModal);

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  const modalHandler = (id: any) => {
    setAlertModal({ id: id, show: true });
  };

  const closeAlertModalHandler = () => {
    setAlertModal(initialAlertModal);
  };

  return (
    <>
      {alertModal.show && (
        <AlertModal
          id={alertModal.id}
          closeAlertModal={closeAlertModalHandler}
        />
      )}
      <div>
        <div className="SymptonsCheckerTopBar">
          <div className="SymptonsCheckerText SymptonsCheckerHeaderText">
            Symptom Checker
          </div>
          <div className="CancelIcon" onClick={navigateHandler}>
            <CancelIcon />
          </div>
        </div>
        <div className="SymptonsCheckerBar">
          <div className="SymptonsCheckerText BarItem Searchtext">Search</div>
          <div className="SymptonsCheckerText BarItem BarItemSelected">
            Point on the body
          </div>
        </div>

        <div className="RotateModel">
          <RotateIcon /> <div className="RotateModelText">Rotate model</div>
        </div>
        <HumanModel updateModal={modalHandler} />
      </div>
    </>
  );
};

export default SymptonsChecker;
