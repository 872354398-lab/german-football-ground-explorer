import { useMemo, useState } from 'react'
import { FilterPanel } from './components/FilterPanel'
import { StadiumMap } from './components/StadiumMap'
import { stadiums } from './data/stadiums'
import type { League } from './types/stadium'

function App() {
  const [league, setLeague] = useState<League | 'All'>('All')
  const [minCapacity, setMinCapacity] = useState(0)

  const filteredStadiums = useMemo(
    () =>
      stadiums.filter(
        (stadium) =>
          (league === 'All' || stadium.league === league) &&
          stadium.capacity >= minCapacity,
      ),
    [league, minCapacity],
  )

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Groundhopping Germany</p>
        <h1>German Football Ground Explorer</h1>
        <p>
          Explore famous German football stadiums, filter by league and size,
          and discover where to go next.
        </p>
      </header>

      <FilterPanel
        league={league}
        minCapacity={minCapacity}
        onLeagueChange={setLeague}
        onCapacityChange={setMinCapacity}
      />

      <section className="results-bar">
        Showing <strong>{filteredStadiums.length}</strong> stadiums
      </section>

      <StadiumMap stadiums={filteredStadiums} />
    </main>
  )
}

export default App
