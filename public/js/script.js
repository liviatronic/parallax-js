var currentX = '';
var currentY = '';

var movementConstant = .02;

$(document).mousemove(function (e) {

    if (currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;

    if (currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;

    $('#container div').each(function (i, el) {
        var movementx = (i + 1) * (xdiff * movementConstant);
        var movementy = (i + 1) * (ydiff * movementConstant);
        var newX = $(el).position().left + movementx;
        var newY = $(el).position().top + movementy;
        $(el).css('left', newX + 'px');
        $(el).css('top', newY + 'px');
    });

});