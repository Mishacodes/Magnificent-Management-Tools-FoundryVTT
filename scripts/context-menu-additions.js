
Hooks.on('init', () => {

    Hooks.on('getSceneControlButtons', (controls) => {
        // items here
        controls.push({
            name: 'test',
            title: 'test-title',
            icon: 'fas fa-cog', // icon
            onClick: () => {
                // actions here
                console.log('click!');
            },
            button: true,
        });

        return controls;
    });
});