import {IArticle} from "../interfaces";

const commonHelper = {
    debounce: (fn: Function, ms = 500) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
    },
    getFormatDate: (date: Date): string => {
        const initDate = new Date(date);
        return initDate.toDateString().slice(4);
    },
    substringText(string: string, max: number): string {
        return string.length > max ?
            `${string.substring(0, max)}...` : string
    },
    sortPriorityItems: (arr: IArticle[], keywords: string): IArticle[] => {
        const first = [];
        const second = [];

        const arrKeywords = keywords.trim().split(' ');

        for (const item of arr) {
            if (arrKeywords.some((word: string) => item.title.includes(word))) {
                first.push(item);
            } else {
                second.push(item);
            }
        }

        arr = [...first, ...second];
        return arr;
    },
    makeUnionArticles: (first: IArticle[], second: IArticle[]): IArticle[] => {
        const result = [...first];

        for (const item of second) {
            if (first.every(elem => elem.id !== item.id)) {
                result.push(item);
            }
        }

        return result;
    },
    moveToPageTop: (): void => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

}

export {
    commonHelper
}

