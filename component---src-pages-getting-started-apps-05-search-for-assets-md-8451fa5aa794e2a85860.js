"use strict";(self.webpackChunkstock_api_docs=self.webpackChunkstock_api_docs||[]).push([[923],{8751:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return p}});var r=a(7462),n=a(3366),s=(a(5007),a(4983)),o=a(1515),l=["components"],i={},m={_frontmatter:i},d=o.Z;function p(e){var t=e.components,a=(0,n.Z)(e,l);return(0,s.mdx)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"search-for-assets"},"Search for assets"),(0,s.mdx)("p",null,"Convert your app requirements into commands and build your search query using the Search API reference."),(0,s.mdx)("h2",{id:"overview"},"Overview"),(0,s.mdx)("p",null,"To perform a search, you will call to the Search/Files endpoint and supply one or more search_parameter commands, which form the heart of your search query. Your search URL can perform three tasks:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"Specify a search type.")," Choose whether to search on keywords, image similarity, or search on a particular asset ID, creator ID, etc."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"Filter values.")," By default, the query will return all types of assets that can be found on the ",(0,s.mdx)("a",{parentName:"li",href:"https://stock.adobe.com/"},"Adobe Stock")," website, e.g., images, videos, templates, 3D, etc. Using filters, you can choose to search only on certain asset types (e.g., images) and subtypes (e.g., vector images), or only assets that have certain characteristics (e.g., images that are horizontal and greater than 20 megapixels)."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"Set response fields.")," The Search API will only return a default set of fields in the JSON response unless you override this behavior and tell it which fields you want. There are many more fields available than what is returned by default, for performance reasons.")),(0,s.mdx)("h2",{id:"practical-search-example"},"Practical search example"),(0,s.mdx)("blockquote",null,(0,s.mdx)("p",{parentName:"blockquote"},(0,s.mdx)("strong",{parentName:"p"},(0,s.mdx)("em",{parentName:"strong"},"Did you know?"))," You can earn commissions from hosting Adobe Stock search and banners on your website that lead to conversions. See a detailed guide at ",(0,s.mdx)("a",{parentName:"p",href:"https://medium.com/adobetech/get-paid-to-search-adobe-stock-e2ba9a7c0312"},"Get Paid to Search Adobe Stock!"))),(0,s.mdx)("p",null,"You have been asked to create a simple web page that lets a user enter a word and show them the most-downloaded photo result along with a title. Furthermore, you want the image to be displayed at 800 pixels size, and have a clickable link that takes the user to a page on the Adobe Stock website where the image can be licensed."),(0,s.mdx)("p",null,'This example searches for the keyword "dogs" and limits the results to 1.'),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US&search_parameters[words]=dogs&search_parameters[limit]=1\n")),(0,s.mdx)("p",null,"This URL won't work as is, because it lacks the headers we created earlier. When complete, it would look like this in HTTP format:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"GET /Rest/Media/1/Search/Files?locale=en_US\n&search_parameters[words]=dogs&search_parameters[limit]=1 HTTP/1.1\nHost: stock.adobe.io\nX-Product: MySampleApp/1.0\nX-API-Key: YourApiKeyHere\n")),(0,s.mdx)("p",null,"And like this using the ",(0,s.mdx)("a",{parentName:"p",href:"https://curl.haxx.se/"},"curl"),' format. Curls are convenient because they can be run from a terminal/command line program. Just be sure to remove the extra line breaks and substitute "YourAPIKeyHere" placeholder text with your own values.'),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},'curl "https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US\n    &search_parameters%5Bwords%5D=dogs&search_parameters%5Blimit%5D=1" \\\n  -H "x-api-key: YourApiKeyHere" \\\n  -H "x-product: MySampleApp/1.0"\n')),(0,s.mdx)("p",null,"Note that the square brackets ",(0,s.mdx)("strong",{parentName:"p"},"[ ]")," have been ",(0,s.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Url_encoding"},"URL-encoded")," as ",(0,s.mdx)("strong",{parentName:"p"},"%5B")," and ",(0,s.mdx)("strong",{parentName:"p"},"%5D"),", respectively. The curl application has issues processing these characters (and they should be not be sent in plain text over HTTP), so it is recommended to encode them to web-safe entities."),(0,s.mdx)("p",null,"If you supplied a valid API key, you should see something like this. The first line (",(0,s.mdx)("inlineCode",{parentName:"p"},"nb_results"),") tells you that it found 930,400 results, and results are contained in a ",(0,s.mdx)("inlineCode",{parentName:"p"},"files[]")," array."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "nb_results": 930400,\n    "files": [\n        {\n            "id": 86760419,\n            "title": "German Shepherd Dog Sticking Head Out Driving Car Window",\n            "width": 3454,\n            "height": 2303,\n            "creator_name": "Christin Lola",\n            "creator_id": 204004289,\n            "thumbnail_url": "https://as1.ftcdn.net/jpg/00/86/76/04/500_F_86760419_NEhOeuriYu82RwfgDqjTeIL9yx7ih5iv.jpg",\n            "thumbnail_html_tag": "<img src=\\"https://as1.ftcdn.net/jpg/00/86/76/04/500_F_86760419_NEhOeuriYu82RwfgDqjTeIL9yx7ih5iv.jpg\\" alt=\\"German Shepherd Dog Sticking Head Out Driving Car Window\\" title=\\"Photo: German Shepherd Dog Sticking Head Out Driving Car Window\\" zoom_ratio=\\"1.4692685255\\" zoom_depth_max=\\"2\\" />",\n            "thumbnail_width": 500,\n            "thumbnail_height": 334,\n            "media_type_id": 1,\n            "vector_type": null,\n            "content_type": "image/jpeg",\n            "category": {\n                "id": 47,\n                "name": "Dogs"\n            },\n            "stock_id": "NEhOeuriYu82RwfgDqjTeIL9yx7ih5iv",\n            "premium_level_id": 0\n        }\n    ]\n}\n')),(0,s.mdx)("p",null,"All valid responses from the Stock API are returned as JSON, as seen above. Note the JSON has been formatted for easier reading--if you are working from the command line, it's recommended you use a service like the ",(0,s.mdx)("a",{parentName:"p",href:"http://jsbeautifier.org/"},"Online JavaScript Beautifier")," to clean up the results, or better yet, use a dedicated API testing app like ",(0,s.mdx)("a",{parentName:"p",href:"https://www.getpostman.com/"},"Postman"),", which makes the work simple."),(0,s.mdx)("p",null,"So far, we have used two of the three abilities of the Search API:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},'We chose a search type (words), and set it to search on a keyword ("dogs").'),(0,s.mdx)("li",{parentName:"ul"},"We told it to filter (limit) the results to one asset.")),(0,s.mdx)("p",null,"For our simple application, we don't need all that extra metadata--we only need a few fields. Furthermore, we want some data that is not present, and also limit our search to photos, in order of popularity."),(0,s.mdx)("p",null,"After consulting the Search API reference, let's break down these extra requirements into additional API commands:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Only show photos")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"    search_parameters[filters][content_type:photo]=1\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Sort by most-downloaded")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"    search_parameters[order]=nb_downloads\n")),(0,s.mdx)("p",null,"And we'll use the third ability of the Search API to choose only the result fields (",(0,s.mdx)("inlineCode",{parentName:"p"},"result_columns"),") we want for our app. If you look at the documentation for result_columns, you'll see that only one of the fields is returned by default (",(0,s.mdx)("inlineCode",{parentName:"p"},"title"),"). You can add as many result_columns to your URL as you need:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Get the title")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"    result_columns[]=title\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Get a link that goes to the Adobe Stock page for that image")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"    result_columns[]=details_url\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Because the default image result is 500, we need a larger size for our 800px requirement. So we'll get the 1000px thumbnail instead:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"    result_columns[]=thumbnail_1000_url\n")),(0,s.mdx)("p",null,"Here is the final URL before encoding and adding headers:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"    https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US&search_parameters[words]=dogs&search_parameters[limit]=1&search_parameters[filters][content_type:photo]=1&search_parameters[order]=nb_downloads&result_columns[]=title&result_columns[]=details_url&result_columns[]=thumbnail_1000_url\n")),(0,s.mdx)("p",null,"Let's test it out with a new curl (remember to plug in your API key):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},'curl "https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US\n&search_parameters%5Bwords%5D=dogs&search_parameters%5Blimit%5D=1&search_parameters%5Bfilters%5D%5Bcontent_type%3Aphoto%5D=1&search_parameters%5Border%5D=nb_downloads&result_columns%5B%5D=title&result_columns%5B%5D=details_url&result_columns%5B%5D=thumbnail_1000_url" \\\n  -H "x-api-key: YourApiKeyHere" \\\n  -H "x-product: MySampleApp/1.0"\n')),(0,s.mdx)("p",null,"And get back our filtered results:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "files": [\n        {\n            "title": "Young puppy listening to music on a head set.",\n            "details_url": "https://stock.adobe.com/5684305?as_channel=affiliate&as_source=api&as_content=cfc3d3bd68784b8cbeec1ad707c2aecb",\n            "thumbnail_1000_url": "https://as2.ftcdn.net/jpg/00/05/68/43/1000_F_5684305_J1w2x70BL9gKf9EI5X9FRE2DPyXQDUPM.jpg"\n        }\n    ]\n}\n')),(0,s.mdx)("p",null,"Since the Adobe Stock collection is constantly evolving, the result you get may be very different, but you will get back something. Now let's create a simple HTML snippet for our \"application\" and we're done. See the awesome results ",(0,s.mdx)("a",{href:"https://cfsdemos.worldsecuresystems.com/stock/api/simple_app_result.html",target:"_blank"},"here"),"!"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'<h1>Young puppy listening to music on a head set.</h1>\n<a href="https://stock.adobe.com/5684305?as_channel=affiliate&amp;as_source=api&amp;as_content=cfc3d3bd68784b8cbeec1ad707c2aecb">\n  <img style="width:800px; height:auto" src="https://as2.ftcdn.net/jpg/00/05/68/43/1000_F_5684305_J1w2x70BL9gKf9EI5X9FRE2DPyXQDUPM.jpg">\n</a>\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},">",">",">"," NEXT:")," Review the ",(0,s.mdx)("a",{parentName:"p",href:"#tips-and-techniques"},"tips and techniques")," below, or continue ahead to learn how to use the ",(0,s.mdx)("a",{parentName:"p",href:"./06-licensing-assets.md"},"Licensing API"),"!"),(0,s.mdx)("h2",{id:"tips-and-techniques"},"Tips and techniques"),(0,s.mdx)("h3",{id:"paginating-results"},"Paginating results"),(0,s.mdx)("p",null,"Although a search request might find thousands of matching assets, search results include only a maximum of 64 for each call (and 32 results by default). If your results page layout displays a certain quantity of assets, you can limit each call to returning that quantity, and then call Search again to get the next set."),(0,s.mdx)("p",null,"To do this:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"On your search call, use the ",(0,s.mdx)("inlineCode",{parentName:"li"},"limit")," parameter to control the number of results to return with each call.",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"If this is the initial call to Search, set the ",(0,s.mdx)("inlineCode",{parentName:"li"},"offset")," parameter to zero (0)."))),(0,s.mdx)("li",{parentName:"ol"},"Display your first page of results by parsing the JSON response."),(0,s.mdx)("li",{parentName:"ol"},"If your user requests another page of results, add the ",(0,s.mdx)("inlineCode",{parentName:"li"},"limit")," value to the ",(0,s.mdx)("inlineCode",{parentName:"li"},"offset")," attribute and repeat the two preceding steps.")),(0,s.mdx)("h4",{id:"pagination-example"},"Pagination example"),(0,s.mdx)("p",null,"Request first 16 results"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US&search_parameters[words]=dogs&search_parameters[limit]=16&search_parameters[offset]=0\n")),(0,s.mdx)("p",null,"Get next 16 results"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US&search_parameters[words]=dogs&search_parameters[limit]=16&search_parameters[offset]=16\n")),(0,s.mdx)("h3",{id:"change-the-order-of-your-results"},"Change the order of your results"),(0,s.mdx)("p",null,"By default, Search returns assets sorted in descending order by how closely they match your search and filtering requirements.  You can change that order with ",(0,s.mdx)("inlineCode",{parentName:"p"},"search_parameters[order]"),"."),(0,s.mdx)("p",null,"Valid orders and their meanings:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"relevance"),": How closely it matches your search request, closest matches first (default)."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"creation"),": Creation date in descending order (newest first)."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"featured"),": Attempts to display the highest quality content first, as scored by Adobe Sensei's machine learning algorithms. In practice, it performs best on lifestyle imagery."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"nb_downloads"),": In descending order by the number of downloads by all users since the asset was added to Adobe Stock."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"undiscovered"),": Starting with assets that have not commonly been viewed or downloaded.")),(0,s.mdx)("p",null,"Example:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US&search_parameters[words]=dogs&search_parameters[order]=undiscovered\n")),(0,s.mdx)("h3",{id:"similarity-visual-search"},"Similarity (visual) search"),(0,s.mdx)("p",null,"One of the most useful and powerful capabilities of the Search API is to return results that are visually similar to a base image, and then filter further by adding additional attributes. This functionality is powered by the machine learning AI of ",(0,s.mdx)("a",{parentName:"p",href:"http://www.adobe.com/sensei.html"},"Adobe Sensei"),"."),(0,s.mdx)("p",null,"The Search API supports three types of visual search:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Similar to the image being uploaded.")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"    search_parameters[similar_image]=1&similar_image=<FILE>\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Similar to an image URL.")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"    search_parameters[similar_url]=<URL>\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Similar to an existing Stock ID.")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"    search_parameters[similar]=<ID>\n")),(0,s.mdx)("h4",{id:"image-similarity-post-example"},"Image similarity POST example"),(0,s.mdx)("p",null,"Searching on a similar URL or Stock ID works exactly like the previous search examples that use an HTTP GET, while comparing to an uploaded image requires a multipart form POST, and accepts JPG, PNG, or GIF files."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'POST /Rest/Media/1/Search/Files?locale=en_US&search_parameters[similar_image]=1&search_parameters[filters][content_type:photo]=1 HTTP/1.1\nHost: stock.adobe.io\nX-Product: MySampleApp/1.0\nX-API-Key: YourApiKeyHere\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\n\n------WebKitFormBoundary7MA4YWxkTrZu0gW\nContent-Disposition: form-data; name="similar_image"; filename="myImage.jpg"\nContent-Type: image/jpeg\n\n------WebKitFormBoundary7MA4YWxkTrZu0gW--\n')),(0,s.mdx)("p",null,"Stock API will return JSON results exactly as if you had searched on text or some other type."),(0,s.mdx)("h4",{id:"combining-visual-search-with-other-filters"},"Combining visual search with other filters"),(0,s.mdx)("p",null,"In addition to searching for results similar to the image you specify, you can narrow the results by adding keywords, colors and other qualifiers. This example searches for a public-domain image of a pumpkin using a ",(0,s.mdx)("inlineCode",{parentName:"p"},"similar_url")," search type, but adds a ",(0,s.mdx)("inlineCode",{parentName:"p"},"colors")," filter to find images that also have a dark shade of blue. You could add more colors to the query (the command accepts a comma-separated list of RGB hex values), but that might limit the search results too much. Note that the image URL in this example may expire, but you can use any valid image URL for your search."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},'curl "https://stock.adobe.io/Rest/Media/1/Search/Files?\nsearch_parameters%5Bsimilar_url%5D=http%3A%2F%2Ftinyurl.com%2Fyc5kag79&search_parameters%5Bfilters%5D%5Bcontent_type=photo%5D%3A1&search_parameters%5Bfilters%5D%5Bcolors%5D=004358" \\\n  -H "x-api-key: YourApiKeyHere" \\\n  -H "x-product: MySampleApp/1.0"\n')),(0,s.mdx)("h3",{id:"jump-to-a-search-results-page-on-adobe-stock"},"Jump to a search results page on Adobe Stock"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"details_url")," will direct an end user to a page on the Adobe Stock website where they can license and see more information about ",(0,s.mdx)("em",{parentName:"p"},"one")," asset, but what if you wanted to redirect the user to a page where they can view search results for ",(0,s.mdx)("em",{parentName:"p"},"multiple"),' assets? For example, if your website only shows the first few results from Adobe Stock, and then encourages users to "click for more" results. When the user is redirected to Adobe Stock from your link, they don\'t want to lose the context in which they were searching and have to start over--that would make for a frustrating experience.'),(0,s.mdx)("p",null,"The Adobe Stock Search API allows a client (desktop, web, or mobile) to launch the Adobe Stock website with specific search term(s). The website has robust functionality that you may not want to replicate on your own site using the Search API. There is a documented API reference for this functionality, but here are some quick examples to get started."),(0,s.mdx)("h4",{id:"search-by-keyword"},"Search by keyword"),(0,s.mdx)("p",null,"Use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"k")," parameter. Example:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://stock.adobe.com/search?k=kittens\n")),(0,s.mdx)("h4",{id:"filter-by-photos-vectors-video-etc"},"Filter by photos, vectors, video, etc."),(0,s.mdx)("p",null,"Use these parameters:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Photos.\n",(0,s.mdx)("inlineCode",{parentName:"p"},"filters[content_type:photo]=1"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Illustrations (bitmap).\n",(0,s.mdx)("inlineCode",{parentName:"p"},"filters[content_type:illustration]=1"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Vector images (Illustrator AI, EPS files).\n",(0,s.mdx)("inlineCode",{parentName:"p"},"filters[content_type:zip_vector]=1"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Videos.\n",(0,s.mdx)("inlineCode",{parentName:"p"},"filters[content_type:video]=1")))),(0,s.mdx)("p",null,"Example: Search for vector artwork of cats."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://stock.adobe.com/search?k=cats&filters[content_type:zip_vector]=1\n")),(0,s.mdx)("h4",{id:"search-on-standard-or-premium-content"},"Search on standard or Premium content"),(0,s.mdx)("p",null,"Use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"price[_$_]")," parameter:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Standard/core assets\n",(0,s.mdx)("inlineCode",{parentName:"li"},"price[$]=1")),(0,s.mdx)("li",{parentName:"ul"},"Premium tier 1\n",(0,s.mdx)("inlineCode",{parentName:"li"},"price[$$]=1")),(0,s.mdx)("li",{parentName:"ul"},"Premium tier 2\n",(0,s.mdx)("inlineCode",{parentName:"li"},"price[$$$]=1"))),(0,s.mdx)("p",null,"Example: Find Premium assets about stars"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://stock.adobe.com/search?k=stars&price[$$]=1&price[$$$]=1\n")),(0,s.mdx)("h4",{id:"important-get-tracking-credit"},"Important: Get tracking credit"),(0,s.mdx)("p",null,'If you want your application to get referral credit for the search, meaning that you have joined the Adobe Partner/Affiliate program and receive a "bounty" for referral traffic, then make sure you add add the same parameters that are present on your details_url. See the discussion of using this data in the ',(0,s.mdx)("a",{parentName:"p",href:"#practical-search-example"},"practical search example"),", above."),(0,s.mdx)("p",null,"Example:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://stock.adobe.com/search?k=kittens&as_channel=affiliate&as_source=api\n&as_content=cfc3d3bd68784b8cbeec1ad707c2aecb\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-apps-05-search-for-assets-md-8451fa5aa794e2a85860.js.map