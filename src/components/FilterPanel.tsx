import type { League } from '../types/stadium'

interface FilterPanelProps {
  league: League | 'All'
  minCapacity: number
  onLeagueChange: (league: League | 'All') => void
  onCapacityChange: (capacity: number) => void
}

export function FilterPanel({
  league,
  minCapacity,
  onLeagueChange,
  onCapacityChange,
}: FilterPanelProps) {
  return (
    <section className="filter-panel" aria-label="Stadium filters">
      <label>
        League
        <select
          value={league}
          onChange={(event) => onLeagueChange(event.target.value as League | 'All')}
        >
          <option value="All">All leagues</option>
          <option value="Bundesliga">Bundesliga</option>
          <option value="2. Bundesliga">2. Bundesliga</option>
          <option value="3. Liga">3. Liga</option>
        </select>
      </label>

      <label>
        Minimum capacity
        <select
          value={minCapacity}
          onChange={(event) => onCapacityChange(Number(event.target.value))}
        >
          <option value={0}>Any size</option>
          <option value={30000}>30,000+</option>
          <option value={50000}>50,000+</option>
          <option value={60000}>60,000+</option>
        </select>
      </label>
    </section>
  )
}
