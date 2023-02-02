let question = ["fushigidane", "hitokage", "zenigame", "caterpie", "beedle", "poppo", "koratta"];
let no = Math.floor(Math.random() * question.length); //問題No
let answer = 0; //回答している文字数
let length = question[no].length;

let isStart = false;
let ok = 0; //正解数
let ng = 0; //ミスした数

window.addEventListener("keydown", push_KeyDown);

let time = 9;
let timeId = 0;
function timer(){
    if(time < 0){
        clearInterval(timeId);
        var alert = window.alert("おわり\r\n正解数:" + ok + "\r\nミスタイプ:" + ng);
        if(!alert){
            restart();
        }
        return;
    }
    document.getElementById("timer").innerHTML = "残り時間:" + time + "秒";
    time--;
}

function push_KeyDown(){
    if(!isStart){
        start();
        
        return;
    }
    if(length == length - answer){
        input();
    }

    let keycode = event.key;
    if(question[no].charAt(answer) == keycode){
        answer++;
        input();
        if(length == answer){ //正解
            ok++;
            reset();
            input();
        }
    }
    else{
        ng++;
    }
    document.getElementById("ok").innerHTML = "正解数:" + ok;
    document.getElementById("ng").innerHTML = "ミスタイプ:" + ng;
}

//スペースキーを押してスタート
function start(){
    if(event.keyCode != 32) return; //32はスペースキーのキーコード
    isStart = true;
    ok = 0;
    ng = 0;
    reset();
    input();
    timeId = setInterval(timer, 1000);
}

function input(){
    document.getElementById("start").innerHTML = question[no].substring(0, answer);
    document.getElementById("end").innerHTML = question[no].substring(answer, length);
}

function reset(){
    no = Math.floor(Math.random() * question.length);
    answer = 0;
    length = question[no].length;
}

function restart(){
    document.getElementById("start").innerHTML = "";
    document.getElementById("end").innerHTML = "スペースを押してください";
    document.getElementById("ok").innerHTML = "正解数:0";
    document.getElementById("ng").innerHTML = "ミスタイプ:0";
    isStart = false;
    ok = 0;
    ng = 0;
    clearInterval(timeId);
    time = 10;
    document.getElementById("timer").innerHTML = "残り時間:10秒";
    document.getElementById("restart_button").blur();
}