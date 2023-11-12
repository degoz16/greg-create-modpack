ServerEvents.recipes(event => {
    let removalids = [
      'create:crafting/materials/andesite_alloy',
      'createaddition:rolling/aluminum_plate',
      'createaddition:crafting/modular_accumulator_gold',
      'create:crafting/materials/copper_nugget',
      'createaddition:crafting/portable_energy_interface',
      'createaddition:rolling/brass_ingot',
      'createaddition:pressing/zinc_ingot',
      'createaddition:crafting/spool',
      'soul_like_armors_reworked:vikingaxerecipe',
      'createaddition:rolling/steel_plate',
      'soul_like_armors_reworked:knightswordrecipe',
      'create:crafting/materials/andesite_alloy_block',
      'create:crafting/materials/zinc_ingot_from_compacting',
      'create:crafting/materials/andesite_alloy_from_block',
      'create:crafting/materials/raw_zinc_block',
      'create:crafting/materials/zinc_nugget_from_decompacting',
      'createaddition:mixing/electrum',
      'createaddition:rolling/lead_plate',
      'create:crafting/materials/raw_zinc',
      'create:crafting/materials/zinc_block_from_compacting',
      'soul_like_armors_reworked:bloodkatanarecipe',
      'createaddition:rolling/electrum_ingot',
      'createaddition:crafting/modular_accumulator_electrum',
      'createaddition:crafting/large_connector_gold',
      'createaddition:crafting/digital_adapter',
      'create:crafting/materials/brass_block_from_compacting',
      'soul_like_armors_reworked:platinumknightrecipe_4',
      'soul_like_armors_reworked:platinumknightrecipe_3',
      'soul_like_armors_reworked:platinumknightrecipe_2',
      'soul_like_armors_reworked:platinumknightrecipe_1',
      'wom:diamond_legtopseal',
      'createaddition:pressing/electrum_ingot',
      'createaddition:crafting/electrum_nugget',
      'createaddition:crafting/redstone_relay',
      'createaddition:crafting/large_connector_electrum',
      'wom:diamond_armbracelet',
      'createaddition:crafting/electrum_ingot',
      'soul_like_armors_reworked:nightcrowswordrecipe',
      'soul_like_armors_reworked:victoriousgreatswordrecipe',
      'wom:diamond_crown',
      'createaddition:crafting/festive_spool',
      'createaddition:crafting/electrum_spool',
      'createaddition:crafting/gold_spool',
      'soul_like_armors_reworked:victoriousrecipe_4',
      'soul_like_armors_reworked:paladinrecipe_1',
      'soul_like_armors_reworked:paladinrecipe_2',
      'soul_like_armors_reworked:paladinrecipe_3',
      'soul_like_armors_reworked:paladinrecipe_4',
      'create:crafting/materials/zinc_ingot_from_decompacting',
      'createaddition:crushing/diamond',
      'createaddition:pressing/steel_ingot',
      'createaddition:rolling/copper_ingot',
      'wom:diamond_legbottomseal',
      'createaddition:pressing/aluminum_ingot',
      'createaddition:rolling/steel_ingot',
      'createaddition:crafting/electrum_amulet',
      'soul_like_armors_reworked:steelknightrecipe_3',
      'soul_like_armors_reworked:steelknightrecipe_4',
      'soul_like_armors_reworked:steelknightrecipe_1',
      'soul_like_armors_reworked:steelknightrecipe_2',
      'createaddition:pressing/uranium_ingot',
      'createaddition:rolling/electrum_plate',
      'createaddition:rolling/aluminum_ingot',
      'createaddition:crafting/small_connector_copper',
      'create:crafting/materials/brass_nugget_from_decompacting',
      'createaddition:rolling/iron_plate',
      'create:crafting/materials/copper_ingot',
      'soul_like_armors_reworked:druidrecipe_4',
      'soul_like_armors_reworked:druidrecipe_3',
      'soul_like_armors_reworked:druidrecipe_2',
      'soul_like_armors_reworked:druidrecipe_1',
      'soul_like_armors_reworked:victoriouslordrecipe_2',
      'soul_like_armors_reworked:victoriouslordrecipe_1',
      'soul_like_armors_reworked:victoriouslordrecipe_3',
      'createaddition:rolling/gold_plate',
      'createaddition:pressing/constantan_ingot',
      'createaddition:pressing/lead_ingot',
      'create:crafting/materials/brass_ingot_from_compacting',
      'createaddition:rolling/iron_ingot',
      'create:crafting/materials/andesite_alloy_from_zinc',
      'createaddition:pressing/nickel_ingot',
      'createaddition:pressing/silver_ingot',
      'createaddition:rolling/gold_ingot',
      'soul_like_armors_reworked:heavyshieldrecipe',
      'createaddition:crafting/capacitor_1',
      'createaddition:crafting/capacitor_2',
      'soul_like_armors_reworked:blackbaronrecipe_1',
      'soul_like_armors_reworked:blackbaronrecipe_3',
      'soul_like_armors_reworked:blackbaronrecipe_2',
      'soul_like_armors_reworked:blackbaronrecipe_4',
      'storagedrawers:conversion_upgrade',
      'create:crafting/materials/brass_ingot_from_decompacting',
      'createaddition:crafting/copper_spool',
      'createaddition:rolling/copper_plate',
      'soul_like_armors_reworked:greatswordrecipe',
      'soul_like_armors_reworked:immortalknightrecipe_3',
      'soul_like_armors_reworked:immortalknightrecipe_4',
      'soul_like_armors_reworked:immortalknightrecipe_1',
      'soul_like_armors_reworked:immortalknightrecipe_2',
      'createaddition:crafting/electrum_nugget',
      'create:crafting/materials/rose_quartz',
      'create:crushing/nickel_ore',
      'create:crushing/raw_nickel_ore',
      'create:crushing/raw_nickel_block',
      'create:crushing/lead_ore',
      'create:crushing/raw_lead_ore',
      'create:crushing/raw_lead_block',
      'create:crushing/raw_tin_ore',
      'create:crushing/raw_tin_block',
      'create:crushing/tin_ore',
      'create:crushing/raw_silver_ore',
      'create:crushing/raw_silver_block',
      'create:crushing/silver_ore',
      'create:crushing/raw_platinum_ore',
      'create:crushing/raw_platinum_block',
      'create:crushing/platinum_ore',
      'create:crushing/asurine',
      'create:crushing/deepslate_zinc_ore',
      'create:crushing/raw_zinc_block',
      'create:crushing/zinc_ore',
      'create:crushing/raw_zinc',
      'create:crushing/asurine_recycling',
      'create:crushing/veridium_recycling',
      'create:crushing/deepslate_copper_ore',
      'create:crushing/raw_copper_block',
      'create:crushing/veridium',
      'create:crushing/copper_ore',
      'create:crushing/raw_copper',
      'create:crushing/ochrum_recycling',
      'create:crushing/ochrum',
      'create:crushing/raw_gold',
      'create:crushing/deepslate_gold_ore',
      'create:crushing/raw_gold_block',
      'create:crushing/gold_ore',
      'create:crushing/crimsite_recycling',
      'create:crushing/deepslate_iron_ore',
      'create:crushing/raw_iron',
      'create:crushing/crimsite',
      'create:crushing/iron_ore',
      'create:crushing/raw_iron_block',
      'create:mixing/brass_ingot',
      'create:blasting/zinc_ingot_from_ore',
      'create:blasting/zinc_ingot_from_raw_ore',
      'create:blasting/zinc_ingot_from_crushed',
      'create:smelting/zinc_ingot_from_crushed',
      'create:smelting/zinc_ingot_from_raw_ore',
      'create:smelting/zinc_ingot_from_ore',
      'create:mixing/andesite_alloy_from_zinc',
      'create:mixing/andesite_alloy',
      'occultism:crushing/zinc_dust_from_raw',
      'occultism:crushing/zinc_dust',
      'create:crushing/diorite',
      'create:crushing/diorite_recycling',
      'create:crushing/tuff',
      'create:crushing/tuff_recycling',
      'create:splashing/crushed_raw_zinc',
      'create:splashing/crushed_raw_copper',
      'create:splashing/gravel',
      'create:splashing/crushed_raw_iron',
      'create:splashing/red_sand',
      'create:splashing/soul_sand',
      'create:splashing/crushed_raw_gold',
      'createbigcannons:cast_iron_ingot_from_block',
      'createbigcannons:cast_iron_ingot_from_nuggets',
      'createbigcannons:compacting/iron_to_cast_iron_ingot',
      'createbigcannons:compacting/forge_cast_iron_ingot',
      'createbigcannons:nethersteel_ingot_from_nuggets',
      'createbigcannons:nethersteel_ingot_from_block',
      'createbigcannons:mixing/alloy_nethersteel_cast_iron',
      'createbigcannons:mixing/alloy_nethersteel_steel',
      'createbigcannons:compacting/forge_nethersteel_ingot',
      'minecraft:iron_shovel',
      'minecraft:iron_pickaxe',
      'minecraft:iron_axe',
      'minecraft:iron_hoe',
      'minecraft:diamond_sword',
      'minecraft:golden_sword',
      'minecraft:iron_sword',
      'minecraft:golden_shovel',
      'minecraft:golden_pickaxe',
      'minecraft:golden_axe',
      'minecraft:golden_hoe',
      'minecraft:diamond_shovel',
      'minecraft:diamond_pickaxe',
      'minecraft:diamond_axe',
      'minecraft:diamond_hoe',
      'createbigcannons:wrought_iron_cannon_chamber',
      'createbigcannons:wrought_iron_cannon_end',
      'create:crafting/materials/electron_tube',
      'occultism:crushing/cobalt_dust_from_raw',
      'occultism:crushing/redstone_dust',
      'occultism:crushing/ruby_dust',
      'occultism:crushing/emerald_dust',
      'occultism:crushing/iron_dust',
      'occultism:crushing/tin_dust',
      'occultism:crushing/silver_dust',
      'occultism:crushing/graphite_dust',
      'occultism:crushing/iesnium_dust',
      'occultism:crushing/lead_dust_from_raw',
      'occultism:crushing/cinnabar_dust',
      'occultism:crushing/copper_dust',
      'occultism:crushing/graphite_dust_from_raw',
      'occultism:crushing/copper_dust_from_raw',
      'occultism:crushing/nickel_dust',
      'occultism:crushing/crushed_end_stone',
      'occultism:crushing/coal_dust',
      'occultism:crushing/iesnium_dust_from_raw',
      'occultism:crushing/nickel_dust_from_raw',
      'occultism:crushing/sulfur_dust',
      'occultism:crushing/sapphire_dust',
      'occultism:crushing/tin_dust_from_raw',
      'occultism:crushing/gold_dust_from_raw',
      'occultism:crushing/iron_dust_from_raw',
      'occultism:crushing/certus_quartz_dust',
      'occultism:crushing/gold_dust',
      'occultism:crushing/topaz_dust',
      'occultism:crushing/platinum_dust',
      'occultism:crushing/platinum_dust_from_raw',
      'occultism:crushing/apatite_dust',
      'occultism:crushing/lead_dust',
      'occultism:crushing/silver_dust_from_raw',
      'occultism:crushing/obsidian_dust',
      'occultism:crushing/cobalt_dust',
      'occultism:crushing/diamond_dust',
      'occultism:crushing/lapis_dust',
      'create:crafting/kinetics/propeller',
      'createbigcannons:cutting/spring_wire_steel',
      'createbigcannons:cutting/spring_wire_iron',
      'create:item_application/andesite_casing_from_wood_using_deployer',
      'create:item_application/andesite_casing_from_wood',
      'create:item_application/brass_casing_from_wood_using_deployer',
      'create:item_application/brass_casing_from_wood',
      'create:item_application/copper_casing_from_wood_using_deployer',
      'create:item_application/copper_casing_from_wood',
      'occultism:crafting/silver_nugget',
      'occultism:crafting/silver_ingot_from_nuggets',
      'occultism:crafting/silver_ingot_from_block',
      'createaddition:mixing/bioethanol',
      'minecraft:netherite_ingot',
      'minecraft:netherite_ingot_from_netherite_block',
      'minecraft:netherite_block',
      'gtceu:compressor/compress_plate_dust_netherite_',
      'sliceanddice:sprinkler',
      'sliceanddice:slicer',
      'create:crafting/kinetics/track_observer_from_other_plates',
      'create:crafting/kinetics/white_sail',
      'create:crushing/raw_uranium_ore',
      'rechiseledcreate:mechanical_chisel',
      'create:crafting/kinetics/fluid_pipe_vertical',
      'create:crafting/kinetics/large_cogwheel',
      'create:cutting/andesite_alloy',
      'epicfight:golden_tachi',
      'epicfight:golden_spear',
      'wom:golden_staff',
      'wom:golden_greataxe',
      'epicfight:golden_longsword',
      'epicfight:golden_greatsword',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]

    removalids.forEach(recipeid => {             
        event.remove({ id:`${recipeid}`})
    });
})