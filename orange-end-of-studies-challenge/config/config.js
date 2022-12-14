module.exports = {
    particles: {
        particles: {
            number: { value: 30 },
            color: { value: ['#503b9a', '#37008a', '#8277e1'] },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 0.2,
                    opacity_min: 0.3,
                    sync: true,
                },
            },
            size: {
                value: 50,
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 450,
                color: '#923794',
                opacity: 0,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                bounce: true,
            },
        },
        interactivity: {
            detect_on: 'canvas',
            // activate
            events: {
                onhover: {
                    enable: true,
                    mode: ['bubble'],
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 17,
                    duration: 1,
                    opacity: 0.8,
                    speed: 2,
                },
            },
        },
        retina_detect: true,
    },
}