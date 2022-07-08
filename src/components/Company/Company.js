import React, { useEffect, useState } from "react"

import useToken from '../App/useToken';
import { history } from '../../helpers/history';

const GetCompanies = () => {
  const [companies, setCompanies] = useState([])
  const { token } = useToken();

  const fetchData = async () => {
    const url = 'http://localhost:4001/company';
    const opts = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(url, opts)
    const data = await response.json()
    if (data.statusCode === 401) {
      localStorage.removeItem('token');
      history.push('/login');
    }
    setCompanies(data)
  }

  useEffect(() => {
    console.log('user effect');
    fetchData()
  }, [])

  return (
    <div>
      {companies.length > 0 && (
        <ul>
          {companies.map(company => (
            <li key={company.uid}>{company.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GetCompanies
