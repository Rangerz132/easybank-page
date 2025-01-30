const Button = (props: {
  text: string;
  onButtonClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={props.onButtonClick}
      className={`py-3 px-8 capitalize text-white bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan rounded-full cursor-pointer ${props.className}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
