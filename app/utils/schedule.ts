export const WEEK_LIMIT = 21

export function getScheduleTimeSlot(raw) {
  if (typeof raw === "number") {
    raw = String(raw)
  }
  switch (raw) {
    case "1":
      return ["08:30", "09:15"]
    case "2":
      return ["09:20", "10:05"]
    case "3":
      return ["10:25", "11:10"]
    case "4":
      return ["11:15", "12:00"]
    case "5":
      return ["13:30", "14:15"]
    case "6":
      return ["14:20", "15:05"]
    case "7":
      return ["15:25", "16:10"]
    case "8":
      return ["16:15", "17:00"]
    case "9":
      return ["18:30", "19:15"]
    case "10":
      return ["19:20", "20:05"]
    case "11":
      return ["20:10", "20:55"]
    case "12":
      return ["21:00", "21:45"]
  }
  return ["Indefinite Time", "Indefinite Time"]
}

// Transform standard arrangement objects into strings like "13:30-15:05"
export function getScheduledTimeFromArrangement(arrangement) {
  return `${getScheduleTimeSlot(arrangement.start)[0]} - ${getScheduleTimeSlot(arrangement.end)[1]}`
}

export const getWeek = (timestamp, semesterStart) => {
  return Math.floor((timestamp - semesterStart) / (1000 * 60 * 60 * 24 * 7)) + 1
}

export const mapTimeSlotToFlatIndex = timeSlot => {
  if (timeSlot <= 2) return 0
  if (timeSlot <= 4) return 1
  if (timeSlot <= 6) return 2
  if (timeSlot <= 8) return 3
  else return 4
}

export const getFullSchedule = (data, daysEachWeek) => {
  let weeks = []
  for (let week = 1; week <= WEEK_LIMIT; week++) {
    let days = []
    let matrix = []
    for (let day = 1; day < daysEachWeek + 1; day++) {
      let termStart = Number(data.term_start) * 1000
      let thisDay = termStart + ((week - 1) * 7 + (day - 1)) * 86400000
      let courses = getCoursesByDay(thisDay, data)
      days.push({
        day: day,
        timestamp: thisDay,
        courses: courses,
      })

      let column = [0, 0, 0, 0, 0]
      courses.forEach(course => {
        let start = Number(course.activeArrange.start)
        let end = Number(course.activeArrange.end)
        for (let timeSlot = start; timeSlot <= end; timeSlot++) {
          column[mapTimeSlotToFlatIndex(timeSlot)] += 1
        }
      })
      matrix.push(column)
    }
    weeks.push({
      week,
      days,
      matrix,
    })
  }
  return weeks
}

export const getCoursesByDay = (timestamp, data) => {
  let now = new Date(timestamp)
  let semesterStart = data.term_start * 1000
  let currentWeek = getWeek(timestamp, semesterStart)
  let res = []
  data.courses.forEach(course => {
    if (course.week.start <= currentWeek && currentWeek <= course.week.end) {
      course.arrange.forEach(arrangement => {
        let dayOfWeek = now.getDay()
        if (arrangement.day === "7") {
          arrangement.day = "0"
        }
        if (Number(arrangement.day) === dayOfWeek) {
          let arrangedThisWeek = true
          switch (arrangement.week) {
            case "单周":
              if (currentWeek % 2 === 0) {
                arrangedThisWeek = false
              }
              break
            case "双周":
              if (currentWeek % 2 === 1) {
                arrangedThisWeek = false
              }
              break
          }
          if (arrangedThisWeek) {
            // Finally
            res.push({
              ...course,
              activeArrange: arrangement,
            })
          }
        }
      })
    }
  })
  return res
}