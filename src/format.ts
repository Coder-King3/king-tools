/**
 * * 格式化时间
 * @name formatTimer
 * @param { Date | number } cellValue
 * @param { string } foramtType
 * @return { string | object }
 */
export default function formatTimer(
  cellValue: Date | number,
  foramtType?: string
) {
  if (!cellValue) return {}
  /* 当前时间 */
  let date = new Date(cellValue)
  /* 年 */
  let year = date.getFullYear()
  /* 月 */
  let month =
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  /* 日 */
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  /* 时 */
  let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  /* 分 */
  let minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  /* 秒 */
  let seconds =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  /* 星期 */
  let Week: any
  switch (date.getDay()) {
    case 0:
      Week = '日'
      break
    case 1:
      Week = '一'
      break
    case 2:
      Week = '二'
      break
    case 3:
      Week = '三'
      break
    case 4:
      Week = '四'
      break
    case 5:
      Week = '五'
      break
    case 6:
      Week = '六'
      break
  }
  /* 星期 Num */
  let weekNum = date.getDay() == 0 ? 7 : date.getDay()

  let timer: { [key: string]: any } = {
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    Week,
    weekNum
  }

  // 返回格式化对象
  let dateTimer: string | typeof timer
  if (foramtType) {
    dateTimer = foramtType
    let formatArray = [
      { format: /yyyy/, key: 'year' },
      { format: /MM/, key: 'month' },
      { format: /dd/, key: 'day' },
      { format: /HH/, key: 'hours' },
      { format: /mm/, key: 'minutes' },
      { format: /ss/, key: 'seconds' },
      { format: /W/, key: 'Week' }
    ]
    formatArray.forEach((item: any) => {
      dateTimer = dateTimer.replace(item.format, timer[item.key])
    })
  } else {
    dateTimer = timer
  }

  return dateTimer
}
