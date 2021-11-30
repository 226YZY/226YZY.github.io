window.onload = main(); //加载主函数
var overflag=true;
//主函数
function main() {
    mapx=4,mapy=4,mapt=mapx*mapy;//设定表框大小，一般为4*4
    var table = document.getElementById("maintable"); //获取表格
    var tableStructure = ""; //储存表格结构
    var tdid = 1; //单元格id
    var mark=document.getElementById("mark");
    overflag=true;

    //加载表格结构(4行4列)
    for (var i = 1; i <= mapx; i++) {
        tableStructure += "<tr>"; //为表格加1行
        //为该行添加单元格
        for (var j = 1; j <= mapy; j++) {
            tableStructure += "<td id=" + tdid + "></td>"; //添加单元格与该单元格id
            tdid++;
        }
        tableStructure += "</tr>";
    }
    table.innerHTML = tableStructure; //向表格返回该表格结构
    tdRandom();
    tdRandom();
    tdcolor();
    mark.innerHTML=0;
    document.getElementById("gameover").style.display="none";
    dealTouchEvent()
}

//因为Math.random() 返回 0（包括） 至 1（不包括） 之间的随机数，随机的数不一定是整数。
function myrandom(min, max) {
    return min + Math.floor(Math.random() * max);
}

//随机为单元格随机填入2或4 (4出现的概率应相对较小)
function tdRandom() {
    var temp = myrandom(1, mapt);
    if (document.getElementById(temp).innerHTML == "") {
        document.getElementById(temp).innerHTML = Math.random()<0.9?2:4;
    } else {
        tdRandom();
    }
}


//上下左右操作函数


//向上操作
function Up() {
   for(var i=1;i<=mapy;i++){
      var tempmap=[];
      var tempflag=[];
      var z=0;
      for(var j=i+(mapx-1)*mapy;j>=i;j-=mapy){ 
          var thetd=document.getElementById(j); 
          if(thetd.innerHTML==""){
              tempmap[z]=0;
          }          
          else{
              tempmap[z]=parseInt(thetd.innerHTML);
          } 
          tempflag[z]=true;  
          z++;                
      }
      console.log("--------------\n--------------\n初始\n"+i+"\n");
      console.log(tempmap);
      tempmap=changetd(tempmap,tempflag,tempmap.length,0);  
      console.log("--------------\n更新后");
      console.log(tempmap);
      z=0;
      for(var j=i+(mapx-1)*mapy;j>=i;j-=mapy){ 
        var thetd=document.getElementById(j);
        if(tempmap[z]==0){
            thetd.innerHTML="";
        }  
        else{
            thetd.innerHTML=tempmap[z];
        } 
        z++;  
    }
   } 
}

//向下操作
function Down() {

    for(var i=1;i<=mapy;i++){
        var tempmap=[];
        var tempflag=[];
        var z=0;
        for(var j=i;j<=i+(mapx-1)*mapy;j+=mapy){ 
            var thetd=document.getElementById(j); 
            if(thetd.innerHTML==""){
                tempmap[z]=0;
            }          
            else{
                tempmap[z]=parseInt(thetd.innerHTML);
            } 
            tempflag[z]=true;  
            z++;                
        }
        console.log("--------------\n--------------\n初始\n"+i+"\n");
        console.log(tempmap);
        tempmap=changetd(tempmap,tempflag,tempmap.length,0);  
        console.log("--------------\n更新后");
        console.log(tempmap);
        z=0;
        for(var j=i;j<=i+(mapx-1)*mapy;j+=mapy){ 
          var thetd=document.getElementById(j);
          if(tempmap[z]==0){
              thetd.innerHTML="";
          }  
          else{
              thetd.innerHTML=tempmap[z];
          } 
          z++;  
      }
     } 
}

//向左操作
function Left() {
     for(var i=mapy;i<=mapy+(mapx-1)*mapy;i+=mapy){
        var tempmap=[];
        var tempflag=[];
        var z=0;
        for(var j=i;j>=i-mapy+1;j--){ 
            var thetd=document.getElementById(j); 
            if(thetd.innerHTML==""){
                tempmap[z]=0;
            }          
            else{
                tempmap[z]=parseInt(thetd.innerHTML);
            } 
            tempflag[z]=true;  
            z++;                
        }
        console.log("--------------\n--------------\n初始\n"+i+"\n");
        console.log(tempmap);
        tempmap=changetd(tempmap,tempflag,tempmap.length,0);  
        console.log("--------------\n更新后");
        console.log(tempmap);
        z=0;
        for(var j=i;j>=i-mapy+1;j--){ 
          var thetd=document.getElementById(j);
          if(tempmap[z]==0){
              thetd.innerHTML="";
          }  
          else{
              thetd.innerHTML=tempmap[z];
          } 
          z++;  
      }
     } 
}

