// need a way to plug in either VOC2007 or VOC2010 here...


function flip_bb(bb,imdim) {
  W = bb[2] - bb[0] + 1;
  H = bb[3] - bb[1] + 1;

  
  bb[2] = imdim[1]-bb[0];
  bb[0] = bb[2]-W+1;
  return bb;
}


function show_image(divid,im,bb,imdim,color) {




var paper = Raphael(divid, imdim[1], imdim[0]);
srcim = datadir + '/' + im;
var c = paper.image(srcim, 0, 0, imdim[1], imdim[0]);

// flip the image which has flip turned on
if (bb[6] == 1) {
  flipstring = " FLIP";
  c.scale(-1,1);//.attr({opacity: .5});
  bb = flip_bb(bb,imdim);
} else {
  flipstring = "";
}

document.writeln('Score = ' + bb[11] + flipstring);
document.writeln('<br/>');

var w = Math.round(bb[2] - bb[0] + 1);
var h = Math.round(bb[3] - bb[1] + 1);

var c = paper.rect(Math.round(bb[0]), Math.round(bb[1]), w, h);

c.attr({fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 10, cursor: "move"});
}

function show_image_href(divid,im,bb,imdim,color,href) {

srcim = datadir + '/' + im;
document.writeln('Score = ' + bb[11]);
document.writeln('<br/>');
var paper = Raphael(divid, imdim[1], imdim[0]);

var c = paper.image(srcim, 0, 0, imdim[1], imdim[0]);
c.node.onclick = function() {
location.href=href;
}

c.attr({cursor: "hand"});

//c.href = href;
// flip the image which has flip turned on
//if (bb[6] == 1) {
//c.scale(-1,1).attr({opacity: .5});
//}

var w = Math.round(bb[2] - bb[0] + 1);
var h = Math.round(bb[3] - bb[1] + 1);

var c = paper.rect(Math.round(bb[0]), Math.round(bb[1]), w, h);

c.attr({fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 10});
c.node.onclick = function() {
location.href=href;
}
c.attr({cursor: "hand"});
}


function show_image2(im,bb) {
srcim = datadir + '/' + im;

document.write('Score = ' + bb[11]);
document.write('<br/>');
document.write('flip = ' + bb[6]);
document.write('<br/>');
document.write('<img src="'+srcim+'" alt="'+im+'" title="Test Image" />');

}