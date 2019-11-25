# Let's define some constants for global configuration
ns_theme_cleanblog {	
	website {
		colors{
			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Default(<p>) color
			defaultColor = #7c7c7c

			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Theme color
			brandColor = #2da4e9

			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Link(<a>) hover color
			aHoverColor = #2da4e9

			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Button hover color
			buttonHoverColor = #137bb7

			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Button color
			buttonColor = #2DA4E9

			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Background color
			backgroundColor =  #00132D

			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Body Background Color
			bodyBackgroundColor = #ffffff

			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Link(<a>) color
			defaultLinkColor =  #7C7C7C

			#cat = ns_theme_cleanblog/website/colors/07; type=color; label= Heading color
			headingColor = #7c7c7c
		}

		fonts{
			#cat = ns_theme_cleanblog/website/fonts/10; type=string; label= Default google font url
			googleFontURL =	https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800

			#cat = ns_theme_cleanblog/website/fonts/11; type=string; label= Heading google font url
			headingFontsURL = https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic

			#cat = ns_theme_cleanblog/website/fonts/12; type=string; label= Default(<p>) font family name
			defaultFontsName = 'lora'

			#cat = ns_theme_cleanblog/website/fonts/13; type=string; label= Heading font family name
			headingFontsName = 'lora'
		}
		settings {
			#cat = ns_theme_cleanblog/website/settings/01; type=string; label=Footer Facebook Link
			facebook = 

			#cat = ns_theme_cleanblog/website/settings/02; type=string; label=Footer Twitter Link
			twitter = 

			#cat = ns_theme_cleanblog/website/settings/03; type=string; label=Footer Github Link
			github = 
		}
		paths {
			#cat = ns_theme_cleanblog/website/settings/01; type=string; label=Template Path
			templateRootPath = typo3conf/ext/ns_theme_cleanblog/Resources/Private/Templates/

			#cat = ns_theme_cleanblog/website/settings/02; type=string; label=Layouts Path
			layoutRootPath = typo3conf/ext/ns_theme_cleanblog/Resources/Private/Layouts/

			#cat = ns_theme_cleanblog/website/settings/03; type=string; label=Partials Path
			partialRootPath = typo3conf/ext/ns_theme_cleanblog/Resources/Private/Partials/
		}
	}
}
