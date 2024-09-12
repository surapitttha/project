$(document).ready(function () {
    // จำนวนอนุภาค
    var particleCount = 300;
    function getRandomDirection() {
        var directions = ['to-bottom', 'to-top', 'to-right', 'to-left'];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    // สร้างอนุภาคแต่ละตัว
    for (var i = 0; i < particleCount; i++) {
        createParticle();
    }

    // สร้างอนุภาคใหม่ทุก 500ms
    setInterval(function () {
        createParticle();
    }, 10);

    function createParticle() {
        var particle = $('<div class="particle"></div>');
        $('#particle-container').append(particle);

        // กำหนดตำแหน่งเริ่มต้นแบบสุ่ม
        var startX = Math.random() * window.innerWidth;
        var startY = Math.random() * window.innerHeight;
        var duration = Math.random() * 10 + 5; // ความเร็วของอนุภาค
        var size = Math.random() * 5 + 1; // ขนาดอนุภาค
        var opacity = Math.random() * 0.7 + 0.3; // ความโปร่งใส

        // ใช้ CSS เพื่อจัดการตำแหน่ง ขนาด และความโปร่งแสง
        particle.css({
            top: startY + 'px',
            left: startX + 'px',
            width: size + 'px',
            height: size + 'px',
            opacity: opacity,
            backgroundColor: 'rgba(255, 255, 255, ' + opacity + ')', // สีขาวโปร่งใส
            boxShadow: '0 0 ' + (size * 3) + 'px rgba(255, 255, 255, 0.5)', // ทำให้อนุภาคเปล่งแสง
        });

        // สุ่มทิศทางการเคลื่อนที่
        var direction = getRandomDirection();
        var endX = startX, endY = startY;

        // ปรับตำแหน่งปลายทางตามทิศทางที่สุ่ม
        switch (direction) {
            case 'to-bottom':
                endY = window.innerHeight;
                break;
            case 'to-top':
                endY = -size;
                break;
            case 'to-right':
                endX = window.innerWidth;
                break;
            case 'to-left':
                endX = -size;
                break;
        }

        // ใช้ jQuery animate เพื่อเคลื่อนที่อนุภาค
        particle.animate(
            {
                top: endY + 'px',
                left: endX + 'px',
                opacity: 0 // ค่อยๆ จางหายไป
            },
            duration * 1000,
            function () {
                $(this).remove(); // ลบอนุภาคเมื่อออกจากจอ
            }
        );
    }

    // เพิ่มคลาสให้กับลิงก์ที่ active
    $('nav ul li a').on('click', function() {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });

    // เปลี่ยนสีพื้นหลังเมื่อ hover ที่ลิงก์ใน nav
    $('nav ul li a').hover(function() {
        $(this).stop().animate({
            backgroundColor: '#555'
        }, 300);
    }, function() {
        $(this).stop().animate({
            backgroundColor: 'transparent'
        }, 300);
    });
});