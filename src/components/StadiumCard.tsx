import type { Stadium } from '../types/stadium'

interface StadiumCardProps {
  stadium: Stadium
}

export function StadiumCard({ stadium }: StadiumCardProps) {
  return (
    <article className="stadium-card">
      <p className="stadium-card__league">{stadium.league}</p>
      <h2>{stadium.name}</h2>
      <p className="stadium-card__club">{stadium.club}</p>

      <dl className="stadium-card__meta">
        <div>
          <dt>City</dt>
          <dd>{stadium.city}</dd>
        </div>
        <div>
          <dt>Capacity</dt>
          <dd>{stadium.capacity.toLocaleString()}</dd>
        </div>
        <div>
          <dt>Opened</dt>
          <dd>{stadium.opened}</dd>
        </div>
      </dl>

      <p className="stadium-card__highlight">{stadium.highlight}</p>
    </article>
  )
}
