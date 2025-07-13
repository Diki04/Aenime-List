import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recomendedAnime = reproduce(recomendedAnime, 10)
  
  // const generateNumberMin = () => {
  //   let firstNum = Math.floor(Math.random() * recomendedAnime.length - 8)
  //   let secNum = firstNum + 8
  //   const arrRandomNum = []
  //   arrRandomNum.push(firstNum, secNum)
  //   return arrRandomNum
  // }

  // const randomArr = generateNumberMin()
  // recomendedAnime = {data: recomendedAnime.slice(randomArr[0], randomArr[1])}


  return (
    <>
    
      <section>
        <Header title="Paling populer" linktitle="Lihat Semua" linkhref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi"  />
        <AnimeList api={recomendedAnime} />
      </section>

    </>
  );
}

export default Page