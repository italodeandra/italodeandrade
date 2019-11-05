export default function dateFormat(date: Date | string, options?: Intl.DateTimeFormatOptions, language?: string) {
    // Cheatsheet https://devhints.io/wip/intl-datetime

    date = new Date(date)
    options = options || {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }
    language = language || 'en'

    if (!date) {
        return date
    }

    return new Intl.DateTimeFormat(language, options).format(date)
}
