import '../../style/bodyNavigation/hamburger.sass';

export const Hamburger = ({ isClicked, click }) => {
  const hamburgerElement = {
    first: 'hamburger__element--rotated45',
    second: 'hamburger__element--hidden',
    third: 'hamburger__element--rotated-45'
  };

  const checkElement = (el) => {
    const clickCheck = isClicked ? hamburgerElement[el] : '';
    return `hamburger__element ${clickCheck}`;
  };

  return (
    <button onClick={() => click((prev) => !prev)} className="hamburger">
      <span className={checkElement('first')}></span>
      <span className={checkElement('second')}></span>
      <span className={checkElement('third')}></span>
    </button>
  );
};
