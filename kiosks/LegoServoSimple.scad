W=25.4*1.25;//mm
H=25.4*5/8;//mm
T=25.4*3/8;//mm
Wall=25.4*3/64;//mm
StudH=25.4*3/32;//mm

module lego4by2() {
  difference() {
  translate([0,0,T/2])
    cube([W,H,T],center=true);
  translate([0,0,StudH/2])  
    cube([W-2*Wall,H-2*Wall,StudH],  center=true);
  }
  translate([0,0,Wall/2])
  cube([2*Wall,H,Wall],center=true);
}

module servo() {
servoH=25.4*1/2;//mm
servoW=25.4*15/16;//mm
servoT=25.4*7/8;//mm
servoTabH=25.4*1/8;//mm
servoTabW=25.4*1/2;//mm
servoTabT=25.4*3/16;//mm
servoTabOffset=25.4*5/32;//mm
translate([servoTabOffset,0,0])    
union() {    
translate([servoW/2-servoTabOffset,0,servoTabH+servoT/2])
  cube([servoW,servoH,servoT],center=true);
translate([servoTabH/2,0,servoTabT/2])
  cube([servoTabH,servoH,servoTabT],center=true);
}
}  

difference() {
  lego4by2();
  translate([-W/2+25.4*1/8,0,0]) 
    servo();
}