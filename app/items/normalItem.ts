import {decreaseSellInByOne, decreaseQualityBy, isSellByDayValueLessThanZero} from '../utils'

export const normalItem = (item: {name: string, sellIn: number, quality: number}) => {

    // decrease SellIn by 1;
    // decrease quality by 1;
    decreaseSellInByOne(item)
    
    if(isSellByDayValueLessThanZero(item)){
        decreaseQualityBy(item, 2)
    } else {
        decreaseQualityBy(item, 1)
    }
}