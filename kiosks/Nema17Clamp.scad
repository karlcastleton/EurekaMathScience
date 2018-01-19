NEMA17W=25.4*(1*16+11)/16;
Wall=5;

for (a=[0:180:360]) {
rotate([a,0,0])
union() {    
difference(){
hull() {
translate([0,NEMA17W/2+Wall/2,0])
  cube([NEMA17W+Wall,Wall,Wall],center=true);
translate([NEMA17W/2-Wall/2,NEMA17W/2+Wall,0])
  rotate([0,90,0])
    cylinder(r=Wall,h=Wall,$fn=20);
}
translate([NEMA17W/2-Wall/2,NEMA17W/2+1.5*Wall,0])
rotate([0,-90,-30]) {
translate([0,0,-4]) {
translate([0,0,-10])
  cylinder(d=3,h=10,$fn=20);
cylinder(d=6,h=20,$fn=20);
}
}
}
}
}
translate([-NEMA17W/2-Wall/2,0,0])
cube([Wall,NEMA17W+2*Wall,Wall],center=true);

