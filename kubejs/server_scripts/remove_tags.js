ServerEvents.tags('item', event => {

    event.add('embers:aspectus','kubejs:aspectus_amethyst')
    event.add('embers:aspectus/amethyst','kubejs:aspectus_amethyst')

    let ne_nujno = ['embers:iron_plate',
                    'embers:copper_plate',
                    'embers:lead_plate',
                    'embers:silver_plate',
                    'embers:lead_ingot',
                    'embers:silver_ingot',
                    'embers:raw_lead',
                    'embers:raw_silver',
                    'embers:copper_nugget',
                    'embers:lead_nugget',
                    'embers:lead_block',
                    'embers:raw_lead_block',
                    'embers:lead_ore',
                    'embers:deepslate_lead_ore',
                    'embers:silver_ore',
                    'embers:deepslate_silver_ore',
                    'embers:raw_silver_block',
                    'embers:silver_block',
                    'embers:steam',
                    'create:iron_sheet',
                    'create:brass_sheet',
                    'create:copper_sheet',
                    'create:golden_sheet',
                    'create:copper_nugget',
                    'create:zinc_nugget',
                    'create:brass_nugget']


    ne_nujno.forEach(ne_nujno =>{
        event.removeAllTagsFrom(ne_nujno)
    
    })


})





    // event.add('embers:aspectus','minecraft:diamond_shovel')



