import { BodyComponent } from "@darshanpatel2608/human-body-react";

const parts: any = {
  head: { selected: false, show: true },
  chest: { selected: false, show: true },
  stomach: { selected: false, show: true },
  left_shoulder: { selected: false, show: true },
  left_arm: { selected: false, show: true },
  left_hand: { selected: false, show: true },
  right_shoulder: { selected: false, show: true },
  left_leg_lower: { selected: false, show: true },
  right_arm: { selected: false, show: true },
  right_hand: { selected: false, show: true },
  left_leg_upper: { selected: false, show: true },
  left_foot: { selected: false, show: true },
  right_leg_upper: { selected: false, show: true },
  right_leg_lower: { selected: false, show: true },
  right_foot: { selected: false, show: true },
};

const HumanModel = (props: any) => {
  const partClickHandler = (id: any) => {
    if (parts[id].selected === true) {
      props.updateModal(id);
    }
  };

  return (
    <div className="HumanModelWrapper">
      <div className="BodyComponentWrapper">
        <BodyComponent
          partsInput={parts}
          // onChange={partChangeHandler}
          onClick={partClickHandler}
        />
      </div>
    </div>
  );
};

export default HumanModel;
