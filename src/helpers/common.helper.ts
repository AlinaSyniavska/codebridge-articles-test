const commonHelper = {
    getFormatDate: (date: Date): string => {
        const initDate = new Date(date);
        return initDate.toDateString().slice(4);
    },
    substringText(string: string, max: number): string {
        return string.length > max ?
           `${string.substring(0, max)}...` : string
    }
}

export {
    commonHelper
}

