import { useEffect, useState } from "react";
import { usePrayerTimes, useProvinces } from "../../services/Prayer";
import {
  useGeolocation,
  useLocationGeolocation,
} from "../../context/Geolocation";
import JadwalSholatCard from "../../components/JadwalSholat/JadwalSholatCard";
import MasjidAnimation from "../../assets/lottie/Masjid/Masjid";
import { useRef } from "react";

const formatter = (date, options) => {
  return Intl.DateTimeFormat("id-ID", options).format(date);
};

const dateNow = new Date();
const dateNowStr = formatter(dateNow, { dateStyle: "full" });

// Asia/Jakarta / Asia/Makasar
const timeZoneIANA = Intl.DateTimeFormat().resolvedOptions().timeZone;

// GMT+7/GMT+8/GMT+9
const timeZoneGMT = new Intl.DateTimeFormat("en-us", {
  timeZoneName: "short",
})
  .formatToParts(dateNow)
  .find((part) => part.type === "timeZoneName").value;

const Clock = () => {
  const [clock, setClock] = useState("-- : -- : --");

  useEffect(() => {
    const myInterval = setInterval(() => {
      const clock = formatter(new Date(), {
        timeStyle: "medium",
      });
      setClock(clock.split(".").join(" : "));
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return <span className="font-semibold text-xl">{clock}</span>;
};

const MyLocation = () => {
  const { city, province, latitude, longitude } = useLocationGeolocation();
  return (
    <div className="flex w-full flex-col sm:flex-row gap-8  py-4 justify-between border-b items-center">
      <div className="flex flex-col">
        <span className="font-semibold">{dateNowStr}</span>
        <Clock />
        <span className="text-sm">
          {timeZoneIANA} ({timeZoneGMT})
        </span>
      </div>
      <div className="flex flex-col items-end">
        {!city && !province && !latitude && !longitude && (
          <span className="text-yellow-500 text-sm">
            Lokasi Anda tidak diketahui.
          </span>
        )}
        {city && province && (
          <span className="font-semibold">
            {city.name}, {province.name}
          </span>
        )}
        {latitude && longitude && (
          <span className="text-sm">
            {latitude}, {longitude}
          </span>
        )}
      </div>
    </div>
  );
};

// jakarta

const now = new Date();
const currentDate = now.getDate();

const PrayerTimeTable = ({ prayers }) => {
  const uniqueTimes = [];

  prayers.forEach((prayer) => {
    Object.keys(prayer.time).forEach((key) => {
      if (!uniqueTimes.some((time) => time.prayer === key)) {
        uniqueTimes.push({
          prayer: key,
          time: prayer.time[key],
        });
      }
    });
  });

  return (
    <div className="py-5 font-bold">
      {uniqueTimes.map((time, index) => (
        <JadwalSholatCard
          key={index}
          sholat={{
            name: "",
            time: [time],
            active: new Date(prayers[0].date).getDate() === currentDate,
          }}
        />
      ))}
    </div>
  );
};

const PrayerTable = ({
  latitude = -6.170088888888889,
  longitude = 106.83104999999999,
  setSelectedCityId,
  setSelectedProvinceId,
  selectedCityId,
  setCoordinate,
  selectedProvinceId,
}) => {
  const prayerTimesQuery = usePrayerTimes(latitude, longitude);

  useEffect(() => {
    if (prayerTimesQuery.data) {
      setSelectedProvinceId(prayerTimesQuery.data.provinceId);
      setSelectedCityId(prayerTimesQuery.data.id);
    }
  }, [prayerTimesQuery.data, setSelectedCityId, setSelectedProvinceId]);

  return prayerTimesQuery.isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={`flex items-center flex-col md:flex-row justify-between gap-4 text-yellow-500`}
      >
        <span>
          {prayerTimesQuery.data.name}, {prayerTimesQuery.data.province.name}
        </span>
        <Location
          setCoordinate={setCoordinate}
          selectedCityId={selectedCityId}
          setSelectedCityId={setSelectedCityId}
          selectedProvinceId={selectedProvinceId}
          setSelectedProvinceId={setSelectedProvinceId}
        />
      </div>
      <PrayerTimeTable prayers={prayerTimesQuery.data.prayers} />
    </div>
  );
};

const Location = ({
  selectedProvinceId,
  setSelectedProvinceId,
  selectedCityId,
  setSelectedCityId,
  setCoordinate,
}) => {
  const provincesQuery = useProvinces();
  return (
    <div className="flex gap-2 flex-col sm:flex-row ">
      {provincesQuery.isLoading ? (
        <p>loading..</p>
      ) : (
        <>
          <div className="flex gap-1">
            <select
              className="outline-none border px-3 py-2 rounded-md"
              onChange={(e) => {
                const city = provincesQuery.data.find(
                  (province) => province.id === e.target.value
                ).cities[0];
                setSelectedProvinceId(e.target.value);
                setSelectedCityId(city.id);
                setCoordinate(city.coordinate);
              }}
              value={selectedProvinceId}
            >
              {provincesQuery.data.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <select
              className="outline-none border px-3 py-2 rounded-md"
              onChange={(e) => {
                const city = provincesQuery.data
                  .find((province) => province.id === selectedProvinceId)
                  .cities.find((city) => city.id === e.target.value);
                setSelectedCityId(e.target.value);
                setCoordinate(city.coordinate);
              }}
              value={selectedCityId}
            >
              {provincesQuery.data
                .find((province) => province.id === selectedProvinceId)
                .cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

const PrayerTime = () => {
  const geolocation = useGeolocation();
  const [selectedProvinceId, setSelectedProvinceId] = useState(
    "623170da0c9712e86967f915"
  );
  const [selectedCityId, setSelectedCityId] = useState(
    "623174648c0926930463d08b"
  );
  const [coordinate, setCoordinate] = useState({
    latitude: undefined,
    longitude: undefined,
  });

  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
    }
  }, [animationContainer]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-center px-7 p-5 pb-14">
      <div className="lg:w-1/2 md:px-16">
        <h1 className="text-center lg:mt-40 text-4xl font-bold">
          Waktu Sholat
        </h1>
        <div className="flex justify-center items-center">
          <MasjidAnimation container={animationContainer} />
        </div>
        <div className="text-center">
          "ya Rasulullah, amalan apakah yang paling utama?" <br />
          "Shalat tepat pada waktunya" <br />
          HR.Bukhari
        </div>
      </div>
      <div className="lg:w-1/2 lg:mr-20 md:px-16">
        <MyLocation />
        {geolocation.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="mt-5">
            <PrayerTable
              setSelectedCityId={setSelectedCityId}
              setSelectedProvinceId={setSelectedProvinceId}
              latitude={coordinate.latitude || geolocation.state.latitude}
              longitude={coordinate.longitude || geolocation.state.longitude}
              selectedProvinceId={selectedProvinceId}
              selectedCityId={selectedCityId}
              setCoordinate={setCoordinate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerTime;