//向右操作
function Right() {
    for(var i=1;i<=1+(mapx-1)*mapy;i+=mapy){
        var tempmap=[];
        var tempflag=[];
        var z=0;
        console.log(i+" i");
        for(var j=i;j<i+mapy;j++){ 
            console.log(j);
            var thetd=document.getElementById(j); 
            if(thetd.innerHTML==""){
                tempmap[z]=0;
            }          
            else{
                tempmap[z]=parseInt(thetd.innerHTML);
            } 
            tempflag[z]=true;  
            z++;                
        }
        console.log("--------------\n--------------\n初始\n"+i+"\n");
        console.log(tempmap);
        tempmap=changetd(tempmap,tempflag,tempmap.length,0);  
        console.log("--------------\n更新后");
        console.log(tempmap);
        z=0;
        for(var j=i;j<i+mapy;j++){ 
          var thetd=document.getElementById(j);
          if(tempmap[z]==0){
              thetd.innerHTML="";
          }  
          else{
              thetd.innerHTML=tempmap[z];
          } 
          z++;  
      }
     }
}

//键盘事件响应
function keyboardEvents() {
    //以键盘方向键或wasd操作移动
    // var event = window.event ;
    // console.log("115154");
    if(overflag){
        if (event.keyCode == 37 || event.keyCode == 65) Left();
        else if (event.keyCode == 38 || event.keyCode == 87) Up();
       else if (event.keyCode == 39 || event.keyCode == 68) Right();
       else if (event.keyCode == 40 || event.keyCode == 83) Down();
      //保证其它按键不会触发
    if(flag_r){
        tdRandom();
        flag_r=false;      
    }
    }
    
    tdcolor();
    isover();
}

function changetd(tempmap,tempflag,k,u) {
    for(var i=k-1;i>u;i--){
        if(tempmap[i-1]!=0&&tempmap[i]==0){
            tempmap[i]=tempmap[i-1];
            tempmap[i-1]=0;
            if(tempflag[i-1]==false){
                tempflag[i-1]=true;
                tempflag[i]=false;
            }  
            flag_r=true;          
        }
        else if(tempmap[i-1]!=0&&tempmap[i]==tempmap[i-1]&&tempflag[i]==true&&tempflag[i-1]==true){
            tempmap[i]*=2;
            tempmap[i-1]=0;
            tempflag[i]=false;  
            flag_r=true;
            mark.innerHTML=parseInt(mark.innerHTML)+tempmap[i];     
        }
        tempmap=changetd(tempmap,tempflag,k,i);
        // else if(tempmap[i]!=0&&tempmap[i+1]==tempmap[i]&&tempflag[i]==false){

        // }
    }
    return tempmap;
}

function tdcolor(){
    var tdcolors={
        "": "#fef4f2",
         "2": "#eee3da",
            "4": "#ede0c8",
            "8": "#f2b179",
            "16": "#f59563",
            "32": "#f67c5f",
            "64": "#f65e3b",
            "128": "#edcf72",
            "256": "#edcc61",
            "512": "#9c0",
            "1024": "#33b5e5",
            "2048": "#09c",
            "4096": "#a6c",
            "8192":"#93c"
    }
    for(var i = 1; i <= mapx*mapy; i++){
        var thetd=document.getElementById(i);
        thetd.style.backgroundColor=tdcolors[thetd.innerHTML];
    }
}

function isover(){
    var f=0;
    for(var i=1;i<=mapx*mapy;i++){
        var td=document.getElementById(i);    
        if(td.innerHTML==""){
            break;
        }
        else if(i<=(mapx-1)*mapy&&td.innerHTML==document.getElementById(i+mapy).innerHTML){
            break;
        }
        else if(i%mapy!=0&&td.innerHTML==document.getElementById(i+1).innerHTML){
            break;
        }
        else {
            f++;
        }
    }
    if(f==mapx*mapy){
        document.getElementById("gameover").style.display="block";
        overflag=false;  
    }
    console.log(f+"    isgameover");
}

function dealTouchEvent() {
    EventUtil.listenTouchDirection(document, true, Up, Right, Down, Left);
}

//测试

{/* 
    
    <tbody>
    <tr><td id="1">2</td><td id="2">2</td><td id="3">4</td><td id="4"></td></tr>
    <tr><td id="5">2</td><td id="6">2</td><td id="7">4</td><td id="8">2</td></tr>
    <tr><td id="9">2</td><td id="10">4</td><td id="11">2</td><td id="12">2</td></tr>
    <tr><td id="13">2</td><td id="14">4</td><td id="15">2</td><td id="16"></td></tr></tbody>



    <tbody>
    <tr><td id="1">2</td><td id="2">2</td><td id="3">4</td><td id="4">4</td></tr>
    <tr><td id="5">2</td><td id="6">2</td><td id="7">4</td><td id="8">2</td></tr>
    <tr><td id="9">2</td><td id="10">4</td><td id="11">2</td><td id="12"></td></tr>
    <tr><td id="13">2</td><td id="14">4</td><td id="15">2</td><td id="16"></td></tr></tbody>




*/}

