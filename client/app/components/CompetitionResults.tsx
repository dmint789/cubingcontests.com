'use client';

import { useState } from 'react';
import EventResultsTable from '@c/EventResultsTable';
import EventButtons from '@c/EventButtons';
import { IContestData, IContestEvent } from '@sh/interfaces';

const CompetitionResults = ({
  contestData: { competition, persons, activeRecordTypes },
}: {
  contestData: IContestData;
}) => {
  const [selectedEvent, setSelectedEvent] = useState<IContestEvent>(competition.events[0]);

  const events = competition.events.map((el) => el.event);

  const selectEvent = (eventId: string) => {
    setSelectedEvent(competition.events.find((el) => el.event.eventId === eventId));
  };

  return (
    <>
      <EventButtons events={events} activeEvent={selectedEvent.event} onEventSelect={selectEvent} hideCategories />
      <EventResultsTable compEvent={selectedEvent} persons={persons} recordTypes={activeRecordTypes} />
    </>
  );
};

export default CompetitionResults;
