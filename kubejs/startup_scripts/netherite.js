GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('debris', -1, -1, -1, null, '*Nr*', false);
});

// const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('debris')
        .dust()
        .element(GTElements.get('debris'))
        .color(0x804000);

    event.create('netherite')
        .dust()
        .components('4x debris', '4x gold')
        .color(0x1c1c1c)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);
});