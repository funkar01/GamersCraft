(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="184",al=0,eo=1,ol=2,Cs=1,dc=2,Hi=3,Gn=0,Ie=1,Pe=2,yn=0,Ei=1,ln=2,no=3,io=4,cl=5,Zn=100,ll=101,hl=102,ul=103,dl=104,fl=200,pl=201,ml=202,gl=203,Pr=204,Lr=205,_l=206,xl=207,vl=208,Ml=209,Sl=210,yl=211,El=212,wl=213,Tl=214,Ir=0,Dr=1,Ur=2,Ti=3,Nr=4,Fr=5,Or=6,Br=7,fc=0,bl=1,Al=2,un=0,pc=1,mc=2,gc=3,_c=4,xc=5,vc=6,Mc=7,Sc=300,Qn=301,bi=302,$s=303,Js=304,Ws=306,Zi=1e3,Sn=1001,zr=1002,Le=1003,Rl=1004,ts=1005,Fe=1006,Qs=1007,Kn=1008,Xe=1009,yc=1010,Ec=1011,ji=1012,ya=1013,fn=1014,en=1015,Tn=1016,Ea=1017,wa=1018,Ki=1020,wc=35902,Tc=35899,bc=1021,Ac=1022,nn=1023,bn=1026,$n=1027,Ta=1028,ba=1029,ti=1030,Aa=1031,Ra=1033,Ps=33776,Ls=33777,Is=33778,Ds=33779,Gr=35840,Vr=35841,Hr=35842,kr=35843,Wr=36196,Xr=37492,qr=37496,Yr=37488,Zr=37489,Fs=37490,jr=37491,Kr=37808,$r=37809,Jr=37810,Qr=37811,ta=37812,ea=37813,na=37814,ia=37815,sa=37816,ra=37817,aa=37818,oa=37819,ca=37820,la=37821,ha=36492,ua=36494,da=36495,fa=36283,pa=36284,Os=36285,ma=36286,Cl=3200,ga=0,Pl=1,Fn="",Ze="srgb",Bs="srgb-linear",zs="linear",le="srgb",oi=7680,so=519,Ll=512,Il=513,Dl=514,Ca=515,Ul=516,Nl=517,Pa=518,Fl=519,ro=35044,ao="300 es",hn=2e3,$i=2001;function Ol(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bl(){const i=Gs("canvas");return i.style.display="block",i}const oo={};function co(...i){const t="THREE."+i.shift();console.log(t,...i)}function Rc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Dt(...i){i=Rc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=Rc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _a(...i){const t=i.join(" ");t in oo||(oo[t]=!0,Dt(...i))}function zl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Gl={[Ir]:Dr,[Ur]:Or,[Nr]:Br,[Ti]:Fr,[Dr]:Ir,[Or]:Ur,[Br]:Nr,[Fr]:Ti};class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lo=1234567;const Wi=Math.PI/180,Ai=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function La(i,t){return(i%t+t)%t}function Vl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Hl(i,t,e){return i!==t?(e-i)/(t-i):0}function Xi(i,t,e){return(1-e)*i+e*t}function kl(i,t,e,n){return Xi(i,t,1-Math.exp(-e*n))}function Wl(i,t=1){return t-Math.abs(La(i,t*2)-t)}function Xl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ql(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zl(i,t){return i+Math.random()*(t-i)}function jl(i){return i*(.5-Math.random())}function Kl(i){i!==void 0&&(lo=i);let t=lo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $l(i){return i*Wi}function Jl(i){return i*Ai}function Ql(i){return(i&i-1)===0&&i!==0}function th(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),h=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*p,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*p,o*l);break;case"ZXZ":i.set(c*p,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*u,o*l);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const es={DEG2RAD:Wi,RAD2DEG:Ai,generateUUID:Pi,clamp:te,euclideanModulo:La,mapLinear:Vl,inverseLerp:Hl,lerp:Xi,damp:kl,pingpong:Wl,smoothstep:Xl,smootherstep:ql,randInt:Yl,randFloat:Zl,randFloatSpread:jl,seededRandom:Kl,degToRad:$l,radToDeg:Jl,isPowerOfTwo:Ql,ceilPowerOfTwo:th,floorPowerOfTwo:eh,setQuaternionFromProperEuler:nh,normalize:ze,denormalize:yi},Ha=class Ha{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ha.prototype.isVector2=!0;let $t=Ha;class Li{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],h=r[a+0],m=r[a+1],g=r[a+2],M=r[a+3];if(p!==M||c!==h||l!==m||u!==g){let f=c*h+l*m+u*g+p*M;f<0&&(h=-h,m=-m,g=-g,M=-M,f=-f);let d=1-o;if(f<.9995){const v=Math.acos(f),E=Math.sin(v);d=Math.sin(d*v)/E,o=Math.sin(o*v)/E,c=c*d+h*o,l=l*d+m*o,u=u*d+g*o,p=p*d+M*o}else{c=c*d+h*o,l=l*d+m*o,u=u*d+g*o,p=p*d+M*o;const v=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=v,l*=v,u*=v,p*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*p+c*m-l*h,t[e+1]=c*g+u*h+l*p-o*m,t[e+2]=l*g+u*m+o*h-c*p,t[e+3]=u*g-o*p-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),h=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*p+l*m*g,this._y=l*m*p-h*u*g,this._z=l*u*g+h*m*p,this._w=l*u*p-h*m*g;break;case"YXZ":this._x=h*u*p+l*m*g,this._y=l*m*p-h*u*g,this._z=l*u*g-h*m*p,this._w=l*u*p+h*m*g;break;case"ZXY":this._x=h*u*p-l*m*g,this._y=l*m*p+h*u*g,this._z=l*u*g+h*m*p,this._w=l*u*p-h*m*g;break;case"ZYX":this._x=h*u*p-l*m*g,this._y=l*m*p+h*u*g,this._z=l*u*g-h*m*p,this._w=l*u*p+h*m*g;break;case"YZX":this._x=h*u*p+l*m*g,this._y=l*m*p+h*u*g,this._z=l*u*g-h*m*p,this._w=l*u*p-h*m*g;break;case"XZY":this._x=h*u*p-l*m*g,this._y=l*m*p-h*u*g,this._z=l*u*g+h*m*p,this._w=l*u*p+h*m*g;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],p=e[10],h=n+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ka=class ka{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*u,this.y=n+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ka.prototype.isVector3=!0;let I=ka;const tr=new I,ho=new Li,Wa=class Wa{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],h=n[2],m=n[5],g=n[8],M=s[0],f=s[3],d=s[6],v=s[1],E=s[4],y=s[7],A=s[2],T=s[5],R=s[8];return r[0]=a*M+o*v+c*A,r[3]=a*f+o*E+c*T,r[6]=a*d+o*y+c*R,r[1]=l*M+u*v+p*A,r[4]=l*f+u*E+p*T,r[7]=l*d+u*y+p*R,r[2]=h*M+m*v+g*A,r[5]=h*f+m*E+g*T,r[8]=h*d+m*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=u*a-o*l,h=o*c-u*r,m=l*r-a*c,g=e*p+n*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=p*M,t[1]=(s*l-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(er.makeScale(t,e)),this}rotate(t){return this.premultiply(er.makeRotation(-t)),this}translate(t,e){return this.premultiply(er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wa.prototype.isMatrix3=!0;let Vt=Wa;const er=new Vt,uo=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fo=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ih(){const i={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bs]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:uo,fromXYZ:fo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:le,toXYZ:uo,fromXYZ:fo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}const ne=ih();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class sh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ci===void 0&&(ci=Gs("canvas")),ci.width=t.width,ci.height=t.height;const s=ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rh=0;class Ia{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nr(s[a].image)):r.push(nr(s[a]))}else r=nr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let ah=0;const ir=new I;class Oe extends ei{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Sn,s=Sn,r=Fe,a=Kn,o=nn,c=Xe,l=Oe.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Pi(),this.name="",this.source=new Ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ir).x}get height(){return this.source.getSize(ir).y}get depth(){return this.source.getSize(ir).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Sc;Oe.DEFAULT_ANISOTROPY=1;const Xa=class Xa{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],p=c[8],h=c[1],m=c[5],g=c[9],M=c[2],f=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-M)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+M)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,y=(m+1)/2,A=(d+1)/2,T=(u+h)/4,R=(p+M)/4,_=(g+f)/4;return E>y&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=R/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=_/r),this.set(n,s,r,e),this}let v=Math.sqrt((f-g)*(f-g)+(p-M)*(p-M)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(p-M)/v,this.z=(h-u)/v,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xa.prototype.isVector4=!0;let ye=Xa;class oh extends ei{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Oe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ia(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends oh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cc extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ch extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ks=class ks{constructor(t,e,n,s,r,a,o,c,l,u,p,h,m,g,M,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,p,h,m,g,M,f)}set(t,e,n,s,r,a,o,c,l,u,p,h,m,g,M,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=p,d[14]=h,d[3]=m,d[7]=g,d[11]=M,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ks().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const h=a*u,m=a*p,g=o*u,M=o*p;e[0]=c*u,e[4]=-c*p,e[8]=l,e[1]=m+g*l,e[5]=h-M*l,e[9]=-o*c,e[2]=M-h*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,m=c*p,g=l*u,M=l*p;e[0]=h+M*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=M+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,m=c*p,g=l*u,M=l*p;e[0]=h-M*o,e[4]=-a*p,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,m=a*p,g=o*u,M=o*p;e[0]=c*u,e[4]=g*l-m,e[8]=h*l+M,e[1]=c*p,e[5]=M*l+h,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,m=a*l,g=o*c,M=o*l;e[0]=c*u,e[4]=M-h*p,e[8]=g*p+m,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*p+g,e[10]=h-M*p}else if(t.order==="XZY"){const h=a*c,m=a*l,g=o*c,M=o*l;e[0]=c*u,e[4]=-p,e[8]=l*u,e[1]=h*p+M,e[5]=a*u,e[9]=m*p-g,e[2]=g*p-m,e[6]=o*u,e[10]=M*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lh,t,hh)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Pn.crossVectors(n,ke),Pn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Pn.crossVectors(n,ke)),Pn.normalize(),ns.crossVectors(ke,Pn),s[0]=Pn.x,s[4]=ns.x,s[8]=ke.x,s[1]=Pn.y,s[5]=ns.y,s[9]=ke.y,s[2]=Pn.z,s[6]=ns.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],h=n[9],m=n[13],g=n[2],M=n[6],f=n[10],d=n[14],v=n[3],E=n[7],y=n[11],A=n[15],T=s[0],R=s[4],_=s[8],b=s[12],L=s[1],C=s[5],N=s[9],k=s[13],X=s[2],U=s[6],z=s[10],B=s[14],j=s[3],$=s[7],tt=s[11],st=s[15];return r[0]=a*T+o*L+c*X+l*j,r[4]=a*R+o*C+c*U+l*$,r[8]=a*_+o*N+c*z+l*tt,r[12]=a*b+o*k+c*B+l*st,r[1]=u*T+p*L+h*X+m*j,r[5]=u*R+p*C+h*U+m*$,r[9]=u*_+p*N+h*z+m*tt,r[13]=u*b+p*k+h*B+m*st,r[2]=g*T+M*L+f*X+d*j,r[6]=g*R+M*C+f*U+d*$,r[10]=g*_+M*N+f*z+d*tt,r[14]=g*b+M*k+f*B+d*st,r[3]=v*T+E*L+y*X+A*j,r[7]=v*R+E*C+y*U+A*$,r[11]=v*_+E*N+y*z+A*tt,r[15]=v*b+E*k+y*B+A*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],p=t[6],h=t[10],m=t[14],g=t[3],M=t[7],f=t[11],d=t[15],v=c*m-l*h,E=o*m-l*p,y=o*h-c*p,A=a*m-l*u,T=a*h-c*u,R=a*p-o*u;return e*(M*v-f*E+d*y)-n*(g*v-f*A+d*T)+s*(g*E-M*A+d*R)-r*(g*y-M*T+f*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=t[9],h=t[10],m=t[11],g=t[12],M=t[13],f=t[14],d=t[15],v=e*o-n*a,E=e*c-s*a,y=e*l-r*a,A=n*c-s*o,T=n*l-r*o,R=s*l-r*c,_=u*M-p*g,b=u*f-h*g,L=u*d-m*g,C=p*f-h*M,N=p*d-m*M,k=h*d-m*f,X=v*k-E*N+y*C+A*L-T*b+R*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/X;return t[0]=(o*k-c*N+l*C)*U,t[1]=(s*N-n*k-r*C)*U,t[2]=(M*R-f*T+d*A)*U,t[3]=(h*T-p*R-m*A)*U,t[4]=(c*L-a*k-l*b)*U,t[5]=(e*k-s*L+r*b)*U,t[6]=(f*y-g*R-d*E)*U,t[7]=(u*R-h*y+m*E)*U,t[8]=(a*N-o*L+l*_)*U,t[9]=(n*L-e*N-r*_)*U,t[10]=(g*T-M*y+d*v)*U,t[11]=(p*y-u*T-m*v)*U,t[12]=(o*b-a*C-c*_)*U,t[13]=(e*C-n*b+s*_)*U,t[14]=(M*E-g*A-f*v)*U,t[15]=(u*A-p*E+h*v)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,p=o+o,h=r*l,m=r*u,g=r*p,M=a*u,f=a*p,d=o*p,v=c*l,E=c*u,y=c*p,A=n.x,T=n.y,R=n.z;return s[0]=(1-(M+d))*A,s[1]=(m+y)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(m-y)*T,s[5]=(1-(h+d))*T,s[6]=(f+v)*T,s[7]=0,s[8]=(g+E)*R,s[9]=(f-v)*R,s[10]=(1-(h+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=li.set(s[0],s[1],s[2]).length();const o=li.set(s[4],s[5],s[6]).length(),c=li.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ke.copy(this);const l=1/a,u=1/o,p=1/c;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=p,Ke.elements[9]*=p,Ke.elements[10]*=p,e.setFromRotationMatrix(Ke),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=hn,c=!1){const l=this.elements,u=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),m=(n+s)/(n-s);let g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===hn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===$i)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hn,c=!1){const l=this.elements,u=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),m=-(n+s)/(n-s);let g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===hn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===$i)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ks.prototype.isMatrix4=!0;let _e=ks;const li=new I,Ke=new _e,lh=new I(0,0,0),hh=new I(1,1,1),Pn=new I,ns=new I,ke=new I,po=new _e,mo=new Li;class Vn{constructor(t=0,e=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return po.makeRotationFromQuaternion(t),this.setFromRotationMatrix(po,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mo.setFromEuler(this),this.setFromQuaternion(mo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uh=0;const go=new I,hi=new Li,gn=new _e,is=new I,Di=new I,dh=new I,fh=new Li,_o=new I(1,0,0),xo=new I(0,1,0),vo=new I(0,0,1),Mo={type:"added"},ph={type:"removed"},ui={type:"childadded",child:null},sr={type:"childremoved",child:null};class ce extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new I,e=new Vn,n=new Li,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Vt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(_o,t)}rotateY(t){return this.rotateOnAxis(xo,t)}rotateZ(t){return this.rotateOnAxis(vo,t)}translateOnAxis(t,e){return go.copy(t).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_o,t)}translateY(t){return this.translateOnAxis(xo,t)}translateZ(t){return this.translateOnAxis(vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Di,is,this.up):gn.lookAt(is,Di,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(gn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mo),ui.child=t,this.dispatchEvent(ui),ui.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ph),sr.child=t,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mo),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,dh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ce.DEFAULT_UP=new I(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fe extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mh={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const f=e.getJointPose(M,n),d=this._getHandJoint(l,M);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},ss={h:0,s:0,l:0};function ar(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=La(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ar(a,r,t+1/3),this.g=ar(a,r,t),this.b=ar(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ne.workingToColorSpace(Ne.copy(this),t),Math.round(te(Ne.r*255,0,255))*65536+Math.round(te(Ne.g*255,0,255))*256+Math.round(te(Ne.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Ze){ne.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(ss);const n=Xi(Ln.h,ss.h,e),s=Xi(Ln.s,ss.s,e),r=Xi(Ln.l,ss.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Gt;Gt.NAMES=Lc;class Da{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Da(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ic extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const $e=new I,_n=new I,or=new I,xn=new I,di=new I,fi=new I,So=new I,cr=new I,lr=new I,hr=new I,ur=new ye,dr=new ye,fr=new ye;class tn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),_n.subVectors(n,e),or.subVectors(t,e);const a=$e.dot($e),o=$e.dot(_n),c=$e.dot(or),l=_n.dot(_n),u=_n.dot(or),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const h=1/p,m=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ur.setScalar(0),dr.setScalar(0),fr.setScalar(0),ur.fromBufferAttribute(t,e),dr.fromBufferAttribute(t,n),fr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ur,r.x),a.addScaledVector(dr,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),_n.subVectors(t,e),$e.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),$e.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,n),fi.subVectors(r,n),cr.subVectors(t,n);const c=di.dot(cr),l=fi.dot(cr);if(c<=0&&l<=0)return e.copy(n);lr.subVectors(t,s);const u=di.dot(lr),p=fi.dot(lr);if(u>=0&&p<=u)return e.copy(s);const h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(di,a);hr.subVectors(t,r);const m=di.dot(hr),g=fi.dot(hr);if(g>=0&&m<=g)return e.copy(r);const M=m*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(fi,o);const f=u*g-m*p;if(f<=0&&p-u>=0&&m-g>=0)return So.subVectors(r,s),o=(p-u)/(p-u+(m-g)),e.copy(s).addScaledVector(So,o);const d=1/(f+M+h);return a=M*d,o=h*d,e.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ni{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(t.matrixWorld),this.union(rs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),as.subVectors(this.max,Ui),pi.subVectors(t.a,Ui),mi.subVectors(t.b,Ui),gi.subVectors(t.c,Ui),In.subVectors(mi,pi),Dn.subVectors(gi,mi),kn.subVectors(pi,gi);let e=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-kn.z,kn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,kn.z,0,-kn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-kn.y,kn.x,0];return!pr(e,pi,mi,gi,as)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,pi,mi,gi,as))?!1:(os.crossVectors(In,Dn),e=[os.x,os.y,os.z],pr(e,pi,mi,gi,as))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vn=[new I,new I,new I,new I,new I,new I,new I,new I],Je=new I,rs=new ni,pi=new I,mi=new I,gi=new I,In=new I,Dn=new I,kn=new I,Ui=new I,as=new I,os=new I,Wn=new I;function pr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=t.dot(Wn),l=e.dot(Wn),u=n.dot(Wn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const be=new I,cs=new $t;let gh=0;class Be extends ei{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ro,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ro&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Dc extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uc extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}const _h=new ni,Ni=new I,mr=new I;class ii{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_h.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(mr)),this.expandByPoint(Ni.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let xh=0;const Ye=new _e,gr=new ce,_i=new I,We=new ni,Fi=new ni,Ce=new I;class ve extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ol(t)?Uc:Dc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return gr.lookAt(t),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(We.min,Fi.min),We.expandByPoint(Ce),Ce.addVectors(We.max,Fi.max),We.expandByPoint(Ce)):(We.expandByPoint(Fi.min),We.expandByPoint(Fi.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ce.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(t,l),Ce.add(_i)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new I,c[_]=new I;const l=new I,u=new I,p=new I,h=new $t,m=new $t,g=new $t,M=new I,f=new I;function d(_,b,L){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,b),p.fromBufferAttribute(n,L),h.fromBufferAttribute(r,_),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,L),u.sub(l),p.sub(l),m.sub(h),g.sub(h);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(C),f.copy(p).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(C),o[_].add(M),o[b].add(M),o[L].add(M),c[_].add(f),c[b].add(f),c[L].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,b=v.length;_<b;++_){const L=v[_],C=L.start,N=L.count;for(let k=C,X=C+N;k<X;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new I,y=new I,A=new I,T=new I;function R(_){A.fromBufferAttribute(s,_),T.copy(A);const b=o[_];E.copy(b),E.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(T,b);const C=y.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,C)}for(let _=0,b=v.length;_<b;++_){const L=v[_],C=L.start,N=L.count;for(let k=C,X=C+N;k<X;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,p=new I;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),M=t.getX(h+1),f=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,f),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,f),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,p=o.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let M=0,f=c.length;M<f;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*u;for(let d=0;d<u;d++)h[g++]=l[m++]}return new Be(h,u,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){const h=l[u],m=t(h,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){const m=l[p];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],p=r[l];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vh=0;class si extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Ei,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Lr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Lr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Mn=new I,_r=new I,ls=new I,Un=new I,xr=new I,hs=new I,vr=new I;class Ua{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_r.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(_r);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ls),o=Un.dot(this.direction),c=-Un.dot(ls),l=Un.lengthSq(),u=Math.abs(1-a*a);let p,h,m,g;if(u>0)if(p=a*c-o,h=a*o-c,g=r*u,p>=0)if(h>=-g)if(h<=g){const M=1/u;p*=M,h*=M,m=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+l;else h<=-g?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+h*(h+2*c)+l):h<=g?(p=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+h*(h+2*c)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(_r).addScaledVector(ls,h),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,c=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,c=(t.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){xr.subVectors(e,t),hs.subVectors(n,t),vr.crossVectors(xr,hs);let a=this.direction.dot(vr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,t);const c=o*this.direction.dot(hs.crossVectors(Un,hs));if(c<0)return null;const l=o*this.direction.dot(xr.cross(Un));if(l<0||c+l>a)return null;const u=-o*Un.dot(vr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yo=new _e,Xn=new Ua,us=new ii,Eo=new I,ds=new I,fs=new I,ps=new I,Mr=new I,ms=new I,wo=new I,gs=new I;class q extends ce{constructor(t=new ve,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],p=r[c];u!==0&&(Mr.fromBufferAttribute(p,t),a?ms.addScaledVector(Mr,u):ms.addScaledVector(Mr.sub(e),u))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(us.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(us,Eo)===null||Xn.origin.distanceToSquared(Eo)>(t.far-t.near)**2))&&(yo.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(yo),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const f=h[g],d=a[f.materialIndex],v=Math.max(f.start,m.start),E=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let y=v,A=E;y<A;y+=3){const T=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=_s(this,d,t,n,l,u,p,T,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let f=g,d=M;f<d;f+=3){const v=o.getX(f),E=o.getX(f+1),y=o.getX(f+2);s=_s(this,a,t,n,l,u,p,v,E,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const f=h[g],d=a[f.materialIndex],v=Math.max(f.start,m.start),E=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let y=v,A=E;y<A;y+=3){const T=y,R=y+1,_=y+2;s=_s(this,d,t,n,l,u,p,T,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let f=g,d=M;f<d;f+=3){const v=f,E=f+1,y=f+2;s=_s(this,a,t,n,l,u,p,v,E,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Mh(i,t,e,n,s,r,a,o){let c;if(t.side===Ie?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Gn,o),c===null)return null;gs.copy(o),gs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(gs);return l<e.near||l>e.far?null:{distance:l,point:gs.clone(),object:i}}function _s(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ds),i.getVertexPosition(c,fs),i.getVertexPosition(l,ps);const u=Mh(i,t,e,n,ds,fs,ps,wo);if(u){const p=new I;tn.getBarycoord(wo,ds,fs,ps,p),s&&(u.uv=tn.getInterpolatedAttribute(s,o,c,l,p,new $t)),r&&(u.uv1=tn.getInterpolatedAttribute(r,o,c,l,p,new $t)),a&&(u.normal=tn.getInterpolatedAttribute(a,o,c,l,p,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new I,materialIndex:0};tn.getNormal(ds,fs,ps,h.normal),u.face=h,u.barycoord=p}return u}class Nc extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Le,u=Le,p,h){super(null,a,o,c,l,u,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xi=new _e,bo=new _e,xs=[],Ao=new ni,Sh=new _e,Oi=new q,Bi=new ii;class Ro extends q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Ao.copy(t.boundingBox).applyMatrix4(xi),this.boundingBox.union(Ao)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Bi.copy(t.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Bi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(n),t.ray.intersectsSphere(Bi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xi),bo.multiplyMatrices(n,xi),Oi.matrixWorld=bo,Oi.raycast(t,xs);for(let a=0,o=xs.length;a<o;a++){const c=xs[a];c.instanceId=r,c.object=this,e.push(c)}xs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nc(new Float32Array(s*this.count),s,this.count,Ta,en));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sr=new I,yh=new I,Eh=new Vt;class Yn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Sr.subVectors(n,e).cross(yh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Sr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eh.getNormalMatrix(t),s=this.coplanarPoint(Sr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ii,wh=new $t(.5,.5),vs=new I;class Na{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],h=r[6],m=r[7],g=r[8],M=r[9],f=r[10],d=r[11],v=r[12],E=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-a,m-u,d-g,A-v).normalize(),s[1].setComponents(l+a,m+u,d+g,A+v).normalize(),s[2].setComponents(l+o,m+p,d+M,A+E).normalize(),s[3].setComponents(l-o,m-p,d-M,A-E).normalize(),n)s[4].setComponents(c,h,f,y).normalize(),s[5].setComponents(l-c,m-h,d-f,A-y).normalize();else if(s[4].setComponents(l-c,m-h,d-f,A-y).normalize(),e===hn)s[5].setComponents(l+c,m+h,d+f,A+y).normalize();else if(e===$i)s[5].setComponents(c,h,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){qn.center.set(0,0,0);const e=wh.distanceTo(t.center);return qn.radius=.7071067811865476+e,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vs.x=s.normal.x>0?t.max.x:t.min.x,vs.y=s.normal.y>0?t.max.y:t.min.y,vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fa extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vs=new I,Hs=new I,Co=new _e,zi=new Ua,Ms=new ii,yr=new I,Po=new I;class Us extends ce{constructor(t=new ve,e=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Vs.fromBufferAttribute(e,s-1),Hs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Vs.distanceTo(Hs);t.setAttribute("lineDistance",new re(n,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),Ms.radius+=r,t.ray.intersectsSphere(Ms)===!1)return;Co.copy(s).invert(),zi.copy(t.ray).applyMatrix4(Co);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=m,f=g-1;M<f;M+=l){const d=u.getX(M),v=u.getX(M+1),E=Ss(this,t,zi,c,d,v,M);E&&e.push(E)}if(this.isLineLoop){const M=u.getX(g-1),f=u.getX(m),d=Ss(this,t,zi,c,M,f,g-1);d&&e.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=m,f=g-1;M<f;M+=l){const d=Ss(this,t,zi,c,M,M+1,M);d&&e.push(d)}if(this.isLineLoop){const M=Ss(this,t,zi,c,g-1,m,g-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ss(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Vs.fromBufferAttribute(o,s),Hs.fromBufferAttribute(o,r),e.distanceSqToSegment(Vs,Hs,yr,Po)>n)return;yr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(yr);if(!(l<t.near||l>t.far))return{distance:l,point:Po.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Lo=new I,Io=new I;class Th extends Us{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Lo.fromBufferAttribute(e,s),Io.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lo.distanceTo(Io);t.setAttribute("lineDistance",new re(n,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oa extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Do=new _e,xa=new Ua,ys=new ii,Es=new I;class Fc extends ce{constructor(t=new ve,e=new Oa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),ys.radius+=r,t.ray.intersectsSphere(ys)===!1)return;Do.copy(s).invert(),xa.copy(t.ray).applyMatrix4(Do);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=h,M=m;g<M;g++){const f=l.getX(g);Es.fromBufferAttribute(p,f),Uo(Es,f,c,s,t,e,this)}}else{const h=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=h,M=m;g<M;g++)Es.fromBufferAttribute(p,g),Uo(Es,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Uo(i,t,e,n,s,r,a){const o=xa.distanceSqToPoint(i);if(o<e){const c=new I;xa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Oc extends Oe{constructor(t=[],e=Qn,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class No extends Oe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ri extends Oe{constructor(t,e,n=fn,s,r,a,o=Le,c=Le,l,u=bn,p=1){if(u!==bn&&u!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:p};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ia(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bh extends Ri{constructor(t,e=fn,n=Qn,s,r,a=Le,o=Le,c,l=bn){const u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Bc extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ft extends ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],p=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(p,2));function g(M,f,d,v,E,y,A,T,R,_,b){const L=y/R,C=A/_,N=y/2,k=A/2,X=T/2,U=R+1,z=_+1;let B=0,j=0;const $=new I;for(let tt=0;tt<z;tt++){const st=tt*C-k;for(let gt=0;gt<U;gt++){const zt=gt*L-N;$[M]=zt*v,$[f]=st*E,$[d]=X,l.push($.x,$.y,$.z),$[M]=0,$[f]=0,$[d]=T>0?1:-1,u.push($.x,$.y,$.z),p.push(gt/R),p.push(1-tt/_),B+=1}}for(let tt=0;tt<_;tt++)for(let st=0;st<R;st++){const gt=h+st+U*tt,zt=h+st+U*(tt+1),Xt=h+(st+1)+U*(tt+1),Ut=h+(st+1)+U*tt;c.push(gt,zt,Ut),c.push(zt,Xt,Ut),j+=6}o.addGroup(m,j,b),m+=j,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qi extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new I,u=new $t;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,h=3;p<=e;p++,h+=3){const m=n+p/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ae extends ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],h=[],m=[];let g=0;const M=[],f=n/2;let d=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(m,2));function v(){const y=new I,A=new I;let T=0;const R=(e-t)/n;for(let _=0;_<=r;_++){const b=[],L=_/r,C=L*(e-t)+t;for(let N=0;N<=s;N++){const k=N/s,X=k*c+o,U=Math.sin(X),z=Math.cos(X);A.x=C*U,A.y=-L*n+f,A.z=C*z,p.push(A.x,A.y,A.z),y.set(U,R,z).normalize(),h.push(y.x,y.y,y.z),m.push(k,1-L),b.push(g++)}M.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const L=M[b][_],C=M[b+1][_],N=M[b+1][_+1],k=M[b][_+1];(t>0||b!==0)&&(u.push(L,C,k),T+=3),(e>0||b!==r-1)&&(u.push(C,N,k),T+=3)}l.addGroup(d,T,0),d+=T}function E(y){const A=g,T=new $t,R=new I;let _=0;const b=y===!0?t:e,L=y===!0?1:-1;for(let N=1;N<=s;N++)p.push(0,f*L,0),h.push(0,L,0),m.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const X=N/s*c+o,U=Math.cos(X),z=Math.sin(X);R.x=b*z,R.y=f*L,R.z=b*U,p.push(R.x,R.y,R.z),h.push(0,L,0),T.x=U*.5+.5,T.y=z*.5*L+.5,m.push(T.x,T.y),g++}for(let N=0;N<s;N++){const k=A+N,X=C+N;y===!0?u.push(X,X+1,k):u.push(X+1,X,k),_+=3}l.addGroup(d,_,y===!0?1:2),d+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qe extends ae{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xs extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new I,y=new I,A=new I;for(let T=0;T<e.length;T+=3)m(e[T+0],E),m(e[T+1],y),m(e[T+2],A),c(E,y,A,v)}function c(v,E,y,A){const T=A+1,R=[];for(let _=0;_<=T;_++){R[_]=[];const b=v.clone().lerp(y,_/T),L=E.clone().lerp(y,_/T),C=T-_;for(let N=0;N<=C;N++)N===0&&_===T?R[_][N]=b:R[_][N]=b.clone().lerp(L,N/C)}for(let _=0;_<T;_++)for(let b=0;b<2*(T-_)-1;b++){const L=Math.floor(b/2);b%2===0?(h(R[_][L+1]),h(R[_+1][L]),h(R[_][L])):(h(R[_][L+1]),h(R[_+1][L+1]),h(R[_+1][L]))}}function l(v){const E=new I;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(v),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const v=new I;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];const y=f(v)/2/Math.PI+.5,A=d(v)/Math.PI+.5;a.push(y,1-A)}g(),p()}function p(){for(let v=0;v<a.length;v+=6){const E=a[v+0],y=a[v+2],A=a[v+4],T=Math.max(E,y,A),R=Math.min(E,y,A);T>.9&&R<.1&&(E<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function m(v,E){const y=v*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function g(){const v=new I,E=new I,y=new I,A=new I,T=new $t,R=new $t,_=new $t;for(let b=0,L=0;b<r.length;b+=9,L+=6){v.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(a[L+0],a[L+1]),R.set(a[L+2],a[L+3]),_.set(a[L+4],a[L+5]),A.copy(v).add(E).add(y).divideScalar(3);const C=f(A);M(T,L+0,v,C),M(R,L+2,E,C),M(_,L+4,y,C)}}function M(v,E,y,A){A<0&&v.x===1&&(a[E]=v.x-1),y.x===0&&y.z===0&&(a[E]=A/2/Math.PI+.5)}function f(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.vertices,t.indices,t.radius,t.detail)}}class Jn extends Xs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jn(t.radius,t.detail)}}class Ba extends Xs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ba(t.radius,t.detail)}}class wn extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=t/o,h=e/c,m=[],g=[],M=[],f=[];for(let d=0;d<u;d++){const v=d*h-a;for(let E=0;E<l;E++){const y=E*p-r;g.push(y,-v,0),M.push(0,0,1),f.push(E/o),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const E=v+l*d,y=v+l*(d+1),A=v+1+l*(d+1),T=v+1+l*d;m.push(E,y,T),m.push(y,A,T)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(M,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.widthSegments,t.heightSegments)}}class za extends ve{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let p=t;const h=(e-t)/s,m=new I,g=new $t;for(let M=0;M<=s;M++){for(let f=0;f<=n;f++){const d=r+f/n*a;m.x=p*Math.cos(d),m.y=p*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}p+=h}for(let M=0;M<s;M++){const f=M*(n+1);for(let d=0;d<n;d++){const v=d+f,E=v,y=v+n+1,A=v+n+2,T=v+1;o.push(E,y,T),o.push(y,A,T)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class je extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],p=new I,h=new I,m=[],g=[],M=[],f=[];for(let d=0;d<=n;d++){const v=[],E=d/n;let y=0;d===0&&a===0?y=.5/e:d===n&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const T=A/e;p.x=-t*Math.cos(s+T*r)*Math.sin(a+E*o),p.y=t*Math.cos(a+E*o),p.z=t*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(p.x,p.y,p.z),h.copy(p).normalize(),M.push(h.x,h.y,h.z),f.push(T+y,1-E),v.push(l++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const E=u[d][v+1],y=u[d][v],A=u[d+1][v],T=u[d+1][v+1];(d!==0||a>0)&&m.push(E,y,T),(d!==n-1||c<Math.PI)&&m.push(y,A,T)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(M,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bn extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],p=[],h=new I,m=new I,g=new I;for(let M=0;M<=n;M++){const f=a+M/n*o;for(let d=0;d<=s;d++){const v=d/s*r;m.x=(t+e*Math.cos(f))*Math.cos(v),m.y=(t+e*Math.cos(f))*Math.sin(v),m.z=e*Math.sin(f),l.push(m.x,m.y,m.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(m,h).normalize(),u.push(g.x,g.y,g.z),p.push(d/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let f=1;f<=s;f++){const d=(s+1)*M+f-1,v=(s+1)*(M-1)+f-1,E=(s+1)*(M-1)+f,y=(s+1)*M+f;c.push(d,v,y),c.push(v,E,y)}this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Fo(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Ci(i[e]);for(const s in n)t[s]=n[s]}return t}function Fo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ah(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Rh={clone:Ci,merge:Ge};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=Ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lh extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wt extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ih extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dh extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qs extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Gc extends qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Er=new _e,Oo=new I,Bo=new I;class Ga{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Oo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oo),Bo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bo),e.updateMatrixWorld(),Er.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Er,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===$i||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Er)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ws=new I,Ts=new Li,an=new I;class Vc extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ws,Ts,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ws,Ts,an.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ws,Ts,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ws,Ts,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new I,zo=new $t,Go=new $t;class Ve extends Vc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(Wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,zo,Go),e.subVectors(Go,zo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Uh extends Ga{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ai*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class bs extends qs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Uh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Nh extends Ga{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0}}class On extends qs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Va extends Vc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fh extends Ga{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yi extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new Fh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const vi=-90,Mi=1;class Oh extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(vi,Mi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(vi,Mi,t,e);r.layers=this.layers,this.add(r);const a=new Ve(vi,Mi,t,e);a.layers=this.layers,this.add(a);const o=new Ve(vi,Mi,t,e);o.layers=this.layers,this.add(o);const c=new Ve(vi,Mi,t,e);c.layers=this.layers,this.add(c);const l=new Ve(vi,Mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bh extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class zh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Dt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const qa=class qa{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};qa.prototype.isMatrix2=!0;let Vo=qa;class Gh extends Th{constructor(t=10,e=10,n=4473924,s=8947848){n=new Gt(n),s=new Gt(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let h=0,m=0,g=-o;h<=e;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const M=h===r?n:s;M.toArray(l,m),m+=3,M.toArray(l,m),m+=3,M.toArray(l,m),m+=3,M.toArray(l,m),m+=3}const u=new ve;u.setAttribute("position",new re(c,3)),u.setAttribute("color",new re(l,3));const p=new Fa({vertexColors:!0,toneMapped:!1});super(u,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ho(i,t,e,n){const s=Vh(n);switch(e){case bc:return i*t;case Ta:return i*t/s.components*s.byteLength;case ba:return i*t/s.components*s.byteLength;case ti:return i*t*2/s.components*s.byteLength;case Aa:return i*t*2/s.components*s.byteLength;case Ac:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case Ra:return i*t*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vr:case kr:return Math.max(i,16)*Math.max(t,8)/4;case Gr:case Hr:return Math.max(i,8)*Math.max(t,8)/2;case Wr:case Xr:case Yr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:case Fs:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ha:case ua:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fa:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Os:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vh(i){switch(i){case Xe:case yc:return{byteLength:1,components:1};case ji:case Ec:case Tn:return{byteLength:2,components:1};case Ea:case wa:return{byteLength:2,components:4};case fn:case ya:case en:return{byteLength:4,components:1};case wc:case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hh(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<p.length;m++){const g=p[h],M=p[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,p[h]=M)}p.length=h+1;for(let m=0,g=p.length;m<g;m++){const M=p[m];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
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
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
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
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h=`#ifdef USE_BATCHING
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
#endif`,Jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nu=`#ifdef USE_IRIDESCENCE
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
#endif`,iu=`#ifdef USE_BUMPMAP
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,du=`#define PI 3.141592653589793
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
} // validated`,fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pu=`vec3 transformedNormal = objectNormal;
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
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Su=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pu=`#ifdef USE_GRADIENTMAP
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
}`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
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
#endif`,Vu=`uniform sampler2D dfgLUT;
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
}`,Hu=`
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$u=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qu=`#if defined( USE_POINTS_UV )
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
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
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
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rd=`float getShadowMask() {
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
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
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
}`,Kd=`#if DEPTH_PACKING == 3200
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
}`,$d=`#define DISTANCE
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
}`,Jd=`#define DISTANCE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`uniform float scale;
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,rf=`uniform vec3 diffuse;
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
}`,af=`#define LAMBERT
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
}`,of=`#define LAMBERT
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
}`,cf=`#define MATCAP
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
}`,lf=`#define MATCAP
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
}`,hf=`#define NORMAL
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
}`,uf=`#define NORMAL
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
}`,df=`#define PHONG
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
}`,ff=`#define PHONG
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
}`,pf=`#define STANDARD
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
}`,mf=`#define STANDARD
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
}`,gf=`#define TOON
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
}`,_f=`#define TOON
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
}`,xf=`uniform float size;
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
}`,vf=`uniform vec3 diffuse;
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
}`,Mf=`#include <common>
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
}`,Sf=`uniform vec3 color;
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
}`,yf=`uniform float rotation;
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
}`,Ef=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:kh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:Yh,alphatest_pars_fragment:Zh,aomap_fragment:jh,aomap_pars_fragment:Kh,batching_pars_vertex:$h,batching_vertex:Jh,begin_vertex:Qh,beginnormal_vertex:tu,bsdfs:eu,iridescence_fragment:nu,bumpmap_pars_fragment:iu,clipping_planes_fragment:su,clipping_planes_pars_fragment:ru,clipping_planes_pars_vertex:au,clipping_planes_vertex:ou,color_fragment:cu,color_pars_fragment:lu,color_pars_vertex:hu,color_vertex:uu,common:du,cube_uv_reflection_fragment:fu,defaultnormal_vertex:pu,displacementmap_pars_vertex:mu,displacementmap_vertex:gu,emissivemap_fragment:_u,emissivemap_pars_fragment:xu,colorspace_fragment:vu,colorspace_pars_fragment:Mu,envmap_fragment:Su,envmap_common_pars_fragment:yu,envmap_pars_fragment:Eu,envmap_pars_vertex:wu,envmap_physical_pars_fragment:Nu,envmap_vertex:Tu,fog_vertex:bu,fog_pars_vertex:Au,fog_fragment:Ru,fog_pars_fragment:Cu,gradientmap_pars_fragment:Pu,lightmap_pars_fragment:Lu,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Du,lights_pars_begin:Uu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Ou,lights_phong_fragment:Bu,lights_phong_pars_fragment:zu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Vu,lights_fragment_begin:Hu,lights_fragment_maps:ku,lights_fragment_end:Wu,lightprobes_pars_fragment:Xu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:ju,map_fragment:Ku,map_pars_fragment:$u,map_particle_fragment:Ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:td,metalnessmap_pars_fragment:ed,morphinstance_vertex:nd,morphcolor_vertex:id,morphnormal_vertex:sd,morphtarget_pars_vertex:rd,morphtarget_vertex:ad,normal_fragment_begin:od,normal_fragment_maps:cd,normal_pars_fragment:ld,normal_pars_vertex:hd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:_d,packing:xd,premultiplied_alpha_fragment:vd,project_vertex:Md,dithering_fragment:Sd,dithering_pars_fragment:yd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:wd,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:bd,shadowmap_vertex:Ad,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Id,specularmap_fragment:Dd,specularmap_pars_fragment:Ud,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:Od,transmission_pars_fragment:Bd,uv_pars_fragment:zd,uv_pars_vertex:Gd,uv_vertex:Vd,worldpos_vertex:Hd,background_vert:kd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:Yd,cube_frag:Zd,depth_vert:jd,depth_frag:Kd,distance_vert:$d,distance_frag:Jd,equirect_vert:Qd,equirect_frag:tf,linedashed_vert:ef,linedashed_frag:nf,meshbasic_vert:sf,meshbasic_frag:rf,meshlambert_vert:af,meshlambert_frag:of,meshmatcap_vert:cf,meshmatcap_frag:lf,meshnormal_vert:hf,meshnormal_frag:uf,meshphong_vert:df,meshphong_frag:ff,meshphysical_vert:pf,meshphysical_frag:mf,meshtoon_vert:gf,meshtoon_frag:_f,points_vert:xf,points_frag:vf,shadow_vert:Mf,shadow_frag:Sf,sprite_vert:yf,sprite_frag:Ef},xt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},cn={basic:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ge([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ge([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ge([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ge([xt.points,xt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ge([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ge([xt.common,xt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ge([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ge([xt.sprite,xt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ge([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ge([xt.lights,xt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};cn.physical={uniforms:Ge([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const As={r:0,b:0,g:0},wf=new _e,kc=new Vt;kc.set(-1,0,0,0,1,0,0,0,1);function Tf(i,t,e,n,s,r){const a=new Gt(0);let o=s===!0?0:1,c,l,u=null,p=0,h=null;function m(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const y=v.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(v){let E=!1;const y=m(v);y===null?f(a,o):y&&y.isColor&&(f(y,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(v,E){const y=m(E);y&&(y.isCubeTexture||y.mapping===Ws)?(l===void 0&&(l=new q(new Ft(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ci(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wf.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(kc),l.material.toneMapped=ne.getTransfer(y.colorSpace)!==le,(u!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new q(new wn(2,2),new pn({name:"BackgroundMaterial",uniforms:Ci(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ne.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,E){v.getRGB(As,zc(i)),e.buffers.color.setClear(As.r,As.g,As.b,E,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,f(a,o)},render:g,addToRenderList:M,dispose:d}}function bf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(C,N,k,X,U){let z=!1;const B=p(C,X,k,N);r!==B&&(r=B,l(r.object)),z=m(C,X,k,U),z&&g(C,X,k,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(C,N,k,X),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function p(C,N,k,X){const U=X.wireframe===!0;let z=n[N.id];z===void 0&&(z={},n[N.id]=z);const B=C.isInstancedMesh===!0?C.id:0;let j=z[B];j===void 0&&(j={},z[B]=j);let $=j[k.id];$===void 0&&($={},j[k.id]=$);let tt=$[U];return tt===void 0&&(tt=h(c()),$[U]=tt),tt}function h(C){const N=[],k=[],X=[];for(let U=0;U<e;U++)N[U]=0,k[U]=0,X[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:X,object:C,attributes:{},index:null}}function m(C,N,k,X){const U=r.attributes,z=N.attributes;let B=0;const j=k.getAttributes();for(const $ in j)if(j[$].location>=0){const st=U[$];let gt=z[$];if(gt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),st===void 0||st.attribute!==gt||gt&&st.data!==gt.data)return!0;B++}return r.attributesNum!==B||r.index!==X}function g(C,N,k,X){const U={},z=N.attributes;let B=0;const j=k.getAttributes();for(const $ in j)if(j[$].location>=0){let st=z[$];st===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(st=C.instanceColor));const gt={};gt.attribute=st,st&&st.data&&(gt.data=st.data),U[$]=gt,B++}r.attributes=U,r.attributesNum=B,r.index=X}function M(){const C=r.newAttributes;for(let N=0,k=C.length;N<k;N++)C[N]=0}function f(C){d(C,0)}function d(C,N){const k=r.newAttributes,X=r.enabledAttributes,U=r.attributeDivisors;k[C]=1,X[C]===0&&(i.enableVertexAttribArray(C),X[C]=1),U[C]!==N&&(i.vertexAttribDivisor(C,N),U[C]=N)}function v(){const C=r.newAttributes,N=r.enabledAttributes;for(let k=0,X=N.length;k<X;k++)N[k]!==C[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function E(C,N,k,X,U,z,B){B===!0?i.vertexAttribIPointer(C,N,k,U,z):i.vertexAttribPointer(C,N,k,X,U,z)}function y(C,N,k,X){M();const U=X.attributes,z=k.getAttributes(),B=N.defaultAttributeValues;for(const j in z){const $=z[j];if($.location>=0){let tt=U[j];if(tt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),tt!==void 0){const st=tt.normalized,gt=tt.itemSize,zt=t.get(tt);if(zt===void 0)continue;const Xt=zt.buffer,Ut=zt.type,J=zt.bytesPerElement,ht=Ut===i.INT||Ut===i.UNSIGNED_INT||tt.gpuType===ya;if(tt.isInterleavedBufferAttribute){const G=tt.data,nt=G.stride,St=tt.offset;if(G.isInstancedInterleavedBuffer){for(let yt=0;yt<$.locationSize;yt++)d($.location+yt,G.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let yt=0;yt<$.locationSize;yt++)f($.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let yt=0;yt<$.locationSize;yt++)E($.location+yt,gt/$.locationSize,Ut,st,nt*J,(St+gt/$.locationSize*yt)*J,ht)}else{if(tt.isInstancedBufferAttribute){for(let G=0;G<$.locationSize;G++)d($.location+G,tt.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let G=0;G<$.locationSize;G++)f($.location+G);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let G=0;G<$.locationSize;G++)E($.location+G,gt/$.locationSize,Ut,st,gt*J,gt/$.locationSize*G*J,ht)}}else if(B!==void 0){const st=B[j];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv($.location,st);break;case 3:i.vertexAttrib3fv($.location,st);break;case 4:i.vertexAttrib4fv($.location,st);break;default:i.vertexAttrib1fv($.location,st)}}}}v()}function A(){b();for(const C in n){const N=n[C];for(const k in N){const X=N[k];for(const U in X){const z=X[U];for(const B in z)u(z[B].object),delete z[B];delete X[U]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const k in N){const X=N[k];for(const U in X){const z=X[U];for(const B in z)u(z[B].object),delete z[B];delete X[U]}}delete n[C.id]}function R(C){for(const N in n){const k=n[N];for(const X in k){const U=k[X];if(U[C.id]===void 0)continue;const z=U[C.id];for(const B in z)u(z[B].object),delete z[B];delete U[C.id]}}}function _(C){for(const N in n){const k=n[N],X=C.isInstancedMesh===!0?C.id:0,U=k[X];if(U!==void 0){for(const z in U){const B=U[z];for(const j in B)u(B[j].object),delete B[j];delete U[z]}delete k[X],Object.keys(k).length===0&&delete n[N]}}}function b(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:f,disableUnusedAttributes:v}}function Af(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Xe&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==en&&!_)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Dt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:A,samples:T}}function Cf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Yn,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||n!==0||s;return s=h,n=p.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,m){const g=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{const v=r?0:n,E=v*4;let y=d.clippingState||null;c.value=y,y=u(g,h,E,m);for(let A=0;A!==E;++A)y[A]=e[A];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,m,g){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=c.value,g!==!0||f===null){const d=m+M*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<d)&&(f=new Float32Array(d));for(let E=0,y=m;E!==M;++E,y+=4)a.copy(p[E]).applyMatrix4(v,o),a.normal.toArray(f,y),f[y+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,f}}const zn=4,ko=[.125,.215,.35,.446,.526,.582],jn=20,Pf=256,Gi=new Va,Wo=new Gt;let wr=null,Tr=0,br=0,Ar=!1;const Lf=new I;class Xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lf}=r;wr=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wr,Tr,br),this._renderer.xr.enabled=Ar,t.scissorTest=!1,Si(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qn||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wr=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Tn,format:nn,colorSpace:Bs,depthBuffer:!1},s=qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=If(r)),this._blurMaterial=Uf(r,t,e),this._ggxMaterial=Df(r,t,e)}return s}_compileMaterial(t){const e=new q(new ve,t);this._renderer.compile(e,Gi)}_sceneToCubeUV(t,e,n,s,r){const c=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(Wo),p.toneMapping=un,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new Ft,new oe({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,f=M.material;let d=!1;const v=t.background;v?v.isColor&&(f.color.copy(v),t.background=null,d=!0):(f.color.copy(Wo),d=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;Si(s,y*A,E>2?A:0,A,A),p.setRenderTarget(s),d&&p.render(M,c),p.render(t,c)}p.toneMapping=m,p.autoClear=h,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qn||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Si(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Gi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),h=0+l*1.25,m=p*h,{_lodMax:g}=this,M=this._sizeLods[n],f=3*M*(n>g-zn?n-g+zn:0),d=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=g-e,Si(r,f,d,3*M,2*M),s.setRenderTarget(r),s.render(o,Gi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Si(t,f,d,3*M,2*M),s.setRenderTarget(t),s.render(o,Gi)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&se("blur direction must be either latitudinal or longitudinal!");const u=3,p=this._lodMeshes[s];p.material=l;const h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*jn-1),M=r/g,f=isFinite(r)?1+Math.floor(u*M):jn;f>jn&&Dt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${jn}`);const d=[];let v=0;for(let R=0;R<jn;++R){const _=R/M,b=Math.exp(-_*_/2);d.push(b),R===0?v+=b:R<f&&(v+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const y=this._sizeLods[s],A=3*y*(s>E-zn?s-E+zn:0),T=4*(this._cubeSize-y);Si(e,A,T,3*y,2*y),c.setRenderTarget(e),c.render(p,Gi)}}function If(i){const t=[],e=[],n=[];let s=i;const r=i-zn+1+ko.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-zn?c=ko[a-i+zn-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),u=-l,p=1+l,h=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,g=6,M=3,f=2,d=1,v=new Float32Array(M*g*m),E=new Float32Array(f*g*m),y=new Float32Array(d*g*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,_=T>2?0:-1,b=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];v.set(b,M*g*T),E.set(h,f*g*T);const L=[T,T,T,T,T,T];y.set(L,d*g*T)}const A=new ve;A.setAttribute("position",new Be(v,M)),A.setAttribute("uv",new Be(E,f)),A.setAttribute("faceIndex",new Be(y,d)),n.push(new q(A,null)),s>zn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function qo(i,t,e){const n=new dn(i,t,e);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Si(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Df(i,t,e){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Uf(i,t,e){const n=new Float32Array(jn),s=new I(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Yo(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Zo(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ys(){return`

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
	`}class Wc extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Oc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:yn});r.uniforms.tEquirect.value=e;const a=new q(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Fe),new Oh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Nf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===$s||m===Js)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Wc(g.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,g=m===$s||m===Js,M=m===Qn||m===bi;if(g||M){let f=e.get(h);const d=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Xo(i)),f=g?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),f.texture;if(f!==void 0)return f.texture;{const v=h.image;return g&&v&&v.height>0||M&&v&&c(v)?(n===null&&(n=new Xo(i)),f=g?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,m){return m===$s?h.mapping=Qn:m===Js&&(h.mapping=bi),h}function c(h){let m=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&m++;return m===g}function l(h){const m=h.target;m.removeEventListener("dispose",l);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Ff(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_a("WebGLRenderer: "+n+" extension not supported."),s}}}function Of(i,t,e,n){const s={},r=new WeakMap;function a(p){const h=p.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(p){const h=p.attributes;for(const m in h)t.update(h[m],i.ARRAY_BUFFER)}function l(p){const h=[],m=p.index,g=p.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const v=m.array;M=m.version;for(let E=0,y=v.length;E<y;E+=3){const A=v[E+0],T=v[E+1],R=v[E+2];h.push(A,T,T,R,R,A)}}else{const v=g.array;M=g.version;for(let E=0,y=v.length/3-1;E<y;E+=3){const A=E+0,T=E+1,R=E+2;h.push(A,T,T,R,R,A)}}const f=new(g.count>=65535?Uc:Dc)(h,1);f.version=M;const d=r.get(p);d&&t.remove(d),r.set(p,f)}function u(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function Bf(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function l(p,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,p*a,m),e.update(h,n,m))}function u(p,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,m);let M=0;for(let f=0;f<m;f++)M+=h[f];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function zf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gf(i,t,e){const n=new WeakMap,s=new ye;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==p){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var m=L;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),f===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*T*4*p),_=new Cc(R,A,T,p);_.type=en,_.needsUpdate=!0;const b=y*4;for(let C=0;C<p;C++){const N=d[C],k=v[C],X=E[C],U=A*T*4*C;for(let z=0;z<N.count;z++){const B=z*b;g===!0&&(s.fromBufferAttribute(N,z),R[U+B+0]=s.x,R[U+B+1]=s.y,R[U+B+2]=s.z,R[U+B+3]=0),M===!0&&(s.fromBufferAttribute(k,z),R[U+B+4]=s.x,R[U+B+5]=s.y,R[U+B+6]=s.z,R[U+B+7]=0),f===!0&&(s.fromBufferAttribute(X,z),R[U+B+8]=s.x,R[U+B+9]=s.y,R[U+B+10]=s.z,R[U+B+11]=X.itemSize===4?s.w:1)}}h={count:p,texture:_,size:new $t(A,T)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const M=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Vf(i,t,e,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,p=l.geometry,h=t.get(l,p);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Hf={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[_c]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function kf(i,t,e,n,s){const r=new dn(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Ri(t,e):void 0}),a=new dn(t,e,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),o=new ve;o.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new re([0,2,0,0,2,0],2));const c=new Lh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new q(o,c),u=new Va(-1,1,1,-1,0,1);let p=null,h=null,m=!1,g,M=null,f=[],d=!1;this.setSize=function(v,E){r.setSize(v,E),a.setSize(v,E);for(let y=0;y<f.length;y++){const A=f[y];A.setSize&&A.setSize(v,E)}},this.setEffects=function(v){f=v,d=f.length>0&&f[0].isRenderPass===!0;const E=r.width,y=r.height;for(let A=0;A<f.length;A++){const T=f[A];T.setSize&&T.setSize(E,y)}},this.begin=function(v,E){if(m||v.toneMapping===un&&f.length===0)return!1;if(M=E,E!==null){const y=E.width,A=E.height;(r.width!==y||r.height!==A)&&this.setSize(y,A)}return d===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=un,!0},this.hasRenderPass=function(){return d},this.end=function(v,E){v.toneMapping=g,m=!0;let y=r,A=a;for(let T=0;T<f.length;T++){const R=f[T];if(R.enabled!==!1&&(R.render(v,A,y,E),R.needsSwap!==!1)){const _=y;y=A,A=_}}if(p!==v.outputColorSpace||h!==v.toneMapping){p=v.outputColorSpace,h=v.toneMapping,c.defines={},ne.getTransfer(p)===le&&(c.defines.SRGB_TRANSFER="");const T=Hf[h];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(M),v.render(l,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Xc=new Oe,va=new Ri(1,1),qc=new Cc,Yc=new ch,Zc=new Oc,jo=[],Ko=[],$o=new Float32Array(16),Jo=new Float32Array(9),Qo=new Float32Array(4);function Ii(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=jo[s];if(r===void 0&&(r=new Float32Array(s),jo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zs(i,t){let e=Ko[t];e===void 0&&(e=new Int32Array(t),Ko[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Zf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Qo.set(n),i.uniformMatrix2fv(this.addr,!1,Qo),Re(e,n)}}function jf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Jo.set(n),i.uniformMatrix3fv(this.addr,!1,Jo),Re(e,n)}}function Kf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;$o.set(n),i.uniformMatrix4fv(this.addr,!1,$o),Re(e,n)}}function $f(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(va.compareFunction=e.isReversedDepthBuffer()?Pa:Ca,r=va):r=Xc,e.setTexture2D(t||r,s)}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yc,s)}function op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zc,s)}function cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qc,s)}function lp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return Zf;case 35675:return jf;case 35676:return Kf;case 5124:case 35670:return $f;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return cp}}function hp(i,t){i.uniform1fv(this.addr,t)}function up(i,t){const e=Ii(t,this.size,2);i.uniform2fv(this.addr,e)}function dp(i,t){const e=Ii(t,this.size,3);i.uniform3fv(this.addr,e)}function fp(i,t){const e=Ii(t,this.size,4);i.uniform4fv(this.addr,e)}function pp(i,t){const e=Ii(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mp(i,t){const e=Ii(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gp(i,t){const e=Ii(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _p(i,t){i.uniform1iv(this.addr,t)}function xp(i,t){i.uniform2iv(this.addr,t)}function vp(i,t){i.uniform3iv(this.addr,t)}function Mp(i,t){i.uniform4iv(this.addr,t)}function Sp(i,t){i.uniform1uiv(this.addr,t)}function yp(i,t){i.uniform2uiv(this.addr,t)}function Ep(i,t){i.uniform3uiv(this.addr,t)}function wp(i,t){i.uniform4uiv(this.addr,t)}function Tp(i,t,e){const n=this.cache,s=t.length,r=Zs(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=va:a=Xc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function bp(i,t,e){const n=this.cache,s=t.length,r=Zs(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yc,r[a])}function Ap(i,t,e){const n=this.cache,s=t.length,r=Zs(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zc,r[a])}function Rp(i,t,e){const n=this.cache,s=t.length,r=Zs(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qc,r[a])}function Cp(i){switch(i){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return xp;case 35668:case 35672:return vp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return yp;case 36295:return Ep;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}class Pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lp(e.type)}}class Lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cp(e.type)}}class Ip{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function tc(i,t){i.seq.push(t),i.map[t.id]=t}function Dp(i,t,e){const n=i.name,s=n.length;for(Rr.lastIndex=0;;){const r=Rr.exec(n),a=Rr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tc(e,l===void 0?new Pp(o,i,t):new Lp(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Ip(o),tc(e,p)),e=p}}}class Ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Dp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Up=37297;let Np=0;function Fp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const nc=new Vt;function Op(i){ne._getMatrix(nc,ne.workingColorSpace,i);const t=`mat3( ${nc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case zs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ic(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fp(i.getShaderSource(t),o)}else return r}function Bp(i,t){const e=Op(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const zp={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[_c]:"ACESFilmic",[vc]:"AgX",[Mc]:"Neutral",[xc]:"Custom"};function Gp(i,t){const e=zp[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rs=new I;function Vp(){ne.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function kp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ki(i){return i!==""}function sc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(i){return i.replace(Xp,Yp)}const qp=new Map;function Yp(i,t){let e=Yt[t];if(e===void 0){const n=qp.get(t);if(n!==void 0)e=Yt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(i){return i.replace(Zp,jp)}function jp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Kp={[Cs]:"SHADOWMAP_TYPE_PCF",[Hi]:"SHADOWMAP_TYPE_VSM"};function $p(i){return Kp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jp={[Qn]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE_UV"};function Qp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const tm={[bi]:"ENVMAP_MODE_REFRACTION"};function em(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nm={[fc]:"ENVMAP_BLENDING_MULTIPLY",[bl]:"ENVMAP_BLENDING_MIX",[Al]:"ENVMAP_BLENDING_ADD"};function im(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nm[i.combine]||"ENVMAP_BLENDING_NONE"}function sm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=$p(e),l=Qp(e),u=em(e),p=im(e),h=sm(e),m=Hp(e),g=kp(r),M=s.createProgram();let f,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),d.length>0&&(d+=`
`)):(f=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),d=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Yt.tonemapping_pars_fragment:"",e.toneMapping!==un?Gp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Bp("linearToOutputTexel",e.outputColorSpace),Vp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ki).join(`
`)),a=Ma(a),a=sc(a,e),a=rc(a,e),o=Ma(o),o=sc(o,e),o=rc(o,e),a=ac(a),o=ac(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=v+f+a,y=v+d+o,A=ec(s,s.VERTEX_SHADER,E),T=ec(s,s.FRAGMENT_SHADER,y);s.attachShader(M,A),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(M)||"",k=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(T)||"",U=N.trim(),z=k.trim(),B=X.trim();let j=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,T);else{const tt=ic(s,A,"vertex"),st=ic(s,T,"fragment");se("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+tt+`
`+st)}else U!==""?Dt("WebGLProgram: Program Info Log:",U):(z===""||B==="")&&($=!1);$&&(C.diagnostics={runnable:j,programLog:U,vertexShader:{log:z,prefix:f},fragmentShader:{log:B,prefix:d}})}s.deleteShader(A),s.deleteShader(T),_=new Ns(s,M),b=Wp(s,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,Up)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=T,this}let am=0;class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cm(t),e.set(t,n)),n}}class cm{constructor(t){this.id=am++,this.code=t,this.usedTimes=0}}function lm(i){return i===ti||i===Fs||i===Os}function hm(i,t,e,n,s,r){const a=new Pc,o=new om,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,b,L,C,N,k){const X=C.fog,U=N.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||z,B),$=j&&j.mapping===Ws?j.image.height:null,tt=m[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Dt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const st=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,gt=st!==void 0?st.length:0;let zt=0;U.morphAttributes.position!==void 0&&(zt=1),U.morphAttributes.normal!==void 0&&(zt=2),U.morphAttributes.color!==void 0&&(zt=3);let Xt,Ut,J,ht;if(tt){const Ht=cn[tt];Xt=Ht.vertexShader,Ut=Ht.fragmentShader}else Xt=_.vertexShader,Ut=_.fragmentShader,o.update(_),J=o.getVertexShaderID(_),ht=o.getFragmentShaderID(_);const G=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),St=N.isInstancedMesh===!0,yt=N.isBatchedMesh===!0,qt=!!_.map,bt=!!_.matcap,Kt=!!j,ee=!!_.aoMap,rt=!!_.lightMap,At=!!_.bumpMap,ct=!!_.normalMap,Ot=!!_.displacementMap,P=!!_.emissiveMap,Jt=!!_.metalnessMap,It=!!_.roughnessMap,jt=_.anisotropy>0,mt=_.clearcoat>0,he=_.dispersion>0,w=_.iridescence>0,x=_.sheen>0,O=_.transmission>0,K=jt&&!!_.anisotropyMap,et=mt&&!!_.clearcoatMap,lt=mt&&!!_.clearcoatNormalMap,ft=mt&&!!_.clearcoatRoughnessMap,Z=w&&!!_.iridescenceMap,Q=w&&!!_.iridescenceThicknessMap,ut=x&&!!_.sheenColorMap,Et=x&&!!_.sheenRoughnessMap,dt=!!_.specularMap,ot=!!_.specularColorMap,Nt=!!_.specularIntensityMap,Bt=O&&!!_.transmissionMap,Qt=O&&!!_.thicknessMap,D=!!_.gradientMap,at=!!_.alphaMap,Y=_.alphaTest>0,_t=!!_.alphaHash,pt=!!_.extensions;let it=un;_.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(it=i.toneMapping);const Ct={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:Xt,fragmentShader:Ut,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:yt,batchingColor:yt&&N._colorsTexture!==null,instancing:St,instancingColor:St&&N.instanceColor!==null,instancingMorph:St&&N.morphTexture!==null,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qt,matcap:bt,envMap:Kt,envMapMode:Kt&&j.mapping,envMapCubeUVHeight:$,aoMap:ee,lightMap:rt,bumpMap:At,normalMap:ct,displacementMap:Ot,emissiveMap:P,normalMapObjectSpace:ct&&_.normalMapType===Pl,normalMapTangentSpace:ct&&_.normalMapType===ga,packedNormalMap:ct&&_.normalMapType===ga&&lm(_.normalMap.format),metalnessMap:Jt,roughnessMap:It,anisotropy:jt,anisotropyMap:K,clearcoat:mt,clearcoatMap:et,clearcoatNormalMap:lt,clearcoatRoughnessMap:ft,dispersion:he,iridescence:w,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:x,sheenColorMap:ut,sheenRoughnessMap:Et,specularMap:dt,specularColorMap:ot,specularIntensityMap:Nt,transmission:O,transmissionMap:Bt,thicknessMap:Qt,gradientMap:D,opaque:_.transparent===!1&&_.blending===Ei&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:Y,alphaHash:_t,combine:_.combine,mapUv:qt&&g(_.map.channel),aoMapUv:ee&&g(_.aoMap.channel),lightMapUv:rt&&g(_.lightMap.channel),bumpMapUv:At&&g(_.bumpMap.channel),normalMapUv:ct&&g(_.normalMap.channel),displacementMapUv:Ot&&g(_.displacementMap.channel),emissiveMapUv:P&&g(_.emissiveMap.channel),metalnessMapUv:Jt&&g(_.metalnessMap.channel),roughnessMapUv:It&&g(_.roughnessMap.channel),anisotropyMapUv:K&&g(_.anisotropyMap.channel),clearcoatMapUv:et&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(_.sheenRoughnessMap.channel),specularMapUv:dt&&g(_.specularMap.channel),specularColorMapUv:ot&&g(_.specularColorMap.channel),specularIntensityMapUv:Nt&&g(_.specularIntensityMap.channel),transmissionMapUv:Bt&&g(_.transmissionMap.channel),thicknessMapUv:Qt&&g(_.thicknessMap.channel),alphaMapUv:at&&g(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ct||jt),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(qt||at),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:nt,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:zt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:qt&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:P&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pe,flipSided:_.side===Ie,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function f(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(d(b,_),v(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function d(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),_.push(a.mask)}function E(_){const b=m[_.type];let L;if(b){const C=cn[b];L=Rh.clone(C.uniforms)}else L=_.uniforms;return L}function y(_,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new rm(i,b,_,s),l.push(L),u.set(b,L)),L}function A(_){if(--_.usedTimes===0){const b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:f,getUniforms:E,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:R}}function um(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,g,M,f,d){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:f,group:d},i[t]=v):(v.id=h.id,v.object=h,v.geometry=m,v.material=g,v.materialVariant=a(h),v.groupOrder=M,v.renderOrder=h.renderOrder,v.z=f,v.group=d),t++,v}function c(h,m,g,M,f,d){const v=o(h,m,g,M,f,d);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):e.push(v)}function l(h,m,g,M,f,d){const v=o(h,m,g,M,f,d);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,m){e.length>1&&e.sort(h||dm),n.length>1&&n.sort(m||cc),s.length>1&&s.sort(m||cc)}function p(){for(let h=t,m=i.length;h<m;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function fm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new lc,i.set(n,[a])):s>=r.length?(a=new lc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gm=0;function _m(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xm(i){const t=new pm,e=mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new _e,a=new _e;function o(l){let u=0,p=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,M=0,f=0,d=0,v=0,E=0,y=0,A=0,T=0,R=0;l.sort(_m);for(let b=0,L=l.length;b<L;b++){const C=l[b],N=C.color,k=C.intensity,X=C.distance;let U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ti?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*k,p+=N.g*k,h+=N.b*k;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],k);R++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,j=e.get(C);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=U,n.directionalShadowMatrix[m]=C.shadow.matrix,v++}n.directional[m]=z,m++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(N).multiplyScalar(k),z.distance=X,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[M]=z;const B=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,B.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[M]=B.matrix,C.castShadow){const j=e.get(C);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=U,y++}M++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(N).multiplyScalar(k),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=z,f++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const B=C.shadow,j=e.get(C);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,j.shadowCameraNear=B.camera.near,j.shadowCameraFar=B.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(k),z.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[d]=z,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==m||_.pointLength!==g||_.spotLength!==M||_.rectAreaLength!==f||_.hemiLength!==d||_.numDirectionalShadows!==v||_.numPointShadows!==E||_.numSpotShadows!==y||_.numSpotMaps!==A||_.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,_.directionalLength=m,_.pointLength=g,_.spotLength=M,_.rectAreaLength=f,_.hemiLength=d,_.numDirectionalShadows=v,_.numPointShadows=E,_.numSpotShadows=y,_.numSpotMaps=A,_.numLightProbes=R,n.version=gm++)}function c(l,u){let p=0,h=0,m=0,g=0,M=0;const f=u.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){const E=l[d];if(E.isDirectionalLight){const y=n.directional[p];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),p++}else if(E.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),m++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(E.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),h++}else if(E.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(f),M++}}}return{setup:o,setupView:c,state:n}}function hc(i){const t=new xm(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function vm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new hc(i),t.set(s,[o])):r>=a.length?(o=new hc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`,ym=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Em=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],uc=new _e,Vi=new I,Cr=new I;function wm(i,t,e){let n=new Na;const s=new $t,r=new $t,a=new ye,o=new Ih,c=new Dh,l={},u=e.maxTextureSize,p={[Gn]:Ie,[Ie]:Gn,[Pe]:Pe},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new q(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let d=this.type;this.render=function(T,R,_){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===dc&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cs);const b=i.getRenderTarget(),L=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(yn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=d!==this.type;k&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(U=>U.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,U=T.length;X<U;X++){const z=T[X],B=z.shadow;if(B===void 0){Dt("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const j=B.getFrameExtents();s.multiply(j),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,B.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Hi){if(z.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new dn(s.x,s.y,{format:ti,type:Tn,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Ri(s.x,s.y,en),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=bn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Le,B.map.depthTexture.magFilter=Le}else z.isPointLight?(B.map=new Wc(s.x),B.map.depthTexture=new bh(s.x,fn)):(B.map=new dn(s.x,s.y),B.map.depthTexture=new Ri(s.x,s.y,fn)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=bn,this.type===Cs?(B.map.depthTexture.compareFunction=$?Pa:Ca,B.map.depthTexture.minFilter=Fe,B.map.depthTexture.magFilter=Fe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Le,B.map.depthTexture.magFilter=Le);B.camera.updateProjectionMatrix()}const tt=B.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<tt;st++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,st),i.clear();else{st===0&&(i.setRenderTarget(B.map),i.clear());const gt=B.getViewport(st);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),N.viewport(a)}if(z.isPointLight){const gt=B.camera,zt=B.matrix,Xt=z.distance||gt.far;Xt!==gt.far&&(gt.far=Xt,gt.updateProjectionMatrix()),Vi.setFromMatrixPosition(z.matrixWorld),gt.position.copy(Vi),Cr.copy(gt.position),Cr.add(ym[st]),gt.up.copy(Em[st]),gt.lookAt(Cr),gt.updateMatrixWorld(),zt.makeTranslation(-Vi.x,-Vi.y,-Vi.z),uc.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(uc,gt.coordinateSystem,gt.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),y(R,_,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Hi&&v(B,_),B.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(b,L,C)};function v(T,R){const _=t.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new dn(s.x,s.y,{format:ti,type:Tn})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,_,h,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,_,m,M,null)}function E(T,R,_,b){let L=null;const C=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)L=C;else if(L=_.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=L.uuid,k=R.uuid;let X=l[N];X===void 0&&(X={},l[N]=X);let U=X[k];U===void 0&&(U=L.clone(),X[k]=U,R.addEventListener("dispose",A)),L=U}if(L.visible=R.visible,L.wireframe=R.wireframe,b===Hi?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:p[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const N=i.properties.get(L);N.light=_}return L}function y(T,R,_,b,L){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const k=t.update(T),X=T.material;if(Array.isArray(X)){const U=k.groups;for(let z=0,B=U.length;z<B;z++){const j=U[z],$=X[j.materialIndex];if($&&$.visible){const tt=E(T,$,b,L);T.onBeforeShadow(i,T,R,_,k,tt,j),i.renderBufferDirect(_,null,k,tt,T,j),T.onAfterShadow(i,T,R,_,k,tt,j)}}}else if(X.visible){const U=E(T,X,b,L);T.onBeforeShadow(i,T,R,_,k,U,null),i.renderBufferDirect(_,null,k,U,T,null),T.onAfterShadow(i,T,R,_,k,U,null)}}const N=T.children;for(let k=0,X=N.length;k<X;k++)y(N[k],R,_,b,L)}function A(T){T.target.removeEventListener("dispose",A);for(const _ in l){const b=l[_],L=T.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function Tm(i,t){function e(){let D=!1;const at=new ye;let Y=null;const _t=new ye(0,0,0,0);return{setMask:function(pt){Y!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),Y=pt)},setLocked:function(pt){D=pt},setClear:function(pt,it,Ct,Ht,Ee){Ee===!0&&(pt*=Ht,it*=Ht,Ct*=Ht),at.set(pt,it,Ct,Ht),_t.equals(at)===!1&&(i.clearColor(pt,it,Ct,Ht),_t.copy(at))},reset:function(){D=!1,Y=null,_t.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,Y=null,_t=null,pt=null;return{setReversed:function(it){if(at!==it){const Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),at=it;const Ht=pt;pt=null,this.setClear(Ht)}},getReversed:function(){return at},setTest:function(it){it?G(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(it){Y!==it&&!D&&(i.depthMask(it),Y=it)},setFunc:function(it){if(at&&(it=Gl[it]),_t!==it){switch(it){case Ir:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Fr:i.depthFunc(i.GEQUAL);break;case Or:i.depthFunc(i.GREATER);break;case Br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=it}},setLocked:function(it){D=it},setClear:function(it){pt!==it&&(pt=it,at&&(it=1-it),i.clearDepth(it))},reset:function(){D=!1,Y=null,_t=null,pt=null,at=!1}}}function s(){let D=!1,at=null,Y=null,_t=null,pt=null,it=null,Ct=null,Ht=null,Ee=null;return{setTest:function(ue){D||(ue?G(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ue){at!==ue&&!D&&(i.stencilMask(ue),at=ue)},setFunc:function(ue,mn,sn){(Y!==ue||_t!==mn||pt!==sn)&&(i.stencilFunc(ue,mn,sn),Y=ue,_t=mn,pt=sn)},setOp:function(ue,mn,sn){(it!==ue||Ct!==mn||Ht!==sn)&&(i.stencilOp(ue,mn,sn),it=ue,Ct=mn,Ht=sn)},setLocked:function(ue){D=ue},setClear:function(ue){Ee!==ue&&(i.clearStencil(ue),Ee=ue)},reset:function(){D=!1,at=null,Y=null,_t=null,pt=null,it=null,Ct=null,Ht=null,Ee=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},p={},h={},m=new WeakMap,g=[],M=null,f=!1,d=null,v=null,E=null,y=null,A=null,T=null,R=null,_=new Gt(0,0,0),b=0,L=!1,C=null,N=null,k=null,X=null,U=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),B=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=j>=2);let tt=null,st={};const gt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),Xt=new ye().fromArray(gt),Ut=new ye().fromArray(zt);function J(D,at,Y,_t){const pt=new Uint8Array(4),it=i.createTexture();i.bindTexture(D,it),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Y;Ct++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(at+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return it}const ht={};ht[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(i.DEPTH_TEST),a.setFunc(Ti),At(!1),ct(eo),G(i.CULL_FACE),ee(yn);function G(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function nt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function St(D,at){return h[D]!==at?(i.bindFramebuffer(D,at),h[D]=at,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=at),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=at),!0):!1}function yt(D,at){let Y=g,_t=!1;if(D){Y=m.get(at),Y===void 0&&(Y=[],m.set(at,Y));const pt=D.textures;if(Y.length!==pt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ct=pt.length;it<Ct;it++)Y[it]=i.COLOR_ATTACHMENT0+it;Y.length=pt.length,_t=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,_t=!0);_t&&i.drawBuffers(Y)}function qt(D){return M!==D?(i.useProgram(D),M=D,!0):!1}const bt={[Zn]:i.FUNC_ADD,[ll]:i.FUNC_SUBTRACT,[hl]:i.FUNC_REVERSE_SUBTRACT};bt[ul]=i.MIN,bt[dl]=i.MAX;const Kt={[fl]:i.ZERO,[pl]:i.ONE,[ml]:i.SRC_COLOR,[Pr]:i.SRC_ALPHA,[Sl]:i.SRC_ALPHA_SATURATE,[vl]:i.DST_COLOR,[_l]:i.DST_ALPHA,[gl]:i.ONE_MINUS_SRC_COLOR,[Lr]:i.ONE_MINUS_SRC_ALPHA,[Ml]:i.ONE_MINUS_DST_COLOR,[xl]:i.ONE_MINUS_DST_ALPHA,[yl]:i.CONSTANT_COLOR,[El]:i.ONE_MINUS_CONSTANT_COLOR,[wl]:i.CONSTANT_ALPHA,[Tl]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(D,at,Y,_t,pt,it,Ct,Ht,Ee,ue){if(D===yn){f===!0&&(nt(i.BLEND),f=!1);return}if(f===!1&&(G(i.BLEND),f=!0),D!==cl){if(D!==d||ue!==L){if((v!==Zn||A!==Zn)&&(i.blendEquation(i.FUNC_ADD),v=Zn,A=Zn),ue)switch(D){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.ONE,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",D);break}else switch(D){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case no:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case io:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",D);break}E=null,y=null,T=null,R=null,_.set(0,0,0),b=0,d=D,L=ue}return}pt=pt||at,it=it||Y,Ct=Ct||_t,(at!==v||pt!==A)&&(i.blendEquationSeparate(bt[at],bt[pt]),v=at,A=pt),(Y!==E||_t!==y||it!==T||Ct!==R)&&(i.blendFuncSeparate(Kt[Y],Kt[_t],Kt[it],Kt[Ct]),E=Y,y=_t,T=it,R=Ct),(Ht.equals(_)===!1||Ee!==b)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Ee),_.copy(Ht),b=Ee),d=D,L=!1}function rt(D,at){D.side===Pe?nt(i.CULL_FACE):G(i.CULL_FACE);let Y=D.side===Ie;at&&(Y=!Y),At(Y),D.blending===Ei&&D.transparent===!1?ee(yn):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const _t=D.stencilWrite;o.setTest(_t),_t&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),P(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function ct(D){D!==al?(G(i.CULL_FACE),D!==N&&(D===eo?i.cullFace(i.BACK):D===ol?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),N=D}function Ot(D){D!==k&&(B&&i.lineWidth(D),k=D)}function P(D,at,Y){D?(G(i.POLYGON_OFFSET_FILL),(X!==at||U!==Y)&&(X=at,U=Y,a.getReversed()&&(at=-at),i.polygonOffset(at,Y))):nt(i.POLYGON_OFFSET_FILL)}function Jt(D){D?G(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function It(D){D===void 0&&(D=i.TEXTURE0+z-1),tt!==D&&(i.activeTexture(D),tt=D)}function jt(D,at,Y){Y===void 0&&(tt===null?Y=i.TEXTURE0+z-1:Y=tt);let _t=st[Y];_t===void 0&&(_t={type:void 0,texture:void 0},st[Y]=_t),(_t.type!==D||_t.texture!==at)&&(tt!==Y&&(i.activeTexture(Y),tt=Y),i.bindTexture(D,at||ht[D]),_t.type=D,_t.texture=at)}function mt(){const D=st[tt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(D){se("WebGLState:",D)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(D){se("WebGLState:",D)}}function x(){try{i.texSubImage2D(...arguments)}catch(D){se("WebGLState:",D)}}function O(){try{i.texSubImage3D(...arguments)}catch(D){se("WebGLState:",D)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(D){se("WebGLState:",D)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(D){se("WebGLState:",D)}}function lt(){try{i.texStorage2D(...arguments)}catch(D){se("WebGLState:",D)}}function ft(){try{i.texStorage3D(...arguments)}catch(D){se("WebGLState:",D)}}function Z(){try{i.texImage2D(...arguments)}catch(D){se("WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){se("WebGLState:",D)}}function ut(D){return p[D]!==void 0?p[D]:i.getParameter(D)}function Et(D,at){p[D]!==at&&(i.pixelStorei(D,at),p[D]=at)}function dt(D){Xt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Xt.copy(D))}function ot(D){Ut.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ut.copy(D))}function Nt(D,at){let Y=l.get(at);Y===void 0&&(Y=new WeakMap,l.set(at,Y));let _t=Y.get(D);_t===void 0&&(_t=i.getUniformBlockIndex(at,D.name),Y.set(D,_t))}function Bt(D,at){const _t=l.get(at).get(D);c.get(at)!==_t&&(i.uniformBlockBinding(at,_t,D.__bindingPointIndex),c.set(at,_t))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},tt=null,st={},h={},m=new WeakMap,g=[],M=null,f=!1,d=null,v=null,E=null,y=null,A=null,T=null,R=null,_=new Gt(0,0,0),b=0,L=!1,C=null,N=null,k=null,X=null,U=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:G,disable:nt,bindFramebuffer:St,drawBuffers:yt,useProgram:qt,setBlending:ee,setMaterial:rt,setFlipSided:At,setCullFace:ct,setLineWidth:Ot,setPolygonOffset:P,setScissorTest:Jt,activeTexture:It,bindTexture:jt,unbindTexture:mt,compressedTexImage2D:he,compressedTexImage3D:w,texImage2D:Z,texImage3D:Q,pixelStorei:Et,getParameter:ut,updateUBOMapping:Nt,uniformBlockBinding:Bt,texStorage2D:lt,texStorage3D:ft,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:K,compressedTexSubImage3D:et,scissor:dt,viewport:ot,reset:Qt}}function bm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,u=new WeakMap,p=new Set;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,x){return g?new OffscreenCanvas(w,x):Gs("canvas")}function f(w,x,O){let K=1;const et=he(w);if((et.width>O||et.height>O)&&(K=O/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const lt=Math.floor(K*et.width),ft=Math.floor(K*et.height);h===void 0&&(h=M(lt,ft));const Z=x?M(lt,ft):h;return Z.width=lt,Z.height=ft,Z.getContext("2d").drawImage(w,0,0,lt,ft),Dt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+lt+"x"+ft+")."),Z}else return"data"in w&&Dt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function d(w){return w.generateMipmaps}function v(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,x,O,K,et,lt=!1){if(w!==null){if(i[w]!==void 0)return i[w];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft;K&&(ft=t.get("EXT_texture_norm16"),ft||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8),O===i.UNSIGNED_SHORT&&ft&&(Z=ft.R16_EXT),O===i.SHORT&&ft&&(Z=ft.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8),O===i.UNSIGNED_SHORT&&ft&&(Z=ft.RG16_EXT),O===i.SHORT&&ft&&(Z=ft.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGB16_EXT),O===i.SHORT&&ft&&(Z=ft.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){const Q=lt?zs:ne.getTransfer(et);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Q===le?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGBA16_EXT),O===i.SHORT&&ft&&(Z=ft.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function A(w,x){let O;return w?x===null||x===fn||x===Ki?O=i.DEPTH24_STENCIL8:x===en?O=i.DEPTH32F_STENCIL8:x===ji&&(O=i.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fn||x===Ki?O=i.DEPTH_COMPONENT24:x===en?O=i.DEPTH_COMPONENT32F:x===ji&&(O=i.DEPTH_COMPONENT16),O}function T(w,x){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==Le&&w.minFilter!==Fe?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),b(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&p.delete(x)}function _(w){const x=w.target;x.removeEventListener("dispose",_),C(x)}function b(w){const x=n.get(w);if(x.__webglInit===void 0)return;const O=w.source,K=m.get(O);if(K){const et=K[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&L(w),Object.keys(K).length===0&&m.delete(O)}n.remove(w)}function L(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const O=w.source,K=m.get(O);delete K[x.__cacheKey],a.memory.textures--}function C(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let et=0;et<x.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[K][et]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,et=O.length;K<et;K++){const lt=n.get(O[K]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(w)}let N=0;function k(){N=0}function X(){return N}function U(w){N=w}function z(){const w=N;return w>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),N+=1,w}function B(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function j(w,x){const O=n.get(w);if(w.isVideoTexture&&jt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function $(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){nt(O,w,x);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function tt(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){nt(O,w,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function st(w,x){const O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){St(O,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const gt={[Zi]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[zr]:i.MIRRORED_REPEAT},zt={[Le]:i.NEAREST,[Rl]:i.NEAREST_MIPMAP_NEAREST,[ts]:i.NEAREST_MIPMAP_LINEAR,[Fe]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Xt={[Ll]:i.NEVER,[Fl]:i.ALWAYS,[Il]:i.LESS,[Ca]:i.LEQUAL,[Dl]:i.EQUAL,[Pa]:i.GEQUAL,[Ul]:i.GREATER,[Nl]:i.NOTEQUAL};function Ut(w,x){if(x.type===en&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Fe||x.magFilter===Qs||x.magFilter===ts||x.magFilter===Kn||x.minFilter===Fe||x.minFilter===Qs||x.minFilter===ts||x.minFilter===Kn)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,gt[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,gt[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,gt[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,zt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,zt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Le||x.minFilter!==ts&&x.minFilter!==Kn||x.type===en&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function J(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const K=x.source;let et=m.get(K);et===void 0&&(et={},m.set(K,et));const lt=B(x);if(lt!==w.__cacheKey){et[lt]===void 0&&(et[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[lt].usedTimes++;const ft=et[w.__cacheKey];ft!==void 0&&(et[w.__cacheKey].usedTimes--,ft.usedTimes===0&&L(x)),w.__cacheKey=lt,w.__webglTexture=et[lt].texture}return O}function ht(w,x,O){return Math.floor(Math.floor(w/O)/x)}function G(w,x,O,K){const lt=w.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,K,x.data);else{lt.sort((Et,dt)=>Et.start-dt.start);let ft=0;for(let Et=1;Et<lt.length;Et++){const dt=lt[ft],ot=lt[Et],Nt=dt.start+dt.count,Bt=ht(ot.start,x.width,4),Qt=ht(dt.start,x.width,4);ot.start<=Nt+1&&Bt===Qt&&ht(ot.start+ot.count-1,x.width,4)===Bt?dt.count=Math.max(dt.count,ot.start+ot.count-dt.start):(++ft,lt[ft]=ot)}lt.length=ft+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Et=0,dt=lt.length;Et<dt;Et++){const ot=lt[Et],Nt=Math.floor(ot.start/4),Bt=Math.ceil(ot.count/4),Qt=Nt%x.width,D=Math.floor(Nt/x.width),at=Bt,Y=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Qt,D,at,Y,O,K,x.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function nt(w,x,O){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const et=J(w,x),lt=x.source;e.bindTexture(K,w.__webglTexture,i.TEXTURE0+O);const ft=n.get(lt);if(lt.version!==ft.__version||et===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Y=ne.getPrimaries(ne.workingColorSpace),_t=x.colorSpace===Fn?null:ne.getPrimaries(x.colorSpace),pt=x.colorSpace===Fn||Y===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=f(x.image,!1,s.maxTextureSize);Q=mt(x,Q);const ut=r.convert(x.format,x.colorSpace),Et=r.convert(x.type);let dt=y(x.internalFormat,ut,Et,x.normalized,x.colorSpace,x.isVideoTexture);Ut(K,x);let ot;const Nt=x.mipmaps,Bt=x.isVideoTexture!==!0,Qt=ft.__version===void 0||et===!0,D=lt.dataReady,at=T(x,Q);if(x.isDepthTexture)dt=A(x.format===$n,x.type),Qt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,dt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,dt,Q.width,Q.height,0,ut,Et,null));else if(x.isDataTexture)if(Nt.length>0){Bt&&Qt&&e.texStorage2D(i.TEXTURE_2D,at,dt,Nt[0].width,Nt[0].height);for(let Y=0,_t=Nt.length;Y<_t;Y++)ot=Nt[Y],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ot.width,ot.height,ut,Et,ot.data):e.texImage2D(i.TEXTURE_2D,Y,dt,ot.width,ot.height,0,ut,Et,ot.data);x.generateMipmaps=!1}else Bt?(Qt&&e.texStorage2D(i.TEXTURE_2D,at,dt,Q.width,Q.height),D&&G(x,Q,ut,Et)):e.texImage2D(i.TEXTURE_2D,0,dt,Q.width,Q.height,0,ut,Et,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,dt,Nt[0].width,Nt[0].height,Q.depth);for(let Y=0,_t=Nt.length;Y<_t;Y++)if(ot=Nt[Y],x.format!==nn)if(ut!==null)if(Bt){if(D)if(x.layerUpdates.size>0){const pt=Ho(ot.width,ot.height,x.format,x.type);for(const it of x.layerUpdates){const Ct=ot.data.subarray(it*pt/ot.data.BYTES_PER_ELEMENT,(it+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,it,ot.width,ot.height,1,ut,Ct)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,Q.depth,ut,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,dt,ot.width,ot.height,Q.depth,0,ot.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,Q.depth,ut,Et,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,dt,ot.width,ot.height,Q.depth,0,ut,Et,ot.data)}else{Bt&&Qt&&e.texStorage2D(i.TEXTURE_2D,at,dt,Nt[0].width,Nt[0].height);for(let Y=0,_t=Nt.length;Y<_t;Y++)ot=Nt[Y],x.format!==nn?ut!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ot.width,ot.height,ut,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,dt,ot.width,ot.height,0,ot.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ot.width,ot.height,ut,Et,ot.data):e.texImage2D(i.TEXTURE_2D,Y,dt,ot.width,ot.height,0,ut,Et,ot.data)}else if(x.isDataArrayTexture)if(Bt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,dt,Q.width,Q.height,Q.depth),D)if(x.layerUpdates.size>0){const Y=Ho(Q.width,Q.height,x.format,x.type);for(const _t of x.layerUpdates){const pt=Q.data.subarray(_t*Y/Q.data.BYTES_PER_ELEMENT,(_t+1)*Y/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,Q.width,Q.height,1,ut,Et,pt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,Et,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,Q.width,Q.height,Q.depth,0,ut,Et,Q.data);else if(x.isData3DTexture)Bt?(Qt&&e.texStorage3D(i.TEXTURE_3D,at,dt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,Et,Q.data)):e.texImage3D(i.TEXTURE_3D,0,dt,Q.width,Q.height,Q.depth,0,ut,Et,Q.data);else if(x.isFramebufferTexture){if(Qt)if(Bt)e.texStorage2D(i.TEXTURE_2D,at,dt,Q.width,Q.height);else{let Y=Q.width,_t=Q.height;for(let pt=0;pt<at;pt++)e.texImage2D(i.TEXTURE_2D,pt,dt,Y,_t,0,ut,Et,null),Y>>=1,_t>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Q.parentNode!==Y){Y.appendChild(Q),p.add(x),Y.onpaint=Ht=>{const Ee=Ht.changedElements;for(const ue of p)Ee.includes(ue.image)&&(ue.needsUpdate=!0)},Y.requestPaint();return}const _t=0,pt=i.RGBA,it=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,_t,pt,it,Ct,Q),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Bt&&Qt){const Y=he(Nt[0]);e.texStorage2D(i.TEXTURE_2D,at,dt,Y.width,Y.height)}for(let Y=0,_t=Nt.length;Y<_t;Y++)ot=Nt[Y],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ut,Et,ot):e.texImage2D(i.TEXTURE_2D,Y,dt,ut,Et,ot);x.generateMipmaps=!1}else if(Bt){if(Qt){const Y=he(Q);e.texStorage2D(i.TEXTURE_2D,at,dt,Y.width,Y.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Et,Q)}else e.texImage2D(i.TEXTURE_2D,0,dt,ut,Et,Q);d(x)&&v(K),ft.__version=lt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function St(w,x,O){if(x.image.length!==6)return;const K=J(w,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const lt=n.get(et);if(et.version!==lt.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const ft=ne.getPrimaries(ne.workingColorSpace),Z=x.colorSpace===Fn?null:ne.getPrimaries(x.colorSpace),Q=x.colorSpace===Fn||ft===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ut=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!ut&&!Et?dt[it]=f(x.image[it],!0,s.maxCubemapSize):dt[it]=Et?x.image[it].image:x.image[it],dt[it]=mt(x,dt[it]);const ot=dt[0],Nt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),Qt=y(x.internalFormat,Nt,Bt,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,at=lt.__version===void 0||K===!0,Y=et.dataReady;let _t=T(x,ot);Ut(i.TEXTURE_CUBE_MAP,x);let pt;if(ut){D&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Qt,ot.width,ot.height);for(let it=0;it<6;it++){pt=dt[it].mipmaps;for(let Ct=0;Ct<pt.length;Ct++){const Ht=pt[Ct];x.format!==nn?Nt!==null?D?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,Ht.width,Ht.height,Nt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,Qt,Ht.width,Ht.height,0,Ht.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,Ht.width,Ht.height,Nt,Bt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,Qt,Ht.width,Ht.height,0,Nt,Bt,Ht.data)}}}else{if(pt=x.mipmaps,D&&at){pt.length>0&&_t++;const it=he(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Qt,it.width,it.height)}for(let it=0;it<6;it++)if(Et){D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,Nt,Bt,dt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,dt[it].width,dt[it].height,0,Nt,Bt,dt[it].data);for(let Ct=0;Ct<pt.length;Ct++){const Ee=pt[Ct].image[it].image;D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,Ee.width,Ee.height,Nt,Bt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,Qt,Ee.width,Ee.height,0,Nt,Bt,Ee.data)}}else{D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Nt,Bt,dt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Nt,Bt,dt[it]);for(let Ct=0;Ct<pt.length;Ct++){const Ht=pt[Ct];D?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,Nt,Bt,Ht.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,Qt,Nt,Bt,Ht.image[it])}}}d(x)&&v(i.TEXTURE_CUBE_MAP),lt.__version=et.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function yt(w,x,O,K,et,lt){const ft=r.convert(O.format,O.colorSpace),Z=r.convert(O.type),Q=y(O.internalFormat,ft,Z,O.normalized,O.colorSpace),ut=n.get(x),Et=n.get(O);if(Et.__renderTarget=x,!ut.__hasExternalTextures){const dt=Math.max(1,x.width>>lt),ot=Math.max(1,x.height>>lt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,lt,Q,dt,ot,x.depth,0,ft,Z,null):e.texImage2D(et,lt,Q,dt,ot,0,ft,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),It(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,Et.__webglTexture,0,Jt(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,Et.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const K=x.depthTexture,et=K&&K.isDepthTexture?K.type:null,lt=A(x.stencilBuffer,et),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(x),lt,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(x),lt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,lt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,w)}else{const K=x.textures;for(let et=0;et<K.length;et++){const lt=K[et],ft=r.convert(lt.format,lt.colorSpace),Z=r.convert(lt.type),Q=y(lt.internalFormat,ft,Z,lt.normalized,lt.colorSpace);It(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(x),Q,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(w,x,O){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(x.depthTexture);if(et.__renderTarget=x,(!et.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(et.__webglInit===void 0&&(et.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,x.depthTexture);const ut=r.convert(x.depthTexture.format),Et=r.convert(x.depthTexture.type);let dt;x.depthTexture.format===bn?dt=i.DEPTH_COMPONENT24:x.depthTexture.format===$n&&(dt=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,dt,x.width,x.height,0,ut,Et,null)}}else j(x.depthTexture,0);const lt=et.__webglTexture,ft=Jt(x),Z=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=x.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===bn)It(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,lt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,lt,0);else if(x.depthTexture.format===$n)It(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,lt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,lt,0);else throw new Error("Unknown depthTexture format")}function Kt(w){const x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=K}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)bt(x.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?bt(x.__webglFramebuffer[0],w,0):bt(x.__webglFramebuffer,w,0)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),qt(x.__webglDepthbuffer[K],w,!1);else{const et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,lt)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),qt(x.__webglDepthbuffer,w,!1);else{const et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(w,x,O){const K=n.get(w);x!==void 0&&yt(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Kt(w)}function rt(w){const x=w.texture,O=n.get(w),K=n.get(x);w.addEventListener("dispose",_);const et=w.textures,lt=w.isWebGLCubeRenderTarget===!0,ft=et.length>1;if(ft||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,a.memory.textures++),lt){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let Q=0;Q<x.mipmaps.length;Q++)O.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else O.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)O.__webglFramebuffer[Z]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Z=0,Q=et.length;Z<Q;Z++){const ut=n.get(et[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&It(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<et.length;Z++){const Q=et[Z];O.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const ut=r.convert(Q.format,Q.colorSpace),Et=r.convert(Q.type),dt=y(Q.internalFormat,ut,Et,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),ot=Jt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)yt(O.__webglFramebuffer[Z][Q],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else yt(O.__webglFramebuffer[Z],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(x)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Z=0,Q=et.length;Z<Q;Z++){const ut=et[Z],Et=n.get(ut);let dt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Et.__webglTexture),Ut(dt,ut),yt(O.__webglFramebuffer,w,ut,i.COLOR_ATTACHMENT0+Z,dt,0),d(ut)&&v(dt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,K.__webglTexture),Ut(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)yt(O.__webglFramebuffer[Q],w,x,i.COLOR_ATTACHMENT0,Z,Q);else yt(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Z,0);d(x)&&v(Z),e.unbindTexture()}w.depthBuffer&&Kt(w)}function At(w){const x=w.textures;for(let O=0,K=x.length;O<K;O++){const et=x[O];if(d(et)){const lt=E(w),ft=n.get(et).__webglTexture;e.bindTexture(lt,ft),v(lt),e.unbindTexture()}}}const ct=[],Ot=[];function P(w){if(w.samples>0){if(It(w)===!1){const x=w.textures,O=w.width,K=w.height;let et=i.COLOR_BUFFER_BIT;const lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(w),Z=x.length>1;if(Z)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const Q=w.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ut]);const Et=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,et,i.NEAREST),c===!0&&(ct.length=0,Ot.length=0,ct.push(i.COLOR_ATTACHMENT0+ut),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ct.push(lt),Ot.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ut]);const Et=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Jt(w){return Math.min(s.maxSamples,w.samples)}function It(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function jt(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function mt(w,x){const O=w.colorSpace,K=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Bs&&O!==Fn&&(ne.getTransfer(O)===le?(K!==nn||et!==Xe)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",O)),x}function he(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.getTextureUnits=X,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=st,this.rebindTextures=ee,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Am(i,t){function e(n,s=Fn){let r;const a=ne.getTransfer(s);if(n===Xe)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yc)return i.BYTE;if(n===Ec)return i.SHORT;if(n===ji)return i.UNSIGNED_SHORT;if(n===ya)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===bc)return i.ALPHA;if(n===Ac)return i.RGB;if(n===nn)return i.RGBA;if(n===bn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===Ta)return i.RED;if(n===ba)return i.RED_INTEGER;if(n===ti)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Is||n===Ds)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===Vr||n===Hr||n===kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wr||n===Xr||n===qr||n===Yr||n===Zr||n===Fs||n===jr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wr||n===Xr)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qr)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yr)return r.COMPRESSED_R11_EAC;if(n===Zr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fs)return r.COMPRESSED_RG11_EAC;if(n===jr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kr||n===$r||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===ca||n===la)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$r)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qr)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ta)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ea)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===ua||n===da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===pa||n===Os||n===ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Os)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cm=`
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

}`;class Pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pn({vertexShader:Rm,fragmentShader:Cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lm extends ei{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,h=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",f=new Pm,d={},v=e.getContextAttributes();let E=null,y=null;const A=[],T=[],R=new $t;let _=null;const b=new Ve;b.viewport=new ye;const L=new Ve;L.viewport=new ye;const C=[b,L],N=new Bh;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=A[J];return ht===void 0&&(ht=new rr,A[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=A[J];return ht===void 0&&(ht=new rr,A[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=A[J];return ht===void 0&&(ht=new rr,A[J]=ht),ht.getHandSpace()};function U(J){const ht=T.indexOf(J.inputSource);if(ht===-1)return;const G=A[ht];G!==void 0&&(G.update(J.inputSource,J.frame,l||a),G.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",B);for(let J=0;J<A.length;J++){const ht=T[J];ht!==null&&(T[J]=null,A[J].disconnect(ht))}k=null,X=null,f.reset();for(const J in d)delete d[J];t.setRenderTarget(E),m=null,h=null,p=null,s=null,y=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,nt=null,St=null;v.depth&&(St=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=v.stencil?$n:bn,nt=v.stencil?Ki:fn);const yt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(yt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new dn(h.textureWidth,h.textureHeight,{format:nn,type:Xe,depthTexture:new Ri(h.textureWidth,h.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const G={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new dn(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function B(J){for(let ht=0;ht<J.removed.length;ht++){const G=J.removed[ht],nt=T.indexOf(G);nt>=0&&(T[nt]=null,A[nt].disconnect(G))}for(let ht=0;ht<J.added.length;ht++){const G=J.added[ht];let nt=T.indexOf(G);if(nt===-1){for(let yt=0;yt<A.length;yt++)if(yt>=T.length){T.push(G),nt=yt;break}else if(T[yt]===null){T[yt]=G,nt=yt;break}if(nt===-1)break}const St=A[nt];St&&St.connect(G)}}const j=new I,$=new I;function tt(J,ht,G){j.setFromMatrixPosition(ht.matrixWorld),$.setFromMatrixPosition(G.matrixWorld);const nt=j.distanceTo($),St=ht.projectionMatrix.elements,yt=G.projectionMatrix.elements,qt=St[14]/(St[10]-1),bt=St[14]/(St[10]+1),Kt=(St[9]+1)/St[5],ee=(St[9]-1)/St[5],rt=(St[8]-1)/St[0],At=(yt[8]+1)/yt[0],ct=qt*rt,Ot=qt*At,P=nt/(-rt+At),Jt=P*-rt;if(ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Jt),J.translateZ(P),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),St[10]===-1)J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const It=qt+P,jt=bt+P,mt=ct-Jt,he=Ot+(nt-Jt),w=Kt*bt/jt*It,x=ee*bt/jt*It;J.projectionMatrix.makePerspective(mt,he,w,x,It,jt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function st(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ht=J.near,G=J.far;f.texture!==null&&(f.depthNear>0&&(ht=f.depthNear),f.depthFar>0&&(G=f.depthFar)),N.near=L.near=b.near=ht,N.far=L.far=b.far=G,(k!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,X=N.far),N.layers.mask=J.layers.mask|6,b.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const nt=J.parent,St=N.cameras;st(N,nt);for(let yt=0;yt<St.length;yt++)st(St[yt],nt);St.length===2?tt(N,b,L):N.projectionMatrix.copy(b.projectionMatrix),gt(J,N,nt)};function gt(J,ht,G){G===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(G.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ai*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(N)},this.getCameraTexture=function(J){return d[J]};let zt=null;function Xt(J,ht){if(u=ht.getViewerPose(l||a),g=ht,u!==null){const G=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let nt=!1;G.length!==N.cameras.length&&(N.cameras.length=0,nt=!0);for(let bt=0;bt<G.length;bt++){const Kt=G[bt];let ee=null;if(m!==null)ee=m.getViewport(Kt);else{const At=p.getViewSubImage(h,Kt);ee=At.viewport,bt===0&&(t.setRenderTargetTextures(y,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(y))}let rt=C[bt];rt===void 0&&(rt=new Ve,rt.layers.enable(bt),rt.viewport=new ye,C[bt]=rt),rt.matrix.fromArray(Kt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Kt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ee.x,ee.y,ee.width,ee.height),bt===0&&(N.matrix.copy(rt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),nt===!0&&N.cameras.push(rt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const bt=p.getDepthInformation(G[0]);bt&&bt.isValid&&bt.texture&&f.init(bt,s.renderState)}if(St&&St.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let bt=0;bt<G.length;bt++){const Kt=G[bt].camera;if(Kt){let ee=d[Kt];ee||(ee=new Bc,d[Kt]=ee);const rt=p.getCameraImage(Kt);ee.sourceTexture=rt}}}}for(let G=0;G<A.length;G++){const nt=T[G],St=A[G];nt!==null&&St!==void 0&&St.update(nt,ht,l||a)}zt&&zt(J,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}const Ut=new Hc;Ut.setAnimationLoop(Xt),this.setAnimationLoop=function(J){zt=J},this.dispose=function(){}}}const Im=new _e,jc=new Vt;jc.set(-1,0,0,0,1,0,0,0,1);function Dm(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,zc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,v,E,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),h(f,d),d.isMeshPhysicalMaterial&&m(f,d,y)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),M(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?c(f,d,v,E):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ie&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ie&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const v=t.get(d),E=v.envMap,y=v.envMapRotation;E&&(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(jc),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,v,E){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*v,f.scale.value=E*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function h(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,v){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function M(f,d){const v=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Um(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){const y=E.program;n.uniformBlockBinding(v,y)}function l(v,E){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",f));const A=E.program;n.updateUBOMapping(v,A);const T=t.render.frame;r[v.id]!==T&&(h(v),r[v.id]=T)}function u(v){const E=p();v.__bindingPointIndex=E;const y=i.createBuffer(),A=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=s[v.id],y=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,R=y.length;T<R;T++){const _=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,L=_.length;b<L;b++){const C=_[b];if(m(C,T,b,A)===!0){const N=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let U=0;U<k.length;U++){const z=k[U],B=M(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,N+X,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):ArrayBuffer.isView(z)?C.__data.set(new z.constructor(z.buffer,z.byteOffset,C.__data.length)):(z.toArray(C.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,E,y,A){const T=v.value,R=E+"_"+y;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:ArrayBuffer.isView(T)?A[R]=T.slice():A[R]=T.clone(),!0;{const _=A[R];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return A[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function g(v){const E=v.uniforms;let y=0;const A=16;for(let R=0,_=E.length;R<_;R++){const b=Array.isArray(E[R])?E[R]:[E[R]];for(let L=0,C=b.length;L<C;L++){const N=b[L],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,U=k.length;X<U;X++){const z=k[X],B=M(z),j=y%A,$=j%B.boundary,tt=j+$;y+=$,tt!==0&&A-tt<B.storage&&(y+=A-tt),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=B.storage}}}const T=y%A;return T>0&&(y+=A-T),v.__size=y,v.__cache={},this}function M(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",v),E}function f(v){const E=v.target;E.removeEventListener("dispose",f);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}const Nm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let on=null;function Fm(){return on===null&&(on=new Nc(Nm,16,16,ti,Tn),on.name="DFG_LUT",on.minFilter=Fe,on.magFilter=Fe,on.wrapS=Sn,on.wrapT=Sn,on.generateMipmaps=!1,on.needsUpdate=!0),on}class Kc{constructor(t={}){const{canvas:e=Bl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Xe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=m,f=new Set([Ra,Aa,ba]),d=new Set([Xe,fn,ji,Ki,Ea,wa]),v=new Uint32Array(4),E=new Int32Array(4),y=new I;let A=null,T=null;const R=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let C=!1,N=null;this._outputColorSpace=Ze;let k=0,X=0,U=null,z=-1,B=null;const j=new ye,$=new ye;let tt=null;const st=new Gt(0);let gt=0,zt=e.width,Xt=e.height,Ut=1,J=null,ht=null;const G=new ye(0,0,zt,Xt),nt=new ye(0,0,zt,Xt);let St=!1;const yt=new Na;let qt=!1,bt=!1;const Kt=new _e,ee=new I,rt=new ye,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ot(){return U===null?Ut:1}let P=n;function Jt(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Ht,!1),P===null){const F="webgl2";if(P=Jt(F,S),P===null)throw Jt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw se("WebGLRenderer: "+S.message),S}let It,jt,mt,he,w,x,O,K,et,lt,ft,Z,Q,ut,Et,dt,ot,Nt,Bt,Qt,D,at,Y;function _t(){It=new Ff(P),It.init(),D=new Am(P,It),jt=new Rf(P,It,t,D),mt=new Tm(P,It),jt.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),he=new zf(P),w=new um,x=new bm(P,It,mt,w,jt,D,he),O=new Nf(L),K=new Hh(P),at=new bf(P,K),et=new Of(P,K,he,at),lt=new Vf(P,et,K,at,he),Nt=new Gf(P,jt,x),Et=new Cf(w),ft=new hm(L,O,It,jt,at,Et),Z=new Dm(L,w),Q=new fm,ut=new vm(It),ot=new Tf(L,O,mt,lt,g,c),dt=new wm(L,lt,jt),Y=new Um(P,he,jt,mt),Bt=new Af(P,It,he),Qt=new Bf(P,It,he),he.programs=ft.programs,L.capabilities=jt,L.extensions=It,L.properties=w,L.renderLists=Q,L.shadowMap=dt,L.state=mt,L.info=he}_t(),M!==Xe&&(b=new kf(M,e.width,e.height,s,r));const pt=new Lm(L,P);this.xr=pt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=It.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=It.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(S){S!==void 0&&(Ut=S,this.setSize(zt,Xt,!1))},this.getSize=function(S){return S.set(zt,Xt)},this.setSize=function(S,F,W=!0){if(pt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=S,Xt=F,e.width=Math.floor(S*Ut),e.height=Math.floor(F*Ut),W===!0&&(e.style.width=S+"px",e.style.height=F+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(zt*Ut,Xt*Ut).floor()},this.setDrawingBufferSize=function(S,F,W){zt=S,Xt=F,Ut=W,e.width=Math.floor(S*W),e.height=Math.floor(F*W),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(M===Xe){se("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(G)},this.setViewport=function(S,F,W,V){S.isVector4?G.set(S.x,S.y,S.z,S.w):G.set(S,F,W,V),mt.viewport(j.copy(G).multiplyScalar(Ut).round())},this.getScissor=function(S){return S.copy(nt)},this.setScissor=function(S,F,W,V){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,F,W,V),mt.scissor($.copy(nt).multiplyScalar(Ut).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(S){mt.setScissorTest(St=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){ht=S},this.getClearColor=function(S){return S.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,W=!0){let V=0;if(S){let H=!1;if(U!==null){const Mt=U.texture.format;H=f.has(Mt)}if(H){const Mt=U.texture.type,Tt=d.has(Mt),vt=ot.getClearColor(),Rt=ot.getClearAlpha(),Pt=vt.r,kt=vt.g,Zt=vt.b;Tt?(v[0]=Pt,v[1]=kt,v[2]=Zt,v[3]=Rt,P.clearBufferuiv(P.COLOR,0,v)):(E[0]=Pt,E[1]=kt,E[2]=Zt,E[3]=Rt,P.clearBufferiv(P.COLOR,0,E))}else V|=P.COLOR_BUFFER_BIT}F&&(V|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),ot.dispose(),Q.dispose(),ut.dispose(),w.dispose(),O.dispose(),lt.dispose(),at.dispose(),Y.dispose(),ft.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Ya),pt.removeEventListener("sessionend",Za),Hn.stop()};function it(S){S.preventDefault(),co("WebGLRenderer: Context Lost."),C=!0}function Ct(){co("WebGLRenderer: Context Restored."),C=!1;const S=he.autoReset,F=dt.enabled,W=dt.autoUpdate,V=dt.needsUpdate,H=dt.type;_t(),he.autoReset=S,dt.enabled=F,dt.autoUpdate=W,dt.needsUpdate=V,dt.type=H}function Ht(S){se("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ee(S){const F=S.target;F.removeEventListener("dispose",Ee),ue(F)}function ue(S){mn(S),w.remove(S)}function mn(S){const F=w.get(S).programs;F!==void 0&&(F.forEach(function(W){ft.releaseProgram(W)}),S.isShaderMaterial&&ft.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,W,V,H,Mt){F===null&&(F=At);const Tt=H.isMesh&&H.matrixWorld.determinant()<0,vt=tl(S,F,W,V,H);mt.setMaterial(V,Tt);let Rt=W.index,Pt=1;if(V.wireframe===!0){if(Rt=et.getWireframeAttribute(W),Rt===void 0)return;Pt=2}const kt=W.drawRange,Zt=W.attributes.position;let Lt=kt.start*Pt,de=(kt.start+kt.count)*Pt;Mt!==null&&(Lt=Math.max(Lt,Mt.start*Pt),de=Math.min(de,(Mt.start+Mt.count)*Pt)),Rt!==null?(Lt=Math.max(Lt,0),de=Math.min(de,Rt.count)):Zt!=null&&(Lt=Math.max(Lt,0),de=Math.min(de,Zt.count));const we=de-Lt;if(we<0||we===1/0)return;at.setup(H,V,vt,W,Rt);let Se,pe=Bt;if(Rt!==null&&(Se=K.get(Rt),pe=Qt,pe.setIndex(Se)),H.isMesh)V.wireframe===!0?(mt.setLineWidth(V.wireframeLinewidth*Ot()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(H.isLine){let De=V.linewidth;De===void 0&&(De=1),mt.setLineWidth(De*Ot()),H.isLineSegments?pe.setMode(P.LINES):H.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else H.isPoints?pe.setMode(P.POINTS):H.isSprite&&pe.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(It.get("WEBGL_multi_draw"))pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const De=H._multiDrawStarts,wt=H._multiDrawCounts,He=H._multiDrawCount,ie=Rt?K.get(Rt).bytesPerElement:1,qe=w.get(V).currentProgram.getUniforms();for(let rn=0;rn<He;rn++)qe.setValue(P,"_gl_DrawID",rn),pe.render(De[rn]/ie,wt[rn])}else if(H.isInstancedMesh)pe.renderInstances(Lt,we,H.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,wt=Math.min(W.instanceCount,De);pe.renderInstances(Lt,we,wt)}else pe.render(Lt,we)};function sn(S,F,W){S.transparent===!0&&S.side===Pe&&S.forceSinglePass===!1?(S.side=Ie,S.needsUpdate=!0,Qi(S,F,W),S.side=Gn,S.needsUpdate=!0,Qi(S,F,W),S.side=Pe):Qi(S,F,W)}this.compile=function(S,F,W=null){W===null&&(W=S),T=ut.get(W),T.init(F),_.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){const vt=Mt[Tt];sn(vt,W,H),V.add(vt)}else sn(Mt,W,H),V.add(Mt)}),T=_.pop(),V},this.compileAsync=function(S,F,W=null){const V=this.compile(S,F,W);return new Promise(H=>{function Mt(){if(V.forEach(function(Tt){w.get(Tt).currentProgram.isReady()&&V.delete(Tt)}),V.size===0){H(S);return}setTimeout(Mt,10)}It.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let js=null;function Jc(S){js&&js(S)}function Ya(){Hn.stop()}function Za(){Hn.start()}const Hn=new Hc;Hn.setAnimationLoop(Jc),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(S){js=S,pt.setAnimationLoop(S),S===null?Hn.stop():Hn.start()},pt.addEventListener("sessionstart",Ya),pt.addEventListener("sessionend",Za),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(S,F);const W=pt.enabled===!0&&pt.isPresenting===!0,V=b!==null&&(U===null||W)&&b.begin(L,U);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(F),F=pt.getCamera()),S.isScene===!0&&S.onBeforeRender(L,S,F,U),T=ut.get(S,_.length),T.init(F),T.state.textureUnits=x.getTextureUnits(),_.push(T),Kt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),yt.setFromProjectionMatrix(Kt,hn,F.reversedDepth),bt=this.localClippingEnabled,qt=Et.init(this.clippingPlanes,bt),A=Q.get(S,R.length),A.init(),R.push(A),pt.enabled===!0&&pt.isPresenting===!0){const Tt=L.xr.getDepthSensingMesh();Tt!==null&&Ks(Tt,F,-1/0,L.sortObjects)}Ks(S,F,0,L.sortObjects),A.finish(),L.sortObjects===!0&&A.sort(J,ht),ct=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,ct&&ot.addToRenderList(A,S),this.info.render.frame++,qt===!0&&Et.beginShadows();const H=T.state.shadowsArray;if(dt.render(H,S,F),qt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&b.hasRenderPass())===!1){const Tt=A.opaque,vt=A.transmissive;if(T.setupLights(),F.isArrayCamera){const Rt=F.cameras;if(vt.length>0)for(let Pt=0,kt=Rt.length;Pt<kt;Pt++){const Zt=Rt[Pt];Ka(Tt,vt,S,Zt)}ct&&ot.render(S);for(let Pt=0,kt=Rt.length;Pt<kt;Pt++){const Zt=Rt[Pt];ja(A,S,Zt,Zt.viewport)}}else vt.length>0&&Ka(Tt,vt,S,F),ct&&ot.render(S),ja(A,S,F)}U!==null&&X===0&&(x.updateMultisampleRenderTarget(U),x.updateRenderTargetMipmap(U)),V&&b.end(L),S.isScene===!0&&S.onAfterRender(L,S,F),at.resetDefaultState(),z=-1,B=null,_.pop(),_.length>0?(T=_[_.length-1],x.setTextureUnits(T.state.textureUnits),qt===!0&&Et.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,N!==null&&N.renderEnd()};function Ks(S,F,W,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||yt.intersectsSprite(S)){V&&rt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Kt);const Tt=lt.update(S),vt=S.material;vt.visible&&A.push(S,Tt,vt,W,rt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||yt.intersectsObject(S))){const Tt=lt.update(S),vt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),rt.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),rt.copy(Tt.boundingSphere.center)),rt.applyMatrix4(S.matrixWorld).applyMatrix4(Kt)),Array.isArray(vt)){const Rt=Tt.groups;for(let Pt=0,kt=Rt.length;Pt<kt;Pt++){const Zt=Rt[Pt],Lt=vt[Zt.materialIndex];Lt&&Lt.visible&&A.push(S,Tt,Lt,W,rt.z,Zt)}}else vt.visible&&A.push(S,Tt,vt,W,rt.z,null)}}const Mt=S.children;for(let Tt=0,vt=Mt.length;Tt<vt;Tt++)Ks(Mt[Tt],F,W,V)}function ja(S,F,W,V){const{opaque:H,transmissive:Mt,transparent:Tt}=S;T.setupLightsView(W),qt===!0&&Et.setGlobalState(L.clippingPlanes,W),V&&mt.viewport(j.copy(V)),H.length>0&&Ji(H,F,W),Mt.length>0&&Ji(Mt,F,W),Tt.length>0&&Ji(Tt,F,W),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Ka(S,F,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Lt=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new dn(1,1,{generateMipmaps:!0,type:Lt?Tn:Xe,minFilter:Kn,samples:Math.max(4,jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const Mt=T.state.transmissionRenderTarget[V.id],Tt=V.viewport||j;Mt.setSize(Tt.z*L.transmissionResolutionScale,Tt.w*L.transmissionResolutionScale);const vt=L.getRenderTarget(),Rt=L.getActiveCubeFace(),Pt=L.getActiveMipmapLevel();L.setRenderTarget(Mt),L.getClearColor(st),gt=L.getClearAlpha(),gt<1&&L.setClearColor(16777215,.5),L.clear(),ct&&ot.render(W);const kt=L.toneMapping;L.toneMapping=un;const Zt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),qt===!0&&Et.setGlobalState(L.clippingPlanes,V),Ji(S,W,V),x.updateMultisampleRenderTarget(Mt),x.updateRenderTargetMipmap(Mt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let de=0,we=F.length;de<we;de++){const Se=F[de],{object:pe,geometry:De,material:wt,group:He}=Se;if(wt.side===Pe&&pe.layers.test(V.layers)){const ie=wt.side;wt.side=Ie,wt.needsUpdate=!0,$a(pe,W,V,De,wt,He),wt.side=ie,wt.needsUpdate=!0,Lt=!0}}Lt===!0&&(x.updateMultisampleRenderTarget(Mt),x.updateRenderTargetMipmap(Mt))}L.setRenderTarget(vt,Rt,Pt),L.setClearColor(st,gt),Zt!==void 0&&(V.viewport=Zt),L.toneMapping=kt}function Ji(S,F,W){const V=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Mt=S.length;H<Mt;H++){const Tt=S[H],{object:vt,geometry:Rt,group:Pt}=Tt;let kt=Tt.material;kt.allowOverride===!0&&V!==null&&(kt=V),vt.layers.test(W.layers)&&$a(vt,F,W,Rt,kt,Pt)}}function $a(S,F,W,V,H,Mt){S.onBeforeRender(L,F,W,V,H,Mt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(L,F,W,V,S,Mt),H.transparent===!0&&H.side===Pe&&H.forceSinglePass===!1?(H.side=Ie,H.needsUpdate=!0,L.renderBufferDirect(W,F,V,H,S,Mt),H.side=Gn,H.needsUpdate=!0,L.renderBufferDirect(W,F,V,H,S,Mt),H.side=Pe):L.renderBufferDirect(W,F,V,H,S,Mt),S.onAfterRender(L,F,W,V,H,Mt)}function Qi(S,F,W){F.isScene!==!0&&(F=At);const V=w.get(S),H=T.state.lights,Mt=T.state.shadowsArray,Tt=H.state.version,vt=ft.getParameters(S,H.state,Mt,F,W,T.state.lightProbeGridArray),Rt=ft.getProgramCacheKey(vt);let Pt=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const kt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=O.get(S.envMap||V.environment,kt),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",Ee),Pt=new Map,V.programs=Pt);let Zt=Pt.get(Rt);if(Zt!==void 0){if(V.currentProgram===Zt&&V.lightsStateVersion===Tt)return Qa(S,vt),Zt}else vt.uniforms=ft.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,W,vt),S.onBeforeCompile(vt,L),Zt=ft.acquireProgram(vt,Rt),Pt.set(Rt,Zt),V.uniforms=vt.uniforms;const Lt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Lt.clippingPlanes=Et.uniform),Qa(S,vt),V.needsLights=nl(S),V.lightsStateVersion=Tt,V.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=Zt,V.uniformsList=null,Zt}function Ja(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Ns.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Qa(S,F){const W=w.get(S);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Qc(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let W=0,V=S.length;W<V;W++){const H=S[W];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function tl(S,F,W,V,H){F.isScene!==!0&&(F=At),x.resetTextureUnits();const Mt=F.fog,Tt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,vt=U===null?L.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ne.workingColorSpace,Rt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Pt=O.get(V.envMap||Tt,Rt),kt=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Zt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!W.morphAttributes.position,de=!!W.morphAttributes.normal,we=!!W.morphAttributes.color;let Se=un;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Se=L.toneMapping);const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,De=pe!==void 0?pe.length:0,wt=w.get(V),He=T.state.lights;if(qt===!0&&(bt===!0||S!==B)){const ge=S===B&&V.id===z;Et.setState(V,S,ge)}let ie=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==He.state.version||wt.outputColorSpace!==vt||H.isBatchedMesh&&wt.batching===!1||!H.isBatchedMesh&&wt.batching===!0||H.isBatchedMesh&&wt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&wt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&wt.instancing===!1||!H.isInstancedMesh&&wt.instancing===!0||H.isSkinnedMesh&&wt.skinning===!1||!H.isSkinnedMesh&&wt.skinning===!0||H.isInstancedMesh&&wt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&wt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&wt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&wt.instancingMorph===!1&&H.morphTexture!==null||wt.envMap!==Pt||V.fog===!0&&wt.fog!==Mt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Et.numPlanes||wt.numIntersection!==Et.numIntersection)||wt.vertexAlphas!==kt||wt.vertexTangents!==Zt||wt.morphTargets!==Lt||wt.morphNormals!==de||wt.morphColors!==we||wt.toneMapping!==Se||wt.morphTargetsCount!==De||!!wt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,wt.__version=V.version);let qe=wt.currentProgram;ie===!0&&(qe=Qi(V,F,H),N&&V.isNodeMaterial&&N.onUpdateProgram(V,qe,wt));let rn=!1,An=!1,ri=!1;const me=qe.getUniforms(),Te=wt.uniforms;if(mt.useProgram(qe.program)&&(rn=!0,An=!0,ri=!0),V.id!==z&&(z=V.id,An=!0),wt.needsLights){const ge=Qc(T.state.lightProbeGridArray,H);wt.lightProbeGrid!==ge&&(wt.lightProbeGrid=ge,An=!0)}if(rn||B!==S){mt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),me.setValue(P,"projectionMatrix",S.projectionMatrix),me.setValue(P,"viewMatrix",S.matrixWorldInverse);const Cn=me.map.cameraPosition;Cn!==void 0&&Cn.setValue(P,ee.setFromMatrixPosition(S.matrixWorld)),jt.logarithmicDepthBuffer&&me.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&me.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,An=!0,ri=!0)}if(wt.needsLights&&(He.state.directionalShadowMap.length>0&&me.setValue(P,"directionalShadowMap",He.state.directionalShadowMap,x),He.state.spotShadowMap.length>0&&me.setValue(P,"spotShadowMap",He.state.spotShadowMap,x),He.state.pointShadowMap.length>0&&me.setValue(P,"pointShadowMap",He.state.pointShadowMap,x)),H.isSkinnedMesh){me.setOptional(P,H,"bindMatrix"),me.setOptional(P,H,"bindMatrixInverse");const ge=H.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),me.setValue(P,"boneTexture",ge.boneTexture,x))}H.isBatchedMesh&&(me.setOptional(P,H,"batchingTexture"),me.setValue(P,"batchingTexture",H._matricesTexture,x),me.setOptional(P,H,"batchingIdTexture"),me.setValue(P,"batchingIdTexture",H._indirectTexture,x),me.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(P,"batchingColorTexture",H._colorsTexture,x));const Rn=W.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Nt.update(H,W,qe),(An||wt.receiveShadow!==H.receiveShadow)&&(wt.receiveShadow=H.receiveShadow,me.setValue(P,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Te.envMapIntensity.value=F.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=Fm()),An){if(me.setValue(P,"toneMappingExposure",L.toneMappingExposure),wt.needsLights&&el(Te,ri),Mt&&V.fog===!0&&Z.refreshFogUniforms(Te,Mt),Z.refreshMaterialUniforms(Te,V,Ut,Xt,T.state.transmissionRenderTarget[S.id]),wt.needsLights&&wt.lightProbeGrid){const ge=wt.lightProbeGrid;Te.probesSH.value=ge.texture,Te.probesMin.value.copy(ge.boundingBox.min),Te.probesMax.value.copy(ge.boundingBox.max),Te.probesResolution.value.copy(ge.resolution)}Ns.upload(P,Ja(wt),Te,x)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ns.upload(P,Ja(wt),Te,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&me.setValue(P,"center",H.center),me.setValue(P,"modelViewMatrix",H.modelViewMatrix),me.setValue(P,"normalMatrix",H.normalMatrix),me.setValue(P,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ge=V.uniformsGroups;for(let Cn=0,ai=ge.length;Cn<ai;Cn++){const to=ge[Cn];Y.update(to,qe),Y.bind(to,qe)}}return qe}function el(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function nl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,F,W){const V=w.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),w.get(S.texture).__webglTexture=F,w.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const W=w.get(S);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const il=P.createFramebuffer();this.setRenderTarget=function(S,F=0,W=0){U=S,k=F,X=W;let V=null,H=!1,Mt=!1;if(S){const vt=w.get(S);if(vt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(P.FRAMEBUFFER,vt.__webglFramebuffer),j.copy(S.viewport),$.copy(S.scissor),tt=S.scissorTest,mt.viewport(j),mt.scissor($),mt.setScissorTest(tt),z=-1;return}else if(vt.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(vt.__hasExternalTextures)x.rebindTextures(S,w.get(S.texture).__webglTexture,w.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const kt=S.depthTexture;if(vt.__boundDepthTexture!==kt){if(kt!==null&&w.has(kt)&&(S.width!==kt.image.width||S.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);const Pt=w.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[F])?V=Pt[F][W]:V=Pt[F],H=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?V=w.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?V=Pt[W]:V=Pt,j.copy(S.viewport),$.copy(S.scissor),tt=S.scissorTest}else j.copy(G).multiplyScalar(Ut).floor(),$.copy(nt).multiplyScalar(Ut).floor(),tt=St;if(W!==0&&(V=il),mt.bindFramebuffer(P.FRAMEBUFFER,V)&&mt.drawBuffers(S,V),mt.viewport(j),mt.scissor($),mt.setScissorTest(tt),H){const vt=w.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,W)}else if(Mt){const vt=F;for(let Rt=0;Rt<S.textures.length;Rt++){const Pt=w.get(S.textures[Rt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Rt,Pt.__webglTexture,W,vt)}}else if(S!==null&&W!==0){const vt=w.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(S,F,W,V,H,Mt,Tt,vt=0){if(!(S&&S.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){mt.bindFramebuffer(P.FRAMEBUFFER,Rt);try{const Pt=S.textures[vt],kt=Pt.format,Zt=Pt.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt),!jt.textureFormatReadable(kt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Zt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&W>=0&&W<=S.height-H&&P.readPixels(F,W,V,H,D.convert(kt),D.convert(Zt),Mt)}finally{const Pt=U!==null?w.get(U).__webglFramebuffer:null;mt.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,F,W,V,H,Mt,Tt,vt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(F>=0&&F<=S.width-V&&W>=0&&W<=S.height-H){mt.bindFramebuffer(P.FRAMEBUFFER,Rt);const Pt=S.textures[vt],kt=Pt.format,Zt=Pt.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt),!jt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.bufferData(P.PIXEL_PACK_BUFFER,Mt.byteLength,P.STREAM_READ),P.readPixels(F,W,V,H,D.convert(kt),D.convert(Zt),0);const de=U!==null?w.get(U).__webglFramebuffer:null;mt.bindFramebuffer(P.FRAMEBUFFER,de);const we=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await zl(P,we,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Mt),P.deleteBuffer(Lt),P.deleteSync(we),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,W=0){const V=Math.pow(2,-W),H=Math.floor(S.image.width*V),Mt=Math.floor(S.image.height*V),Tt=F!==null?F.x:0,vt=F!==null?F.y:0;x.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Tt,vt,H,Mt),mt.unbindTexture()};const sl=P.createFramebuffer(),rl=P.createFramebuffer();this.copyTextureToTexture=function(S,F,W=null,V=null,H=0,Mt=0){let Tt,vt,Rt,Pt,kt,Zt,Lt,de,we;const Se=S.isCompressedTexture?S.mipmaps[Mt]:S.image;if(W!==null)Tt=W.max.x-W.min.x,vt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Pt=W.min.x,kt=W.min.y,Zt=W.isBox3?W.min.z:0;else{const Te=Math.pow(2,-H);Tt=Math.floor(Se.width*Te),vt=Math.floor(Se.height*Te),S.isDataArrayTexture?Rt=Se.depth:S.isData3DTexture?Rt=Math.floor(Se.depth*Te):Rt=1,Pt=0,kt=0,Zt=0}V!==null?(Lt=V.x,de=V.y,we=V.z):(Lt=0,de=0,we=0);const pe=D.convert(F.format),De=D.convert(F.type);let wt;F.isData3DTexture?(x.setTexture3D(F,0),wt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),wt=P.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),wt=P.TEXTURE_2D),mt.activeTexture(P.TEXTURE0),mt.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),mt.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),mt.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const He=mt.getParameter(P.UNPACK_ROW_LENGTH),ie=mt.getParameter(P.UNPACK_IMAGE_HEIGHT),qe=mt.getParameter(P.UNPACK_SKIP_PIXELS),rn=mt.getParameter(P.UNPACK_SKIP_ROWS),An=mt.getParameter(P.UNPACK_SKIP_IMAGES);mt.pixelStorei(P.UNPACK_ROW_LENGTH,Se.width),mt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Se.height),mt.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),mt.pixelStorei(P.UNPACK_SKIP_ROWS,kt),mt.pixelStorei(P.UNPACK_SKIP_IMAGES,Zt);const ri=S.isDataArrayTexture||S.isData3DTexture,me=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Te=w.get(S),Rn=w.get(F),ge=w.get(Te.__renderTarget),Cn=w.get(Rn.__renderTarget);mt.bindFramebuffer(P.READ_FRAMEBUFFER,ge.__webglFramebuffer),mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let ai=0;ai<Rt;ai++)ri&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,w.get(S).__webglTexture,H,Zt+ai),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,w.get(F).__webglTexture,Mt,we+ai)),P.blitFramebuffer(Pt,kt,Tt,vt,Lt,de,Tt,vt,P.DEPTH_BUFFER_BIT,P.NEAREST);mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||w.has(S)){const Te=w.get(S),Rn=w.get(F);mt.bindFramebuffer(P.READ_FRAMEBUFFER,sl),mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,rl);for(let ge=0;ge<Rt;ge++)ri?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.__webglTexture,H,Zt+ge):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Te.__webglTexture,H),me?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rn.__webglTexture,Mt,we+ge):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rn.__webglTexture,Mt),H!==0?P.blitFramebuffer(Pt,kt,Tt,vt,Lt,de,Tt,vt,P.COLOR_BUFFER_BIT,P.NEAREST):me?P.copyTexSubImage3D(wt,Mt,Lt,de,we+ge,Pt,kt,Tt,vt):P.copyTexSubImage2D(wt,Mt,Lt,de,Pt,kt,Tt,vt);mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else me?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(wt,Mt,Lt,de,we,Tt,vt,Rt,pe,De,Se.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(wt,Mt,Lt,de,we,Tt,vt,Rt,pe,Se.data):P.texSubImage3D(wt,Mt,Lt,de,we,Tt,vt,Rt,pe,De,Se):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Mt,Lt,de,Tt,vt,pe,De,Se.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Mt,Lt,de,Se.width,Se.height,pe,Se.data):P.texSubImage2D(P.TEXTURE_2D,Mt,Lt,de,Tt,vt,pe,De,Se);mt.pixelStorei(P.UNPACK_ROW_LENGTH,He),mt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ie),mt.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),mt.pixelStorei(P.UNPACK_SKIP_ROWS,rn),mt.pixelStorei(P.UNPACK_SKIP_IMAGES,An),Mt===0&&F.generateMipmaps&&P.generateMipmap(wt),mt.unbindTexture()},this.initRenderTarget=function(S){w.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){k=0,X=0,U=null,mt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}function xe(i,t){const e=Math.sqrt(i*i+t*t);if(e<=7.5)return 0;let n=Math.sin(i*.07)*Math.cos(t*.07)*2.8;if(n+=Math.sin(i*.22)*Math.cos(t*.22)*.55,n+=Math.sin(i*.45)*Math.cos(t*.45)*.15,e>40){const r=Math.min(3.5,(e-40)*.15),a=Math.sin(i*.035)*Math.cos(t*.035)*12+Math.sin(i*.1)*3;n+=a*r}const s=Math.min((e-7.5)/12,1);return n*s}class $c{constructor(){this.mesh=new fe,this.mesh.scale.set(2,2,2),this.position=new I(0,1.4,0),this.velocity=0,this.maxSpeed=18,this.acceleration=24,this.deceleration=18,this.drag=.93,this.rotationY=0,this.steerAngle=0,this.maxSteerAngle=.6,this.steerSpeed=4,this.steerDecay=6,this.controlledPitch=0,this.controlledRoll=0,this.hoverHeightOffset=1.4,this.pitch=0,this.roll=0,this.targetY=1.4,this.thrusters=[],this.flameMats=[],this.currentType="default",this.init()}init(){this.rebuildModel(this.currentType)}rebuildModel(t){for(this.currentType=t;this.mesh.children.length>0;)this.mesh.remove(this.mesh.children[0]);this.thrusters=[],this.flameMats=[],t==="swift-z"?this.buildSwiftZModel():t==="interceptor-gl"?this.buildInterceptorModel():t==="xeno-cargo"?this.buildXenoCargoModel():this.buildDefaultModel()}buildDefaultModel(){const t=new je(.55,32,32),e=new Wt({color:61695,emissive:61695,emissiveIntensity:.8,roughness:.1,metalness:.9,transparent:!0,opacity:.75}),n=new q(t,e);n.position.y=.1,this.mesh.add(n);const s=new Bn(.75,.1,16,48);s.rotateX(Math.PI/2);const r=new Wt({color:2042167,roughness:.35,metalness:.85}),a=new q(s,r);a.castShadow=!0,a.receiveShadow=!0,this.mesh.add(a);const o=new Wt({color:3621201,roughness:.4,metalness:.7}),c=new q(new Ft(.3,.04,.4),o);c.position.set(-.9,.05,-.15),c.rotation.y=Math.PI/6,c.castShadow=!0,this.mesh.add(c);const l=new q(new Ft(.3,.04,.4),o);l.position.set(.9,.05,-.15),l.rotation.y=-Math.PI/6,l.castShadow=!0,this.mesh.add(l);const u=new ae(.18,.22,.7,16);u.rotateX(Math.PI/2);const p=new fe,h=new q(u,o);h.castShadow=!0,p.add(h),p.position.set(-.95,0,0),this.mesh.add(p),this.thrusters.push(p);const m=new fe,g=new q(u,o);g.castShadow=!0,m.add(g),m.position.set(.95,0,0),this.mesh.add(m),this.thrusters.push(m);const M=new Qe(.12,.45,12);M.rotateX(-Math.PI/2);const f=new oe({color:16711765,transparent:!0,opacity:.8}),d=new q(M,f);d.position.set(0,0,-.45),p.add(d),this.flameMats.push(f);const v=new q(M,f);v.position.set(0,0,-.45),m.add(v);const E=new Ft(.4,.1,.1),y=new oe({color:16711765}),A=new q(E,y);A.position.set(0,.2,.45),this.mesh.add(A);const T=new bs(61695,8,40,Math.PI/4,.5,1);T.position.set(0,0,.6);const R=new ce;R.position.set(0,0,16),this.mesh.add(R),T.target=R,T.castShadow=!0,this.mesh.add(T)}buildSwiftZModel(){const t=new Ft(.7,.5,1.25),e=new Wt({color:16742912,roughness:.25,metalness:.5,flatShading:!1}),n=new q(t,e);n.castShadow=!0,n.receiveShadow=!0,n.position.y=.05,this.mesh.add(n);const s=new Ft(.64,.22,.42),r=new Wt({color:526344,roughness:.05,metalness:.95}),a=new q(s,r);a.position.set(0,.18,.45),this.mesh.add(a);const o=new Wt({color:26316,roughness:.35,metalness:.8}),c=new ae(.2,.2,.04,24);c.rotateX(Math.PI/2);const l=new q(c,o);l.position.set(0,.08,.63),this.mesh.add(l);const u=new oe({color:16777215}),p=new q(new Ft(.14,.03,.02),u);p.position.set(0,.14,.65);const h=new q(new Ft(.03,.15,.02),u);h.rotation.z=-Math.PI/4,h.position.set(0,.08,.65);const m=new q(new Ft(.14,.03,.02),u);m.position.set(0,.02,.65),this.mesh.add(p),this.mesh.add(h),this.mesh.add(m);const g=new Wt({color:15658734,roughness:.25,metalness:.45}),M=new q(new Ft(.08,.25,1.05),g);M.position.set(-.38,.02,.02),M.castShadow=!0,this.mesh.add(M);const f=new q(new Ft(.08,.25,1.05),g);f.position.set(.38,.02,.02),f.castShadow=!0,this.mesh.add(f);const d=new q(new Ft(1.5,.04,.25),e);d.position.set(0,.4,-.6),d.castShadow=!0,this.mesh.add(d);const v=new q(new Ft(.04,.25,.1),o);v.position.set(-.5,.22,-.6),this.mesh.add(v);const E=new q(new Ft(.04,.25,.1),o);E.position.set(.5,.22,-.6),this.mesh.add(E);const y=new q(new ae(.04,.04,.04,8),new Wt({color:2236962}));y.position.set(0,.3,-.3),this.mesh.add(y);const A=new q(new ae(.008,.008,.38,6),new Wt({color:16755200}));A.rotation.x=Math.PI/6,A.position.set(0,.48,-.38),this.mesh.add(A);const T=new Wt({color:48340,roughness:.35,metalness:.8}),R=new q(new Ft(.6,.1,.16),T);R.rotation.z=-Math.PI/12,R.position.set(-.52,-.15,-.1),R.castShadow=!0,this.mesh.add(R);const _=new q(new Ft(.6,.1,.16),T);_.rotation.z=Math.PI/12,_.position.set(.52,-.15,-.1),_.castShadow=!0,this.mesh.add(_);const b=new ae(.2,.24,.65,16);b.rotateX(Math.PI/2);const L=new Wt({color:15658734,roughness:.25,metalness:.5,flatShading:!1}),C=new Wt({color:16742912,roughness:.2}),N=new fe,k=new q(b,L);k.castShadow=!0,k.receiveShadow=!0,N.add(k);const X=new q(new ae(.23,.23,.08,16),C);X.geometry.rotateX(Math.PI/2),X.position.set(0,0,.32),N.add(X),N.position.set(-.95,-.22,-.1),this.mesh.add(N),this.thrusters.push(N);const U=new fe,z=new q(b,L);z.castShadow=!0,U.add(z);const B=new q(new ae(.23,.23,.08,16),C);B.geometry.rotateX(Math.PI/2),B.position.set(0,0,.32),U.add(B),U.position.set(.95,-.22,-.1),this.mesh.add(U),this.thrusters.push(U);const j=new Wt({color:16758528,roughness:.2,metalness:.5}),$=new q(new Ft(.08,.65,.16),j);$.rotation.z=Math.PI/4,$.position.set(-.24,.3,.05),$.castShadow=!0,N.add($);const tt=new q(new Ft(.05,.35,.12),j);tt.rotation.z=-Math.PI/6,tt.position.set(-.16,-.26,-.05),tt.castShadow=!0,N.add(tt);const st=new q(new Ft(.08,.65,.16),j);st.rotation.z=-Math.PI/4,st.position.set(.24,.3,.05),st.castShadow=!0,U.add(st);const gt=new q(new Ft(.05,.35,.12),j);gt.rotation.z=Math.PI/6,gt.position.set(.16,-.26,-.05),gt.castShadow=!0,U.add(gt);const zt=new Qe(.12,.45,12);zt.rotateX(-Math.PI/2);const Xt=new oe({color:3800852,transparent:!0,opacity:.8}),Ut=new q(zt,Xt);Ut.position.set(0,0,-.42),N.add(Ut),this.flameMats.push(Xt);const J=new q(zt,Xt);J.position.set(0,0,-.42),U.add(J);const ht=new bs(3800852,8,40,Math.PI/4,.5,1);ht.position.set(0,0,.6);const G=new ce;G.position.set(0,0,16),this.mesh.add(G),ht.target=G,ht.castShadow=!0,this.mesh.add(ht)}buildInterceptorModel(){const t=new ae(.65,.68,.12,24);t.rotateX(Math.PI/2);const e=new Wt({color:15658734,roughness:.2,metalness:.7,flatShading:!1}),n=new q(t,e);n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const s=new Wt({color:65382,emissive:65382,emissiveIntensity:1.2,roughness:.1}),r=new q(new Bn(.46,.05,12,32),s);r.rotation.x=Math.PI/2,r.position.y=.08,this.mesh.add(r);const a=new Wt({color:65382,emissive:65382,emissiveIntensity:.9,transparent:!0,opacity:.85}),o=new q(new je(.24,16,16),a);this.mesh.add(o);const c=new Qe(.28,.6,16);c.rotateX(Math.PI/2);const l=new q(c,e);l.position.set(0,0,.68),l.castShadow=!0,this.mesh.add(l);const u=new q(new Ft(.08,.1,.4),s);u.position.set(0,.08,.52),this.mesh.add(u);const p=new Qe(.18,.75,16);p.rotateX(-Math.PI/2);const h=new q(p,e);h.position.set(0,-.04,-.65),h.castShadow=!0,this.mesh.add(h);const m=new Wt({color:52292,roughness:.3,metalness:.6,flatShading:!1}),g=new q(new Ft(.35,.03,.16),m);g.rotation.y=Math.PI/4,g.position.set(-.22,-.04,-.6),g.castShadow=!0,this.mesh.add(g);const M=new q(new Ft(.35,.03,.16),m);M.rotation.y=-Math.PI/4,M.position.set(.22,-.04,-.6),M.castShadow=!0,this.mesh.add(M);const f=new fe,d=new q(new Ft(.52,.06,.28),e);d.position.set(-.48,0,-.05),d.castShadow=!0,f.add(d);const v=new q(new Ft(.08,.16,.75),m);v.position.set(-.76,0,-.05),v.castShadow=!0,f.add(v),this.mesh.add(f);const E=new fe,y=new q(new Ft(.52,.06,.28),e);y.position.set(.48,0,-.05),y.castShadow=!0,E.add(y);const A=new q(new Ft(.08,.16,.75),m);A.position.set(.76,0,-.05),A.castShadow=!0,E.add(A),this.mesh.add(E);const T=new ae(.12,.15,.55,16);T.rotateX(Math.PI/2);const R=new Wt({color:14540253,roughness:.3,metalness:.8}),_=new fe,b=new q(T,R);b.castShadow=!0,_.add(b),_.position.set(-1.08,0,0),this.mesh.add(_),this.thrusters.push(_);const L=new fe,C=new q(T,R);C.castShadow=!0,L.add(C),L.position.set(1.08,0,0),this.mesh.add(L),this.thrusters.push(L);const N=new Qe(.09,.38,12);N.rotateX(-Math.PI/2);const k=new oe({color:65382,transparent:!0,opacity:.8}),X=new q(N,k);X.position.set(0,0,-.35),_.add(X),this.flameMats.push(k);const U=new q(N,k);U.position.set(0,0,-.35),L.add(U);const z=new Ft(.18,.04,.04),B=new oe({color:65382}),j=new q(z,B);j.position.set(0,.06,.72),this.mesh.add(j);const $=new bs(65382,8,40,Math.PI/4,.5,1);$.position.set(0,0,.65);const tt=new ce;tt.position.set(0,0,16),this.mesh.add(tt),$.target=tt,$.castShadow=!0,this.mesh.add($)}buildXenoCargoModel(){const t=new Wt({color:1920335,roughness:.45,metalness:.45,flatShading:!1}),e=new Ft(.62,.46,1.35),n=new q(e,t);n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const s=new Ft(.46,.28,.4),r=new Wt({color:16746496,emissive:16733440,emissiveIntensity:.5,roughness:.15,transparent:!0,opacity:.9}),a=new q(s,r);a.position.set(0,.18,.48),a.castShadow=!0,this.mesh.add(a);const o=new Wt({color:2963272,roughness:.4,metalness:.7}),c=new q(new Ft(.04,.18,.8),o);c.position.set(-.33,0,.05),this.mesh.add(c);const l=new q(new Ft(.04,.18,.8),o);l.position.set(.33,0,.05),this.mesh.add(l);const u=new Wt({color:16755200,roughness:.35,metalness:.5}),p=new q(new Ft(.12,.03,.25),u);p.position.set(-.14,.25,-.15),this.mesh.add(p);const h=new q(new Ft(.12,.03,.25),u);h.position.set(.14,.25,-.15),this.mesh.add(h);const m=new q(new Ft(1.9,.06,.32),t);m.position.set(0,-.05,-.1),m.castShadow=!0,this.mesh.add(m);const g=new ae(.24,.24,.62,16);g.rotateX(Math.PI/2);const M=new Wt({color:1712172,roughness:.35,metalness:.75}),f=new fe,d=new q(g,M);d.castShadow=!0,f.add(d);const v=new q(new ae(.22,.22,.05,16),u);v.geometry.rotateX(Math.PI/2),v.position.set(0,0,.3),f.add(v);const E=new q(new ae(.06,.06,.08,8),o);E.geometry.rotateX(Math.PI/2),E.position.set(0,0,.32),f.add(E);const y=new Ft(.18,.02,.02);for(let tt=0;tt<4;tt++){const st=new q(y,o);st.position.set(0,0,.32),st.rotation.z=Math.PI/4*tt,f.add(st)}f.position.set(-1.12,-.05,-.1),this.mesh.add(f),this.thrusters.push(f);const A=new fe,T=new q(g,M);T.castShadow=!0,A.add(T);const R=new q(new ae(.22,.22,.05,16),u);R.geometry.rotateX(Math.PI/2),R.position.set(0,0,.3),A.add(R);const _=new q(new ae(.06,.06,.08,8),o);_.geometry.rotateX(Math.PI/2),_.position.set(0,0,.32),A.add(_);for(let tt=0;tt<4;tt++){const st=new q(y,o);st.position.set(0,0,.32),st.rotation.z=Math.PI/4*tt,A.add(st)}A.position.set(1.12,-.05,-.1),this.mesh.add(A),this.thrusters.push(A);const b=new Qe(.14,.42,12);b.rotateX(-Math.PI/2);const L=new oe({color:16729344,transparent:!0,opacity:.8}),C=new q(b,L);C.position.set(0,0,-.38),f.add(C),this.flameMats.push(L);const N=new q(b,L);N.position.set(0,0,-.38),A.add(N);const k=new q(new Ft(.72,.03,.2),t);k.position.set(0,.1,-.7),k.castShadow=!0,this.mesh.add(k);const X=new q(new Ft(.04,.26,.2),t);X.position.set(0,.24,-.7),X.castShadow=!0,this.mesh.add(X);const U=new Ft(.2,.04,.04),z=new oe({color:16758528}),B=new q(U,z);B.position.set(0,-.12,.68),this.mesh.add(B);const j=new bs(16753920,8,40,Math.PI/4,.5,1);j.position.set(0,0,.68);const $=new ce;$.position.set(0,0,16),this.mesh.add($),j.target=$,j.castShadow=!0,this.mesh.add(j)}update(t,e,n,s){let r=!1,a=!1;(e[" "]||e.q||e.arrowup)&&(this.velocity+=this.acceleration*t,r=!0),(e.shift||e.e||e.arrowdown)&&(this.velocity-=this.deceleration*t,a=!0),!r&&!a&&(this.velocity*=this.drag,Math.abs(this.velocity)<.05&&(this.velocity=0)),this.velocity=es.clamp(this.velocity,-this.maxSpeed*.4,this.maxSpeed);let o=!1;e.w&&(this.controlledPitch+=1.8*t,o=!0),e.s&&(this.controlledPitch-=1.8*t,o=!0),o||(this.controlledPitch-=this.controlledPitch*2.2*t,Math.abs(this.controlledPitch)<.01&&(this.controlledPitch=0));let c=!1;(e.a||e.arrowleft)&&(this.rotationY+=1.8*t,this.controlledRoll+=(.35-this.controlledRoll)*8*t,c=!0),(e.d||e.arrowright)&&(this.rotationY-=1.8*t,this.controlledRoll+=(-.35-this.controlledRoll)*8*t,c=!0),c||(this.controlledRoll-=this.controlledRoll*6*t,Math.abs(this.controlledRoll)<.01&&(this.controlledRoll=0)),this.controlledRoll=es.clamp(this.controlledRoll,-.45,.45);const l=Math.cos(this.controlledPitch),u=Math.sin(this.rotationY)*l*this.velocity*t,p=Math.cos(this.rotationY)*l*this.velocity*t,h=Math.sin(this.controlledPitch)*this.velocity*t;this.position.x+=u,this.position.z+=p,this.position.y+=h;const m=xe(this.position.x,this.position.z)+1.4;this.position.y<m&&(this.position.y=m);const g=this.position.x+Math.sin(this.rotationY)*1.2,M=this.position.z+Math.cos(this.rotationY)*1.2,f=this.position.x-Math.sin(this.rotationY)*1.2,d=this.position.z-Math.cos(this.rotationY)*1.2,v=xe(g,M),E=xe(f,d),y=-Math.atan2(v-E,2.4),A=this.position.x+Math.sin(this.rotationY+Math.PI/2)*1.2,T=this.position.z+Math.cos(this.rotationY+Math.PI/2)*1.2,R=this.position.x-Math.sin(this.rotationY+Math.PI/2)*1.2,_=this.position.z-Math.cos(this.rotationY+Math.PI/2)*1.2,b=xe(A,T),L=xe(R,_),C=Math.atan2(b-L,2.4),N=Math.max(0,Math.min(1,(this.position.y-m)/5)),k=es.lerp(y,0,N),X=es.lerp(C,0,N),U=this.controlledPitch+k;this.pitch+=(U-this.pitch)*.12;const z=this.controlledRoll+X;this.roll+=(z-this.roll)*.15;const B=Math.sin(s*3.5)*.08;if(this.mesh.position.copy(this.position),this.mesh.position.y+=B,this.mesh.rotation.set(this.pitch,this.rotationY,this.roll,"YXZ"),this.thrusters&&this.thrusters.length>=2){const j=this.thrusters[0],$=this.thrusters[1],tt=Math.abs(this.velocity)/this.maxSpeed*.8+.5+Math.sin(s*40)*.15;this.flameMats.forEach(gt=>{gt.opacity=r?.95:.4,j.scale.set(1,1,r?tt:.5),$.scale.set(1,1,r?tt:.5)});const st=r?.15:a?-.15:0;j.rotation.x+=(st-j.rotation.x)*.1,$.rotation.x+=(st-$.rotation.x)*.1}}checkRampIntersection(t){const e=t.width/2,n=t.depth/2;return this.position.x>=t.position.x-e&&this.position.x<=t.position.x+e&&this.position.z>=t.position.z-n&&this.position.z<=t.position.z+n}teleportTo(t,e,n=0){const s=xe(t,e);this.position.set(t,s+1.4,e),this.velocity=0,this.rotationY=n,this.steerAngle=0,this.pitch=0,this.roll=0,this.mesh.position.copy(this.position),this.mesh.rotation.set(0,this.rotationY,0)}}class Om{constructor(){this.ctx=null,this.muted=!0,this.masterVolume=null,this.savedVolume=.3,this.ambientOsc=null,this.ambientGain=null,this.engineOsc1=null,this.engineOsc2=null,this.engineLowpass=null,this.engineGain=null,this.warpOsc=null,this.warpLFO=null,this.warpLFOGain=null,this.warpGain=null,this.noiseSource=null,this.noiseFilter=null,this.noiseGain=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterVolume=this.ctx.createGain(),this.masterVolume.gain.value=this.savedVolume,this.masterVolume.connect(this.ctx.destination))}setVolume(t){const e=Math.max(0,Math.min(1,parseFloat(t)));this.savedVolume=e,this.masterVolume&&this.ctx&&this.masterVolume.gain.setValueAtTime(e,this.ctx.currentTime)}setMute(t){var e,n,s,r;this.muted=t,this.muted?(this.ambientGain&&this.ambientGain.gain.setValueAtTime(0,((e=this.ctx)==null?void 0:e.currentTime)||0),this.engineGain&&this.engineGain.gain.setValueAtTime(0,((n=this.ctx)==null?void 0:n.currentTime)||0),this.noiseGain&&this.noiseGain.gain.setValueAtTime(0,((s=this.ctx)==null?void 0:s.currentTime)||0),this.warpGain&&this.warpGain.gain.setValueAtTime(0,((r=this.ctx)==null?void 0:r.currentTime)||0)):(this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ambientGain?this.ambientGain.gain.setValueAtTime(.02,this.ctx.currentTime):this.startAmbientHum(),this.engineGain&&this.noiseGain&&this.warpGain?(this.engineGain.gain.setValueAtTime(.02,this.ctx.currentTime),this.noiseGain.gain.setValueAtTime(.02,this.ctx.currentTime),this.warpGain.gain.setValueAtTime(.015,this.ctx.currentTime)):this.startDroneSound())}playClick(){if(this.muted||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(300,t+.05),n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.01,t+.05),e.connect(n),n.connect(this.masterVolume),e.start(t),e.stop(t+.06)}playHover(){if(this.muted||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,t),e.frequency.setValueAtTime(950,t+.015),n.gain.setValueAtTime(.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.03),e.connect(n),n.connect(this.masterVolume),e.start(t),e.stop(t+.031)}playBoot(){if(this.init(),this.muted||!this.ctx)return;const t=this.ctx.currentTime;[261.63,329.63,392,523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=t+s*.07,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(.15,r),o.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(o),o.connect(this.masterVolume),a.start(r),a.stop(r+.15)})}playError(){if(this.muted||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),s=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(110,t),n.type="square",n.frequency.setValueAtTime(113,t),s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(s),n.connect(s),s.connect(this.masterVolume),e.start(t),n.start(t),e.stop(t+.26),n.stop(t+.26)}playSuccess(){if(this.muted||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(523.25,t),e.frequency.setValueAtTime(659.25,t+.1),e.frequency.setValueAtTime(783.99,t+.2),e.frequency.exponentialRampToValueAtTime(1046.5,t+.4),n.gain.setValueAtTime(.15,t),n.gain.setValueAtTime(.15,t+.2),n.gain.exponentialRampToValueAtTime(.001,t+.5),e.connect(n),n.connect(this.masterVolume),e.start(t),e.stop(t+.55)}startAmbientHum(){if(this.muted||!this.ctx||this.ambientOsc)return;const t=this.ctx.currentTime;this.ambientOsc=this.ctx.createOscillator(),this.ambientGain=this.ctx.createGain(),this.ambientOsc.type="sine",this.ambientOsc.frequency.value=55,this.ambientGain.gain.setValueAtTime(.02,t),this.ambientOsc.connect(this.ambientGain),this.ambientGain.connect(this.masterVolume),this.ambientOsc.start(t)}startDroneSound(){if(this.muted||!this.ctx||this.engineOsc1)return;const t=this.ctx.currentTime;this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.value=58,this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.value=59.2,this.engineLowpass=this.ctx.createBiquadFilter(),this.engineLowpass.type="lowpass",this.engineLowpass.frequency.value=160,this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,t),this.engineOsc1.connect(this.engineLowpass),this.engineOsc2.connect(this.engineLowpass),this.engineLowpass.connect(this.engineGain),this.engineGain.connect(this.masterVolume),this.warpOsc=this.ctx.createOscillator(),this.warpOsc.type="sine",this.warpOsc.frequency.value=135,this.warpLFO=this.ctx.createOscillator(),this.warpLFO.type="sine",this.warpLFO.frequency.value=11,this.warpLFOGain=this.ctx.createGain(),this.warpLFOGain.gain.value=32,this.warpGain=this.ctx.createGain(),this.warpGain.gain.setValueAtTime(0,t),this.warpLFO.connect(this.warpLFOGain),this.warpLFOGain.connect(this.warpOsc.frequency),this.warpOsc.connect(this.warpGain),this.warpGain.connect(this.masterVolume);const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;this.noiseSource=this.ctx.createBufferSource(),this.noiseSource.buffer=n,this.noiseSource.loop=!0,this.noiseFilter=this.ctx.createBiquadFilter(),this.noiseFilter.type="bandpass",this.noiseFilter.Q.value=4.2,this.noiseFilter.frequency.value=240,this.noiseGain=this.ctx.createGain(),this.noiseGain.gain.setValueAtTime(0,t),this.noiseSource.connect(this.noiseFilter),this.noiseFilter.connect(this.noiseGain),this.noiseGain.connect(this.masterVolume),this.engineOsc1.start(t),this.engineOsc2.start(t),this.warpOsc.start(t),this.warpLFO.start(t),this.noiseSource.start(t)}updateDroneSound(t){if(this.muted||!this.ctx||(this.engineOsc1||this.startDroneSound(),!this.engineOsc1))return;const e=this.ctx.currentTime,n=58+t*77;this.engineOsc1.frequency.setTargetAtTime(n,e,.1),this.engineOsc2.frequency.setTargetAtTime(n+1.2,e,.1);const s=160+t*220;this.engineLowpass.frequency.setTargetAtTime(s,e,.1);const r=.02+t*.04;this.engineGain.gain.setTargetAtTime(r,e,.1);const a=135+t*225;this.warpOsc.frequency.setTargetAtTime(a,e,.1);const o=11+t*13;this.warpLFO.frequency.setTargetAtTime(o,e,.1);const c=.015+t*.02;this.warpGain.gain.setTargetAtTime(c,e,.1);const l=240+t*810;this.noiseFilter.frequency.setTargetAtTime(l,e,.15);const u=4.2-t*1.2;this.noiseFilter.Q.setTargetAtTime(u,e,.15);const p=.02+t*.08;this.noiseGain.gain.setTargetAtTime(p,e,.1)}playTeleport(){if(this.muted||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),s=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(300,t),e.frequency.exponentialRampToValueAtTime(1800,t+.35),n.type="triangle",n.frequency.setValueAtTime(150,t),n.frequency.exponentialRampToValueAtTime(900,t+.35),s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.18,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.4),e.connect(s),n.connect(s),s.connect(this.masterVolume),e.start(t),n.start(t),e.stop(t+.42),n.stop(t+.42)}playCrystalHit(t){if(this.muted||!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine";const r=1200+Math.random()*800;n.frequency.setValueAtTime(r,e),n.frequency.exponentialRampToValueAtTime(r*.1,e+.18);const a=Math.min(.05+t*.12,.25);s.gain.setValueAtTime(a,e),s.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(s),s.connect(this.masterVolume),n.start(e),n.stop(e+.2)}playZoneSync(t){if(this.muted||!this.ctx)return;const e=this.ctx.currentTime;(t==="contact"?[392,587,880]:[523,659,1046]).forEach((s,r)=>{const a=e+r*.08,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(s,a),o.frequency.setValueAtTime(s*1.5,a+.05),c.gain.setValueAtTime(.08,a),c.gain.exponentialRampToValueAtTime(.001,a+.15),o.connect(c),c.connect(this.masterVolume),o.start(a),o.stop(a+.16)})}}const Me=new Om;class Bm{constructor(){this.group=new fe,this.ramps=[],this.crystals=[],this.projectZones=[],this.contactZone=null,this.mushrooms=[],this.treeLights=[],this.runicRings=[],this.flowerLights=[],this.portalDebris=[],this.portalRingMat=null,this.portalCoreMat=null,this.portalInnerCoreMat=null,this.portalLight=null,this.grassMesh=null,this.grassCount=35e3,this.grassPositions=null,this.grassScales=null,this.grassYaws=null,this.leafMesh=null,this.leafCount=9*150,this.leafPositions=null,this.leafRotations=null,this.leafScales=null,this.leafSeeds=null,this.sporeParticles=null,this.sporeCount=200,this.sporePositions=[],this.sporeVelocities=[],this.onEnterZone=()=>{},this.init()}init(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#1b2d2d",e.fillRect(0,0,128,128),e.strokeStyle="rgba(30, 144, 255, 0.25)",e.lineWidth=2,e.strokeRect(0,0,128,128),e.strokeStyle="rgba(0, 255, 127, 0.12)",e.lineWidth=1,e.strokeRect(32,32,64,64);const n=new No(t);n.wrapS=Zi,n.wrapT=Zi,n.repeat.set(125,125);const s=new wn(250,250,96,96),r=s.attributes.position;for(let rt=0;rt<r.count;rt++){const At=r.getX(rt),ct=r.getY(rt),Ot=xe(At,ct);r.setZ(rt,Ot)}s.computeVertexNormals();const a=new Wt({map:n,roughness:.9,metalness:.3}),o=new q(s,a);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.group.add(o);const c=new Wt({color:1314344,roughness:.85,metalness:.2,flatShading:!0}),l=new oe({color:16711935,transparent:!0,opacity:.85,blending:ln}),u=(rt,At,ct=1)=>{const Ot=new fe,P=xe(rt,At),Jt=new ae(5*ct,6*ct,1.2,5),It=new q(Jt,c);It.position.y=.6,It.rotation.y=Math.random()*Math.PI,It.castShadow=!0,It.receiveShadow=!0,Ot.add(It);const jt=new Bn(4.2*ct,.12,4,16);jt.rotateX(Math.PI/2);const mt=new q(jt,l);mt.position.y=1.2,Ot.add(mt);const he=new ae(3.5*ct,4.2*ct,.9,5),w=new q(he,c);w.position.y=1.65,w.rotation.y=Math.random()*Math.PI,w.castShadow=!0,w.receiveShadow=!0,Ot.add(w);const x=new Bn(2.8*ct,.1,4,16);x.rotateX(Math.PI/2);const O=new q(x,l);O.position.y=2.1,Ot.add(O);const K=new ae(2.2*ct,2.8*ct,.7,5),et=new q(K,c);et.position.y=2.45,et.rotation.y=Math.random()*Math.PI,et.castShadow=!0,et.receiveShadow=!0,Ot.add(et),Ot.position.set(rt,P-.2,At),this.group.add(Ot)};[{x:-25,z:-15,scale:1.4},{x:30,z:-35,scale:1.6},{x:-35,z:25,scale:1.2},{x:40,z:20,scale:1.5},{x:-10,z:-40,scale:1.3},{x:20,z:45,scale:1.5}].forEach(rt=>u(rt.x,rt.z,rt.scale));const h=(rt,At,ct=1)=>{const Ot=new Qe(2.5,20*ct,4),P=new q(Ot,c),Jt=xe(rt,At);P.position.set(rt,Jt+10*ct-1.5,At),P.rotation.y=Math.random()*Math.PI,P.rotation.x=(Math.random()-.5)*.08,P.rotation.z=(Math.random()-.5)*.08,P.castShadow=!0,P.receiveShadow=!0,this.group.add(P)};[{x:-55,z:-45,scale:1.2},{x:55,z:-55,scale:1.4},{x:-60,z:50,scale:1.5},{x:65,z:45,scale:1.3},{x:-80,z:-20,scale:1.6},{x:80,z:-10,scale:1.4},{x:-75,z:75,scale:1.7},{x:75,z:70,scale:1.5},{x:-100,z:-80,scale:1.8},{x:90,z:-90,scale:1.6},{x:-95,z:95,scale:1.9},{x:100,z:90,scale:1.7},{x:0,z:-95,scale:1.5},{x:-110,z:10,scale:1.8},{x:110,z:-20,scale:1.7}].forEach(rt=>h(rt.x,rt.z,rt.scale));const g=new Ba(2,0),M=new Wt({color:3359061,roughness:.9,flatShading:!0});[{x:-15,z:25},{x:-35,z:-10},{x:30,z:-25},{x:-28,z:32},{x:25,z:-5},{x:-8,z:25},{x:35,z:35},{x:-40,z:-35},{x:42,z:-15}].forEach(rt=>{const At=new q(g,M),ct=xe(rt.x,rt.z);At.position.set(rt.x,ct-.4,rt.z),At.scale.set(1+Math.random()*.8,.8+Math.random()*1.5,1+Math.random()*.8),At.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),At.castShadow=!0,At.receiveShadow=!0,this.group.add(At)});const d=new Jn(.2,0),v=new Ft(.3,.15,.3),E=new Wt({color:1976635,roughness:.9}),y=new Wt({color:61695,emissive:61695,emissiveIntensity:.8,roughness:.1});for(let rt=0;rt<25;rt++){const At=(Math.random()-.5)*85,ct=(Math.random()-.5)*85;if(Math.abs(At)<5&&Math.abs(ct)<5)continue;const Ot=Math.random()>.6;let P;Ot?(P=new q(d,y),P.scale.set(1,1+Math.random()*.5,1)):P=new q(v,E);const Jt=xe(At,ct);P.position.set(At,Jt+.08,ct),P.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),P.castShadow=!0,this.group.add(P)}const A=new qi(3.8,16),T=new Wt({color:61695,emissive:23690,emissiveIntensity:.5,transparent:!0,opacity:.6,roughness:.05,metalness:.95});[{x:18,z:-15},{x:-22,z:-12},{x:-14,z:20},{x:28,z:-28}].forEach(rt=>{const At=new q(A,T);At.rotation.x=-Math.PI/2;const ct=xe(rt.x,rt.z);At.position.set(rt.x,ct+.05,rt.z),At.receiveShadow=!0,this.group.add(At)}),this.createMagneticRamp(0,-10,6,12,1.8);const _=new Jn(.65,0),b=new Wt({color:16711765,emissive:7340287,emissiveIntensity:.5,roughness:.1,metalness:.9});[{x:-6,z:-18},{x:-4.5,z:-18},{x:-3,z:-18},{x:-5.25,z:-19.5},{x:-3.75,z:-19.5},{x:-5.25,z:-18,y:1.2},{x:-3.75,z:-18,y:1.2},{x:-4.5,z:-18.75,y:2.2}].forEach(rt=>{const At=new q(_,b),ct=xe(rt.x,rt.z);At.position.set(rt.x,ct+(rt.y||.6),rt.z),At.castShadow=!0,At.receiveShadow=!0,this.group.add(At),this.crystals.push({mesh:At,pos:At.position.clone(),vel:new I,rot:new I,rotVel:new I,width:1.3,height:1.3,depth:1.3,mass:1})});const C=new ae(.1,.2,1.2,5),N=new je(.8,12,8,0,Math.PI*2,0,Math.PI/2),k=new Wt({color:1579044,roughness:.8}),X=new Wt({color:16711765,emissive:16711765,emissiveIntensity:.6,roughness:.2});[{x:-25,z:20},{x:-28,z:18},{x:-23,z:24},{x:-30,z:25},{x:-20,z:15},{x:-24,z:14}].forEach((rt,At)=>{const ct=new fe,Ot=new q(C,k);Ot.position.y=.6,Ot.castShadow=!0,ct.add(Ot);const P=new q(N,X);P.scale.set(1,.5,1),P.position.y=1.2,P.castShadow=!0,ct.add(P);const Jt=new On(16711765,1.2,5,1.5);Jt.position.set(0,1.2,0),ct.add(Jt);const It=xe(rt.x,rt.z);ct.position.set(rt.x,It,rt.z);const jt=.8+Math.random()*.5;ct.scale.set(jt,jt,jt),this.group.add(ct),this.mushrooms.push({mesh:ct,light:Jt,seed:At*2})});const z=25,B=20;this.leafPositions=new Float32Array(this.leafCount*3),this.leafRotations=new Float32Array(this.leafCount*3),this.leafScales=new Float32Array(this.leafCount*3),this.leafSeeds=new Float32Array(this.leafCount);const j=[16711807,16735910,16747186,16196997],$=new Gt,tt=new ce,st=new wn(.24,.17),gt=new Wt({color:16777215,emissive:16711807,emissiveIntensity:.2,roughness:.5,metalness:.1,flatShading:!0,side:Pe});this.leafMesh=new Ro(st,gt,this.leafCount),this.leafMesh.castShadow=!0,this.leafMesh.receiveShadow=!0;for(let rt=0;rt<9;rt++){const At=rt/9*Math.PI*2,ct=5+Math.random()*3,Ot=z+Math.cos(At)*ct,P=B+Math.sin(At)*ct,Jt=xe(Ot,P),It=new fe,jt=1.3+Math.random()*1.3,mt=.08+Math.random()*.12,he=new q(new ae(mt*.6,mt,jt,5),k);he.position.y=jt/2,he.castShadow=!0,It.add(he);const w=new On(16711840,.8+Math.random()*.8,5+Math.random()*4,1.2);w.position.set(0,jt+.2,0),It.add(w),this.treeLights.push({light:w,seed:rt*1.5}),It.position.set(Ot,Jt,P),this.group.add(It);const x=Ot,O=Jt+jt+.2,K=P,et=.7+Math.random()*.8,lt=.5+Math.random()*.45,ft=.7+Math.random()*.7,Z=.7+Math.random()*.7;for(let Q=0;Q<150;Q++){const ut=rt*150+Q,Et=Math.random(),dt=Math.random(),ot=Et*2*Math.PI,Nt=Math.acos(2*dt-1),Bt=.1+Math.random()*et,Qt=x+Bt*Math.sin(Nt)*Math.cos(ot)*ft,D=O+Bt*Math.sin(Nt)*Math.sin(ot)*lt,at=K+Bt*Math.cos(Nt)*Z;this.leafPositions[ut*3]=Qt,this.leafPositions[ut*3+1]=D,this.leafPositions[ut*3+2]=at;const Y=new ce;Y.position.set(Qt,D,at),Y.lookAt(x,O,K),Y.rotation.y+=Math.PI+(Math.random()-.5)*1,Y.rotation.x+=(Math.random()-.5)*1,Y.rotation.z+=(Math.random()-.5)*1.5,this.leafRotations[ut*3]=Y.rotation.x,this.leafRotations[ut*3+1]=Y.rotation.y,this.leafRotations[ut*3+2]=Y.rotation.z;const _t=.7+Math.random()*.7;this.leafScales[ut*3]=_t,this.leafScales[ut*3+1]=_t,this.leafScales[ut*3+2]=_t,this.leafSeeds[ut]=Math.random()*100,tt.position.set(Qt,D,at),tt.rotation.copy(Y.rotation),tt.scale.set(_t,_t,_t),tt.updateMatrix(),this.leafMesh.setMatrixAt(ut,tt.matrix),$.setHex(j[Math.floor(Math.random()*j.length)]),this.leafMesh.setColorAt(ut,$)}}this.group.add(this.leafMesh);const zt=[{x:-10,z:-8},{x:12,z:8},{x:-5,z:18},{x:18,z:-5},{x:-16,z:-24},{x:8,z:-15}],Xt=new ae(.04,.05,1.5,4),Ut=new je(.18,8,8),J=new oe({color:16711765});zt.forEach((rt,At)=>{const ct=new fe,Ot=new q(Xt,k);Ot.position.y=.75,Ot.rotation.z=.15,ct.add(Ot);const P=new q(Ut,J);P.position.set(-.1,1.5,0),ct.add(P);const Jt=new On(16711765,1,4,2);Jt.position.set(-.1,1.5,0),ct.add(Jt),this.flowerLights.push({light:Jt,seed:At*3});const It=xe(rt.x,rt.z);ct.position.set(rt.x,It,rt.z),this.group.add(ct)}),this.createSignBoard("XENO_EXPLORER // EXPEDITION BIO",["EXPEDITION LEADER: BHANU","SPECIALIZATION: GRAPHICS & SIM ENGINES","DATA FILES: Blending computational mechanics","with high-fidelity visual representations.","Procedural mathematical vector grids generated","completely inside memory sockets."],-18,12,10,6,61695),this.createSignBoard("TECH // CELLULAR CONSTELLATION",["ENGINES: Unity 3D, Unreal Engine 5, Godot","LANGUAGES: C++, C#, JS (ES6), GLSL Shaders, Python","WebGL CORE: Three.js Rendering, Web Audio Synth","UTILITIES: Blender Modeling, Git, Vite"],18,18,8,5,5550900),this.projectPortal=this.createProjectPortal(0,-32);const ht=new fe,G=new q(new ae(.1,.5,6,6),k);G.position.y=3,G.castShadow=!0,ht.add(G);const nt=new Bn(1,.08,6,18);nt.rotateX(Math.PI/2);const St=new oe({color:61695,transparent:!0,opacity:.8});this.energyRing=new q(nt,St),this.energyRing.position.y=6.2,ht.add(this.energyRing);const yt=new q(new Qe(.15,1.2,5),new oe({color:16711765}));yt.position.y=6.2,ht.add(yt);const qt=xe(0,35);ht.position.set(0,qt,35),this.group.add(ht);const bt=new za(3.5,3.7,32);bt.rotateX(-Math.PI/2);const Kt=new oe({color:61695,transparent:!0,opacity:.6,side:Pe}),ee=new q(bt,Kt);ee.position.set(0,qt+.05,35),this.group.add(ee),this.contactZone={center:new I(0,qt,35),radius:3.8},this.createInstancedGrass(),this.createAtmosphericSpores()}createMagneticRamp(t,e,n,s,r){const a=Math.atan2(r,s),o=new fe,c=xe(t,e),l=new Ft(n,.2,s),u=new Wt({color:592142,roughness:.3,metalness:.8}),p=new q(l,u);p.position.set(0,r/2,0),p.rotation.x=a,p.castShadow=!0,p.receiveShadow=!0,o.add(p);const h=new oe({color:61695}),m=new q(new Ft(.1,.3,s),h);m.position.set(-n/2-.05,r/2,0),m.rotation.x=a,o.add(m);const g=new q(new Ft(.1,.3,s),h);g.position.set(n/2+.05,r/2,0),g.rotation.x=a,o.add(g);const M=new ae(.3,.3,.15,6),f=new oe({color:61695}),d=new q(M,f);d.position.set(-n/2+.5,r/2-.2,-s/2+1),d.rotation.x=a,o.add(d);const v=new q(M,f);v.position.set(n/2-.5,r/2-.2,s/2-1),v.rotation.x=a,o.add(v),o.position.set(t,c,e),this.group.add(o),this.ramps.push({position:new I(t,c,e),width:n,depth:s,height:r,angle:a})}createSignBoard(t,e,n,s,r,a,o){const c=new fe,l=xe(n,s),u=new ae(.08,.08,5,8),p=new Wt({color:1118486,roughness:.8}),h=new q(u,p);h.position.set(-r/2+.3,2.5,0),h.castShadow=!0,h.receiveShadow=!0,c.add(h);const m=new q(u,p);m.position.set(r/2-.3,2.5,0),m.castShadow=!0,m.receiveShadow=!0,c.add(m);const g=document.createElement("canvas");g.width=512,g.height=256;const M=g.getContext("2d");M.fillStyle="#0a0518",M.fillRect(0,0,512,256),M.strokeStyle=`#${o.toString(16).padStart(6,"0")}`,M.lineWidth=12,M.strokeRect(6,6,500,244),M.fillStyle="#ffffff",M.font="bold 28px Courier New",M.textAlign="center",M.fillText(t,256,55),M.fillStyle="#a5b4fc",M.font="20px Courier New",e.forEach((_,b)=>{M.fillText(_,256,110+b*30)});const f=new No(g),d=new wn(r,a),v=new oe({map:f,side:Pe,transparent:!0,opacity:.95}),E=new q(d,v);E.position.y=3.5,E.castShadow=!0,c.add(E);const y=new Ft(r+.1,a+.1,.05),A=new Wt({color:591124,emissive:o,emissiveIntensity:.15,roughness:.5,metalness:.8}),T=new q(y,A);T.position.set(0,3.5,-.04),T.castShadow=!0,c.add(T);const R=new On(o,1.5,6,1.5);R.position.set(0,2,.5),c.add(R),c.position.set(n,l,s),this.group.add(c)}createProjectPortal(t,e){const n=new fe,s=xe(t,e),r=new Wt({color:1579044,roughness:.85,metalness:.2,flatShading:!0}),a=new q(new ae(5.2,5.8,.5,8),r);a.position.y=.25,a.receiveShadow=!0,a.castShadow=!0,n.add(a);const o=new Wt({color:460554,roughness:.2,metalness:.8,flatShading:!0}),c=8,l=4.2;for(let M=0;M<c;M++){const f=M/c*Math.PI,d=Math.cos(f)*l,v=Math.sin(f)*l+.5,E=new ae(.35,.5,1.8+Math.random()*.6,5),y=new q(E,o);y.position.set(d,v,0),y.rotation.z=-f+Math.PI/2,y.castShadow=!0,y.receiveShadow=!0,n.add(y)}this.portalDebris=[];const u=new Jn(.24,0);for(let M=0;M<12;M++){const f=new q(u,o),d=M/12*Math.PI*2,v=5.2+Math.random()*1.5;f.position.set(Math.cos(d)*v,3+(Math.random()-.5)*3.5,(Math.random()-.5)*2),f.castShadow=!0,n.add(f),this.portalDebris.push({mesh:f,angle:d,radius:v,speed:.8+Math.random()*.8,yOffset:f.position.y})}const p=new Bn(3.6,.25,8,32);this.portalRingMat=new oe({color:3800852,transparent:!0,opacity:.85,blending:ln});const h=new q(p,this.portalRingMat);h.position.set(0,3.8,0),n.add(h);const m=new qi(3.4,32);this.portalCoreMat=new oe({color:3800852,transparent:!0,opacity:.65,side:Pe,blending:ln}),this.portalCore=new q(m,this.portalCoreMat),this.portalCore.position.set(0,3.8,.05),n.add(this.portalCore);const g=new qi(2.4,32);this.portalInnerCoreMat=new oe({color:65450,transparent:!0,opacity:.8,side:Pe,blending:ln}),this.portalInnerCore=new q(g,this.portalInnerCoreMat),this.portalInnerCore.position.set(0,3.8,.1),n.add(this.portalInnerCore),this.portalLight=new On(3800852,3,15,1.2),this.portalLight.position.set(0,3.8,.5),n.add(this.portalLight),n.position.set(t,s,e),this.group.add(n),this.projectZones.push({name:"portal",center:new I(t,s,e),radius:4.8})}setPortalColor(t){if(this.portalRingMat&&this.portalRingMat.color.setHex(t),this.portalCoreMat&&this.portalCoreMat.color.setHex(t),this.portalInnerCoreMat){const e=new Gt(t).addScalar(.1);this.portalInnerCoreMat.color.copy(e)}this.portalLight&&this.portalLight.color.setHex(t)}createInstancedGrass(){const t=new ve,e=new Float32Array([-.12,0,0,.12,0,0,-.08,.65,0,.08,.65,0,0,1.3,-.15]),n=new Float32Array([0,0,1,0,.1,.5,.9,.5,.5,1]),s=[0,1,3,0,3,2,2,3,4];t.setAttribute("position",new Be(e,3)),t.setAttribute("uv",new Be(n,2)),t.setIndex(s),t.computeVertexNormals();const r=new Wt({roughness:.7,metalness:.15,flatShading:!0,side:Pe});this.grassMesh=new Ro(t,r,this.grassCount),this.grassMesh.castShadow=!0,this.grassPositions=new Float32Array(this.grassCount*3),this.grassScales=new Float32Array(this.grassCount*3),this.grassYaws=new Float32Array(this.grassCount);const a=[65407,3407769,55404,386432,2003199,3842559,31974,45311],o=new Gt,c=new ce;let l=0;for(;l<this.grassCount;){const u=(Math.random()-.5)*88,p=(Math.random()-.5)*88;if(Math.sqrt(u*u+p*p)<6.5)continue;const m=xe(u,p);this.grassPositions[l*3]=u,this.grassPositions[l*3+1]=m,this.grassPositions[l*3+2]=p;const g=.8+Math.random()*.8,M=.7+Math.random()*.6;this.grassScales[l*3]=M,this.grassScales[l*3+1]=g,this.grassScales[l*3+2]=M;const f=Math.random()*Math.PI*2;this.grassYaws[l]=f,c.position.set(u,m,p),c.rotation.set(0,f,0),c.scale.set(M,g,M),c.updateMatrix(),this.grassMesh.setMatrixAt(l,c.matrix),o.setHex(a[Math.floor(Math.random()*a.length)]),this.grassMesh.setColorAt(l,o),l++}this.group.add(this.grassMesh)}createAtmosphericSpores(){const t=new ve,e=new Float32Array(this.sporeCount*3);for(let s=0;s<this.sporeCount;s++){const r=(Math.random()-.5)*80,a=(Math.random()-.5)*80,c=xe(r,a)+.5+Math.random()*7.5;e[s*3]=r,e[s*3+1]=c,e[s*3+2]=a,this.sporeVelocities.push({x:(Math.random()-.5)*.4,y:(Math.random()-.5)*.3,z:(Math.random()-.5)*.4})}t.setAttribute("position",new Be(e,3));const n=new Oa({size:.22,color:61695,transparent:!0,opacity:.75,blending:ln,depthWrite:!1});this.sporeParticles=new Fc(t,n),this.group.add(this.sporeParticles)}update(t,e,n){if(this.energyRing&&(this.energyRing.rotation.y=e*.8,this.energyRing.scale.set(1+Math.sin(e*5)*.1,1+Math.sin(e*5)*.1,1)),this.runicRings.forEach((r,a)=>{const o=a%2===0?1:-1;r.rotation.y=e*.6*o,r.position.y=6.8+Math.sin(e*2+a)*.08}),this.mushrooms.forEach(r=>{r.mesh.position.y=xe(r.mesh.position.x,r.mesh.position.z)+Math.sin(e+r.seed)*.05,r.light.intensity=.8+Math.sin(e*3+r.seed)*.4}),this.treeLights.forEach(r=>{r.light.intensity=.8+Math.sin(e*2+r.seed)*.3}),this.flowerLights.forEach(r=>{r.light.intensity=.6+Math.sin(e*4+r.seed)*.4}),this.grassMesh){const r=new ce,a=n?n.position:null,o=!!a;for(let c=0;c<this.grassCount;c++){const l=c*3,u=this.grassPositions[l],p=this.grassPositions[l+1],h=this.grassPositions[l+2],m=this.grassScales[l],g=this.grassScales[l+1],M=this.grassYaws[c],f=Math.sin(e*2.5+u*.15+h*.12)*.09;let d=0,v=0,E=1;if(o){const y=u-a.x,A=h-a.z,T=y*y+A*A,R=4.2,_=R*R;if(T<_){const L=1-Math.sqrt(T)/R,C=Math.atan2(A,y||1e-4);d=-Math.sin(C)*L*1,v=Math.cos(C)*L*1,E=1-L*.35}}r.position.set(u,p,h),r.rotation.set(f*.4+d,M,f+v,"YXZ"),r.scale.set(m,g*E,m),r.updateMatrix(),this.grassMesh.setMatrixAt(c,r.matrix)}this.grassMesh.instanceMatrix.needsUpdate=!0}if(this.leafMesh){const r=new ce;for(let a=0;a<this.leafCount;a++){const o=a*3,c=this.leafPositions[o],l=this.leafPositions[o+1],u=this.leafPositions[o+2],p=this.leafRotations[o],h=this.leafRotations[o+1],m=this.leafRotations[o+2],g=this.leafScales[o],M=this.leafSeeds[a],f=Math.sin(e*4.5+M)*.08,d=Math.cos(e*3.8+M)*.08,v=Math.sin(e*5.2+M)*.12;r.position.set(c,l,u),r.rotation.set(p+f,h+d,m+v,"YXZ"),r.scale.set(g,g,g),r.updateMatrix(),this.leafMesh.setMatrixAt(a,r.matrix)}this.leafMesh.instanceMatrix.needsUpdate=!0}if(this.sporeParticles){const r=this.sporeParticles.geometry.attributes.position,a=r.array;for(let o=0;o<this.sporeCount;o++){const c=o*3,l=this.sporeVelocities[o];a[c]+=l.x*t,a[c+1]+=(l.y+Math.sin(e+o)*.08)*t,a[c+2]+=l.z*t;const u=xe(a[c],a[c+2]);(a[c+1]<u+.3||a[c+1]>u+8)&&(l.y=-l.y);const p=120;Math.abs(a[c])>p&&(a[c]=-a[c]),Math.abs(a[c+2])>p&&(a[c+2]=-a[c+2])}r.needsUpdate=!0}const s=9.8;if(this.crystals.forEach(r=>{const o=xe(r.pos.x,r.pos.z)+.6;if(r.pos.y>o?r.vel.y-=s*t:(r.pos.y=o,r.vel.y=0),r.vel.x*=.93,r.vel.z*=.93,r.rotVel.y*=.93,r.pos.addScaledVector(r.vel,t),r.mesh.position.copy(r.pos),r.mesh.rotation.y+=r.rotVel.y*t,n&&r.pos.distanceTo(n.position)<1.3){const u=r.pos.clone().sub(n.position).setY(0).normalize(),p=Math.abs(n.velocity)*1.5;p>.5&&(r.vel.x=u.x*p*1.3,r.vel.z=u.z*p*1.3,r.rotVel.y=(Math.random()-.5)*p*8,r.pos.y===o&&(r.vel.y=p*.5),Me.playCrystalHit(p))}}),n){let r=null;for(const a of this.projectZones)if(n.position.distanceTo(a.center)<a.radius){r={type:"project",name:a.name};break}!r&&this.contactZone&&n.position.distanceTo(this.contactZone.center)<this.contactZone.radius&&(r={type:"contact"}),this.onEnterZone(r)}this.portalCore&&(this.portalCore.rotation.z=e*.8),this.portalInnerCore&&(this.portalInnerCore.rotation.z=-e*1.6),this.portalDebris&&this.portalDebris.forEach(r=>{r.angle+=r.speed*t,r.mesh.position.x=Math.cos(r.angle)*r.radius,r.mesh.position.z=Math.sin(r.angle)*r.radius,r.mesh.position.y=r.yOffset+Math.sin(e*2+r.angle)*.15,r.mesh.rotation.x+=t,r.mesh.rotation.y+=t*.5})}}class zm{constructor(t){this.container=document.getElementById(t),this.container&&(this.scene=null,this.camera=null,this.renderer=null,this.clock=new zh,this.drone=null,this.playground=null,this.droneGlow=null,this.starfield=null,this.skyIslands=[],this.clouds=[],this.shootingStars=[],this.aurora1=null,this.aurora2=null,this.lightMultiplier=1,this.warmSun=null,this.coolSun=null,this.moonLight=null,this.hemiLight=null,this.currentLookTarget=new I(0,.8,0),this.keys={},this.init())}init(){this.scene=new Ic,this.scene.background=new Gt(792086),this.scene.fog=new Da(792086,.02),this.camera=new Ve(50,this.container.clientWidth/this.container.clientHeight,.1,1e3),this.camera.position.set(0,8,-12),this.renderer=new Kc({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=dc,this.container.appendChild(this.renderer.domElement);const t=new Gc(10309341,1314344,.95);this.scene.add(t),this.hemiLight=t;const e=new Yi(16768896,22);e.position.set(30,45,30),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=150;const n=50;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.bias=-.001,this.scene.add(e),this.warmSun=e;const s=new Yi(8072383,14);s.position.set(-30,25,20),this.scene.add(s),this.coolSun=s;const r=new Yi(10182117,8.5);r.position.set(5,33,75),r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.near=1,r.shadow.camera.far=200,r.shadow.camera.left=-60,r.shadow.camera.right=60,r.shadow.camera.top=60,r.shadow.camera.bottom=-60,r.shadow.bias=-.002,this.scene.add(r),this.moonLight=r,this.playground=new Bm,this.scene.add(this.playground.group),this.drone=new $c,this.scene.add(this.drone.mesh),this.droneGlow=new On(61695,6,18,1.5),this.droneGlow.castShadow=!0,this.droneGlow.shadow.bias=-.002,this.scene.add(this.droneGlow),this.createStarfield(),this.createSkyIslands(),this.createCelestialSky(),this.createAurora(),this.createClouds(),window.addEventListener("resize",()=>this.handleResize()),this.tick()}createStarfield(){this.starfield=new fe;const t=450,e=new ve,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Gt(16777215),a=new Gt(61695),o=new Gt(16711935);for(let y=0;y<t;y++){const A=160+Math.random()*60,T=Math.random()*Math.PI*2,R=Math.acos(2*Math.random()-1);n[y*3]=A*Math.sin(R)*Math.cos(T),n[y*3+1]=Math.abs(A*Math.sin(R)*Math.sin(T))+15,n[y*3+2]=A*Math.cos(R);let _=r;const b=Math.random();b>.75?_=a:b<.15&&(_=o),s[y*3]=_.r,s[y*3+1]=_.g,s[y*3+2]=_.b}e.setAttribute("position",new Be(n,3)),e.setAttribute("color",new Be(s,3));const c=new Oa({size:1.4,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),l=new Fc(e,c);this.starfield.add(l);const u=new Fa({color:61695,transparent:!0,opacity:.4,blending:ln}),p=[new I(-15,38,90),new I(-9,40,90),new I(-3,37,90),new I(1,33,90),new I(7,33,90),new I(5,27,90),new I(-1,27,90),new I(1,33,90)],h=new ve().setFromPoints(p),m=new Us(h,u);this.starfield.add(m);const g=[new I(-35,42,85),new I(-30,46,85),new I(-25,40,85),new I(-20,48,85),new I(-14,43,85)],M=new ve().setFromPoints(g),f=new Us(M,u);this.starfield.add(f);const d=[new I(20,44,88),new I(26,46,88),new I(24,38,88),new I(28,30,88),new I(21,28,88),new I(24,38,88),new I(14,39,88)],v=new ve().setFromPoints(d),E=new Us(v,u);this.starfield.add(E),this.scene.add(this.starfield)}createSkyIslands(){const t=new Wt({color:1314344,roughness:.9,metalness:.1,flatShading:!0}),e=new Wt({color:61695,emissive:61695,emissiveIntensity:1.2,flatShading:!0});[{x:-35,y:22,z:-25,scale:1.4},{x:32,y:26,z:-35,scale:1.6},{x:-28,y:28,z:30,scale:1.2},{x:38,y:24,z:25,scale:1.5}].forEach((s,r)=>{const a=new fe,o=new Qe(2.5,3.5,5);o.rotateX(Math.PI);const c=new q(o,t);c.castShadow=!0,c.receiveShadow=!0,a.add(c);const l=new ae(2.6,2.5,.4,5),u=new q(l,t);u.position.y=1.75,u.castShadow=!0,a.add(u);const p=new Jn(.5,0),h=new q(p,e);h.position.set(.6,2.2,.4),a.add(h);const m=new q(p,e);m.scale.set(.6,.6,.6),m.position.set(-.7,2.1,-.6),a.add(m),a.position.set(s.x,s.y,s.z),a.scale.set(s.scale,s.scale,s.scale),this.scene.add(a),this.skyIslands.push({mesh:a,speed:.05+r*.02,offset:r})})}createCelestialSky(){const t=new je(22,32,32),e=new oe({color:5904538,transparent:!0,opacity:.6}),n=new q(t,e);n.position.set(5,24,75),this.scene.add(n);const s=new je(24.5,16,16),r=new oe({color:8072383,transparent:!0,opacity:.18,side:Ie}),a=new q(s,r);n.add(a);const o=new je(5,16,16),c=new oe({color:16777215}),l=new q(o,c);l.position.set(-18,32,70),this.scene.add(l);const u=new je(6.6,16,16),p=new oe({color:14743546,transparent:!0,opacity:.28,side:Ie}),h=new q(u,p);l.add(h);const m=new On(61695,4,60,1.2);m.position.copy(l.position),this.scene.add(m);const g=new je(3.5,16,16),M=new oe({color:16758528}),f=new q(g,M);f.position.set(22,16,65),this.scene.add(f);const d=new je(4.8,16,16),v=new oe({color:16769154,transparent:!0,opacity:.32,side:Ie}),E=new q(d,v);f.add(E);const y=new On(16758528,3,50,1.2);y.position.copy(f.position),this.scene.add(y)}createAurora(){const t=new wn(120,22,60,1),e=new oe({color:3800852,transparent:!0,opacity:.26,side:Pe,blending:ln,depthWrite:!1});this.aurora1=new q(t,e),this.aurora1.position.set(0,26,60),this.scene.add(this.aurora1);const n=new wn(120,18,60,1),s=new oe({color:9055202,transparent:!0,opacity:.22,side:Pe,blending:ln,depthWrite:!1});this.aurora2=new q(n,s),this.aurora2.position.set(0,30,64),this.scene.add(this.aurora2)}createClouds(){this.clouds=[];const t=new Wt({color:14083312,roughness:.75,metalness:.1,transparent:!0,opacity:.72,flatShading:!0});for(let e=0;e<6;e++){const n=new fe,s=4+Math.floor(Math.random()*3);for(let c=0;c<s;c++){const l=new Jn(1.6+Math.random()*1.4,1),u=new q(l,t);u.scale.set(1.6,.75,1),u.position.set((c-s/2)*1.8,(Math.random()-.5)*.4,(Math.random()-.5)*1),u.castShadow=!0,n.add(u)}const r=(Math.random()-.5)*80,a=20+Math.random()*10,o=-20+Math.random()*80;n.position.set(r,a,o),this.scene.add(n),this.clouds.push({mesh:n,speed:.4+Math.random()*.7})}}spawnShootingStar(){const t=new ae(.01,.06,4,6);t.rotateZ(Math.PI/4);const e=[16777215,16711935,65535,16771584],n=e[Math.floor(Math.random()*e.length)],s=new oe({color:n,transparent:!0,opacity:.9}),r=new q(t,s),a=-40+Math.random()*70,o=24+Math.random()*10,c=30+Math.random()*50;r.position.set(a,o,c),this.scene.add(r);const l=25+Math.random()*15,u=new I(l*.7,-l*.7,-l*.2);this.shootingStars.push({mesh:r,material:s,velocity:u})}handleResize(){if(!this.container)return;const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}tick(){requestAnimationFrame(()=>this.tick());const t=Math.min(this.clock.getDelta(),.1),e=this.clock.getElapsedTime();if(this.drone){this.drone.update(t,this.keys,this.playground,e);const n=Math.abs(this.drone.velocity)/this.drone.maxSpeed;Me.updateDroneSound(n),this.droneGlow&&this.droneGlow.position.set(this.drone.position.x,this.drone.position.y-.7,this.drone.position.z)}if(this.playground&&this.playground.update(t,e,this.drone),this.starfield&&(this.starfield.rotation.y=e*.005),this.skyIslands.forEach(n=>{n.mesh.rotation.y=e*n.speed,n.mesh.position.y+=Math.sin(e*.8+n.offset)*.006}),this.clouds&&this.clouds.forEach(n=>{n.mesh.position.x+=n.speed*t,n.mesh.position.x>60&&(n.mesh.position.x=-60)}),this.aurora1){const n=this.aurora1.geometry.attributes.position;for(let s=0;s<n.count;s++){const r=n.getX(s),a=Math.sin(e*.7+r*.08)*3.5+Math.cos(e*.35+r*.16)*1.5;n.setZ(s,a)}n.needsUpdate=!0}if(this.aurora2){const n=this.aurora2.geometry.attributes.position;for(let s=0;s<n.count;s++){const r=n.getX(s),a=Math.sin(e*.5+r*.07+1.2)*3+Math.cos(e*.25+r*.13)*1.2;n.setZ(s,a)}n.needsUpdate=!0}if(Math.random()<.005&&this.shootingStars.length<3&&this.spawnShootingStar(),this.shootingStars)for(let n=this.shootingStars.length-1;n>=0;n--){const s=this.shootingStars[n];s.mesh.position.addScaledVector(s.velocity,t),s.material.opacity-=t*.95,(s.material.opacity<=0||s.mesh.position.y<1)&&(this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.material.dispose(),this.shootingStars.splice(n,1))}if(this.drone){const n=new I(0,3.2,-11);n.applyAxisAngle(new I(0,1,0),this.drone.rotationY);const s=this.drone.position.clone().add(n);this.camera.position.lerp(s,.08);const r=this.drone.position.clone(),a=new I(0,1,3.5);a.applyAxisAngle(new I(0,1,0),this.drone.rotationY),r.add(a),this.currentLookTarget.lerp(r,.1),this.camera.lookAt(this.currentLookTarget)}this.renderer.render(this.scene,this.camera)}setDroneType(t){if(!this.drone)return;this.drone.rebuildModel(t);let e=61695;t==="swift-z"?e=3800852:t==="interceptor-gl"?e=65382:t==="xeno-cargo"&&(e=16753920),this.droneGlow&&this.droneGlow.color.setHex(e)}setLightMultiplier(t){this.lightMultiplier=t,this.warmSun&&(this.warmSun.intensity=22*this.lightMultiplier),this.coolSun&&(this.coolSun.intensity=14*this.lightMultiplier),this.moonLight&&(this.moonLight.intensity=8.5*this.lightMultiplier),this.hemiLight&&(this.hemiLight.intensity=.95*this.lightMultiplier)}}document.addEventListener("DOMContentLoaded",()=>{const i=new zm("canvas-container"),t={};i.keys=t;const e=G=>{const nt=G.key.toLowerCase();t[nt]=!0,[" ","arrowup","arrowdown","arrowleft","arrowright"].includes(nt)&&G.preventDefault()},n=G=>{const nt=G.key.toLowerCase();t[nt]=!1};window.addEventListener("keydown",e),window.addEventListener("keyup",n);const s=(G,nt)=>{const St=document.getElementById(G);if(!St)return;const yt=bt=>{bt.preventDefault(),t[nt]=!0},qt=bt=>{bt.preventDefault(),t[nt]=!1};St.addEventListener("mousedown",yt),St.addEventListener("mouseup",qt),St.addEventListener("mouseleave",qt),St.addEventListener("touchstart",yt,{passive:!1}),St.addEventListener("touchend",qt,{passive:!1}),St.addEventListener("touchcancel",qt,{passive:!1})};s("mobile-drive-up","w"),s("mobile-drive-down","s"),s("mobile-steer-left","a"),s("mobile-steer-right","d");const r=document.getElementById("info-overlay"),a=document.getElementById("popup-content"),o=document.getElementById("popup-close"),c=document.getElementById("hud-zone-indicator"),l=document.getElementById("indicator-text"),u=document.getElementById("project-templates");let p=null,h=!1,m=0;const g=["neon","void","defense"],M=[3800852,16711935,61695];function f(){const G=document.getElementById("portal-project-details"),nt=document.getElementById("portal-project-indicator");if(!G)return;const St=g[m],yt=u.querySelector(`#template-${St}`);if(yt){G.innerHTML=yt.innerHTML;const bt=G.querySelector(".popup-badge");bt&&bt.remove()}if(nt){nt.textContent=`${m+1} / 3`;const bt=["#39ff14","#ff00ff","#00f0ff"];nt.style.color=bt[m]}i.playground&&typeof i.playground.setPortalColor=="function"&&i.playground.setPortalColor(M[m]);const qt=["#39ff14","#ff00ff","#00f0ff"];if(l){l.textContent=`PORTAL SYNC: EXHIBITING ${St.toUpperCase()} PROJECT FRAMEWORK...`,l.style.color=qt[m];const bt=c.querySelector(".indicator-led");bt&&(bt.style.background=qt[m],bt.style.boxShadow=`0 0 8px ${qt[m]}`)}}document.addEventListener("click",G=>{G.target&&G.target.id==="portal-prev-btn"&&(Me.playClick(),m=(m-1+g.length)%g.length,f()),G.target&&G.target.id==="portal-next-btn"&&(Me.playClick(),m=(m+1)%g.length,f())}),i.playground.onEnterZone=G=>{if(G){if(p&&p.type===G.type&&p.name===G.name)return;if(p=G,h=!0,Me.playZoneSync(G.type==="project"?G.name:"contact"),c.classList.remove("hidden"),G.type==="project")if(G.name==="portal"){const nt=u.querySelector("#template-portal");nt&&(a.innerHTML=nt.innerHTML,r.classList.remove("hidden"),f())}else{l.textContent=`MONOLITH SYNC: ENCODING ${G.name.toUpperCase()} DATAFRAMES...`;const nt=u.querySelector(`#template-${G.name}`);nt&&(a.innerHTML=nt.innerHTML,r.classList.remove("hidden"))}else if(G.type==="contact"){l.textContent="BEACON ANOMALY: TRANSCEIVER SOCKET SECURED";const nt=u.querySelector("#template-contact");nt&&(a.innerHTML=nt.innerHTML,r.classList.remove("hidden"))}}else if(p){p=null,c.classList.add("hidden");const nt=c.querySelector(".indicator-led");nt&&(nt.style.background="",nt.style.boxShadow=""),l&&(l.style.color=""),h&&(r.classList.add("hidden"),h=!1)}},o.addEventListener("click",()=>{Me.playClick(),r.classList.add("hidden"),h=!1});const d=document.querySelectorAll(".hud-nav-item"),v={welcome:{x:0,z:0,heading:0},about:{x:-18,z:7,heading:Math.PI},quests:{x:0,z:-25,heading:Math.PI},skills:{x:18,z:12,heading:Math.PI/4},contact:{x:0,z:31,heading:0}};d.forEach(G=>{G.addEventListener("click",nt=>{nt.preventDefault(),Me.playTeleport();const St=G.dataset.target,yt=v[St];yt&&i.drone&&(c.classList.remove("hidden"),l.textContent=`TELEPORTING DRONE TELEMETRY TO ${St.toUpperCase()}...`,i.drone.teleportTo(yt.x,yt.z,yt.heading),setTimeout(()=>{Me.playZoneSync(St)},120),d.forEach(qt=>qt.classList.remove("active")),G.classList.add("active"),setTimeout(()=>{p||c.classList.add("hidden")},2e3))})});const E=document.getElementById("hud-sound-toggle"),y=document.getElementById("sound-on-svg"),A=document.getElementById("sound-off-svg"),T=()=>{Me.init(),document.removeEventListener("click",T),document.removeEventListener("keydown",T)};document.addEventListener("click",T),document.addEventListener("keydown",T),E.addEventListener("click",()=>{const nt=!Me.muted;Me.setMute(nt),nt?(y.classList.add("hidden-icon"),A.classList.remove("hidden-icon")):(A.classList.add("hidden-icon"),y.classList.remove("hidden-icon"),Me.playSuccess())});const R=document.getElementById("close-instructions-btn"),_=document.getElementById("instructions-card");R&&R.addEventListener("click",()=>{Me.playClick(),_.style.opacity=0,setTimeout(()=>{_.classList.add("hidden")},300)}),document.querySelectorAll("a, button, .hud-nav-item, .dpad-btn, .popup-close-btn, .settings-toggle-btn, .drone-option").forEach(G=>{G.addEventListener("mouseenter",()=>{Me.playHover()})});const L=document.getElementById("hud-settings-toggle"),C=document.getElementById("settings-overlay"),N=document.getElementById("settings-close"),k=document.getElementById("apply-drone-btn"),X=document.getElementById("volume-slider"),U=document.getElementById("volume-percent"),z=document.getElementById("light-slider"),B=document.getElementById("light-percent");let j=null,$=null,tt=null,st=null,gt=null,zt=null,Xt="default";L&&C&&L.addEventListener("click",()=>{if(Me.playClick(),r&&r.classList.add("hidden"),C.classList.remove("hidden"),i.drone){const nt=i.drone.currentType||"default";Xt=nt,document.querySelectorAll(".drone-option").forEach(St=>{St.dataset.drone===nt?St.classList.add("active"):St.classList.remove("active")})}const G=Me.savedVolume!==void 0?Me.savedVolume:.3;if(X&&(X.value=G,U.textContent=`${Math.round(G*100)}%`),z&&i){const nt=i.lightMultiplier!==void 0?i.lightMultiplier:1;z.value=nt,B.textContent=`${Math.round(nt*100)}%`}Ut(),J(Xt)}),N&&C&&N.addEventListener("click",()=>{Me.playClick(),C.classList.add("hidden"),ht()}),X&&X.addEventListener("input",G=>{const nt=parseFloat(G.target.value);if(U.textContent=`${Math.round(nt*100)}%`,Me.setVolume(nt),nt>0&&Me.muted){Me.setMute(!1);const St=document.getElementById("sound-on-svg"),yt=document.getElementById("sound-off-svg");St&&yt&&(yt.classList.remove("hidden-icon"),St.classList.add("hidden-icon"))}}),z&&z.addEventListener("input",G=>{const nt=parseFloat(G.target.value);B.textContent=`${Math.round(nt*100)}%`,i&&i.setLightMultiplier(nt)}),document.querySelectorAll(".drone-option").forEach(G=>{G.addEventListener("click",()=>{Me.playClick(),document.querySelectorAll(".drone-option").forEach(nt=>nt.classList.remove("active")),G.classList.add("active"),Xt=G.dataset.drone,J(Xt)})}),k&&k.addEventListener("click",()=>{Me.playSuccess(),i.setDroneType(Xt),c.classList.remove("hidden"),l.textContent=`SYSTEM CALIBRATION COMPLETED // ACTIVE CHASSIS: ${Xt.toUpperCase()}`,setTimeout(()=>{p||c.classList.add("hidden")},3e3),C.classList.add("hidden"),ht()});function Ut(){const G=document.getElementById("drone-preview-canvas-container");if(!G||j)return;$=new Ic;const nt=new Gh(5,10,61695,4473924);nt.position.y=-.55,$.add(nt),tt=new Ve(45,G.clientWidth/G.clientHeight,.1,100),tt.position.set(0,.8,2.5),j=new Kc({antialias:!0,alpha:!0}),j.setSize(G.clientWidth,G.clientHeight),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.appendChild(j.domElement);const St=new Gc(16777215,3355443,1.4);$.add(St);const yt=new Yi(16768896,1.2);yt.position.set(3,4,-2),$.add(yt);const qt=new Yi(61695,.8);qt.position.set(-3,2,2),$.add(qt),st=new fe,$.add(st);let bt=!1,Kt=0,ee=0;G.addEventListener("mousedown",ct=>{bt=!0,Kt=ct.clientX,ee=ct.clientY}),window.addEventListener("mousemove",ct=>{if(!bt)return;const Ot=ct.clientX-Kt,P=ct.clientY-ee;Kt=ct.clientX,ee=ct.clientY,st.rotation.y+=Ot*.007,st.rotation.x+=P*.007,st.rotation.x=Math.max(-Math.PI/4,Math.min(Math.PI/4,st.rotation.x))}),window.addEventListener("mouseup",()=>{bt=!1}),G.addEventListener("touchstart",ct=>{ct.touches.length===1&&(bt=!0,Kt=ct.touches[0].clientX,ee=ct.touches[0].clientY)}),G.addEventListener("touchmove",ct=>{if(!bt||ct.touches.length!==1)return;const Ot=ct.touches[0].clientX-Kt,P=ct.touches[0].clientY-ee;Kt=ct.touches[0].clientX,ee=ct.touches[0].clientY,st.rotation.y+=Ot*.007,st.rotation.x+=P*.007,st.rotation.x=Math.max(-Math.PI/4,Math.min(Math.PI/4,st.rotation.x))}),G.addEventListener("touchend",()=>{bt=!1}),G.addEventListener("wheel",ct=>{ct.preventDefault(),tt.position.z+=ct.deltaY*.002,tt.position.z=Math.max(1.6,Math.min(5,tt.position.z))},{passive:!1}),new ResizeObserver(()=>{!G||!tt||!j||(tt.aspect=G.clientWidth/G.clientHeight,tt.updateProjectionMatrix(),j.setSize(G.clientWidth,G.clientHeight))}).observe(G);function At(){if(zt=requestAnimationFrame(At),bt||(st.rotation.y+=.005),gt){const ct=performance.now()*.001,Ot=.8+Math.sin(ct*35)*.18;gt.thrusters&&gt.thrusters.length>=2&&(gt.thrusters[0].scale.set(1,1,Ot),gt.thrusters[1].scale.set(1,1,Ot))}j.render($,tt)}At()}function J(G){!$||!st||(gt&&st.remove(gt.mesh),gt=new $c,gt.rebuildModel(G),gt.mesh.scale.set(1,1,1),st.rotation.set(.1,0,0),st.add(gt.mesh))}function ht(){zt&&(cancelAnimationFrame(zt),zt=null);const G=document.getElementById("drone-preview-canvas-container");G&&j&&(G.innerHTML="",j.dispose(),j=null,$=null,tt=null,st=null,gt=null)}});
