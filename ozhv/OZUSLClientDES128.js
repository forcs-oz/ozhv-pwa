(function(){var ziK=function(){if(this.BEC){this.BEC();return;}var QC=ziK.prototype;QC.BEC=function(){this.IEF="";this.Utn="";};QC.setServerURL=function(VP){
this.IEF=VP;};QC.setServerIP=function(L2y){this.Utn=L2y;};QC.createSecureOutputStream=function(aX,sZ){var FLC=new ByteArray();var q6=0;var Ell;
for(Ell in sZ){q6++;}FLC.writeInt(q6);for(Ell in sZ){var vdt=sZ[Ell];this.Lf(FLC,Ell);this.Lf(FLC,vdt);}var iCv=new ByteArray();var cuV=new this.Y6n("forcs@#$",iCv);
cuV.write(aX,0,aX.length);FLC.writeBytes(iCv,0,iCv.length);FLC.position=0;return FLC;};QC.createSecureInputStream=function(aX,sZ){var size=aX.readInt();
for(var i=0; i<size; i++){var Ell=this.Dh(aX);var vdt=this.Dh(aX);sZ[Ell]=vdt;}var FLC=new ByteArray();var yBn=new this.U6n("forcs@#$",aX);var Tdf=new ByteArray();
yBn.read(Tdf,0,aX.length-aX.position);FLC.writeBytes(Tdf,0,Tdf.length);FLC.position=0;return FLC;};QC.Lf=function(aX,Cl){var i;var D2l=Cl.length;
aX.writeInt(D2l);var v;for(i=0; i<D2l; i++){v=Cl.charCodeAt(i);aX.writeByte((v>>>8)&255);aX.writeByte((v>>>0)&255);}};QC.Dh=function(aX){var D2l;
var z8y,yby;D2l=aX.readInt();if(D2l==-1){return "<NULL>";}else{if(D2l<-1){throw new Error("A malformed string has been read in a data input stream.");
}}var Cl="";var position=aX.position;for(var i=0; i<D2l; i++){z8y=aX[position+i*2];yby=aX[position+i*2+1];if((z8y|yby)<0){throw new Error("A malformed string has been read in a data input stream.");
}Cl+=String.fromCharCode((z8y<<8)+(yby<<0));}aX.position+=D2l*2;return Cl;};var U6n=function(jr,VMh){if(this.rQv){this.rQv(jr,VMh);return;}var CJC=U6n.prototype;
CJC.rQv=function(jr,VMh){this.BNQ=jr;this.ax=0;this.bx=0;this.cx=0;this.dx=0;this.si=0;this.gl=0;this.XGn=0;this.bWC=0;this.i=0;this.BDC=0;this.vJC=new Array();
this.kV4=0;this.lV4=0;this.apt=0;this.H5=VMh;this.B7C=new ByteArray();this.B7C.setLength(17);var b2C=new ByteArray();b2C.writeMultiByte(jr,"iso-8859-1");
this.B7C.writeBytes(b2C,0,b2C.length>16?16:b2C.length);this.B7C.set(16,0);this.clear();};CJC.clear=function(){this.ax=0;this.bx=0;this.cx=0;this.dx=0;
this.si=0;this.gl=0;this.XGn=0;this.bWC=0;this.i=0;this.BDC=0;this.kV4=0;this.lV4=0;this.apt=0;for(var i=0; i<8; i++){this.vJC[i]=0;}};CJC.cPy=function(){
var c=this.H5.readByte();if(c==-1){return -1;}this.Xq4();this.kV4=this.BDC>>>8;this.lV4=this.BDC&255;c=c^(this.kV4^this.lV4);for(this.apt=0; this.apt<=15; this.apt++){
this.B7C.set(this.apt,this.B7C.get(this.apt)^c);}return c;};CJC.read=function(b,off,uy,zrt){if(b===undefined){b=null;}if(off===undefined){off=-1;
}if(uy===undefined){uy=-1;}if(zrt===undefined){zrt=-1;}if((b==null)||this.H5==null){E_C("Null point exception");return -1;}if(uy<1){return 0;
}this.H5.readBytes(b,off,uy);var rt=uy;if(rt<=0){return rt;}var c=0;var i=0;for(i=0; i<rt; i++){this.Xq4();this.kV4=this.BDC>>>8;this.lV4=this.BDC&255;
c=b.get(i+off);c=c^(this.kV4^this.lV4);for(var j=0; j<16; j++){this.B7C.set(j,this.B7C.get(j)^c);}b.set(i+off,c);}return rt;};CJC.PtC=function(){
return 0;};CJC.Ev6=function(){this.dx=this.XGn+this.i;this.ax=this.vJC[this.i];this.cx=346;this.bx=20021;this.gl=this.ax;this.ax=this.si;this.si=this.gl;
this.gl=this.ax;this.ax=this.dx;this.dx=this.gl;this.ax=this.ax*this.bx&65535;this.gl=this.ax;this.ax=this.cx;this.cx=this.gl;if(this.ax!=0){
this.ax=(this.ax*this.si)&65535;this.cx=(this.ax+this.cx)&65535;}this.gl=this.ax;this.ax=this.si;this.si=this.gl;this.ax=(this.ax*this.bx)&65535;
this.dx=(this.cx+this.dx)&65535;this.ax=this.ax+1;this.XGn=this.dx;this.vJC[this.i]=this.ax;this.bWC=this.ax^this.dx;this.i=this.i+1;};CJC.Xq4=function(){
this.vJC[0]=(this.B7C.get(0)*256)+this.B7C.get(1);this.Ev6();this.BDC=this.bWC;this.vJC[1]=this.vJC[0]^((this.B7C.get(2)*256)+this.B7C.get(3));
this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[2]=this.vJC[1]^((this.B7C.get(4)*256)+this.B7C.get(5));this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[3]=this.vJC[2]^((this.B7C.get(6)*256)+this.B7C.get(7));
this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[4]=this.vJC[3]^((this.B7C.get(8)*256)+this.B7C.get(9));this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[5]=this.vJC[4]^((this.B7C.get(10)*256)+this.B7C.get(11));
this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[6]=this.vJC[5]^((this.B7C.get(12)*256)+this.B7C.get(13));this.Ev6();this.BDC=this.BDC^this.bWC;
this.vJC[7]=this.vJC[6]^((this.B7C.get(14)*256)+this.B7C.get(15));this.Ev6();this.BDC=this.BDC^this.bWC;this.i=0;};this.rQv(jr,VMh);};QC.U6n=U6n;
var Y6n=function(jr,Tzj){if(this.EQv){this.EQv(jr,Tzj);return;}var CJC=Y6n.prototype;CJC.EQv=function(jr,Tzj){this.ax=0;this.bx=0;this.cx=0;this.dx=0;
this.si=0;this.gl=0;this.XGn=0;this.bWC=0;this.i=0;this.BDC=0;this.vJC=new Array();this.kV4=0;this.lV4=0;this.apt=0;this.bd=Tzj;this.vJC.length=8;
this.B7C=new ByteArray();this.B7C.setLength(17);var b2C=new ByteArray();b2C.writeMultiByte(jr,"iso-8859-1");this.B7C.writeBytes(b2C,0,b2C.length>16?16:b2C.length);
this.B7C.set(16,0);this.clear();};CJC.clear=function(){this.ax=0;this.bx=0;this.cx=0;this.dx=0;this.si=0;this.gl=0;this.XGn=0;this.bWC=0;this.i=0;
this.BDC=0;this.kV4=0;this.lV4=0;this.apt=0;for(var i=0; i<8; i++){this.vJC[i]=0;}};CJC.cfC=function(b){this.Xq4();this.kV4=this.BDC>>>8;this.lV4=this.BDC&255;
for(this.apt=0; this.apt<=15; this.apt++){this.B7C.set(this.apt,this.B7C.get(this.apt)^b);}b=b^(this.kV4^this.lV4);this.bd.writeByte(b);};CJC.write=function(b,off,uy){
if(b===undefined){b=null;}if(off===undefined){off=-1;}if(uy===undefined){uy=-1;}if((b==null)||this.bd==null){E_C("Null point exception");return;
}if(uy<1){return;}var c=0;var Kz4=new ByteArray();Kz4.setLength(uy);for(var i=0; i<uy; i++){this.Xq4();this.kV4=this.BDC>>>8;this.lV4=this.BDC&255;
c=b.get(i+off);for(var j=0; j<16; j++){this.B7C.set(j,this.B7C.get(j)^c);}c=c^(this.kV4^this.lV4);Kz4.set(i,c);}this.bd.writeBytes(Kz4,0,uy);
Kz4=null;};CJC.flush=function(){};CJC.close=function(){};CJC.Ev6=function(){this.dx=this.XGn+this.i;this.ax=this.vJC[this.i];this.cx=346;this.bx=20021;
this.gl=this.ax;this.ax=this.si;this.si=this.gl;this.gl=this.ax;this.ax=this.dx;this.dx=this.gl;this.ax=this.ax*this.bx&65535;this.gl=this.ax;
this.ax=this.cx;this.cx=this.gl;if(this.ax!=0){this.ax=(this.ax*this.si)&65535;this.cx=(this.ax+this.cx)&65535;}this.gl=this.ax;this.ax=this.si;
this.si=this.gl;this.ax=(this.ax*this.bx)&65535;this.dx=(this.cx+this.dx)&65535;this.ax=this.ax+1;this.XGn=this.dx;this.vJC[this.i]=this.ax;this.bWC=this.ax^this.dx;
this.i=this.i+1;};CJC.Xq4=function(){this.vJC[0]=(this.B7C.get(0)*256)+this.B7C.get(1);this.Ev6();this.BDC=this.bWC;this.vJC[1]=this.vJC[0]^((this.B7C.get(2)*256)+this.B7C.get(3));
this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[2]=this.vJC[1]^((this.B7C.get(4)*256)+this.B7C.get(5));this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[3]=this.vJC[2]^((this.B7C.get(6)*256)+this.B7C.get(7));
this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[4]=this.vJC[3]^((this.B7C.get(8)*256)+this.B7C.get(9));this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[5]=this.vJC[4]^((this.B7C.get(10)*256)+this.B7C.get(11));
this.Ev6();this.BDC=this.BDC^this.bWC;this.vJC[6]=this.vJC[5]^((this.B7C.get(12)*256)+this.B7C.get(13));this.Ev6();this.BDC=this.BDC^this.bWC;
this.vJC[7]=this.vJC[6]^((this.B7C.get(14)*256)+this.B7C.get(15));this.Ev6();this.BDC=this.BDC^this.bWC;this.i=0;};this.EQv(jr,Tzj);};QC.Y6n=Y6n;
this.BEC();};return ziK;})();
