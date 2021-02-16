import {decreaseSellInByOne, increaseQualityBy, sellByDayValueIsOver, changeQualitytoZero} from '../utils'

export const backstagePasses = (item: {name: string, sellIn: number, quality: number}) => {

    // decrease SellIn by 1;
    decreaseSellInByOne(item)
    if(sellByDayValueIsOver(item, 10)){
        // increase quality by 1 if Sellin > 10
        increaseQualityBy(item, 1)
    } else if (sellByDayValueIsOver(item, 5)){
        // increase quality by 2 if Sellin > 5
        increaseQualityBy(item, 2)
    } else if (sellByDayValueIsOver(item, 0)){
        // increase quality by 3 if Sellin > 0
        increaseQualityBy(item, 3)
    } else {
        changeQualitytoZero(item)
    }

}
