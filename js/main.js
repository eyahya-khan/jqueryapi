$(document).ready(function () {
    $('#click-btn').click(function () {
        let name = $('#nameid').val();
        $('.imgchange').attr('src', `https://joeschmoe.io/api/v1/${name}`);
    });
});
