import {parseISO, format} from 'date-fns'

/**
 * 
 * @param {Date} dateString: a JS date
 * @returns {string} a human-readable simple date and time
 */
export default function dateWithTime(dateString) {
  const date = parseISO(dateString)
  return format(date, 'h:mm a LLLL d, yyyy')
}