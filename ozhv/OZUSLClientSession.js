(function(){var z7R=function(){if(this.BEC){this.BEC();return;}var QC=z7R.prototype;QC.BEC=function(){this.IEF="";this.Utn="";};QC.setServerURL=function(VP){
this.IEF=VP;};QC.setServerIP=function(L2y){this.Utn=L2y;};QC.createSecureOutputStream=function(aX,sZ){var FLC=new ByteArray();var q6=0;var Ell;
for(Ell in sZ){q6++;}FLC.writeInt(q6);for(Ell in sZ){var vdt=sZ[Ell];this.Lf(FLC,Ell);this.Lf(FLC,vdt);}FLC.writeBytes(aX,0,aX.length);FLC.position=0;
return FLC;};QC.createSecureInputStream=function(aX,sZ){var size=aX.readInt();for(var i=0; i<size; i++){var Ell=this.Dh(aX);var vdt=this.Dh(aX);
sZ[Ell]=vdt;}var FLC=new ByteArray();FLC.writeBytes(aX,aX.position,aX.length-aX.position);FLC.position=0;return FLC;};QC.Lf=function(aX,Cl){var i;
var D2l=Cl.length;aX.writeInt(D2l);var v;for(i=0; i<D2l; i++){v=Cl.charCodeAt(i);aX.writeByte((v>>>8)&255);aX.writeByte((v>>>0)&255);}};QC.Dh=function(aX){
var D2l;var z8y,yby;D2l=aX.readInt();if(D2l==-1){return "<NULL>";}else{if(D2l<-1){throw new Error("A malformed string has been read in a data input stream.");
}}var Cl="";var position=aX.position;for(var i=0; i<D2l; i++){z8y=aX[position+i*2];yby=aX[position+i*2+1];if((z8y|yby)<0){throw new Error("A malformed string has been read in a data input stream.");
}Cl+=String.fromCharCode((z8y<<8)+(yby<<0));}aX.position+=D2l*2;return Cl;};this.BEC();};return z7R;})();
