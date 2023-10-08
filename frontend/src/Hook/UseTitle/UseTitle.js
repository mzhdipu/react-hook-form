import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} - Project Name`;
    }, [title])
};

export default UseTitle;