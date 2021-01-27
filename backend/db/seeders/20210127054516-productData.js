'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      { name: `Cotton one-piece w/ Gucci vintage logo`, brand: 'Gucci', description: `This long sleeve cotton one-piece for baby is defined by a playful take on an archival print reminiscent of those from the '80s–featuring the Gucci trademark, Interlocking G and Web stripe with stars. Snap buttons along the shoulder and inseam allow for easy dressing.`, retailPrice: 235, productImg: `https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1592212506/575155_XJCPU_9061_001_100_0000_Light-Baby-cotton-one-piece-with-Gucci-vintage-logo-print.jpg`, categoryId: 1 },

      { name: `Baby sleepsuit w/ Gucci logo`, brand: 'Gucci', description: `Light grey cotton jersey with Gucci vintage logo, inspired by the men's and women's ready-to-wear collections`, retailPrice: 250, productImg: `https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1506677408/497847_X3L91_1676_001_100_0000_Light-Baby-sleepsuit-with-Gucci-logo.jpg`, categoryId: 1 },

      { name: `Baby GG wool hat`, brand: 'Gucci', description: `The House's monogram evolves each season as a continuous nod to the roots of the House. Here, the GG motif appears in contrasting colors atop this children's wool hat.`, retailPrice: 225, productImg: `https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1606155309/651707_3K206_4278_001_100_0000_Light-Baby-GG-wool-hat.jpg`, categoryId: 2 },

      { name: `Baby Screener sneaker`, brand: 'Gucci', description: `Influenced by classic trainers from the '70s, the Screener sneakers—named for the defensive sports move—feature the Web stripe on the side and vintage Gucci logo, treated for an allover distressed effect.The shoe is presented for baby in a mini version of the adult style.`, retailPrice: 365, productImg: `https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1604508306/647030_2HK50_9660_001_100_0000_Light-Baby-Screener-sneaker.jpg`, categoryId: 2 },

      { name: `GG Supreme diaper bag`, brand: 'Gucci', description: `A diaper bag in black/grey GG Supreme canvas. First used in the 1970s, the GG logo was an evolution of the original Gucci rhombi design from the 1930s, and from then it's been an established symbol of Gucci's heritage. For Cruise 2018, the GG pattern has been brought back to the forefront in new combinations, paying homage to Gucci's roots. Complete with an adjustable Web shoulder strap and leather trims.`, retailPrice: 1690, productImg: `https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1501177508/495909_K5RLN_1095_002_079_0000_Light-GG-Supreme-diaper-bag.jpg`, categoryId: 2 },

      { name: `Baby tulle dress w/ GG garland`, brand: 'Gucci', description: `Crafted from delicate light pink tulle, this dress for baby is defined by an intricate GG and garland embroidery. The long sleeve design is completed with ruffles along the sleeve openings and skirt, and a button-back closure.`, retailPrice: 980, productImg: `https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1589887804/629149_ZAE02_5286_001_100_0000_Light-Baby-tulle-dress-with-GG-garland-embroidery.jpg`, categoryId: 1 },

      { name: `Baby jersey denim jacket`, brand: 'Gucci', description: `Made from soft blue cotton jersey denim, this jacket for baby is trimmed with the green and red Web stripe along the collar, hem and sleeve openings. The Gucci jacquard label, influenced by the men's and women's collections, accents the front.`, retailPrice: 430, productImg: `https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1592214303/547186_XJCR3_4206_001_100_0000_Light-Baby-jersey-denim-jacket.jpg`, categoryId: 1 },

      { name: `Vintage Check Polo Shirt`, brand: `Burberry`, description: `Vintage Check Polo Shirt in Beige`, retailPrice: 238, productImg: `https://cdn1.bambinifashion.com/img/p/3/5/8/0/4/8/358048--product.jpg`, categoryId: 1 },

      { name: `Logo Jacket in Light Grey`, brand: `Givenchy`, description: `Logo Jacket in Light Grey`, retailPrice: 333, productImg: `https://cdn1.bambinifashion.com/img/p/3/6/4/7/1/9/364719--product.jpg`, categoryId: 1 },

      { name: `Camouflage Monogram T-Shirt`, brand: `Givenchy`, description: `Camouflage Monogram T-Shirt in White`, retailPrice: 232, productImg: `https://cdn1.bambinifashion.com/img/p/3/3/2/9/9/1/332991--product.jpg`, categoryId: 1 },

      { name: `Logo Track Pants in Grey`, brand: `Givenchy`, description: `Logo Track Pants in Grey`, retailPrice: 272, productImg: `https://cdn1.bambinifashion.com/img/p/3/6/3/3/1/1/363311--product-gallery.jpg`, categoryId: 1 },

      { name: `Logo Velcro Straps Pre-Walkers`, brand: `Givenchy`, description: `Logo Velcro Straps Pre-Walkers in White`, retailPrice: 363, productImg: `https://cdn1.bambinifashion.com/img/p/3/6/3/6/9/0/363690--product.jpg`, categoryId: 2 },

      { name: `Ankle High FF Print Sneakers`, brand: `Fendi`, description: `Ankle High FF Print Sneakers in White`, retailPrice: 913, productImg: `https://cdn1.bambinifashion.com/img/p/3/5/8/7/9/2/358792--product.jpg`, categoryId: 2 },

      { name: `FF Print Heel Sneakers`, brand: `Fendi`, description: `FF Print Heel Sneakers in White`, retailPrice: 677, productImg: `https://cdn1.bambinifashion.com/img/p/1/5/6/0/2/6/156026--product.jpg`, categoryId: 2 },

      { name: `FF Fabric Sneakers`, brand: `Fendi`, description: `FF Fabric Sneakers`, retailPrice: 677, productImg: `https://cdn1.bambinifashion.com/img/p/1/5/2/0/7/7/152077--product.jpg`, categoryId: 2 },

      { name: `SNOO Smart Sleeper Bassinet`, brand: `Happiest Baby`, description: `SNOO is a responsive baby bassinet that boosts a baby’s sleep by combining gentle rocking with soothing white noise and snug, safe swaddling. Created by Dr. Harvey Karp (The 5 S’s, Happiest Baby on the Block), SNOO helps babies by imitating the calming sensations of the womb.`, retailPrice: 1395, productImg: `https://images.crateandbarrel.com/is/image/Crate/SnooSmartBassinetSHS19_1x1`, categoryId: 3 },

      {
        name: `mamaRoo4 infant seat`, brand: `4moms`, description: `The 4moms® mamaRoo®4 infant seat bounces up and down and sways from side to side, just like parents do when comforting their babies. It features five unique motions and five speed options for a total of 25 different combinations.

      Soothe your baby with one of the four built-in sounds, or connect any MP3 device. The mamaRoo4 baby swing offers full recline to allow baby to lie back and relax or sit up and play.

      The mamaRoo4 is available in three fabric options: the plush seat fabrics (multi and silver) are a softer, blanket-like material; the classic seat fabrics (grey and black) are a smooth, woven polyester material; and the cool mesh seat fabric (dark grey) has a smooth, breathable surface to maximize airflow to keep baby cool and comfortable. All seat fabrics are easily removed and machine washable.`, retailPrice: 219.99, productImg: `https://cdn.shopify.com/s/files/1/0261/2563/1560/products/mmR4_Grey_front_sml_900x900.png?v=1591247943`, categoryId: 3
      },

      { name: `Monitor Duo Smart Sock 3 + Cam`, brand: `Owlet`, description: `Monitor Duo Smart Sock 3 + Cam`, retailPrice: 399, productImg: `https://i5.walmartimages.com/asr/6cb7ff50-1b51-48b8-ab04-02a548ac04fa.ec4b57a2f462aece0a25ef382f70c48b.png?odnWidth=612&odnHeight=612&odnBg=ffffff`, categoryId: 3 },

      { name: `Gazelle S Stroller`, brand: `Cybex`, description: `Gazelle S Stroller`, retailPrice: 699.99, productImg: `https://b3h2.scene7.com/is/image/BedBathandBeyond/2020-09-17-09-38_520003559_1_imageset?$690$&wid=690&hei=690`, categoryId: 3 },

      { name: `Xari Single Stroller`, brand: `Mima`, description: `Xari Single Stroller Bundle`, retailPrice: 1499.99, productImg: `https://b3h2.scene7.com/is/image/BedBathandBeyond/2020-05-28-20-20_5060535941884_imageset?$690$&wid=690&hei=690`, categoryId: 3 },

      { name: `Vista V2 Stroller w/ Bassinet`, brand: `Uppababy`, description: `This convertible stroller system designed for easier maneuvering includes a bassinet and a toddler seat.`, retailPrice: 969.99, productImg: `969.99`, categoryId: 3 },

      { name: `Elvie Pump`, brand: `Elvie`, description: `Double Electric Breast Pump`, retailPrice: 499.99, productImg: `https://target.scene7.com/is/image/Target/GUEST_7f503ce0-c82d-4989-b05e-6d5661012039?fmt=webp&wid=1400&qlt=80`, categoryId: 3 },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
