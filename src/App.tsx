import { useEffect } from "react"
import { client } from "./lib/apollo"
import {gql} from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }

function App() {
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY
      }).then(response => {
        console.log(response.data)
      })
  }, [])



  return (
   <h1 className="text-5xl font-bold text-pink-500">Hello word</h1>
  )
}

export default App
