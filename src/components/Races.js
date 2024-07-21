import React from "react"
import { useRacesQuery } from "../generated/graphql.tsx"

const Races = () => {
  const { data, loading, error } = useRacesQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Races</h1>
      <ul>
        {data?.races.map((race) => (
          <li key={race.name}>
            <h2>{race.name}</h2>
            <p>Size: {race.size}</p>
            <p>Speed: {race.speed}</p>
            <p>
              Languages: {race.languages.map((lang) => lang.name).join(", ")}
            </p>
            {race.subraces.length > 0 && (
              <>
                <h3>Subraces:</h3>
                <ul>
                  {race.subraces.map((subrace) => (
                    <li key={subrace.name}>
                      <h4>{subrace.name}</h4>
                      <p>{subrace.desc}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Races
