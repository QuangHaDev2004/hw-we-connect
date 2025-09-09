type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <>
      <dialog open={isOpen} className="modal">
        <div className="modal-box bg-white rounded-md lg:max-w-[900px]">{children}</div>
        <form method="dialog" className="modal-backdrop" onClick={onClose}>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
