import IconHeart from "../../assets/icons/IconHeart";

const ButtonIconBookmark = ({ onClick, isBookmarked }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 hover:bg-yellow-400 transition rounded-lg`}
    >
      <IconHeart className="h-5 w-5" isFilled={isBookmarked} />
    </button>
  );
};

export default ButtonIconBookmark;
