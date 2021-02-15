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

            // global rule: 
            // Quality cannot be more than 50 or less than 0;
            const LOWEST_QUALITY_VALUE_POSSIBLE = 0;
            const HIGHEST_QUALITY_VALUE_POSSIBLE = 50;
            

            switch(true){
                case item.name === 'Aged Brie':
                    // decrease SellIn by 1;
                    // increase quality by 1;
                    item.sellIn -= 1
                    item.quality += 1

                break;
                case item.name === 'Backstage passes to a TAFKAL80ETC concert':
                    // decrease SellIn by 1;
                    item.sellIn -= 1
                    if(item.sellIn > 10){
                        // increase quality by 1 if Sellin > 10
                        item.quality += 1
                    } else if (item.sellIn > 5){
                        // increase quality by 2 if Sellin > 5
                        item.quality += 2
                    } else if (item.sellIn > 0){
                        // increase quality by 3 if Sellin > 0
                        item.quality += 3
                    } else {
                        item.quality = 0
                    }

                break;
                case item.name === 'Sulfuras, Hand of Ragnaros':
                    // do nothing
                break;

                default:
                    // normal item
                    // decrease SellIn by 1;
                    // decrease quality by 1;
                    item.sellIn -= 1
                    
                    if(item.sellIn < 0){
                        item.quality -= 2
                    } else {
                        item.quality -= 1
                    }

                break;
            }

            if(item.quality < LOWEST_QUALITY_VALUE_POSSIBLE){
                item.quality = LOWEST_QUALITY_VALUE_POSSIBLE;
            } else if (item.quality > HIGHEST_QUALITY_VALUE_POSSIBLE){
                item.quality = HIGHEST_QUALITY_VALUE_POSSIBLE;
            } 


        //     if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        //         if (item.quality > 0) {
        //             if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //                 item.quality = item.quality - 1
        //             }
        //         }
        //     } else {
        //         if (item.quality < 50) {
        //             item.quality = item.quality + 1
        //             if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (item.sellIn < 11) {
        //                     if (item.quality < 50) {
        //                         item.quality = item.quality + 1
        //                     }
        //                 }
        //                 if (item.sellIn < 6) {
        //                     if (item.quality < 50) {
        //                         item.quality = item.quality + 1
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //         item.sellIn = item.sellIn - 1;
        //     }
        //     if (item.sellIn < 0) {
        //         if (item.name != 'Aged Brie') {
        //             if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (item.quality > 0) {
        //                     if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //                         item.quality = item.quality - 1
        //                     }
        //                 }
        //             } else {
        //                 item.quality = item.quality - item.quality
        //             }
        //         } else {
        //             if (item.quality < 50) {
        //                 item.quality = item.quality + 1
        //             }
        //         }
        //     }
        }

        return this.items;
    }
}
