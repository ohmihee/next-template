import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../libs/prisma';
import nc from 'next-connect';

// next api에서 바디값을 받기위해서는 아래의 코드를 반드시 추가해주어야 한다.
export const config = {
    api: {
        bodyParser: false,
    }
}


const handle = nc({
    onError: (err:Error, req:NextApiRequest, res: NextApiResponse, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
    },
})
    .get(async(req: NextApiRequest, res: NextApiResponse) => {
        try {
            // const { page } = req.query as { page: string };
            // const numberPage = Number(page || 1);
            // const pageCount = await prisma.candidate.count();

            // const candidates = await prisma.candidate.findMany({
            //     skip: (numberPage -1 ) * DEFAULT_LIMIT,
            //     take: DEFAULT_LIMIT,
            //     include: {
            //         photos: {
            //             where:{
            //                 isMain: true
            //             }
            //         }
            //     }
            // });
            // const pageResult = pagination(pageCount, numberPage)
            // const { totalPage, pagesCount, existNextPage, pages } = pageResult;
            // const result = {
            //     candidates,
            //     pagination: {
            //         totalCandidate: pageCount,
            //         totalPage,
            //         pagesCount,
            //         currentPage: numberPage,
            //         perPage: DEFAULT_LIMIT,
            //         existNextPage : ((pagesCount === existNextPage ) || ( totalPage === 0 ) ) ? false : true,
            //         pageArr: pages
            //     }
            // }
            const result = { id:'1', email:'1'}
            res.status(200).json(result)

        }catch(e:any) {
            throw new Error(e)
        } 
    })
    .post (async (req: NextApiRequest, res: NextApiResponse) => {
        try {

        }catch(e) {

        }
    })

export default handle