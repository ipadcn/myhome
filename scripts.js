// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // 移除所有section的active类
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // 添加目标section的active类
            document.getElementById(targetSection).classList.add('active');
        });
    });
});
