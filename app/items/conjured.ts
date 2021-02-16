import {decreaseSellInByOne, decreaseQualityBy, isSellByDayValueLessThanZero} from '../utils'

export const conjured = (item: {name: string, sellIn: number, quality: number}) => {

    // decrease SellIn by 1;
    decreaseSellInByOne(item)
    
    if(isSellByDayValueLessThanZero(item)){
        // decrease quality by 4 (twice as fast as normal items);
        decreaseQualityBy(item, 4)
    } else {
        // decrease quality by 2 (twice as fast as normal items);
        decreaseQualityBy(item, 2)
    }
    return;
}