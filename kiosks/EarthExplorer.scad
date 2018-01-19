D=4.5*25.4;//mm
Wall=2;//mm
DMount=22.5;//mmr
RBolt=22;//mm
DBolt=3.5;//mm
DSeed=10;//mm
PipeID=.75*25.4;//mm

module wireLoop(up=5,LoopDiameter=7/*mm*/) {
WireDiameter=25.4*3/32; //mm
N=16;
C=LoopDiameter*3.14159;
H=C*1.2/N;
    translate([-up,LoopDiameter/2,0])
      cylinder(d=WireDiameter,h=30,$fn=15,center=true);
    translate([-up,-LoopDiameter/2,0])
      cylinder(d=WireDiameter,h=30,$fn=15,center=true);
}

module setScrew() {
    AxleD=19;//mm
    boltD=4;//mm
    boltFlat=9;//mm
    boltNutT=4;//mm
    boltHoleT=12;//mm
    MotorAxleD=25.4*5/16;//mm
    MotorAxleT=25.4*19/32;//mm
     translate([0,MotorAxleD/2+boltNutT/2,-AxleD/3]){
            cube([boltFlat,boltNutT,boltFlat*1.4],center=true);
            translate([0,AxleD/4,0])  
              rotate([90,0,0])
                cylinder(d=boltD,h=AxleD/2,center=true,$fn=20);
     }  
}

 module wireWheel(){
  H=25.4*5/8;
  difference(){  
      cylinder(d=20.4,h=H); 
    cylinder(h=H,d=25.4*5/16+.5,$fn=20);
    translate([0,0,12])  
          setScrew();
  }
}

module potAttach() {
  H=25.4*1/4;
  difference(){  
    cylinder(d=25.4,h=H); 
    cylinder(h=H,d=25.4*7/32+.5,$fn=20);
  }
}

module potSide() {
  difference() {
    potAttach();
    rotate([90,90,0]) 
      wireLoop(up=25.4*2/16,LoopDiameter=11);
  }
}
module motorSide() {
  difference() {
    wireWheel();
    rotate([90,90,0]) 
      wireLoop(up=25.4*5/8/2,LoopDiameter=11);
  }
}


motorSide();