r=.75*25.4/2;
$fn=50;

R=5*r/4;
difference() {
union() {
difference() {
  translate([0,0,0.25*25.4/2])  
    cylinder(r=r,h=0.25*25.4,center=true);
  translate([0,0,R+1])
    sphere(r=R,center=true);
}
translate([0,0,0.5])
  cylinder(r=r+2,h=1,center=true);
}
cube([5.5,5.5,5.5],center=true);
}