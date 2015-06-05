/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};

app.initialize();
var publi=1;
function cambiarPublicidad(){
    publi++;
    var file="http://karinadelgadophotography.test.vpsandikam.com/Slider-";
    if(publi>6){publi=1;}
    var number=publi<10?"0"+publi:publi;
    number="url(\'"+file+number+".png\')";
    jQuery(".publicidad").css("background-image",number);
}
$(document).ready(function() {
    jQuery(".info").hide();
    var stream = {
                title: "Radio Lanzarote",
                mp3: "http://server1.emitironline.com:11299/radio.mp3"
            },ready = false;
    var	my_jPlayer = $("#jquery_jplayer_1");
    my_jPlayer.jPlayer({
        ready: function () {
                //$("#jp_container .track-default").click();
        },
        timeupdate: function(event) {
                //my_extraPlayInfo.text(parseInt(event.jPlayer.status.currentPercentAbsolute, 10) + "%");
        },
        play: function(event) {
        },
        waiting: function(event) {
            jQuery(".info").fadeIn();
        },
        playing: function(event) {
            jQuery(".info").fadeOut();
        },
        pause: function(event) {
                my_jPlayer.jPlayer("clearMedia");
        },
        ended: function(event) {
                
        },
        swfPath: "../../dist/jplayer",
        cssSelectorAncestor: "#jp_container",
        supplied: "mp3",
        wmode: "window"
    });
        jQuery(".player").click(function(){
            my_jPlayer.toggleClass("jp-play");
            my_jPlayer.toggleClass("jp-pause");
            if(my_jPlayer.hasClass("jp-play")){
                jQuery(".info").fadeOut();
                my_jPlayer.jPlayer("pause");
            }else{
                jQuery(".info").fadeIn();
                my_jPlayer.jPlayer("setMedia", stream).jPlayer("play");
            }
        });
        setInterval(function(){cambiarPublicidad();},10000);
    });