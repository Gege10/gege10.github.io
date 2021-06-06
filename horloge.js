function start(){
    rotate();

    // Applique une rotation pour toutes les marques
    var marks = document.getElementsByClassName("marks");
    for (var i = 0; i < marks.length; i++){
        var angle = i * 30;
        marks[i].style.rotate = angle + "deg";
    }
}

function refresh(){
    setTimeout(rotate, 1)
}

function rotate(){
    var heures = document.getElementById("heures");
    var minutes = document.getElementById("minutes");
    var secondes = document.getElementById("secondes");
    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    var ms = t.getMilliseconds();
    var hRotation = 180 + h / 12 * 360 + m / 60 * 6;
    var mRotation = 180 - hRotation + m / 60 * 360 + s / 60 * 6;
    var sRotation = 180 - hRotation - mRotation + s / 60 * 360 + ms / 1000 * 6;
    heures.style.rotate = hRotation + "deg";
    minutes.style.rotate = mRotation + "deg";
    secondes.style.rotate = sRotation + "deg";
    console.debug(h + ":" + m + ":" + s);
    refresh();
}