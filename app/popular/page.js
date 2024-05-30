"use client"

import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";

export default function popular() {
 
    const popularGames = useGetDataByCategory(endpoints.games , "popular")
    return (
        <main className={"main-inner"}>
            {popularGames ? <CardsListSection id='popular' title="Популярное" data={popularGames}/> : <Preloader/>}
        </main>
    )
}