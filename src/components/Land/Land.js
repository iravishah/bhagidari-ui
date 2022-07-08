import React, { useEffect, useState } from "react"
import useToken from '../App/useToken';

const GetLands = () => {
  const [lands, setLands] = useState([])
  const { token } = useToken();

  const fetchData = async () => {
    const url = 'http://localhost:4001/land';
    const opts = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(url, opts)
    const data = await response.json()
    setLands(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {lands.length > 0 && (
        <ul>
          {lands.map(land => (
            <li key={land.uid}>{land.village.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GetLands
