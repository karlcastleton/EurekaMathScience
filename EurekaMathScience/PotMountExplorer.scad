PotD=25.4*5/16;
PotOffset=25.4*3/4;
PotFoot=PotOffset;
Wall=3;


difference() {
translate([0,0,-PotOffset*.25])
  cube([Wall,PotOffset,PotOffset*1.25],center=true);
  rotate([0,90,0])
    cylinder(d=PotD,h=Wall+.5,center=true,$fn=30);
}

translate([-PotOffset/2-Wall/2,0,-PotOffset+Wall*1.25])
difference() {
  rotate([0,90,0])
    cube([Wall,PotOffset,PotOffset*1.25],center=true);
  translate([0,5,0])  
    cylinder(d=4,h=Wall+.5,center=true,$fn=20);  
  translate([0,-5,0])  
    cylinder(d=4,h=Wall+.5,center=true,$fn=20);  
}
