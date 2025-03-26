export type PopUpChild = (props: { close: () => void, isOpen: boolean }) => JSX.Element;

type Props = {
  children: PopUpChild;
  isOpen: boolean;
  close: () => void;
  PopUpChild: PopUpChild;
};

const PopUpWrapper = ({ isOpen, close, PopUpChild}: Props) => {
  return (
    <div className={`z-50 isolate fixed inset-0 p-4 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="p-8 max-w-lg w-full max-h-full overflow-y-scroll m-4 rounded-[2rem] bg-black">
        <PopUpChild {...{close, isOpen}} />
      </div>
      <div className="bg-black -z-10 opacity-50 absolute inset-0 flex items-center justify-center " onClick={close}></div>
    </div>
  );

}

export default PopUpWrapper;
