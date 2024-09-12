// member1.js (หรือ member2.js)
$(document).ready(function () {
    // จำนวนอนุภาคที่จะสร้าง
    var particleCount = 100;

    // สร้างอนุภาคแต่ละตัว
    for (var i = 0; i < particleCount; i++) {
        var particle = $('<div class="particle"></div>');
        $('#particle-container').append(particle);

        // กำหนดตำแหน่งเริ่มต้นแบบสุ่ม
        var startX = Math.random() * window.innerWidth;
        var startY = Math.random() * window.innerHeight;
        var duration = Math.random() * 10 + 5; // ความเร็วของอนุภาค

        // ใช้ CSS เพื่อจัดการตำแหน่งและขนาดแบบสุ่ม
        particle.css({
            top: startY + 'px',
            left: startX + 'px',
            width: Math.random() * 5 + 2 + 'px',
            height: Math.random() * 5 + 2 + 'px',
            opacity: Math.random()
        });

        // ใช้ jQuery animate เพื่อเคลื่อนที่อนุภาค
        particle.animate(
            {
                top: window.innerHeight + 'px',
                left: (Math.random() * window.innerWidth) + 'px',
                opacity: 0
            },
            duration * 1000,
            function () {
                $(this).remove(); // ลบอนุภาคเมื่อออกจากจอ
            }
        );
    }

    // สร้างอนุภาคใหม่ทุก 500ms
    setInterval(function () {
        var particle = $('<div class="particle"></div>');
        $('#particle-container').append(particle);

        var startX = Math.random() * window.innerWidth;
        var startY = Math.random() * window.innerHeight;
        var duration = Math.random() * 10 + 5;

        particle.css({
            top: startY + 'px',
            left: startX + 'px',
            width: Math.random() * 5 + 2 + 'px',
            height: Math.random() * 5 + 2 + 'px',
            opacity: Math.random()
        });

        particle.animate(
            {
                top: window.innerHeight + 'px',
                left: (Math.random() * window.innerWidth) + 'px',
                opacity: 0
            },
            duration * 1000,
            function () {
                $(this).remove();
            }
        );
    }, 500);
});
