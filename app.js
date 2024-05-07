
$(document).ready(function() {
    var home = $('#Home');
    var blogs = $('#Blogs');
    var about = $('#About');

    home.on('click', function() {
        console.log('home clicked');
        window.location.href = 'index.html';
    });

    blogs.on('click', function() {
        console.log('blogs clicked');
        window.location.href = 'blogs.html';
    });

    about.on('click', function() {
        console.log('about clicked');
        window.location.href = 'about.html';
    });
});
