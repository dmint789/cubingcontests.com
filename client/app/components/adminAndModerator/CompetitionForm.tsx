'use client';

import './CompetitionForm.css';
import { useState } from 'react';
import myFetch from '~/helpers/myFetch';
import DatePicker from 'react-datepicker';
// import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
// import enGB from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
import { IEvent } from '@sh/interfaces';
import Form from '../form/Form';
import FormTextInput from '../form/FormTextInput';
import FormCountrySelect from '../form/FormCountrySelect';
import FormEventSelect from '../form/FormEventSelect';

// registerLocale('en-GB', enGB);
// setDefaultLocale('en-GB');

const CompetitionForm = ({ events }: { events: IEvent[] }) => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [competitionId, setCompetitionId] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [countryId, setCountryId] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [mainEventId, setMainEventId] = useState('333');

  const handleSubmit = async () => {
    const competition = {
      competitionId,
      name,
      city,
      countryId,
      startDate,
      endDate,
      description,
      mainEventId,
    };

    const { errors } = await myFetch.post('/competitions', competition);

    if (errors) {
      setErrorMessages(errors);
    } else {
      window.location.href = '/admin';
    }
  };

  return (
    <Form buttonText="Create" errorMessages={errorMessages} handleSubmit={handleSubmit}>
      <FormTextInput name="Competition ID" value={competitionId} setValue={setCompetitionId} />
      <FormTextInput name="Competition Name" value={name} setValue={setName} />
      <div className="row">
        <div className="col">
          <FormTextInput name="City" value={city} setValue={setCity} />
        </div>
        <div className="col">
          <FormCountrySelect countryId={countryId} setCountryId={setCountryId} />
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col">
          <label htmlFor="start_date" className="form-label">
            Start Date
          </label>
          <DatePicker
            id="start_date"
            selected={startDate}
            // locale="en-GB"
            onChange={(date: Date) => setStartDate(date)}
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="end_date" className="form-label">
            End Date
          </label>
          <DatePicker
            id="end_date"
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description (optional)
        </label>
        <textarea
          id="description"
          rows={5}
          onChange={(e: any) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <FormEventSelect events={events} label="Main Event" eventId={mainEventId} setEventId={setMainEventId} />
    </Form>
  );
};

export default CompetitionForm;
