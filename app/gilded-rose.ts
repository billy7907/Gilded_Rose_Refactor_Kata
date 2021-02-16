import { agedBrie } from './items/agedBrie'
import { backstagePasses } from './items/backstagePasses'
import { sulfuras } from './items/sulfuras'
import { normalItem } from './items/normalItem'
import { conjured } from './items/conjured'
import { 
    isItemQualityUnderLowestValue, 
    isItemQualityOverHighestValue,
    globalValues,
} from './utils'

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        for (const item of this.items) {

            switch(true){
                case item.name === 'Aged Brie':
                    agedBrie(item)
                break;
                case item.name === 'Backstage passes to a TAFKAL80ETC concert':
                    backstagePasses(item);

                break;
                case item.name === 'Sulfuras, Hand of Ragnaros':
                    sulfuras(item)
                break;

                case item.name === 'Conjured': 
                    conjured(item)
                break;

                default:
                    normalItem(item)

                break;
            }

            if(isItemQualityUnderLowestValue(item)){
                item.quality = globalValues.LOWEST_QUALITY_VALUE_POSSIBLE;
            } else if (isItemQualityOverHighestValue(item)){
                item.quality = globalValues.HIGHEST_QUALITY_VALUE_POSSIBLE;
            } 
        }

        return this.items;
    }
}
