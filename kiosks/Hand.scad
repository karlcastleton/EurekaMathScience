$fn=50;

module meta(d,h,a) {
    hull() {
      sphere(d=d[4]);
      translate([h[3],0,0])  
        sphere(d=d[3]);
    }                   
}

module finger(d,h,a) {
    translate([h[3],0,0])  
    rotate([0,-a[2],0])
    union() {               
      hull() {
        sphere(d=d[3]);
        translate([h[2],0,0])  
          sphere(d=d[2]);
      }                   
      translate([h[2],0,0])  
      rotate([0,-a[1],0])
        union() {
          hull() {
            sphere(d=d[2]);
            translate([h[1],0,0])  
              sphere(d=d[1]);
          }                   
          translate([h[1],0,0])  
            rotate([0,-a[0],0])
              hull() {
                sphere(d=d[1]);
                translate([h[0],0,0])  
                  sphere(d=d[0]);
              }
        }
    }
}

module hand(angles,spread) {
LMeta=85;
DMeta=28;
LIndex=125.0+LMeta; //mm
LPointer=100.0+LMeta;//mm
LRing=110.0+LMeta;//mm
LPinky=85.0+LMeta;//mm
LThumb=100.0+LMeta;//mm
SPointer=LPointer/LIndex;
SRing=LRing/LIndex;
SPinky=LPinky/LIndex;
SThumb=LThumb/LIndex;
Lengths=[25,35,60,75];//mm
Diameters=[20,23,DMeta,DMeta,DMeta];//mm
union() {    
rotate([0,0,90-15+spread])
  scale(SThumb)
    finger(Diameters,Lengths,angles[0]);
translate([0,DMeta,0])
  scale(SPointer)
    rotate([0,0,spread])
      finger(Diameters,Lengths,angles[1]);
finger(Diameters,Lengths,angles[2]);
translate([0,-DMeta,0])
  rotate([0,0,-spread])
    scale(SRing)
      finger(Diameters,Lengths,angles[3]);
translate([0,-DMeta*2,0])
  rotate([0,0,-spread*1.5])
    scale(SPinky)
      finger(Diameters,Lengths,angles[4]);
hull() {
rotate([0,0,90-15+spread])
  scale(SThumb)
    meta(Diameters,Lengths,angles[0]);
translate([0,DMeta,0])
  scale(SPointer)
    rotate([0,0,spread])
      meta(Diameters,Lengths,angles[1]);
meta(Diameters,Lengths,angles[2]);
translate([0,-DMeta,0])
  rotate([0,0,-spread])
    scale(SRing)
      meta(Diameters,Lengths,angles[3]);
translate([0,-DMeta*2,0])
  rotate([0,0,-spread*1.5])
    scale(SPinky)
      meta(Diameters,Lengths,angles[4]);
 hull(){
   translate([-40,-50,0])  
     sphere(d=DMeta);
   translate([-40,50,0])  
     sphere(d=DMeta);
 }   
}
}
}


t=$t;
//t=0.5;
angles=[
[90*t,90*t,0*t], // thumb
[90*t,90*t,90*t], // pointer
[90*t,90*t,90*t], // index
[90*t,90*t,90*t], // ring
[90*t,90*t,90*t] // pinky
];
translate([0,-200,0])
  hand(angles,15*(1.0-t));
translate([0,200,0])
  mirror([0,-1,0])
    hand(angles,15*(1.0-t));