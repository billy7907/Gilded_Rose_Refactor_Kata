import {decreaseSellInByOne, increaseQualityBy} from '../utils'

export const agedBrie = (item: {name: string, sellIn: number, quality: number}) => {
    // increase quality by 1;
    // decrease SellIn by 1;
    decreaseSellInByOne(item)
    increaseQualityBy(item, 1)
}