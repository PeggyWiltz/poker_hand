!function(r){function n(a){if(e[a])return e[a].exports;var t=e[a]={exports:{},id:a,loaded:!1};return r[a].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var e={};return n.m=r,n.c=e,n.p="",n(0)}([function(r,n,e){e(1),e(2),e(3),e(4),r.exports=e(5)},function(r,n){!function(r){"use strict";function n(r,n,e){if(!r)throw new Error("missing pip string");if(!n)throw new Error("missing pip count");if(!e)throw new Error("missing suit");var a=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];if(a.indexOf(r)<0)throw new Error("pip string out of range");var t=[2,3,4,5,6,7,8,9,10,11,12,13,14];if(t.indexOf(n)<0)throw new Error("pip count out of range");var i=["S","H","C","D"];if(i.indexOf(e)<0)throw new Error("suit out of range");this.pipStr=r,this.pipCount=n,this.suit=e}r.Card=n}(this)},function(r,n){!function(r){"use strict";function n(){this.deck=[new Card("A",14,"D"),new Card("2",2,"D"),new Card("3",3,"D"),new Card("4",4,"D"),new Card("5",5,"D"),new Card("6",6,"D"),new Card("7",7,"D"),new Card("8",8,"D"),new Card("9",9,"D"),new Card("10",10,"D"),new Card("J",11,"D"),new Card("Q",12,"D"),new Card("K",13,"D"),new Card("A",14,"D"),new Card("2",2,"H"),new Card("3",3,"H"),new Card("4",4,"H"),new Card("5",5,"H"),new Card("6",6,"H"),new Card("7",7,"H"),new Card("8",8,"H"),new Card("9",9,"H"),new Card("10",10,"H"),new Card("J",11,"H"),new Card("Q",12,"H"),new Card("K",13,"H"),new Card("A",14,"H"),new Card("2",2,"C"),new Card("3",3,"C"),new Card("4",4,"C"),new Card("5",5,"C"),new Card("6",6,"C"),new Card("7",7,"C"),new Card("8",8,"C"),new Card("9",9,"C"),new Card("10",10,"C"),new Card("J",11,"C"),new Card("Q",12,"C"),new Card("K",13,"C"),new Card("A",14,"C"),new Card("2",2,"S"),new Card("3",3,"S"),new Card("4",4,"S"),new Card("5",5,"S"),new Card("6",6,"S"),new Card("7",7,"S"),new Card("8",8,"S"),new Card("9",9,"S"),new Card("10",10,"S"),new Card("J",11,"S"),new Card("Q",12,"S"),new Card("K",13,"S")]}r.Deck=n,n.prototype={shuffle:function(r){for(var n,e=r.length-1,a=0;e>0;)a=Math.floor(Math.random()*e),e--,n=r[e],r[e]=r[a],r[a]=n;return r},deal:function(r){for(var n=[],e=5,a=[],t=[],i=0;e>i;i++)a.push(r.shift()),t.push(r.shift());return n.push(a,t),n}}}(this)},function(r,n){!function(r){"use strict";function n(r,n){this.deck=new Deck;var e=this.deck.shuffle(this.deck.deck),a=this.deck.deal(e);this.players=[new Player(r,a[0]),new Player(n,a[1])],this.winner={}}r.Game=n,n.prototype={determineWinner:function(){console.log("determine winner");var r=this.players[0],n=this.players[1],e=r.hand,a=n.hand;return e.analyze(e),a.analyze(a),console.log("player "+r.playerName+" high card = "+r.hand.highCard),console.log("player "+n.playerName+" high card = "+n.hand.highCard),r.hand.highCard.pipCount>n.hand.highCard.pipCount?r:n}}}(this)},function(r,n){!function(r){"use strict";function n(r){this.cards=r||[new Card("A",14,"S"),new Card("A",14,"D"),new Card("8",8,"S"),new Card("8",8,"D"),new Card("8",8,"H")],this.highCard={},this.hasFourOfAKind=!1,this.hasThreeOfAKind=!1,this.hasPair=0,this.hasStraight="0",this.hasFlush=!1,this.sortedCardValues=[]||[14,14,14,8,8]}r.Hand=n,n.prototype={analyze:function(r){function n(r){for(var n=1,e=0;e<r.length-1;e++){if(2===e&&2>n)return"0";if(r[e].pipCount+1==r[e+1].pipCount){if(n++,4===n)return r[e+1].pipStr}else n=1}return"0"}function e(r){for(var n={},e=0;e<r.length;e++){var a=r[e].pipCount;n[a]=n[a]?n[a]+1:1}return n}function a(r){for(var n={},e=0;e<r.length;e++){var a=r[e].suit;n[a]=n[a]?n[a]+1:1}return n}function t(){var r=o.length;return o[r-1]}function i(r,n){return r.pipCount-n.pipCount}if(!r)throw new Error("missing target");var d=r.cards,s=e(d),h=a(d),o=d.sort(i);this.highCard=t();for(var C in s)4===s[C]&&(this.hasFourOfAKind=!0),3===s[C]&&(this.hasThreeOfAKind=!0),2===s[C]&&(this.hasPair+=1);this.hasStraight=n(o);for(var C in h)if(5===h[C]){this.hasFlush=!0;break}return this}}}(this)},function(r,n){!function(r){"use strict";function n(r,n){this.playerName=r||"Player",this.hand=new Hand(n)}r.Player=n}(this)}]);