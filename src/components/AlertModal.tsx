const AlertModal = (props: any) => {
  return (
    <div className="ModalWrapper" onClick={() => props.closeAlertModal()}>
      <div className="Card Modal" onClick={(e) => e.stopPropagation()}>
        <div className="AlertModalText">{`Hurr, You clicked "${props.id}"`}</div>
        <div className="OkButton" onClick={() => props.closeAlertModal()}>
          Ok
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
