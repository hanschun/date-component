import {parseISO, format} from 'date-fns'

/**
 * 
 * @param {Date} dateString: an ISO format timestamp
 * @returns {string} a human-readable simple date
 */
export default function simpleDate(dateString) {
  const date = parseISO(dateString)
  return format(date, 'MM/dd/yyyy')
}