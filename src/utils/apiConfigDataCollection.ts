import axios from 'axios'
import { dataCollectionApiUrl } from '@/constants'

// Insert your token here for testing purposes
const testToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyJ9.eyJhdWQiOiIwMjllMTU3OS03YmM4LTRjNWUtYjEzMC02OTBkYTM1MDhjMTIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vYTQzYmUyODgtODkxMy00NzVkLTk3ZGUtNWI5OWIzZGNjMTcyL3YyLjAiLCJpYXQiOjE3Mjg1NzA4MTAsIm5iZiI6MTcyODU3MDgxMCwiZXhwIjoxNzI4NTc1NzA3LCJhaW8iOiJBV1FBbS84WUFBQUFxbHlsOTNTenU1QkxDQW56a0srUXplb2N5cUpQTURDUCtkaHdDWER1RlArNC96VmliOFpSS2pxelV4RU5jV09ENzgvZXBwSXBkczVKSkJHWWxtZFovU1JURHhOaUcwbGhzOFdVSVZ5eElhNW81WldYYkQ2RkFBTGs5YjkyK0NiZyIsImF6cCI6IjBiNTljNTQ2LTJhY2UtNDJjYi05NTRhLWE4NGM5N2QyMmU4ZSIsImF6cGFjciI6IjAiLCJlbWFpbCI6IlNHdm96ZGVub3ZpY0B0ZWFtcGJzLmNvbSIsImZhbWlseV9uYW1lIjoiR3ZvemRlbm92aWMiLCJnaXZlbl9uYW1lIjoiU2FzYSIsIm5hbWUiOiJTYXNhIEd2b3pkZW5vdmljIiwib2lkIjoiMjllOGNkM2QtZDQ2MS00NzU5LTg0MWMtNjU5ODVjZTdiODhiIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2d2b3pkZW5vdmljQHRlYW1wYnMuY29tIiwicmgiOiIwLkFSc0FpT0k3cEJPSlhVZVgzbHVaczl6QmNua1ZuZ0xJZTE1TXNUQnBEYU5RakJMWUFLay4iLCJzY3AiOiJhY2Nlc3NfYXNfdXNlciIsInN1YiI6IkYxNnJuOGFCZjI1UlNoQWp2cHE1bnpvNXZGN1kxay1hRjZ6NEQxVnpsb0UiLCJ0aWQiOiJhNDNiZTI4OC04OTEzLTQ3NWQtOTdkZS01Yjk5YjNkY2MxNzIiLCJ1dGkiOiJjRDFlN2FkX2JVRzhDQkJKWmJWYkFBIiwidmVyIjoiMi4wIn0.AofLoXoHsUqs8rwsaLZo0bbEEVlV7YaQTxHRxb-Py3_cwkjzlBvf7S0x5jSrwiCa_chJ7YOaRrh-_XX4iXqOGF7n6c_S3jzbW2piXkFjrZ2NjNYjzBgJ1d54kVx-KZGyQ5dnJM9J5U-RyK-XGDHHS83tm6aVM7oRYNdX0OfuqmoNKIDdgXKG_LZBscmg4F6e44Fa1isgW1ffdi0m2Fkgx65qtIv1kiQX9-gz7GPrE2E5eXezgCeaOLnJZbxAaU4tPf7kv6SYT3H-_fNW9e1366rnU4K_W-l3f2ayiv8FBT-JAdsa860uy90UDYHh-953gRIQ86Q8i1uI4i7AmeKgzg'

// DataCollection APIs
export const apiRequestDataCollection = axios.create({
  baseURL: dataCollectionApiUrl,
  timeout: 120000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
  // withCredentials: true
})

apiRequestDataCollection.interceptors.request.use(
  function (config) {
    // Directly insert the test token for testing
    config.headers.Authorization = `Bearer ${testToken}`
    return Promise.resolve(config)
  },
  function (error) {
    return Promise.reject(error)
  }
)

apiRequestDataCollection.interceptors.response.use(
  (response) => {
    if (response.status === 400) {
      // Clear local storage, redirect back to login
      localStorage.clear()
      window.location.href = '/logout'
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
