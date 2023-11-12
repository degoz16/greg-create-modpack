ServerEvents.recipes(event => {
    
    event.recipes.gtceu.alloy_smelter('create:alloy_rose_quartz')
        .itemInputs('minecraft:quartz', '7x #forge:dusts/redstone')
        .itemOutputs('create:rose_quartz')
        .duration(120)
        .EUt(16);

    event.recipes.gtceu.macerator('createbc:nitro')
        .itemInputs('createbigcannons:hardened_nitro')
        .itemOutputs('2x createbigcannons:nitropowder')
        .duration(80)
        .EUt(7);
    event.recipes.gtceu.macerator('create:netherrackdust')
        .itemInputs('#forge:netherrack')
        .itemOutputs('2x create:cinder_flour')
        .duration(20)
        .EUt(7);
    event.recipes.gtceu.macerator('create:flour')
        .itemInputs('#forge:crops/wheat')
        .itemOutputs('2x create:wheat_flour')
        .duration(20)
        .EUt(7);
    event.recipes.gtceu.mixer('createbc:nitro')
        .itemInputs('#forge:dusts/blaze','minecraft:magma_cream','2x #forge:dusts/gunpowder')
        .itemOutputs('2x createbigcannons:congealed_nitro')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu.assembler('create:teslacoil')
        .itemInputs(
            '5x #forge:wires/fine/copper',
            'create:brass_casing',
            'gtceu:mv_battery_hull',
            'gtceu:mv_battery_hull',
            '6x #forge:plates/brass',
            'gtceu:magnetic_steel_rod',
            'create:electron_tube')
        .itemOutputs('createaddition:tesla_coil')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:electric_motor')
        .itemInputs(
            '4x #forge:plates/steel',
            '4x #forge:plates/brass',
            'gtceu:mv_electric_motor',
            'gtceu:copper_single_wire',
            'create:shaft')
        .itemOutputs('createaddition:electric_motor')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:alternator')
        .itemInputs(
            '8x #forge:plates/steel',
            'gtceu:mv_electric_motor',
            'gtceu:copper_single_wire',
            'create:shaft')
        .itemOutputs('createaddition:alternator')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:precision_mechanism_1')
        .itemInputs(
            '3x #forge:gears/small/steel',
            '3x #forge:gears/steel',
            '3x #forge:springs/small/steel',
            '3x #forge:screws/steel',
            '#forge:plates/gold')
        .itemOutputs('create:precision_mechanism')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:hand')
        .itemInputs(
            '#forge:plates/steel',
            '2x #forge:nuggets/brass',
            '#forge:screws/steel',
            '2x #forge:rods/brass')
        .itemOutputs('2x create:brass_hand')
        .circuit(1)
        .duration(100)
        .EUt(60);

    event.recipes.gtceu.assembler('create:mechanical_crafter_1')
        .itemInputs(
            '3x create:brass_casing',
            '3x create:electron_tube',
            '2x create:cogwheel',
            '7x #forge:plates/brass')
        .itemOutputs('3x create:mechanical_crafter')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:stockpile_switch_1')
        .itemInputs(
            '2x create:brass_casing',
            '3x create:electron_tube',
            '2x create:cogwheel',
            '7x #forge:plates/brass',
            'minecraft:comparator')
        .itemOutputs('create:stockpile_switch')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:mechanical_arm_1')
        .itemInputs(
            'create:brass_casing',
            'create:electron_tube',
            'create:cogwheel',
            '6x #forge:plates/brass',
            '4x #forge:screws/steel',
            'create:precision_mechanism',
            '2x #forge:rods/steel',
            '2x #forge:rods/brass')
        .itemOutputs('create:mechanical_arm')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:content_observer_1')
        .itemInputs(
            '2x create:brass_casing',
            '3x create:electron_tube',
            '2x create:cogwheel',
            '7x #forge:plates/brass',
            'minecraft:observer')
        .itemOutputs('create:content_observer')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:sequenced_gearshift_1')
        .itemInputs(
            '2x create:brass_casing',
            '2x create:large_cogwheel',
            '2x create:cogwheel',
            '7x #forge:plates/brass',
            'create:shaft')
        .itemOutputs('create:sequenced_gearshift')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:elevator_pulley_1')
        .itemInputs(
            '2x create:brass_casing',
            '3x create:electron_tube',
            '2x create:cogwheel',
            '7x #forge:plates/brass',
            'create:rope_pulley')
        .itemOutputs('create:elevator_pulley')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('create:rotation_speed_controller_1')
        .itemInputs(
            '2x #forge:screws/steel',
            '2x #forge:plates/brass',
            'create:brass_casing',
            'create:precision_mechanism')
        .itemOutputs('create:rotation_speed_controller')
        .circuit(1)
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('nano_cable')
        .itemInputs(
            'epicfight:knuckle',
            'gtceu:hv_field_generator',
            '#forge:batteries/hv')
        .itemOutputs('mgrr:nano_cable')
        .circuit(1)
        .duration(100)
        .EUt(400);

    event.recipes.gtceu.assembler('murasama')
        .itemInputs(
            'epicfight:netherite_tachi',
            'gtceu:hv_field_generator',
            '#forge:batteries/hv')
        .itemOutputs('mgrr:murasama_sheathed')
        .circuit(1)
        .duration(100)
        .EUt(400);

    event.recipes.gtceu.assembler('hf_blade')
        .itemInputs(
            'epicfight:netherite_tachi',
            'gtceu:hv_field_generator',
            '#forge:batteries/hv')
        .itemOutputs('mgrr:hf_blade')
        .circuit(2)
        .duration(100)
        .EUt(400);

    event.recipes.gtceu.assembler('letranger')
        .itemInputs(
            'wom:netherite_staff',
            'gtceu:hv_field_generator',
            '#forge:batteries/hv')
        .itemOutputs('mgrr:letranger')
        .circuit(1)
        .duration(100)
        .EUt(400);

    event.recipes.gtceu.assembler('dystopia')
        .itemInputs(
            'epicfight:netherite_dagger',
            'gtceu:hv_field_generator',
            '#forge:batteries/hv')
        .itemOutputs('mgrr:dystopia')
        .circuit(1)
        .duration(100)
        .EUt(400);

    event.recipes.gtceu.assembler('bloodlust')
        .itemInputs(
            'epicfight:netherite_longsword',
            'gtceu:hv_field_generator',
            '#forge:batteries/hv')
        .itemOutputs('mgrr:bloodlust')
        .circuit(1)
        .duration(100)
        .EUt(400);

    event.recipes.gtceu.electric_blast_furnace('netherite')
        .itemInputs('gtceu:debris_dust', 'minecraft:gold_ingot')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('minecraft:netherite_ingot')
        .blastFurnaceTemp(4500)
        .duration(12000)
        .EUt(480);
    
    event.recipes.gtceu.electric_blast_furnace('nethersteel_ingot')
        .itemInputs('#forge:ingots/netherite', '#forge:dusts/black_steel')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('createbigcannons:nethersteel_ingot')
        .blastFurnaceTemp(4500)
        .duration(12000)
        .EUt(480);

    event.recipes.gtceu.macerator('netherite_scrap_dust')
        .itemInputs('minecraft:netherite_scrap')
        .itemOutputs('gtceu:debris_dust')
        .duration(180)
        .EUt(480);

    event.recipes.gtceu.centrifuge('debris_dust')
        .itemInputs('gtceu:netherrack_dust')
        .chancedOutput('gtceu:debris_tiny_dust', 200, 500)
        .duration(20)
        .EUt(8192)
        .circuit(1);

    event.recipes.gtceu.bender('netherite_plate_1')
        .itemInputs('#forge:ingots/netherite')
        .itemOutputs('gtceu:netherite_plate')
        .duration(300)
        .EUt(24)
        .circuit(1);

    event.recipes.gtceu.forge_hammer('netherite_plate_2')
        .itemInputs('3x #forge:ingots/netherite')
        .itemOutputs('2x gtceu:netherite_plate')
        .duration(300)
        .EUt(16);

    event.shaped('gtceu:netherite_plate',
        [
            ' H ',
            ' I ',
            ' I '
        ],
        {
            I: '#forge:ingots/netherite',
            H: '#forge:tools/hammers'
        }).id('netherite_plate');

    event.shaped('sliceanddice:slicer',
        [
            "SpH",
            "PCP",
            "iTi"
        ],
        {
            C: 'create:andesite_casing',
            p: 'create:cogwheel',
            P: '#forge:plates/iron',
            i: '#forge:screws/steel',
            H: '#forge:tools/wrenches',
            S: '#forge:tools/screwdrivers',
            T: 'create:turntable'
        }).id('slicer');

    event.shaped('sliceanddice:slicer',
        [
            "SpH",
            "PCP",
            "iTi"
        ],
        {
            C: 'create:andesite_casing',
            p: 'create:cogwheel',
            P: '#forge:plates/iron',
            i: '#forge:screws/steel',
            H: '#forge:tools/wrenches',
            S: '#forge:tools/screwdrivers',
            T: 'create:turntable'
        }).id('slicer');

    event.shaped('kubejs:harvester_blade',
        [
            'SPS',
            'IPI',
            'HIF'
        ],
        {
            I: '#forge:rods/steel',
            F: '#forge:tools/files',
            P: '#forge:plates/steel',
            H: '#forge:tools/screwdrivers',
            S: '#forge:screws/steel'
        }).id('harvester_blade');

    event.shaped('3x sliceanddice:sprinkler',
        [
            ' H ',
            'IFI',
            'IBI'
        ],
        {
            I: '#forge:plates/copper',
            H: '#forge:tools/hammers',
            F: 'create:fluid_pipe',
            B: 'minecraft:iron_bars'
        }).id('sprinkler');

    event.shaped('createbigcannons:basin_foundry_lid',
        [
            '   ',
            'HI ',
            '___'
        ],
        {
            I: '#forge:ingots/iron',
            _: '#forge:plates/double/iron',
            H: '#forge:tools/hammers'
        }).id('createbigcannons:basin_foundry_lid');
    event.shaped('create:electron_tube',
        [
            ' H ',
            ' o ',
            ' I '
        ],
        {
            I: '#forge:circuits/ulv',
            o: 'create:polished_rose_quartz',
            H: '#forge:tools/screwdrivers'
        }).id('create:tube_1');
    event.shaped('create:electron_tube',
        [
            ' G ',
            'IRI',
            'WWW'
        ],
        {
            I: '#forge:bolts/steel',
            R: 'create:polished_rose_quartz',
            W: 'gtceu:copper_single_wire',
            G: 'gtceu:glass_tube'
        }).id('create:tube_2');
    event.shaped('3x createbigcannons:spring_wire',
        [
            ' H ',
            ' I ',
            ' W '
        ],
        {
            I: '#forge:rods/wood',
            W: '#forge:springs/steel',
            H: '#forge:tools/wire_cutters'
        }).id('createbc:spring');

    event.shaped('ars_nouveau:novice_spell_book',
        [
            ' I ',
            'ABW',
            ' H '
        ],
        {
            I: 'gtceu:iron_sword',
            W: 'gtceu:iron_pickaxe',
            H: 'gtceu:iron_axe',
            A: 'gtceu:iron_shovel',
            B: 'minecraft:book'
        }).id('ars_book');

    event.shapeless('2x gtceu:silver_credit', ['minecraft:emerald', 'minecraft:emerald', 'minecraft:emerald', 'minecraft:emerald']).id('credit');
})
