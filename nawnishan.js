var menulist=document.querySelector("#menu_list");
menulist.style.maxHeight="0px";
    
function togglemenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "500px";
        }
        else{
            menulist.style.maxHeight="0px";
        }
}