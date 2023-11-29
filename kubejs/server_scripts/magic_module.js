PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('registered')) {
        event.entity.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.max_mana',-1000)
        event.entity.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.mana_regen',-1000)

      event.player.stages.add('registered')

      let chance = Math.floor(Math.random()*20) + 1

      if(chance >= 15){
        event.player.stages.add('mana_gift')
        if(event.player.stages.has('mana_gift')){
        let gift_chance =Math.floor(Math.random()*100) + 1

        if(gift_chance <= 60){
            event.entity.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.max_mana',Math.floor(Math.random()* 6 + 5)*10)
            event.entity.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.mana_regen',5)
        }
        if(gift_chance >60 & gift_chance < 98){
            event.entity.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.max_mana',Math.floor(Math.random()* 30 + 10)*10)
            event.entity.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.mana_regen',Math.floor(Math.random()* 6 + 2))
        }
        if(gift_chance >= 98){
            event.entity.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.max_mana',Math.floor(Math.random()* 125 + 25)*10)
            event.entity.setAttributeBaseValue('ars_nouveau:ars_nouveau.perk.mana_regen',Math.floor(Math.random()* 5 + 5))
        }}
        event.player.stages.remove('mana_gift')
        event.player.stages.add('mana_gifted')
      }
    }
})

const $ArsCapabilityReg = Java.loadClass('com.hollingsworth.arsnouveau.setup.registry.CapabilityRegistry')
function get_mana(player){
    let manaa = $ArsCapabilityReg.getMana(player).orElse(null)
    return manaa.getMaxMana()
}
function get_book_tier(player){
    let manaa = $ArsCapabilityReg.getMana(player).orElse(null)
    return manaa.getBookTier()
}



ItemEvents.rightClicked(event => {
    if ((event.item.mod == 'ars_nouveau' || event.item.mod == 'ars_elemental' || event.item.mod == 'ars_instrumentum') && !event.entity.stages.has('mana_gifted')) {
        event.server.runCommandSilent   (`execute as ${event.player.name.string} run title ${event.player.name.string} actionbar {"text":"\u0412\u0438\u0434\u0438\u043c\u043e \u0443 \u0442\u0435\u0431\u044f \u0438 \u0432\u043e\u0432\u0441\u0435 \u043d\u0435\u0442 \u0442\u0430\u043b\u0430\u043d\u0442\u0430...","color":"#740A74"}}`)
        event.cancel()
    }
})



PlayerEvents.inventoryChanged(event =>{
    
    // event.server.runCommandSilent   (`execute as ${event.player.name.string} run say ${event.player.headArmorItem}`)
    

    let head = event.entity.headArmorItem
    let chest = event.entity.chestArmorItem
    let legs = event.entity.legsArmorItem
    let boots = event.entity.feetArmorItem


    // Основная проверка брони


    if(((head.mod == 'ars_nouveau') && (get_book_tier(event.player)<2)) || ((head.mod =='ars_elemental')&&(get_book_tier(event.player)!= 3))){
        let nbt = head.nbtString
        event.entity.headArmorItem = "minecraft:air"
        event.entity.give(Item.of(`${head.id}`,`${nbt}`))
    }
    if(((chest.mod == 'ars_nouveau') && (get_book_tier(event.player)<2)) || ((chest.mod =='ars_elemental')&&(get_book_tier(event.player)!= 3))){
        let nbt = chest.nbtString
        event.entity.chestArmorItem = "minecraft:air"
        event.entity.give(Item.of(`${chest.id}`,`${nbt}`))
    }
    if(((legs.mod == 'ars_nouveau') && (get_book_tier(event.player)<2)) || ((legs.mod =='ars_elemental')&&(get_book_tier(event.player)!= 3))){
        let nbt = legs.nbtString
        event.entity.legsArmorItem = "minecraft:air"
        event.entity.give(Item.of(`${legs.id}`,`${nbt}`))
    }
    if(((boots.mod == 'ars_nouveau') && (get_book_tier(event.player)<2)) || ((boots.mod =='ars_elemental')&&(get_book_tier(event.player)!= 3))){
        let nbt = boots.nbtString
        event.entity.feetArmorItem = "minecraft:air"
        event.entity.give(Item.of(`${boots.id}`,`${nbt}`))
    }

})
const $CuriousAPI = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')
global.curiosprevent = event => {

    //You can edit anything in this global event and run /kubejs reload startup_scripts to reload this script without having to do a full game restart!
        const {entity,to,from,type,entity: {username}} = event
        if ((to.mod == 'ars_nouveau' || to.mod =='ars_elemental' || to.mod =='ars_instrumentum') && !event.entity.stages.has('mana_gifted')) {
            let nbt = to.nbtString
            entity.give(Item.of(`${to.id}`, `${nbt}`))
            to.count--
        }
        
}       

PlayerEvents.inventoryClosed(event => {
    global.inventoryClosed(event)
  })
