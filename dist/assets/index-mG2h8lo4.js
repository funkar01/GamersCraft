(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="184",Lh=0,tc=1,Dh=2,mr=1,Cl=2,Ts=3,Qn=0,Xt=1,Ut=2,$n=0,Ji=1,Yn=2,nc=3,ic=4,Nh=5,bi=100,Uh=101,Fh=102,Oh=103,Bh=104,Gh=200,zh=201,kh=202,Vh=203,Eo=204,To=205,Hh=206,Wh=207,Xh=208,qh=209,Yh=210,jh=211,Kh=212,$h=213,Zh=214,Ao=0,Ro=1,Co=2,ns=3,Po=4,Io=5,Lo=6,Do=7,Pl=0,Jh=1,Qh=2,Cn=0,Il=1,Ll=2,Dl=3,Nl=4,Ul=5,Fl=6,Ol=7,sc="attached",eu="detached",Bl=300,Ci=301,is=302,Br=303,Gr=304,Pr=306,gi=1e3,An=1001,Sr=1002,Ft=1003,Gl=1004,As=1005,Ot=1006,gr=1007,jn=1008,an=1009,zl=1010,kl=1011,Ns=1012,Sa=1013,Ln=1014,fn=1015,ei=1016,wa=1017,ba=1018,Us=1020,Vl=35902,Hl=35899,Wl=1021,Xl=1022,pn=1023,ti=1026,Ti=1027,Ea=1028,Ta=1029,Pi=1030,Aa=1031,Ra=1033,_r=33776,xr=33777,vr=33778,Mr=33779,No=35840,Uo=35841,Fo=35842,Oo=35843,Bo=36196,Go=37492,zo=37496,ko=37488,Vo=37489,wr=37490,Ho=37491,Wo=37808,Xo=37809,qo=37810,Yo=37811,jo=37812,Ko=37813,$o=37814,Zo=37815,Jo=37816,Qo=37817,ea=37818,ta=37819,na=37820,ia=37821,sa=36492,ra=36494,oa=36495,aa=36283,ca=36284,br=36285,la=36286,Fs=2300,Os=2301,zr=2302,rc=2303,oc=2400,ac=2401,cc=2402,tu=2500,nu=0,ql=1,ha=2,iu=3200,ua=0,su=1,fi="",Ht="srgb",cn="srgb-linear",Er="linear",ft="srgb",Fi=7680,lc=519,ru=512,ou=513,au=514,Ca=515,cu=516,lu=517,Pa=518,hu=519,da=35044,hc="300 es",Rn=2e3,Bs=2001;function uu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function du(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Gs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fu(){const s=Gs("canvas");return s.style.display="block",s}const uc={};function Tr(...s){const e="THREE."+s.shift();console.log(e,...s)}function Yl(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Re(...s){s=Yl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ke(...s){s=Yl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fa(...s){const e=s.join(" ");e in uc||(uc[e]=!0,Re(...s))}function pu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const mu={[Ao]:Ro,[Co]:Lo,[Po]:Do,[ns]:Io,[Ro]:Ao,[Lo]:Co,[Do]:Po,[Io]:ns};class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const Ps=Math.PI/180,ss=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function st(s,e,t){return Math.max(e,Math.min(t,s))}function Ia(s,e){return(s%e+e)%e}function gu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _u(s,e,t){return s!==e?(t-s)/(e-s):0}function Is(s,e,t){return(1-t)*s+t*e}function xu(s,e,t,n){return Is(s,e,1-Math.exp(-t*n))}function vu(s,e=1){return e-Math.abs(Ia(s,e*2)-e)}function Mu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function yu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Su(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wu(s,e){return s+Math.random()*(e-s)}function bu(s){return s*(.5-Math.random())}function Eu(s){s!==void 0&&(dc=s);let e=dc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tu(s){return s*Ps}function Au(s){return s*ss}function Ru(s){return(s&s-1)===0&&s!==0}function Cu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Iu(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rs={DEG2RAD:Ps,RAD2DEG:ss,generateUUID:Mn,clamp:st,euclideanModulo:Ia,mapLinear:gu,inverseLerp:_u,lerp:Is,damp:xu,pingpong:vu,smoothstep:Mu,smootherstep:yu,randInt:Su,randFloat:wu,randFloatSpread:bu,seededRandom:Eu,degToRad:Tu,radToDeg:Au,isPowerOfTwo:Ru,ceilPowerOfTwo:Cu,floorPowerOfTwo:Pu,setQuaternionFromProperEuler:Iu,normalize:pt,denormalize:xn},Ya=class Ya{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ya.prototype.isVector2=!0;let Ze=Ya;class Qt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,a=Math.sin(a*M)/S,c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+_*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+_*a;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ja=class ja{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ja.prototype.isVector3=!0;let P=ja;const kr=new P,fc=new Qt,Ka=class Ka{constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],y=i[7],R=i[2],E=i[5],C=i[8];return r[0]=o*_+a*M+c*R,r[3]=o*m+a*S+c*E,r[6]=o*p+a*y+c*C,r[1]=l*_+h*M+d*R,r[4]=l*m+h*S+d*E,r[7]=l*p+h*y+d*C,r[2]=u*_+f*M+g*R,r[5]=u*m+f*S+g*E,r[8]=u*p+f*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ka.prototype.isMatrix3=!0;let qe=Ka;const Vr=new qe,pc=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lu(){const s={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Er:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return fa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return fa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[cn]:{primaries:e,whitePoint:n,transfer:Er,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}const it=Lu();function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Oi;class Du{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oi===void 0&&(Oi=Gs("canvas")),Oi.width=e.width,Oi.height=e.height;const i=Oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nu=0;class La{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hr(i[o].image)):r.push(Hr(i[o]))}else r=Hr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Du.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Uu=0;const Wr=new P;class Bt extends Ii{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=An,i=An,r=Ot,o=jn,a=pn,c=an,l=Bt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Mn(),this.name="",this.source=new La(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wr).x}get height(){return this.source.getSize(Wr).y}get depth(){return this.source.getSize(Wr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Bl;Bt.DEFAULT_ANISOTROPY=1;const $a=class $a{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,y=(f+1)/2,R=(p+1)/2,E=(h+u)/4,C=(d+_)/4,x=(g+m)/4;return S>y&&S>R?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=C/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=x/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$a.prototype.isVector4=!0;let Mt=$a;class Fu extends Ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Bt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new La(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jl extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ou extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cr=class Cr{constructor(e,t,n,i,r,o,a,c,l,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,u,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bu,e,Gu)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),oi.crossVectors(n,rn),oi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),oi.crossVectors(n,rn)),oi.normalize(),ks.crossVectors(rn,oi),i[0]=oi.x,i[4]=ks.x,i[8]=rn.x,i[1]=oi.y,i[5]=ks.y,i[9]=rn.y,i[2]=oi.z,i[6]=ks.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],y=n[11],R=n[15],E=i[0],C=i[4],x=i[8],A=i[12],L=i[1],I=i[5],U=i[9],H=i[13],K=i[2],D=i[6],W=i[10],V=i[14],ie=i[3],se=i[7],ue=i[11],ge=i[15];return r[0]=o*E+a*L+c*K+l*ie,r[4]=o*C+a*I+c*D+l*se,r[8]=o*x+a*U+c*W+l*ue,r[12]=o*A+a*H+c*V+l*ge,r[1]=h*E+d*L+u*K+f*ie,r[5]=h*C+d*I+u*D+f*se,r[9]=h*x+d*U+u*W+f*ue,r[13]=h*A+d*H+u*V+f*ge,r[2]=g*E+_*L+m*K+p*ie,r[6]=g*C+_*I+m*D+p*se,r[10]=g*x+_*U+m*W+p*ue,r[14]=g*A+_*H+m*V+p*ge,r[3]=M*E+S*L+y*K+R*ie,r[7]=M*C+S*I+y*D+R*se,r[11]=M*x+S*U+y*W+R*ue,r[15]=M*A+S*H+y*V+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=c*f-l*u,S=a*f-l*d,y=a*u-c*d,R=o*f-l*h,E=o*u-c*h,C=o*d-a*h;return t*(_*M-m*S+p*y)-n*(g*M-m*R+p*E)+i*(g*S-_*R+p*C)-r*(g*y-_*E+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*a-n*o,S=t*c-i*o,y=t*l-r*o,R=n*c-i*a,E=n*l-r*a,C=i*l-r*c,x=h*_-d*g,A=h*m-u*g,L=h*p-f*g,I=d*m-u*_,U=d*p-f*_,H=u*p-f*m,K=M*H-S*U+y*I+R*L-E*A+C*x;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/K;return e[0]=(a*H-c*U+l*I)*D,e[1]=(i*U-n*H-r*I)*D,e[2]=(_*C-m*E+p*R)*D,e[3]=(u*E-d*C-f*R)*D,e[4]=(c*L-o*H-l*A)*D,e[5]=(t*H-i*L+r*A)*D,e[6]=(m*y-g*C-p*S)*D,e[7]=(h*C-u*y+f*S)*D,e[8]=(o*U-a*L+l*x)*D,e[9]=(n*L-t*U-r*x)*D,e[10]=(g*E-_*y+p*M)*D,e[11]=(d*y-h*E-f*M)*D,e[12]=(a*A-o*I-c*x)*D,e[13]=(t*I-n*A+i*x)*D,e[14]=(_*S-g*R-m*M)*D,e[15]=(h*R-d*S+u*M)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,M=c*l,S=c*h,y=c*d,R=n.x,E=n.y,C=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+y)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+S)*C,i[9]=(m-M)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Bi.set(i[0],i[1],i[2]).length();const a=Bi.set(i[4],i[5],i[6]).length(),c=Bi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),mn.copy(this);const l=1/o,h=1/a,d=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=Rn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Rn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Bs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Rn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Rn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Bs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Cr.prototype.isMatrix4=!0;let et=Cr;const Bi=new P,mn=new et,Bu=new P(0,0,0),Gu=new P(1,1,1),oi=new P,ks=new P,rn=new P,gc=new et,_c=new Qt;class _i{constructor(e=0,t=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _c.setFromEuler(this),this.setFromQuaternion(_c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zu=0;const xc=new P,Gi=new Qt,Gn=new et,Vs=new P,ms=new P,ku=new P,Vu=new Qt,vc=new P(1,0,0),Mc=new P(0,1,0),yc=new P(0,0,1),Sc={type:"added"},Hu={type:"removed"},zi={type:"childadded",child:null},Xr={type:"childremoved",child:null};class rt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new P,t=new _i,n=new Qt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new qe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return xc.copy(e).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ms,Vs,this.up):Gn.lookAt(Vs,ms,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sc),zi.child=e,this.dispatchEvent(zi),zi.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sc),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,ku),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DEFAULT_UP=new P(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class He extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wu={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Yr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Ia(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yr(o,r,e+1/3),this.g=Yr(o,r,e),this.b=Yr(o,r,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=$l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return it.workingToColorSpace(jt.copy(this),e),Math.round(st(jt.r*255,0,255))*65536+Math.round(st(jt.g*255,0,255))*256+Math.round(st(jt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ht){it.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Hs);const n=Is(ai.h,Hs.h,t),i=Is(ai.s,Hs.s,t),r=Is(ai.l,Hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Le;Le.NAMES=$l;class Da{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new Da(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Na extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gn=new P,zn=new P,jr=new P,kn=new P,ki=new P,Vi=new P,wc=new P,Kr=new P,$r=new P,Zr=new P,Jr=new Mt,Qr=new Mt,eo=new Mt;class vn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gn.subVectors(i,t),zn.subVectors(n,t),jr.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(zn),c=gn.dot(jr),l=zn.dot(zn),h=zn.dot(jr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Jr.setScalar(0),Qr.setScalar(0),eo.setScalar(0),Jr.fromBufferAttribute(e,t),Qr.fromBufferAttribute(e,n),eo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Jr,r.x),o.addScaledVector(Qr,r.y),o.addScaledVector(eo,r.z),o}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),zn.subVectors(e,t),gn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ki.subVectors(i,n),Vi.subVectors(r,n),Kr.subVectors(e,n);const c=ki.dot(Kr),l=Vi.dot(Kr);if(c<=0&&l<=0)return t.copy(n);$r.subVectors(e,i);const h=ki.dot($r),d=Vi.dot($r);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ki,o);Zr.subVectors(e,r);const f=ki.dot(Zr),g=Vi.dot(Zr);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Vi,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return wc.subVectors(r,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(wc,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(ki,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Xs.subVectors(this.max,gs),Hi.subVectors(e.a,gs),Wi.subVectors(e.b,gs),Xi.subVectors(e.c,gs),ci.subVectors(Wi,Hi),li.subVectors(Xi,Wi),xi.subVectors(Hi,Xi);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-xi.z,xi.y,ci.z,0,-ci.x,li.z,0,-li.x,xi.z,0,-xi.x,-ci.y,ci.x,0,-li.y,li.x,0,-xi.y,xi.x,0];return!to(t,Hi,Wi,Xi,Xs)||(t=[1,0,0,0,1,0,0,0,1],!to(t,Hi,Wi,Xi,Xs))?!1:(qs.crossVectors(ci,li),t=[qs.x,qs.y,qs.z],to(t,Hi,Wi,Xi,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,Ws=new Nn,Hi=new P,Wi=new P,Xi=new P,ci=new P,li=new P,xi=new P,gs=new P,Xs=new P,qs=new P,vi=new P;function to(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vi.fromArray(s,r);const a=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const It=new P,Ys=new Ze;let Xu=0;class Lt extends Ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=da,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==da&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zl extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jl extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const qu=new Nn,_s=new P,no=new P;class Un{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(no)),this.expandByPoint(_s.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Yu=0;const un=new et,io=new rt,qi=new P,on=new Nn,xs=new Nn,kt=new P;class bt extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?Jl:Zl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(on.min,xs.min),on.expandByPoint(kt),kt.addVectors(on.max,xs.max),on.expandByPoint(kt)):(on.expandByPoint(xs.min),on.expandByPoint(xs.max))}on.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(e,l),kt.add(qi)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new P,c[x]=new P;const l=new P,h=new P,d=new P,u=new Ze,f=new Ze,g=new Ze,_=new P,m=new P;function p(x,A,L){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,L),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[x].add(_),a[A].add(_),a[L].add(_),c[x].add(m),c[A].add(m),c[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,A=M.length;x<A;++x){const L=M[x],I=L.start,U=L.count;for(let H=I,K=I+U;H<K;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new P,y=new P,R=new P,E=new P;function C(x){R.fromBufferAttribute(i,x),E.copy(R);const A=a[x];S.copy(A),S.sub(R.multiplyScalar(R.dot(A))).normalize(),y.crossVectors(E,A);const I=y.dot(c[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,I)}for(let x=0,A=M.length;x<A;++x){const L=M[x],I=L.start,U=L.count;for(let H=I,K=I+U;H<K;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Lt(u,h,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ju{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=da,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new P;class Ua{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ua(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ku=0;class In extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hn=new P,so=new P,js=new P,hi=new P,ro=new P,Ks=new P,oo=new P;class Ir{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){so.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(so);const r=e.distanceTo(t)*.5,o=-this.direction.dot(js),a=hi.dot(this.direction),c=-hi.dot(js),l=hi.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(so).addScaledVector(js,u),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){ro.subVectors(t,e),Ks.subVectors(n,e),oo.crossVectors(ro,Ks);let o=this.direction.dot(oo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const c=a*this.direction.dot(Ks.crossVectors(hi,Ks));if(c<0)return null;const l=a*this.direction.dot(ro.cross(hi));if(l<0||c+l>o)return null;const h=-a*hi.dot(oo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bc=new et,Mi=new Ir,$s=new Un,Ec=new P,Zs=new P,Js=new P,Qs=new P,ao=new P,er=new P,Tc=new P,tr=new P;class B extends rt{constructor(e=new bt,t=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(ao.fromBufferAttribute(d,e),o?er.addScaledVector(ao,h):er.addScaledVector(ao.sub(t),h))}t.add(er)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!($s.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere($s,Ec)===null||Mi.origin.distanceToSquared(Ec)>(e.far-e.near)**2))&&(bc.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(bc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,R=S;y<R;y+=3){const E=a.getX(y),C=a.getX(y+1),x=a.getX(y+2);i=nr(this,p,e,n,l,h,d,E,C,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=nr(this,o,e,n,l,h,d,M,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,R=S;y<R;y+=3){const E=y,C=y+1,x=y+2;i=nr(this,p,e,n,l,h,d,E,C,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,y=m+2;i=nr(this,o,e,n,l,h,d,M,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function $u(s,e,t,n,i,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Qn,a),c===null)return null;tr.copy(a),tr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(tr);return l<t.near||l>t.far?null:{distance:l,point:tr.clone(),object:s}}function nr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Zs),s.getVertexPosition(c,Js),s.getVertexPosition(l,Qs);const h=$u(s,e,t,n,Zs,Js,Qs,Tc);if(h){const d=new P;vn.getBarycoord(Tc,Zs,Js,Qs,d),i&&(h.uv=vn.getInterpolatedAttribute(i,a,c,l,d,new Ze)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,c,l,d,new Ze)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new P,materialIndex:0};vn.getNormal(Zs,Js,Qs,u.normal),h.face=u,h.barycoord=d}return h}const vs=new Mt,Ac=new Mt,Rc=new Mt,Zu=new Mt,Cc=new et,ir=new P,co=new Un,Pc=new et,lo=new Ir;class Ju extends B{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sc,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ir),this.boundingBox.expandByPoint(ir)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ir),this.boundingSphere.expandByPoint(ir)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(i),e.ray.intersectsSphere(co)!==!1&&(Pc.copy(i).invert(),lo.copy(e.ray).applyMatrix4(Pc),!(this.boundingBox!==null&&lo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ac.fromBufferAttribute(i.attributes.skinIndex,e),Rc.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(vs.copy(t),t.set(0,0,0,0)):(vs.set(...t,1),t.set(0,0,0)),vs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Rc.getComponent(r);if(o!==0){const a=Ac.getComponent(r);Cc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Zu.copy(vs).applyMatrix4(Cc),o)}}return t.isVector4&&(t.w=vs.w),t.applyMatrix4(this.bindMatrixInverse)}}class Ql extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fa extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Ft,h=Ft,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ic=new et,Qu=new et;class Oa{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Qu;Ic.multiplyMatrices(a,t[r]),Ic.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fa(t,e,e,pn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Re("Skeleton: No bone found with UUID:",r),o=new Ql),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class pa extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new et,Lc=new et,sr=[],Dc=new Nn,ed=new et,Ms=new B,ys=new Un;class ma extends B{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ed)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Dc.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Dc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),ys.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),e.ray.intersectsSphere(ys)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Yi),Lc.multiplyMatrices(n,Yi),Ms.matrixWorld=Lc,Ms.raycast(e,sr);for(let o=0,a=sr.length;o<a;o++){const c=sr[o];c.instanceId=r,c.object=this,t.push(c)}sr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fa(new Float32Array(i*this.count),i,this.count,Ea,fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ho=new P,td=new P,nd=new qe;class wi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ho.subVectors(n,t).cross(td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nd.getNormalMatrix(e),i=this.coplanarPoint(ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Un,id=new Ze(.5,.5),rr=new P;class Ba{constructor(e=new wi,t=new wi,n=new wi,i=new wi,r=new wi,o=new wi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],S=r[13],y=r[14],R=r[15];if(i[0].setComponents(l-o,f-h,p-g,R-M).normalize(),i[1].setComponents(l+o,f+h,p+g,R+M).normalize(),i[2].setComponents(l+a,f+d,p+_,R+S).normalize(),i[3].setComponents(l-a,f-d,p-_,R-S).normalize(),n)i[4].setComponents(c,u,m,y).normalize(),i[5].setComponents(l-c,f-u,p-m,R-y).normalize();else if(i[4].setComponents(l-c,f-u,p-m,R-y).normalize(),t===Rn)i[5].setComponents(l+c,f+u,p+m,R+y).normalize();else if(t===Bs)i[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=id.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rr.x=i.normal.x>0?e.max.x:e.min.x,rr.y=i.normal.y>0?e.max.y:e.min.y,rr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lr extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ar=new P,Rr=new P,Nc=new et,Ss=new Ir,or=new Un,uo=new P,Uc=new P;class es extends rt{constructor(e=new bt,t=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ar.fromBufferAttribute(t,i-1),Rr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ar.distanceTo(Rr);e.setAttribute("lineDistance",new ut(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=r,e.ray.intersectsSphere(or)===!1)return;Nc.copy(i).invert(),Ss.copy(e.ray).applyMatrix4(Nc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),M=h.getX(_+1),S=ar(this,e,Ss,c,p,M,_);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=ar(this,e,Ss,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=ar(this,e,Ss,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ar(this,e,Ss,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ar(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Ar.fromBufferAttribute(a,i),Rr.fromBufferAttribute(a,r),t.distanceSqToSegment(Ar,Rr,uo,Uc)>n)return;uo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(uo);if(!(l<e.near||l>e.far))return{distance:l,point:Uc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Fc=new P,Oc=new P;class eh extends es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Fc.fromBufferAttribute(t,i),Oc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fc.distanceTo(Oc);e.setAttribute("lineDistance",new ut(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dr extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bc=new et,ga=new Ir,cr=new Un,lr=new P;class Ga extends rt{constructor(e=new bt,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Bc.copy(i).invert(),ga.copy(e.ray).applyMatrix4(Bc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=l.getX(g);lr.fromBufferAttribute(d,m),Gc(lr,m,c,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)lr.fromBufferAttribute(d,g),Gc(lr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gc(s,e,t,n,i,r,o){const a=ga.distanceSqToPoint(s);if(a<t){const c=new P;ga.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class th extends Bt{constructor(e=[],t=Ci,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zc extends Bt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rs extends Bt{constructor(e,t,n=Ln,i,r,o,a=Ft,c=Ft,l,h=ti,d=1){if(h!==ti&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new La(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rd extends rs{constructor(e,t=Ln,n=Ci,i,r,o=Ft,a=Ft,c,l=ti){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nh extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class we extends bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function g(_,m,p,M,S,y,R,E,C,x,A){const L=y/C,I=R/x,U=y/2,H=R/2,K=E/2,D=C+1,W=x+1;let V=0,ie=0;const se=new P;for(let ue=0;ue<W;ue++){const ge=ue*I-H;for(let Se=0;Se<D;Se++){const Fe=Se*L-U;se[_]=Fe*M,se[m]=ge*S,se[p]=K,l.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=E>0?1:-1,h.push(se.x,se.y,se.z),d.push(Se/C),d.push(1-ue/x),V+=1}}for(let ue=0;ue<x;ue++)for(let ge=0;ge<C;ge++){const Se=u+ge+D*ue,Fe=u+ge+D*(ue+1),tt=u+(ge+1)+D*(ue+1),Ge=u+(ge+1)+D*ue;c.push(Se,Fe,Ge),c.push(Fe,tt,Ge),ie+=6}a.addGroup(f,ie,A),f+=ie,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new we(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ls extends bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new P,h=new Ze;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xe extends bt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function M(){const y=new P,R=new P;let E=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const A=[],L=x/r,I=L*(t-e)+e;for(let U=0;U<=i;U++){const H=U/i,K=H*c+a,D=Math.sin(K),W=Math.cos(K);R.x=I*D,R.y=-L*n+m,R.z=I*W,d.push(R.x,R.y,R.z),y.set(D,C,W).normalize(),u.push(y.x,y.y,y.z),f.push(H,1-L),A.push(g++)}_.push(A)}for(let x=0;x<i;x++)for(let A=0;A<r;A++){const L=_[A][x],I=_[A+1][x],U=_[A+1][x+1],H=_[A][x+1];(e>0||A!==0)&&(h.push(L,I,H),E+=3),(t>0||A!==r-1)&&(h.push(I,U,H),E+=3)}l.addGroup(p,E,0),p+=E}function S(y){const R=g,E=new Ze,C=new P;let x=0;const A=y===!0?e:t,L=y===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,m*L,0),u.push(0,L,0),f.push(.5,.5),g++;const I=g;for(let U=0;U<=i;U++){const K=U/i*c+a,D=Math.cos(K),W=Math.sin(K);C.x=A*W,C.y=m*L,C.z=A*D,d.push(C.x,C.y,C.z),u.push(0,L,0),E.x=D*.5+.5,E.y=W*.5*L+.5,f.push(E.x,E.y),g++}for(let U=0;U<i;U++){const H=R+U,K=I+U;y===!0?h.push(K,K+1,H):h.push(K+1,K,H),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vt extends Xe{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Vt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nr extends bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const S=new P,y=new P,R=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],y),f(t[E+2],R),c(S,y,R,M)}function c(M,S,y,R){const E=R+1,C=[];for(let x=0;x<=E;x++){C[x]=[];const A=M.clone().lerp(y,x/E),L=S.clone().lerp(y,x/E),I=E-x;for(let U=0;U<=I;U++)U===0&&x===E?C[x][U]=A:C[x][U]=A.clone().lerp(L,U/I)}for(let x=0;x<E;x++)for(let A=0;A<2*(E-x)-1;A++){const L=Math.floor(A/2);A%2===0?(u(C[x][L+1]),u(C[x+1][L]),u(C[x][L])):(u(C[x][L+1]),u(C[x+1][L+1]),u(C[x+1][L]))}}function l(M){const S=new P;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(M),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){const M=new P;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const y=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;o.push(y,1-R)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const S=o[M+0],y=o[M+2],R=o[M+4],E=Math.max(S,y,R),C=Math.min(S,y,R);E>.9&&C<.1&&(S<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,S){const y=M*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function g(){const M=new P,S=new P,y=new P,R=new P,E=new Ze,C=new Ze,x=new Ze;for(let A=0,L=0;A<r.length;A+=9,L+=6){M.set(r[A+0],r[A+1],r[A+2]),S.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),E.set(o[L+0],o[L+1]),C.set(o[L+2],o[L+3]),x.set(o[L+4],o[L+5]),R.copy(M).add(S).add(y).divideScalar(3);const I=m(R);_(E,L+0,M,I),_(C,L+2,S,I),_(x,L+4,y,I)}}function _(M,S,y,R){R<0&&M.x===1&&(o[S]=M.x-1),y.x===0&&y.z===0&&(o[S]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.vertices,e.indices,e.radius,e.detail)}}class Ai extends Nr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ai(e.radius,e.detail)}}class za extends Nr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new za(e.radius,e.detail)}}class Jn extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*u-o;for(let S=0;S<l;S++){const y=S*d-r;g.push(y,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const S=M+l*p,y=M+l*(p+1),R=M+1+l*(p+1),E=M+1+l*p;f.push(S,y,E),f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ka extends bt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=e;const u=(t-e)/i,f=new P,g=new Ze;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,y=M+n+1,R=M+n+2,E=M+1;a.push(S,y,E),a.push(y,R,E)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jt extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new P,u=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const E=R/t;d.x=-e*Math.cos(i+E*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(i+E*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+y,1-S),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const S=h[p][M+1],y=h[p][M],R=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&f.push(S,y,E),(p!==n-1||c<Math.PI)&&f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ri extends bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],d=[],u=new P,f=new P,g=new P;for(let _=0;_<=n;_++){const m=o+_/n*a;for(let p=0;p<=i;p++){const M=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const p=(i+1)*_+m-1,M=(i+1)*(_-1)+m-1,S=(i+1)*(_-1)+m,y=(i+1)*_+m;c.push(p,M,y),c.push(M,S,y)}this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function os(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(kc(i))i.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(kc(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Zt(s){const e={};for(let t=0;t<s.length;t++){const n=os(s[t]);for(const i in n)e[i]=n[i]}return e}function kc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function od(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ih(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ad={clone:os,merge:Zt};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hd extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Te extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends Te{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ud extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dd extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function hr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fd(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function sh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class hs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pd extends hs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ac:r=e,a=2*t-n;break;case cc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ac:o=e,c=2*n-t;break;case cc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+M*o[l+R]+S*o[c+R]+y*o[d+R];return r}}class md extends hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}}class gd extends hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class _d extends hs{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){const _=(n-t)/(i-t),m=1-_;for(let p=0;p!==a;++p)r[p]=o[l+p]*m+o[c+p]*_;return r}const f=a*2,g=e-1;for(let _=0;_!==a;++_){const m=o[l+_],p=o[c+_],M=g*f+_*2,S=u[M],y=u[M+1],R=e*f+_*2,E=d[R],C=d[R+1];let x=(n-t)/(i-t),A,L,I,U,H;for(let K=0;K<8;K++){A=x*x,L=A*x,I=1-x,U=I*I,H=U*I;const W=H*t+3*U*x*S+3*I*A*E+L*i-n;if(Math.abs(W)<1e-10)break;const V=3*U*(S-t)+6*I*x*(E-S)+3*A*(i-E);if(Math.abs(V)<1e-10)break;x=x-W/V,x=Math.max(0,Math.min(1,x))}r[_]=H*m+3*U*x*y+3*I*A*C+L*p}return r}}class yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new md(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new _d(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case zr:t=this.InterpolantFactoryMethodSmooth;break;case rc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return zr;case this.InterpolantFactoryMethodBezier:return rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){ke("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ke("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&du(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){ke("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zr,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Os;class us extends yn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Fs;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class rh extends yn{constructor(e,t,n,i){super(e,t,n,i)}}rh.prototype.ValueTypeName="color";class as extends yn{constructor(e,t,n,i){super(e,t,n,i)}}as.prototype.ValueTypeName="number";class xd extends hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Qt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class cs extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new xd(this.times,this.values,this.getValueSize(),e)}}cs.prototype.ValueTypeName="quaternion";cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends yn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Fs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends yn{constructor(e,t,n,i){super(e,t,n,i)}}ls.prototype.ValueTypeName="vector";class vd{constructor(e="",t=-1,n=[],i=tu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(yd(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=fd(c);c=Vc(c,1,h),l=Vc(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new as(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Re("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ke("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];sh(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==u[g].morphTargets.length;++M){const S=u[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new as(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[d].name+"]";n(ls,f+".position",u,"pos",i),n(cs,f+".quaternion",u,"rot",i),n(ls,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Md(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return rh;case"quaternion":return cs;case"bool":case"boolean":return us;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function yd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Md(s.type);if(s.times===void 0){const t=[],n=[];sh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Kn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Hc(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Hc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Hc(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Sd{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wd=new Sd;class fs{constructor(e){this.manager=e!==void 0?e:wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class bd extends Error{constructor(e,t){super(e),this.response=t}}class oh extends fs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Kn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Wn[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){d.read().then(({done:S,value:y})=>{if(S)p.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,C=h.length;E<C;E++){const x=h[E];x.onProgress&&x.onProgress(R)}p.enqueue(y),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new bd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Kn.add(`file:${e}`,l);const h=Wn[e];delete Wn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ji=new WeakMap;class Ed extends fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ji.get(o);d===void 0&&(d=[],ji.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Gs("img");function c(){h(),t&&t(this);const d=ji.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}ji.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),Kn.remove(`image:${e}`);const u=ji.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}ji.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Td extends fs{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new Ed(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zs extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ah extends zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const fo=new et,Wc=new P,Xc=new P;class Va{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Bs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ur=new P,dr=new Qt,wn=new P;class ch extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ur,dr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,dr,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ur,dr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,dr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new P,qc=new Ze,Yc=new Ze;class Wt extends ch{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Yc),t.subVectors(Yc,qc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ad extends Va{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xn extends zs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ad}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Rd extends Va{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}}class qn extends zs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ur extends ch{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cd extends Va{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mi extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new Cd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Pd extends zs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ds{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const po=new WeakMap;class Id extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Kn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{po.has(o)===!0?(i&&i(po.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),po.set(c,l),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ki=-90,$i=1;class Ld extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(Ki,$i,e,t);i.layers=this.layers,this.add(i);const r=new Wt(Ki,$i,e,t);r.layers=this.layers,this.add(r);const o=new Wt(Ki,$i,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Ki,$i,e,t);a.layers=this.layers,this.add(a);const c=new Wt(Ki,$i,e,t);c.layers=this.layers,this.add(c);const l=new Wt(Ki,$i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dd extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ha="\\[\\]\\.:\\/",Nd=new RegExp("["+Ha+"]","g"),Wa="[^"+Ha+"]",Ud="[^"+Ha.replace("\\.","")+"]",Fd=/((?:WC+[\/:])*)/.source.replace("WC",Wa),Od=/(WCOD+)?/.source.replace("WCOD",Ud),Bd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wa),Gd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wa),zd=new RegExp("^"+Fd+Od+Bd+Gd+"$"),kd=["material","materials","bones","map"];class Vd{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nd,"")}static parseTrackName(e){const t=zd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);kd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=Vd;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Za=class Za{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Za.prototype.isMatrix2=!0;let jc=Za;class lh extends eh{constructor(e=10,t=10,n=4473924,i=8947848){n=new Le(n),i=new Le(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let u=0,f=0,g=-a;u<=t;u++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=u===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new bt;h.setAttribute("position",new ut(c,3)),h.setAttribute("color",new ut(l,3));const d=new Lr({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Kc(s,e,t,n){const i=Wd(n);switch(t){case Wl:return s*e;case Ea:return s*e/i.components*i.byteLength;case Ta:return s*e/i.components*i.byteLength;case Pi:return s*e*2/i.components*i.byteLength;case Aa:return s*e*2/i.components*i.byteLength;case Xl:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case Ra:return s*e*4/i.components*i.byteLength;case _r:case xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vr:case Mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Oo:return Math.max(s,16)*Math.max(e,8)/4;case No:case Fo:return Math.max(s,8)*Math.max(e,8)/2;case Bo:case Go:case ko:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zo:case wr:case Ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case $o:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sa:case ra:case oa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case aa:case ca:return Math.ceil(s/4)*Math.ceil(e/4)*8;case br:case la:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wd(s){switch(s){case an:case zl:return{byteLength:1,components:1};case Ns:case kl:case ei:return{byteLength:2,components:1};case wa:case ba:return{byteLength:2,components:4};case Ln:case Sa:case fn:return{byteLength:4,components:1};case Vl:case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xd(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,of=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,af=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,em=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:jd,alphamap_pars_fragment:Kd,alphatest_fragment:$d,alphatest_pars_fragment:Zd,aomap_fragment:Jd,aomap_pars_fragment:Qd,batching_pars_vertex:ef,batching_vertex:tf,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:of,bumpmap_pars_fragment:af,clipping_planes_fragment:cf,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:vf,displacementmap_vertex:Mf,emissivemap_fragment:yf,emissivemap_pars_fragment:Sf,colorspace_fragment:wf,colorspace_pars_fragment:bf,envmap_fragment:Ef,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Af,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Gf,envmap_vertex:Cf,fog_vertex:Pf,fog_pars_vertex:If,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Uf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:zf,lights_toon_pars_fragment:kf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:jf,lightprobes_pars_fragment:Kf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:cp,morphtarget_pars_vertex:lp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:Mp,opaque_fragment:yp,packing:Sp,premultiplied_alpha_fragment:wp,project_vertex:bp,dithering_fragment:Ep,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:Gp,tonemapping_pars_fragment:zp,transmission_fragment:kp,transmission_pars_fragment:Vp,uv_pars_fragment:Hp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:jp,backgroundCube_vert:Kp,backgroundCube_frag:$p,cube_vert:Zp,cube_frag:Jp,depth_vert:Qp,depth_frag:em,distance_vert:tm,distance_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:cm,meshlambert_vert:lm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:xm,meshtoon_vert:vm,meshtoon_frag:Mm,points_vert:ym,points_frag:Sm,shadow_vert:wm,shadow_frag:bm,sprite_vert:Em,sprite_frag:Tm},_e={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Tn={basic:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Zt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Zt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Le(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Zt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Zt([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Zt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Zt([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Zt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Zt([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Zt([_e.common,_e.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Zt([_e.lights,_e.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Tn.physical={uniforms:Zt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const fr={r:0,b:0,g:0},Am=new et,uh=new qe;uh.set(-1,0,0,0,1,0,0,0,1);function Rm(s,e,t,n,i,r){const o=new Le(0);let a=i===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const y=M.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(M){let S=!1;const y=f(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,S){const y=f(S);y&&(y.isCubeTexture||y.mapping===Pr)?(l===void 0&&(l=new B(new we(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:os(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(uh),l.material.toneMapped=it.getTransfer(y.colorSpace)!==ft,(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new B(new Jn(2,2),new Dn({name:"BackgroundMaterial",uniforms:os(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(fr,ih(s)),t.buffers.color.setClear(fr.r,fr.g,fr.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:_,dispose:p}}function Cm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(I,U,H,K,D){let W=!1;const V=d(I,K,H,U);r!==V&&(r=V,l(r.object)),W=f(I,K,H,D),W&&g(I,K,H,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(I,U,H,K),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,U,H,K){const D=K.wireframe===!0;let W=n[U.id];W===void 0&&(W={},n[U.id]=W);const V=I.isInstancedMesh===!0?I.id:0;let ie=W[V];ie===void 0&&(ie={},W[V]=ie);let se=ie[H.id];se===void 0&&(se={},ie[H.id]=se);let ue=se[D];return ue===void 0&&(ue=u(c()),se[D]=ue),ue}function u(I){const U=[],H=[],K=[];for(let D=0;D<t;D++)U[D]=0,H[D]=0,K[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:K,object:I,attributes:{},index:null}}function f(I,U,H,K){const D=r.attributes,W=U.attributes;let V=0;const ie=H.getAttributes();for(const se in ie)if(ie[se].location>=0){const ge=D[se];let Se=W[se];if(Se===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==K}function g(I,U,H,K){const D={},W=U.attributes;let V=0;const ie=H.getAttributes();for(const se in ie)if(ie[se].location>=0){let ge=W[se];ge===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor));const Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),D[se]=Se,V++}r.attributes=D,r.attributesNum=V,r.index=K}function _(){const I=r.newAttributes;for(let U=0,H=I.length;U<H;U++)I[U]=0}function m(I){p(I,0)}function p(I,U){const H=r.newAttributes,K=r.enabledAttributes,D=r.attributeDivisors;H[I]=1,K[I]===0&&(s.enableVertexAttribArray(I),K[I]=1),D[I]!==U&&(s.vertexAttribDivisor(I,U),D[I]=U)}function M(){const I=r.newAttributes,U=r.enabledAttributes;for(let H=0,K=U.length;H<K;H++)U[H]!==I[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function S(I,U,H,K,D,W,V){V===!0?s.vertexAttribIPointer(I,U,H,D,W):s.vertexAttribPointer(I,U,H,K,D,W)}function y(I,U,H,K){_();const D=K.attributes,W=H.getAttributes(),V=U.defaultAttributeValues;for(const ie in W){const se=W[ie];if(se.location>=0){let ue=D[ie];if(ue===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ue!==void 0){const ge=ue.normalized,Se=ue.itemSize,Fe=e.get(ue);if(Fe===void 0)continue;const tt=Fe.buffer,Ge=Fe.type,ne=Fe.bytesPerElement,fe=Ge===s.INT||Ge===s.UNSIGNED_INT||ue.gpuType===Sa;if(ue.isInterleavedBufferAttribute){const de=ue.data,Pe=de.stride,Oe=ue.offset;if(de.isInstancedInterleavedBuffer){for(let Ce=0;Ce<se.locationSize;Ce++)p(se.location+Ce,de.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ce=0;Ce<se.locationSize;Ce++)m(se.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Ce=0;Ce<se.locationSize;Ce++)S(se.location+Ce,Se/se.locationSize,Ge,ge,Pe*ne,(Oe+Se/se.locationSize*Ce)*ne,fe)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<se.locationSize;de++)p(se.location+de,ue.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<se.locationSize;de++)m(se.location+de);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let de=0;de<se.locationSize;de++)S(se.location+de,Se/se.locationSize,Ge,ge,Se*ne,Se/se.locationSize*de*ne,fe)}}else if(V!==void 0){const ge=V[ie];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(se.location,ge);break;case 3:s.vertexAttrib3fv(se.location,ge);break;case 4:s.vertexAttrib4fv(se.location,ge);break;default:s.vertexAttrib1fv(se.location,ge)}}}}M()}function R(){A();for(const I in n){const U=n[I];for(const H in U){const K=U[H];for(const D in K){const W=K[D];for(const V in W)h(W[V].object),delete W[V];delete K[D]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;const U=n[I.id];for(const H in U){const K=U[H];for(const D in K){const W=K[D];for(const V in W)h(W[V].object),delete W[V];delete K[D]}}delete n[I.id]}function C(I){for(const U in n){const H=n[U];for(const K in H){const D=H[K];if(D[I.id]===void 0)continue;const W=D[I.id];for(const V in W)h(W[V].object),delete W[V];delete D[I.id]}}}function x(I){for(const U in n){const H=n[U],K=I.isInstancedMesh===!0?I.id:0,D=H[K];if(D!==void 0){for(const W in D){const V=D[W];for(const ie in V)h(V[ie].object),delete V[ie];delete D[W]}delete H[K],Object.keys(H).length===0&&delete n[U]}}}function A(){L(),o=!0,r!==i&&(r=i,l(r.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Pm(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Im(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==pn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==an&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fn&&!x)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Re("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,maxSamples:R,samples:E}}function Lm(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new wi,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,S=M*4;let y=p.clippingState||null;c.value=y,y=h(g,u,S,f);for(let R=0;R!==S;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==_;++S,y+=4)o.copy(d[S]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const pi=4,$c=[.125,.215,.35,.446,.526,.582],Ei=20,Dm=256,ws=new Ur,Zc=new Le;let mo=null,go=0,_o=0,xo=!1;const Nm=new P;class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Nm}=r;mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mo,go,_o),this._renderer.xr.enabled=xo,e.scissorTest=!1,Zi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:ei,format:pn,colorSpace:cn,depthBuffer:!1},i=Qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Om(r,e,t),this._ggxMaterial=Fm(r,e,t)}return i}_compileMaterial(e){const t=new B(new bt,e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,n,i,r){const c=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Zc),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new B(new we,new Qe({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Zc),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const R=this._cubeSize;Zi(i,y*R,S>2?R:0,R,R),d.setRenderTarget(i),p&&d.render(_,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ci||e.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Zi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-pi?n-g+pi:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Zi(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(a,ws),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Zi(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(a,ws)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ke("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=l;const u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ei;m>Ei&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let M=0;for(let C=0;C<Ei;++C){const x=C/_,A=Math.exp(-x*x/2);p.push(A),C===0?M+=A:C<m&&(M+=2*A)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const y=this._sizeLods[i],R=3*y*(i>S-pi?i-S+pi:0),E=4*(this._cubeSize-y);Zi(t,R,E,3*y,2*y),c.setRenderTarget(t),c.render(d,ws)}}function Um(s){const e=[],t=[],n=[];let i=s;const r=s-pi+1+$c.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-pi?c=$c[o-s+pi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,x=E>2?0:-1,A=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(A,_*g*E),S.set(u,m*g*E);const L=[E,E,E,E,E,E];y.set(L,p*g*E)}const R=new bt;R.setAttribute("position",new Lt(M,_)),R.setAttribute("uv",new Lt(S,m)),R.setAttribute("faceIndex",new Lt(y,p)),n.push(new B(R,null)),i>pi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Qc(s,e,t){const n=new Pn(s,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fm(s,e,t){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Om(s,e,t){const n=new Float32Array(Ei),i=new P(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function el(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function tl(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Fr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class dh extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new th(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new we(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:$n});r.uniforms.tEquirect.value=t;const o=new B(i,r),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=Ot),new Ld(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function Bm(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Br||f===Gr)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new dh(g.height);return _.fromEquirectangularTexture(s,u),e.set(u,_),u.addEventListener("dispose",l),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===Br||f===Gr,_=f===Ci||f===is;if(g||_){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Jc(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new Jc(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Br?u.mapping=Ci:f===Gr&&(u.mapping=is),u}function c(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Gm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fa("WebGLRenderer: "+n+" extension not supported."),i}}}function zm(s,e,t,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let S=0,y=M.length;S<y;S+=3){const R=M[S+0],E=M[S+1],C=M[S+2];u.push(R,E,E,C,C,R)}}else{const M=g.array;_=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const R=S+0,E=S+1,C=S+2;u.push(R,E,E,C,C,R)}}const m=new(g.count>=65535?Jl:Zl)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function km(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),t.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:ke("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hm(s,e,t){const n=new WeakMap,i=new Mt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let L=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",L)};var f=L;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*E*4*d),x=new jl(C,R,E,d);x.type=fn,x.needsUpdate=!0;const A=y*4;for(let I=0;I<d;I++){const U=p[I],H=M[I],K=S[I],D=R*E*4*I;for(let W=0;W<U.count;W++){const V=W*A;g===!0&&(i.fromBufferAttribute(U,W),C[D+V+0]=i.x,C[D+V+1]=i.y,C[D+V+2]=i.z,C[D+V+3]=0),_===!0&&(i.fromBufferAttribute(H,W),C[D+V+4]=i.x,C[D+V+5]=i.y,C[D+V+6]=i.z,C[D+V+7]=0),m===!0&&(i.fromBufferAttribute(K,W),C[D+V+8]=i.x,C[D+V+9]=i.y,C[D+V+10]=i.z,C[D+V+11]=K.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new Ze(R,E)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Wm(s,e,t,n,i){let r=new WeakMap;function o(l){const h=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const Xm={[Il]:"LINEAR_TONE_MAPPING",[Ll]:"REINHARD_TONE_MAPPING",[Dl]:"CINEON_TONE_MAPPING",[Nl]:"ACES_FILMIC_TONE_MAPPING",[Fl]:"AGX_TONE_MAPPING",[Ol]:"NEUTRAL_TONE_MAPPING",[Ul]:"CUSTOM_TONE_MAPPING"};function qm(s,e,t,n,i){const r=new Pn(e,t,{type:s,depthBuffer:n,stencilBuffer:i,depthTexture:n?new rs(e,t):void 0}),o=new Pn(e,t,{type:ei,depthBuffer:!1,stencilBuffer:!1}),a=new bt;a.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ut([0,2,0,0,2,0],2));const c=new hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new B(a,c),h=new Ur(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(M,S){r.setSize(M,S),o.setSize(M,S);for(let y=0;y<m.length;y++){const R=m[y];R.setSize&&R.setSize(M,S)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,y=r.height;for(let R=0;R<m.length;R++){const E=m[R];E.setSize&&E.setSize(S,y)}},this.begin=function(M,S){if(f||M.toneMapping===Cn&&m.length===0)return!1;if(_=S,S!==null){const y=S.width,R=S.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=Cn,!0},this.hasRenderPass=function(){return p},this.end=function(M,S){M.toneMapping=g,f=!0;let y=r,R=o;for(let E=0;E<m.length;E++){const C=m[E];if(C.enabled!==!1&&(C.render(M,R,y,S),C.needsSwap!==!1)){const x=y;y=R,R=x}}if(d!==M.outputColorSpace||u!==M.toneMapping){d=M.outputColorSpace,u=M.toneMapping,c.defines={},it.getTransfer(d)===ft&&(c.defines.SRGB_TRANSFER="");const E=Xm[u];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(_),M.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const fh=new Bt,_a=new rs(1,1),ph=new jl,mh=new Ou,gh=new th,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),ol=new Float32Array(4);function ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=nl[i];if(r===void 0&&(r=new Float32Array(i),nl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Or(s,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ym(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2fv(this.addr,e),zt(t,e)}}function Km(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;s.uniform3fv(this.addr,e),zt(t,e)}}function $m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4fv(this.addr,e),zt(t,e)}}function Zm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Gt(t,n))return;ol.set(n),s.uniformMatrix2fv(this.addr,!1,ol),zt(t,n)}}function Jm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Gt(t,n))return;rl.set(n),s.uniformMatrix3fv(this.addr,!1,rl),zt(t,n)}}function Qm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Gt(t,n))return;sl.set(n),s.uniformMatrix4fv(this.addr,!1,sl),zt(t,n)}}function e0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function t0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2iv(this.addr,e),zt(t,e)}}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3iv(this.addr,e),zt(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4iv(this.addr,e),zt(t,e)}}function s0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function r0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2uiv(this.addr,e),zt(t,e)}}function o0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3uiv(this.addr,e),zt(t,e)}}function a0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4uiv(this.addr,e),zt(t,e)}}function c0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_a.compareFunction=t.isReversedDepthBuffer()?Pa:Ca,r=_a):r=fh,t.setTexture2D(e||r,i)}function l0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mh,i)}function h0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gh,i)}function u0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ph,i)}function d0(s){switch(s){case 5126:return Ym;case 35664:return jm;case 35665:return Km;case 35666:return $m;case 35674:return Zm;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return o0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}function f0(s,e){s.uniform1fv(this.addr,e)}function p0(s,e){const t=ps(e,this.size,2);s.uniform2fv(this.addr,t)}function m0(s,e){const t=ps(e,this.size,3);s.uniform3fv(this.addr,t)}function g0(s,e){const t=ps(e,this.size,4);s.uniform4fv(this.addr,t)}function _0(s,e){const t=ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function x0(s,e){const t=ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function v0(s,e){const t=ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function M0(s,e){s.uniform1iv(this.addr,e)}function y0(s,e){s.uniform2iv(this.addr,e)}function S0(s,e){s.uniform3iv(this.addr,e)}function w0(s,e){s.uniform4iv(this.addr,e)}function b0(s,e){s.uniform1uiv(this.addr,e)}function E0(s,e){s.uniform2uiv(this.addr,e)}function T0(s,e){s.uniform3uiv(this.addr,e)}function A0(s,e){s.uniform4uiv(this.addr,e)}function R0(s,e,t){const n=this.cache,i=e.length,r=Or(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=_a:o=fh;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function C0(s,e,t){const n=this.cache,i=e.length,r=Or(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mh,r[o])}function P0(s,e,t){const n=this.cache,i=e.length,r=Or(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||gh,r[o])}function I0(s,e,t){const n=this.cache,i=e.length,r=Or(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ph,r[o])}function L0(s){switch(s){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return x0;case 35676:return v0;case 5124:case 35670:return M0;case 35667:case 35671:return y0;case 35668:case 35672:return S0;case 35669:case 35673:return w0;case 5125:return b0;case 36294:return E0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}class D0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=d0(t.type)}}class N0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}}class U0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function al(s,e){s.seq.push(e),s.map[e.id]=e}function F0(s,e,t){const n=s.name,i=n.length;for(vo.lastIndex=0;;){const r=vo.exec(n),o=vo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){al(t,l===void 0?new D0(a,s,e):new N0(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new U0(a),al(t,d)),t=d}}}class yr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);F0(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function cl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const O0=37297;let B0=0;function G0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ll=new qe;function z0(s){it._getMatrix(ll,it.workingColorSpace,s);const e=`mat3( ${ll.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Er:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+G0(s.getShaderSource(e),a)}else return r}function k0(s,e){const t=z0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const V0={[Il]:"Linear",[Ll]:"Reinhard",[Dl]:"Cineon",[Nl]:"ACESFilmic",[Fl]:"AgX",[Ol]:"Neutral",[Ul]:"Custom"};function H0(s,e){const t=V0[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pr=new P;function W0(){it.getLuminanceCoefficients(pr);const s=pr.x.toFixed(4),e=pr.y.toFixed(4),t=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function q0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Cs(s){return s!==""}function ul(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(s){return s.replace(j0,$0)}const K0=new Map;function $0(s,e){let t=$e[e];if(t===void 0){const n=K0.get(e);if(n!==void 0)t=$e[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xa(t)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(s){return s.replace(Z0,J0)}function J0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Q0={[mr]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function eg(s){return Q0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tg={[Ci]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function ng(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":tg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ig={[is]:"ENVMAP_MODE_REFRACTION"};function sg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ig[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rg={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[Jh]:"ENVMAP_BLENDING_MIX",[Qh]:"ENVMAP_BLENDING_ADD"};function og(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rg[s.combine]||"ENVMAP_BLENDING_NONE"}function ag(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=eg(t),l=ng(t),h=sg(t),d=og(t),u=ag(t),f=X0(t),g=q0(r),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Cn?H0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),W0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=xa(o),o=ul(o,t),o=dl(o,t),a=xa(a),a=ul(a,t),a=dl(a,t),o=fl(o),a=fl(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,y=M+p+a,R=cl(i,i.VERTEX_SHADER,S),E=cl(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(I){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(R)||"",K=i.getShaderInfoLog(E)||"",D=U.trim(),W=H.trim(),V=K.trim();let ie=!0,se=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,E);else{const ue=hl(i,R,"vertex"),ge=hl(i,E,"fragment");ke("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+ue+`
`+ge)}else D!==""?Re("WebGLProgram: Program Info Log:",D):(W===""||V==="")&&(se=!1);se&&(I.diagnostics={runnable:ie,programLog:D,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(R),i.deleteShader(E),x=new yr(i,_),A=Y0(i,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(_,O0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let lg=0;class hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ug(e),t.set(e,n)),n}}class ug{constructor(e){this.id=lg++,this.code=e,this.usedTimes=0}}function dg(s){return s===Pi||s===wr||s===br}function fg(s,e,t,n,i,r){const o=new Kl,a=new hg,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,A,L,I,U,H){const K=I.fog,D=U.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||W,V),se=ie&&ie.mapping===Pr?ie.image.height:null,ue=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ge=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Se=ge!==void 0?ge.length:0;let Fe=0;D.morphAttributes.position!==void 0&&(Fe=1),D.morphAttributes.normal!==void 0&&(Fe=2),D.morphAttributes.color!==void 0&&(Fe=3);let tt,Ge,ne,fe;if(ue){const he=Tn[ue];tt=he.vertexShader,Ge=he.fragmentShader}else tt=x.vertexShader,Ge=x.fragmentShader,a.update(x),ne=a.getVertexShaderID(x),fe=a.getFragmentShaderID(x);const de=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Ce=U.isBatchedMesh===!0,dt=!!x.map,Ke=!!x.matcap,at=!!ie,ot=!!x.aoMap,We=!!x.lightMap,St=!!x.bumpMap,gt=!!x.normalMap,Dt=!!x.displacementMap,F=!!x.emissiveMap,wt=!!x.metalnessMap,je=!!x.roughnessMap,ct=x.anisotropy>0,$=x.clearcoat>0,pe=x.dispersion>0,w=x.iridescence>0,v=x.sheen>0,N=x.transmission>0,Y=ct&&!!x.anisotropyMap,Q=$&&!!x.clearcoatMap,oe=$&&!!x.clearcoatNormalMap,ae=$&&!!x.clearcoatRoughnessMap,j=w&&!!x.iridescenceMap,J=w&&!!x.iridescenceThicknessMap,me=v&&!!x.sheenColorMap,ye=v&&!!x.sheenRoughnessMap,ce=!!x.specularMap,le=!!x.specularColorMap,Ue=!!x.specularIntensityMap,Be=N&&!!x.transmissionMap,k=N&&!!x.thicknessMap,T=!!x.gradientMap,G=!!x.alphaMap,O=x.alphaTest>0,re=!!x.alphaHash,ee=!!x.extensions;let te=Cn;x.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(te=s.toneMapping);const xe={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:Ge,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:dt,matcap:Ke,envMap:at,envMapMode:at&&ie.mapping,envMapCubeUVHeight:se,aoMap:ot,lightMap:We,bumpMap:St,normalMap:gt,displacementMap:Dt,emissiveMap:F,normalMapObjectSpace:gt&&x.normalMapType===su,normalMapTangentSpace:gt&&x.normalMapType===ua,packedNormalMap:gt&&x.normalMapType===ua&&dg(x.normalMap.format),metalnessMap:wt,roughnessMap:je,anisotropy:ct,anisotropyMap:Y,clearcoat:$,clearcoatMap:Q,clearcoatNormalMap:oe,clearcoatRoughnessMap:ae,dispersion:pe,iridescence:w,iridescenceMap:j,iridescenceThicknessMap:J,sheen:v,sheenColorMap:me,sheenRoughnessMap:ye,specularMap:ce,specularColorMap:le,specularIntensityMap:Ue,transmission:N,transmissionMap:Be,thicknessMap:k,gradientMap:T,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:G,alphaTest:O,alphaHash:re,combine:x.combine,mapUv:dt&&g(x.map.channel),aoMapUv:ot&&g(x.aoMap.channel),lightMapUv:We&&g(x.lightMap.channel),bumpMapUv:St&&g(x.bumpMap.channel),normalMapUv:gt&&g(x.normalMap.channel),displacementMapUv:Dt&&g(x.displacementMap.channel),emissiveMapUv:F&&g(x.emissiveMap.channel),metalnessMapUv:wt&&g(x.metalnessMap.channel),roughnessMapUv:je&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(x.sheenRoughnessMap.channel),specularMapUv:ce&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:Ue&&g(x.specularIntensityMap.channel),transmissionMapUv:Be&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:G&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(gt||ct),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(dt||G),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pe,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,decodeVideoTexture:dt&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:F&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ut,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)A.push(L),A.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(A,x),M(A,x),A.push(s.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function S(x){const A=f[x.type];let L;if(A){const I=Tn[A];L=ad.clone(I.uniforms)}else L=x.uniforms;return L}function y(x,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new cg(s,A,x,i),l.push(L),h.set(A,L)),L}function R(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:R,releaseShaderCache:E,programs:l,dispose:C}}function pg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ml(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,_,m,p){let M=s[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},s[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,f,g,_,m,p){const M=a(u,f,g,_,m,p);g.transmission>0?n.push(M):g.transparent===!0?i.push(M):t.push(M)}function l(u,f,g,_,m,p){const M=a(u,f,g,_,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||mg),n.length>1&&n.sort(f||ml),i.length>1&&i.sort(f||ml)}function d(){for(let u=e,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function gg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new gl,s.set(n,[o])):i>=r.length?(o=new gl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function _g(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function xg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vg=0;function Mg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yg(s){const e=new _g,t=xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new et,o=new et;function a(l){let h=0,d=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,y=0,R=0,E=0,C=0;l.sort(Mg);for(let A=0,L=l.length;A<L;A++){const I=l[A],U=I.color,H=I.intensity,K=I.distance;let D=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Pi?D=I.shadow.map.texture:D=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*H,d+=U.g*H,u+=U.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],H);C++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,ie=t.get(I);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=W,f++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(H),W.distance=K,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;const V=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,V.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[_]=V.matrix,I.castShadow){const ie=t.get(I);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,n.spotShadow[_]=ie,n.spotShadowMap[_]=D,y++}_++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(U).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const V=I.shadow,ie=t.get(I);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,ie.shadowCameraNear=V.camera.near,ie.shadowCameraFar=V.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=W,g++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==S||x.numSpotShadows!==y||x.numSpotMaps!==R||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=S,x.numSpotShadows=y,x.numSpotMaps=R,x.numLightProbes=C,n.version=vg++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const S=l[p];if(S.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function _l(s){const e=new yg(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Sg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new _l(s),e.set(i,[a])):r>=o.length?(a=new _l(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Eg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Tg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],xl=new et,bs=new P,Mo=new P;function Ag(s,e,t){let n=new Ba;const i=new Ze,r=new Ze,o=new Mt,a=new ud,c=new dd,l={},h=t.maxTextureSize,d={[Qn]:Xt,[Xt]:Qn,[Ut]:Ut},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:wg,fragmentShader:bg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new B(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let p=this.type;this.render=function(E,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Cl&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mr);const A=s.getRenderTarget(),L=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),U=s.state;U.setBlending($n),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==this.type;H&&C.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(D=>D.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,D=E.length;K<D;K++){const W=E[K],V=W.shadow;if(V===void 0){Re("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ie=V.getFrameExtents();i.multiply(ie),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,V.mapSize.y=r.y));const se=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=se,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ts){if(W.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Pn(i.x,i.y,{format:Pi,type:ei,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new rs(i.x,i.y,fn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=ti,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ft,V.map.depthTexture.magFilter=Ft}else W.isPointLight?(V.map=new dh(i.x),V.map.depthTexture=new rd(i.x,Ln)):(V.map=new Pn(i.x,i.y),V.map.depthTexture=new rs(i.x,i.y,Ln)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=ti,this.type===mr?(V.map.depthTexture.compareFunction=se?Pa:Ca,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ft,V.map.depthTexture.magFilter=Ft);V.camera.updateProjectionMatrix()}const ue=V.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ue;ge++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,ge),s.clear();else{ge===0&&(s.setRenderTarget(V.map),s.clear());const Se=V.getViewport(ge);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),U.viewport(o)}if(W.isPointLight){const Se=V.camera,Fe=V.matrix,tt=W.distance||Se.far;tt!==Se.far&&(Se.far=tt,Se.updateProjectionMatrix()),bs.setFromMatrixPosition(W.matrixWorld),Se.position.copy(bs),Mo.copy(Se.position),Mo.add(Eg[ge]),Se.up.copy(Tg[ge]),Se.lookAt(Mo),Se.updateMatrixWorld(),Fe.makeTranslation(-bs.x,-bs.y,-bs.z),xl.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xl,Se.coordinateSystem,Se.reversedDepth)}else V.updateMatrices(W);n=V.getFrustum(),y(C,x,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Ts&&M(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(A,L,I)};function M(E,C){const x=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Pn(i.x,i.y,{format:Pi,type:ei})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,x,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,x,f,_,null)}function S(E,C,x,A){let L=null;const I=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)L=I;else if(L=x.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=L.uuid,H=C.uuid;let K=l[U];K===void 0&&(K={},l[U]=K);let D=K[H];D===void 0&&(D=L.clone(),K[H]=D,C.addEventListener("dispose",R)),L=D}if(L.visible=C.visible,L.wireframe=C.wireframe,A===Ts?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:d[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=s.properties.get(L);U.light=x}return L}function y(E,C,x,A,L){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Ts)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const H=e.update(E),K=E.material;if(Array.isArray(K)){const D=H.groups;for(let W=0,V=D.length;W<V;W++){const ie=D[W],se=K[ie.materialIndex];if(se&&se.visible){const ue=S(E,se,A,L);E.onBeforeShadow(s,E,C,x,H,ue,ie),s.renderBufferDirect(x,null,H,ue,E,ie),E.onAfterShadow(s,E,C,x,H,ue,ie)}}}else if(K.visible){const D=S(E,K,A,L);E.onBeforeShadow(s,E,C,x,H,D,null),s.renderBufferDirect(x,null,H,D,E,null),E.onAfterShadow(s,E,C,x,H,D,null)}}const U=E.children;for(let H=0,K=U.length;H<K;H++)y(U[H],C,x,A,L)}function R(E){E.target.removeEventListener("dispose",R);for(const x in l){const A=l[x],L=E.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function Rg(s,e){function t(){let T=!1;const G=new Mt;let O=null;const re=new Mt(0,0,0,0);return{setMask:function(ee){O!==ee&&!T&&(s.colorMask(ee,ee,ee,ee),O=ee)},setLocked:function(ee){T=ee},setClear:function(ee,te,xe,he,ze){ze===!0&&(ee*=he,te*=he,xe*=he),G.set(ee,te,xe,he),re.equals(G)===!1&&(s.clearColor(ee,te,xe,he),re.copy(G))},reset:function(){T=!1,O=null,re.set(-1,0,0,0)}}}function n(){let T=!1,G=!1,O=null,re=null,ee=null;return{setReversed:function(te){if(G!==te){const xe=e.get("EXT_clip_control");te?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),G=te;const he=ee;ee=null,this.setClear(he)}},getReversed:function(){return G},setTest:function(te){te?de(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(te){O!==te&&!T&&(s.depthMask(te),O=te)},setFunc:function(te){if(G&&(te=mu[te]),re!==te){switch(te){case Ao:s.depthFunc(s.NEVER);break;case Ro:s.depthFunc(s.ALWAYS);break;case Co:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case Po:s.depthFunc(s.EQUAL);break;case Io:s.depthFunc(s.GEQUAL);break;case Lo:s.depthFunc(s.GREATER);break;case Do:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=te}},setLocked:function(te){T=te},setClear:function(te){ee!==te&&(ee=te,G&&(te=1-te),s.clearDepth(te))},reset:function(){T=!1,O=null,re=null,ee=null,G=!1}}}function i(){let T=!1,G=null,O=null,re=null,ee=null,te=null,xe=null,he=null,ze=null;return{setTest:function(Ie){T||(Ie?de(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(Ie){G!==Ie&&!T&&(s.stencilMask(Ie),G=Ie)},setFunc:function(Ie,Et,ht){(O!==Ie||re!==Et||ee!==ht)&&(s.stencilFunc(Ie,Et,ht),O=Ie,re=Et,ee=ht)},setOp:function(Ie,Et,ht){(te!==Ie||xe!==Et||he!==ht)&&(s.stencilOp(Ie,Et,ht),te=Ie,xe=Et,he=ht)},setLocked:function(Ie){T=Ie},setClear:function(Ie){ze!==Ie&&(s.clearStencil(Ie),ze=Ie)},reset:function(){T=!1,G=null,O=null,re=null,ee=null,te=null,xe=null,he=null,ze=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,S=null,y=null,R=null,E=null,C=null,x=new Le(0,0,0),A=0,L=!1,I=null,U=null,H=null,K=null,D=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ie=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(se)[1]),V=ie>=1):se.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),V=ie>=2);let ue=null,ge={};const Se=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),tt=new Mt().fromArray(Se),Ge=new Mt().fromArray(Fe);function ne(T,G,O,re){const ee=new Uint8Array(4),te=s.createTexture();s.bindTexture(T,te),s.texParameteri(T,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(T,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<O;xe++)T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY?s.texImage3D(G,0,s.RGBA,1,1,re,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(G+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return te}const fe={};fe[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc(ns),St(!1),gt(tc),de(s.CULL_FACE),ot($n);function de(T){h[T]!==!0&&(s.enable(T),h[T]=!0)}function Pe(T){h[T]!==!1&&(s.disable(T),h[T]=!1)}function Oe(T,G){return u[T]!==G?(s.bindFramebuffer(T,G),u[T]=G,T===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=G),T===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=G),!0):!1}function Ce(T,G){let O=g,re=!1;if(T){O=f.get(G),O===void 0&&(O=[],f.set(G,O));const ee=T.textures;if(O.length!==ee.length||O[0]!==s.COLOR_ATTACHMENT0){for(let te=0,xe=ee.length;te<xe;te++)O[te]=s.COLOR_ATTACHMENT0+te;O.length=ee.length,re=!0}}else O[0]!==s.BACK&&(O[0]=s.BACK,re=!0);re&&s.drawBuffers(O)}function dt(T){return _!==T?(s.useProgram(T),_=T,!0):!1}const Ke={[bi]:s.FUNC_ADD,[Uh]:s.FUNC_SUBTRACT,[Fh]:s.FUNC_REVERSE_SUBTRACT};Ke[Oh]=s.MIN,Ke[Bh]=s.MAX;const at={[Gh]:s.ZERO,[zh]:s.ONE,[kh]:s.SRC_COLOR,[Eo]:s.SRC_ALPHA,[Yh]:s.SRC_ALPHA_SATURATE,[Xh]:s.DST_COLOR,[Hh]:s.DST_ALPHA,[Vh]:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,[qh]:s.ONE_MINUS_DST_COLOR,[Wh]:s.ONE_MINUS_DST_ALPHA,[jh]:s.CONSTANT_COLOR,[Kh]:s.ONE_MINUS_CONSTANT_COLOR,[$h]:s.CONSTANT_ALPHA,[Zh]:s.ONE_MINUS_CONSTANT_ALPHA};function ot(T,G,O,re,ee,te,xe,he,ze,Ie){if(T===$n){m===!0&&(Pe(s.BLEND),m=!1);return}if(m===!1&&(de(s.BLEND),m=!0),T!==Nh){if(T!==p||Ie!==L){if((M!==bi||R!==bi)&&(s.blendEquation(s.FUNC_ADD),M=bi,R=bi),Ie)switch(T){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFunc(s.ONE,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ke("WebGLState: Invalid blending: ",T);break}else switch(T){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nc:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",T);break}S=null,y=null,E=null,C=null,x.set(0,0,0),A=0,p=T,L=Ie}return}ee=ee||G,te=te||O,xe=xe||re,(G!==M||ee!==R)&&(s.blendEquationSeparate(Ke[G],Ke[ee]),M=G,R=ee),(O!==S||re!==y||te!==E||xe!==C)&&(s.blendFuncSeparate(at[O],at[re],at[te],at[xe]),S=O,y=re,E=te,C=xe),(he.equals(x)===!1||ze!==A)&&(s.blendColor(he.r,he.g,he.b,ze),x.copy(he),A=ze),p=T,L=!1}function We(T,G){T.side===Ut?Pe(s.CULL_FACE):de(s.CULL_FACE);let O=T.side===Xt;G&&(O=!O),St(O),T.blending===Ji&&T.transparent===!1?ot($n):ot(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),r.setMask(T.colorWrite);const re=T.stencilWrite;a.setTest(re),re&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),F(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function St(T){I!==T&&(T?s.frontFace(s.CW):s.frontFace(s.CCW),I=T)}function gt(T){T!==Lh?(de(s.CULL_FACE),T!==U&&(T===tc?s.cullFace(s.BACK):T===Dh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),U=T}function Dt(T){T!==H&&(V&&s.lineWidth(T),H=T)}function F(T,G,O){T?(de(s.POLYGON_OFFSET_FILL),(K!==G||D!==O)&&(K=G,D=O,o.getReversed()&&(G=-G),s.polygonOffset(G,O))):Pe(s.POLYGON_OFFSET_FILL)}function wt(T){T?de(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function je(T){T===void 0&&(T=s.TEXTURE0+W-1),ue!==T&&(s.activeTexture(T),ue=T)}function ct(T,G,O){O===void 0&&(ue===null?O=s.TEXTURE0+W-1:O=ue);let re=ge[O];re===void 0&&(re={type:void 0,texture:void 0},ge[O]=re),(re.type!==T||re.texture!==G)&&(ue!==O&&(s.activeTexture(O),ue=O),s.bindTexture(T,G||fe[T]),re.type=T,re.texture=G)}function $(){const T=ge[ue];T!==void 0&&T.type!==void 0&&(s.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(T){ke("WebGLState:",T)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(T){ke("WebGLState:",T)}}function v(){try{s.texSubImage2D(...arguments)}catch(T){ke("WebGLState:",T)}}function N(){try{s.texSubImage3D(...arguments)}catch(T){ke("WebGLState:",T)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(T){ke("WebGLState:",T)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(T){ke("WebGLState:",T)}}function oe(){try{s.texStorage2D(...arguments)}catch(T){ke("WebGLState:",T)}}function ae(){try{s.texStorage3D(...arguments)}catch(T){ke("WebGLState:",T)}}function j(){try{s.texImage2D(...arguments)}catch(T){ke("WebGLState:",T)}}function J(){try{s.texImage3D(...arguments)}catch(T){ke("WebGLState:",T)}}function me(T){return d[T]!==void 0?d[T]:s.getParameter(T)}function ye(T,G){d[T]!==G&&(s.pixelStorei(T,G),d[T]=G)}function ce(T){tt.equals(T)===!1&&(s.scissor(T.x,T.y,T.z,T.w),tt.copy(T))}function le(T){Ge.equals(T)===!1&&(s.viewport(T.x,T.y,T.z,T.w),Ge.copy(T))}function Ue(T,G){let O=l.get(G);O===void 0&&(O=new WeakMap,l.set(G,O));let re=O.get(T);re===void 0&&(re=s.getUniformBlockIndex(G,T.name),O.set(T,re))}function Be(T,G){const re=l.get(G).get(T);c.get(G)!==re&&(s.uniformBlockBinding(G,re,T.__bindingPointIndex),c.set(G,re))}function k(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ue=null,ge={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,S=null,y=null,R=null,E=null,C=null,x=new Le(0,0,0),A=0,L=!1,I=null,U=null,H=null,K=null,D=null,tt.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Pe,bindFramebuffer:Oe,drawBuffers:Ce,useProgram:dt,setBlending:ot,setMaterial:We,setFlipSided:St,setCullFace:gt,setLineWidth:Dt,setPolygonOffset:F,setScissorTest:wt,activeTexture:je,bindTexture:ct,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:w,texImage2D:j,texImage3D:J,pixelStorei:ye,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:oe,texStorage3D:ae,texSubImage2D:v,texSubImage3D:N,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:ce,viewport:le,reset:k}}function Cg(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return g?new OffscreenCanvas(w,v):Gs("canvas")}function m(w,v,N){let Y=1;const Q=pe(w);if((Q.width>N||Q.height>N)&&(Y=N/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const oe=Math.floor(Y*Q.width),ae=Math.floor(Y*Q.height);u===void 0&&(u=_(oe,ae));const j=v?_(oe,ae):u;return j.width=oe,j.height=ae,j.getContext("2d").drawImage(w,0,0,oe,ae),Re("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+oe+"x"+ae+")."),j}else return"data"in w&&Re("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function p(w){return w.generateMipmaps}function M(w){s.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(w,v,N,Y,Q,oe=!1){if(w!==null){if(s[w]!==void 0)return s[w];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae;Y&&(ae=e.get("EXT_texture_norm16"),ae||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===s.RED&&(N===s.FLOAT&&(j=s.R32F),N===s.HALF_FLOAT&&(j=s.R16F),N===s.UNSIGNED_BYTE&&(j=s.R8),N===s.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),N===s.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(j=s.R8UI),N===s.UNSIGNED_SHORT&&(j=s.R16UI),N===s.UNSIGNED_INT&&(j=s.R32UI),N===s.BYTE&&(j=s.R8I),N===s.SHORT&&(j=s.R16I),N===s.INT&&(j=s.R32I)),v===s.RG&&(N===s.FLOAT&&(j=s.RG32F),N===s.HALF_FLOAT&&(j=s.RG16F),N===s.UNSIGNED_BYTE&&(j=s.RG8),N===s.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),N===s.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(j=s.RG8UI),N===s.UNSIGNED_SHORT&&(j=s.RG16UI),N===s.UNSIGNED_INT&&(j=s.RG32UI),N===s.BYTE&&(j=s.RG8I),N===s.SHORT&&(j=s.RG16I),N===s.INT&&(j=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(j=s.RGB8UI),N===s.UNSIGNED_SHORT&&(j=s.RGB16UI),N===s.UNSIGNED_INT&&(j=s.RGB32UI),N===s.BYTE&&(j=s.RGB8I),N===s.SHORT&&(j=s.RGB16I),N===s.INT&&(j=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),N===s.UNSIGNED_INT&&(j=s.RGBA32UI),N===s.BYTE&&(j=s.RGBA8I),N===s.SHORT&&(j=s.RGBA16I),N===s.INT&&(j=s.RGBA32I)),v===s.RGB&&(N===s.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),N===s.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),N===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),v===s.RGBA){const J=oe?Er:it.getTransfer(Q);N===s.FLOAT&&(j=s.RGBA32F),N===s.HALF_FLOAT&&(j=s.RGBA16F),N===s.UNSIGNED_BYTE&&(j=J===ft?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),N===s.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),N===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(w,v){let N;return w?v===null||v===Ln||v===Us?N=s.DEPTH24_STENCIL8:v===fn?N=s.DEPTH32F_STENCIL8:v===Ns&&(N=s.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ln||v===Us?N=s.DEPTH_COMPONENT24:v===fn?N=s.DEPTH_COMPONENT32F:v===Ns&&(N=s.DEPTH_COMPONENT16),N}function E(w,v){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ft&&w.minFilter!==Ot?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(w){const v=w.target;v.removeEventListener("dispose",x),I(v)}function A(w){const v=n.get(w);if(v.__webglInit===void 0)return;const N=w.source,Y=f.get(N);if(Y){const Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(w),Object.keys(Y).length===0&&f.delete(N)}n.remove(w)}function L(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const N=w.source,Y=f.get(N);delete Y[v.__cacheKey],o.memory.textures--}function I(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=w.textures;for(let Y=0,Q=N.length;Y<Q;Y++){const oe=n.get(N[Y]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(w)}let U=0;function H(){U=0}function K(){return U}function D(w){U=w}function W(){const w=U;return w>=i.maxTextures&&Re("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),U+=1,w}function V(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function ie(w,v){const N=n.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const Y=w.image;if(Y===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(N,w,v);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function se(w,v){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){Pe(N,w,v);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function ue(w,v){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){Pe(N,w,v);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function ge(w,v){const N=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){Oe(N,w,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const Se={[gi]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Sr]:s.MIRRORED_REPEAT},Fe={[Ft]:s.NEAREST,[Gl]:s.NEAREST_MIPMAP_NEAREST,[As]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[gr]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},tt={[ru]:s.NEVER,[hu]:s.ALWAYS,[ou]:s.LESS,[Ca]:s.LEQUAL,[au]:s.EQUAL,[Pa]:s.GEQUAL,[cu]:s.GREATER,[lu]:s.NOTEQUAL};function Ge(w,v){if(v.type===fn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ot||v.magFilter===gr||v.magFilter===As||v.magFilter===jn||v.minFilter===Ot||v.minFilter===gr||v.minFilter===As||v.minFilter===jn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Se[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Se[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Se[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Fe[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Fe[v.minFilter]),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,tt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ft||v.minFilter!==As&&v.minFilter!==jn||v.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(w,v){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const oe=V(v);if(oe!==w.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[oe].usedTimes++;const ae=Q[w.__cacheKey];ae!==void 0&&(Q[w.__cacheKey].usedTimes--,ae.usedTimes===0&&L(v)),w.__cacheKey=oe,w.__webglTexture=Q[oe].texture}return N}function fe(w,v,N){return Math.floor(Math.floor(w/N)/v)}function de(w,v,N,Y){const oe=w.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,N,Y,v.data);else{oe.sort((ye,ce)=>ye.start-ce.start);let ae=0;for(let ye=1;ye<oe.length;ye++){const ce=oe[ae],le=oe[ye],Ue=ce.start+ce.count,Be=fe(le.start,v.width,4),k=fe(ce.start,v.width,4);le.start<=Ue+1&&Be===k&&fe(le.start+le.count-1,v.width,4)===Be?ce.count=Math.max(ce.count,le.start+le.count-ce.start):(++ae,oe[ae]=le)}oe.length=ae+1;const j=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ye=0,ce=oe.length;ye<ce;ye++){const le=oe[ye],Ue=Math.floor(le.start/4),Be=Math.ceil(le.count/4),k=Ue%v.width,T=Math.floor(Ue/v.width),G=Be,O=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,k),t.pixelStorei(s.UNPACK_SKIP_ROWS,T),t.texSubImage2D(s.TEXTURE_2D,0,k,T,G,O,N,Y,v.data)}w.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,j),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function Pe(w,v,N){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);const Q=ne(w,v),oe=v.source;t.bindTexture(Y,w.__webglTexture,s.TEXTURE0+N);const ae=n.get(oe);if(oe.version!==ae.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+N),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const O=it.getPrimaries(it.workingColorSpace),re=v.colorSpace===fi?null:it.getPrimaries(v.colorSpace),ee=v.colorSpace===fi||O===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,i.maxTextureSize);J=$(v,J);const me=r.convert(v.format,v.colorSpace),ye=r.convert(v.type);let ce=y(v.internalFormat,me,ye,v.normalized,v.colorSpace,v.isVideoTexture);Ge(Y,v);let le;const Ue=v.mipmaps,Be=v.isVideoTexture!==!0,k=ae.__version===void 0||Q===!0,T=oe.dataReady,G=E(v,J);if(v.isDepthTexture)ce=R(v.format===Ti,v.type),k&&(Be?t.texStorage2D(s.TEXTURE_2D,1,ce,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,ce,J.width,J.height,0,me,ye,null));else if(v.isDataTexture)if(Ue.length>0){Be&&k&&t.texStorage2D(s.TEXTURE_2D,G,ce,Ue[0].width,Ue[0].height);for(let O=0,re=Ue.length;O<re;O++)le=Ue[O],Be?T&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,le.width,le.height,me,ye,le.data):t.texImage2D(s.TEXTURE_2D,O,ce,le.width,le.height,0,me,ye,le.data);v.generateMipmaps=!1}else Be?(k&&t.texStorage2D(s.TEXTURE_2D,G,ce,J.width,J.height),T&&de(v,J,me,ye)):t.texImage2D(s.TEXTURE_2D,0,ce,J.width,J.height,0,me,ye,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&k&&t.texStorage3D(s.TEXTURE_2D_ARRAY,G,ce,Ue[0].width,Ue[0].height,J.depth);for(let O=0,re=Ue.length;O<re;O++)if(le=Ue[O],v.format!==pn)if(me!==null)if(Be){if(T)if(v.layerUpdates.size>0){const ee=Kc(le.width,le.height,v.format,v.type);for(const te of v.layerUpdates){const xe=le.data.subarray(te*ee/le.data.BYTES_PER_ELEMENT,(te+1)*ee/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,te,le.width,le.height,1,me,xe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,le.width,le.height,J.depth,me,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,O,ce,le.width,le.height,J.depth,0,le.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?T&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,le.width,le.height,J.depth,me,ye,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,O,ce,le.width,le.height,J.depth,0,me,ye,le.data)}else{Be&&k&&t.texStorage2D(s.TEXTURE_2D,G,ce,Ue[0].width,Ue[0].height);for(let O=0,re=Ue.length;O<re;O++)le=Ue[O],v.format!==pn?me!==null?Be?T&&t.compressedTexSubImage2D(s.TEXTURE_2D,O,0,0,le.width,le.height,me,le.data):t.compressedTexImage2D(s.TEXTURE_2D,O,ce,le.width,le.height,0,le.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?T&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,le.width,le.height,me,ye,le.data):t.texImage2D(s.TEXTURE_2D,O,ce,le.width,le.height,0,me,ye,le.data)}else if(v.isDataArrayTexture)if(Be){if(k&&t.texStorage3D(s.TEXTURE_2D_ARRAY,G,ce,J.width,J.height,J.depth),T)if(v.layerUpdates.size>0){const O=Kc(J.width,J.height,v.format,v.type);for(const re of v.layerUpdates){const ee=J.data.subarray(re*O/J.data.BYTES_PER_ELEMENT,(re+1)*O/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,J.width,J.height,1,me,ye,ee)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,me,ye,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,me,ye,J.data);else if(v.isData3DTexture)Be?(k&&t.texStorage3D(s.TEXTURE_3D,G,ce,J.width,J.height,J.depth),T&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,me,ye,J.data)):t.texImage3D(s.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,me,ye,J.data);else if(v.isFramebufferTexture){if(k)if(Be)t.texStorage2D(s.TEXTURE_2D,G,ce,J.width,J.height);else{let O=J.width,re=J.height;for(let ee=0;ee<G;ee++)t.texImage2D(s.TEXTURE_2D,ee,ce,O,re,0,me,ye,null),O>>=1,re>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){const O=s.canvas;if(O.hasAttribute("layoutsubtree")||O.setAttribute("layoutsubtree","true"),J.parentNode!==O){O.appendChild(J),d.add(v),O.onpaint=he=>{const ze=he.changedElements;for(const Ie of d)ze.includes(Ie.image)&&(Ie.needsUpdate=!0)},O.requestPaint();return}const re=0,ee=s.RGBA,te=s.RGBA,xe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,re,ee,te,xe,J),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Be&&k){const O=pe(Ue[0]);t.texStorage2D(s.TEXTURE_2D,G,ce,O.width,O.height)}for(let O=0,re=Ue.length;O<re;O++)le=Ue[O],Be?T&&t.texSubImage2D(s.TEXTURE_2D,O,0,0,me,ye,le):t.texImage2D(s.TEXTURE_2D,O,ce,me,ye,le);v.generateMipmaps=!1}else if(Be){if(k){const O=pe(J);t.texStorage2D(s.TEXTURE_2D,G,ce,O.width,O.height)}T&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,ye,J)}else t.texImage2D(s.TEXTURE_2D,0,ce,me,ye,J);p(v)&&M(Y),ae.__version=oe.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Oe(w,v,N){if(v.image.length!==6)return;const Y=ne(w,v),Q=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+N);const oe=n.get(Q);if(Q.version!==oe.__version||Y===!0){t.activeTexture(s.TEXTURE0+N);const ae=it.getPrimaries(it.workingColorSpace),j=v.colorSpace===fi?null:it.getPrimaries(v.colorSpace),J=v.colorSpace===fi||ae===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const me=v.isCompressedTexture||v.image[0].isCompressedTexture,ye=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!me&&!ye?ce[te]=m(v.image[te],!0,i.maxCubemapSize):ce[te]=ye?v.image[te].image:v.image[te],ce[te]=$(v,ce[te]);const le=ce[0],Ue=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),k=y(v.internalFormat,Ue,Be,v.normalized,v.colorSpace),T=v.isVideoTexture!==!0,G=oe.__version===void 0||Y===!0,O=Q.dataReady;let re=E(v,le);Ge(s.TEXTURE_CUBE_MAP,v);let ee;if(me){T&&G&&t.texStorage2D(s.TEXTURE_CUBE_MAP,re,k,le.width,le.height);for(let te=0;te<6;te++){ee=ce[te].mipmaps;for(let xe=0;xe<ee.length;xe++){const he=ee[xe];v.format!==pn?Ue!==null?T?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,he.width,he.height,Ue,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,k,he.width,he.height,0,he.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,he.width,he.height,Ue,Be,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,k,he.width,he.height,0,Ue,Be,he.data)}}}else{if(ee=v.mipmaps,T&&G){ee.length>0&&re++;const te=pe(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,re,k,te.width,te.height)}for(let te=0;te<6;te++)if(ye){T?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,Ue,Be,ce[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,k,ce[te].width,ce[te].height,0,Ue,Be,ce[te].data);for(let xe=0;xe<ee.length;xe++){const ze=ee[xe].image[te].image;T?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,ze.width,ze.height,Ue,Be,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,k,ze.width,ze.height,0,Ue,Be,ze.data)}}else{T?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,Be,ce[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,k,Ue,Be,ce[te]);for(let xe=0;xe<ee.length;xe++){const he=ee[xe];T?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ue,Be,he.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,k,Ue,Be,he.image[te])}}}p(v)&&M(s.TEXTURE_CUBE_MAP),oe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ce(w,v,N,Y,Q,oe){const ae=r.convert(N.format,N.colorSpace),j=r.convert(N.type),J=y(N.internalFormat,ae,j,N.normalized,N.colorSpace),me=n.get(v),ye=n.get(N);if(ye.__renderTarget=v,!me.__hasExternalTextures){const ce=Math.max(1,v.width>>oe),le=Math.max(1,v.height>>oe);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,oe,J,ce,le,v.depth,0,ae,j,null):t.texImage2D(Q,oe,J,ce,le,0,ae,j,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),je(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,ye.__webglTexture,0,wt(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,ye.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(w,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer){const Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,oe=R(v.stencilBuffer,Q),ae=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;je(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(v),oe,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(v),oe,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,oe,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,w)}else{const Y=v.textures;for(let Q=0;Q<Y.length;Q++){const oe=Y[Q],ae=r.convert(oe.format,oe.colorSpace),j=r.convert(oe.type),J=y(oe.internalFormat,ae,j,oe.normalized,oe.colorSpace);je(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(v),J,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(v),J,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(w,v,N){const Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,v.depthTexture);const me=r.convert(v.depthTexture.format),ye=r.convert(v.depthTexture.type);let ce;v.depthTexture.format===ti?ce=s.DEPTH_COMPONENT24:v.depthTexture.format===Ti&&(ce=s.DEPTH24_STENCIL8);for(let le=0;le<6;le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ce,v.width,v.height,0,me,ye,null)}}else ie(v.depthTexture,0);const oe=Q.__webglTexture,ae=wt(v),j=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,J=v.depthTexture.format===Ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===ti)je(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,j,oe,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,J,j,oe,0);else if(v.depthTexture.format===Ti)je(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,j,oe,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,J,j,oe,0);else throw new Error("Unknown depthTexture format")}function at(w){const v=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Ke(v.__webglFramebuffer[Y],w,Y);else{const Y=w.texture.mipmaps;Y&&Y.length>0?Ke(v.__webglFramebuffer[0],w,0):Ke(v.__webglFramebuffer,w,0)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),dt(v.__webglDepthbuffer[Y],w,!1);else{const Q=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,oe)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),dt(v.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,oe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(w,v,N){const Y=n.get(w);v!==void 0&&Ce(Y.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&at(w)}function We(w){const v=w.texture,N=n.get(w),Y=n.get(v);w.addEventListener("dispose",x);const Q=w.textures,oe=w.isWebGLCubeRenderTarget===!0,ae=Q.length>1;if(ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,o.memory.textures++),oe){N.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[j]=[];for(let J=0;J<v.mipmaps.length;J++)N.__webglFramebuffer[j][J]=s.createFramebuffer()}else N.__webglFramebuffer[j]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)N.__webglFramebuffer[j]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(ae)for(let j=0,J=Q.length;j<J;j++){const me=n.get(Q[j]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&je(w)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const J=Q[j];N.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[j]);const me=r.convert(J.format,J.colorSpace),ye=r.convert(J.type),ce=y(J.internalFormat,me,ye,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),le=wt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,le,ce,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,N.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Ce(N.__webglFramebuffer[j][J],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,J);else Ce(N.__webglFramebuffer[j],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(v)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,J=Q.length;j<J;j++){const me=Q[j],ye=n.get(me);let ce=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,ye.__webglTexture),Ge(ce,me),Ce(N.__webglFramebuffer,w,me,s.COLOR_ATTACHMENT0+j,ce,0),p(me)&&M(ce)}t.unbindTexture()}else{let j=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,Y.__webglTexture),Ge(j,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Ce(N.__webglFramebuffer[J],w,v,s.COLOR_ATTACHMENT0,j,J);else Ce(N.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,j,0);p(v)&&M(j),t.unbindTexture()}w.depthBuffer&&at(w)}function St(w){const v=w.textures;for(let N=0,Y=v.length;N<Y;N++){const Q=v[N];if(p(Q)){const oe=S(w),ae=n.get(Q).__webglTexture;t.bindTexture(oe,ae),M(oe),t.unbindTexture()}}}const gt=[],Dt=[];function F(w){if(w.samples>0){if(je(w)===!1){const v=w.textures,N=w.width,Y=w.height;let Q=s.COLOR_BUFFER_BIT;const oe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(w),j=v.length>1;if(j)for(let me=0;me<v.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const J=w.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let me=0;me<v.length;me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[me]);const ye=n.get(v[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,Q,s.NEAREST),c===!0&&(gt.length=0,Dt.length=0,gt.push(s.COLOR_ATTACHMENT0+me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(gt.push(oe),Dt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Dt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let me=0;me<v.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,ae.__webglColorRenderbuffer[me]);const ye=n.get(v[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function wt(w){return Math.min(i.maxSamples,w.samples)}function je(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function $(w,v){const N=w.colorSpace,Y=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==cn&&N!==fi&&(it.getTransfer(N)===ft?(Y!==pn||Q!==an)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",N)),v}function pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.getTextureUnits=K,this.setTextureUnits=D,this.setTexture2D=ie,this.setTexture2DArray=se,this.setTexture3D=ue,this.setTextureCube=ge,this.rebindTextures=ot,this.setupRenderTarget=We,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Pg(s,e){function t(n,i=fi){let r;const o=it.getTransfer(i);if(n===an)return s.UNSIGNED_BYTE;if(n===wa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ba)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===zl)return s.BYTE;if(n===kl)return s.SHORT;if(n===Ns)return s.UNSIGNED_SHORT;if(n===Sa)return s.INT;if(n===Ln)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===ei)return s.HALF_FLOAT;if(n===Wl)return s.ALPHA;if(n===Xl)return s.RGB;if(n===pn)return s.RGBA;if(n===ti)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===Ea)return s.RED;if(n===Ta)return s.RED_INTEGER;if(n===Pi)return s.RG;if(n===Aa)return s.RG_INTEGER;if(n===Ra)return s.RGBA_INTEGER;if(n===_r||n===xr||n===vr||n===Mr)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Uo||n===Fo||n===Oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===Go||n===zo||n===ko||n===Vo||n===wr||n===Ho)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===Go)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ko)return r.COMPRESSED_R11_EAC;if(n===Vo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wr)return r.COMPRESSED_RG11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===Ko||n===$o||n===Zo||n===Jo||n===Qo||n===ea||n===ta||n===na||n===ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===ra||n===oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sa)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===ca||n===br||n===la)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dn({vertexShader:Ig,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends Ii{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Dg,p={},M=t.getContextAttributes();let S=null,y=null;const R=[],E=[],C=new Ze;let x=null;const A=new Wt;A.viewport=new Mt;const L=new Wt;L.viewport=new Mt;const I=[A,L],U=new Dd;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=R[ne];return fe===void 0&&(fe=new qr,R[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=R[ne];return fe===void 0&&(fe=new qr,R[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=R[ne];return fe===void 0&&(fe=new qr,R[ne]=fe),fe.getHandSpace()};function D(ne){const fe=E.indexOf(ne.inputSource);if(fe===-1)return;const de=R[fe];de!==void 0&&(de.update(ne.inputSource,ne.frame,l||o),de.dispatchEvent({type:ne.type,data:ne.inputSource}))}function W(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",V);for(let ne=0;ne<R.length;ne++){const fe=E[ne];fe!==null&&(E[ne]=null,R[ne].disconnect(fe))}H=null,K=null,m.reset();for(const ne in p)delete p[ne];e.setRenderTarget(S),f=null,u=null,d=null,i=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",W),i.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Pe=null,Oe=null;M.depth&&(Oe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?Ti:ti,Pe=M.stencil?Us:Ln);const Ce={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ce),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Pn(u.textureWidth,u.textureHeight,{format:pn,type:an,depthTexture:new rs(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const de={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Pn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(ne){for(let fe=0;fe<ne.removed.length;fe++){const de=ne.removed[fe],Pe=E.indexOf(de);Pe>=0&&(E[Pe]=null,R[Pe].disconnect(de))}for(let fe=0;fe<ne.added.length;fe++){const de=ne.added[fe];let Pe=E.indexOf(de);if(Pe===-1){for(let Ce=0;Ce<R.length;Ce++)if(Ce>=E.length){E.push(de),Pe=Ce;break}else if(E[Ce]===null){E[Ce]=de,Pe=Ce;break}if(Pe===-1)break}const Oe=R[Pe];Oe&&Oe.connect(de)}}const ie=new P,se=new P;function ue(ne,fe,de){ie.setFromMatrixPosition(fe.matrixWorld),se.setFromMatrixPosition(de.matrixWorld);const Pe=ie.distanceTo(se),Oe=fe.projectionMatrix.elements,Ce=de.projectionMatrix.elements,dt=Oe[14]/(Oe[10]-1),Ke=Oe[14]/(Oe[10]+1),at=(Oe[9]+1)/Oe[5],ot=(Oe[9]-1)/Oe[5],We=(Oe[8]-1)/Oe[0],St=(Ce[8]+1)/Ce[0],gt=dt*We,Dt=dt*St,F=Pe/(-We+St),wt=F*-We;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(wt),ne.translateZ(F),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Oe[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=dt+F,ct=Ke+F,$=gt-wt,pe=Dt+(Pe-wt),w=at*Ke/ct*je,v=ot*Ke/ct*je;ne.projectionMatrix.makePerspective($,pe,w,v,je,ct),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let fe=ne.near,de=ne.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(de=m.depthFar)),U.near=L.near=A.near=fe,U.far=L.far=A.far=de,(H!==U.near||K!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,K=U.far),U.layers.mask=ne.layers.mask|6,A.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Pe=ne.parent,Oe=U.cameras;ge(U,Pe);for(let Ce=0;Ce<Oe.length;Ce++)ge(Oe[Ce],Pe);Oe.length===2?ue(U,A,L):U.projectionMatrix.copy(A.projectionMatrix),Se(ne,U,Pe)};function Se(ne,fe,de){de===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(de.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ss*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(ne){c=ne,u!==null&&(u.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(ne){return p[ne]};let Fe=null;function tt(ne,fe){if(h=fe.getViewerPose(l||o),g=fe,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;de.length!==U.cameras.length&&(U.cameras.length=0,Pe=!0);for(let Ke=0;Ke<de.length;Ke++){const at=de[Ke];let ot=null;if(f!==null)ot=f.getViewport(at);else{const St=d.getViewSubImage(u,at);ot=St.viewport,Ke===0&&(e.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(y))}let We=I[Ke];We===void 0&&(We=new Wt,We.layers.enable(Ke),We.viewport=new Mt,I[Ke]=We),We.matrix.fromArray(at.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(at.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ot.x,ot.y,ot.width,ot.height),Ke===0&&(U.matrix.copy(We.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pe===!0&&U.cameras.push(We)}const Oe=i.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Ke=d.getDepthInformation(de[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,i.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ke=0;Ke<de.length;Ke++){const at=de[Ke].camera;if(at){let ot=p[at];ot||(ot=new nh,p[at]=ot);const We=d.getCameraImage(at);ot.sourceTexture=We}}}}for(let de=0;de<R.length;de++){const Pe=E[de],Oe=R[de];Pe!==null&&Oe!==void 0&&Oe.update(Pe,fe,l||o)}Fe&&Fe(ne,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ge=new hh;Ge.setAnimationLoop(tt),this.setAnimationLoop=function(ne){Fe=ne},this.dispose=function(){}}}const Ug=new et,_h=new qe;_h.set(-1,0,0,0,1,0,0,0,1);function Fg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ih(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_h),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Og(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function l(M,S){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(M,R);const E=e.render.frame;r[M.id]!==E&&(u(M),r[M.id]=E)}function h(M){const S=d();M.__bindingPointIndex=S;const y=s.createBuffer(),R=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const S=i[M.id],y=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,C=y.length;E<C;E++){const x=Array.isArray(y[E])?y[E]:[y[E]];for(let A=0,L=x.length;A<L;A++){const I=x[A];if(f(I,E,A,R)===!0){const U=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let K=0;for(let D=0;D<H.length;D++){const W=H[D],V=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,U+K,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):ArrayBuffer.isView(W)?I.__data.set(new W.constructor(W.buffer,W.byteOffset,I.__data.length)):(W.toArray(I.__data,K),K+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,y,R){const E=M.value,C=S+"_"+y;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:ArrayBuffer.isView(E)?R[C]=E.slice():R[C]=E.clone(),!0;{const x=R[C];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return R[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function g(M){const S=M.uniforms;let y=0;const R=16;for(let C=0,x=S.length;C<x;C++){const A=Array.isArray(S[C])?S[C]:[S[C]];for(let L=0,I=A.length;L<I;L++){const U=A[L],H=Array.isArray(U.value)?U.value:[U.value];for(let K=0,D=H.length;K<D;K++){const W=H[K],V=_(W),ie=y%R,se=ie%V.boundary,ue=ie+se;y+=se,ue!==0&&R-ue<V.storage&&(y+=R-ue),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=V.storage}}}const E=y%R;return E>0&&(y+=R-E),M.__size=y,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}const Bg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function Gg(){return bn===null&&(bn=new Fa(Bg,16,16,Pi,ei),bn.name="DFG_LUT",bn.minFilter=Ot,bn.magFilter=Ot,bn.wrapS=An,bn.wrapT=An,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class Xa{constructor(e={}){const{canvas:t=fu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=f,m=new Set([Ra,Aa,Ta]),p=new Set([an,Ln,Ns,Us,wa,ba]),M=new Uint32Array(4),S=new Int32Array(4),y=new P;let R=null,E=null;const C=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1,U=null;this._outputColorSpace=Ht;let H=0,K=0,D=null,W=-1,V=null;const ie=new Mt,se=new Mt;let ue=null;const ge=new Le(0);let Se=0,Fe=t.width,tt=t.height,Ge=1,ne=null,fe=null;const de=new Mt(0,0,Fe,tt),Pe=new Mt(0,0,Fe,tt);let Oe=!1;const Ce=new Ba;let dt=!1,Ke=!1;const at=new et,ot=new P,We=new Mt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Dt(){return D===null?Ge:1}let F=n;function wt(b,z){return t.getContext(b,z)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",he,!1),F===null){const z="webgl2";if(F=wt(z,b),F===null)throw wt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ke("WebGLRenderer: "+b.message),b}let je,ct,$,pe,w,v,N,Y,Q,oe,ae,j,J,me,ye,ce,le,Ue,Be,k,T,G,O;function re(){je=new Gm(F),je.init(),T=new Pg(F,je),ct=new Im(F,je,e,T),$=new Rg(F,je),ct.reversedDepthBuffer&&u&&$.buffers.depth.setReversed(!0),pe=new Vm(F),w=new pg,v=new Cg(F,je,$,w,ct,T,pe),N=new Bm(L),Y=new Xd(F),G=new Cm(F,Y),Q=new zm(F,Y,pe,G),oe=new Wm(F,Q,Y,G,pe),Ue=new Hm(F,ct,v),ye=new Lm(w),ae=new fg(L,N,je,ct,G,ye),j=new Fg(L,w),J=new gg,me=new Sg(je),le=new Rm(L,N,$,oe,g,c),ce=new Ag(L,oe,ct),O=new Og(F,pe,ct,$),Be=new Pm(F,je,pe),k=new km(F,je,pe),pe.programs=ae.programs,L.capabilities=ct,L.extensions=je,L.properties=w,L.renderLists=J,L.shadowMap=ce,L.state=$,L.info=pe}re(),_!==an&&(A=new qm(_,t.width,t.height,i,r));const ee=new Ng(L,F);this.xr=ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(b){b!==void 0&&(Ge=b,this.setSize(Fe,tt,!1))},this.getSize=function(b){return b.set(Fe,tt)},this.setSize=function(b,z,Z=!0){if(ee.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=b,tt=z,t.width=Math.floor(b*Ge),t.height=Math.floor(z*Ge),Z===!0&&(t.style.width=b+"px",t.style.height=z+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(Fe*Ge,tt*Ge).floor()},this.setDrawingBufferSize=function(b,z,Z){Fe=b,tt=z,Ge=Z,t.width=Math.floor(b*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(_===an){ke("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Re("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(de)},this.setViewport=function(b,z,Z,X){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,z,Z,X),$.viewport(ie.copy(de).multiplyScalar(Ge).round())},this.getScissor=function(b){return b.copy(Pe)},this.setScissor=function(b,z,Z,X){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,z,Z,X),$.scissor(se.copy(Pe).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){$.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){ne=b},this.setTransparentSort=function(b){fe=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,Z=!0){let X=0;if(b){let q=!1;if(D!==null){const Me=D.texture.format;q=m.has(Me)}if(q){const Me=D.texture.type,Ee=p.has(Me),ve=le.getClearColor(),Ae=le.getClearAlpha(),De=ve.r,Ye=ve.g,Je=ve.b;Ee?(M[0]=De,M[1]=Ye,M[2]=Je,M[3]=Ae,F.clearBufferuiv(F.COLOR,0,M)):(S[0]=De,S[1]=Ye,S[2]=Je,S[3]=Ae,F.clearBufferiv(F.COLOR,0,S))}else X|=F.COLOR_BUFFER_BIT}z&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),le.dispose(),J.dispose(),me.dispose(),w.dispose(),N.dispose(),oe.dispose(),G.dispose(),O.dispose(),ae.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Kt),ee.removeEventListener("sessionend",ln),tn.stop()};function te(b){b.preventDefault(),Tr("WebGLRenderer: Context Lost."),I=!0}function xe(){Tr("WebGLRenderer: Context Restored."),I=!1;const b=pe.autoReset,z=ce.enabled,Z=ce.autoUpdate,X=ce.needsUpdate,q=ce.type;re(),pe.autoReset=b,ce.enabled=z,ce.autoUpdate=Z,ce.needsUpdate=X,ce.type=q}function he(b){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){const z=b.target;z.removeEventListener("dispose",ze),Ie(z)}function Ie(b){Et(b),w.remove(b)}function Et(b){const z=w.get(b).programs;z!==void 0&&(z.forEach(function(Z){ae.releaseProgram(Z)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Z,X,q,Me){z===null&&(z=St);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,ve=Th(b,z,Z,X,q);$.setMaterial(X,Ee);let Ae=Z.index,De=1;if(X.wireframe===!0){if(Ae=Q.getWireframeAttribute(Z),Ae===void 0)return;De=2}const Ye=Z.drawRange,Je=Z.attributes.position;let Ne=Ye.start*De,_t=(Ye.start+Ye.count)*De;Me!==null&&(Ne=Math.max(Ne,Me.start*De),_t=Math.min(_t,(Me.start+Me.count)*De)),Ae!==null?(Ne=Math.max(Ne,0),_t=Math.min(_t,Ae.count)):Je!=null&&(Ne=Math.max(Ne,0),_t=Math.min(_t,Je.count));const Rt=_t-Ne;if(Rt<0||Rt===1/0)return;G.setup(q,X,ve,Z,Ae);let At,xt=Be;if(Ae!==null&&(At=Y.get(Ae),xt=k,xt.setIndex(At)),q.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*Dt()),xt.setMode(F.LINES)):xt.setMode(F.TRIANGLES);else if(q.isLine){let qt=X.linewidth;qt===void 0&&(qt=1),$.setLineWidth(qt*Dt()),q.isLineSegments?xt.setMode(F.LINES):q.isLineLoop?xt.setMode(F.LINE_LOOP):xt.setMode(F.LINE_STRIP)}else q.isPoints?xt.setMode(F.POINTS):q.isSprite&&xt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(je.get("WEBGL_multi_draw"))xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const qt=q._multiDrawStarts,be=q._multiDrawCounts,sn=q._multiDrawCount,lt=Ae?Y.get(Ae).bytesPerElement:1,hn=w.get(X).currentProgram.getUniforms();for(let Sn=0;Sn<sn;Sn++)hn.setValue(F,"_gl_DrawID",Sn),xt.render(qt[Sn]/lt,be[Sn])}else if(q.isInstancedMesh)xt.renderInstances(Ne,Rt,q.count);else if(Z.isInstancedBufferGeometry){const qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,be=Math.min(Z.instanceCount,qt);xt.renderInstances(Ne,Rt,be)}else xt.render(Ne,Rt)};function ht(b,z,Z){b.transparent===!0&&b.side===Ut&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,ni(b,z,Z),b.side=Qn,b.needsUpdate=!0,ni(b,z,Z),b.side=Ut):ni(b,z,Z)}this.compile=function(b,z,Z=null){Z===null&&(Z=b),E=me.get(Z),E.init(z),x.push(E),Z.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),b!==Z&&b.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights();const X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){const ve=Me[Ee];ht(ve,Z,q),X.add(ve)}else ht(Me,Z,q),X.add(Me)}),E=x.pop(),X},this.compileAsync=function(b,z,Z=null){const X=this.compile(b,z,Z);return new Promise(q=>{function Me(){if(X.forEach(function(Ee){w.get(Ee).currentProgram.isReady()&&X.delete(Ee)}),X.size===0){q(b);return}setTimeout(Me,10)}je.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Nt=null;function en(b){Nt&&Nt(b)}function Kt(){tn.stop()}function ln(){tn.start()}const tn=new hh;tn.setAnimationLoop(en),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(b){Nt=b,ee.setAnimationLoop(b),b===null?tn.stop():tn.start()},ee.addEventListener("sessionstart",Kt),ee.addEventListener("sessionend",ln),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(b,z);const Z=ee.enabled===!0&&ee.isPresenting===!0,X=A!==null&&(D===null||Z)&&A.begin(L,D);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(z),z=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,z,D),E=me.get(b,x.length),E.init(z),E.state.textureUnits=v.getTextureUnits(),x.push(E),at.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ce.setFromProjectionMatrix(at,Rn,z.reversedDepth),Ke=this.localClippingEnabled,dt=ye.init(this.clippingPlanes,Ke),R=J.get(b,C.length),R.init(),C.push(R),ee.enabled===!0&&ee.isPresenting===!0){const Ee=L.xr.getDepthSensingMesh();Ee!==null&&On(Ee,z,-1/0,L.sortObjects)}On(b,z,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(ne,fe),gt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,gt&&le.addToRenderList(R,b),this.info.render.frame++,dt===!0&&ye.beginShadows();const q=E.state.shadowsArray;if(ce.render(q,b,z),dt===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&A.hasRenderPass())===!1){const Ee=R.opaque,ve=R.transmissive;if(E.setupLights(),z.isArrayCamera){const Ae=z.cameras;if(ve.length>0)for(let De=0,Ye=Ae.length;De<Ye;De++){const Je=Ae[De];nn(Ee,ve,b,Je)}gt&&le.render(b);for(let De=0,Ye=Ae.length;De<Ye;De++){const Je=Ae[De];Li(R,b,Je,Je.viewport)}}else ve.length>0&&nn(Ee,ve,b,z),gt&&le.render(b),Li(R,b,z)}D!==null&&K===0&&(v.updateMultisampleRenderTarget(D),v.updateRenderTargetMipmap(D)),X&&A.end(L),b.isScene===!0&&b.onAfterRender(L,b,z),G.resetDefaultState(),W=-1,V=null,x.pop(),x.length>0?(E=x[x.length-1],v.setTextureUnits(E.state.textureUnits),dt===!0&&ye.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,U!==null&&U.renderEnd()};function On(b,z,Z,X){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ce.intersectsSprite(b)){X&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const Ee=oe.update(b),ve=b.material;ve.visible&&R.push(b,Ee,ve,Z,We.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ce.intersectsObject(b))){const Ee=oe.update(b),ve=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),We.copy(Ee.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(ve)){const Ae=Ee.groups;for(let De=0,Ye=Ae.length;De<Ye;De++){const Je=Ae[De],Ne=ve[Je.materialIndex];Ne&&Ne.visible&&R.push(b,Ee,Ne,Z,We.z,Je)}}else ve.visible&&R.push(b,Ee,ve,Z,We.z,null)}}const Me=b.children;for(let Ee=0,ve=Me.length;Ee<ve;Ee++)On(Me[Ee],z,Z,X)}function Li(b,z,Z,X){const{opaque:q,transmissive:Me,transparent:Ee}=b;E.setupLightsView(Z),dt===!0&&ye.setGlobalState(L.clippingPlanes,Z),X&&$.viewport(ie.copy(X)),q.length>0&&Di(q,z,Z),Me.length>0&&Di(Me,z,Z),Ee.length>0&&Di(Ee,z,Z),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function nn(b,z,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){const Ne=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new Pn(1,1,{generateMipmaps:!0,type:Ne?ei:an,minFilter:jn,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Me=E.state.transmissionRenderTarget[X.id],Ee=X.viewport||ie;Me.setSize(Ee.z*L.transmissionResolutionScale,Ee.w*L.transmissionResolutionScale);const ve=L.getRenderTarget(),Ae=L.getActiveCubeFace(),De=L.getActiveMipmapLevel();L.setRenderTarget(Me),L.getClearColor(ge),Se=L.getClearAlpha(),Se<1&&L.setClearColor(16777215,.5),L.clear(),gt&&le.render(Z);const Ye=L.toneMapping;L.toneMapping=Cn;const Je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),dt===!0&&ye.setGlobalState(L.clippingPlanes,X),Di(b,Z,X),v.updateMultisampleRenderTarget(Me),v.updateRenderTargetMipmap(Me),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let _t=0,Rt=z.length;_t<Rt;_t++){const At=z[_t],{object:xt,geometry:qt,material:be,group:sn}=At;if(be.side===Ut&&xt.layers.test(X.layers)){const lt=be.side;be.side=Xt,be.needsUpdate=!0,Bn(xt,Z,X,qt,be,sn),be.side=lt,be.needsUpdate=!0,Ne=!0}}Ne===!0&&(v.updateMultisampleRenderTarget(Me),v.updateRenderTargetMipmap(Me))}L.setRenderTarget(ve,Ae,De),L.setClearColor(ge,Se),Je!==void 0&&(X.viewport=Je),L.toneMapping=Ye}function Di(b,z,Z){const X=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Me=b.length;q<Me;q++){const Ee=b[q],{object:ve,geometry:Ae,group:De}=Ee;let Ye=Ee.material;Ye.allowOverride===!0&&X!==null&&(Ye=X),ve.layers.test(Z.layers)&&Bn(ve,z,Z,Ae,Ye,De)}}function Bn(b,z,Z,X,q,Me){b.onBeforeRender(L,z,Z,X,q,Me),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(L,z,Z,X,b,Me),q.transparent===!0&&q.side===Ut&&q.forceSinglePass===!1?(q.side=Xt,q.needsUpdate=!0,L.renderBufferDirect(Z,z,X,q,b,Me),q.side=Qn,q.needsUpdate=!0,L.renderBufferDirect(Z,z,X,q,b,Me),q.side=Ut):L.renderBufferDirect(Z,z,X,q,b,Me),b.onAfterRender(L,z,Z,X,q,Me)}function ni(b,z,Z){z.isScene!==!0&&(z=St);const X=w.get(b),q=E.state.lights,Me=E.state.shadowsArray,Ee=q.state.version,ve=ae.getParameters(b,q.state,Me,z,Z,E.state.lightProbeGridArray),Ae=ae.getProgramCacheKey(ve);let De=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;const Ye=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=N.get(b.envMap||X.environment,Ye),X.envMapRotation=X.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",ze),De=new Map,X.programs=De);let Je=De.get(Ae);if(Je!==void 0){if(X.currentProgram===Je&&X.lightsStateVersion===Ee)return Qa(b,ve),Je}else ve.uniforms=ae.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,Z,ve),b.onBeforeCompile(ve,L),Je=ae.acquireProgram(ve,Ae),De.set(Ae,Je),X.uniforms=ve.uniforms;const Ne=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=ye.uniform),Qa(b,ve),X.needsLights=Rh(b),X.lightsStateVersion=Ee,X.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=Je,X.uniformsList=null,Je}function Ja(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=yr.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Qa(b,z){const Z=w.get(b);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Eh(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let Z=0,X=b.length;Z<X;Z++){const q=b[Z];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function Th(b,z,Z,X,q){z.isScene!==!0&&(z=St),v.resetTextureUnits();const Me=z.fog,Ee=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,ve=D===null?L.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:it.workingColorSpace,Ae=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,De=N.get(X.envMap||Ee,Ae),Ye=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Je=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!Z.morphAttributes.position,_t=!!Z.morphAttributes.normal,Rt=!!Z.morphAttributes.color;let At=Cn;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=L.toneMapping);const xt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,qt=xt!==void 0?xt.length:0,be=w.get(X),sn=E.state.lights;if(dt===!0&&(Ke===!0||b!==V)){const yt=b===V&&X.id===W;ye.setState(X,b,yt)}let lt=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==sn.state.version||be.outputColorSpace!==ve||q.isBatchedMesh&&be.batching===!1||!q.isBatchedMesh&&be.batching===!0||q.isBatchedMesh&&be.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&be.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&be.instancing===!1||!q.isInstancedMesh&&be.instancing===!0||q.isSkinnedMesh&&be.skinning===!1||!q.isSkinnedMesh&&be.skinning===!0||q.isInstancedMesh&&be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&be.instancingMorph===!1&&q.morphTexture!==null||be.envMap!==De||X.fog===!0&&be.fog!==Me||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ye.numPlanes||be.numIntersection!==ye.numIntersection)||be.vertexAlphas!==Ye||be.vertexTangents!==Je||be.morphTargets!==Ne||be.morphNormals!==_t||be.morphColors!==Rt||be.toneMapping!==At||be.morphTargetsCount!==qt||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,be.__version=X.version);let hn=be.currentProgram;lt===!0&&(hn=ni(X,z,q),U&&X.isNodeMaterial&&U.onUpdateProgram(X,hn,be));let Sn=!1,ii=!1,Ni=!1;const vt=hn.getUniforms(),Ct=be.uniforms;if($.useProgram(hn.program)&&(Sn=!0,ii=!0,Ni=!0),X.id!==W&&(W=X.id,ii=!0),be.needsLights){const yt=Eh(E.state.lightProbeGridArray,q);be.lightProbeGrid!==yt&&(be.lightProbeGrid=yt,ii=!0)}if(Sn||V!==b){$.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(F,"projectionMatrix",b.projectionMatrix),vt.setValue(F,"viewMatrix",b.matrixWorldInverse);const ri=vt.map.cameraPosition;ri!==void 0&&ri.setValue(F,ot.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,ii=!0,Ni=!0)}if(be.needsLights&&(sn.state.directionalShadowMap.length>0&&vt.setValue(F,"directionalShadowMap",sn.state.directionalShadowMap,v),sn.state.spotShadowMap.length>0&&vt.setValue(F,"spotShadowMap",sn.state.spotShadowMap,v),sn.state.pointShadowMap.length>0&&vt.setValue(F,"pointShadowMap",sn.state.pointShadowMap,v)),q.isSkinnedMesh){vt.setOptional(F,q,"bindMatrix"),vt.setOptional(F,q,"bindMatrixInverse");const yt=q.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),vt.setValue(F,"boneTexture",yt.boneTexture,v))}q.isBatchedMesh&&(vt.setOptional(F,q,"batchingTexture"),vt.setValue(F,"batchingTexture",q._matricesTexture,v),vt.setOptional(F,q,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",q._indirectTexture,v),vt.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",q._colorsTexture,v));const si=Z.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&Ue.update(q,Z,hn),(ii||be.receiveShadow!==q.receiveShadow)&&(be.receiveShadow=q.receiveShadow,vt.setValue(F,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(Ct.envMapIntensity.value=z.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Gg()),ii){if(vt.setValue(F,"toneMappingExposure",L.toneMappingExposure),be.needsLights&&Ah(Ct,Ni),Me&&X.fog===!0&&j.refreshFogUniforms(Ct,Me),j.refreshMaterialUniforms(Ct,X,Ge,tt,E.state.transmissionRenderTarget[b.id]),be.needsLights&&be.lightProbeGrid){const yt=be.lightProbeGrid;Ct.probesSH.value=yt.texture,Ct.probesMin.value.copy(yt.boundingBox.min),Ct.probesMax.value.copy(yt.boundingBox.max),Ct.probesResolution.value.copy(yt.resolution)}yr.upload(F,Ja(be),Ct,v)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(yr.upload(F,Ja(be),Ct,v),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(F,"center",q.center),vt.setValue(F,"modelViewMatrix",q.modelViewMatrix),vt.setValue(F,"normalMatrix",q.normalMatrix),vt.setValue(F,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const yt=X.uniformsGroups;for(let ri=0,Ui=yt.length;ri<Ui;ri++){const ec=yt[ri];O.update(ec,hn),O.bind(ec,hn)}}return hn}function Ah(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Rh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,z,Z){const X=w.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),w.get(b.texture).__webglTexture=z,w.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const Z=w.get(b);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const Ch=F.createFramebuffer();this.setRenderTarget=function(b,z=0,Z=0){D=b,H=z,K=Z;let X=null,q=!1,Me=!1;if(b){const ve=w.get(b);if(ve.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),ie.copy(b.viewport),se.copy(b.scissor),ue=b.scissorTest,$.viewport(ie),$.scissor(se),$.setScissorTest(ue),W=-1;return}else if(ve.__webglFramebuffer===void 0)v.setupRenderTarget(b);else if(ve.__hasExternalTextures)v.rebindTextures(b,w.get(b.texture).__webglTexture,w.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ye=b.depthTexture;if(ve.__boundDepthTexture!==Ye){if(Ye!==null&&w.has(Ye)&&(b.width!==Ye.image.width||b.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Me=!0);const De=w.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[z])?X=De[z][Z]:X=De[z],q=!0):b.samples>0&&v.useMultisampledRTT(b)===!1?X=w.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?X=De[Z]:X=De,ie.copy(b.viewport),se.copy(b.scissor),ue=b.scissorTest}else ie.copy(de).multiplyScalar(Ge).floor(),se.copy(Pe).multiplyScalar(Ge).floor(),ue=Oe;if(Z!==0&&(X=Ch),$.bindFramebuffer(F.FRAMEBUFFER,X)&&$.drawBuffers(b,X),$.viewport(ie),$.scissor(se),$.setScissorTest(ue),q){const ve=w.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,ve.__webglTexture,Z)}else if(Me){const ve=z;for(let Ae=0;Ae<b.textures.length;Ae++){const De=w.get(b.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,De.__webglTexture,Z,ve)}}else if(b!==null&&Z!==0){const ve=w.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,Z)}W=-1},this.readRenderTargetPixels=function(b,z,Z,X,q,Me,Ee,ve=0){if(!(b&&b.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){$.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const De=b.textures[ve],Ye=De.format,Je=De.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),!ct.textureFormatReadable(Ye)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Je)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-X&&Z>=0&&Z<=b.height-q&&F.readPixels(z,Z,X,q,T.convert(Ye),T.convert(Je),Me)}finally{const De=D!==null?w.get(D).__webglFramebuffer:null;$.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,z,Z,X,q,Me,Ee,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae)if(z>=0&&z<=b.width-X&&Z>=0&&Z<=b.height-q){$.bindFramebuffer(F.FRAMEBUFFER,Ae);const De=b.textures[ve],Ye=De.format,Je=De.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),!ct.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ne),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(z,Z,X,q,T.convert(Ye),T.convert(Je),0);const _t=D!==null?w.get(D).__webglFramebuffer:null;$.bindFramebuffer(F.FRAMEBUFFER,_t);const Rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pu(F,Rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ne),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(Ne),F.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,Z=0){const X=Math.pow(2,-Z),q=Math.floor(b.image.width*X),Me=Math.floor(b.image.height*X),Ee=z!==null?z.x:0,ve=z!==null?z.y:0;v.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Ee,ve,q,Me),$.unbindTexture()};const Ph=F.createFramebuffer(),Ih=F.createFramebuffer();this.copyTextureToTexture=function(b,z,Z=null,X=null,q=0,Me=0){let Ee,ve,Ae,De,Ye,Je,Ne,_t,Rt;const At=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(Z!==null)Ee=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,Ae=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,Ye=Z.min.y,Je=Z.isBox3?Z.min.z:0;else{const Ct=Math.pow(2,-q);Ee=Math.floor(At.width*Ct),ve=Math.floor(At.height*Ct),b.isDataArrayTexture?Ae=At.depth:b.isData3DTexture?Ae=Math.floor(At.depth*Ct):Ae=1,De=0,Ye=0,Je=0}X!==null?(Ne=X.x,_t=X.y,Rt=X.z):(Ne=0,_t=0,Rt=0);const xt=T.convert(z.format),qt=T.convert(z.type);let be;z.isData3DTexture?(v.setTexture3D(z,0),be=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(v.setTexture2DArray(z,0),be=F.TEXTURE_2D_ARRAY):(v.setTexture2D(z,0),be=F.TEXTURE_2D),$.activeTexture(F.TEXTURE0),$.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),$.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),$.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const sn=$.getParameter(F.UNPACK_ROW_LENGTH),lt=$.getParameter(F.UNPACK_IMAGE_HEIGHT),hn=$.getParameter(F.UNPACK_SKIP_PIXELS),Sn=$.getParameter(F.UNPACK_SKIP_ROWS),ii=$.getParameter(F.UNPACK_SKIP_IMAGES);$.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),$.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),$.pixelStorei(F.UNPACK_SKIP_PIXELS,De),$.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),$.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const Ni=b.isDataArrayTexture||b.isData3DTexture,vt=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Ct=w.get(b),si=w.get(z),yt=w.get(Ct.__renderTarget),ri=w.get(si.__renderTarget);$.bindFramebuffer(F.READ_FRAMEBUFFER,yt.__webglFramebuffer),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Ui=0;Ui<Ae;Ui++)Ni&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,w.get(b).__webglTexture,q,Je+Ui),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,w.get(z).__webglTexture,Me,Rt+Ui)),F.blitFramebuffer(De,Ye,Ee,ve,Ne,_t,Ee,ve,F.DEPTH_BUFFER_BIT,F.NEAREST);$.bindFramebuffer(F.READ_FRAMEBUFFER,null),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||w.has(b)){const Ct=w.get(b),si=w.get(z);$.bindFramebuffer(F.READ_FRAMEBUFFER,Ph),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ih);for(let yt=0;yt<Ae;yt++)Ni?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.__webglTexture,q,Je+yt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ct.__webglTexture,q),vt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,si.__webglTexture,Me,Rt+yt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,si.__webglTexture,Me),q!==0?F.blitFramebuffer(De,Ye,Ee,ve,Ne,_t,Ee,ve,F.COLOR_BUFFER_BIT,F.NEAREST):vt?F.copyTexSubImage3D(be,Me,Ne,_t,Rt+yt,De,Ye,Ee,ve):F.copyTexSubImage2D(be,Me,Ne,_t,De,Ye,Ee,ve);$.bindFramebuffer(F.READ_FRAMEBUFFER,null),$.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(be,Me,Ne,_t,Rt,Ee,ve,Ae,xt,qt,At.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(be,Me,Ne,_t,Rt,Ee,ve,Ae,xt,At.data):F.texSubImage3D(be,Me,Ne,_t,Rt,Ee,ve,Ae,xt,qt,At):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,Ne,_t,Ee,ve,xt,qt,At.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,Ne,_t,At.width,At.height,xt,At.data):F.texSubImage2D(F.TEXTURE_2D,Me,Ne,_t,Ee,ve,xt,qt,At);$.pixelStorei(F.UNPACK_ROW_LENGTH,sn),$.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt),$.pixelStorei(F.UNPACK_SKIP_PIXELS,hn),$.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),$.pixelStorei(F.UNPACK_SKIP_IMAGES,ii),Me===0&&z.generateMipmaps&&F.generateMipmap(be),$.unbindTexture()},this.initRenderTarget=function(b){w.get(b).__webglFramebuffer===void 0&&v.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?v.setTextureCube(b,0):b.isData3DTexture?v.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?v.setTexture2DArray(b,0):v.setTexture2D(b,0),$.unbindTexture()},this.resetState=function(){H=0,K=0,D=null,$.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function Tt(s,e){const t=Math.sqrt(s*s+e*e);if(t<=7.5)return 0;let n=Math.sin(s*.07)*Math.cos(e*.07)*2.8;if(n+=Math.sin(s*.22)*Math.cos(e*.22)*.55,n+=Math.sin(s*.45)*Math.cos(e*.45)*.15,t>40){const r=Math.min(3.5,(t-40)*.15),o=Math.sin(s*.035)*Math.cos(e*.035)*12+Math.sin(s*.1)*3;n+=o*r}const i=Math.min((t-7.5)/12,1);return n*i}function vl(s,e){if(e===nu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ha||e===ql){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ha)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function zg(s){const e=new Map,t=new Map,n=s.clone();return xh(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function xh(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)xh(s.children[n],e.children[n],t)}class kg extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qg(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new Xg(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new jg(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new Hg(t)}),this.register(function(t){return new Ml(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ml(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new r_(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ds.extractUrlBase(e);o=Ds.resolveURL(l,this.path)}else o=Ds.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new oh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vh){try{o[nt.KHR_BINARY_GLTF]=new o_(e)}catch(d){i&&i(d);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new v_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case nt.KHR_MATERIALS_UNLIT:o[d]=new Wg;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[d]=new a_(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[d]=new c_;break;case nt.KHR_MESH_QUANTIZATION:o[d]=new l_;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Vg(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Pt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Hg{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],cn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new mi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qn(h),l.distance=d;break;case"spot":l=new Xn(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Wg{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qe}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(i)}}class Xg{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class qg{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(r,r)}return Promise.all(i)}}class Yg{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class jg{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Kg{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ht)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class $g{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Zg{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],cn),Promise.all(i)}}class Jg{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class Qg{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ht)),Promise.all(i)}}class e_{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class t_{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class n_{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class i_{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class s_{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Ml{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class r_{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==dn.TRIANGLES&&l.mode!==dn.TRIANGLE_STRIP&&l.mode!==dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const g of d){const _=new et,m=new P,p=new Qt,M=new P(1,1,1),S=new ma(g.geometry,g.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&M.fromBufferAttribute(c.SCALE,y),S.setMatrixAt(y,_.compose(m,p,M));for(const y in c)if(y==="_COLOR_0"){const R=c[y];S.instanceColor=new pa(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);rt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const vh="glTF",Es=12,yl={JSON:1313821514,BIN:5130562};class o_{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Es),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Es,r=new DataView(e,Es);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===yl.JSON){const l=new Uint8Array(e,Es+o,a);this.content=n.decode(l)}else if(c===yl.BIN){const l=Es+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class a_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const d=va[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=va[h]||h.toLowerCase();if(o[h]!==void 0){const u=n.accessors[e.attributes[h]],f=ts[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}d(f)},a,l,cn,u)})})}}class c_{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class l_{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class Mh extends hs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,_=g-l,m=-2*f+3*u,p=f-u,M=1-m,S=p-u+d;for(let y=0;y!==a;y++){const R=o[_+y+a],E=o[_+y+c]*h,C=o[g+y+a],x=o[g+y]*h;r[y]=M*R+S*E+m*C+p*x}return r}}const h_=new Qt;class u_ extends Mh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return h_.fromArray(r).normalize().toArray(r),r}}const dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sl={9728:Ft,9729:Ot,9984:Gl,9985:gr,9986:As,9987:jn},wl={33071:An,33648:Sr,10497:gi},yo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},d_={CUBICSPLINE:void 0,LINEAR:Os,STEP:Fs},So={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function f_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Te({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),s.DefaultMaterial}function Si(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function p_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function m_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function g_(s){let e;const t=s.extensions&&s.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wo(t.attributes):e=s.indices+":"+wo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wo(s.targets[n]);return e}function wo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ma(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function __(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const x_=new et;class v_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Td(this.options.manager):this.textureLoader=new Id(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Si(r,a,i),En(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ds.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=yo[i.type],a=ts[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Lt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=yo[i.type],l=ts[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(M);S||(_=new l(a,p*f,i.count*f/h),S=new ju(_,f/h),t.cache.add(M,S)),m=new Ua(S,c,u%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,u,i.count*c),m=new Lt(_,c,g);if(i.sparse!==void 0){const p=yo.SCALAR,M=ts[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new M(o[1],S,i.sparse.count*p),E=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,x=R.length;C<x;C++){const A=R[C];if(m.setX(A,E[C*c]),c>=2&&m.setY(A,E[C*c+1]),c>=3&&m.setZ(A,E[C*c+2]),c>=4&&m.setW(A,E[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Sl[u.magFilter]||Ot,h.minFilter=Sl[u.minFilter]||jn,h.wrapS=wl[u.wrapS]||gi,h.wrapT=wl[u.wrapT]||gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==Ot,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Bt(_);m.needsUpdate=!0,u(m)}),t.load(Ds.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),En(d,o),d.userData.mimeType=o.mimeType||__(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Dr,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Lr,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Te}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){const d=i[nt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],cn),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Ht)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ut);const h=r.alphaMode||So.OPAQUE;if(h===So.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===So.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qe&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Qe&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qe){const d=r.emissiveFactor;a.emissive=new Le().setRGB(d[0],d[1],d[2],cn)}return r.emissiveTexture!==void 0&&o!==Qe&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(l).then(function(){const d=new o(a);return r.name&&(d.name=r.name),En(d,r),t.associations.set(d,{materials:e}),r.extensions&&Si(i,d,r),d})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return bl(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=g_(l),d=i[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=bl(new bt,l,t),i[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?f_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const M=l[f];if(m.mode===dn.TRIANGLES||m.mode===dn.TRIANGLE_STRIP||m.mode===dn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ju(_,M):new B(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===dn.TRIANGLE_STRIP?p.geometry=vl(p.geometry,ql):m.mode===dn.TRIANGLE_FAN&&(p.geometry=vl(p.geometry,ha));else if(m.mode===dn.LINES)p=new eh(_,M);else if(m.mode===dn.LINE_STRIP)p=new es(_,M);else if(m.mode===dn.LINE_LOOP)p=new sd(_,M);else if(m.mode===dn.POINTS)p=new Ga(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&m_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),En(p,r),m.extensions&&Si(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Si(i,d[0],r),d[0];const u=new He;r.extensions&&Si(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Rs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ur(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const d=o[l];if(d){a.push(d);const u=new et;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Oa(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let S=0,y=u.length;S<y;S++){const R=u[S],E=f[S],C=g[S],x=_[S],A=m[S];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const L=n._createAnimationTracks(R,E,C,x,A);if(L)for(let I=0;I<L.length;I++)p.push(L[I])}const M=new vd(r,void 0,p);return En(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,x_)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,g=d[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Ql:l.length>1?h=new He:l.length===1?h=l[0]:h=new rt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=o),En(h,r),r.extensions&&Si(n,h,r),r.matrix!==void 0){const d=new et;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new He;n.name&&(r.name=i.createUniqueName(n.name)),En(r,n),n.extensions&&Si(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++){const u=c[h];u.parent!==null?r.add(zg(u)):r.add(u)}const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof In||u instanceof Bt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}di[r.path]===di.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(di[r.path]){case di.weights:h=as;break;case di.rotation:h=cs;break;case di.translation:case di.scale:h=ls;break;default:switch(n.itemSize){case 1:h=as;break;case 2:case 3:default:h=ls;break}break}const d=i.interpolation!==void 0?d_[i.interpolation]:Os,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const _=new h(c[f]+"."+di[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ma(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof cs?u_:Mh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function M_(s,e,t){const n=e.attributes,i=new Nn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=Ma(ts[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=Ma(ts[u.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function bl(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=va[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return it.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),En(s,e),M_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?p_(s,e.targets,t):s})}const y_=new kg,El={default:{path:"Assets/3D_Models_Drones/low_poly_space_ship.glb",scaleMultiplier:.9,rotationY:Math.PI,positionY:-.05,materialMap:(s,e)=>({color:1976635,emissive:61695,emissiveIntensity:1.8,metalness:.9,roughness:.15}),thrusterOffsets:[new P(-.25,0,-.65),new P(.25,0,-.65)],flameColor:16711765,lightColor:61695,lightOffset:new P(0,0,.7)},"swift-z":{path:"Assets/3D_Models_Drones/low_poly_space_ship_2.glb",scaleMultiplier:1.05,rotationY:Math.PI,positionY:0,materialMap:(s,e)=>{const t=e.toLowerCase();return t.includes("001")||t.includes("006")||t.includes("007")?{color:1118485,metalness:.95,roughness:.2}:t.includes("008")||t.includes("005")?{color:16742912,emissive:16724736,emissiveIntensity:2.2,metalness:.5,roughness:.3}:t.includes("004")?{color:16755200,metalness:.8,roughness:.2}:{color:4079430,metalness:.7,roughness:.3}},thrusterOffsets:[new P(-.35,0,-.8),new P(.35,0,-.8)],flameColor:3800852,lightColor:3800852,lightOffset:new P(0,0,.9)},"interceptor-gl":{path:"Assets/3D_Models_Drones/low_poly_space_ship_3.glb",scaleMultiplier:1.05,rotationY:Math.PI,positionY:.05,materialMap:(s,e)=>{const t=e.toLowerCase();return t.includes("spaceship1")?{color:13751771,metalness:.95,roughness:.1}:t.includes("spaceship2")?{color:1579035,metalness:.8,roughness:.3}:t.includes("spaceship3")?{color:3800852,emissive:3800852,emissiveIntensity:1.8,metalness:.5,roughness:.2}:t.includes("window")?{color:65484,emissive:65484,emissiveIntensity:2.5,transparent:!0,opacity:.8,metalness:.1,roughness:.05}:null},thrusterOffsets:[new P(-.25,.05,-.73),new P(.25,.05,-.73)],flameColor:65382,lightColor:65382,lightOffset:new P(0,0,.8)},"xeno-cargo":{path:"Assets/3D_Models_Drones/space_ship.glb",scaleMultiplier:1,rotationY:Math.PI,positionY:.1,materialMap:(s,e)=>{const t=e.toLowerCase();return t.includes("shipcolor")?{color:2837567,metalness:.8,roughness:.55}:t.includes("wingcontrolcolor")?{color:16733440,metalness:.9,roughness:.3}:t.includes("metal")?{color:4937059,metalness:.9,roughness:.4}:t.includes("glass")?{color:16755200,emissive:16733440,emissiveIntensity:1.8,transparent:!0,opacity:.6,metalness:.1,roughness:.1}:t.includes("lights")||t.includes("gauges")?{color:16755200,emissive:16755200,emissiveIntensity:2.8}:{color:2042167,metalness:.6,roughness:.5}},thrusterOffsets:[new P(-.35,.1,-.6),new P(.35,.1,-.6)],flameColor:16753920,lightColor:16753920,lightOffset:new P(0,.1,.7)},"valkyrie-x":{path:"Assets/3D_Models_Drones/low_poly_space_ship_07.glb",scaleMultiplier:1,rotationY:Math.PI,positionY:0,materialMap:(s,e)=>{const t=e.toLowerCase();return t.includes("004")||t.includes("002")?{color:1973067,metalness:.9,roughness:.2}:t.includes("001")?{color:16711807,emissive:16711807,emissiveIntensity:2.2,metalness:.6,roughness:.15}:t.includes("003")?{color:1120295,metalness:.95,roughness:.1}:{color:5195493,metalness:.8,roughness:.25}},thrusterOffsets:[new P(-.2,0,-.8),new P(.2,0,-.8)],flameColor:16711935,lightColor:16711935,lightOffset:new P(0,0,.9)},"solar-wing":{path:"Assets/3D_Models_Drones/low_poly_space_ship_09.glb",scaleMultiplier:1,rotationY:Math.PI,positionY:0,materialMap:(s,e)=>{const t=e.toLowerCase();return t.includes("material")&&!t.includes("00")?{color:592139,metalness:.9,roughness:.25}:t.includes("004")?{color:16747520,emissive:16727040,emissiveIntensity:2.2,metalness:.8,roughness:.15}:t.includes("003")||t.includes("001")?{color:16766720,metalness:.95,roughness:.1}:{color:2565930,metalness:.7,roughness:.3}},thrusterOffsets:[new P(-.25,0,-.8),new P(.25,0,-.8)],flameColor:16729344,lightColor:16742912,lightOffset:new P(0,0,.85)},"cyan-dart":{path:"Assets/3D_Models_Drones/low_poly_space_ship_10.glb",scaleMultiplier:1,rotationY:Math.PI,positionY:0,materialMap:(s,e)=>{const t=e.toLowerCase();return t.includes("material")&&!t.includes("00")?{color:16737792,metalness:.95,roughness:.15}:t.includes("003")||t.includes("004")?{color:65535,emissive:65535,emissiveIntensity:2.2,metalness:.5,roughness:.1}:t.includes("001")?{color:988970,metalness:.9,roughness:.35}:{color:13751771,metalness:.8,roughness:.2}},thrusterOffsets:[new P(-.15,0,-.8),new P(.15,0,-.8)],flameColor:54015,lightColor:62463,lightOffset:new P(0,.05,.9)},"sentinel-v":{path:"Assets/3D_Models_Drones/low_poly_ship.glb",scaleMultiplier:.95,rotationY:Math.PI,positionY:.05,materialMap:(s,e)=>{const t=e.toLowerCase();return t.includes("lambert5")?{color:2565930,metalness:.8,roughness:.3}:t.includes("lambert6")?{color:1981066,metalness:.9,roughness:.2}:t.includes("lambert7")?{color:3900150,emissive:26367,emissiveIntensity:2,metalness:.5,roughness:.15}:t.includes("lambert8")?{color:1120295,metalness:.95,roughness:.15}:{color:14870768,metalness:.9,roughness:.25}},thrusterOffsets:[new P(-.2,0,-.8),new P(.2,0,-.8)],flameColor:26367,lightColor:26367,lightOffset:new P(0,.05,.85)}};class qa{constructor(){this.mesh=new He,this.mesh.scale.set(2,2,2),this.position=new P(0,1.4,0),this.velocity=0,this.maxSpeed=18,this.acceleration=24,this.deceleration=18,this.drag=.93,this.rotationY=0,this.steerAngle=0,this.maxSteerAngle=.6,this.steerSpeed=4,this.steerDecay=6,this.controlledPitch=0,this.controlledRoll=0,this.hoverHeightOffset=1.4,this.pitch=0,this.roll=0,this.targetY=1.4,this.thrusters=[],this.flameMats=[],this.currentType="cyan-dart",this.currentLoadId=0,this.init()}init(){this.rebuildModel(this.currentType)}buildProceduralFallback(e){for(;this.mesh.children.length>0;)this.mesh.remove(this.mesh.children[0]);this.thrusters=[],this.flameMats=[],e==="swift-z"?this.buildSwiftZModel():e==="interceptor-gl"?this.buildInterceptorModel():e==="xeno-cargo"?this.buildXenoCargoModel():e==="valkyrie-x"?this.buildValkyrieXModel():e==="solar-wing"?this.buildSolarWingModel():e==="cyan-dart"?this.buildCyanDartModel():e==="sentinel-v"?this.buildSentinelVModel():this.buildDefaultModel()}rebuildModel(e){this.currentType=e,this.currentLoadId=(this.currentLoadId||0)+1;const t=this.currentLoadId;this.buildProceduralFallback(e);const n=El[e]||El.default;y_.load(n.path,i=>{if(this.currentLoadId!==t)return;for(;this.mesh.children.length>0;)this.mesh.remove(this.mesh.children[0]);this.thrusters=[],this.flameMats=[];const r=i.scene;r.scale.set(1,1,1),r.position.set(0,0,0),r.rotation.set(n.rotationX||0,n.rotationY||0,n.rotationZ||0);const o=new Nn;let a=!1;r.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0,a?o.expandByObject(m):(o.setFromObject(m),a=!0))}),a||o.setFromObject(r);const c=new P;o.getCenter(c);const l=new P;o.getSize(l);const u=1.6/Math.max(l.x,l.y,l.z)*(n.scaleMultiplier||1);r.scale.set(u,u,u),r.position.copy(c).multiplyScalar(-u),r.position.y+=n.positionY||0,n.positionX&&(r.position.x+=n.positionX),n.positionZ&&(r.position.z+=n.positionZ),r.traverse(m=>{if(m.isMesh&&m.material){const p=n.materialMap(m.material,m.material.name||"");p?m.material=new Te({color:p.color!==void 0?p.color:m.material.color,roughness:p.roughness!==void 0?p.roughness:.4,metalness:p.metalness!==void 0?p.metalness:.5,emissive:p.emissive!==void 0?new Le(p.emissive):new Le(0,0,0),emissiveIntensity:p.emissiveIntensity!==void 0?p.emissiveIntensity:0,transparent:p.transparent!==void 0?p.transparent:!1,opacity:p.opacity!==void 0?p.opacity:1}):m.material=new Te({color:m.material.color,roughness:.4,metalness:.5})}}),this.mesh.add(r);const f=new Vt(.12,.45,12);f.rotateX(-Math.PI/2),n.thrusterOffsets.forEach(m=>{const p=new He;p.position.copy(m);const M=new Qe({color:n.flameColor,transparent:!0,opacity:.8}),S=new B(f,M);S.position.set(0,0,-.22),p.add(S),this.mesh.add(p),this.thrusters.push(p),this.flameMats.push(M)});const g=new rt;g.position.set(0,0,16),this.mesh.add(g);const _=new Xn(n.lightColor,8,40,Math.PI/4,.5,1);_.position.copy(n.lightOffset||new P(0,0,1)),_.target=g,_.castShadow=!0,this.mesh.add(_)},void 0,i=>{console.error(`Error loading GLB model for ${e}:`,i)})}buildDefaultModel(){const e=new Jt(.55,32,32),t=new Te({color:61695,emissive:61695,emissiveIntensity:.8,roughness:.1,metalness:.9,transparent:!0,opacity:.75}),n=new B(e,t);n.position.y=.1,this.mesh.add(n);const i=new Ri(.75,.1,16,48);i.rotateX(Math.PI/2);const r=new Te({color:2042167,roughness:.35,metalness:.85}),o=new B(i,r);o.castShadow=!0,o.receiveShadow=!0,this.mesh.add(o);const a=new Te({color:3621201,roughness:.4,metalness:.7}),c=new B(new we(.3,.04,.4),a);c.position.set(-.9,.05,-.15),c.rotation.y=Math.PI/6,c.castShadow=!0,this.mesh.add(c);const l=new B(new we(.3,.04,.4),a);l.position.set(.9,.05,-.15),l.rotation.y=-Math.PI/6,l.castShadow=!0,this.mesh.add(l);const h=new Xe(.18,.22,.7,16);h.rotateX(Math.PI/2);const d=new He,u=new B(h,a);u.castShadow=!0,d.add(u),d.position.set(-.95,0,0),this.mesh.add(d),this.thrusters.push(d);const f=new He,g=new B(h,a);g.castShadow=!0,f.add(g),f.position.set(.95,0,0),this.mesh.add(f),this.thrusters.push(f);const _=new Vt(.12,.45,12);_.rotateX(-Math.PI/2);const m=new Qe({color:16711765,transparent:!0,opacity:.8}),p=new B(_,m);p.position.set(0,0,-.45),d.add(p),this.flameMats.push(m);const M=new B(_,m);M.position.set(0,0,-.45),f.add(M);const S=new we(.4,.1,.1),y=new Qe({color:16711765}),R=new B(S,y);R.position.set(0,.2,.45),this.mesh.add(R);const E=new Xn(61695,8,40,Math.PI/4,.5,1);E.position.set(0,0,.6);const C=new rt;C.position.set(0,0,16),this.mesh.add(C),E.target=C,E.castShadow=!0,this.mesh.add(E)}buildSwiftZModel(){const e=new we(.7,.5,1.25),t=new Te({color:16742912,roughness:.25,metalness:.5,flatShading:!1}),n=new B(e,t);n.castShadow=!0,n.receiveShadow=!0,n.position.y=.05,this.mesh.add(n);const i=new we(.64,.22,.42),r=new Te({color:526344,roughness:.05,metalness:.95}),o=new B(i,r);o.position.set(0,.18,.45),this.mesh.add(o);const a=new Te({color:26316,roughness:.35,metalness:.8}),c=new Xe(.2,.2,.04,24);c.rotateX(Math.PI/2);const l=new B(c,a);l.position.set(0,.08,.63),this.mesh.add(l);const h=new Qe({color:16777215}),d=new B(new we(.14,.03,.02),h);d.position.set(0,.14,.65);const u=new B(new we(.03,.15,.02),h);u.rotation.z=-Math.PI/4,u.position.set(0,.08,.65);const f=new B(new we(.14,.03,.02),h);f.position.set(0,.02,.65),this.mesh.add(d),this.mesh.add(u),this.mesh.add(f);const g=new Te({color:15658734,roughness:.25,metalness:.45}),_=new B(new we(.08,.25,1.05),g);_.position.set(-.38,.02,.02),_.castShadow=!0,this.mesh.add(_);const m=new B(new we(.08,.25,1.05),g);m.position.set(.38,.02,.02),m.castShadow=!0,this.mesh.add(m);const p=new B(new we(1.5,.04,.25),t);p.position.set(0,.4,-.6),p.castShadow=!0,this.mesh.add(p);const M=new B(new we(.04,.25,.1),a);M.position.set(-.5,.22,-.6),this.mesh.add(M);const S=new B(new we(.04,.25,.1),a);S.position.set(.5,.22,-.6),this.mesh.add(S);const y=new B(new Xe(.04,.04,.04,8),new Te({color:2236962}));y.position.set(0,.3,-.3),this.mesh.add(y);const R=new B(new Xe(.008,.008,.38,6),new Te({color:16755200}));R.rotation.x=Math.PI/6,R.position.set(0,.48,-.38),this.mesh.add(R);const E=new Te({color:48340,roughness:.35,metalness:.8}),C=new B(new we(.6,.1,.16),E);C.rotation.z=-Math.PI/12,C.position.set(-.52,-.15,-.1),C.castShadow=!0,this.mesh.add(C);const x=new B(new we(.6,.1,.16),E);x.rotation.z=Math.PI/12,x.position.set(.52,-.15,-.1),x.castShadow=!0,this.mesh.add(x);const A=new Xe(.2,.24,.65,16);A.rotateX(Math.PI/2);const L=new Te({color:15658734,roughness:.25,metalness:.5,flatShading:!1}),I=new Te({color:16742912,roughness:.2}),U=new He,H=new B(A,L);H.castShadow=!0,H.receiveShadow=!0,U.add(H);const K=new B(new Xe(.23,.23,.08,16),I);K.geometry.rotateX(Math.PI/2),K.position.set(0,0,.32),U.add(K),U.position.set(-.95,-.22,-.1),this.mesh.add(U),this.thrusters.push(U);const D=new He,W=new B(A,L);W.castShadow=!0,D.add(W);const V=new B(new Xe(.23,.23,.08,16),I);V.geometry.rotateX(Math.PI/2),V.position.set(0,0,.32),D.add(V),D.position.set(.95,-.22,-.1),this.mesh.add(D),this.thrusters.push(D);const ie=new Te({color:16758528,roughness:.2,metalness:.5}),se=new B(new we(.08,.65,.16),ie);se.rotation.z=Math.PI/4,se.position.set(-.24,.3,.05),se.castShadow=!0,U.add(se);const ue=new B(new we(.05,.35,.12),ie);ue.rotation.z=-Math.PI/6,ue.position.set(-.16,-.26,-.05),ue.castShadow=!0,U.add(ue);const ge=new B(new we(.08,.65,.16),ie);ge.rotation.z=-Math.PI/4,ge.position.set(.24,.3,.05),ge.castShadow=!0,D.add(ge);const Se=new B(new we(.05,.35,.12),ie);Se.rotation.z=Math.PI/6,Se.position.set(.16,-.26,-.05),Se.castShadow=!0,D.add(Se);const Fe=new Vt(.12,.45,12);Fe.rotateX(-Math.PI/2);const tt=new Qe({color:3800852,transparent:!0,opacity:.8}),Ge=new B(Fe,tt);Ge.position.set(0,0,-.42),U.add(Ge),this.flameMats.push(tt);const ne=new B(Fe,tt);ne.position.set(0,0,-.42),D.add(ne);const fe=new Xn(3800852,8,40,Math.PI/4,.5,1);fe.position.set(0,0,.6);const de=new rt;de.position.set(0,0,16),this.mesh.add(de),fe.target=de,fe.castShadow=!0,this.mesh.add(fe)}buildInterceptorModel(){const e=new Xe(.65,.68,.12,24);e.rotateX(Math.PI/2);const t=new Te({color:15658734,roughness:.2,metalness:.7,flatShading:!1}),n=new B(e,t);n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new Te({color:65382,emissive:65382,emissiveIntensity:1.2,roughness:.1}),r=new B(new Ri(.46,.05,12,32),i);r.rotation.x=Math.PI/2,r.position.y=.08,this.mesh.add(r);const o=new Te({color:65382,emissive:65382,emissiveIntensity:.9,transparent:!0,opacity:.85}),a=new B(new Jt(.24,16,16),o);this.mesh.add(a);const c=new Vt(.28,.6,16);c.rotateX(Math.PI/2);const l=new B(c,t);l.position.set(0,0,.68),l.castShadow=!0,this.mesh.add(l);const h=new B(new we(.08,.1,.4),i);h.position.set(0,.08,.52),this.mesh.add(h);const d=new Vt(.18,.75,16);d.rotateX(-Math.PI/2);const u=new B(d,t);u.position.set(0,-.04,-.65),u.castShadow=!0,this.mesh.add(u);const f=new Te({color:52292,roughness:.3,metalness:.6,flatShading:!1}),g=new B(new we(.35,.03,.16),f);g.rotation.y=Math.PI/4,g.position.set(-.22,-.04,-.6),g.castShadow=!0,this.mesh.add(g);const _=new B(new we(.35,.03,.16),f);_.rotation.y=-Math.PI/4,_.position.set(.22,-.04,-.6),_.castShadow=!0,this.mesh.add(_);const m=new He,p=new B(new we(.52,.06,.28),t);p.position.set(-.48,0,-.05),p.castShadow=!0,m.add(p);const M=new B(new we(.08,.16,.75),f);M.position.set(-.76,0,-.05),M.castShadow=!0,m.add(M),this.mesh.add(m);const S=new He,y=new B(new we(.52,.06,.28),t);y.position.set(.48,0,-.05),y.castShadow=!0,S.add(y);const R=new B(new we(.08,.16,.75),f);R.position.set(.76,0,-.05),R.castShadow=!0,S.add(R),this.mesh.add(S);const E=new Xe(.12,.15,.55,16);E.rotateX(Math.PI/2);const C=new Te({color:14540253,roughness:.3,metalness:.8}),x=new He,A=new B(E,C);A.castShadow=!0,x.add(A),x.position.set(-1.08,0,0),this.mesh.add(x),this.thrusters.push(x);const L=new He,I=new B(E,C);I.castShadow=!0,L.add(I),L.position.set(1.08,0,0),this.mesh.add(L),this.thrusters.push(L);const U=new Vt(.09,.38,12);U.rotateX(-Math.PI/2);const H=new Qe({color:65382,transparent:!0,opacity:.8}),K=new B(U,H);K.position.set(0,0,-.35),x.add(K),this.flameMats.push(H);const D=new B(U,H);D.position.set(0,0,-.35),L.add(D);const W=new we(.18,.04,.04),V=new Qe({color:65382}),ie=new B(W,V);ie.position.set(0,.06,.72),this.mesh.add(ie);const se=new Xn(65382,8,40,Math.PI/4,.5,1);se.position.set(0,0,.65);const ue=new rt;ue.position.set(0,0,16),this.mesh.add(ue),se.target=ue,se.castShadow=!0,this.mesh.add(se)}buildXenoCargoModel(){const e=new Te({color:1920335,roughness:.45,metalness:.45,flatShading:!1}),t=new we(.62,.46,1.35),n=new B(t,e);n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new we(.46,.28,.4),r=new Te({color:16746496,emissive:16733440,emissiveIntensity:.5,roughness:.15,transparent:!0,opacity:.9}),o=new B(i,r);o.position.set(0,.18,.48),o.castShadow=!0,this.mesh.add(o);const a=new Te({color:2963272,roughness:.4,metalness:.7}),c=new B(new we(.04,.18,.8),a);c.position.set(-.33,0,.05),this.mesh.add(c);const l=new B(new we(.04,.18,.8),a);l.position.set(.33,0,.05),this.mesh.add(l);const h=new Te({color:16755200,roughness:.35,metalness:.5}),d=new B(new we(.12,.03,.25),h);d.position.set(-.14,.25,-.15),this.mesh.add(d);const u=new B(new we(.12,.03,.25),h);u.position.set(.14,.25,-.15),this.mesh.add(u);const f=new B(new we(1.9,.06,.32),e);f.position.set(0,-.05,-.1),f.castShadow=!0,this.mesh.add(f);const g=new Xe(.24,.24,.62,16);g.rotateX(Math.PI/2);const _=new Te({color:1712172,roughness:.35,metalness:.75}),m=new He,p=new B(g,_);p.castShadow=!0,m.add(p);const M=new B(new Xe(.22,.22,.05,16),h);M.geometry.rotateX(Math.PI/2),M.position.set(0,0,.3),m.add(M);const S=new B(new Xe(.06,.06,.08,8),a);S.geometry.rotateX(Math.PI/2),S.position.set(0,0,.32),m.add(S);const y=new we(.18,.02,.02);for(let ie=0;ie<4;ie++){const se=new B(y,a);se.position.set(0,0,.32),se.rotation.z=Math.PI/4*ie,m.add(se)}m.position.set(-1.12,-.05,-.1),this.mesh.add(m),this.thrusters.push(m);const R=new He,E=new B(g,_);E.castShadow=!0,R.add(E);const C=new B(new Xe(.22,.22,.05,16),h);C.geometry.rotateX(Math.PI/2),C.position.set(0,0,.3),R.add(C);const x=new B(new Xe(.06,.06,.08,8),a);x.geometry.rotateX(Math.PI/2),x.position.set(0,0,.32),R.add(x);for(let ie=0;ie<4;ie++){const se=new B(y,a);se.position.set(0,0,.32),se.rotation.z=Math.PI/4*ie,R.add(se)}R.position.set(1.12,-.05,-.1),this.mesh.add(R),this.thrusters.push(R);const A=new Vt(.14,.42,12);A.rotateX(-Math.PI/2);const L=new Qe({color:16729344,transparent:!0,opacity:.8}),I=new B(A,L);I.position.set(0,0,-.38),m.add(I),this.flameMats.push(L);const U=new B(A,L);U.position.set(0,0,-.38),R.add(U);const H=new B(new we(.72,.03,.2),e);H.position.set(0,.1,-.7),H.castShadow=!0,this.mesh.add(H);const K=new B(new we(.04,.26,.2),e);K.position.set(0,.24,-.7),K.castShadow=!0,this.mesh.add(K);const D=new we(.2,.04,.04),W=new Qe({color:16758528}),V=new B(D,W);V.position.set(0,-.12,.68),this.mesh.add(V),spotLight.castShadow=!0,this.mesh.add(spotLight)}buildValkyrieXModel(){const e=new Xe(.01,.48,1.8,16);e.rotateX(Math.PI/2);const t=new Te({color:2303802,roughness:.25,metalness:.7,flatShading:!1}),n=new B(e,t);n.castShadow=!0,n.receiveShadow=!0,n.position.y=.05,this.mesh.add(n);const i=new Jt(.24,16,16),r=new Te({color:16711816,emissive:16711816,emissiveIntensity:1.2,roughness:.1,metalness:.9,transparent:!0,opacity:.8}),o=new B(i,r);o.scale.set(1,.7,1.8),o.position.set(0,.22,.25),this.mesh.add(o);const a=new Te({color:16711816,roughness:.2,metalness:.5}),c=new B(new we(.45,.05,.8),t);c.position.set(-.65,.02,-.2),c.rotation.y=.15,c.rotation.z=-.05,c.castShadow=!0,this.mesh.add(c);const l=new B(new we(.12,.06,.6),a);l.position.set(-.88,.01,-.25),l.rotation.y=.15,this.mesh.add(l);const h=new B(new we(.45,.05,.8),t);h.position.set(.65,.02,-.2),h.rotation.y=-.15,h.rotation.z=.05,h.castShadow=!0,this.mesh.add(h);const d=new B(new we(.12,.06,.6),a);d.position.set(.88,.01,-.25),d.rotation.y=-.15,this.mesh.add(d);const u=new Xe(.12,.16,.55,12);u.rotateX(Math.PI/2);const f=new Te({color:1711400,roughness:.3}),g=new He,_=new B(u,f);_.castShadow=!0,g.add(_),g.position.set(-.65,-.06,-.45),this.mesh.add(g),this.thrusters.push(g);const m=new He,p=new B(u,f);p.castShadow=!0,m.add(p),m.position.set(.65,-.06,-.45),this.mesh.add(m),this.thrusters.push(m);const M=new B(u,f);M.position.set(-.16,-.1,-.85),M.scale.set(.8,.8,.8),this.mesh.add(M);const S=new B(u,f);S.position.set(.16,-.1,-.85),S.scale.set(.8,.8,.8),this.mesh.add(S);const y=new Vt(.08,.45,12);y.rotateX(-Math.PI/2);const R=new Qe({color:16711816,transparent:!0,opacity:.85}),E=new B(y,R);E.position.set(0,0,-.38),g.add(E),this.flameMats.push(R);const C=new B(y,R);C.position.set(0,0,-.38),m.add(C);const x=new B(y,R);x.position.set(-.16,-.1,-1.2),x.scale.set(.6,.6,.6),this.mesh.add(x);const A=new B(y,R);A.position.set(.16,-.1,-1.2),A.scale.set(.6,.6,.6),this.mesh.add(A);const L=new Xn(16711816,8,40,Math.PI/4,.5,1);L.position.set(0,0,.7);const I=new rt;I.position.set(0,0,16),this.mesh.add(I),L.target=I,L.castShadow=!0,this.mesh.add(L)}buildSolarWingModel(){const e=new Jt(.55,16,16),t=new Te({color:1777712,roughness:.25,metalness:.6,flatShading:!1}),n=new B(e,t);n.scale.set(1,.6,2.2),n.position.y=.05,n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new Te({color:16738816,roughness:.2,metalness:.7}),r=new Vt(.22,.45,12);r.rotateX(Math.PI/2);const o=new B(r,i);o.position.set(0,.04,1.1),this.mesh.add(o);const a=new Te({color:16755200,roughness:.1}),c=new B(new we(.04,.02,1.5),a);c.position.set(-.25,.28,0),c.rotation.y=.08,this.mesh.add(c);const l=new B(new we(.04,.02,1.5),a);l.position.set(.25,.28,0),l.rotation.y=-.08,this.mesh.add(l);const h=new B(new we(.85,.04,1.1),t);h.position.set(-.8,.02,-.1),h.rotation.y=Math.PI/6,h.rotation.z=-Math.PI/24,h.castShadow=!0,this.mesh.add(h);const d=new B(new we(.04,.35,.6),i);d.position.set(-1.25,-.12,-.32),d.rotation.y=Math.PI/6,d.rotation.z=-Math.PI/6,this.mesh.add(d);const u=new B(new we(.85,.04,1.1),t);u.position.set(.8,.02,-.1),u.rotation.y=-Math.PI/6,u.rotation.z=Math.PI/24,u.castShadow=!0,this.mesh.add(u);const f=new B(new we(.04,.35,.6),i);f.position.set(1.25,-.12,-.32),f.rotation.y=-Math.PI/6,f.rotation.z=Math.PI/6,this.mesh.add(f);const g=new Xe(.15,.18,.65,12);g.rotateX(Math.PI/2);const _=new Te({color:1316898,roughness:.3}),m=new He,p=new B(g,_);p.castShadow=!0,m.add(p),m.position.set(-.55,-.08,-.65),this.mesh.add(m),this.thrusters.push(m);const M=new He,S=new B(g,_);S.castShadow=!0,M.add(S),M.position.set(.55,-.08,-.65),this.mesh.add(M),this.thrusters.push(M);const y=new Vt(.1,.45,12);y.rotateX(-Math.PI/2);const R=new Qe({color:16742144,transparent:!0,opacity:.85}),E=new B(y,R);E.position.set(0,0,-.42),m.add(E),this.flameMats.push(R);const C=new B(y,R);C.position.set(0,0,-.42),M.add(C);const x=new Xn(16738816,8,40,Math.PI/4,.5,1);x.position.set(0,.04,1.1);const A=new rt;A.position.set(0,0,16),this.mesh.add(A),x.target=A,x.castShadow=!0,this.mesh.add(x)}buildCyanDartModel(){const e=new Xe(.12,.35,2.3,12);e.rotateX(Math.PI/2);const t=new Te({color:1842724,roughness:.2,metalness:.8,flatShading:!1}),n=new Te({color:16737792,roughness:.15,metalness:.95,flatShading:!1}),i=new B(e,n);i.position.y=.05,i.castShadow=!0,i.receiveShadow=!0,this.mesh.add(i);const r=new Te({color:62463,emissive:62463,emissiveIntensity:.8,roughness:.1}),o=new B(new we(.04,.08,1.8),r);o.position.set(0,.3,.05),this.mesh.add(o);const a=new B(new Jt(.18,16,16),new Te({color:657930,roughness:.05,metalness:.9}));a.scale.set(1,.6,1.6),a.position.set(0,.18,.1),this.mesh.add(a);const c=new B(new we(.75,.03,.65),t);c.position.set(-.7,.02,-.4),c.rotation.y=Math.PI/8,c.castShadow=!0,this.mesh.add(c);const l=new B(new we(.1,.04,.55),r);l.position.set(-1.08,.02,-.45),l.rotation.y=Math.PI/8,this.mesh.add(l);const h=new B(new we(.75,.03,.65),t);h.position.set(.7,.02,-.4),h.rotation.y=-Math.PI/8,h.castShadow=!0,this.mesh.add(h);const d=new B(new we(.1,.04,.55),r);d.position.set(1.08,.02,-.45),d.rotation.y=-Math.PI/8,this.mesh.add(d);const u=new we(.04,.14,.12);for(let I=0;I<3;I++){const U=-.15-I*.22,H=new B(u,n);H.position.set(-.48,.08,U),H.rotation.y=Math.PI/10,this.mesh.add(H);const K=new B(u,n);K.position.set(.48,.08,U),K.rotation.y=-Math.PI/10,this.mesh.add(K)}const f=new Xe(.12,.14,.6,12);f.rotateX(Math.PI/2);const g=new Te({color:1316380,roughness:.3}),_=new He,m=new B(f,g);m.castShadow=!0,_.add(m),_.position.set(-.75,-.06,-.55),this.mesh.add(_),this.thrusters.push(_);const p=new He,M=new B(f,g);M.castShadow=!0,p.add(M),p.position.set(.75,-.06,-.55),this.mesh.add(p),this.thrusters.push(p);const S=new B(f,g);S.position.set(0,-.05,-1.05),this.mesh.add(S);const y=new Vt(.08,.45,12);y.rotateX(-Math.PI/2);const R=new Qe({color:62463,transparent:!0,opacity:.85}),E=new B(y,R);E.position.set(0,0,-.4),_.add(E),this.flameMats.push(R);const C=new B(y,R);C.position.set(0,0,-.4),p.add(C);const x=new B(y,R);x.position.set(0,-.05,-1.45),this.mesh.add(x);const A=new Xn(62463,8,40,Math.PI/4,.5,1);A.position.set(0,.05,1.15);const L=new rt;L.position.set(0,0,16),this.mesh.add(L),A.target=L,A.castShadow=!0,this.mesh.add(A)}buildSentinelVModel(){const e=new Xe(.02,1.8,.3,3);e.rotateX(Math.PI/2),e.rotateZ(Math.PI);const t=new Te({color:2304310,roughness:.25,metalness:.7,flatShading:!0}),n=new B(e,t);n.scale.set(1,1,1.3),n.position.set(0,.02,.15),n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new Te({color:26367,emissive:26367,emissiveIntensity:1.5,roughness:.1}),r=new Ri(.48,.05,8,24);r.rotateX(Math.PI/2);const o=new B(r,i);o.position.set(0,.16,-.15),this.mesh.add(o);const a=new B(new Xe(.42,.42,.02,16),new Te({color:987930,roughness:.6}));a.position.set(0,.15,-.15),this.mesh.add(a);const c=new Te({color:41727,roughness:.15}),l=new B(new we(.05,.02,1.1),c);l.position.set(-.55,.16,-.1),l.rotation.y=Math.PI/6,this.mesh.add(l);const h=new B(new we(.05,.02,1.1),c);h.position.set(.55,.16,-.1),h.rotation.y=-Math.PI/6,this.mesh.add(h);const d=new Xe(.1,.12,.5,12);d.rotateX(Math.PI/2);const u=new Te({color:1119518,roughness:.3}),f=new He,g=new B(d,u);g.castShadow=!0,f.add(g),f.position.set(-.85,-.06,-.75),this.mesh.add(f),this.thrusters.push(f);const _=new He,m=new B(d,u);m.castShadow=!0,_.add(m),_.position.set(.85,-.06,-.75),this.mesh.add(_),this.thrusters.push(_);const p=new B(d,u);p.position.set(-.35,-.06,-.85),this.mesh.add(p);const M=new B(d,u);M.position.set(.35,-.06,-.85),this.mesh.add(M);const S=new Vt(.07,.42,12);S.rotateX(-Math.PI/2);const y=new Qe({color:32511,transparent:!0,opacity:.85}),R=new B(S,y);R.position.set(0,0,-.35),f.add(R),this.flameMats.push(y);const E=new B(S,y);E.position.set(0,0,-.35),_.add(E);const C=new B(S,y);C.position.set(-.35,-.06,-1.2),this.mesh.add(C);const x=new B(S,y);x.position.set(.35,-.06,-1.2),this.mesh.add(x);const A=new Xn(26367,8,40,Math.PI/4,.5,1);A.position.set(0,.05,1);const L=new rt;L.position.set(0,0,16),this.mesh.add(L),A.target=L,A.castShadow=!0,this.mesh.add(A)}update(e,t,n,i){let r=!1,o=!1;(t[" "]||t.q||t.arrowup)&&(this.velocity+=this.acceleration*e,r=!0),(t.shift||t.e||t.arrowdown)&&(this.velocity-=this.deceleration*e,o=!0),!r&&!o&&(this.velocity*=this.drag,Math.abs(this.velocity)<.05&&(this.velocity=0)),this.velocity=Rs.clamp(this.velocity,-this.maxSpeed*.4,this.maxSpeed);let a=!1;t.w&&(this.controlledPitch+=1.8*e,a=!0),t.s&&(this.controlledPitch-=1.8*e,a=!0),a||(this.controlledPitch-=this.controlledPitch*2.2*e,Math.abs(this.controlledPitch)<.01&&(this.controlledPitch=0));let c=!1;(t.a||t.arrowleft)&&(this.rotationY+=1.8*e,this.controlledRoll+=(.35-this.controlledRoll)*8*e,c=!0),(t.d||t.arrowright)&&(this.rotationY-=1.8*e,this.controlledRoll+=(-.35-this.controlledRoll)*8*e,c=!0),c||(this.controlledRoll-=this.controlledRoll*6*e,Math.abs(this.controlledRoll)<.01&&(this.controlledRoll=0)),this.controlledRoll=Rs.clamp(this.controlledRoll,-.45,.45);const l=Math.cos(this.controlledPitch),h=Math.sin(this.rotationY)*l*this.velocity*e,d=Math.cos(this.rotationY)*l*this.velocity*e,u=Math.sin(this.controlledPitch)*this.velocity*e;this.position.x+=h,this.position.z+=d,this.position.y+=u;const f=Tt(this.position.x,this.position.z)+1.4;this.position.y<f&&(this.position.y=f);const g=this.position.x+Math.sin(this.rotationY)*1.2,_=this.position.z+Math.cos(this.rotationY)*1.2,m=this.position.x-Math.sin(this.rotationY)*1.2,p=this.position.z-Math.cos(this.rotationY)*1.2,M=Tt(g,_),S=Tt(m,p),y=-Math.atan2(M-S,2.4),R=this.position.x+Math.sin(this.rotationY+Math.PI/2)*1.2,E=this.position.z+Math.cos(this.rotationY+Math.PI/2)*1.2,C=this.position.x-Math.sin(this.rotationY+Math.PI/2)*1.2,x=this.position.z-Math.cos(this.rotationY+Math.PI/2)*1.2,A=Tt(R,E),L=Tt(C,x),I=Math.atan2(A-L,2.4),U=Math.max(0,Math.min(1,(this.position.y-f)/5)),H=Rs.lerp(y,0,U),K=Rs.lerp(I,0,U),D=this.controlledPitch+H;this.pitch+=(D-this.pitch)*.12;const W=this.controlledRoll+K;this.roll+=(W-this.roll)*.15;const V=Math.sin(i*3.5)*.08;if(this.mesh.position.copy(this.position),this.mesh.position.y+=V,this.mesh.rotation.set(this.pitch,this.rotationY,this.roll,"YXZ"),this.thrusters&&this.thrusters.length>=2){const ie=this.thrusters[0],se=this.thrusters[1],ue=Math.abs(this.velocity)/this.maxSpeed*.8+.5+Math.sin(i*40)*.15;this.flameMats.forEach(Se=>{Se.opacity=r?.95:.4,ie.scale.set(1,1,r?ue:.5),se.scale.set(1,1,r?ue:.5)});const ge=r?.15:o?-.15:0;ie.rotation.x+=(ge-ie.rotation.x)*.1,se.rotation.x+=(ge-se.rotation.x)*.1}}checkRampIntersection(e){const t=e.width/2,n=e.depth/2;return this.position.x>=e.position.x-t&&this.position.x<=e.position.x+t&&this.position.z>=e.position.z-n&&this.position.z<=e.position.z+n}teleportTo(e,t,n=0){const i=Tt(e,t);this.position.set(e,i+1.4,t),this.velocity=0,this.rotationY=n,this.steerAngle=0,this.pitch=0,this.roll=0,this.mesh.position.copy(this.position),this.mesh.rotation.set(0,this.rotationY,0)}}class S_{constructor(){this.ctx=null,this.muted=!0,this.masterVolume=null,this.savedVolume=.3,this.ambientOsc=null,this.ambientGain=null,this.engineOsc1=null,this.engineOsc2=null,this.engineLowpass=null,this.engineGain=null,this.warpOsc=null,this.warpLFO=null,this.warpLFOGain=null,this.warpGain=null,this.noiseSource=null,this.noiseFilter=null,this.noiseGain=null,this.bgmVolume=.12,this.currentBgm=null,this.currentBgmIndex=-1,this.bgmTracks=["Assets/GameMusic_Audios/Game Music_mickeyscat-moment-of-peace-mickeyscat-554494.mp3","Assets/GameMusic_Audios/GameMusic_alex-morgan-background-music-545525.mp3","Assets/GameMusic_Audios/GameMusic_delosound-meditation-relaxing-music-background-320405.mp3","Assets/GameMusic_Audios/GameMusic_krasnoshchok-background-music-soft-calm-404429.mp3","Assets/GameMusic_Audios/GameMusic_petrushkasound-relaxation-zen-background-music-461979.mp3","Assets/GameMusic_Audios/GameMusic_sigmamusicart-relaxing-relax-background-music-537728.mp3"]}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterVolume=this.ctx.createGain(),this.masterVolume.gain.value=this.savedVolume,this.masterVolume.connect(this.ctx.destination))}setVolume(e){const t=Math.max(0,Math.min(1,parseFloat(e)));this.savedVolume=t,this.masterVolume&&this.ctx&&this.masterVolume.gain.setValueAtTime(t,this.ctx.currentTime)}setMute(e){var t,n,i,r;this.muted=e,this.muted?(this.ambientGain&&this.ambientGain.gain.setValueAtTime(0,((t=this.ctx)==null?void 0:t.currentTime)||0),this.engineGain&&this.engineGain.gain.setValueAtTime(0,((n=this.ctx)==null?void 0:n.currentTime)||0),this.noiseGain&&this.noiseGain.gain.setValueAtTime(0,((i=this.ctx)==null?void 0:i.currentTime)||0),this.warpGain&&this.warpGain.gain.setValueAtTime(0,((r=this.ctx)==null?void 0:r.currentTime)||0),this.stopBgm()):(this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ambientGain?this.ambientGain.gain.setValueAtTime(.02,this.ctx.currentTime):this.startAmbientHum(),this.engineGain&&this.noiseGain&&this.warpGain?(this.engineGain.gain.setValueAtTime(.02,this.ctx.currentTime),this.noiseGain.gain.setValueAtTime(.02,this.ctx.currentTime),this.warpGain.gain.setValueAtTime(.015,this.ctx.currentTime)):this.startDroneSound(),this.currentBgm?this.currentBgm.play().catch(o=>console.warn(o)):this.playRandomBgm())}playRandomBgm(){if(this.muted)return;this.stopBgm();let e;do e=Math.floor(Math.random()*this.bgmTracks.length);while(e===this.currentBgmIndex&&this.bgmTracks.length>1);this.currentBgmIndex=e;const t=this.bgmTracks[this.currentBgmIndex];try{this.currentBgm=new Audio(t),this.currentBgm.volume=this.bgmVolume,this.currentBgm.play().catch(n=>{console.warn("Audio autoplay blocked or track error:",n)}),this.currentBgm.addEventListener("ended",()=>{this.playRandomBgm()})}catch(n){console.error("Failed to play BGM track:",n)}}stopBgm(){this.currentBgm&&(this.currentBgm.pause(),this.currentBgm=null)}setBgmVolume(e){const t=Math.max(0,Math.min(1,parseFloat(e)));this.bgmVolume=t,this.currentBgm&&(this.currentBgm.volume=t)}playClick(){if(this.muted||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(1200,e),t.frequency.exponentialRampToValueAtTime(300,e+.05),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+.05),t.connect(n),n.connect(this.masterVolume),t.start(e),t.stop(e+.06)}playHover(){if(this.muted||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(800,e),t.frequency.setValueAtTime(950,e+.015),n.gain.setValueAtTime(.05,e),n.gain.exponentialRampToValueAtTime(.001,e+.03),t.connect(n),n.connect(this.masterVolume),t.start(e),t.stop(e+.031)}playBoot(){if(this.init(),this.muted||!this.ctx)return;const e=this.ctx.currentTime;[261.63,329.63,392,523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=e+i*.07,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.15,r),a.gain.exponentialRampToValueAtTime(.001,r+.12),o.connect(a),a.connect(this.masterVolume),o.start(r),o.stop(r+.15)})}playError(){if(this.muted||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(110,e),n.type="square",n.frequency.setValueAtTime(113,e),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.25),t.connect(i),n.connect(i),i.connect(this.masterVolume),t.start(e),n.start(e),t.stop(e+.26),n.stop(e+.26)}playSuccess(){if(this.muted||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(523.25,e),t.frequency.setValueAtTime(659.25,e+.1),t.frequency.setValueAtTime(783.99,e+.2),t.frequency.exponentialRampToValueAtTime(1046.5,e+.4),n.gain.setValueAtTime(.15,e),n.gain.setValueAtTime(.15,e+.2),n.gain.exponentialRampToValueAtTime(.001,e+.5),t.connect(n),n.connect(this.masterVolume),t.start(e),t.stop(e+.55)}startAmbientHum(){if(this.muted||!this.ctx||this.ambientOsc)return;const e=this.ctx.currentTime;this.ambientOsc=this.ctx.createOscillator(),this.ambientGain=this.ctx.createGain(),this.ambientOsc.type="sine",this.ambientOsc.frequency.value=55,this.ambientGain.gain.setValueAtTime(.02,e),this.ambientOsc.connect(this.ambientGain),this.ambientGain.connect(this.masterVolume),this.ambientOsc.start(e)}startDroneSound(){if(this.muted||!this.ctx||this.engineOsc1)return;const e=this.ctx.currentTime;this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.value=58,this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.value=59.2,this.engineLowpass=this.ctx.createBiquadFilter(),this.engineLowpass.type="lowpass",this.engineLowpass.frequency.value=160,this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,e),this.engineOsc1.connect(this.engineLowpass),this.engineOsc2.connect(this.engineLowpass),this.engineLowpass.connect(this.engineGain),this.engineGain.connect(this.masterVolume),this.warpOsc=this.ctx.createOscillator(),this.warpOsc.type="sine",this.warpOsc.frequency.value=135,this.warpLFO=this.ctx.createOscillator(),this.warpLFO.type="sine",this.warpLFO.frequency.value=11,this.warpLFOGain=this.ctx.createGain(),this.warpLFOGain.gain.value=32,this.warpGain=this.ctx.createGain(),this.warpGain.gain.setValueAtTime(0,e),this.warpLFO.connect(this.warpLFOGain),this.warpLFOGain.connect(this.warpOsc.frequency),this.warpOsc.connect(this.warpGain),this.warpGain.connect(this.masterVolume);const t=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<t;r++)i[r]=Math.random()*2-1;this.noiseSource=this.ctx.createBufferSource(),this.noiseSource.buffer=n,this.noiseSource.loop=!0,this.noiseFilter=this.ctx.createBiquadFilter(),this.noiseFilter.type="bandpass",this.noiseFilter.Q.value=4.2,this.noiseFilter.frequency.value=240,this.noiseGain=this.ctx.createGain(),this.noiseGain.gain.setValueAtTime(0,e),this.noiseSource.connect(this.noiseFilter),this.noiseFilter.connect(this.noiseGain),this.noiseGain.connect(this.masterVolume),this.engineOsc1.start(e),this.engineOsc2.start(e),this.warpOsc.start(e),this.warpLFO.start(e),this.noiseSource.start(e)}updateDroneSound(e){if(this.muted||!this.ctx||(this.engineOsc1||this.startDroneSound(),!this.engineOsc1))return;const t=this.ctx.currentTime,n=58+e*77;this.engineOsc1.frequency.setTargetAtTime(n,t,.1),this.engineOsc2.frequency.setTargetAtTime(n+1.2,t,.1);const i=160+e*220;this.engineLowpass.frequency.setTargetAtTime(i,t,.1);const r=.02+e*.04;this.engineGain.gain.setTargetAtTime(r,t,.1);const o=135+e*225;this.warpOsc.frequency.setTargetAtTime(o,t,.1);const a=11+e*13;this.warpLFO.frequency.setTargetAtTime(a,t,.1);const c=.015+e*.02;this.warpGain.gain.setTargetAtTime(c,t,.1);const l=240+e*810;this.noiseFilter.frequency.setTargetAtTime(l,t,.15);const h=4.2-e*1.2;this.noiseFilter.Q.setTargetAtTime(h,t,.15);const d=.02+e*.08;this.noiseGain.gain.setTargetAtTime(d,t,.1)}playTeleport(){if(this.muted||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(1800,e+.35),n.type="triangle",n.frequency.setValueAtTime(150,e),n.frequency.exponentialRampToValueAtTime(900,e+.35),i.gain.setValueAtTime(.01,e),i.gain.linearRampToValueAtTime(.18,e+.1),i.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(i),n.connect(i),i.connect(this.masterVolume),t.start(e),n.start(e),t.stop(e+.42),n.stop(e+.42)}playCrystalHit(e){if(this.muted||!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine";const r=1200+Math.random()*800;n.frequency.setValueAtTime(r,t),n.frequency.exponentialRampToValueAtTime(r*.1,t+.18);const o=Math.min(.05+e*.12,.25);i.gain.setValueAtTime(o,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(i),i.connect(this.masterVolume),n.start(t),n.stop(t+.2)}playZoneSync(e){if(this.muted||!this.ctx)return;const t=this.ctx.currentTime;(e==="contact"?[392,587,880]:[523,659,1046]).forEach((i,r)=>{const o=t+r*.08,a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(i,o),a.frequency.setValueAtTime(i*1.5,o+.05),c.gain.setValueAtTime(.08,o),c.gain.exponentialRampToValueAtTime(.001,o+.15),a.connect(c),c.connect(this.masterVolume),a.start(o),a.stop(o+.16)})}}const Ve=new S_;class w_{constructor(){this.group=new He,this.ramps=[],this.crystals=[],this.projectZones=[],this.contactZone=null,this.mushrooms=[],this.treeLights=[],this.runicRings=[],this.flowerLights=[],this.portalDebris=[],this.portalRingMat=null,this.portalCoreMat=null,this.portalInnerCoreMat=null,this.portalLight=null,this.grassMesh=null,this.grassCount=35e3,this.grassPositions=null,this.grassScales=null,this.grassYaws=null,this.leafMesh=null,this.leafCount=9*150,this.leafPositions=null,this.leafRotations=null,this.leafScales=null,this.leafSeeds=null,this.sporeParticles=null,this.sporeCount=200,this.sporePositions=[],this.sporeVelocities=[],this.spireMeshes=[],this.boulderMeshes=[],this.pebbleMeshes=[],this.puddleMeshes=[],this.flowers=[],this.trees=[],this.signGroups=[],this.portalGroup=null,this.beaconGroup=null,this.contactCircle=null,this.onEnterZone=()=>{},this.init()}init(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.strokeStyle="rgba(0, 0, 0, 0.14)",t.lineWidth=2,t.strokeRect(0,0,128,128),t.strokeStyle="rgba(255, 255, 255, 0.2)",t.lineWidth=1,t.strokeRect(32,32,64,64);const n=new zc(e);n.wrapS=gi,n.wrapT=gi,n.repeat.set(125,125);const i=new Jn(250,250,96,96),r=i.attributes.position,o=[],a=new Le(5613104),c=new Le(14060883);for(let $=0;$<r.count;$++){const pe=r.getX($),w=r.getY($),v=Tt(pe,w);r.setZ($,v);const N=Math.sin(w*.06)*12+Math.sin(w*.02)*6,Y=Math.abs(pe-N),Q=Math.sqrt(pe*pe+w*w);let oe=a.clone();if(Q<=8.5)oe.copy(c);else if(Y<3.8)oe.copy(c);else if(Y<7.5){const ae=(Y-3.8)/3.7;oe.lerpColors(c,a,ae)}o.push(oe.r,oe.g,oe.b)}i.setAttribute("color",new ut(o,3)),i.computeVertexNormals();const l=new Te({map:n,vertexColors:!0,roughness:.9,metalness:.1,flatShading:!0}),h=new B(i,l);h.rotation.x=-Math.PI/2,h.receiveShadow=!0,this.group.add(h);const d=new Te({color:9741240,roughness:.85,metalness:.25,flatShading:!0}),u=($,pe,w=1)=>{const v=new He,N=Tt($,pe),Y=new Xe(5*w,6*w,1.2,5),Q=new B(Y,d);Q.position.y=.6,Q.rotation.y=Math.random()*Math.PI,Q.castShadow=!0,Q.receiveShadow=!0,v.add(Q);const oe=new Xe(3.5*w,4.2*w,.9,5),ae=new B(oe,d);ae.position.y=1.65,ae.rotation.y=Math.random()*Math.PI,ae.castShadow=!0,ae.receiveShadow=!0,v.add(ae);const j=new Xe(2.2*w,2.8*w,.7,5),J=new B(j,d);J.position.y=2.45,J.rotation.y=Math.random()*Math.PI,J.castShadow=!0,J.receiveShadow=!0,v.add(J),v.position.set($,N-.2,pe),this.group.add(v)};[{x:-25,z:-15,scale:1.4},{x:30,z:-35,scale:1.6},{x:-35,z:25,scale:1.2},{x:40,z:20,scale:1.5},{x:-10,z:-40,scale:1.3},{x:20,z:45,scale:1.5}].forEach($=>u($.x,$.z,$.scale));const g=($,pe,w=1)=>{const v=new Vt(2.5,20*w,4),N=new B(v,d),Y=Tt($,pe);N.position.set($,Y+10*w-1.5,pe),N.rotation.y=Math.random()*Math.PI,N.rotation.x=(Math.random()-.5)*.08,N.rotation.z=(Math.random()-.5)*.08,N.castShadow=!0,N.receiveShadow=!0,this.group.add(N),this.spireMeshes.push(N)};[{x:-55,z:-45,scale:1.2},{x:55,z:-55,scale:1.4},{x:-60,z:50,scale:1.5},{x:65,z:45,scale:1.3},{x:-80,z:-20,scale:1.6},{x:80,z:-10,scale:1.4},{x:-75,z:75,scale:1.7},{x:75,z:70,scale:1.5},{x:-100,z:-80,scale:1.8},{x:90,z:-90,scale:1.6},{x:-95,z:95,scale:1.9},{x:100,z:90,scale:1.7},{x:0,z:-95,scale:1.5},{x:-110,z:10,scale:1.8},{x:110,z:-20,scale:1.7}].forEach($=>g($.x,$.z,$.scale));const m=new za(2,0),p=new Te({color:9741240,roughness:.9,flatShading:!0});[{x:-15,z:25},{x:-35,z:-10},{x:30,z:-25},{x:-28,z:32},{x:25,z:-5},{x:-8,z:25},{x:35,z:35},{x:-40,z:-35},{x:42,z:-15}].forEach($=>{const pe=new B(m,p),w=Tt($.x,$.z);pe.position.set($.x,w-.4,$.z),pe.scale.set(1+Math.random()*.8,.8+Math.random()*1.5,1+Math.random()*.8),pe.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),pe.castShadow=!0,pe.receiveShadow=!0,this.group.add(pe),this.boulderMeshes.push(pe)});const S=new Ai(.2,0),y=new we(.3,.15,.3),R=new Te({color:7372944,roughness:.9}),E=new Te({color:61695,emissive:61695,emissiveIntensity:.8,roughness:.1});for(let $=0;$<25;$++){const pe=(Math.random()-.5)*85,w=(Math.random()-.5)*85;if(Math.abs(pe)<5&&Math.abs(w)<5)continue;const v=Math.random()>.6;let N;v?(N=new B(S,E),N.scale.set(1,1+Math.random()*.5,1)):N=new B(y,R);const Y=Tt(pe,w);N.position.set(pe,Y+.08,w),N.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),N.castShadow=!0,this.group.add(N),this.pebbleMeshes.push(N)}const C=new Ls(3.8,16),x=new Te({color:5688562,transparent:!0,opacity:.82,roughness:.05,metalness:.1});[{x:18,z:-15},{x:-22,z:-12},{x:-14,z:20},{x:28,z:-28}].forEach($=>{const pe=new B(C,x);pe.rotation.x=-Math.PI/2;const w=Tt($.x,$.z);pe.position.set($.x,w+.05,$.z),pe.receiveShadow=!0,this.group.add(pe),this.puddleMeshes.push(pe)}),this.createMagneticRamp(0,-10,6,12,1.8);const L=new Ai(.65,0),I=new Te({color:16711765,emissive:7340287,emissiveIntensity:.5,roughness:.1,metalness:.9});[{x:-6,z:-18},{x:-4.5,z:-18},{x:-3,z:-18},{x:-5.25,z:-19.5},{x:-3.75,z:-19.5},{x:-5.25,z:-18,y:1.2},{x:-3.75,z:-18,y:1.2},{x:-4.5,z:-18.75,y:2.2}].forEach($=>{const pe=new B(L,I),w=Tt($.x,$.z);pe.position.set($.x,w+($.y||.6),$.z),pe.castShadow=!0,pe.receiveShadow=!0,this.group.add(pe),this.crystals.push({mesh:pe,pos:pe.position.clone(),vel:new P,rot:new P,rotVel:new P,width:1.3,height:1.3,depth:1.3,mass:1})});const H=new Xe(.1,.2,1.2,5),K=new Jt(.8,12,8,0,Math.PI*2,0,Math.PI/2),D=new Te({color:9132587,roughness:.85}),W=new Te({color:16711765,emissive:16711765,emissiveIntensity:.6,roughness:.2});[{x:-25,z:20},{x:-28,z:18},{x:-23,z:24},{x:-30,z:25},{x:-20,z:15},{x:-24,z:14}].forEach(($,pe)=>{const w=new He,v=new B(H,D);v.position.y=.6,v.castShadow=!0,w.add(v);const N=new B(K,W);N.scale.set(1,.5,1),N.position.y=1.2,N.castShadow=!0,w.add(N);const Y=new qn(16711765,1.2,5,1.5);Y.position.set(0,1.2,0),w.add(Y);const Q=Tt($.x,$.z);w.position.set($.x,Q,$.z);const oe=.8+Math.random()*.5;w.scale.set(oe,oe,oe),this.group.add(w),this.mushrooms.push({mesh:w,light:Y,seed:pe*2,baseY:Q})});const ie=($,pe,w,v)=>{const N=Math.sqrt($*$+pe*pe);if(N<12||N>95)return!1;for(const k of v){const T=$-k.tx,G=pe-k.tz,O=(w+k.scale)*1.5;if(T*T+G*G<O*O)return!1}const Y=[{x:-25,z:-15,scale:1.4},{x:30,z:-35,scale:1.6},{x:-35,z:25,scale:1.2},{x:40,z:20,scale:1.5},{x:-10,z:-40,scale:1.3},{x:20,z:45,scale:1.5}];for(const k of Y){const T=$-k.x,G=pe-k.z,O=6*k.scale+2.5;if(T*T+G*G<O*O)return!1}const Q=[{x:-55,z:-45,scale:1.2},{x:55,z:-55,scale:1.4},{x:-60,z:50,scale:1.5},{x:65,z:45,scale:1.3},{x:-80,z:-20,scale:1.6},{x:80,z:-10,scale:1.4},{x:-75,z:75,scale:1.7},{x:75,z:70,scale:1.5},{x:-100,z:-80,scale:1.8},{x:90,z:-90,scale:1.6},{x:-95,z:95,scale:1.9},{x:100,z:90,scale:1.7},{x:0,z:-95,scale:1.5},{x:-110,z:10,scale:1.8},{x:110,z:-20,scale:1.7}];for(const k of Q){const T=$-k.x,G=pe-k.z,O=2.5*k.scale+3;if(T*T+G*G<O*O)return!1}const oe=[{x:-15,z:25},{x:-35,z:-10},{x:30,z:-25},{x:-28,z:32},{x:25,z:-5},{x:-8,z:25},{x:35,z:35},{x:-40,z:-35},{x:42,z:-15}];for(const k of oe){const T=$-k.x,G=pe-k.z;if(T*T+G*G<5.5*5.5)return!1}const ae=[{x:-6,z:-18},{x:-4.5,z:-18},{x:-3,z:-18},{x:-5.25,z:-19.5},{x:-3.75,z:-19.5}];for(const k of ae){const T=$-k.x,G=pe-k.z;if(T*T+G*G<4*4)return!1}const j=[{x:18,z:-15},{x:-22,z:-12},{x:-14,z:20},{x:28,z:-28}];for(const k of j){const T=$-k.x,G=pe-k.z;if(T*T+G*G<6*6)return!1}const J=$-0,me=pe- -10;if(J*J+me*me<9*9)return!1;const ye=[{x:-18,z:12},{x:18,z:18}];for(const k of ye){const T=$-k.x,G=pe-k.z;if(T*T+G*G<6*6)return!1}const ce=$-0,le=pe- -32;if(ce*ce+le*le<8*8)return!1;const Ue=$-0,Be=pe-35;return!(Ue*Ue+Be*Be<7.5*7.5)},se=42,ue=[];let ge=0;for(let $=0;$<se;$++){let pe=0,w=0,v=1,N=!1;for(let oe=0;oe<100;oe++){const ae=(Math.random()-.5)*190,j=(Math.random()-.5)*190,J=3+Math.random()*3;if(ie(ae,j,J,ue)){pe=ae,w=j,v=J,N=!0;break}}if(!N)continue;const Y=Math.floor(Math.random()*4),Q=Math.floor(350+(v-3)*150);ue.push({tx:pe,tz:w,scale:v,style:Y,numLeaves:Q,leafStartIndex:ge}),ge+=Q}this.leafCount=ge,this.leafPositions=new Float32Array(this.leafCount*3),this.leafRotations=new Float32Array(this.leafCount*3),this.leafScales=new Float32Array(this.leafCount*3),this.leafSeeds=new Float32Array(this.leafCount);const Se=new Le,Fe=new rt,tt=new Jn(.24,.17),Ge=new Te({color:16777215,emissive:0,emissiveIntensity:0,roughness:.6,metalness:.05,flatShading:!0,side:Ut});this.leafMesh=new ma(tt,Ge,this.leafCount),this.leafMesh.castShadow=!0,this.leafMesh.receiveShadow=!0;const Pe=[[3979324,6076508,8308816,5025616],[15022389,16732754,13840175,16740419],[16754470,16758605,16763904,16771899]],Oe=[5025616,16732754,16758605];ue.forEach(($,pe)=>{const{tx:w,tz:v,scale:N,style:Y,numLeaves:Q,leafStartIndex:oe}=$,ae=Tt(w,v),j=new He,J=Math.floor(Math.random()*3),me=Pe[J],ye=Oe[J],ce=(1.3+Math.random()*.7)*N,le=(.08+Math.random()*.06)*N*.7,Ue=new B(new Xe(le*.5,le,ce,6),D);Ue.position.y=ce/2,Ue.castShadow=!0,Ue.receiveShadow=!0,j.add(Ue);const Be=new qn(ye,1+Math.random()*.8,8+N*2,1.2);Be.position.set(0,ce+.5,0),j.add(Be),this.treeLights.push({light:Be,seed:pe*1.5});const k=[];if(k.push({center:new P(0,ce,0),radius:(.7+Math.random()*.7)*N*.6,scaleX:1,scaleY:.9,scaleZ:1,weight:1,downwardBias:!1}),Y===0){const G=3+Math.floor(Math.random()*3);for(let O=0;O<G;O++){const re=ce*(.35+Math.random()*.35),ee=le*.45,te=ce*(.45+Math.random()*.4),xe=O/G*Math.PI*2+(Math.random()-.5)*.5,he=.5+Math.random()*.4,ze=new Xe(ee*.4,ee,re,5),Ie=new B(ze,D);Ie.castShadow=!0,Ie.receiveShadow=!0;const Et=re/2,ht=new P(Math.cos(xe)*Math.sin(he),Math.cos(he),Math.sin(xe)*Math.sin(he)).normalize();Ie.position.set(ht.x*Et,te+ht.y*Et,ht.z*Et);const Nt=new Qt().setFromUnitVectors(new P(0,1,0),ht);Ie.setRotationFromQuaternion(Nt),j.add(Ie),k.push({center:new P(ht.x*re,te+ht.y*re,ht.z*re),radius:(.5+Math.random()*.5)*N*.5,scaleX:1,scaleY:.9,scaleZ:1,weight:1.2,downwardBias:!1})}}else if(Y===1){k.length=0;const G=3+Math.floor(Math.random()*2);for(let O=0;O<G;O++){const re=(O+1)/(G+.5),ee=ce*re,te=ce*.3*(1-re*.5),xe=4;for(let he=0;he<xe;he++){const ze=he/xe*Math.PI*2+O*.5,Ie=te,Et=new Xe(le*.25,le*.35,Ie,4),ht=new B(Et,D);ht.castShadow=!0,ht.receiveShadow=!0,ht.position.set(Math.cos(ze)*(Ie/2),ee,Math.sin(ze)*(Ie/2));const Nt=new P(Math.cos(ze),0,Math.sin(ze)).normalize(),en=new Qt().setFromUnitVectors(new P(0,1,0),Nt);ht.setRotationFromQuaternion(en),j.add(ht)}k.push({center:new P(0,ee,0),radius:te,scaleX:1.25,scaleY:.22,scaleZ:1.25,weight:1,downwardBias:!1})}}else if(Y===2){k.length=0;const G=3+Math.floor(Math.random()*2);for(let O=0;O<G;O++){const re=O/G*Math.PI*2+(Math.random()-.5)*.3,ee=ce*(.35+Math.random()*.15),te=1.1+Math.random()*.3,xe=new Xe(le*.3,le*.45,ee,4),he=new B(xe,D);he.castShadow=!0,he.receiveShadow=!0;const ze=new P(Math.cos(re)*Math.sin(te),Math.cos(te),Math.sin(re)*Math.sin(te)).normalize(),Ie=ee/2;he.position.set(ze.x*Ie,ce*.82+ze.y*Ie,ze.z*Ie);const Et=new Qt().setFromUnitVectors(new P(0,1,0),ze);he.setRotationFromQuaternion(Et),j.add(he)}k.push({center:new P(0,ce*1.02,0),radius:ce*.42,scaleX:1.75,scaleY:.22,scaleZ:1.75,weight:1,downwardBias:!1})}else if(Y===3){const G=3+Math.floor(Math.random()*2);for(let O=0;O<G;O++){const re=O/G*Math.PI*2,ee=ce*.3,te=ce*.25,xe=new Xe(le*.35,le*.45,ee,4),he=new B(xe,D);he.castShadow=!0,he.receiveShadow=!0;const ze=.6+Math.random()*.3,Ie=new P(Math.cos(re)*Math.sin(ze),Math.cos(ze),Math.sin(re)*Math.sin(ze)).normalize();he.position.set(Ie.x*(ee/2),ce*.72+Ie.y*(ee/2),Ie.z*(ee/2));const Et=new Qt().setFromUnitVectors(new P(0,1,0),Ie);he.setRotationFromQuaternion(Et),j.add(he);const ht=new Xe(le*.2,le*.35,te,4),Nt=new B(ht,D);Nt.castShadow=!0,Nt.receiveShadow=!0;const en=1.8+Math.random()*.4,Kt=new P(Math.cos(re)*Math.sin(en),Math.cos(en),Math.sin(re)*Math.sin(en)).normalize(),ln=Ie.clone().multiplyScalar(ee).add(new P(0,ce*.72,0));Nt.position.set(ln.x+Kt.x*(te/2),ln.y+Kt.y*(te/2),ln.z+Kt.z*(te/2));const tn=new Qt().setFromUnitVectors(new P(0,1,0),Kt);Nt.setRotationFromQuaternion(tn),j.add(Nt);const On=ln.clone().add(Kt.clone().multiplyScalar(te));k.push({center:On,radius:(.7+Math.random()*.4)*N*.55,scaleX:.9,scaleY:1.45,scaleZ:.9,weight:1,downwardBias:!0})}}j.position.set(w,ae,v),this.group.add(j);const T=k.reduce((G,O)=>G+O.weight,0);for(let G=0;G<Q;G++){const O=oe+G;let re=Math.random()*T,ee=k[0];for(const ni of k){if(re<ni.weight){ee=ni;break}re-=ni.weight}const te=Math.random(),xe=Math.random(),he=te*2*Math.PI,ze=Math.acos(2*xe-1),Ie=(.15+Math.random()*.85)*ee.radius;let Et=Ie*Math.sin(ze)*Math.cos(he)*ee.scaleX,ht=Ie*Math.sin(ze)*Math.sin(he)*ee.scaleY,Nt=Ie*Math.cos(ze)*ee.scaleZ;ee.downwardBias&&(ht-=Ie*.35);const en=ee.center.x+Et,Kt=ee.center.y+ht,ln=ee.center.z+Nt,tn=w+en,On=ae+Kt,Li=v+ln;this.leafPositions[O*3]=tn,this.leafPositions[O*3+1]=On,this.leafPositions[O*3+2]=Li;const nn=new rt;nn.position.set(tn,On,Li);const Di=ee.center.clone().add(new P(w,ae,v));nn.lookAt(Di),ee.downwardBias?nn.rotation.x+=Math.PI/2+(Math.random()-.5)*.6:(nn.rotation.y+=Math.PI+(Math.random()-.5)*1.2,nn.rotation.x+=(Math.random()-.5)*1.2),nn.rotation.z+=(Math.random()-.5)*1.8,this.leafRotations[O*3]=nn.rotation.x,this.leafRotations[O*3+1]=nn.rotation.y,this.leafRotations[O*3+2]=nn.rotation.z;const Bn=.55+Math.random()*.65;this.leafScales[O*3]=Bn,this.leafScales[O*3+1]=Bn,this.leafScales[O*3+2]=Bn,this.leafSeeds[O]=Math.random()*100,Fe.position.set(tn,On,Li),Fe.rotation.copy(nn.rotation),Fe.scale.set(Bn,Bn,Bn),Fe.updateMatrix(),this.leafMesh.setMatrixAt(O,Fe.matrix),Se.setHex(me[Math.floor(Math.random()*me.length)]),this.leafMesh.setColorAt(O,Se)}this.trees.push({group:j,center:new P(w,ae+ce+1,v),leafStartIndex:oe,numLeaves:Q,wasVisible:void 0,seed:pe*1.5,light:Be})}),this.group.add(this.leafMesh);const Ce=[{x:-10,z:-8},{x:12,z:8},{x:-5,z:18},{x:18,z:-5},{x:-16,z:-24},{x:8,z:-15}],dt=new Xe(.04,.05,1.5,4),Ke=new Jt(.18,8,8),at=new Qe({color:16711765});Ce.forEach(($,pe)=>{const w=new He,v=new B(dt,D);v.position.y=.75,v.rotation.z=.15,w.add(v);const N=new B(Ke,at);N.position.set(-.1,1.5,0),w.add(N);const Y=new qn(16711765,1,4,2);Y.position.set(-.1,1.5,0),w.add(Y),this.flowerLights.push({light:Y,seed:pe*3});const Q=Tt($.x,$.z);w.position.set($.x,Q,$.z),this.group.add(w)}),this.projectPortal=this.createProjectPortal(0,-32);const ot=new He,We=new B(new Xe(.1,.5,6,6),D);We.position.y=3,We.castShadow=!0,ot.add(We);const St=new Ri(1,.08,6,18);St.rotateX(Math.PI/2);const gt=new Qe({color:61695,transparent:!0,opacity:.8});this.energyRing=new B(St,gt),this.energyRing.position.y=6.2,ot.add(this.energyRing);const Dt=new B(new Vt(.15,1.2,5),new Qe({color:16711765}));Dt.position.y=6.2,ot.add(Dt);const F=Tt(0,35);ot.position.set(0,F,35),this.group.add(ot),this.beaconGroup=ot;const wt=new ka(3.5,3.7,32);wt.rotateX(-Math.PI/2);const je=new Qe({color:61695,transparent:!0,opacity:.6,side:Ut}),ct=new B(wt,je);ct.position.set(0,F+.05,35),this.group.add(ct),this.contactCircle=ct,this.contactZone={center:new P(0,F,35),radius:3.8},this.createInstancedGrass(),this.createAtmosphericSpores()}createMagneticRamp(e,t,n,i,r){const o=Math.atan2(r,i),a=new He,c=Tt(e,t),l=new we(n,.2,i),h=new Te({color:592142,roughness:.3,metalness:.8}),d=new B(l,h);d.position.set(0,r/2,0),d.rotation.x=o,d.castShadow=!0,d.receiveShadow=!0,a.add(d);const u=new Qe({color:61695}),f=new B(new we(.1,.3,i),u);f.position.set(-n/2-.05,r/2,0),f.rotation.x=o,a.add(f);const g=new B(new we(.1,.3,i),u);g.position.set(n/2+.05,r/2,0),g.rotation.x=o,a.add(g);const _=new Xe(.3,.3,.15,6),m=new Qe({color:61695}),p=new B(_,m);p.position.set(-n/2+.5,r/2-.2,-i/2+1),p.rotation.x=o,a.add(p);const M=new B(_,m);M.position.set(n/2-.5,r/2-.2,i/2-1),M.rotation.x=o,a.add(M),a.position.set(e,c,t),this.group.add(a),this.ramps.push({position:new P(e,c,t),width:n,depth:i,height:r,angle:o})}createSignBoard(e,t,n,i,r,o,a){const c=new He,l=Tt(n,i),h=new Xe(.08,.08,5,8),d=new Te({color:1118486,roughness:.8}),u=new B(h,d);u.position.set(-r/2+.3,2.5,0),u.castShadow=!0,u.receiveShadow=!0,c.add(u);const f=new B(h,d);f.position.set(r/2-.3,2.5,0),f.castShadow=!0,f.receiveShadow=!0,c.add(f);const g=document.createElement("canvas");g.width=512,g.height=256;const _=g.getContext("2d");_.fillStyle="#0a0518",_.fillRect(0,0,512,256),_.strokeStyle=`#${a.toString(16).padStart(6,"0")}`,_.lineWidth=12,_.strokeRect(6,6,500,244),_.fillStyle="#ffffff",_.font="bold 28px Courier New",_.textAlign="center",_.fillText(e,256,55),_.fillStyle="#a5b4fc",_.font="20px Courier New",t.forEach((x,A)=>{_.fillText(x,256,110+A*30)});const m=new zc(g),p=new Jn(r,o),M=new Qe({map:m,side:Ut,transparent:!0,opacity:.95}),S=new B(p,M);S.position.y=3.5,S.castShadow=!0,c.add(S);const y=new we(r+.1,o+.1,.05),R=new Te({color:591124,emissive:a,emissiveIntensity:.15,roughness:.5,metalness:.8}),E=new B(y,R);E.position.set(0,3.5,-.04),E.castShadow=!0,c.add(E);const C=new qn(a,1.5,6,1.5);C.position.set(0,2,.5),c.add(C),c.position.set(n,l,i),this.group.add(c),this.signGroups.push(c)}createProjectPortal(e,t){const n=new He,i=Tt(e,t),r=new Te({color:1579044,roughness:.85,metalness:.2,flatShading:!0}),o=new B(new Xe(5.2,5.8,.5,8),r);o.position.y=.25,o.receiveShadow=!0,o.castShadow=!0,n.add(o);const a=new Te({color:460554,roughness:.2,metalness:.8,flatShading:!0}),c=8,l=4.2;for(let _=0;_<c;_++){const m=_/c*Math.PI,p=Math.cos(m)*l,M=Math.sin(m)*l+.5,S=new Xe(.35,.5,1.8+Math.random()*.6,5),y=new B(S,a);y.position.set(p,M,0),y.rotation.z=-m+Math.PI/2,y.castShadow=!0,y.receiveShadow=!0,n.add(y)}this.portalDebris=[];const h=new Ai(.24,0);for(let _=0;_<12;_++){const m=new B(h,a),p=_/12*Math.PI*2,M=5.2+Math.random()*1.5;m.position.set(Math.cos(p)*M,3+(Math.random()-.5)*3.5,(Math.random()-.5)*2),m.castShadow=!0,n.add(m),this.portalDebris.push({mesh:m,angle:p,radius:M,speed:.8+Math.random()*.8,yOffset:m.position.y})}const d=new Ri(3.6,.25,8,32);this.portalRingMat=new Qe({color:3800852,transparent:!0,opacity:.85,blending:Yn});const u=new B(d,this.portalRingMat);u.position.set(0,3.8,0),n.add(u);const f=new Ls(3.4,32);this.portalCoreMat=new Qe({color:3800852,transparent:!0,opacity:.65,side:Ut,blending:Yn}),this.portalCore=new B(f,this.portalCoreMat),this.portalCore.position.set(0,3.8,.05),n.add(this.portalCore);const g=new Ls(2.4,32);this.portalInnerCoreMat=new Qe({color:65450,transparent:!0,opacity:.8,side:Ut,blending:Yn}),this.portalInnerCore=new B(g,this.portalInnerCoreMat),this.portalInnerCore.position.set(0,3.8,.1),n.add(this.portalInnerCore),this.portalLight=new qn(3800852,3,15,1.2),this.portalLight.position.set(0,3.8,.5),n.add(this.portalLight),n.position.set(e,i,t),this.group.add(n),this.portalGroup=n,this.projectZones.push({name:"portal",center:new P(e,i,t),radius:4.8})}setPortalColor(e){if(this.portalRingMat&&this.portalRingMat.color.setHex(e),this.portalCoreMat&&this.portalCoreMat.color.setHex(e),this.portalInnerCoreMat){const t=new Le(e).addScalar(.1);this.portalInnerCoreMat.color.copy(t)}this.portalLight&&this.portalLight.color.setHex(e)}createInstancedGrass(){const e=new bt,t=new Float32Array([-.12,0,0,.12,0,0,-.08,.65,0,.08,.65,0,0,1.3,-.15]),n=new Float32Array([0,0,1,0,.1,.5,.9,.5,.5,1]),i=[0,1,3,0,3,2,2,3,4];e.setAttribute("position",new Lt(t,3)),e.setAttribute("uv",new Lt(n,2)),e.setIndex(i),e.computeVertexNormals();const r=new Te({roughness:.7,metalness:.15,flatShading:!0,side:Ut});this.grassMesh=new ma(e,r,this.grassCount),this.grassMesh.castShadow=!0,this.grassPositions=new Float32Array(this.grassCount*3),this.grassScales=new Float32Array(this.grassCount*3),this.grassYaws=new Float32Array(this.grassCount);const o=[3979324,6076508,4496708,8308816,10217576,6400051,2263842,1988126],a=new Le,c=new rt;let l=0;for(;l<this.grassCount;){const h=(Math.random()-.5)*88,d=(Math.random()-.5)*88;if(Math.sqrt(h*h+d*d)<8.5)continue;const f=Math.sin(d*.06)*12+Math.sin(d*.02)*6;if(Math.abs(h-f)<4.2)continue;const _=Tt(h,d);this.grassPositions[l*3]=h,this.grassPositions[l*3+1]=_,this.grassPositions[l*3+2]=d;const m=.8+Math.random()*.8,p=.7+Math.random()*.6;this.grassScales[l*3]=p,this.grassScales[l*3+1]=m,this.grassScales[l*3+2]=p;const M=Math.random()*Math.PI*2;this.grassYaws[l]=M,c.position.set(h,_,d),c.rotation.set(0,M,0),c.scale.set(p,m,p),c.updateMatrix(),this.grassMesh.setMatrixAt(l,c.matrix),a.setHex(o[Math.floor(Math.random()*o.length)]),this.grassMesh.setColorAt(l,a),l++}this.group.add(this.grassMesh)}createAtmosphericSpores(){const e=new bt,t=new Float32Array(this.sporeCount*3);for(let i=0;i<this.sporeCount;i++){const r=(Math.random()-.5)*80,o=(Math.random()-.5)*80,c=Tt(r,o)+.5+Math.random()*7.5;t[i*3]=r,t[i*3+1]=c,t[i*3+2]=o,this.sporeVelocities.push({x:(Math.random()-.5)*.4,y:(Math.random()-.5)*.3,z:(Math.random()-.5)*.4})}e.setAttribute("position",new Lt(t,3));const n=new Dr({size:.22,color:61695,transparent:!0,opacity:.75,blending:Yn,depthWrite:!1});this.sporeParticles=new Ga(e,n),this.group.add(this.sporeParticles)}update(e,t,n){if(this.energyRing&&(this.energyRing.rotation.y=t*.8,this.energyRing.scale.set(1+Math.sin(t*5)*.1,1+Math.sin(t*5)*.1,1)),this.runicRings.forEach((r,o)=>{const a=o%2===0?1:-1;r.rotation.y=t*.6*a,r.position.y=6.8+Math.sin(t*2+o)*.08}),this.mushrooms.forEach(r=>{r.mesh.position.y=r.baseY+Math.sin(t+r.seed)*.05,r.light.intensity=.8+Math.sin(t*3+r.seed)*.4}),this.trees.forEach(r=>{r.light.intensity=.8+Math.sin(t*2+r.seed)*.3}),this.flowers.forEach(r=>{r.light.intensity=.6+Math.sin(t*4+r.seed)*.4}),this.grassMesh){const r=new rt,o=n?n.position:null,a=!!o;for(let c=0;c<this.grassCount;c++){const l=c*3,h=this.grassPositions[l],d=this.grassPositions[l+1],u=this.grassPositions[l+2],f=this.grassScales[l],g=this.grassScales[l+1],_=this.grassYaws[c],m=Math.sin(t*2.5+h*.15+u*.12)*.09;let p=0,M=0,S=1;if(a){const y=h-o.x,R=u-o.z,E=y*y+R*R;if(E<15*15&&E<4.2*4.2){const A=1-Math.sqrt(E)/4.2,L=Math.atan2(R,y||1e-4);p=-Math.sin(L)*A*1,M=Math.cos(L)*A*1,S=1-A*.35}}r.position.set(h,d,u),r.rotation.set(m*.4+p,_,m+M,"YXZ"),r.scale.set(f,g*S,f),r.updateMatrix(),this.grassMesh.setMatrixAt(c,r.matrix)}this.grassMesh.instanceMatrix.needsUpdate=!0}if(this.leafMesh){const r=new rt;for(let o=0;o<this.leafCount;o++){const a=o*3,c=this.leafPositions[a],l=this.leafPositions[a+1],h=this.leafPositions[a+2],d=this.leafRotations[a],u=this.leafRotations[a+1],f=this.leafRotations[a+2],g=this.leafScales[a],_=this.leafSeeds[o],m=Math.sin(t*4.5+_)*.08,p=Math.cos(t*3.8+_)*.08,M=Math.sin(t*5.2+_)*.12;r.position.set(c,l,h),r.rotation.set(d+m,u+p,f+M,"YXZ"),r.scale.set(g,g,g),r.updateMatrix(),this.leafMesh.setMatrixAt(o,r.matrix)}this.leafMesh.instanceMatrix.needsUpdate=!0}if(this.sporeParticles){const r=this.sporeParticles.geometry.attributes.position,o=r.array;for(let a=0;a<this.sporeCount;a++){const c=a*3,l=this.sporeVelocities[a];o[c]+=l.x*e,o[c+1]+=(l.y+Math.sin(t+a)*.08)*e,o[c+2]+=l.z*e;const h=Tt(o[c],o[c+2]);(o[c+1]<h+.3||o[c+1]>h+8)&&(l.y=-l.y);const d=120;Math.abs(o[c])>d&&(o[c]=-o[c]),Math.abs(o[c+2])>d&&(o[c+2]=-o[c+2])}r.needsUpdate=!0}const i=9.8;if(this.crystals.forEach(r=>{const a=Tt(r.pos.x,r.pos.z)+.6;if(r.pos.y>a?r.vel.y-=i*e:(r.pos.y=a,r.vel.y=0),r.vel.x*=.93,r.vel.z*=.93,r.rotVel.y*=.93,r.pos.addScaledVector(r.vel,e),r.mesh.position.copy(r.pos),r.mesh.rotation.y+=r.rotVel.y*e,n&&r.pos.distanceTo(n.position)<1.3){const h=r.pos.clone().sub(n.position).setY(0).normalize(),d=Math.abs(n.velocity)*1.5;d>.5&&(r.vel.x=h.x*d*1.3,r.vel.z=h.z*d*1.3,r.rotVel.y=(Math.random()-.5)*d*8,r.pos.y===a&&(r.vel.y=d*.5),Ve.playCrystalHit(d))}}),n){let r=null;for(const o of this.projectZones)if(n.position.distanceTo(o.center)<o.radius){r={type:"project",name:o.name};break}!r&&this.contactZone&&n.position.distanceTo(this.contactZone.center)<this.contactZone.radius&&(r={type:"contact"}),this.onEnterZone(r)}this.portalGroup&&(this.portalCore&&(this.portalCore.rotation.z=t*.8),this.portalInnerCore&&(this.portalInnerCore.rotation.z=-t*1.6),this.portalDebris&&this.portalDebris.forEach(r=>{r.angle+=r.speed*e,r.mesh.position.x=Math.cos(r.angle)*r.radius,r.mesh.position.z=Math.sin(r.angle)*r.radius,r.mesh.position.y=r.yOffset+Math.sin(t*2+r.angle)*.15,r.mesh.rotation.x+=e,r.mesh.rotation.y+=e*.5}))}}class b_{constructor(e){this.container=document.getElementById(e),this.container&&(this.scene=null,this.camera=null,this.renderer=null,this.clock=new Hd,this.drone=null,this.playground=null,this.droneGlow=null,this.starfield=null,this.skyIslands=[],this.clouds=[],this.birds=[],this.shootingStars=[],this.aurora1=null,this.aurora2=null,this.lightMultiplier=1,this.currentPreset="afternoon",this.warmSun=null,this.coolSun=null,this.moonLight=null,this.hemiLight=null,this.starfieldMaterial=null,this.giantMoon=null,this.sun1=null,this.sun2=null,this.sun1Glow=null,this.sun2Glow=null,this.currentLookTarget=new P(0,.8,0),this.keys={},this.isPaused=!1,this.init())}init(){this.scene=new Na,this.scene.background=new Le(792086),this.scene.fog=new Da(792086,.02),this.camera=new Wt(50,this.container.clientWidth/this.container.clientHeight,.1,1e3),this.camera.position.set(0,8,-12),this.renderer=new Xa({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Cl,this.container.appendChild(this.renderer.domElement);const e=new ah(10309341,1314344,.95);this.scene.add(e),this.hemiLight=e;const t=new mi(16768896,22);t.position.set(30,45,30),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=150;const n=50;t.shadow.camera.left=-n,t.shadow.camera.right=n,t.shadow.camera.top=n,t.shadow.camera.bottom=-n,t.shadow.bias=-.001,this.scene.add(t),this.scene.add(t.target),this.warmSun=t;const i=new mi(8072383,14);i.position.set(-30,25,20),this.scene.add(i),this.scene.add(i.target),this.coolSun=i;const r=new mi(10182117,8.5);r.position.set(5,33,75),r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.near=1,r.shadow.camera.far=200,r.shadow.camera.left=-60,r.shadow.camera.right=60,r.shadow.camera.top=60,r.shadow.camera.bottom=-60,r.shadow.bias=-.002,this.scene.add(r),this.scene.add(r.target),this.moonLight=r,this.playground=new w_,this.scene.add(this.playground.group),this.drone=new qa,this.scene.add(this.drone.mesh),this.droneGlow=new qn(61695,6,18,1.5),this.droneGlow.castShadow=!0,this.droneGlow.shadow.bias=-.002,this.scene.add(this.droneGlow),this.setDroneType("cyan-dart"),this.createStarfield(),this.createSkyIslands(),this.createCelestialSky(),this.createAurora(),this.createClouds(),this.createBirds(),window.addEventListener("resize",()=>this.handleResize()),this.setLightingPreset("afternoon"),this.tick()}createStarfield(){this.starfield=new He;const e=450,t=new bt,n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Le(16777215),o=new Le(61695),a=new Le(16711935);for(let y=0;y<e;y++){const R=160+Math.random()*60,E=Math.random()*Math.PI*2,C=Math.acos(2*Math.random()-1);n[y*3]=R*Math.sin(C)*Math.cos(E),n[y*3+1]=Math.abs(R*Math.sin(C)*Math.sin(E))+15,n[y*3+2]=R*Math.cos(C);let x=r;const A=Math.random();A>.75?x=o:A<.15&&(x=a),i[y*3]=x.r,i[y*3+1]=x.g,i[y*3+2]=x.b}t.setAttribute("position",new Lt(n,3)),t.setAttribute("color",new Lt(i,3));const c=new Dr({size:1.4,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0});this.starfieldMaterial=c;const l=new Ga(t,c);this.starfield.add(l);const h=new Lr({color:61695,transparent:!0,opacity:.4,blending:Yn}),d=[new P(-15,38,90),new P(-9,40,90),new P(-3,37,90),new P(1,33,90),new P(7,33,90),new P(5,27,90),new P(-1,27,90),new P(1,33,90)],u=new bt().setFromPoints(d),f=new es(u,h);this.starfield.add(f);const g=[new P(-35,42,85),new P(-30,46,85),new P(-25,40,85),new P(-20,48,85),new P(-14,43,85)],_=new bt().setFromPoints(g),m=new es(_,h);this.starfield.add(m);const p=[new P(20,44,88),new P(26,46,88),new P(24,38,88),new P(28,30,88),new P(21,28,88),new P(24,38,88),new P(14,39,88)],M=new bt().setFromPoints(p),S=new es(M,h);this.starfield.add(S),this.scene.add(this.starfield)}createSkyIslands(){const e=new Te({color:1314344,roughness:.9,metalness:.1,flatShading:!0}),t=new Te({color:61695,emissive:61695,emissiveIntensity:1.2,flatShading:!0});[{x:-35,y:22,z:-25,scale:1.4},{x:32,y:26,z:-35,scale:1.6},{x:-28,y:28,z:30,scale:1.2},{x:38,y:24,z:25,scale:1.5}].forEach((i,r)=>{const o=new He,a=new Vt(2.5,3.5,5);a.rotateX(Math.PI);const c=new B(a,e);c.castShadow=!0,c.receiveShadow=!0,o.add(c);const l=new Xe(2.6,2.5,.4,5),h=new B(l,e);h.position.y=1.75,h.castShadow=!0,o.add(h);const d=new Ai(.5,0),u=new B(d,t);u.position.set(.6,2.2,.4),o.add(u);const f=new B(d,t);f.scale.set(.6,.6,.6),f.position.set(-.7,2.1,-.6),o.add(f),o.position.set(i.x,i.y,i.z),o.scale.set(i.scale,i.scale,i.scale),this.scene.add(o),this.skyIslands.push({mesh:o,speed:.05+r*.02,offset:r})})}createCelestialSky(){const e=new Jt(22,32,32),t=new Qe({color:5904538,transparent:!0,opacity:.6}),n=new B(e,t);n.position.set(5,24,75),this.scene.add(n),this.giantMoon=n;const i=new Jt(24.5,16,16),r=new Qe({color:8072383,transparent:!0,opacity:.18,side:Xt}),o=new B(i,r);n.add(o);const a=new Jt(5,16,16),c=new Qe({color:16777215}),l=new B(a,c);l.position.set(-18,32,70),this.scene.add(l),this.sun1=l;const h=new Jt(6.6,16,16),d=new Qe({color:14743546,transparent:!0,opacity:.28,side:Xt}),u=new B(h,d);l.add(u);const f=new qn(61695,4,60,1.2);f.position.copy(l.position),this.scene.add(f),this.sun1Glow=f;const g=new Jt(3.5,16,16),_=new Qe({color:16758528}),m=new B(g,_);m.position.set(22,16,65),this.scene.add(m),this.sun2=m;const p=new Jt(4.8,16,16),M=new Qe({color:16769154,transparent:!0,opacity:.32,side:Xt}),S=new B(p,M);m.add(S);const y=new qn(16758528,3,50,1.2);y.position.copy(m.position),this.scene.add(y),this.sun2Glow=y}createAurora(){const e=new Jn(120,22,60,1),t=new Qe({color:3800852,transparent:!0,opacity:.26,side:Ut,blending:Yn,depthWrite:!1});this.aurora1=new B(e,t),this.aurora1.position.set(0,26,60),this.scene.add(this.aurora1);const n=new Jn(120,18,60,1),i=new Qe({color:9055202,transparent:!0,opacity:.22,side:Ut,blending:Yn,depthWrite:!1});this.aurora2=new B(n,i),this.aurora2.position.set(0,30,64),this.scene.add(this.aurora2)}createClouds(){this.clouds=[];const e=new Te({color:16777215,roughness:.9,metalness:0,transparent:!0,opacity:.92,flatShading:!0});for(let t=0;t<14;t++){const n=new He,i=4+Math.floor(Math.random()*3);for(let c=0;c<i;c++){const l=new Ai(1.6+Math.random()*1.4,1),h=new B(l,e);h.scale.set(1.6,.75,1),h.position.set((c-i/2)*1.8,(Math.random()-.5)*.4,(Math.random()-.5)*1),h.castShadow=!0,n.add(h)}const r=(Math.random()-.5)*160,o=22+Math.random()*12,a=-60+Math.random()*140;n.position.set(r,o,a),this.scene.add(n),this.clouds.push({mesh:n,speed:.6+Math.random()*.9})}}createBirds(){this.birds=[];const e=new Te({color:5201269,roughness:.7,metalness:.1,flatShading:!0,side:Ut});for(let t=0;t<7;t++){const n=new He,i=new Vt(.12,.5,4);i.rotateX(Math.PI/2);const r=new B(i,e);r.castShadow=!0,n.add(r);const o=new He,a=new B(new we(.55,.015,.15),e);a.position.x=-.275,o.add(a),o.position.set(-.06,0,0),n.add(o);const c=new He,l=new B(new we(.55,.015,.15),e);l.position.x=.275,c.add(l),c.position.set(.06,0,0),n.add(c);const h=(Math.random()-.5)*140,d=13+Math.random()*9,u=-40+Math.random()*110;n.position.set(h,d,u);const f=4+Math.random()*3.5,g=Math.random()*Math.PI*2,_=new P(Math.cos(g)*f,0,Math.sin(g)*f);this.scene.add(n),this.birds.push({group:n,leftWing:o,rightWing:c,velocity:_,flapSpeed:10+Math.random()*6,flapOffset:Math.random()*Math.PI*2})}}spawnShootingStar(){const e=new Xe(.01,.06,4,6);e.rotateZ(Math.PI/4);const t=[16777215,16711935,65535,16771584],n=t[Math.floor(Math.random()*t.length)],i=new Qe({color:n,transparent:!0,opacity:.9}),r=new B(e,i),o=-40+Math.random()*70,a=24+Math.random()*10,c=30+Math.random()*50;r.position.set(o,a,c),this.scene.add(r);const l=25+Math.random()*15,h=new P(l*.7,-l*.7,-l*.2);this.shootingStars.push({mesh:r,material:i,velocity:h})}handleResize(){if(!this.container)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}tick(){if(this.isPaused)return;requestAnimationFrame(()=>this.tick());const e=Math.min(this.clock.getDelta(),.1),t=this.clock.getElapsedTime();if(this.drone){this.drone.update(e,this.keys,this.playground,t);const n=Math.abs(this.drone.velocity)/this.drone.maxSpeed;if(Ve.updateDroneSound(n),this.droneGlow&&this.droneGlow.position.set(this.drone.position.x,this.drone.position.y-.7,this.drone.position.z),this.warmSun){const i=new P(30,45,30),r=i.clone().normalize(),o=new P(1,0,0).cross(r).normalize(),a=r.clone().cross(o).normalize(),c=this.drone.position.dot(o),l=this.drone.position.dot(a),h=100/2048,d=Math.round(c/h)*h,u=Math.round(l/h)*h,f=new P().addScaledVector(o,d).addScaledVector(a,u);this.warmSun.position.copy(f).add(i),this.warmSun.target.position.copy(f),this.warmSun.target.updateMatrixWorld()}if(this.coolSun&&(this.coolSun.position.set(this.drone.position.x-30,this.drone.position.y+25,this.drone.position.z+20),this.coolSun.target.position.copy(this.drone.position),this.coolSun.target.updateMatrixWorld()),this.moonLight){const i=new P(5,33,75),r=i.clone().normalize(),o=new P(1,0,0).cross(r).normalize(),a=r.clone().cross(o).normalize(),c=this.drone.position.dot(o),l=this.drone.position.dot(a),h=120/1024,d=Math.round(c/h)*h,u=Math.round(l/h)*h,f=new P().addScaledVector(o,d).addScaledVector(a,u);this.moonLight.position.copy(f).add(i),this.moonLight.target.position.copy(f),this.moonLight.target.updateMatrixWorld()}}if(this.playground&&this.playground.update(e,t,this.drone),this.starfield&&(this.starfield.rotation.y=t*.005),this.skyIslands.forEach(n=>{n.mesh.rotation.y=t*n.speed,n.mesh.position.y+=Math.sin(t*.8+n.offset)*.006}),this.clouds&&this.clouds.forEach(n=>{n.mesh.position.x+=n.speed*e,n.mesh.position.x>90&&(n.mesh.position.x=-90)}),this.birds&&this.birds.forEach(n=>{n.group.position.addScaledVector(n.velocity,e),n.group.rotation.y=Math.atan2(n.velocity.x,n.velocity.z);const i=Math.sin(t*n.flapSpeed+n.flapOffset)*.6;n.leftWing.rotation.z=i,n.rightWing.rotation.z=-i,n.group.position.x>100&&(n.group.position.x=-100),n.group.position.x<-100&&(n.group.position.x=100),n.group.position.z>100&&(n.group.position.z=-100),n.group.position.z<-100&&(n.group.position.z=100)}),this.aurora1){const n=this.aurora1.geometry.attributes.position;for(let i=0;i<n.count;i++){const r=n.getX(i),o=Math.sin(t*.7+r*.08)*3.5+Math.cos(t*.35+r*.16)*1.5;n.setZ(i,o)}n.needsUpdate=!0}if(this.aurora2){const n=this.aurora2.geometry.attributes.position;for(let i=0;i<n.count;i++){const r=n.getX(i),o=Math.sin(t*.5+r*.07+1.2)*3+Math.cos(t*.25+r*.13)*1.2;n.setZ(i,o)}n.needsUpdate=!0}if(Math.random()<.005&&this.shootingStars.length<3&&this.spawnShootingStar(),this.shootingStars)for(let n=this.shootingStars.length-1;n>=0;n--){const i=this.shootingStars[n];i.mesh.position.addScaledVector(i.velocity,e),i.material.opacity-=e*.95,(i.material.opacity<=0||i.mesh.position.y<1)&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.material.dispose(),this.shootingStars.splice(n,1))}if(this.drone){const n=new P(0,3.2,-11);n.applyAxisAngle(new P(0,1,0),this.drone.rotationY);const i=this.drone.position.clone().add(n);this.camera.position.lerp(i,.08);const r=this.drone.position.clone(),o=new P(0,1,3.5);o.applyAxisAngle(new P(0,1,0),this.drone.rotationY),r.add(o),this.currentLookTarget.lerp(r,.1),this.camera.lookAt(this.currentLookTarget)}this.renderer.render(this.scene,this.camera)}setDroneType(e){if(!this.drone)return;this.drone.rebuildModel(e);let t=61695;e==="swift-z"?t=3800852:e==="interceptor-gl"?t=65382:e==="xeno-cargo"?t=16753920:e==="valkyrie-x"?t=16711935:e==="solar-wing"?t=16742912:e==="cyan-dart"?t=62463:e==="sentinel-v"&&(t=26367),this.droneGlow&&this.droneGlow.color.setHex(t)}setLightMultiplier(e){this.lightMultiplier=e,this.currentPreset&&this.setLightingPreset(this.currentPreset)}setLightingPreset(e){this.currentPreset=e;const t={morning:{bg:16758531,fog:16758531,fogDensity:.007,hemiSky:16763904,hemiGround:5597999,hemiIntensity:.9,warmSunColor:16736768,warmSunIntensity:20,coolSunColor:8069026,coolSunIntensity:6,moonLightColor:10182117,moonLightIntensity:0,starfieldOpacity:0,auroraOpacity1:0,auroraOpacity2:0,sunsScale:.6,moonScale:0},afternoon:{bg:8900331,fog:13034239,fogDensity:.005,hemiSky:16777215,hemiGround:11854231,hemiIntensity:1.25,warmSunColor:16775399,warmSunIntensity:28,coolSunColor:14742270,coolSunIntensity:8,moonLightColor:16777215,moonLightIntensity:0,starfieldOpacity:0,auroraOpacity1:0,auroraOpacity2:0,sunsScale:1,moonScale:0},evening:{bg:14902292,fog:14902292,fogDensity:.007,hemiSky:16733184,hemiGround:3997798,hemiIntensity:.9,warmSunColor:16735370,warmSunIntensity:24,coolSunColor:16758528,coolSunIntensity:10,moonLightColor:10182117,moonLightIntensity:1,starfieldOpacity:0,auroraOpacity1:0,auroraOpacity2:0,sunsScale:.8,moonScale:0},night:{bg:461593,fog:461593,fogDensity:.015,hemiSky:858922,hemiGround:71207,hemiIntensity:.4,warmSunColor:16768896,warmSunIntensity:0,coolSunColor:8072383,coolSunIntensity:0,moonLightColor:3718648,moonLightIntensity:16,starfieldOpacity:.95,auroraOpacity1:.45,auroraOpacity2:.4,sunsScale:0,moonScale:1.3}},n=t[e]||t.afternoon;this.scene.background&&this.scene.background.setHex(n.bg),this.scene.fog&&(this.scene.fog.color.setHex(n.fog),this.scene.fog.density=n.fogDensity),this.hemiLight&&(this.hemiLight.color.setHex(n.hemiSky),this.hemiLight.groundColor.setHex(n.hemiGround),this.hemiLight.intensity=n.hemiIntensity*this.lightMultiplier),this.warmSun&&(this.warmSun.color.setHex(n.warmSunColor),this.warmSun.intensity=n.warmSunIntensity*this.lightMultiplier),this.coolSun&&(this.coolSun.color.setHex(n.coolSunColor),this.coolSun.intensity=n.coolSunIntensity*this.lightMultiplier),this.moonLight&&(this.moonLight.color.setHex(n.moonLightColor),this.moonLight.intensity=n.moonLightIntensity*this.lightMultiplier),this.starfieldMaterial&&(this.starfieldMaterial.opacity=n.starfieldOpacity),this.aurora1&&(this.aurora1.material.opacity=n.auroraOpacity1),this.aurora2&&(this.aurora2.material.opacity=n.auroraOpacity2),this.sun1&&(this.sun1.scale.setScalar(n.sunsScale),this.sun1.visible=n.sunsScale>0,e==="afternoon"?(this.sun1.material.color.setHex(16763904),this.sun1.scale.setScalar(n.sunsScale*1.5),this.sun1Glow&&(this.sun1Glow.color.setHex(16755200),this.sun1Glow.intensity=5)):(this.sun1.material.color.setHex(16777215),this.sun1Glow&&(this.sun1Glow.color.setHex(61695),this.sun1Glow.intensity=n.sunsScale>0?4:0))),this.sun2&&(e==="afternoon"?(this.sun2.visible=!1,this.sun2Glow&&(this.sun2Glow.intensity=0)):(this.sun2.scale.setScalar(n.sunsScale),this.sun2.visible=n.sunsScale>0,this.sun2Glow&&(this.sun2Glow.intensity=n.sunsScale>0?3:0))),this.giantMoon&&(this.giantMoon.scale.setScalar(n.moonScale),this.giantMoon.visible=n.moonScale>0)}setOcclusionCulling(e){this.playground&&(this.playground.occlusionCullingEnabled=e)}pause(){this.isPaused=!0,Ve&&typeof Ve.updateDroneSound=="function"&&Ve.updateDroneSound(0)}resume(){this.isPaused&&(this.isPaused=!1,this.clock.getDelta(),requestAnimationFrame(()=>this.tick()))}}class E_{constructor(){}start(){}pause(){}resume(){}}class T_{constructor(e="lab-drone-canvas"){this.container=document.getElementById(e),this.container&&(this.scene=null,this.camera=null,this.renderer=null,this.droneGroup=null,this.currentDrone=null,this.activeType="cyan-dart",this.animId=null,this.isDragging=!1,this.prevMouseX=0,this.prevMouseY=0,this.autoRotate=!0,this.wireframeMode=!1,this.init())}init(){this.scene=new Na;const e=this.container.clientWidth||600,t=this.container.clientHeight||400;this.camera=new Wt(45,e/t,.1,100),this.camera.position.set(0,1,3.2),this.renderer=new Xa({antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement);const n=new lh(6,12,61695,2236979);n.position.y=-.7,this.scene.add(n);const i=new Pd(16777215,1.2);this.scene.add(i);const r=new mi(16768896,2);r.position.set(4,5,3),this.scene.add(r);const o=new mi(61695,1.8);o.position.set(-4,3,-3),this.scene.add(o);const a=new mi(16711765,1);a.position.set(0,-3,2),this.scene.add(a),this.droneGroup=new He,this.scene.add(this.droneGroup),this.loadDroneModel(this.activeType),this.bindEvents(),this.tick()}loadDroneModel(e){this.activeType=e,this.currentDrone&&this.droneGroup.remove(this.currentDrone.mesh),this.currentDrone=new qa,this.currentDrone.rebuildModel(e),this.currentDrone.mesh.scale.set(1.15,1.15,1.15),this.droneGroup.add(this.currentDrone.mesh),document.querySelectorAll(".lab-chassis-pill").forEach(t=>{t.dataset.drone===e?t.classList.add("active"):t.classList.remove("active")})}setWireframe(e){this.wireframeMode=e,!(!this.currentDrone||!this.currentDrone.mesh)&&this.currentDrone.mesh.traverse(t=>{t.isMesh&&t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.wireframe=e):t.material.wireframe=e)})}bindEvents(){this.container.addEventListener("mousedown",n=>{this.isDragging=!0,this.autoRotate=!1,this.prevMouseX=n.clientX,this.prevMouseY=n.clientY}),window.addEventListener("mousemove",n=>{if(!this.isDragging)return;const i=n.clientX-this.prevMouseX,r=n.clientY-this.prevMouseY;this.prevMouseX=n.clientX,this.prevMouseY=n.clientY,this.droneGroup.rotation.y+=i*.008,this.droneGroup.rotation.x+=r*.008,this.droneGroup.rotation.x=Math.max(-Math.PI/4,Math.min(Math.PI/4,this.droneGroup.rotation.x))}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),this.container.addEventListener("touchstart",n=>{n.touches.length===1&&(this.isDragging=!0,this.autoRotate=!1,this.prevMouseX=n.touches[0].clientX,this.prevMouseY=n.touches[0].clientY)},{passive:!0}),window.addEventListener("touchmove",n=>{if(!this.isDragging||n.touches.length!==1)return;const i=n.touches[0].clientX-this.prevMouseX,r=n.touches[0].clientY-this.prevMouseY;this.prevMouseX=n.touches[0].clientX,this.prevMouseY=n.touches[0].clientY,this.droneGroup.rotation.y+=i*.008,this.droneGroup.rotation.x+=r*.008,this.droneGroup.rotation.x=Math.max(-Math.PI/4,Math.min(Math.PI/4,this.droneGroup.rotation.x))},{passive:!0}),window.addEventListener("touchend",()=>{this.isDragging=!1}),this.container.addEventListener("wheel",n=>{n.preventDefault(),this.camera.position.z+=n.deltaY*.002,this.camera.position.z=Math.max(1.8,Math.min(4.8,this.camera.position.z))},{passive:!1}),this.resizeObserver=new ResizeObserver(()=>{if(!this.container||!this.camera||!this.renderer)return;const n=this.container.clientWidth||600,i=this.container.clientHeight||400;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}),this.resizeObserver.observe(this.container),document.querySelectorAll(".lab-chassis-pill").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.drone;i&&(Ve.playClick(),this.loadDroneModel(i))})});const e=document.getElementById("lab-wireframe-toggle");e&&e.addEventListener("click",()=>{Ve.playClick(),this.setWireframe(!this.wireframeMode),e.classList.toggle("active",this.wireframeMode)});const t=document.getElementById("lab-spin-toggle");t&&t.addEventListener("click",()=>{Ve.playClick(),this.autoRotate=!this.autoRotate,t.classList.toggle("active",this.autoRotate)})}tick(){this.animId=requestAnimationFrame(()=>this.tick()),this.autoRotate&&!this.isDragging&&(this.droneGroup.rotation.y+=.007);const e=performance.now()*.0015;if(this.droneGroup.position.y=Math.sin(e*2)*.06,this.currentDrone&&this.currentDrone.thrusters){const t=.85+Math.sin(e*30)*.2;this.currentDrone.thrusters.forEach(n=>{n.scale.set(1,1,t)})}this.renderer.render(this.scene,this.camera)}destroy(){this.animId&&(cancelAnimationFrame(this.animId),this.animId=null),this.resizeObserver&&this.resizeObserver.disconnect(),this.renderer&&this.renderer.domElement&&(this.container.removeChild(this.renderer.domElement),this.renderer.dispose())}}class A_{constructor({glManager:e,proCanvas:t,labViewer:n}){this.glManager=e,this.proCanvas=t,this.labViewer=n,this.proContainer=document.getElementById("pro-mode-container"),this.gameHud=document.getElementById("game-hud"),this.canvasContainer=document.getElementById("canvas-container"),this.scanlines=document.querySelector(".scanlines"),this.transitionWarp=document.getElementById("mode-transition-warp"),this.modeToggleBtns=document.querySelectorAll(".mode-toggle-action");const i=window.location.hash.toLowerCase();let r="pro";i==="#game"||i==="#xeno"?r="game":i==="#pro"||i==="#portfolio"?r="pro":localStorage.getItem("gamerscraft_mode")==="game"&&(r="game"),this.currentMode=null,this.setMode(r,!1),this.bindEvents()}bindEvents(){this.modeToggleBtns.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.dataset.targetMode||(this.currentMode==="pro"?"game":"pro");this.setMode(n,!0)})}),window.addEventListener("hashchange",()=>{const e=window.location.hash.toLowerCase();e==="#game"&&this.currentMode!=="game"?this.setMode("game",!0):e==="#pro"&&this.currentMode!=="pro"&&this.setMode("pro",!0)}),window.addEventListener("keydown",e=>{if(e.shiftKey&&(e.key.toLowerCase()==="g"||e.key.toLowerCase()==="m")){if(["input","textarea"].includes(document.activeElement.tagName.toLowerCase()))return;const t=this.currentMode==="pro"?"game":"pro";this.setMode(t,!0)}})}setMode(e,t=!0){this.currentMode!==e&&(this.currentMode=e,localStorage.setItem("gamerscraft_mode",e),t?(Ve.playTeleport(),this.showTransitionWarp(e,()=>{this.applyModeStyles(e)})):this.applyModeStyles(e))}showTransitionWarp(e,t){if(!this.transitionWarp){t();return}const n=this.transitionWarp.querySelector(".warp-mode-label");n&&(n.textContent=e==="game"?"INITIALIZING 3D XENO-WORLD & TELEMETRY...":"SWITCHING TO PROFESSIONAL STUDIO MODE..."),this.transitionWarp.classList.remove("hidden"),this.transitionWarp.classList.add("active"),setTimeout(()=>{t(),setTimeout(()=>{this.transitionWarp.classList.remove("active"),setTimeout(()=>{this.transitionWarp.classList.add("hidden")},400)},350)},300)}applyModeStyles(e){if(e==="game"){document.body.classList.remove("pro-mode-active"),document.body.classList.add("game-mode-active"),this.proContainer&&this.proContainer.classList.add("hidden"),this.gameHud&&this.gameHud.classList.remove("hidden"),this.canvasContainer&&(this.canvasContainer.style.display="block",this.canvasContainer.style.opacity="1",this.canvasContainer.style.pointerEvents="auto"),this.scanlines&&(this.scanlines.style.display="block"),this.glManager&&typeof this.glManager.resume=="function"&&this.glManager.resume(),this.proCanvas&&typeof this.proCanvas.pause=="function"&&this.proCanvas.pause(),document.querySelectorAll(".mode-toggle-action").forEach(i=>{i.classList.add("mode-in-game"),i.classList.remove("mode-in-pro");const r=i.querySelector(".mode-toggle-label");r&&(r.textContent="💼 PRO MODE")});const t=document.getElementById("hud-zone-indicator"),n=document.getElementById("indicator-text");t&&n&&(t.classList.remove("hidden"),n.textContent="3D XENO-EXPLORER ENGAGED // HOVER THRUSTERS ONLINE",setTimeout(()=>{t.classList.add("hidden")},3e3))}else document.body.classList.remove("game-mode-active"),document.body.classList.add("pro-mode-active"),this.proContainer&&this.proContainer.classList.remove("hidden"),this.gameHud&&this.gameHud.classList.add("hidden"),this.canvasContainer&&(this.canvasContainer.style.display="none",this.canvasContainer.style.pointerEvents="none"),this.scanlines&&(this.scanlines.style.display="none"),this.glManager&&typeof this.glManager.pause=="function"&&this.glManager.pause(),this.proCanvas&&typeof this.proCanvas.resume=="function"&&this.proCanvas.resume(),document.querySelectorAll(".mode-toggle-action").forEach(t=>{t.classList.remove("mode-in-game"),t.classList.add("mode-in-pro");const n=t.querySelector(".mode-toggle-label");n&&(n.textContent="🕹️ 3D GAME MODE")})}}const bo=[{id:"the-tanks",title:"the Tanks",disciplines:"GAME • UNITY 3D • WEBGL • MULTIPLAYER",image:"images/tanks_dp.png",tagline:"Multiplayer tactical tank combat game built with Unity 3D, deterministic ballistic physics, and real-time WebGL networking.",category:"game-dev",categoryLabel:"Game Engine",year:"2025",engine:"Unity 3D // WebGL",languages:["C#","HLSL","Networking"],accentColor:"#ffb700",accentGlow:"rgba(255, 183, 0, 0.35)",stats:[{label:"Platform",value:"WebGL / Standalone"},{label:"Physics",value:"Deterministic 60Hz"},{label:"Networking",value:"Multiplayer Sync"},{label:"Engine",value:"Unity 3D"}],overview:"An engaging multiplayer tactical tank combat experience featuring realistic projectile trajectories, arena collision mechanics, and low-latency browser networking in Unity 3D.",challenge:"Synchronizing high-speed ballistic physics and vehicle suspension across networked clients with minimal latency and jitter in WebGL.",solution:"Implemented client-side prediction, tick-based reconciliation, and custom lightweight particle impact shaders.",technicalHighlights:["Real-time multiplayer synchronization with client-side interpolation.","Deterministic ballistic trajectory physics and explosive blast radiuses.","Custom vehicle suspension and turret tracking mechanics.","Optimized low-draw-call assets for smooth 60 FPS WebGL execution."],codeSnippet:`// Ballistic Shell Trajectory & Network Tick Sync
public void FireShell(Vector3 muzzlePos, Vector3 fireVelocity, int fireTick) {
    GameObject shell = ObjectPool.Spawn(shellPrefab, muzzlePos, Quaternion.LookRotation(fireVelocity));
    ShellController sc = shell.GetComponent<ShellController>();
    sc.Initialize(fireVelocity, fireTick, OnShellImpact);
    NetworkManager.SendFireEvent(muzzlePos, fireVelocity, fireTick);
}`,tags:["Unity 3D","C#","WebGL","Multiplayer","Physics Sim"],githubUrl:"https://github.com",liveUrl:"#contact"},{id:"helo",title:"HELO",disciplines:"SIMULATION • UNITY • VR • META QUEST",image:"images/helo_dp.jpg",tagline:"Immersive helicopter flight physics and VR cockpit simulation engineered for Meta Quest in Unity 3D.",category:"xr-spatial",categoryLabel:"Virtual Reality",year:"2025",engine:"Unity 3D // Meta OpenXR",languages:["C#","HLSL","OpenXR SDK"],accentColor:"#00f0ff",accentGlow:"rgba(0, 240, 255, 0.35)",stats:[{label:"Platform",value:"Meta Quest 3 / Pro"},{label:"Frame Rate",value:"90 FPS Lock"},{label:"Controls",value:"6DoF VR Cockpit"},{label:"SDK",value:"Unity OpenXR"}],overview:"A high-fidelity VR flight simulation placing pilots inside an interactive 6DoF helicopter cockpit with real-time aerodynamics, cyclic/collective controls, and spatial audio feedback.",challenge:"Accurate rotor blade aerodynamics, torque physics, and high-performance cockpit rendering maintaining fixed 90 FPS on standalone Quest hardware.",solution:"Blade element momentum theory calculations combined with Single-Pass Stereo Instanced rendering and dynamic foveation.",technicalHighlights:["Interactive 6DoF virtual cockpit with tactile cyclic, collective, and throttle interaction.","Aerodynamic simulation modeling ground effect, translational lift, and vortex ring state.","Spatialized binaural engine acoustics and rotor blade slap harmonics.","Zero-reprojection 90 FPS performance on standalone Meta Quest via SRP batching."],codeSnippet:`// Helicopter Aerodynamic Lift & Torque Calculation
public void CalculateRotorPhysics(float collectiveInput, float cyclicPitch, float cyclicRoll, float pedalYaw) {
    Vector3 mainRotorThrust = transform.up * (baseLift * collectiveInput * airDensityRatio);
    Vector3 cyclicTorque = new Vector3(cyclicPitch * pitchSensitivity, pedalYaw * tailRotorAuthority, -cyclicRoll * rollSensitivity);
    rb.AddForceAtPosition(mainRotorThrust, mainRotorHub.position, ForceMode.Force);
    rb.AddTorque(transform.TransformDirection(cyclicTorque), ForceMode.Force);
}`,tags:["Unity","VR","Meta Quest","OpenXR","Flight Simulation"],githubUrl:"https://github.com",liveUrl:"#contact"},{id:"void-walker",title:"Void Walker",disciplines:"GAME DESIGN • GODOT • PHYSICS • SHADERS",image:"images/project_space.png",tagline:"Dimensional shift platformer exploring non-Euclidean geometry and dynamic gravity tensor fields.",category:"game-dev",categoryLabel:"Game Engine",year:"2024",engine:"Godot 4.3 // C#",languages:["C#","GLSL"],accentColor:"#ff0055",accentGlow:"rgba(255, 0, 85, 0.35)",stats:[{label:"Physics Frame",value:"240 Hz"},{label:"Frame Rate",value:"144 FPS Lock"},{label:"Custom Shaders",value:"18 GLSL"},{label:"Engine",value:"Godot 4.3"}],overview:"An atmospheric puzzle platformer where players warp between overlapping spatial dimensions with variable physical constants.",challenge:"Simultaneous dual-dimension rendering and momentum vector preservation across spatial thresholds.",solution:"Engineered custom stencil-masking GLSL shaders combined with dual-world collision matrices.",technicalHighlights:["Dual-phase stencil buffer rendering for portal windows.","Vector tensor gravitational fields that curve player trajectories.","Screen-space chromatic aberration reacting to velocity shifts.","Dynamic proximity-based audio mixing engine."],codeSnippet:`// Gravitational Tensor Anomaly Calculation
public Vector2 CalculateGravity(Vector2 pos) {
    Vector2 net = BaseGravity;
    foreach (var a in Anomalies) {
        Vector2 diff = a.Position - pos;
        float d2 = Mathf.Max(diff.LengthSquared(), 0.05f);
        if (d2 < a.RadiusSq) net += diff.Normalized() * (a.Mass / d2);
    }
    return net;
}`,tags:["Godot 4.3","C#","GLSL Shaders","Non-Euclidean"],githubUrl:"https://github.com",liveUrl:"#contact"},{id:"cyber-defense",title:"Cyber Defense",disciplines:"UNREAL ENGINE 5 • C++ • AI • VOLUMETRICS",image:"images/project_neon.png",tagline:"Procedural tactical mainframe defense with multi-threaded C++ AI agent waves in Unreal 5.",category:"game-dev",categoryLabel:"Game Engine",year:"2024",engine:"Unreal Engine 5.4",languages:["C++","Niagara VFX"],accentColor:"#00f0ff",accentGlow:"rgba(0, 240, 255, 0.35)",stats:[{label:"Active AI",value:"1,500+ Agents"},{label:"Render Target",value:"60 FPS 4K"},{label:"Particles",value:"500K / sec"},{label:"Multithreading",value:"Async Tasks"}],overview:"A procedural tactical defense simulation in Unreal Engine 5 featuring massive autonomous agent waves and destructible mainframe grids.",challenge:"Simulating over 1,500 pathfinding agents in real-time without CPU game thread bottlenecks.",solution:"Multi-threaded Mass Entity C++ flow-field navigation coupled with GPU-driven Niagara particle computation.",technicalHighlights:["Multi-threaded C++ flow-field steering for 1,500+ dynamic entities.","Procedurally generated hexagonal mainframe terrain via HISM.","Volumetric laser diffraction beams with real-time illumination.","3D world-space holographic UI shaders with depth buffer clipping."],codeSnippet:`// Parallel Flow-Field Agent Compute
void UMainframeFlowField::ComputeVelocities_Parallel(TArrayView<FAgentData> Agents, float DT) {
    ParallelFor(Agents.Num(), [this, &Agents, DT](int32 i) {
        FAgentData& a = Agents[i];
        FVector2D flow = SampleFlowField(WorldToGrid(a.Position));
        a.Velocity = FMath::Vector2DInterpTo(a.Velocity, flow * a.MaxSpeed, DT, a.Steering);
    });
}`,tags:["Unreal Engine 5","C++","Niagara VFX","Multi-Threading"],githubUrl:"https://github.com",liveUrl:"#contact"},{id:"xeno-explorer",title:"Xeno-Explorer 3D",disciplines:"WEB • THREE.JS • 3D • PROCEDURAL AUDIO",image:"images/project_space.png",tagline:"Real-time browser 3D universe with 35,000 instanced flora, drone flight physics, and procedural audio.",category:"webgl-shaders",categoryLabel:"WebGL & Three.js",year:"2025",engine:"Three.js // WebGL 2.0",languages:["JavaScript","Web Audio API"],accentColor:"#54b334",accentGlow:"rgba(84, 179, 52, 0.35)",stats:[{label:"Instanced Grass",value:"35,000 Blades"},{label:"Active Foliage",value:"15,000+ Quads"},{label:"Sound Engine",value:"Procedural Synth"},{label:"Bundle Size",value:"< 700 KB gzip"}],overview:"The browser-native 3D world engine powering GamersCraft, featuring alien terrain physics, shatterable crystals, instanced flora, and procedural audio synthesis.",challenge:"Console-grade fidelity and rock-solid 60 FPS in lightweight, dependency-free WebGL.",solution:"Single-draw-call InstancedMesh pipelines combined with frustum distance culling and a zero-asset procedural Web Audio synthesizer.",technicalHighlights:["35,000 blade instanced grass system with procedural wind displacement.","Hovercraft drone flight physics with banking springs and ground clamping.","Multi-oscillator Web Audio synthesizer with frequency modulation.","Destructible crystal matrices with impulse vector scattering."],codeSnippet:`// Web Audio Harmonic Synthesizer
playHarmonicChord(rootFreq, type = 'sine') {
    [1.0, 1.25, 1.5, 1.875].forEach(ratio => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(rootFreq * ratio, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 3.5);
        osc.connect(gain); gain.connect(this.masterGain);
        osc.start(); osc.stop(this.ctx.currentTime + 3.6);
    });
}`,tags:["Three.js","WebGL 2.0","Web Audio API","InstancedMesh"],githubUrl:"https://github.com",liveUrl:"#game"},{id:"aetheris-gpgpu",title:"Aetheris GPGPU",disciplines:"CREATIVE TECH • GLSL GPGPU • PARTICLES • AUDIO",image:"images/project_space.png",tagline:"Real-time 250,000 particle simulation computed on the GPU with audio-reactive 3D curl noise.",category:"creative-tech",categoryLabel:"Creative Tech",year:"2025",engine:"WebGL 2.0 // GPGPU",languages:["GLSL","JavaScript"],accentColor:"#ffb700",accentGlow:"rgba(255, 183, 0, 0.35)",stats:[{label:"Particles",value:"250,000"},{label:"Compute Unit",value:"GPU FBO Texture"},{label:"Framerate",value:"60 FPS Lock"},{label:"FFT Latency",value:"< 5 ms"}],overview:"A GPU-accelerated particle system computing 250,000 independent particle positions in fragment shaders via Floating-Point Framebuffer Objects.",challenge:"Updating and rendering hundreds of thousands of particles in the browser without CPU overhead.",solution:"Ping-pong Float32 render targets computing curl noise and mouse repulsion entirely on the GPU.",technicalHighlights:["Ping-pong Float32Array texture pipeline updating 250,000 particles at 60 FPS.","3D Simplex Curl Noise field generating fluid-like vortices.","Interactive optical mouse/touch repulsion force with falloff damping.","FFT audio frequency analyzer binding bass frequencies to particle velocity."],codeSnippet:`// GPGPU Velocity Fragment Shader
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 pos = texture2D(texturePosition, uv).xyz;
    vec3 vel = texture2D(textureVelocity, uv).xyz;
    vel += computeCurl(pos * 0.08 + time * 0.1) * 0.015;
    vec3 toMouse = pos - mousePosition;
    float d = length(toMouse);
    if (d < mouseRadius && d > 0.01) vel += (toMouse / d) * (1.0 - d / mouseRadius) * 0.08;
    gl_FragColor = vec4(vel * 0.96, 1.0);
}`,tags:["WebGL 2.0","GLSL GPGPU","Curl Noise","Audio Reactive"],githubUrl:"https://github.com",liveUrl:"#labs"}];var Rl;const R_={discordWebhookUrl:typeof window<"u"&&((Rl=window.GAMERSCRAFT_CONFIG)==null?void 0:Rl.discordWebhookUrl)||typeof localStorage<"u"&&localStorage.getItem("GAMERSCRAFT_DISCORD_WEBHOOK")||""};function Tl(s){if(!s||s.length!==2)return"🌐";const e=s.toUpperCase().split("").map(t=>127397+t.charCodeAt(0));return String.fromCodePoint(...e)}function yh(){const s=navigator.userAgent;let e="Unknown OS";s.includes("Win")?e="Windows":s.includes("Mac")?e="macOS":s.includes("Linux")?e="Linux":s.includes("Android")?e="Android":(s.includes("iPhone")||s.includes("iPad"))&&(e="iOS");let t="Unknown Browser";s.includes("Edg/")?t="Microsoft Edge":s.includes("Chrome/")?t="Google Chrome":s.includes("Firefox/")?t="Mozilla Firefox":s.includes("Safari/")&&!s.includes("Chrome/")&&(t="Apple Safari");const i=/Mobi|Android|iPhone|iPad/i.test(s)||window.innerWidth<768?"📱 Mobile":"💻 Desktop";return{os:e,browser:t,deviceType:i,screen:`${window.screen.width}x${window.screen.height} (Viewport: ${window.innerWidth}x${window.innerHeight})`,language:navigator.language||"en",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}}function Sh(){const s=new URLSearchParams(window.location.search),e=s.get("ref")||s.get("recruiter")||s.get("client")||s.get("tag"),t=s.get("utm_source"),n=s.get("utm_medium"),i=s.get("utm_campaign");return{refTag:e?`🎯 **${e}**`:null,utmSource:t,utmMedium:n,utmCampaign:i,rawSearch:window.location.search||"None"}}async function wh(){try{const s=new AbortController,e=setTimeout(()=>s.abort(),2500),t=await fetch("https://freeipapi.com/api/json",{signal:s.signal});if(clearTimeout(e),t.ok){const n=await t.json();return{country:n.countryName||"Unknown Country",countryCode:n.countryCode||"??",city:n.cityName||"Unknown City",region:n.regionName||"",flag:Tl(n.countryCode),ip:n.ipAddress||"Anonymized",isp:"Standard ISP"}}}catch{}try{const s=new AbortController,e=setTimeout(()=>s.abort(),2500),t=await fetch("https://ipapi.co/json/",{signal:s.signal});if(clearTimeout(e),t.ok){const n=await t.json();return{country:n.country_name||"Unknown Country",countryCode:n.country_code||"??",city:n.city||"Unknown City",region:n.region||"",flag:Tl(n.country_code),ip:n.ip||"Anonymized",isp:n.org||n.asn||"Standard ISP"}}}catch{}return{country:"Global Explorer",countryCode:"UN",city:"Earth",region:"",flag:"🌍",ip:"Protected",isp:"Private Network"}}async function bh(s){var t;const e=typeof window<"u"&&((t=window.GAMERSCRAFT_CONFIG)==null?void 0:t.discordWebhookUrl)||typeof localStorage<"u"&&localStorage.getItem("GAMERSCRAFT_DISCORD_WEBHOOK")||R_.discordWebhookUrl;if(!e)return console.log("%c[GamersCraft Telemetry]%c Webhook not configured yet. Live event simulated:","color: #70e000; font-weight: bold;","color: #94a3b8;",s),console.info(`💡 Tip: To receive live alerts on your Discord channel, run:
localStorage.setItem('GAMERSCRAFT_DISCORD_WEBHOOK', 'YOUR_DISCORD_WEBHOOK_URL');`),!1;try{return(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok}catch(n){return console.warn("[Telemetry] Transmission error:",n),!1}}async function C_(){if(sessionStorage.getItem("gamerscraft_session_logged"))return;const s=yh(),e=Sh(),t=document.referrer?new URL(document.referrer).hostname:"Direct / Bookmark",n=await wh();sessionStorage.setItem("gamerscraft_session_logged","true");const i=`${n.flag} ${n.city}${n.region?`, ${n.region}`:""}, ${n.country}`,r={username:"GamersCraft Telemetry",avatar_url:"https://raw.githubusercontent.com/funkar01/GamersCraft/main/images/gameio_mascot.png",embeds:[{title:"🎮 New GamersCraft Visitor Detected",color:7397376,description:e.refTag?`🔥 **VIP Custom Link Detected:** ${e.refTag}`:"A visitor just landed on your portfolio!",fields:[{name:"📍 Location",value:i,inline:!0},{name:"🏢 Network / ISP",value:n.isp||"General ISP",inline:!0},{name:"🔗 Referrer",value:t,inline:!0},{name:"💻 Device & OS",value:`${s.deviceType} (${s.os} • ${s.browser})`,inline:!0},{name:"📐 Screen Resolution",value:s.screen,inline:!0},{name:"🕒 Local Timezone",value:`${s.timezone} (${new Date().toLocaleTimeString()})`,inline:!0}],footer:{text:"GamersCraft Real-Time Telemetry • Cloudflare Edge"},timestamp:new Date().toISOString()}]};console.log(`%c[GamersCraft Telemetry]%c Visitor connected from %c${i}%c (${s.deviceType})`,"color: #70e000; font-weight: 700;","color: #f1f3f5;","color: #9ef01a; font-weight: bold;","color: #94a3b8;"),await bh(r)}async function Al(s,e={}){const t=yh(),n=Sh(),i=await wh();let r="⚡ Interaction Event",o=165063,a="";s==="GG_NOTE_TRANSMITTED"?(r="🎮 GG Note Transmitted from Visitor!",o=7397376,a=`**Reaction:** ${e.reaction||"🎮 GG"}
**From:** ${e.name||"Anonymous Gamer"}
**Contact:** \`${e.contact||"No contact provided"}\`
**Message:**
> ${e.message||"(No extra note)"}`):s==="CHAT_BOOKING_REQUEST"?(r="📅 Meeting / Chat Request Submitted!",o=14753096,a=`**Topic:** ${e.topic||"General Project Discussion"}
**Name:** ${e.name||"Visitor"}
**Contact Email/Discord:** \`${e.contact||"Not provided"}\`
**Note / Availability:**
> ${e.notes||"Ready to connect"}`):s==="RESUME_CLICK"?(r="📄 Resume / Asset Breakdown Clicked",o=3715072,a="A visitor clicked to inspect your resume or case studies."):s==="MODE_SWITCH"&&(r=`🕹️ Switched to ${e.mode||"3D Game"} Mode`,o=165063,a="Visitor transitioned viewport mode.");const c={username:"GamersCraft Telemetry",embeds:[{title:r,color:o,description:a,fields:[{name:"📍 Visitor Origin",value:`${i.flag} ${i.city}, ${i.country}`,inline:!0},{name:"💻 Device",value:`${t.os} • ${t.browser}`,inline:!0},{name:"🎯 Tracking Ref",value:n.refTag||"Organic Visit",inline:!0}],footer:{text:"GamersCraft Instant Action Alert"},timestamp:new Date().toISOString()}]};return await bh(c)}typeof window<"u"&&setTimeout(()=>{C_()},1200);class P_{constructor(){this.isOpen=!1,this.activeTab="gg",this.selectedReaction="🎮 GG WP",this.init()}init(){this.injectWidgetDOM(),this.bindEvents(),this.loadSavedUser()}injectWidgetDOM(){const e=document.createElement("div");e.id="gg-floating-trigger",e.className="gg-floating-trigger",e.innerHTML=`
            <button id="gg-trigger-btn" class="gg-trigger-btn" title="Drop a GG or Book a 15-min Chat">
                <span class="gg-status-pulse"></span>
                <span class="gg-trigger-icon">⚡</span>
                <span class="gg-trigger-text">DROP A GG / CHAT</span>
                <span class="gg-xp-badge">+100 XP</span>
            </button>
        `,document.body.appendChild(e);const t=document.createElement("div");t.id="gg-chat-modal",t.className="gg-modal-overlay hidden",t.innerHTML=`
            <div class="gg-modal-backdrop" id="gg-modal-backdrop"></div>
            <div class="gg-modal-card" role="dialog" aria-labelledby="gg-modal-title">
                <button class="gg-close-btn" id="gg-close-btn" aria-label="Close modal">×</button>
                
                <div class="gg-card-header">
                    <div class="gg-badge">// COMMS RELAY • LEVEL 1 INTERACTION</div>
                    <h3 id="gg-modal-title" class="gg-modal-title">Transmit to Bhanu Teja</h3>
                    <p class="gg-modal-subtitle">Leave a quick high-five or book a 1-on-1 chat. Zero friction.</p>
                </div>

                <!-- Navigation Tabs -->
                <div class="gg-tab-group">
                    <button class="gg-tab-btn active" data-tab="gg">🎮 Drop a GG</button>
                    <button class="gg-tab-btn" data-tab="chat">📅 Book a Chat</button>
                </div>

                <!-- TAB 1: DROP A GG -->
                <div id="gg-tab-content-gg" class="gg-tab-pane active">
                    <div class="gg-reaction-grid">
                        <button type="button" class="reaction-chip active" data-reaction="🎮 GG WP">🎮 GG WP</button>
                        <button type="button" class="reaction-chip" data-reaction="🔥 Epic 3D Work">🔥 Epic 3D</button>
                        <button type="button" class="reaction-chip" data-reaction="💼 Studio / Let's Hire">💼 Let's Hire</button>
                        <button type="button" class="reaction-chip" data-reaction="🚀 Love the UI">🚀 Love the UI</button>
                        <button type="button" class="reaction-chip" data-reaction="☕ Coffee Chat">☕ Coffee</button>
                    </div>

                    <form id="gg-form-note" class="gg-form">
                        <div class="form-row">
                            <input type="text" id="gg-input-name" class="gg-input" placeholder="Your Name or Studio Handle" required />
                            <input type="text" id="gg-input-contact" class="gg-input" placeholder="Email, Discord, or LinkedIn (Optional)" />
                        </div>
                        <textarea id="gg-input-message" class="gg-textarea" rows="2" placeholder="Leave a short note, feedback, or question..."></textarea>
                        
                        <button type="submit" class="gg-submit-btn">
                            <span>TRANSMIT GG</span>
                            <span class="btn-arrow">⚡</span>
                        </button>
                    </form>
                </div>

                <!-- TAB 2: BOOK A CHAT -->
                <div id="gg-tab-content-chat" class="gg-tab-pane">
                    <form id="gg-form-chat" class="gg-form">
                        <label class="gg-field-label">SELECT DISCUSSION TOPIC</label>
                        <select id="chat-topic-select" class="gg-select">
                            <option value="Game Development & Unity 3D">🕹️ Game Development & Unity 3D</option>
                            <option value="Spatial XR & WebGL Architecture">👓 Spatial XR & WebGL Architecture</option>
                            <option value="Job / Studio Project Opportunity">💼 Job / Studio Project Opportunity</option>
                            <option value="Casual 15-min Tech Coffee Chat">☕ Casual 15-min Tech Coffee Chat</option>
                        </select>

                        <div class="form-row" style="margin-top: 10px;">
                            <input type="text" id="chat-input-name" class="gg-input" placeholder="Your Name" required />
                            <input type="email" id="chat-input-email" class="gg-input" placeholder="Your Email Address" required />
                        </div>

                        <textarea id="chat-input-notes" class="gg-textarea" rows="2" placeholder="Preferred time slots or what you'd like to discuss..."></textarea>

                        <button type="submit" class="gg-submit-btn gg-submit-chat">
                            <span>REQUEST 1-ON-1 SYNC</span>
                            <span class="btn-arrow">📅</span>
                        </button>
                    </form>
                </div>

                <!-- Success Confirmation State -->
                <div id="gg-success-state" class="gg-success-overlay hidden">
                    <div class="success-icon-wrap">
                        <div class="success-ring"></div>
                        <span class="success-emoji">🎉</span>
                    </div>
                    <h4 class="success-title">SIGNAL TRANSMITTED</h4>
                    <p class="success-desc">Thank you! Your transmission was beamed directly to Bhanu's telemetry feed.</p>
                    <div class="success-xp">+100 REPUTATION GAINED</div>
                </div>
            </div>
        `,document.body.appendChild(t)}bindEvents(){const e=document.getElementById("gg-trigger-btn"),t=document.getElementById("gg-chat-modal"),n=document.getElementById("gg-close-btn"),i=document.getElementById("gg-modal-backdrop");e==null||e.addEventListener("click",()=>{Ve.init(),Ve.playClick(),this.open()}),n==null||n.addEventListener("click",()=>{Ve.playClick(),this.close()}),i==null||i.addEventListener("click",()=>this.close()),window.addEventListener("keydown",l=>{l.key==="Escape"&&this.isOpen&&this.close()}),t.querySelectorAll(".gg-tab-btn").forEach(l=>{l.addEventListener("click",h=>{const d=l.dataset.tab;this.switchTab(d)})});const o=t.querySelectorAll(".reaction-chip");o.forEach(l=>{l.addEventListener("click",()=>{o.forEach(h=>h.classList.remove("active")),l.classList.add("active"),this.selectedReaction=l.dataset.reaction,Ve.playHover()})});const a=document.getElementById("gg-form-note");a==null||a.addEventListener("submit",async l=>{l.preventDefault();const h=document.getElementById("gg-input-name").value.trim(),d=document.getElementById("gg-input-contact").value.trim(),u=document.getElementById("gg-input-message").value.trim();this.saveUser(h,d),await Al("GG_NOTE_TRANSMITTED",{reaction:this.selectedReaction,name:h,contact:d,message:u}),this.showSuccess()});const c=document.getElementById("gg-form-chat");c==null||c.addEventListener("submit",async l=>{l.preventDefault();const h=document.getElementById("chat-topic-select").value,d=document.getElementById("chat-input-name").value.trim(),u=document.getElementById("chat-input-email").value.trim(),f=document.getElementById("chat-input-notes").value.trim();this.saveUser(d,u),await Al("CHAT_BOOKING_REQUEST",{topic:h,name:d,contact:u,notes:f}),this.showSuccess()})}open(){const e=document.getElementById("gg-chat-modal");e==null||e.classList.remove("hidden"),this.isOpen=!0,document.body.classList.add("gg-modal-open")}close(){const e=document.getElementById("gg-chat-modal");e==null||e.classList.add("hidden"),this.isOpen=!1,document.body.classList.remove("gg-modal-open"),this.hideSuccess()}switchTab(e){Ve.playClick(),this.activeTab=e;const t=document.getElementById("gg-chat-modal");t.querySelectorAll(".gg-tab-btn").forEach(n=>{n.classList.toggle("active",n.dataset.tab===e)}),t.querySelectorAll(".gg-tab-pane").forEach(n=>{n.classList.toggle("active",n.id===`gg-tab-content-${e}`)})}showSuccess(){Ve.playSuccess();const e=document.getElementById("gg-success-state");e==null||e.classList.remove("hidden"),setTimeout(()=>{this.close()},3500)}hideSuccess(){const e=document.getElementById("gg-success-state");e==null||e.classList.add("hidden")}saveUser(e,t){typeof localStorage<"u"&&(e&&localStorage.setItem("gc_user_name",e),t&&localStorage.setItem("gc_user_contact",t))}loadSavedUser(){if(typeof localStorage<"u"){const e=localStorage.getItem("gc_user_name"),t=localStorage.getItem("gc_user_contact");if(e){const n=document.getElementById("gg-input-name"),i=document.getElementById("chat-input-name");n&&(n.value=e),i&&(i.value=e)}if(t){const n=document.getElementById("gg-input-contact"),i=document.getElementById("chat-input-email");n&&(n.value=t),i&&t.includes("@")&&(i.value=t)}}}}document.addEventListener("DOMContentLoaded",()=>{const s=new P_;document.querySelectorAll(".btn-talk").forEach(k=>{k.addEventListener("click",T=>{T.preventDefault(),s.open()})});const e=new b_("canvas-container"),t={};e.keys=t;const n=k=>{const T=k.key.toLowerCase();t[T]=!0,[" ","arrowup","arrowdown","arrowleft","arrowright"].includes(T)&&document.body.classList.contains("game-mode-active")&&k.preventDefault()},i=k=>{const T=k.key.toLowerCase();t[T]=!1};window.addEventListener("keydown",n),window.addEventListener("keyup",i);const r=new E_("pro-hero-canvas-container"),o=new T_("lab-drone-canvas");new A_({glManager:e,proCanvas:r,labViewer:o});const a=document.getElementById("custom-cursor"),c=document.getElementById("cursor-follower");if(a&&c){let re=function(){G+=(k-G)*.18,O+=(T-O)*.18,c.style.transform=`translate(${G}px, ${O}px)`,requestAnimationFrame(re)};var Ue=re;let k=window.innerWidth/2,T=window.innerHeight/2,G=k,O=T;window.addEventListener("mousemove",te=>{k=te.clientX,T=te.clientY,a.style.transform=`translate(${k}px, ${T}px)`}),re(),(()=>{document.querySelectorAll("a, button, input, textarea, .project-card, .lab-card, .synth-pad-btn, .drone-option").forEach(te=>{te.addEventListener("mouseenter",()=>{c.classList.add("hovered")}),te.addEventListener("mouseleave",()=>{c.classList.remove("hovered")})})})()}const l=document.getElementById("works-grid"),h=document.querySelectorAll(".filter-pill, .filter-btn");function d(k="all"){if(!l)return;l.innerHTML="",(k==="all"?bo:bo.filter(G=>G.category===k)).forEach(G=>{const O=document.createElement("article");O.className="project-flash-card",O.setAttribute("data-id",G.id),O.style.setProperty("--card-accent",G.accentColor),O.innerHTML=`
                <div class="flash-card-media">
                    <img src="${G.image}" alt="${G.title}" class="flash-card-img" loading="lazy" />
                    <div class="flash-card-overlay"></div>
                </div>
                <div class="flash-card-info">
                    <span class="flash-card-disciplines">${G.disciplines}</span>
                    <h3 class="flash-card-title">
                        <span class="title-arrow">→</span>
                        <span class="title-text">${G.title}</span>
                    </h3>
                </div>
            `,O.addEventListener("click",()=>{Ve.playClick(),openCaseStudyDrawer(G.id)}),l.appendChild(O)}),a&&c&&document.querySelectorAll(".project-flash-card").forEach(G=>{G.addEventListener("mouseenter",()=>c.classList.add("hovered")),G.addEventListener("mouseleave",()=>c.classList.remove("hovered"))})}d("all"),h.forEach(k=>{k.addEventListener("click",()=>{Ve.playClick(),h.forEach(T=>T.classList.remove("active")),k.classList.add("active"),d(k.dataset.filter)})});const u=document.getElementById("case-study-drawer"),f=document.getElementById("drawer-content"),g=document.getElementById("drawer-close-btn"),_=document.getElementById("drawer-backdrop");function m(k){const T=bo.find(G=>G.id===k);!T||!u||!f||(Ve.playZoneSync("project"),f.innerHTML=`
            <div class="drawer-header">
                <span class="drawer-category-badge" style="color: ${T.accentColor}">// ${T.categoryLabel.toUpperCase()}</span>
                <h2 class="drawer-title">${T.title}</h2>
                <p class="drawer-tagline">${T.tagline}</p>
            </div>

            <div class="drawer-stats-row">
                ${T.stats.map(G=>`
                    <div class="stat-item">
                        <span class="stat-label">${G.label.toUpperCase()}</span>
                        <span class="stat-val" style="color: ${T.accentColor}">${G.value}</span>
                    </div>
                `).join("")}
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${T.accentColor}">//</span> OVERVIEW</h3>
                <p>${T.overview}</p>
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${T.accentColor}">//</span> ARCHITECTURAL CHALLENGE</h3>
                <p>${T.challenge}</p>
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${T.accentColor}">//</span> TECHNICAL SOLUTION & PIPELINE</h3>
                <p>${T.solution}</p>
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${T.accentColor}">//</span> KEY TECHNICAL HIGHLIGHTS</h3>
                <ul class="drawer-highlights-list">
                    ${T.technicalHighlights.map(G=>`<li>${G}</li>`).join("")}
                </ul>
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${T.accentColor}">//</span> CORE IMPLEMENTATION SNIPPET</h3>
                <div class="code-block-wrapper">
                    <div class="code-block-header">${T.languages.join(" • ")}</div>
                    <pre class="code-block-pre"><code>${M(T.codeSnippet)}</code></pre>
                </div>
            </div>

            <div class="drawer-section" style="display: flex; gap: 16px; margin-top: 40px;">
                <a href="${T.githubUrl}" target="_blank" class="hero-primary-btn" style="background: ${T.accentColor}; flex: 1; justify-content: center;">
                    <span>INSPECT REPOSITORY</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </a>
                <button class="mode-toggle-action hero-secondary-btn" data-target-mode="game" style="flex: 1;">
                    <span>LAUNCH IN 3D WORLD</span>
                    <span class="btn-subtext">🕹️ INTERACTIVE WORLD</span>
                </button>
            </div>
        `,u.classList.remove("hidden"),u.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")}function p(){u&&(Ve.playClick(),u.classList.add("hidden"),u.setAttribute("aria-hidden","true"),document.body.classList.contains("pro-mode-active")&&(document.body.style.overflow="auto"))}function M(k){return k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}document.addEventListener("click",k=>{const T=k.target.closest(".open-case-study");if(T){const G=T.dataset.id;G&&m(G)}}),g&&g.addEventListener("click",p),_&&_.addEventListener("click",p),window.addEventListener("keydown",k=>{k.key==="Escape"&&u&&!u.classList.contains("hidden")&&p()});const S=document.getElementById("lab-vortex-canvas");if(S){let xe=function(){requestAnimationFrame(xe),k.fillStyle="rgba(6, 8, 16, 0.25)",k.fillRect(0,0,T,G),O.forEach(he=>{if(ee.active){const Nt=he.x-ee.x,en=he.y-ee.y,Kt=Math.sqrt(Nt*Nt+en*en)||1;if(Kt<120){const ln=(120-Kt)/120*.4;he.vx+=Nt/Kt*ln,he.vy+=en/Kt*ln}}const ze=T/2,Ie=G/2,Et=ze-he.x,ht=Ie-he.y;he.vx+=Et*3e-4-ht*.0012,he.vy+=ht*3e-4+Et*.0012,he.vx*=.98,he.vy*=.98,he.x+=he.vx,he.y+=he.vy,he.x<0&&(he.x=T),he.x>T&&(he.x=0),he.y<0&&(he.y=G),he.y>G&&(he.y=0),k.beginPath(),k.arc(he.x,he.y,he.radius,0,Math.PI*2),k.fillStyle=he.color,k.shadowBlur=8,k.shadowColor=he.color,k.fill(),k.shadowBlur=0})};var Be=xe;const k=S.getContext("2d");let T=S.width=S.parentElement.clientWidth,G=S.height=S.parentElement.clientHeight;const O=[],re=180,ee={x:T/2,y:G/2,active:!1};for(let he=0;he<re;he++)O.push({x:Math.random()*T,y:Math.random()*G,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5,radius:1.5+Math.random()*2,color:he%2===0?"#ffb700":"#00f0ff"});S.addEventListener("mousemove",he=>{const ze=S.getBoundingClientRect();ee.x=he.clientX-ze.left,ee.y=he.clientY-ze.top,ee.active=!0}),S.addEventListener("mouseleave",()=>{ee.active=!1});const te=document.getElementById("lab-particle-reset");te&&te.addEventListener("click",()=>{Ve.playExplode(),O.forEach(he=>{const ze=Math.random()*Math.PI*2,Ie=4+Math.random()*6;he.vx=Math.cos(ze)*Ie,he.vy=Math.sin(ze)*Ie})}),xe()}document.querySelectorAll(".synth-pad-btn").forEach(k=>{k.addEventListener("click",()=>{const T=parseFloat(k.dataset.freq)||440;if(Ve.init(),Ve.ctx){const G=Ve.ctx,O=G.createOscillator(),re=G.createGain(),ee=G.createBiquadFilter();O.type="sawtooth",O.frequency.setValueAtTime(T,G.currentTime),ee.type="lowpass",ee.frequency.setValueAtTime(1800,G.currentTime),ee.frequency.exponentialRampToValueAtTime(300,G.currentTime+1.2),re.gain.setValueAtTime(.2,G.currentTime),re.gain.exponentialRampToValueAtTime(.001,G.currentTime+1.2),O.connect(ee),ee.connect(re),re.connect(Ve.masterGain),O.start(),O.stop(G.currentTime+1.3),k.classList.add("active"),setTimeout(()=>k.classList.remove("active"),300)}})});const R=document.getElementById("copy-email-btn"),E=document.getElementById("copy-feedback"),C=document.getElementById("direct-email-link");R&&C&&R.addEventListener("click",()=>{const k=C.textContent.trim();navigator.clipboard.writeText(k).then(()=>{Ve.playSuccess(),E&&(E.textContent="COPIED!"),R.style.background="var(--color-cyan)",R.style.color="#000",setTimeout(()=>{E&&(E.textContent="COPY"),R.style.background="",R.style.color=""},2e3)}).catch(()=>{window.location.href=`mailto:${k}`})});const x=document.getElementById("live-studio-clock");function A(){if(!x)return;const k=new Date,T={timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1},G=new Intl.DateTimeFormat([],T).format(k);x.textContent=`UTC+5:30 // ${G}`}A(),setInterval(A,1e3);const L=document.querySelectorAll(".scope-pill");let I="Game Development";L.forEach(k=>{k.addEventListener("click",()=>{Ve.playClick(),L.forEach(T=>T.classList.remove("active")),k.classList.add("active"),I=k.dataset.scope})});const U=document.getElementById("pro-inquiry-form"),H=document.getElementById("form-feedback");U&&U.addEventListener("submit",k=>{k.preventDefault(),Ve.playSuccess();const T=document.getElementById("inquiry-name").value;document.getElementById("inquiry-email").value,document.getElementById("inquiry-message").value,H&&(H.className="form-feedback success",H.textContent=`TRANSMISSION SECURED: Thank you ${T}. Your ${I} brief has been recorded. Direct dispatch initiated.`,H.classList.remove("hidden")),U.reset(),setTimeout(()=>{H&&H.classList.add("hidden")},6e3)});const K=document.getElementById("pro-sound-toggle"),D=document.getElementById("pro-sound-on-svg"),W=document.getElementById("pro-sound-off-svg"),V=document.getElementById("hud-sound-toggle"),ie=document.getElementById("sound-on-svg"),se=document.getElementById("sound-off-svg");function ue(){const T=!Ve.muted;Ve.setMute(T),[D,ie].forEach(G=>{G&&G.classList.toggle("hidden-icon",T)}),[W,se].forEach(G=>{G&&G.classList.toggle("hidden-icon",!T)}),T||Ve.playSuccess()}K&&K.addEventListener("click",ue),V&&V.addEventListener("click",ue);const ge=()=>{Ve.init(),document.removeEventListener("click",ge),document.removeEventListener("keydown",ge)};document.addEventListener("click",ge),document.addEventListener("keydown",ge);const Se=(k,T)=>{const G=document.getElementById(k);if(!G)return;const O=ee=>{ee.preventDefault(),t[T]=!0},re=ee=>{ee.preventDefault(),t[T]=!1};G.addEventListener("mousedown",O),G.addEventListener("mouseup",re),G.addEventListener("mouseleave",re),G.addEventListener("touchstart",O,{passive:!1}),G.addEventListener("touchend",re,{passive:!1}),G.addEventListener("touchcancel",re,{passive:!1})};Se("mobile-drive-up","w"),Se("mobile-drive-down","s"),Se("mobile-steer-left","a"),Se("mobile-steer-right","d");const Fe=document.getElementById("info-overlay"),tt=document.getElementById("popup-content"),Ge=document.getElementById("popup-close"),ne=document.getElementById("hud-zone-indicator"),fe=document.getElementById("indicator-text"),de=document.getElementById("project-templates");let Pe=null,Oe=!1,Ce=0;const dt=["neon","void","defense"],Ke=[3800852,16711935,61695];function at(){const k=document.getElementById("portal-project-details"),T=document.getElementById("portal-project-indicator");if(!k)return;const G=dt[Ce],O=de.querySelector(`#template-${G}`);if(O){k.innerHTML=O.innerHTML;const re=k.querySelector(".popup-badge");re&&re.remove()}if(T){T.textContent=`${Ce+1} / 3`;const re=["#39ff14","#ff00ff","#00f0ff"];T.style.color=re[Ce]}e.playground&&typeof e.playground.setPortalColor=="function"&&e.playground.setPortalColor(Ke[Ce])}document.addEventListener("click",k=>{k.target&&k.target.id==="portal-prev-btn"&&(Ve.playClick(),Ce=(Ce-1+dt.length)%dt.length,at()),k.target&&k.target.id==="portal-next-btn"&&(Ve.playClick(),Ce=(Ce+1)%dt.length,at())}),e.playground.onEnterZone=k=>{if(k){if(Pe&&Pe.type===k.type&&Pe.name===k.name)return;if(Pe=k,Oe=!0,Ve.playZoneSync(k.type==="project"?k.name:"contact"),ne&&ne.classList.remove("hidden"),k.type==="project")if(k.name==="portal"){const T=de.querySelector("#template-portal");T&&(tt.innerHTML=T.innerHTML,Fe.classList.remove("hidden"),at())}else{fe&&(fe.textContent=`MONOLITH SYNC: ENCODING ${k.name.toUpperCase()} DATAFRAMES...`);const T=de.querySelector(`#template-${k.name}`);T&&(tt.innerHTML=T.innerHTML,Fe.classList.remove("hidden"))}else if(k.type==="contact"){fe&&(fe.textContent="BEACON ANOMALY: TRANSCEIVER SOCKET SECURED");const T=de.querySelector("#template-contact");T&&(tt.innerHTML=T.innerHTML,Fe.classList.remove("hidden"))}}else Pe&&(Pe=null,ne&&ne.classList.add("hidden"),Oe&&(Fe.classList.add("hidden"),Oe=!1))},Ge&&Ge.addEventListener("click",()=>{Ve.playClick(),Fe.classList.add("hidden"),Oe=!1});const ot=document.querySelectorAll(".hud-nav-item"),We={welcome:{x:0,z:0,heading:0},about:{x:-18,z:7,heading:Math.PI},quests:{x:0,z:-25,heading:Math.PI},skills:{x:18,z:12,heading:Math.PI/4},contact:{x:0,z:31,heading:0}};ot.forEach(k=>{k.addEventListener("click",T=>{T.preventDefault(),Ve.playTeleport();const G=k.dataset.target,O=We[G];O&&e.drone&&(ne&&(ne.classList.remove("hidden"),fe&&(fe.textContent=`TELEPORTING DRONE TELEMETRY TO ${G.toUpperCase()}...`)),e.drone.teleportTo(O.x,O.z,O.heading),ot.forEach(re=>re.classList.remove("active")),k.classList.add("active"))})});const St=document.getElementById("close-instructions-btn"),gt=document.getElementById("instructions-card");St&&gt&&St.addEventListener("click",()=>{Ve.playClick(),gt.classList.add("hidden")});const Dt=document.getElementById("hud-settings-toggle"),F=document.getElementById("settings-overlay"),wt=document.getElementById("settings-close"),je=document.getElementById("apply-drone-btn"),ct=document.getElementById("volume-slider"),$=document.getElementById("volume-percent"),pe=document.getElementById("music-slider"),w=document.getElementById("music-percent"),v=document.getElementById("light-slider"),N=document.getElementById("light-percent");let Y=null,Q=null,oe=null,ae=null,j=null,J=null,me="cyan-dart";Dt&&F&&Dt.addEventListener("click",()=>{if(Ve.playClick(),Fe&&Fe.classList.add("hidden"),F.classList.remove("hidden"),e.drone){const k=e.drone.currentType||"default";me=k,document.querySelectorAll(".drone-option").forEach(T=>{T.classList.toggle("active",T.dataset.drone===k)})}ye(),ce(me)}),wt&&F&&wt.addEventListener("click",()=>{Ve.playClick(),F.classList.add("hidden"),le()}),ct&&ct.addEventListener("input",k=>{const T=parseFloat(k.target.value);$&&($.textContent=`${Math.round(T*100)}%`),Ve.setVolume(T)}),pe&&pe.addEventListener("input",k=>{const T=parseFloat(k.target.value);w&&(w.textContent=`${Math.round(T*100)}%`),Ve.setBgmVolume(T)}),v&&v.addEventListener("input",k=>{const T=parseFloat(k.target.value);N&&(N.textContent=`${Math.round(T*100)}%`),e&&e.setLightMultiplier(T)}),document.querySelectorAll(".preset-btn").forEach(k=>{k.addEventListener("click",()=>{Ve.playClick(),document.querySelectorAll(".preset-btn").forEach(T=>T.classList.remove("active")),k.classList.add("active"),e&&e.setLightingPreset(k.dataset.preset)})}),document.querySelectorAll(".drone-option").forEach(k=>{k.addEventListener("click",()=>{Ve.playClick(),document.querySelectorAll(".drone-option").forEach(T=>T.classList.remove("active")),k.classList.add("active"),me=k.dataset.drone,ce(me)})}),je&&je.addEventListener("click",()=>{Ve.playSuccess(),e.setDroneType(me),F.classList.add("hidden"),le()});function ye(){const k=document.getElementById("drone-preview-canvas-container");if(!k||Y)return;Q=new Na;const T=new lh(5,10,61695,4473924);T.position.y=-.55,Q.add(T),oe=new Wt(45,k.clientWidth/k.clientHeight,.1,100),oe.position.set(0,.8,2.5),Y=new Xa({antialias:!0,alpha:!0}),Y.setSize(k.clientWidth,k.clientHeight),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.appendChild(Y.domElement);const G=new ah(16777215,3355443,1.4);Q.add(G);const O=new mi(16768896,1.2);O.position.set(3,4,-2),Q.add(O),ae=new He,Q.add(ae);function re(){J=requestAnimationFrame(re),ae.rotation.y+=.005,Y.render(Q,oe)}re()}function ce(k){!Q||!ae||(j&&ae.remove(j.mesh),j=new qa,j.rebuildModel(k),j.mesh.scale.set(1,1,1),ae.rotation.set(.1,0,0),ae.add(j.mesh))}function le(){J&&(cancelAnimationFrame(J),J=null);const k=document.getElementById("drone-preview-canvas-container");k&&Y&&(k.innerHTML="",Y.dispose(),Y=null,Q=null,oe=null,ae=null,j=null)}});
