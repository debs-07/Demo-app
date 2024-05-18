import { useNavigate } from "react-router-dom";
const ServicesCard = (props: any) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    if (props.onClickNav) navigate(props.onClickNav);
  };

  return (
    <div className="ServicesCard" onClick={navigateHandler}>
      <div> {props.icon}</div>
      <div className="ServicesCardLabel"> {props.label}</div>
    </div>
  );
};

export default ServicesCard;
