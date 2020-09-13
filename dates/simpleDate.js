import {format} from 'date-fns'

/**
 * 
 * @param {Date} dateString: an ISO format timestamp
 * @returns {string} a human-readable simple date
 */
export default function simpleDate(dateString) {
  return format(dateString, 'MM/dd/yyyy')
}