import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../utils/themeMode";

const navs = [
  {
    name: "Home",
    url: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        id="home"
        fill="currentColor"
      >
        <g transform="translate(2.5 2.004)">
          <path d="M7.92173917,18.2568881 L3.92173915,18.2568881 C2.62561934,18.2521579 1.57473912,17.2051555 1.5652174,15.909062 L1.5652174,7.95254022 C1.56776138,7.51865617 1.76191292,7.1080734 2.09565218,6.83080108 L2.80000001,6.30906195 C3.05714116,6.03509289 3.08328826,5.61704285 2.86228858,5.31316828 C2.6412889,5.00929372 2.23552029,4.90536419 1.89565218,5.06558368 L1.89565218,5.06558368 L1.17391305,5.60471412 C0.445875565,6.16803633 0.0138352771,7.0321169 -7.10542736e-15,7.95254022 L-7.10542736e-15,15.9177576 C0.0047821894,18.0816904 1.75780637,19.8347146 3.92173915,19.8394968 L7.92173917,19.8394968 C8.35396202,19.8394968 8.70434787,19.4891109 8.70434787,19.0568881 C8.70434787,18.6246652 8.35396202,18.2742794 7.92173917,18.2742794 L7.92173917,18.2568881 Z"></path>
          <path d="M18.7913044,7.93514891 C18.7821625,7.02148476 18.3641697,6.15997273 17.652174,5.58732281 L11.6434783,0.796018441 C10.3230761,-0.26533948 8.44214141,-0.26533948 7.12173917,0.796018441 L5.21739133,2.17862714 C4.85960686,2.43555961 4.77785016,2.93388616 5.03478263,3.29167063 C5.29171511,3.6494551 5.79004165,3.7312118 6.14782612,3.47427932 L8.07826091,2.03080106 C8.83595413,1.40700621 9.92926336,1.40700621 10.6869566,2.03080106 L16.6956523,6.82210543 C17.0414821,7.0962427 17.245809,7.51128176 17.252174,7.95254022 L17.252174,15.9177576 C17.252174,17.2144262 16.2010165,18.2655837 14.9043479,18.2655837 L13.1217392,18.2655837 C12.9392451,18.2655837 12.7913044,18.1176431 12.7913044,17.935149 L12.7913044,14.3438446 C12.7913144,13.1994401 11.8661337,12.270372 10.7217392,12.2655837 L8.11304352,12.2655837 C7.56185446,12.2655837 7.03324068,12.4845427 6.64349116,12.8742922 C6.25374164,13.2640418 6.03478264,13.7926555 6.03478264,14.3438446 L6.03478264,15.7177576 C6.03478264,16.1499805 6.38516849,16.5003663 6.81739134,16.5003663 C7.24961419,16.5003663 7.60000004,16.1499805 7.60000004,15.7177576 L7.60000004,14.3438446 C7.59766759,14.208583 7.64977261,14.0780549 7.74461016,13.9815822 C7.83944772,13.8851095 7.96906617,13.830781 8.10434787,13.8308011 L10.7130435,13.8308011 C10.9915871,13.8308011 11.2173914,14.0566053 11.2173914,14.3351489 L11.2173914,14.3351489 L11.2173914,17.935149 C11.2221784,18.9834938 12.0733835,19.8308011 13.1217392,19.8308011 L14.8608696,19.8308011 C17.0267864,19.8308011 18.7826088,18.0749787 18.7826088,15.909062 L18.7913044,7.93514891 Z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Qur'an",
    url: "/quran",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    name: "Sholat",
    url: "/Sholat",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Berita",
    url: "/berita",
    icon: (
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"
        />
      </svg>
    ),
  },
];

function BottomNavigation() {
  const location = useLocation();
  const { darkMode } = useTheme();
  const [active, setActive] = React.useState(null);
  const firstPath = location.pathname.split("/")[1];

  React.useEffect(() => {
    setActive(navs.find(({ url }) => url === `/${firstPath}`)?.url);
  }, [firstPath]);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 ${
        darkMode
          ? "bg-gradient-to-t from-gray-900 to-gray-800 text-white"
          : "bg-white text-black"
      } flex justify-between shadow-lg transition-all duration-500`}
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 8px -4px rgba(0, 0, 0, 0.05)",
      }}
    >
      {navs.map(({ name, icon, url }, i) => (
        <Link
          to={url}
          key={i}
          className="flex flex-col items-center justify-center py-4 w-full text-center hover:text-yellow-500"
          style={{
            boxShadow:
              url === active && darkMode ? "0 4px 10px rgba(0,0,0,0.5)" : "",
          }}
        >
          <div className="relative">
            {React.cloneElement(icon, {
              className:
                url === active
                  ? "h-5 w-5 mx-auto text-yellow-500"
                  : "h-5 w-5 mx-auto",
            })}
            {url === active && (
              <div className="absolute -bottom-1 w-full h-0.5 bg-yellow-500 rounded-t-lg animate-bounce" />
            )}
          </div>
          <span
            className={`text-xs mt-1 ${
              url === active ? "text-yellow-500" : ""
            }`}
          >
            {name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default BottomNavigation;
