<template>
  <div class="keyboard">
    <div class="keyboard__row keyboard__row--h1">
      <div data-key="27" class="key--word common">
        <span>esc</span>
      </div>
      <div data-key="112" class="key--fn common">
        <span>F1</span>
      </div>
      <div data-key="113" class="key--fn common">
        <span>F2</span>
      </div>
      <div data-key="114" class="key--fn common">
        <span>F3</span>
      </div>
      <div data-key="115" class="key--fn common">
        <span>F4</span>
      </div>
      <div data-key="116" class="key--fn common">
        <span>F5</span>
      </div>
      <div data-key="117" class="key--fn common">
        <span>F6</span>
      </div>
      <div data-key="118" class="key--fn common">
        <span>F7</span>
      </div>
      <div data-key="119" class="key--fn common">
        <span>F8</span>
      </div>
      <div data-key="120" class="key--fn common">
        <span>F9</span>
      </div>
      <div data-key="121" class="key--fn common">
        <span>F10</span>
      </div>
      <div data-key="122" class="key--fn common">
        <span>F11</span>
      </div>
      <div data-key="123" class="key--fn common">
        <span>F12</span>
      </div>
      <div data-key="n/a" class="key--word common">
        <span>pwr</span>
      </div>
    </div>
    <div class="keyboard__row">
      <div class="key--double common" data-key="192">
        <div>~</div>
        <div>`</div>
      </div>
      <div class="key--double common" data-key="49">
        <div>!</div>
        <div>1</div>
      </div>
      <div class="key--double common" data-key="50">
        <div>@</div>
        <div>2</div>
      </div>
      <div class="key--double common" data-key="51">
        <div>#</div>
        <div>3</div>
      </div>
      <div class="key--double common" data-key="52">
        <div>$</div>
        <div>4</div>
      </div>
      <div class="key--double common" data-key="53">
        <div>%</div>
        <div>5</div>
      </div>
      <div class="key--double common" data-key="54">
        <div>^</div>
        <div>6</div>
      </div>
      <div class="key--double common" data-key="55">
        <div>&</div>
        <div>7</div>
      </div>
      <div class="key--double common" data-key="56">
        <div>*</div>
        <div>8</div>
      </div>
      <div class="key--double common" data-key="57">
        <div>(</div>
        <div>9</div>
      </div>
      <div class="key--double common" data-key="48">
        <div>)</div>
        <div>0</div>
      </div>
      <div class="key--double common" data-key="189">
        <div>_</div>
        <div>-</div>
      </div>
      <div class="key--double common" data-key="187">
        <div>+</div>
        <div>=</div>
      </div>
      <div class="key--bottom-right key--word key--w4 common" data-key="8">
        <span>delete</span>
      </div>
    </div>
    <div class="keyboard__row">
      <div class="key--bottom-left key--word key--w4 common" data-key="9">
        <span>tab</span>
      </div>
      <div class="key--letter common" data-char="Q" id="Q">Q</div>
      <div class="key--letter common" data-char="W" id="W">W</div>
      <div class="key--letter common" data-char="E" id="E">E</div>
      <div class="key--letter common" data-char="R" id="R">R</div>
      <div class="key--letter common" data-char="T" id="T">T</div>
      <div class="key--letter common" data-char="Y" id="Y">Y</div>
      <div class="key--letter common" data-char="U" id="U">U</div>
      <div class="key--letter common" data-char="I" id="I">I</div>
      <div class="key--letter common" data-char="O" id="Q">O</div>
      <div class="key--letter common" data-char="P" id="P">P</div>
      <div class="key--double common" data-key="219" data-char="{[" id="[">
        <div>{</div>
        <div>[</div>
      </div>
      <div class="key--double common" data-key="221" data-char="}]">
        <div>}</div>
        <div>]</div>
      </div>
      <div class="key--double common" data-key="220" data-char="|\">
        <div>|</div>
        <div>\</div>
      </div>
    </div>
    <div class="keyboard__row">
      <div class="key--bottom-left key--word key--w5 common" data-key="20">
        <span>caps lock</span>
      </div>
      <div class="key--letter common" data-char="A">A</div>
      <div class="key--letter common" data-char="S">S</div>
      <div class="key--letter common" data-char="D">D</div>
      <div class="key--letter common" data-char="F">F</div>
      <div class="key--letter common" data-char="G">G</div>
      <div class="key--letter common" data-char="H">H</div>
      <div class="key--letter common" data-char="J">J</div>
      <div class="key--letter common" data-char="K">K</div>
      <div class="key--letter common" data-char="L">L</div>
      <div class="key--double common" data-key="186">
        <div>:</div>
        <div>;</div>
      </div>
      <div class="key--double common" data-key="222">
        <div>"</div>
        <div>'</div>
      </div>
      <div class="key--bottom-right key--word key--w5 common" data-key="13">
        <span>return</span>
      </div>
    </div>
    <div class="keyboard__row">
      <div class="key--bottom-left key--word key--w6 common" data-key="16">
        <span>shift</span>
      </div>
      <div class="key--letter common" data-char="Z">Z</div>
      <div class="key--letter common" data-char="X">X</div>
      <div class="key--letter common" data-char="C">C</div>
      <div class="key--letter common" data-char="V">V</div>
      <div class="key--letter common" data-char="B">B</div>
      <div class="key--letter common" data-char="N">N</div>
      <div class="key--letter common" data-char="M">M</div>
      <div class="key--double common" data-key="188">
        <div>&lt;</div>
        <div>,</div>
      </div>
      <div class="key--double common" data-key="190">
        <div>&gt;</div>
        <div>.</div>
      </div>
      <div class="key--double common" data-key="191">
        <div>?</div>
        <div>/</div>
      </div>
      <div class="key--bottom-right key--word key--w6 common" data-key="16-R">
        <span>shift</span>
      </div>
    </div>
    <div class="keyboard__row keyboard__row--h3">
      <div class="key--bottom-left key--word common">
        <span>fn</span>
      </div>
      <div class="key--bottom-left key--word key--w1 common" data-key="17">
        <span>control</span>
      </div>
      <div class="key--bottom-left key--word key--w1 common" data-key="18">
        <span>option</span>
      </div>
      <div class="key--bottom-right key--word key--w3 common" data-key="91">
        <span>command</span>
      </div>
      <div class="key--double key--right key--space common" data-key="32" data-char=" ">
        &nbsp;
      </div>
      <div class="key--bottom-left key--word key--w3 common" data-key="93-R">
        <span>command</span>
      </div>
      <div class="key--bottom-left key--word key--w1 common" data-key="18-R">
        <span>option</span>
      </div>
      <div data-key="37" class="key--arrow common">
        <span>&#9664;</span>
      </div>
      <div class="key--double key--arrow--tall common" data-key="38">
        <div>&#9650;</div>
        <div>&#9660;</div>
      </div>
      <div data-key="39" class="key--arrow common">
        <span>&#9654;</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    bus
  } from "../bus.js"
  export default {
  
    data() {
      return {
        items: [],
        keyArr: ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'pwr',
          '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete', 'Tab', 'Q', 'W', 'E',
          'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', "enter",
          'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?', 'Shift', 'Fn', 'Control', 'Option', 'Command', ' ', 'Command', 'Option', '左箭头', '上下箭头', '下箭头'
        ],
      }
    },
    mounted() {
      bus.$on('update', this.send);
    },
    components: {
  
    },
    methods: {
      getDom() {
        this.items = document.getElementsByClassName('common');
      },
      send(e) {
  
        var arr = e.name.split("-")
        this.getDom();
        arr.forEach(function(keyword,index) {
          
          this.items[this.keyArr.indexOf(keyword)].setAttribute('class', 'highlight');
          let self = this
          
          setTimeout(function() {
            window.location.href="/"
          }, 10000);
        }, this);
      },
      //      getKey (e) {
      //             var location = e.location;
      //             var selector;
      //             if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      //                 selector = ['[data-key="' + e.keyCode + '-R"]']
      //             } else {
      //                 var code = e.keyCode || e.which;
      //                 selector = [
      //                     '[data-key="' + code + '"]',
      //                     '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
      //                 ].join(',');
      //             }
      //             return document.querySelector(selector);
      //              },
      //             pressKey (char) {
      //             var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
      //             if (!key) {
      //                 return console.warn('No key for', char);
      //             }
      //             key.setAttribute('data-pressed', 'on');
      //             setTimeout(function () {
      //                 key.removeAttribute('data-pressed');
      //             }, 200);
      //             },
      //          size () {
      //             this.$nextTick(()=>{
      //             var keyboard=document.querySelector('.keyboard');
      //             var size = keyboard.parentNode.clientWidth / 90;
      //             keyboard.style.fontSize = size + 'px';
      //             });
  
      //         },
  
      //         addEvent1(e){
      //             var key = this.getKey(e);
      //             if (!key) {
      //                 return console.warn('No key for', e.keyCode);
      //             }
      //             key.setAttribute('data-pressed', 'on');
      //         },
      //         addEvent2(e){
      //               var key = this.getKey(e);
      //               key && key.removeAttribute('data-pressed');
      //         }
      //   },
      // computed:{
      //   start(){
      //           this. size();
      //           window.addEventListener('resize', function (e) {
      //             this.size();
      //         });
      //          }
    }
  }
</script>

<style lang="scss">
  @import "../utility.scss";
  h1 {
    text-align: center;
    font-size: 1.8em;
    font-family: monospace;
    padding: 0.7em;
  }
  
  .keyboard {
    text-align: center;
    font-size: 14px;
    font-family: sans-serif;
  }
  
  .keyboard__row {
    display: inline-block;
    height: 3em;
    margin: 0.2em;
  }
  
  .keyboard__row--h1 {
    height: 1.7em;
    line-height: 1.4em;
  }
  
  .keyboard__row--h3 {
    height: 3.3em;
  }
  
  .keyboard__row>* {
    position: relative;
    background: #333;
    text-align: center;
    color: #eee;
    float: left;
    border-radius: 0.3em;
    margin: 0.2em;
    padding: 0.2em;
    width: 3.3em;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none;
    border: 1px solid #444;
    box-shadow: 0 0.2em 0 0.05em #222;
    border-bottom-color: #555;
  }
  
  .keyboard__row--h1>div {
    width: 3.5em;
  }
  
  .keyboard__row>div[data-pressed],
  .keyboard__row>div:active {
    background: #2a2a2a;
    color: #aaa;
    position: relative;
    top: 0.2em;
    box-shadow: 0 0 0 0.05em black;
  }
  
  .key--w3 {
    width: 4.6em;
  }
  
  .key--w4 {
    width: 6em;
  }
  
  .key--w5 {
    width: 6.5em;
  }
  
  .key--w6 {
    width: 8.3em;
  }
  
  .key--space {
    width: 18em;
  }
  
  .key--double>* {
    padding-top: 0.1em;
  }
  
  .key--letter {
    line-height: 2.8em;
  }
  
  .key--bottom-left>* {
    position: absolute;
    text-align: left;
    bottom: 0.4em;
    left: 0.4em;
  }
  
  .key--bottom-right>* {
    position: absolute;
    text-align: right;
    bottom: 0.4em;
    right: 0.4em;
  }
  
  .key--fn>* {
    font-size: 0.6em;
    line-height: 1em;
    padding-top: 1.2em;
    padding-right: 0.2em;
    text-align: right;
    float: right;
  }
  
  .key--word>* {
    font-size: 0.8em;
  }
  
  .key--arrow--tall>*,
  .key--arrow>* {
    font-size: 0.5em;
    line-height: 3em;
  }
  
  .key--arrow {
    height: 1.8em;
    margin-top: 1.7em;
    line-height: 0.5em;
  }
  
  .key--arrow--tall>* {
    padding-top: 0.2em;
  }
  
  .keyboard>.keyboard__row {
    text-align: center;
  }
  
  .highlight {
    background-color: rgb(96, 141, 249);
  }
  .deletelight {
    background-color:#000;
  }
</style>

