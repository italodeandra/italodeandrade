import { useEffect, useRef, useState } from 'react'

const { setInterval, clearInterval } = window

export interface TimeAgoOptions {
    prefix?: string
    suffix?: string
    isMinified?: boolean
    isHence?: boolean
    infoCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    now?: Date | null
}

const SECOND = 1
const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const MONTH = DAY * 30
const YEAR = MONTH * 12

const useTimeAgo = (date: Date, options?: TimeAgoOptions) => {
    let { prefix, suffix, isMinified, isHence, infoCount, now } = options || {}
    prefix = prefix || ''
    suffix = suffix || ''
    infoCount = infoCount || 2
    now = now || new Date()

    let [ timeAgo, setTimeAgo ] = useState<string>()
    let timerRef = useRef<number>()

    useEffect(() => {
        calcTimeAgo()
        clearInterval(timerRef.current)
        timerRef.current = setInterval(calcTimeAgo, 1000)
        return () => {
            clearInterval(timerRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function calcTimeAgo() {
        let nowTime = now!.getTime()
        let dateTime = date.getTime()

        let seconds: number
        if (isHence) {
            seconds = (dateTime - nowTime) / 1000
        } else {
            seconds = (nowTime - dateTime) / 1000
        }

        let yearsAgo = Math.floor(seconds / YEAR)
        seconds = seconds - (yearsAgo * YEAR)
        let monthsAgo = Math.floor(seconds / MONTH)
        seconds = seconds - (monthsAgo * MONTH)
        let weeksAgo = Math.floor(seconds / WEEK)
        seconds = seconds - (weeksAgo * WEEK)
        let daysAgo = Math.floor(seconds / DAY)
        seconds = seconds - (daysAgo * DAY)
        let hoursAgo = Math.floor(seconds / HOUR)
        seconds = seconds - (hoursAgo * HOUR)
        let minutesAgo = Math.floor(seconds / MINUTE)
        seconds = seconds - (minutesAgo * MINUTE)
        let secondsAgo = Math.floor(seconds / SECOND)

        let timeAgoList = []

        if (yearsAgo > 0) {
            let label = isMinified ? ' yr' : (' year' + (yearsAgo > 1 ? 's' : ''))
            timeAgoList.push(`${yearsAgo}${label}`)
        }
        if (timeAgoList.length < infoCount! && monthsAgo > 0) {
            let label = isMinified ? ' mo' : (' month' + (monthsAgo > 1 ? 's' : ''))
            timeAgoList.push(`${monthsAgo}${label}`)
        }
        if (timeAgoList.length < infoCount! && weeksAgo > 0) {
            let label = isMinified ? ' we' : (' week' + (weeksAgo > 1 ? 's' : ''))
            timeAgoList.push(`${weeksAgo}${label}`)
        }
        if (timeAgoList.length < infoCount! && daysAgo > 0) {
            let label = isMinified ? ' d' : (' day' + (daysAgo > 1 ? 's' : ''))
            timeAgoList.push(`${daysAgo}${label}`)
        }
        if (timeAgoList.length < infoCount! && hoursAgo > 0) {
            let label = isMinified ? ' hr' : (' hour' + (hoursAgo > 1 ? 's' : ''))
            timeAgoList.push(`${hoursAgo}${label}`)
        }
        if (timeAgoList.length < infoCount! && minutesAgo > 0) {
            let label = isMinified ? ' min' : (' minute' + (minutesAgo > 1 ? 's' : ''))
            timeAgoList.push(`${minutesAgo}${label}`)
        }
        if (timeAgoList.length < infoCount! && secondsAgo > 0) {
            let label = isMinified ? ' sec' : (' second' + (secondsAgo > 1 ? 's' : ''))
            timeAgoList.push(`${secondsAgo}${label}`)
        }

        setTimeAgo(prefix + timeAgoList.join(' ') + suffix)
    }

    return [ timeAgo ]
}

export default useTimeAgo
