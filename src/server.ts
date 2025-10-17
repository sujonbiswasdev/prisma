import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient()

async function main() {
    // const CreateDb = await prisma.user.create({
    //     data:{
    //         name:"sujon",
    //         email:"sujon0@gmail.com",
    //         password:"1234"
    //     }
    // })
    // console.log(CreateDb)

    const createMovie = await prisma.movie.createMany({
        data: [
            {
                name: "Inception",
                releaseDate: "2010-07-16",
                director: "Christopher Nolan",
                genre: "Science Fiction"
            },
            {
                name: "The Shawshank Redemption",
                releaseDate: "1994-09-23",
                director: "Frank Darabont",
                genre: "Drama"
            },
            {
                name: "Interstellar",
                releaseDate: "2014-11-07",
                director: "Christopher Nolan",
                genre: "Adventure"
            },
            {
                name: "Parasite",
                releaseDate: "2019-05-30",
                director: "Bong Joon-ho",
                genre: "Thriller"
            },
            {
                name: "The Dark Knight",
                releaseDate: "2008-07-18",
                director: "Christopher Nolan",
                genre: "Action"
            },
            {
                name: "Titanic",
                releaseDate: "1997-12-19",
                director: "James Cameron",
                genre: "Romance"
            },
            {
                name: "Avengers: Endgame",
                releaseDate: "2019-04-26",
                director: "Anthony and Joe Russo",
                genre: "Superhero"
            },
            {
                name: "Joker",
                releaseDate: "2019-10-04",
                director: "Todd Phillips",
                genre: "Crime"
            },
            {
                name: "Gladiator",
                releaseDate: "2000-05-05",
                director: "Ridley Scott",
                genre: "Historical Drama"
            },
            {
                name: "The Godfather",
                releaseDate: "1972-03-24",
                director: "Francis Ford Coppola",
                genre: "Crime"
            }
        ]

    })
    console.log(createMovie)

}

main()