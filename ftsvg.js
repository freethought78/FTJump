function drawLine(svg, x1, y1, x2, y2, stroke = 'black'){
	var line = document.createElementNS("http://www.w3.org/2000/svg","line");
	setAttributes(line, {
		'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2, 'stroke': stroke
	});
	svg.appendChild(line)
	return line;
}

function drawPoly(svg, points, fill, stroke) {

    var poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    poly.setAttribute("points", points);
    poly.setAttribute("stroke", stroke);
    poly.setAttribute('fill', fill);
    poly.setAttribute('opacity', 0.7);

    svg.appendChild(poly); 
    return poly;
}

function drawElipse(svg, cx = 0, cy = 0, rx = 10, ry = 10, rot = 0, fill = 'black', stroke = 'black') {

    var e = document.createElementNS("http://www.w3.org/2000/svg","ellipse");
	e.setAttribute("transform", `rotate(${rot} ${rx} ${ry})`)
    
	e.setAttribute("cx", cx);
    e.setAttribute("cy", cy);
    e.setAttribute("rx", rx);
    e.setAttribute("ry", ry);
    e.setAttribute("stroke", stroke);
    e.setAttribute('fill', fill);

    svg.appendChild(e); 
    return e;
}


function drawCircle(svg, cx = 0, cy = 0, r = 10, fill = 'black', stroke = 'black') {

    var e = document.createElementNS("http://www.w3.org/2000/svg","circle");
    
	e.setAttribute("cx", cx);
    e.setAttribute("cy", cy);
    e.setAttribute("r", r);
    e.setAttribute("stroke", stroke);
    e.setAttribute('fill', fill);

    svg.appendChild(e); 
    return e;
}


function createSVG(id, width=1000, height=1000){
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('id', id)
	svg.setAttribute('height', height);
	svg.setAttribute('width', width);
	document.body.appendChild(svg);
	return svg;
}

function drawRect(svg, x, y, width, height, stroke = 'black', fill = 'black'){
	var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
	setAttributes(rect, {
		'x': x, 'y': y, 'width': width, 'height': height, 'stroke': stroke, 'fill': fill
	});
	svg.appendChild(rect)
	return rect;
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}