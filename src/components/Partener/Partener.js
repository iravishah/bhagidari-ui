import React, { useEffect, useState } from "react"
import useToken from '../App/useToken';

const GetParteners = () => {
    const [parteners, setParteners] = useState([])
    const { token } = useToken();

    const fetchData = async () => {
        const url = 'http://localhost:4001/partener';
        const opts = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, opts)
        const data = await response.json()
        setParteners(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {parteners.length > 0 && (
                <ul>
                    {parteners.map(partener => (
                        <li key={partener.uid}>{partener.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GetParteners