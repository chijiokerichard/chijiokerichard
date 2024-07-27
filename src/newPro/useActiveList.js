
export function useActiveList(selected, setPage, pages,Li) {
    for (let i = 0; i < pages.length; i++) {
            if(selected === Li[i]){
            setPage(pages[i])
            console.log(selected)
        }

    }
}

