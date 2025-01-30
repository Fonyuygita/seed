"use server";

export const fetchAnimeData=async()=>{
const response=await fetch("https://shikimori.one/api/animes");
const data=wait response.json();
console.log(data)
return data;
}