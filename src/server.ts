import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient()

async function main() {
    // const CreateDb = await prisma.user.create({
    //     data:{
    //         name:"sujon",
    //         email:"sujon500@gmail.com",
    //         password:"1234",
    //         watchList:{
    //             connect:[{id:"889b81d1-cd65-40fa-a3f1-de648363a716"}]
    //         },
    //     },
    //     include:{
    //         watchList:true
    //     }
    // })
    // console.log(CreateDb)

    // const createMovie = await prissma.movie.createMany({
    //     data: [
    //         {
    //             name: "Inception",
    //             releaseDate: "2010-07-16",
    //             director: "Christopher Nolan",
    //             genre: "Science Fiction"
    //         },
    //         {
    //             name: "The Shawshank Redemption",
    //             releaseDate: "1994-09-23",
    //             director: "Frank Darabont",
    //             genre: "Drama"
    //         },
    //         {
    //             name: "Interstellar",
    //             releaseDate: "2014-11-07",
    //             director: "Christopher Nolan",
    //             genre: "Adventure"
    //         },
    //         {
    //             name: "Parasite",
    //             releaseDate: "2019-05-30",
    //             director: "Bong Joon-ho",
    //             genre: "Thriller"
    //         },
    //         {
    //             name: "The Dark Knight",
    //             releaseDate: "2008-07-18",
    //             director: "Christopher Nolan",
    //             genre: "Action"
    //         },
    //         {
    //             name: "Titanic",
    //             releaseDate: "1997-12-19",
    //             director: "James Cameron",
    //             genre: "Romance"
    //         },
    //         {
    //             name: "Avengers: Endgame",
    //             releaseDate: "2019-04-26",
    //             director: "Anthony and Joe Russo",
    //             genre: "Superhero"
    //         },
    //         {
    //             name: "Joker",
    //             releaseDate: "2019-10-04",
    //             director: "Todd Phillips",
    //             genre: "Crime"
    //         },
    //         {
    //             name: "Gladiator",
    //             releaseDate: "2000-05-05",
    //             director: "Ridley Scott",
    //             genre: "Historical Drama"
    //         },
    //         {
    //             name: "The Godfather",
    //             releaseDate: "1972-03-24",
    //             director: "Francis Ford Coppola",
    //             genre: "Crime"
    //         }
    //     ]

    // })
    // console.log(createMovie)



    const createUser = await prisma.review.create({
        data:{
            comment:"sujon",
            movieId:"1421fa0f-0a5e-458e-b5fa-c18f9912ec18",
            userId:"b97659c9-b3dd-4f61-bb01-88d4784728d5",
        },
    })
    console.log(createUser)


}

main()