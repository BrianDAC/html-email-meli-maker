'use strict';

angular.module('brianDAC.html-tables-editor', [])
	.service("generateStructure", function($window) {
		this.newText = function(text, fontSize, color) {
			if (!fontSize) fontSize= 13;
			if (!color) color= 'rgb(163, 162, 162)';
			if (!text) text= 'Muestra';
			var html = '<tr> <td align="center" valign="top" class="fix-box trBlock">' +
						'<table width="600" align="center" border="0" cellspacing="0" cellpadding="0" class="container" style="background-color: #ffffff; padding-left:20px; padding-right:20px;"><tbody>' +
						'<tr><td valign="top"><table width="560" align="center" border="0" cellspacing="0" cellpadding="0" class="full-width" style="background-color:#ffffff; "><tbody><tr>' +
						'<td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td valign="top"><table border="0" cellspacing="0" cellpadding="0" align="center">' +
						'<tbody><tr><td height="15"></td></tr><tr><td class="textTable" style="font-size: '+fontSize+'px; line-height: 22px; font-family: Roboto, &quot;Open Sans&quot;, Arial, Tahoma, Helvetica, sans-serif; color: '+color+'; font-weight: 300; text-align: center; position: relative; cursor: auto;">' +
						text + '</td></tr><tr><td height="15"></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="20"></td></tr></tbody></table></td></tr></tbody></table></td></tr>'
			return html;	
		}
		this.newImage = function(url) {
			if (!url) url = 'images/header-image.jpg';
			var html = '<tr>'+
			                '<td align="center" valign="top" class="fix-box trBlock">'+
			                    '<table width="600" align="center" border="0" cellspacing="0" cellpadding="0" class="full-width">'+
			                        '<tbody>'+
			                            '<tr>'+
			                                '<td valign="top" class="image-100-percent" style="position: relative;">'+
			                                    '<img src="'+url+'" width="600" alt="header-image" style="display:block !important;  max-width:600px;">'+
			                                '</td>'+
			                            '</tr>'+
			                        '</tbody>'+
			                    '</table>'+
			                '</td>'+
			            '</tr>'
			return html;	
		}
		this.newSeparator = function(size, color, transparent) {
			if (!size) size = 20;
			if (!color) color = '#000000';
			if (transparent) color = 'transparent';
			var html = '<tr>'+
			                '<td valign="top" align="center" class="fix-box trBlock" style="position: relative; cursor: auto;">'+
			                    '<table width="600" height="'+size+'" align="center" border="0" cellspacing="0" cellpadding="0" style="background-color: '+color+';" class="full-width">'+
			                        '<tbody>'+
			                            '<tr>'+
			                                '<td valign="top" height="'+size+'" style="position: relative;" class="editing"></td>'+
			                            '</tr>'+
			                        '</tbody>'+
			                    '</table>'+
			                '</td>'+
			            '</tr>'
			return html;	
		}
		this.newLine = function(color) {
			if (!color) color = '#000000';
			var html = '<tr>'+
			                '<td valign="top" align="center" class="fix-box trBlock" style="position: relative; cursor: auto;">'+
			                    '<table width="600" height="1" align="center" border="0" cellspacing="0" cellpadding="0" style="background-color: '+color+';" class="full-width">'+
			                        '<tbody>'+
			                            '<tr>'+
			                                '<td valign="top" height="1" style="position: relative;" class="editing"></td>'+
			                            '</tr>'+
			                        '</tbody>'+
			                    '</table>'+
			                '</td>'+
			            '</tr>'
			return html;	
		}
		this.newButton = function(text, textColor, backGroundColor, width, fontSize, url) {
			if (!textColor) textColor = '#ffffff';
			if (!backGroundColor) backGroundColor = 'rgb(208, 93, 104)';
			if (!width) width = 'auto';
			if (!fontSize) fontSize = '13';
			if (!url) url = $window.location.origin;
			if (!text) text = 'Boton';
			var html = '<tr>'+
			                '<td align="center" valign="top" class="fix-box trBlock trEdit" href="#trModal" style="position: relative; cursor: pointer;">'+
			                    '<table width="600" align="center" border="0" cellspacing="0" cellpadding="0" class="container" style="background-color: #ffffff; padding-left:20px; padding-right:20px;">'+
			                        '<tbody>'+
			                            '<tr>'+
			                                '<td valign="top">'+
			                                    '<table width="560" align="center" border="0" cellspacing="0" cellpadding="0" class="full-width" style="background-color:#ffffff; ">'+
			                                        '<tbody>'+
			                                            '<tr>'+
			                                                '<td valign="top">'+
			                                                    '<table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">'+
			                                                        '<tbody>'+
			                                                            '<tr>'+
			                                                                '<td valign="top" width="auto" align="center">'+
			                                                                    '<table border="0" align="center" cellpadding="0" cellspacing="0" width="'+width+'%">'+
			                                                                        '<tbody>'+
			                                                                            '<tr>'+
			                                                                                '<td class="btnTable btnEdit" width="auto" align="center" valign="middle" height="32" style="background-color: '+backGroundColor+'; border-radius: 5px; border: 1px solid rgb(236, 236, 237); background-clip: padding-box; font-size: 13px; font-family: Roboto, &quot;Open Sans&quot;, Arial, Tahoma, Helvetica, sans-serif; text-align: center; color: rgb(208, 93, 104); font-weight: 300; padding-left: 18px; padding-right: 18px; position: relative; cursor: pointer;" onclick="editBtn()" href="#btnModal">'+
			                                                                                    '<span title="textColor" style="color: '+textColor+'; font-weight: 300;">'+
															                                        '<a href="'+$window.location.origin+'/newClick?redirectUrl='+url+'" title="textColor" style="text-decoration: none; color: '+textColor+'; font-weight: 300; font-size: '+fontSize+'px;">'+
															                                        	text+
															                                        '</a>'+
															                                    '</span>'+
			                                                                                '</td>'+
			                                                                            '</tr>'+
			                                                                        '</tbody>'+
			                                                                    '</table>'+
			                                                                '</td>'+
			                                                            '</tr>'+
			                                                        '</tbody>'+
			                                                    '</table>'+
			                                                '</td>'+
			                                            '</tr>'+
			                                        '</tbody>'+
			                                    '</table>'+
			                                '</td>'+
			                            '</tr>'+
			                        '</tbody>'+
			                    '</table>'+
			                '</td>'+
			            '</tr>'
			return html;	
		}
	})
	.controller("controller", function($scope, generateStructure) {
		$scope.products = [{
			"id": "MLA608007087",
			"site_id": "MLA",
			"title": "Item De Testeof",
			"subtitle": null,
			"seller_id": 202593498,
			"category_id": "MLA3530",
			"official_store_id": null,
			"price": 10,
			"base_price": 10,
			"original_price": null,
			"currency_id": "ARS",
			"initial_quantity": 1,
			"available_quantity": 1,
			"sold_quantity": 0,
			"buying_mode": "buy_it_now",
			"listing_type_id": "gold_special",
			"start_time": "2016-02-26T17:26:07.000Z",
			"stop_time": "2036-02-21T17:26:07.000Z",
			"end_time": "2036-02-21T17:26:07.000Z",
			"condition": "new",
			"permalink": "http://articulo.mercadolibre.com.ar/MLA-608007087-item-de-testeo-por-favor-no-ofertar-kcoff-_JM",
			"thumbnail": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"secure_thumbnail": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"pictures": [{
				"id": "614711-MLA20604586883_022016",
				"url": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"secure_url": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"size": "320x320",
				"max_size": "320x320",
				"quality": ""
			}]
		}, {
			"id": "MLA608007087",
			"site_id": "MLA",
			"title": "Item De Prubea",
			"subtitle": null,
			"seller_id": 202593498,
			"category_id": "MLA3530",
			"official_store_id": null,
			"price": 10,
			"base_price": 10,
			"original_price": null,
			"currency_id": "ARS",
			"initial_quantity": 1,
			"available_quantity": 1,
			"sold_quantity": 0,
			"buying_mode": "buy_it_now",
			"listing_type_id": "gold_special",
			"start_time": "2016-02-26T17:26:07.000Z",
			"stop_time": "2036-02-21T17:26:07.000Z",
			"end_time": "2036-02-21T17:26:07.000Z",
			"condition": "new",
			"permalink": "http://articulo.mercadolibre.com.ar/MLA-608007087-item-de-testeo-por-favor-no-ofertar-kcoff-_JM",
			"thumbnail": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"secure_thumbnail": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"pictures": [{
				"id": "614711-MLA20604586883_022016",
				"url": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"secure_url": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"size": "320x320",
				"max_size": "320x320",
				"quality": ""
			}]
		}, {
			"id": "MLA608007087",
			"site_id": "MLA",
			"title": "Lacreo",
			"subtitle": null,
			"seller_id": 202593498,
			"category_id": "MLA3530",
			"official_store_id": null,
			"price": 10,
			"base_price": 10,
			"original_price": null,
			"currency_id": "ARS",
			"initial_quantity": 1,
			"available_quantity": 1,
			"sold_quantity": 0,
			"buying_mode": "buy_it_now",
			"listing_type_id": "gold_special",
			"start_time": "2016-02-26T17:26:07.000Z",
			"stop_time": "2036-02-21T17:26:07.000Z",
			"end_time": "2036-02-21T17:26:07.000Z",
			"condition": "new",
			"permalink": "http://articulo.mercadolibre.com.ar/MLA-608007087-item-de-testeo-por-favor-no-ofertar-kcoff-_JM",
			"thumbnail": "https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png",
			"secure_thumbnail": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"pictures": [{
				"id": "614711-MLA20604586883_022016",
				"url": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"secure_url": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"size": "320x320",
				"max_size": "320x320",
				"quality": ""
			}]
		}, {
			"id": "MLA608007087",
			"site_id": "MLA",
			"title": "Mlanadre",
			"subtitle": null,
			"seller_id": 202593498,
			"category_id": "MLA3530",
			"official_store_id": null,
			"price": 10,
			"base_price": 10,
			"original_price": null,
			"currency_id": "ARS",
			"initial_quantity": 1,
			"available_quantity": 1,
			"sold_quantity": 0,
			"buying_mode": "buy_it_now",
			"listing_type_id": "gold_special",
			"start_time": "2016-02-26T17:26:07.000Z",
			"stop_time": "2036-02-21T17:26:07.000Z",
			"end_time": "2036-02-21T17:26:07.000Z",
			"condition": "new",
			"permalink": "http://articulo.mercadolibre.com.ar/MLA-608007087-item-de-testeo-por-favor-no-ofertar-kcoff-_JM",
			"thumbnail": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"secure_thumbnail": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"pictures": [{
				"id": "614711-MLA20604586883_022016",
				"url": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"secure_url": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"size": "320x320",
				"max_size": "320x320",
				"quality": ""
			}]
		}, {
			"id": "MLA608007087",
			"site_id": "MLA",
			"title": "Item De Testeo, Por Favor No Ofertar --kc:off",
			"subtitle": null,
			"seller_id": 202593498,
			"category_id": "MLA3530",
			"official_store_id": null,
			"price": 10,
			"base_price": 10,
			"original_price": null,
			"currency_id": "ARS",
			"initial_quantity": 1,
			"available_quantity": 1,
			"sold_quantity": 0,
			"buying_mode": "buy_it_now",
			"listing_type_id": "gold_special",
			"start_time": "2016-02-26T17:26:07.000Z",
			"stop_time": "2036-02-21T17:26:07.000Z",
			"end_time": "2036-02-21T17:26:07.000Z",
			"condition": "new",
			"permalink": "http://articulo.mercadolibre.com.ar/MLA-608007087-item-de-testeo-por-favor-no-ofertar-kcoff-_JM",
			"thumbnail": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"secure_thumbnail": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-I.jpg",
			"pictures": [{
				"id": "614711-MLA20604586883_022016",
				"url": "http://mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"secure_url": "https://a248.e.akamai.net/mla-s1-p.mlstatic.com/614711-MLA20604586883_022016-O.jpg",
				"size": "320x320",
				"max_size": "320x320",
				"quality": ""
			}]
		}]
	})
	.directive('bdac', function(generateStructure) {
		return {
			restrict: 'E',
			scope: {
				products: '=products',
				html: '=html',
			},
			templateUrl: 'template.html',
			link: function(scope, elements, attrs) {
				scope.edit = {};
				scope.image = {};
				scope.socialMedia = {
					facebook: "#",
					twitter: "#",
					google: "#",
					vimeo: "#",
					pinterest: "#",
					instagram: "#",
					linkedin: "#"
				};
				scope.productTitles = [];
				for (var i = 0; i < scope.products.length; i++) {
					scope.productTitles.push(scope.products[i].title)
				};
				scope.seeOnline = function() {
					$("#seeOnline").css('display', 'none');
					$(".editButtons").removeClass('editButtons')
					$(".bar").remove();
					var win = window.open();
					win.document.write($("#toEmail").html());
					win.document.close();
					$("#seeOnline").css('display', 'block');
				}
				scope.changeHeaderColor = function() {
					$(".headerNav").attr("bgcolor", scope.headerColor)
					$(".footerNav").attr("bgcolor", scope.headerColor)
				}
				scope.changeBackgroundColor = function() {
					$("#mainStructure").attr("bgcolor", scope.backgroundColor)
				}
				scope.editImage = function() {
					scope.image = {};
					$(".editing").removeClass("editing")

					if ($(".imgEdit").parent().children('img').length == 0) {
						scope.image.urlSource = $(".imgEdit").parent().children('a').children('img').attr('src')
						scope.image.urlRedirect = $(".imgEdit").parent().children('a').attr('href')
						scope.image.redirect = true;
					} else {
						scope.image.urlSource = $(".imgEdit").parent().children('img').attr('src')
					}
					$(".imgEdit").parent().addClass("editing")
					scope.$apply()
					$("#imgModal").openModal()

				}
				scope.updateImage = function() {
					if (scope.image.redirect) {
						$(".editing").children('a').attr('href', scope.image.urlRedirect);
						$(".editing").children('a').children('img').attr('src', scope.image.urlSource);
					} else {
						$(".editing").children('img').attr('src', scope.image.urlSource);
					}
					scope.image = {};
					scope.image.redirect = false;
					$(".editing").removeClass("editing")

				}
				scope.editBtn = function() {
					scope.btn = {};
					$(".editing").removeClass("editing")

					scope.btn.urlRedirect = $(".btnEdit").children('span').children('a').attr('href')
					scope.btn.textColor = $(".btnEdit").children('span').children('a').css("color")
					scope.btn.text = $(".btnEdit").children('span').children('a')[0].innerText
					scope.btn.bgColor = $(".btnEdit").attr("bgColor")
					$(".btnEdit").addClass("editing")
					scope.$apply()
					$("#btnModal").openModal()

				}
				scope.updateBtn = function() {
					$(".editing").children('span').children('a').attr('href', scope.btn.urlRedirect)
					$(".editing").children('span').children('a').css("color",scope.btn.textColor)
					$(".editing").children('span').children('a')[0].innerText = scope.btn.text
					$(".editing").css("background-color",scope.btn.bgColor)
					scope.btn = {};
					$(".editing").removeClass("editing");
					btnOut()

				}
				scope.editText = function() {
					scope.text = {};
					$(".editing").removeClass("editing")

					scope.text.textColor = $(".textEdit").css("color")
					scope.text.text = $(".textEdit")[0].innerText

					$(".textEdit").addClass("editing")
					scope.$apply()
					$("#textModal").openModal()

				}
				scope.updateText = function() {
					$(".editing")[0].innerText = scope.text.text
					$(".editing").css("color",scope.text.textColor)
					scope.text = {};
					$(".editing").removeClass("editing");
					textOut()

				}
				scope.editLinks = function() {
					scope.links = {};
					$(".editing").removeClass("editing")
					var links = $(".linksTable").children().length - 1;
					for (var i = 0; i < links; i++) {
						scope.links[i] = {};
						scope.links[i].urlRedirect = $(".linksTable").children("span:nth-child("+(i+1)+")").children("a").attr("href");
						scope.links[i].textColor = $(".linksTable").children("span:nth-child("+(i+1)+")").children("a").css("color");
						scope.links[i].text = $(".linksTable").children("span:nth-child("+(i+1)+")").children("a")[0].innerText;
					};
					$(".linksEdit").addClass("editing")
					scope.$apply()
					$("#linksModal").openModal()

				}
				scope.updateLinks = function() {
					var links = $(".linksTable").children().length;
					for (var i = 0; i < links; i++) {
						$(".linksTable").children("span:nth-child("+(i+1)+")").children("a").attr("href", scope.links[i].urlRedirect);
						$(".linksTable").children("span:nth-child("+(i+1)+")").children("a").css("color", scope.links[i].textColor);
						$(".linksTable").children("span:nth-child("+(i+1)+")").children("a")[0].innerText = scope.links[i].text;
					};
					scope.links = {};
					$(".editing").removeClass("editing");
					linksOut()

				}
				scope.editProducts = function() {
					scope.item = {};
					$(".editing").removeClass("editing")
					scope.item.title = $(".editItem").find(".itemTitle").find("a")[0].innerText.split("\n")[0];
					scope.item.subtitle = $(".editItem").find(".itemTitle").find("a")[0].innerText.split("\n")[1];
					scope.item.description = $(".editItem").find(".itemDescription")[0].innerText
					scope.item.img = $(".editItem").find(".itemImg").children("a")[0].href
					scope.items = [scope.item]

					$(".editItem").addClass("editing")
					scope.$apply()
					$('select').material_select();
					$("#itemsModal").openModal()

				}
				scope.updateProducts = function() {
					var product = scope.products[scope.item.product]
					$(".editItem").find(".itemTitle").find("a")[0].innerText = product.title;
					scope.item.subtitle = $(".editItem").find(".itemTitle").find("a")[0].innerText.split("\n")[1];
					$(".editItem").find(".itemDescription")[0].innerText = "Precio: "+ product.price.toFixed(2);	
					$(".editItem").find(".itemImg").children("a").attr("href",product.permalink);
					$(".editItem").find(".itemImg").children("a").children("img").attr("src",product.pictures[0].secure_url);

					$(".editItem").find(".itemButton:eq(0)").find("a").attr("href",product.permalink);
					$(".editItem").find(".itemButton:eq(0)").find("a")[0].innerText = scope.item.btn.text;
					$(".editItem").find(".itemButton:eq(0)").find("a").css("color", scope.item.btn.textColor);
					$(".editItem").find(".itemButton:eq(0)").css("background-color", scope.item.btn.bgColor);
					$(".editing").removeClass("editing");
					trOut()
				}
				scope.createSectionOne = function() {
					scope.activeP = 'one';
					$("#product1").val("")
					$("#product1").autocomplete({
						source: scope.productTitles
					})
					scope.openProductModal()
				}
				scope.createSectionTwo = function() {
					scope.activeP = 'two';
					$("#productTwo1").val("")
					$("#productTwo2").val("")
					$("#productTwo1").autocomplete({
						source: scope.productTitles
					})
					$("#productTwo2").autocomplete({
						source: scope.productTitles
					})
					scope.openProductModal()
				}
				scope.createSectionThree = function() {
					scope.activeP = 'three';
					$("#productThree1").val("");
					$("#productThree2").val("");
					$("#productThree3").val("");
					$("#productThree1").autocomplete({
						source: scope.productTitles
					})
					$("#productThree2").autocomplete({
						source: scope.productTitles
					})
					$("#productThree3").autocomplete({
						source: scope.productTitles
					})
					scope.openProductModal()
				}
				scope.createText = function() {
					scope.edit = {};
					scope.edit.name = "texto";
					scope.openModal()
				}
				scope.createImg = function() {
					scope.edit = {};
					scope.edit.name = "imagen"
					scope.openModal()
				}
				scope.createDivider = function() {
					scope.edit = {};
					scope.edit.name = "separador";
					scope.openModal()
				}
				scope.createLine = function() {
					scope.edit = {};
					scope.edit.name = "linea";
					scope.openModal()
				}
				scope.createButton = function() {
					scope.edit = {};
					scope.edit.border = true;
					scope.edit.name = "boton"
					scope.openModal()
				}
				scope.openModal = function() {
					$("#editModal").modal("show")
				}
				scope.openProductModal = function() {
					$("#sectionsModal").modal("show")
				}
				scope.createProductOne = function() {
					var val = $("#product1").val(),
						index = scope.productTitles.indexOf(val),
						product = scope.products[index],
						title = product.title,
						url = product.permalink,
						thumbNailUrl = product.thumbnail,
						price = product.price.toFixed(2),
						html = "";

					html = "<div class='item productOne clearfix'>" +
						"<div class='structure1'>" +
						"<div class='image'>" +
						"<img src='" + thumbNailUrl + "'>" +
						"</div>" +
						"</div>" +
						"<div class='structure2'>" +
						"<div class='title'>" +
						title +
						"</div>" +
						"<div class='price'>Precio: " +
						price +
						"</div>" +
						"<a href='" + url + "'>" +
						"<button>Comprar</button>" +
						"</a>" +
						"</div>" +
						"</div>"
					$("#body").append(html)
					$("#sectionsModal").modal('hide');
					scope.edit = {}
					$("#product1").val("")
				}
				scope.createProductTwo = function() {
					var val = $("#productTwo1").val(),
						index = scope.productTitles.indexOf(val),
						product = scope.products[index],
						title = product.title,
						url = product.permalink,
						thumbNailUrl = product.thumbnail,
						price = product.price.toFixed(2),
						html = "";
					var val = $("#productTwo2").val(),
						indexTwo = scope.productTitles.indexOf(val),
						productTwo = scope.products[indexTwo],
						titleTwo = productTwo.title,
						urlTwo = productTwo.permalink,
						thumbNailUrlTwo = productTwo.thumbnail,
						priceTwo = productTwo.price.toFixed(2);
					html = "<div class='item productTwo clearfix'>" +
						"<div class='structureTwo'>" +
						"<div class='image'>" +
						"<img src='" + thumbNailUrl + "'>" +
						"</div>" +
						"<div class='title'>" +
						title +
						"</div>" +
						"<div class='price'>Precio: " +
						price +
						"</div>" +
						"<a href='" + url + "'>" +
						"<button>Comprar</button>" +
						"</a>" +
						"</div>" +
						"<div class='structureTwo'>" +
						"<div class='image'>" +
						"<img src='" + thumbNailUrlTwo + "'>" +
						"</div>" +
						"<div class='title'>" +
						titleTwo +
						"</div>" +
						"<div class='price'>Precio: " +
						priceTwo +
						"</div>" +
						"<a href='" + urlTwo + "'>" +
						"<button>Comprar</button>" +
						"</a>" +
						"</div>" +
						"</div>"
					$("#body").append(html)
					$("#sectionsModal").modal('hide');
					scope.edit = {}
					$("#product1Two").val("")
					$("#product2Two").val("")
				}
				setInterval(function() {
					scope.html = $("#toEmail").html()
				}, 500)
				scope.createProductThree = function() {
					var val = $("#productThree1").val(),
						index = scope.productTitles.indexOf(val),
						product = scope.products[index],
						title = product.title,
						url = product.permalink,
						thumbNailUrl = product.thumbnail,
						price = product.price.toFixed(2),
						html = "";
					var val = $("#productThree2").val(),
						indexTwo = scope.productTitles.indexOf(val),
						productTwo = scope.products[indexTwo],
						titleTwo = productTwo.title,
						urlTwo = productTwo.permalink,
						thumbNailUrlTwo = productTwo.thumbnail,
						priceTwo = productTwo.price.toFixed(2);
					var val = $("#productThree3").val(),
						indexThree = scope.productTitles.indexOf(val),
						productThree = scope.products[indexThree],
						titleThree = productThree.title,
						urlThree = productThree.permalink,
						thumbNailUrlThree = productThree.thumbnail,
						priceThree = productThree.price.toFixed(2);
					html = "<div class='item productThree clearfix'>" +
						"<div class='structureThree'>" +
						"<div class='image'>" +
						"<img src='" + thumbNailUrl + "'>" +
						"</div>" +
						"<div class='title'>" +
						title +
						"</div>" +
						"<div class='price'>Precio: " +
						price +
						"</div>" +
						"<a href='" + url + "'>" +
						"<button>Comprar</button>" +
						"</a>" +
						"</div>" +
						"<div class='structureThree'>" +
						"<div class='image'>" +
						"<img src='" + thumbNailUrlTwo + "'>" +
						"</div>" +
						"<div class='title'>" +
						titleTwo +
						"</div>" +
						"<div class='price'>Precio: " +
						priceTwo +
						"</div>" +
						"<a href='" + urlTwo + "'>" +
						"<button>Comprar</button>" +
						"</a>" +
						"</div>" +
						"<div class='structureThree'>" +
						"<div class='image'>" +
						"<img src='" + thumbNailUrlThree + "'>" +
						"</div>" +
						"<div class='title'>" +
						titleThree +
						"</div>" +
						"<div class='price'>Precio: " +
						priceThree +
						"</div>" +
						"<a href='" + urlThree + "'>" +
						"<button>Comprar</button>" +
						"</a>" +
						"</div>" +
						"</div>"
					$("#body").append(html)
					$("#sectionsModal").modal('hide');
					scope.edit = {}
					$("#product1Three").val("")
					$("#product2Three").val("")
					$("#product3Three").val("")
				}
				
				$(".item").mouseover(function() {
					console.log($(this))
					console.log(this)
					$(this).addClass('editButtons')
				})
				$(".item").hover(function() {
					console.log($(this))
					console.log(this)
					$(this).addClass('editButtons')
				});

				scope.createNewText = function () {
					if (!scope.newText) scope.newText = {};
					var toInsert = generateStructure.newText(scope.newText.text, scope.newText.size, scope.newText.color);
					$(toInsert).insertBefore(".footer");
					scope.newText = {};
				};

				scope.createNewImage = function () {
					if (!scope.newImage) scope.newImage = {};
					var toInsert = generateStructure.newImage(scope.newImage.url);
					$(toInsert).insertBefore(".footer");
					scope.newImage = {};
				};

				scope.createNewSeparator = function () {
					if (!scope.newSeparator) scope.newSeparator = {};
					var toInsert = generateStructure.newSeparator(scope.newSeparator.size, scope.newSeparator.color, scope.newSeparator.transparent);
					$(toInsert).insertBefore(".footer");
					scope.newSeparator = {};
				};

				scope.createNewButton = function () {
					if (!scope.newButton) scope.newButton = {};
					var toInsert = generateStructure.newButton(scope.newButton.text, scope.newButton.textColor, scope.newButton.backGroundColor, scope.newButton.width, scope.newButton.fontSize, scope.newButton.url);
					$(toInsert).insertBefore(".footer");
					scope.newButton = {};
				};

				scope.createNewLine = function () {
					if (!scope.newLine) scope.newLine = {};
					var toInsert = generateStructure.newLine(scope.newLine.color);
					$(toInsert).insertBefore(".footer");
					scope.newLine = {};
				};

				scope.createItem = function() {
					var html = "";
					if (scope.edit.name == "texto") {
						var color = ""
						var size = ""
						if (scope.edit.size && parseInt(scope.edit.size)) {
							size = "font-size:" + scope.edit.size + "px";
						};
						if (scope.edit.color) {
							color = "color:" + scope.edit.color
						};
						html = "<tr><td class='item texto' style='" + size + ";" + color + ";'>" +
							scope.edit.value +
							"</td></tr>"
					};
					if (scope.edit.name == "imagen") {
						html = "<div class='item imagen' style='+margin-bottom=5%;'>" +
							"<a href='" + scope.edit.url + "'><img src='" + scope.edit.value + "' style='width:100%'></a>" +
							"</div>"
					};
					if (scope.edit.name == "separador") {
						var backColor = "";
						if (scope.edit.backColor) {
							backColor = "background-color:" + scope.edit.backColor
						};
						if (scope.edit.transparent) {
							backColor = "background-color:transparent"
						};
						html = "<div class='item separador' style='" + backColor + ";width: 100%;height: 50px;margin: 5% 0%;'></div>" +
							"</div>"
					};
					if (scope.edit.name == "linea") {
						var backColor = "";
						if (scope.edit.backColor) {
							backColor = "background-color:" + scope.edit.backColor
						};
						html = "<div class='item linea' style='" + backColor + ";width: 100%;height: 4px;margin: 3% 0%;'></div>" +
							"</div>"
					};
					if (scope.edit.name == "boton") {
						var color = "",
							size = "",
							backColor = "",
							border = "";
						if (scope.edit.size && parseInt(scope.edit.size)) {
							size = "font-size:" + scope.edit.size + "px;";
						};
						if (scope.edit.color) {
							color = "color:" + scope.edit.color +";"
						};
						if (scope.edit.backColor) {
							backColor = scope.edit.backColor
						};
						html = "<td class='btnTable' bgcolor="+backColor+" width='auto' align='center' valign='middle' height='32' style='"+size+color+" border-radius:5px; background-clip: padding-box; font-family:Roboto,Open Sans, Arial,Tahoma, Helvetica, sans-serif; text-align:center; font-weight: 300; padding-left:18px; padding-right:18px; '><span style='color: #ffffff; font-weight: 300;'><a href='#' style='text-decoration: none; color: #ffffff; font-weight: 300;'>Download</a></span></td>"
					};
					$("#content").append(html)
					scope.edit = {}
				}
				scope.deleteItem = function() {
					$('.editButtons').remove()
				}
				scope.editItem = function() {
					scope.edit.item = $('.editButtons');
					if (scope.edit.item[0].className.indexOf('separador') != -1) {
						scope.edit.name = "separador";
						scope.onEdit = true;
						scope.$apply()
						$('#changeModal').modal('show');
					};
					if (scope.edit.item[0].className.indexOf('linea') != -1) {
						scope.edit.name = "linea";
						scope.$apply()
						$('#changeModal').modal('show');
						scope.onEdit = true;
					};
					if (scope.edit.item[0].className.indexOf('boton') != -1) {
						scope.edit.item = $('.editButtons').children();
						scope.edit.name = "boton";
						scope.$apply()
						$('#changeModal').modal('show');
						scope.onEdit = true;
					};
					if (scope.edit.item[0].className.indexOf('texto') != -1) {
						scope.edit.name = "texto";
						scope.$apply()
						$('#changeModal').modal('show');
						scope.onEdit = true;
					};
					if (scope.edit.item[0].className.indexOf('imagen') != -1) {
						scope.edit.item = $('.editButtons').children();
						scope.edit.name = "imagen";
						scope.$apply()
						$('#changeModal').modal('show');
						scope.onEdit = true;
					};
					if (scope.edit.item[0].className.indexOf('productOne') != -1) {
						scope.edit.name = "one";
						scope.edit.item = $('.editButtons');
						$("#editProduct1").val("")
						$("#editProduct1").autocomplete({
							source: scope.productTitles
						})
						scope.$apply()
						$('#changeModal').modal('show');
						scope.onEdit = true;
					};
					if (scope.edit.item[0].className.indexOf('productTwo') != -1) {
						scope.edit.item = $('.editButtons');
						scope.edit.name = "two";
						$("#editProduct1Two").val("")
						$("#editProduct1Two").autocomplete({
							source: scope.productTitles
						})
						$("#editProduct2Two").val("")
						$("#editProduct2Two").autocomplete({
							source: scope.productTitles
						})
						scope.$apply()
						$('#changeModal').modal('show');
						scope.onEdit = true;
					};
					if (scope.edit.item[0].className.indexOf('productThree') != -1) {
						scope.edit.item = $('.editButtons');
						scope.edit.name = "three";
						$("#editProduct1Three").val("")
						$("#editProduct1Three").autocomplete({
							source: scope.productTitles
						})
						$("#editProduct2Three").val("")
						$("#editProduct2Three").autocomplete({
							source: scope.productTitles
						})
						$("#editProduct3Three").val("")
						$("#editProduct3Three").autocomplete({
							source: scope.productTitles
						})
						scope.$apply()
						$('#changeModal').modal('show');
						scope.onEdit = true;
					};
				}
				scope.updateItem = function() {
					if (scope.edit.name == 'separador') {
						var backColor = scope.edit.backColor
						if (scope.edit.transparent) {
							backColor = "transparent"
						};
						let obj = {
							'background-color': backColor
						}
						scope.edit.item.css(obj)
						scope.onEdit = false;
						$('#changeModal').modal('hide');
					};
					if (scope.edit.name == 'linea') {
						var backColor = scope.edit.backColor
						if (scope.edit.backColor) {
							backColor = scope.edit.backColor;
						};
						let obj = {
							'background-color': backColor
						}
						scope.edit.item.css(obj)
						scope.onEdit = false;
						$('#changeModal').modal('hide');

					};
					if (scope.edit.name == 'boton') {
						var color = scope.edit.color,
							size = scope.edit.size,
							backColor = scope.edit.backColor;
						if (scope.edit.size && parseInt(scope.edit.size)) {
							size = scope.edit.size + "px";
						};
						if (scope.edit.color) {
							color = scope.edit.color
						};
						if (scope.edit.backColor) {
							backColor = scope.edit.backColor
						};
						let obj = {
							'background-color': backColor,
							'font-size': size,
							'color': color
						}
						scope.edit.item.css(obj)
						scope.edit.item[0].textContent = scope.edit.value
						scope.onEdit = false;
						console.log(scope.edit.item[0])
						$('#changeModal').modal('hide');
						scope.edit = {}
						scope.onEdit = false;
					};
					if (scope.edit.name == 'texto') {
						var color = scope.edit.size
						var size = scope.edit.color
						if (scope.edit.size && parseInt(scope.edit.size)) {
							size = scope.edit.size + "px";
						};
						if (scope.edit.color) {
							color = scope.edit.color
						};
						let obj = {
							'font-size': size,
							'color': color
						}
						scope.edit.item.css(obj)
						scope.edit.item[0].textContent = scope.edit.value
						$('#changeModal').modal('hide');
						scope.onEdit = false;
					};
					if (scope.edit.name == 'imagen') {
						scope.edit.item.attr('href', scope.edit.url);
						scope.edit.item.children().attr('src', scope.edit.value);
						$('#changeModal').modal('hide');
						scope.onEdit = false;
					};
					if (scope.edit.name == 'one') {
						var val = $("#editProduct1").val(),
							index = scope.productTitles.indexOf(val),
							product = scope.products[index],
							title = product.title,
							url = product.permalink,
							thumbNailUrl = product.thumbnail,
							price = "Precio: " + product.price.toFixed(2);
						scope.edit.item.children('.structure1').children('.image').children()[0].src = thumbNailUrl
						scope.edit.item.children('.structure2').children('.title')[0].textContent = title;
						scope.edit.item.children('.structure2').children('.price')[0].textContent = price;
						scope.edit.item.children('.structure2').children('a')[0].href = url
						$('#changeModal').modal('hide');
						scope.onEdit = false;
					};
					if (scope.edit.name == 'two') {
						var val = $("#editProduct1Two").val(),
							index = scope.productTitles.indexOf(val),
							product = scope.products[index],
							title = product.title,
							url = product.permalink,
							thumbNailUrl = product.thumbnail,
							price = "Precio: " + product.price.toFixed(2);
						var valTwo = $("#editProduct2Two").val(),
							indexTwo = scope.productTitles.indexOf(valTwo),
							productTwo = scope.products[indexTwo],
							titleTwo = productTwo.title,
							urlTwo = productTwo.permalink,
							thumbNailUrlTwo = productTwo.thumbnail,
							priceTwo = "Precio: " + productTwo.price.toFixed(2);
						scope.edit.item.children(".structureTwo:nth-child(1)").children('.image').children()[0].src = thumbNailUrl
						scope.edit.item.children(".structureTwo:nth-child(1)").children('.title')[0].textContent = title;
						scope.edit.item.children(".structureTwo:nth-child(1)").children('.price')[0].textContent = price;
						scope.edit.item.children(".structureTwo:nth-child(1)").children('a')[0].href = url

						scope.edit.item.children(".structureTwo:nth-child(2)").children('.image').children()[0].src = thumbNailUrlTwo
						scope.edit.item.children(".structureTwo:nth-child(2)").children('.title')[0].textContent = titleTwo;
						scope.edit.item.children(".structureTwo:nth-child(2)").children('.price')[0].textContent = priceTwo;
						scope.edit.item.children(".structureTwo:nth-child(2)").children('a')[0].href = urlTwo
						$('#changeModal').modal('hide');
						scope.onEdit = false;
					};
					if (scope.edit.name == 'three') {
						var val = $("#editProduct1Three").val(),
							index = scope.productTitles.indexOf(val),
							product = scope.products[index],
							title = product.title,
							url = product.permalink,
							thumbNailUrl = product.thumbnail,
							price = "Precio: " + product.price.toFixed(2);
						var valTwo = $("#editProduct2Three").val(),
							indexTwo = scope.productTitles.indexOf(valTwo),
							productTwo = scope.products[indexTwo],
							titleTwo = productTwo.title,
							urlTwo = productTwo.permalink,
							thumbNailUrlTwo = productTwo.thumbnail,
							priceTwo = "Precio: " + productTwo.price.toFixed(2);
						var valThree = $("#editProduct3Three").val(),
							indexThree = scope.productTitles.indexOf(valThree),
							productThree = scope.products[indexThree],
							titleThree = productThree.title,
							urlThree = productThree.permalink,
							thumbNailUrlThree = productThree.thumbnail,
							priceThree = "Precio: " + productThree.price.toFixed(2);
						scope.edit.item.children(".structureThree:nth-child(1)").children('.image').children()[0].src = thumbNailUrl
						scope.edit.item.children(".structureThree:nth-child(1)").children('.title')[0].textContent = title;
						scope.edit.item.children(".structureThree:nth-child(1)").children('.price')[0].textContent = price;
						scope.edit.item.children(".structureThree:nth-child(1)").children('a')[0].href = url

						scope.edit.item.children(".structureThree:nth-child(2)").children('.image').children()[0].src = thumbNailUrlTwo
						scope.edit.item.children(".structureThree:nth-child(2)").children('.title')[0].textContent = titleTwo;
						scope.edit.item.children(".structureThree:nth-child(2)").children('.price')[0].textContent = priceTwo;
						scope.edit.item.children(".structureThree:nth-child(2)").children('a')[0].href = urlTwo

						scope.edit.item.children(".structureThree:nth-child(3)").children('.image').children()[0].src = thumbNailUrlThree
						scope.edit.item.children(".structureThree:nth-child(3)").children('.title')[0].textContent = titleThree;
						scope.edit.item.children(".structureThree:nth-child(3)").children('.price')[0].textContent = priceThree;
						scope.edit.item.children(".structureThree:nth-child(3)").children('a')[0].href = urlThree
						$('#changeModal').modal('hide');
						scope.onEdit = false;
					};
				}
			}
		};
	});


