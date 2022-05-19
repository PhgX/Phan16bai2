
function doMath(){
    let Circle1 = new Circle();
    Circle1.radius = +document.getElementById("radius").value;

    document.getElementById("diameter").innerHTML = Circle1.getArea(Circle1.radius);
    document.getElementById("area").innerHTML = Circle1.getDiameter(Circle1.radius);
}


