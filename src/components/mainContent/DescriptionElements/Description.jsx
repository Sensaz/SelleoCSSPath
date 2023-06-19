import '../../../style/description/description.sass';

export const Description = ({ title, children, btnText, theme, btnUnderDescription }) => {
  let titleTheme = 'description__title';
  let contentTheme = 'description__content';
  let buttonTheme = 'description__button';

  const checkBtnIndetion = btnUnderDescription ? 'description__button--indetion' : '';

  switch (theme) {
    case 'light':
      titleTheme = 'description__title description__title--light';
      contentTheme = 'description__content description__content--light';
      buttonTheme = 'description__button description__button--light';
      break;
    case 'fancy':
      titleTheme = 'description__title description__title--fancy';
      contentTheme = 'description__content description__content--fancy';
      buttonTheme = 'description__button description__button--fancy';
      break;
    default:
      titleTheme = 'description__title';
      contentTheme = 'description__content';
      buttonTheme = 'description__button';
      break;
  }

  return (
    <div className="description">
      <h2 className={titleTheme}>{title}</h2>
      <p className={contentTheme}>{children}</p>
      <button className={`${buttonTheme} ${checkBtnIndetion}`}>{btnText}</button>
    </div>
  );
};
