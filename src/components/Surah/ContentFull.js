import { Link } from "react-router-dom";
import { useBookmarkAyah } from "../../context/Bookmark";
import { usePreference } from "../../context/Preference";
import ButtonIconBookmark from "./ButtonIconBookmark";
import ButtonIconPlay from "./ButtonIconPlay";
import { omit, pick } from "../../lib/utility";
import { useTheme } from "../../utils/themeMode";

const Tafsir = ({ mufassirs, tafsir }) => {
  const { darkMode } = useTheme();

  const {
    state: { isShownTafsir, mufassir },
    setMufassir,
  } = usePreference();

  return (
    <div
      className={`w-full justify-center flex-col gap-4 mt-4 ${
        isShownTafsir ? "flex" : "hidden"
      }`}
    >
      <div className="self-center space-x-1 my-5 pt-5">
        {mufassirs.map((item) => (
          <button
            key={item.value}
            className={`px-3 py-1 lg:font-medium lg:text-lg text-sm hover:text-yellow-400 transition ${
              mufassir === item.value ? "border-b-2 border-b-yellow-500 text-yellow-500" : ""
            } ${darkMode ? "text-gray-500" : "text-gray-500"}`}
            onClick={() => setMufassir(item.value)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className={`w-full ${darkMode ? "text-white" : "text-gray-800"}`}>
        <p
          dangerouslySetInnerHTML={{ __html: tafsir }}
        />
      </div>
    </div>
  );
};

const ContentFull = ({
  surah,
  onPlayAyah,
  mufassirs,
  currentAudioIndex,
  isPlaying,
}) => {
  const { hasBookmarkedAyah, toggleBookmarkAyah } = useBookmarkAyah();
  const {
    state: { isShownTranslation, mufassir },
  } = usePreference();

  const isPlayingAyah = (idxAyah) => {
    return isPlaying && idxAyah === currentAudioIndex;
  };

  const { darkMode } = useTheme();

  return (
    <div className={`w-full grid gap-5 mx-auto`}>
      {surah.ayahs.map((ayah, idx) => (
        <div
          className={`border-b py-6 md:p-6 flex flex-col gap-4`}
          key={ayah.number.inSurah}
          id={ayah.number.inQuran}
          data-number-ayah-in-quran={ayah.number.inQuran}
        >
          <div className={`flex justify-between items-center gap-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
            <Link
              to={`/quran/${surah.number}/${ayah.number.inSurah}`}
              className="font-medium px-2 py-1 hover:bg-gray-100 rounded-md"
            >
              {ayah.number.inSurah}
            </Link>
            <div className="flex items-center">
              <ButtonIconBookmark
                onClick={() =>
                  toggleBookmarkAyah({
                    surah: omit(surah, [
                      "ayahs",
                      "bismillah",
                      "audio",
                      "description",
                    ]),
                    ...pick(ayah, ["number"]),
                  })
                }
                isBookmarked={hasBookmarkedAyah(ayah.number.inQuran)}
              />
              <ButtonIconPlay
                onClick={() => onPlayAyah(idx)}
                isPlaying={isPlayingAyah(idx)}
              />
            </div>
          </div>
          <div className={` ${darkMode ? "text-white" : "text-gray-800"}`}>
          <p
            className={`lg:text-4xl md:text-4xl text-3xl leading-loose font-bold pb-10`}
            dir="rtl"
            key={ayah.number.inSurah}
          >
            {ayah.arab}
          </p>
          {isShownTranslation && (
            <p>{ayah.translation}</p>
          )}
          <Tafsir
            mufassirs={mufassirs}
            tafsir={ayah.tafsir[mufassir].short ?? ayah.tafsir[mufassir]}
          />
        </div>
        </div>
      ))}
    </div>
  );
};

export default ContentFull;
