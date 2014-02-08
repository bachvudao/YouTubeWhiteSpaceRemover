// Checking page title
var player = document.getElementById("player")
var mainContent = document.getElementById("watch7-main");
var commentSection = document.getElementById("watch7-content");
var mainContentContainer = document.getElementById("watch7-main-container");
var sideBar = document.getElementById("watch7-sidebar");
var sideBarContent = document.getElementById("watch7-sidebar-contents");
var advertSection = document.getElementById("watch-channel-brand-div");

if (player != null && mainContent != null && commentSection != null && mainContentContainer != null &&
    sideBar != null && advertSection != null && sideBarContent != null) 
{
    player.style.paddingLeft = "0px";
	mainContentContainer.style.paddingLeft = "0px";
	sideBar.style.margin = "0px";
	
	mainContent.removeChild(commentSection);
	sideBarContent.removeChild(advertSection);
}