import { formatDate, formatTime } from './'

describe('Utilities', () => {
  const testDateTimeString = "2021-01-23T16:20:42"
  it('should display formatted date', () => {
    expect(formatDate(testDateTimeString)).toEqual("23 januari 2021")
  });
  
  it('should display formatted time', () => {
    expect(formatTime(testDateTimeString)).toEqual("16:20")
  })
})
