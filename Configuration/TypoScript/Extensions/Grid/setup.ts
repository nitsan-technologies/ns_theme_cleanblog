tt_content.gridelements_pi1.20.10.setup {

    # Two column grid container
    4 < lib.gridelements.defaultGridSetup
    4 {
    	columns {
            1 {
            	renderObj =< tt_content
                wrap = <div class="container"><div class="row"><div class="col-lg-8 col-md-10 mx-auto">|</div></div></div>
            }
        }
        wrap = |
    }
    
}