import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import close from '../../assets/images/close.png';

const Modal = ({ ModalTitle, children, Modalclass, onClose, className, ...attrs }) => {
  

  return (
	<div className={`modal-box hasmodal ${Modalclass}`}>
		<div className="modal-main">
			<span className="close" onClick={onClose}>
				<img src={close}/>
			</span>
			<h3>{ModalTitle}</h3>
			{children}
		</div>
	</div>
	);
};

Modal.propTypes = {
  /**
   * The page title.
   */
   ModalTitle: PropTypes.string,
  /**
   * The page subtitle.
   */
   children: PropTypes.string
};

export default Modal;
