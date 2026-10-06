// Lấy khoảng thời gian tương đối giữa hai ngày
export function getRelativeTime(startDate: Date, endDate = new Date()) {
  const diffSeconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000)
  if (diffSeconds < 0) {
    return null
  }
  const diffMinutes = Math.floor(diffSeconds / 60)
  if (diffMinutes < 10) {
    return 'Vừa xong'
  }
  if (diffMinutes < 60) {
    return `${diffMinutes} phút trước`
  }
  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) {
    return `${diffHours} giờ trước`
  }
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 10) {
    return `${diffDays} ngày trước`
  }
  return null
}

// Lấy ngày đã được định dạng: DD/MM/YYYY
export function getFormattedDate(date: Date) {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())

  return `${day}/${month}/${year}`
}

// Số phía trước đệm 0
function padZero(number: number, len = 2) {
  return number.toString().padStart(len, '0')
}

// Lấy ngày giờ đã được định dạng: HH:mm ngày DD/MM/YYYY
export function getFormattedDateTime(date: Date) {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  const hours = padZero(date.getHours())
  const minutes = padZero(date.getMinutes())

  return `${hours}:${minutes} ngày ${day}/${month}/${year}`
}

// Lấy số ngày chênh lệch giữa hai ngày
export function getDiffInDays(startDate: Date, endDate = new Date()) {
  return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 86400))
}

// Lấy ngày ngắn: DD/MM
export function getShortDate(date: Date) {
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())

  return `${day}/${month}`
}

// Lấy tổng số ngày trong năm
export function getDaysInYear(date: Date) {
  const year = date.getFullYear()
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366
  }
  return 365
}

// Lấy ngày đầu năm
export function getStartOfYear(date: Date) {
  const year = date.getFullYear()
  return new Date(year, 0, 1)
}

// Lấy ngày đầu ngày
export function getStartOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
