import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient()

async function main() {
    // const findMovies = await prisma.movie.findMany()
    // console.log(findMovies)

    const queryResult = await prisma.movie.findMany({
        // where:{
        //     genre:"Action",
        //     name:"The Dark Knight"
        // }



        // where:{
        //     AND:[
        //         {
        //             genre:"Drama",
        //         },
        //         {
        //               name:"The Shawshank Redemption"
        //         }

        //     ]
        // }

        // where:{
        //     rating:{
        //         lt:"2"
                
        //     }
        // }

        // ..............................

            //  skip: 55,
            //  take: 4,
    //    

    // ......................................

    // where:{
    //     review:{some:{}}
    // }

    
    })
    console.log("query data sucessfull : ",queryResult)
}
main()