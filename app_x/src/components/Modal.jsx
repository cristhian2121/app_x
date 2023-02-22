import { IconButton } from '@mui/material';
import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';

export const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = (e) => {e.stopPropagation()}
  return (
    <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <IconButton
          onClick={closeModal}
          //className="modal-close"
          sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          variant="contained"
        >
          <CloseIcon />
        </IconButton>
        {children}
      </div>
    </article>
  );
}
