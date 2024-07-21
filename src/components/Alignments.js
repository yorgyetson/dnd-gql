import React from "react"
import { useAlignmentsQuery } from "../generated/graphql.tsx"

const Alignments = () => {
  const { data, loading, error } = useAlignmentsQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Alignments</h1>
      <ul>
        {data?.alignments.map((alignment) => (
          <li key={alignment.name}>
            <h2>{alignment.name}</h2>
            <p>{alignment.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Alignments
