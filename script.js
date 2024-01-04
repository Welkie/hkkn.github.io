document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector('.birthday-card');
    const audio = document.getElementById('happyBirthdayAudio');

    // Thêm hiệu ứng nếu cần
    // Ví dụ: Làm cho thẻ sinh nhật quay mũi tên khi người dùng di chuột qua
    card.addEventListener("mouseover", function () {
        card.style.transform = "rotate(5deg)";
    });

    card.addEventListener("mouseout", function () {
        card.style.transform = "rotate(0deg)";
    });

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                //value: '#ff4500'
                value: '#f7f7f7'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            size: {
                value: 8,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 500,
                color: '#ffffff',
                opacity: 0.4,
                width: 2
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'bottom',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false,
                    mode: 'grab'
                },
                onclick: {
                    enable: false,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
    playButton.addEventListener("click", function () {
        audio.play();
    });
});
