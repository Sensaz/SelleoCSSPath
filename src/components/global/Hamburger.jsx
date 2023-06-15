import '../../style/hamburger.sass';

export const Hamburger = ({ isClicked, click }) => {
  return (
    <button onClick={() => click((prev) => !prev)} className="hamburger">
      <span
        className={`a hamburger__element ${
          isClicked ? 'hamburger__element--rotated45' : ''
        }`}></span>
      <span
        className={`hamburger__element ${isClicked ? 'hamburger__element--hidden' : ''}`}></span>
      <span
        className={`b hamburger__element ${
          isClicked ? 'hamburger__element--rotated-45' : ''
        }`}></span>
    </button>
  );
};
