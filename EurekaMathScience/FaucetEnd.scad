Wall=4; // mm
SensorW=30; // mm
SensorH=22; //mm
SensorL=13.5;//mm

PipeID=20.3;//mm
PipeOD=22.3;//mm

$fn=50;


rotate([0,180,0])
difference() {
union() {
  translate([0,0,SensorH*3/4])
    cylinder(d=PipeOD+Wall*2,h=SensorH/4);
  translate([0,0,SensorH*4/4])
    cylinder(d=PipeOD+Wall*2,h=SensorH/4);
  cylinder(d1=SensorW+Wall*2,d2=PipeOD+Wall*2,h=SensorH*3/4);
  translate([0,0,-SensorH/2])
    cylinder(d=SensorW+Wall*2,h=SensorH/2);
}
// Sensor
cube([SensorW,SensorL,SensorH],center=true);
rotate([0,0,90])
  cube([SensorW,SensorL,SensorH],center=true);
// Pipe
translate([0,0,SensorH+Wall])
  difference() {
  cylinder(d=PipeOD,h=SensorH,center=true);
  cylinder(d=PipeID,h=SensorH,center=true);
  }
//Wire hole  
translate([0,0,SensorH])  
  cylinder(r=Wall,h=SensorH*2,center=true);
}



