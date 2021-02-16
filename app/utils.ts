type Item = {name: string, sellIn: number, quality: number}


// global rule: 
// Quality cannot be more than 50 or less than 0;
const LOWEST_QUALITY_VALUE_POSSIBLE = 0;
const HIGHEST_QUALITY_VALUE_POSSIBLE = 50;

export const globalValues = {
    LOWEST_QUALITY_VALUE_POSSIBLE: LOWEST_QUALITY_VALUE_POSSIBLE,
    HIGHEST_QUALITY_VALUE_POSSIBLE: HIGHEST_QUALITY_VALUE_POSSIBLE
}

export const decreaseSellInByOne = (item: Item) => {
    return item.sellIn -= 1
}

export const decreaseQualityBy = (item: Item, number: number) => {
    return item.quality -= number
}

export const increaseQualityBy = (item: Item, number: number) => {
    return item.quality += number
}

export const changeQualitytoZero = (item: Item) => {
    return item.quality = 0
}

export const sellByDayValueIsOver = (item: Item, number: number) => {
    return item.sellIn > number;
}

export const isSellByDayValueLessThanZero = (item: Item) => {
    return item.sellIn < 0;
}

export const isItemQualityUnderLowestValue = (item: Item) => {
    return item.quality < LOWEST_QUALITY_VALUE_POSSIBLE
}

export const isItemQualityOverHighestValue = (item: Item) => {
    return item.quality > HIGHEST_QUALITY_VALUE_POSSIBLE
}
