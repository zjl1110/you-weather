var no = 50;
var speed = 4;
var s, x, y, sn, cs;
var a, r, cx, cy;
var i;
clientW = document.body.clientWidth;
clientH = document.body.clientHeight;
x = new Array();
y = new Array();
r = new Array();
cx = new Array();
cy = new Array();
s = 4;
for (i = 0; i < no; ++ i) {  
    initRain();
    document.write("<div id=dot"+ i +"  style='POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px'><font color='#FFFFFF'>.</font></div>");
}
function initRain() {
    a = 6;
    r[i] = 1;
    sn = Math.sin(a);
    cs = Math.cos(a);
    cx[i] = Math.random() * clientW + 1;
    cy[i] = Math.random() * clientH + 1;
    x[i] = r[i] * sn + cx[i];
    y[i] = cy[i];
}
function makeRain() {
    r[i] = 1;
    cx[i] = Math.random() * clientW + 1;
    cy[i] = 1;
    x[i] = r[i] * sn + cx[i];
    y[i] = r[i] * cs + cy[i];
}
function updateRain() {
    r[i] += s;
    x[i] = r[i] * sn + cx[i];
    y[i] = r[i] * cs + cy[i];
}
function raindropIE() {
    for (i = 0; i < no; ++ i) {
        updateRain();
        if ((x[i] <= 1) || (x[i] >= (clientW - 20)) || (y[i] >= (clientH - 20))) {
            makeRain();
            clientW = document.body.clientWidth;
            clientH = document.body.clientHeight;
        }
        document.all["dot"+i].style.top = y[i];
        document.all["dot"+i].style.left = x[i];
    }
    setTimeout("raindropIE()", speed);
}
raindropIE();