import { useNews } from "../../services/Berita";
import CustomLink from "../../components/CustomLink/CustomLink";

const FeaturedNews = ({ news, isLoading }) => {
  return (
    <div className="my-10">
        <h1 className="lg:text-5xl text-3xl font-bold text-center">Berita Islami</h1>
      <div className="grid-cols-6 grid gap-2 w-full p-10">
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          news.map((news, i) => (
            <div
              href={news.link}
              key={news.link}
              className={`flex col-span-6 group relative flex-col gap-2 rounded-xl overflow-hidden ${
                i > 1 ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              <img
                src={news.thumbnail}
                alt={news.title}
                className={`w-full object-cover group-hover:scale-105 transition ${
                  i > 1 ? "h-[250px]" : "h-[360px]"
                }`}
              />
              <div
                className="h-full w-full absolute text-white"
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 70%)",
                }}
              >
                <div className="absolute bottom-0 flex flex-col w-full gap-4 p-6">
                  <h2
                    className={`font-bold ${
                      i > 1 ? "text-lg leading-snug" : "text-2xl"
                    }`}
                  >
                    <CustomLink href={news.link}>{news.title}</CustomLink>
                  </h2>
                  <div className="flex flex-col gap-2">
                    <time className="text-sm" dateTime={news.pubDate}>
                      {new Date(news.pubDate).toLocaleString("id", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </time>
                    <img
                      alt={news.publisher.name}
                      src={news.publisher.image}
                      className="max-h-5 rounded h-full w-max px-2 py-1 object-contain bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const Berita = () => {
  const newsQuery = useNews();

  return (
    <div className="w-full flex flex-col items-center pb-28">
      {newsQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <FeaturedNews
            isLoading={newsQuery.isLoading}
            news={newsQuery.data.slice(0, 5)}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newsQuery.data.slice(5).map((post) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
                style={{ maxWidth: "300px" }}
              >
                <div className="relative h-60 sm:h-48 overflow-hidden">
                  <img
                    loading="lazy"
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 flex items-center bg-white p-1">
                    <img
                      src={post.publisher.image}
                      alt={post.publisher.description}
                      className="h-6 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium">
                      {post.publisher.name}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="font-semibold text-lg mb-2 leading-tight line-clamp-2">
                    {post.title}
                  </h1>
                  <div className="flex justify-between items-center">
                    <time className="text-sm">
                      {new Date(post.pubDate).toLocaleString("id", {
                        timeStyle: "short",
                        dateStyle: "medium",
                      })}
                    </time>
                    <span className="text-yellow-500 hover:underline">
                      Read more
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Berita;
