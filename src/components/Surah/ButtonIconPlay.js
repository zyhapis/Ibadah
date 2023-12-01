import IconPlay from "../../assets/icons/IconPlay";
import IconStop from "../../assets/icons/IconStop";

const ButtonIconPlay = ({ isPlaying, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative p-2 hover:bg-yellow-400 transition rounded-lg flex items-center justify-center ${
        isPlaying ? "text-yellow-500" : ""
      }`}
    >
      <span
        className={`${
          isPlaying ? "animate-ping" : "hidden"
        } absolute p-2 h-5 w-5 rounded-full bg-yellow-400 opacity-75`}
      ></span>
      {isPlaying ? (
        <IconStop className="h-5 w-5" />
      ) : (
        <IconPlay className="h-5 w-5" />
      )}
    </button>
  );
};

export default ButtonIconPlay;
