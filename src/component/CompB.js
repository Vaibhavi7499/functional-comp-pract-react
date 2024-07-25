import React from "react";
import { API_URL } from "../API";
import useFetch from "../customHook/useFetch";
const CompB = () => {
    const [empList] = useFetch(API_URL)

    return (
        <>
        <h1>CompB</h1>
        <ul>

            {
                empList.map((e) => (
                    <h1>{e?.empName}</h1>
                ))
            }
            </ul>
        </>
    )
}

export default CompB;