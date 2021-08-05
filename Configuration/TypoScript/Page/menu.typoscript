// Draw main menu
menu.main = HMENU
menu.main {
	
	special = directory
	special.value = {$ns_basetheme.website.settings.main_menu}
		
	1 = TMENU
	1 {
		wrap = <ul class="navbar-nav ml-auto">|</ul>
		expAll = 1
		noBlur = 1
		
		NO = 1
		NO {
			ATagTitle {
				field = title
				fieldRequired = nav_title
			}
			ATagParams = class="nav-link"
			
			wrapItemAndSub.insertData = 1
			wrapItemAndSub = <li class="nav-item first menu-{field:uid}">|</li> |*| <li class="nav-item menu-{field:uid}">|</li>
			stdWrap.htmlSpecialChars = 1			
		}
		
		IFSUB < .NO
		IFSUB {
			wrapItemAndSub.insertData = 1
			wrapItemAndSub = <li class="nav-item menu-{field:uid}">|</li>
		}
	
		ACT < .NO
		ACT {
			ATagParams = class="nav-link parent_menu active"
			wrapItemAndSub = <li class="active nav-item first menu-{field:uid}">|</li> |*| <li class="nav-item active menu-{field:uid}">|</li>
		}

		CUR < .NO
		CUR {
			ATagParams = class="nav-link parent_menu active"
			wrapItemAndSub = <li class="nav-item first active menu-{field:uid}">|</li> |*| <li class="nav-item active menu-{field:uid}">|</li>
		}
	}
	
	2 < .1
	2.wrap = <ul>|</ul>
	2.NO.ATagParams >
	2.ACT.ATagParams = class="active"
	2.CUR.ATagParams = class="active"
	2.NO.wrapItemAndSub = <li>|</li>
		
	3 < .2	
	// 3.NO.doNotLinkIt = 1 |*| 0 |*| 0
}