function btnOut () {
	$(".btnEdit").children('div').remove()
	$(".btnEdit").css("cursor", 'auto');
	$(".btnEdit").removeAttr("href");
	$(".btnEdit").removeAttr("onclick");
	$(".btnEdit").removeClass("btnEdit");
}
function textOut () {
	$(".textEdit").children('div').remove()
	$(".textEdit").css("cursor", 'auto');
	$(".textEdit").removeAttr("href");
	$(".textEdit").removeAttr("onclick");
	$(".textEdit").removeClass("textEdit");
}
function linksOut () {
	$(".linksEdit").children('div').remove()
	$(".linksEdit").css("cursor", 'auto');
	$(".linksEdit").removeAttr("href");
	$(".linksEdit").removeAttr("onclick");
	$(".linksEdit").removeClass("linksEdit");
}
function trOut () {
	$(".trEdit").children('div').remove()
	$(".trEdit").css("cursor", 'auto');
	$(".trEdit").removeAttr("href");
	$(".trEdit").removeAttr("onclick");
	$(".trEdit").removeClass("productEdit");
	$(".trEdit").removeClass("trEdit");
	$(".editP").remove();
}

$(document).on("mouseout", ".imgEdit", function(e) {
	if (e.relatedTarget != 'imgEdit') {
		if ($(".imgEdit").parent()[0].localName == "a") {
			$(".imgEdit").parent().parent().css("position", 'none');
		} else {
			$(".imgEdit").parent().css("position", 'none');
		}
		$(".imgEdit").remove()
	};
})

$(document).on("mouseout", ".btnEdit", function(e) {
	if (e.relatedTarget.localName != 'div' && e.relatedTarget.localName != 'i') {
		btnOut()
	}
})

$(document).on("mouseout", ".textEdit", function(e) {
	if (e.relatedTarget.localName != 'div' && e.relatedTarget.localName != 'i') {
		textOut()
	}
})

$(document).on("mouseout", ".linksEdit", function(e) {
	if (e.relatedTarget.localName != 'div' && e.relatedTarget.localName != 'i') {
		linksOut()
	}
})


// $(document).on("click", ".trEdit", function(e) {
// 	if (!$.contains($(".trEdit")[0], e.relatedTarget)) {
// 		trOut()
// 	}
// })

