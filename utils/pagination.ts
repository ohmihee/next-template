export const DEFAULT_LIMIT = 10;

const pageArr = (existNextPage: number, totalPage: number) => {
    const pages: number[] = []
    const currPage = (existNextPage-1) * 10
    let j = currPage
    for (let i = 1; (i < 11 && j < totalPage); i++) {
        pages.push(currPage+i);
        j++
    }
    return pages
}

export const pagination = (pageCount: number, numberPage: number) => {
        const totalPage = Math.ceil(pageCount/DEFAULT_LIMIT)
        const existNextPage = Math.ceil(numberPage/DEFAULT_LIMIT);
        const pagesCount = Math.ceil(totalPage/DEFAULT_LIMIT);
        const pages = pageArr(existNextPage, totalPage);
        return { pageCount, numberPage, totalPage, existNextPage, pagesCount, pages
    }
}