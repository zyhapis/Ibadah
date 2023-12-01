import IconPlay from "../../assets/icons/IconPlay";
import IconStop from "../../assets/icons/IconStop";
import { usePreference } from "../../context/Preference";
import ButtonIconMode from "./ButtoniconMode";
import ButtonIconPreference from "./ButtonIconPreference";

const ContentHeader = ({
  onClickPlay,
  isPlaying,
  surah,
  toggleModalPreference,
}) => {
  const {
    state: { isSimpleMode },
    toggleMode,
  } = usePreference();

  return (
    <div className="flex w-full justify-between items-center border-b pb-2 flex-col gap-1 sm:flex-row">
      <div className="flex gap-2 text-sm font-medium">
        <span>{surah.revelation}</span>&middot;
        <span>{surah.numberOfAyahs} Ayat</span>&middot;
        <span>Surat ke-{surah.number}</span>
      </div>
      <div className="flex items-center">
        <button
          onClick={onClickPlay}
          className={`group relative p-2 flex gap-2 text-sm font-medium items-center justify-center hover:bg-yellow-400 transition rounded-lg ${
            isPlaying ? " bg-yellow-500 text-primary" : ""
          }`}
        >
          <div className="hidden whitespace-nowrap absolute -top-9 py-1 px-2 transition-all rounded-md bg-black text-white group-hover:block after:h-2 after:w-2 after:-ml-[4px] after:absolute after:left-[50%] after:rotate-[-135deg] after:bg-black after:-bottom-1 after:rounded-t-[2px]">
            {isPlaying ? "Stop" : "Play"} Murottal
          </div>
          {isPlaying ? <IconStop /> : <IconPlay />}
        </button>
        <ButtonIconMode onClick={toggleMode} isSimpleMode={isSimpleMode} />
        <span className="h-[30px] w-[1px] bg-gray-200 mx-2"></span>
        <ButtonIconPreference onClick={toggleModalPreference} />
      </div>
    </div>
  );
};

export default ContentHeader;
