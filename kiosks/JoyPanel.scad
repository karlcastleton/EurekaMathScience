PanelW=6*25.4;//mm
PanelH=4*25.4;//mm
ButtonD=28;//mm
ButtonBezelD=32;//mm
JoyPlateW=97;//mm
JoyPlateH=65;//mm
MountBoltD=4;//mm
ButtonSpace=25.4*.25;//mm

module JoyMount(square=false) {
  JoyMountH=43.55;//mm
  JoyMountW=82.08;//mm
  JoyMountHole=32;//mm
  circle(d=JoyMountHole);
  for (i=[-1:2:1])
    for (j=[-1:2:1])  
  translate([i*JoyMountW/2,j*JoyMountH/2]) {  
    if (!square) 
        circle(d=MountBoltD);
    if (square)
        circle(d=MountBoltD,$fn=4);  
      }    
}

module ButtonMount() {
    circle(d=28,center=true);
}

module JoyButtonLayout() {
JoyMount(square=true);
translate([JoyPlateW/2+ButtonBezelD/2+ButtonSpace,ButtonBezelD/2+ButtonSpace])
  ButtonMount();
translate([JoyPlateW/2+ButtonBezelD/2+ButtonSpace,-ButtonBezelD/2-ButtonSpace])
  ButtonMount();
}

difference() {
  square([PanelW,PanelH],center=true);
  translate([-25.4*.75,0])  
    JoyButtonLayout();
  for (i=[-1:2:1])
    for (j=[-1:2:1]) {
      W=PanelW/2-ButtonSpace;
      H=PanelH/2-ButtonSpace;
      translate([i*W,j*H])      
      circle(d=MountBoltD,$fn=4); 
    } 
}

