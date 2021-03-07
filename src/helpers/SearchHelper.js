export const getRecentSearches = (searchList) => {
    const nonRepeatedList = searchList.filter((i,idx) => searchList[idx-1] !== i)
    return nonRepeatedList.slice((nonRepeatedList.length - 5), nonRepeatedList.length).reverse()
}