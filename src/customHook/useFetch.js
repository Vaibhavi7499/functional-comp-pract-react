import axios from "axios"
import React, { useEffect, useState } from "react"

const useFetch = (url) => {
const [empList, setEmpList] = useState([])

    function getEmpList() {
        axios.get(url)
        .then((res) => {    
            setEmpList(res.data)
        })
    }

        useEffect(() => {
            getEmpList();
        },[])

        return [empList]
}

export default useFetch