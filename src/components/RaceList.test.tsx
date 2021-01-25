import { render } from '@testing-library/react';
import RaceList from './RaceList';

describe('RaceList', () => {
  const mockRaceInfo = {
    id: "1",
    races: [
      {
        id: "2",
        number: 2,
        name: "race test name",
        scheduledStartTime: "2021-01-23T16:20:42",
        starts: [
          {
            number: 1,
            driver: {
              firstName: "Testy",
              lastName: "McTestface"
            },
            horse: {
              name: "Polly",
              trainer: {
                firstName: "Testy",
              lastName: "McTestface"
              },
              pedigree: {
                father: {
                  name: "Polly Sr",
                }
              }
            }
          }
        ],
      }
    ],
    status: "test status",
  }
  it('renders correctly', () => {
    const { queryByTestId } = render(<RaceList betType="V75" raceInfo={mockRaceInfo}/>);
    expect(queryByTestId('raceWrapper')).toBeTruthy();
    expect(queryByTestId('date-and-time')).toBeTruthy();
  });
});

