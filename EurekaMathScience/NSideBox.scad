
module yGaps(T,H) {
        translate([0,H/8])  
          square([T,H/4]);
        translate([0,H/2+H/8])  
          square([T,H/4]);
        translate([0,H+H/8])  
          square([T,H/4]);
}

module xGaps(T,W) {
        translate([W/8,0])  
          square([W/4,T]);
        translate([W/2+W/8,0])  
          square([W/4,T]);
        translate([W+W/8,0])  
          square([W/4,T]);
} 

module side(W,H,T,doTop=false,doBottom=true,doLeft=true,doRight=true,shiftTop=true,shiftBottom=true,shiftLeft=true,shiftRight=false) {
  topAdder=shiftTop?-H/4:0;
  bottomAdder=shiftBottom?-H/4:0;
  leftAdder=shiftLeft?-W/4:0;
  rightAdder=shiftRight?-W/4:0;
  difference() {  
    square([W,H]);
    if (doBottom) {
      translate([0,bottomAdder])
        yGaps(T,H);  
    }
    if (doRight) {  
      translate([rightAdder,0])
        xGaps(T,W);
    }
    if (doLeft) {
      translate([leftAdder,H-T+.1])
        xGaps(T,W);
    }
    if (doTop) {  
      translate([W-T+.1,topAdder])
        yGaps(T,H);
    }
  }
}

module box(L,W,H,T,Gap) {
  for (xm=[0:1]) {
    translate([xm*(L+Gap),0])  
        side(L,W,T);
  }
  for (xm=[0:1]) {
    translate([xm*(L+Gap),W+Gap])  
      side(L,H,T);
  }
  translate([-W-Gap,0])
  side(W,H,T,doTop=true,shiftBottom=false,shiftTop=false,shiftLeft=false);
}

module nSideBox(N,L,W,H,T,Gap,doTop=false) {
  for (n=[0:N-1]) {
    translate([0,(W+Gap)*n])  
      side(L,W,T,doTop);
  }
  a=360.0/N;
  ang=180.0-a;
  rad=(W/2.0)/cos(ang);
  for (r=[0:360/N:360] ) {
      rotate([0,0,r])
        translate([0,rad,0])
          rotate([0,0,90])
            translate([0,-W/2-W/4,0])
              yGaps(T,W);
  }
}


//box(2.25*25.4,3.25*25.4,4.25*25.4,25.4/8,25.4/16);
nSideBox(4,2.25*25.4,3.25*25.4,4.25*25.4,25.4/8,25.4/16);