/** @arg {Internal.InventoryEventJS} e */
global.inventoryClosed = e => {
    
    const head = e.entity.headArmorItem
    const chest = e.entity.chestArmorItem
    const legs = e.entity.legsArmorItem
    const boots = e.entity.feetArmorItem
    
     // Основная проверка брони

    
    if(((head.mod == 'ars_nouveau') && (get_book_tier(e.player)<2)) || ((head.mod =='ars_elemental')&&(get_book_tier(e.player)!= 3))){
        let nbt = head.nbtString
        e.entity.headArmorItem = "minecraft:air"
        e.entity.give(Item.of(`${head.id}`,`${nbt}`))
    }
    if(((chest.mod == 'ars_nouveau') && (get_book_tier(e.player)<2)) || ((chest.mod =='ars_elemental')&&(get_book_tier(e.player)!= 3))){
        let nbt = chest.nbtString
        e.entity.chestArmorItem = "minecraft:air"
        e.entity.give(Item.of(`${chest.id}`,`${nbt}`))
    }
    if(((legs.mod == 'ars_nouveau') && (get_book_tier(e.player)<2)) || ((legs.mod =='ars_elemental')&&(get_book_tier(e.player)!= 3))){
        let nbt = legs.nbtString
        e.entity.legsArmorItem = "minecraft:air"
        e.entity.give(Item.of(`${legs.id}`,`${nbt}`))
    }
    if(((boots.mod == 'ars_nouveau') && (get_book_tier(e.player)<2)) || ((boots.mod =='ars_elemental')&&(get_book_tier(e.player)!= 3))){
        let nbt = boots.nbtString
        e.entity.feetArmorItem = "minecraft:air"
        e.entity.give(Item.of(`${boots.id}`,`${nbt}`))
        
    }
}   

BlockEvents.rightClicked(event => {
    if((event.block.item.mod == 'ars_nouveau' || event.block.item.mod == 'ars_elemental' || event.block.item.mod == 'ars_elemental')&&(get_book_tier(event.player)< 1)){
        event.player.attack(10)
        event.server.runCommandSilent(`execute at ${event.player.name.string} run particle minecraft:witch ~ ~ ~ 0.3 0.6 0.3 0 200 normal`)
        event.server.runCommandSilent(`execute as ${event.player.name.string} run title ${event.player.name.string} actionbar {"text":"\u0410\u0440\u043a\u0430\u043d\u0430 \u0432\u0430\u043c \u043d\u0435 \u0431\u043b\u0430\u0433\u043e\u0432\u043e\u043b\u0438\u0442...","color":"#740A74"}`)
        event.cancel()
    }
    if ((event.item.id =='ars_nouveau:stable_warp_scroll') &&(get_book_tier(event.player)< 2)){
        event.server.runCommandSilent(`execute at ${event.player.name.string} run title ${event.player.name.string} actionbar {"text":"\u0427\u0442\u043e \u0431\u044b \u044d\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0445\u043e\u0432\u0430\u0442\u044c, \u0432\u0430\u043c \u043d\u0443\u0436\u0435\u043d \u043c\u0430\u0433 2-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f","color":"#740A74"}`)
        event.cancel()
    }
}
)
////execute at DAVIDUSus run particle minecraft:witch ~ ~ ~ 0.2 0.3 0.2 2 120 force

// BlockEvents.rightClicked('kubejs:test_block', event => {
//     if (event.hand === 'main_hand') {
//         event.player.openChestGUI('KubeJS Chest GUI ☺', 6, gui => {
//             gui.anyClicked = e => console.log(`Clicked ${e.slot}, ${e.type}:${e.button}`)

//             // Slot at X0 Y0
//             gui.slot(0, 0, slot => {
//                 slot.item = Item.of('minecraft:gold_block').withName('Test Button')
//                 slot.leftClicked = e => event.player.notify('Left-clicked')
//                 slot.rightClicked = e => event.player.notify('Right-clicked')
//                 slot.middleClicked = e => {
//                     event.player.notify('Middle-clicked')
//                     if (slot.item.id === 'minecraft:gold_block') {
//                         slot.item = Item.of('minecraft:diamond_block').withName('Test Button')
//                     } else {
//                         slot.item = Item.of('minecraft:gold_block').withName('Test Button')
//                     }
//                 }
//                 slot.swapped = e => event.player.notify('Swapped with ' + e.button)
//                 slot.thrown = e => event.player.notify('Thrown')
//                 slot.shiftLeftClicked = e => event.player.notify('Shift-left-clicked')
//                 slot.shiftRightClicked = e => event.player.notify('Shift-right-clicked')
//                 slot.doubleClicked = e => event.player.notify('Double-clicked')
//             })

//             // Shortcut for left-click event with icon and name
//             gui.button(8, 0, 'minecraft:emerald_block', 'Test Button II', e => {
//                 event.player.notify('Left-clicked second button')
//             })
//         })

//         event.cancel()
//     }
// })

