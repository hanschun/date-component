import {format} from 'date-fns'

/**
 * 
 * @param {Date} dateString: an ISO format timestamp
 * @returns {string} a human-readable simple date and time
 */
export default function dateWithTime(dateString) {
  format(date, 'h:mm a LLLL d, yyyy')
}