import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({params}) => {
const {keyword} = params

const decodeUri = decodeURI(keyword)
const searchAnime = await getAnimeResponse("anime", `q=${decodeUri}`)


  return (
    <>
    
      <section>
        <Header title={`Pencarian untuk ${decodeUri}...`}  />
        <AnimeList api={searchAnime} />
      </section>

    </>
  );
}

export default Page