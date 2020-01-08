# Let's overwrite default paths of EXT:news
plugin.tx_news {
	view {
		templateRootPaths {
			0 = EXT:ns_theme_cleanblog/Resources/Private/Extensions/news/Templates/
			1 = {$plugin.tx_news.view.templateRootPath}
		}

		partialRootPaths {
			0 = EXT:ns_theme_cleanblog/Resources/Private/Extensions/news/Partials/
			1 = {$plugin.tx_news.view.partialRootPath}
		}

		layoutRootPaths {
			0 = EXT:ns_theme_cleanblog/Resources/Private/Extensions/news/Layouts/
			1 = {$plugin.tx_news.view.layoutRootPath}
		}
	}
}

# Used when need to extend news plugin
# plugin.tx_news {
#     persistence {
#         classes {
#             GeorgRinger\News\Domain\Model\News {
#                     subclasses {
#                             0 = TYPO3\nsCleanblog\Domain\Model\News
#                     }
#             }
#            TYPO3\nsCleanblog\Domain\Model\News {
#                     mapping {
#                             recordType = 0
#                             tableName = tx_news_domain_model_news
#                     }
#             }
#         }
#     }
# }