plugin.tx_nsCleanblog.settings.facebook = {$ns_theme_cleanblog.website.settings.facebook}
plugin.tx_nsCleanblog.settings.twitter = {$ns_theme_cleanblog.website.settings.twitter}
plugin.tx_nsCleanblog.settings.github = {$ns_theme_cleanblog.website.settings.github}
plugin.tx_nsCleanblog.settings.logo = {$ns_basetheme.website.settings.logo}
plugin.tx_nsCleanblog.settings.rootpage = {$ns_basetheme.website.settings.rootpage}

plugin.tx_nsCleanblog.settings.defaultColor = {$ns_theme_cleanblog.website.colors.defaultColor}
plugin.tx_nsCleanblog.settings.brandColor = {$ns_theme_cleanblog.website.colors.brandColor}
plugin.tx_nsCleanblog.settings.aHoverColor = {$ns_theme_cleanblog.website.colors.aHoverColor}
plugin.tx_nsCleanblog.settings.buttonHoverColor = {$ns_theme_cleanblog.website.colors.buttonHoverColor}
plugin.tx_nsCleanblog.settings.buttonColor = {$ns_theme_cleanblog.website.colors.buttonColor}
plugin.tx_nsCleanblog.settings.backgroundColor = {$ns_theme_cleanblog.website.colors.backgroundColor}
plugin.tx_nsCleanblog.settings.bodyBackgroundColor = {$ns_theme_cleanblog.website.colors.bodyBackgroundColor}
plugin.tx_nsCleanblog.settings.defaultLinkColor = {$ns_theme_cleanblog.website.colors.defaultLinkColor}
plugin.tx_nsCleanblog.settings.headingColor = {$ns_theme_cleanblog.website.colors.headingColor}

plugin.tx_nsCleanblog.settings.googleFontURL = {$ns_theme_cleanblog.website.fonts.googleFontURL}
plugin.tx_nsCleanblog.settings.headingFontsURL = {$ns_theme_cleanblog.website.fonts.headingFontsURL}
plugin.tx_nsCleanblog.settings.defaultFontsName = {$ns_theme_cleanblog.website.fonts.defaultFontsName}
plugin.tx_nsCleanblog.settings.headingFontsName = {$ns_theme_cleanblog.website.fonts.headingFontsName}

plugin.tx_nsCleanblog.settings.linktext = {$ns_theme_cleanblog.website.hfooter.linktext}
plugin.tx_nsCleanblog.settings.link = {$ns_theme_cleanblog.website.hfooter.link}



// Initiate Page Object
page = PAGE
page {
	// Setup favion

	// Set viewport
	meta {
		viewport = width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no
	}

    headerData {
        10 = TEXT
        10.value (
            <link rel="shortcut icon" href="typo3conf/ext/ns_theme_cleanblog/Resources/Public/img/favicon.ico">
            <script>
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', '{$ns_theme_cleanblog.website.settings.googleanalytics}', 'auto');
              ga('send', 'pageview');
            </script>
        )
    }

	// Initiate all the css-together
	includeCSS {
		20 = 
		50 = typo3conf/ext/ns_theme_cleanblog/Resources/Public/vendor/fontawesome-free/css/all.min.css
		80 = typo3conf/ext/ns_theme_cleanblog/Resources/Public/css/clean-blog.min.css
		90 = typo3conf/ext/ns_theme_cleanblog/Resources/Public/css/custom.css
	}

	// Initiate all the js-together
	includeJSFooter {
		50 = typo3conf/ext/ns_theme_cleanblog/Resources/Public/js/clean-blog.min.js
	}
	// Let's start fluid_styled_content
	1 = FLUIDTEMPLATE
    1 {
        file = {$ns_theme_cleanblog.website.paths.partialRootPath}Css.html
        settings < plugin.tx_nsCleanblog.settings
    }
	10 = FLUIDTEMPLATE
	10 {
		layoutRootPath = {$ns_theme_cleanblog.website.paths.layoutRootPath}
		partialRootPath = {$ns_theme_cleanblog.website.paths.partialRootPath}
		templateRootPath = {$ns_theme_cleanblog.website.paths.templateRootPath}

		// Let's automatically choose backend layout and template
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout
			
			default = TEXT
			default.value = {$ns_theme_cleanblog.website.paths.templateRootPath}Default.html

			pagets__content = TEXT
			pagets__content.value = {$ns_theme_cleanblog.website.paths.templateRootPath}FullWIdth.html
		}
		settings < plugin.tx_nsCleanblog.settings
	}
}

lib.pageResources = FILES 
lib.pageResources { 
	references.data = levelmedia:-1,slide
	references.listNum = 0
	renderObj = TEXT
	renderObj.data = file:current:publicUrl
}
lib.authordetail = TEXT 
lib.authordetail.value = {$ns_theme_cleanblog.website.settings.auth-detail}


lib.copyright >
lib.copyright = COA
lib.copyright {
    stdWrap.wrap = |

    1 = TEXT
    1 {
        current = 1
        strftime = %Y
        wrap = &copy;&nbsp;|&nbsp;
    }

    2 = TEXT
    2 {
        value = {$ns_basetheme.website.settings.copyright}
        wrap = |
    }
}
