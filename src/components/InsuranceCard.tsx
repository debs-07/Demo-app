import LockIcon from "../Icons/lock";
import SecureIcon from "../Icons/secure";

const InsuranceCard = () => {
  return (
    <div className="InsuranceCard">
      <div className="InsuranceContent">
        <SecureIcon />
        <div className="InsuranceContentText">
          <div className="InsuranceCoverageText">Insurance Coverage</div>
          <div className="InsuranceDescText">
            Check your benefits and coverage
          </div>
        </div>
      </div>
      <div className="InsuranceLock">
        <LockIcon />
      </div>
    </div>
  );
};

export default InsuranceCard;
