type queryType = {
    message: string
    page: number
}

export function getData(query: queryType){
    return {
        image: "blablabla",
        id: 12,
        message: query.message,
        page: query.page,
    }
}