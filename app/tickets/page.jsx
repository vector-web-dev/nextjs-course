import React from 'react'
import TicketsList from './TicketsList'
import Loading from '../loading'

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Curretly open tickets</small></p>
        </div>
      </nav>
      
      {/* <Suspense fallback={<Loading />}> */}
        <TicketsList />
      {/* </Suspense> */}
    </main>
  )
}
