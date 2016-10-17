'use strict';

angular.module('brianDAC.html-tables-editor', [])
	.controller('control', ['$scope', function($scope) {
		$scope.customer = {
			name: 'Naomi',
			address: '1600 Amphitheatre'
		};
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
	}])
	.directive('bdac', function() {
		return {
			restrict: 'E',
			scope: {
				products: '=products',
				test: '=test',
			},
			templateUrl: 'template.html',
			link: function(scope, elements, attrs) {
				scope.edit = {};
				scope.productTitles = [];
				for (var i = 0; i < scope.products.length; i++) {
					scope.productTitles.push(scope.products[i].title)
				};
				scope.changeHeaderColor = function() {
					$("#header").css("background", scope.headerColor)
				}
				scope.changeBackgroundColor = function() {
					$(".content").css("background", scope.backgroundColor)
				}
				scope.createSectionOne =function () {
					scope.activeP = 'one';
					$("#product1").val("")
					$("#product1").autocomplete({
						source:scope.productTitles
					})
					scope.openProductModal()
				}
				scope.createSectionTwo =function () {
					scope.activeP = 'two';
					$("#productTwo1").val("")
					$("#productTwo2").val("")
					$("#productTwo1").autocomplete({
						source:scope.productTitles
					})
					$("#productTwo2").autocomplete({
						source:scope.productTitles
					})
					scope.openProductModal()
				}
				scope.createSectionThree =function () {
					scope.activeP = 'three';
					$("#productThree1").val("");
					$("#productThree2").val("");
					$("#productThree3").val("");
					$("#productThree1").autocomplete({
						source:scope.productTitles
					})
					$("#productThree2").autocomplete({
						source:scope.productTitles
					})
					$("#productThree3").autocomplete({
						source:scope.productTitles
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
				scope.createProductOne = function () {
					var val = $("#product1").val(),
						index = scope.productTitles.indexOf(val),
						product = scope.products[index],
						title = product.title,
						url = product.permalink,
						thumbNailUrl = product.thumbnail,
						price = product.price.toFixed(2),
						html = "";

					html = "<div class='item productOne clearfix'>"+
								"<div class='structure1'>"+
									"<div class='image'>"+
										"<img src='"+thumbNailUrl+"'>"+
									"</div>"+
								"</div>"+
								"<div class='structure2'>"+
									"<div class='title'>"+
										title+
									"</div>"+
									"<div class='price'>Precio: "+
										price+
									"</div>"+
									"<a href='"+url+"'>"+
										"<button>Comprar</button>"+
									"</a>"+
								"</div>"+
							"</div>"
					$("#body").append(html)
					$("#sectionsModal").modal('hide');
					scope.edit = {}
					$("#product1").val("")
				}
				scope.createProductTwo = function () {
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
					html = "<div class='item productTwo clearfix'>"+
								"<div class='structureTwo'>"+
									"<div class='image'>"+
										"<img src='"+thumbNailUrl+"'>"+
									"</div>"+
									"<div class='title'>"+
										title+
									"</div>"+
									"<div class='price'>Precio: "+
										price+
									"</div>"+
									"<a href='"+url+"'>"+
										"<button>Comprar</button>"+
									"</a>"+
								"</div>"+
								"<div class='structureTwo'>"+
									"<div class='image'>"+
										"<img src='"+thumbNailUrlTwo+"'>"+
									"</div>"+
									"<div class='title'>"+
										titleTwo+
									"</div>"+
									"<div class='price'>Precio: "+
										priceTwo+
									"</div>"+
									"<a href='"+urlTwo+"'>"+
										"<button>Comprar</button>"+
									"</a>"+
								"</div>"+
							"</div>"
					$("#body").append(html)
					$("#sectionsModal").modal('hide');
					scope.edit = {}
					$("#product1Two").val("")
					$("#product2Two").val("")
				}
				scope.createProductThree = function () {
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
					html = "<div class='item productThree clearfix'>"+
								"<div class='structureThree'>"+
									"<div class='image'>"+
										"<img src='"+thumbNailUrl+"'>"+
									"</div>"+
									"<div class='title'>"+
										title+
									"</div>"+
									"<div class='price'>Precio: "+
										price+
									"</div>"+
									"<a href='"+url+"'>"+
										"<button>Comprar</button>"+
									"</a>"+
								"</div>"+
								"<div class='structureThree'>"+
									"<div class='image'>"+
										"<img src='"+thumbNailUrlTwo+"'>"+
									"</div>"+
									"<div class='title'>"+
										titleTwo+
									"</div>"+
									"<div class='price'>Precio: "+
										priceTwo+
									"</div>"+
									"<a href='"+urlTwo+"'>"+
										"<button>Comprar</button>"+
									"</a>"+
								"</div>"+
								"<div class='structureThree'>"+
									"<div class='image'>"+
										"<img src='"+thumbNailUrlThree+"'>"+
									"</div>"+
									"<div class='title'>"+
										titleThree+
									"</div>"+
									"<div class='price'>Precio: "+
										priceThree+
									"</div>"+
									"<a href='"+urlThree+"'>"+
										"<button>Comprar</button>"+
									"</a>"+
								"</div>"+
							"</div>"
					$("#body").append(html)
					$("#sectionsModal").modal('hide');
					scope.edit = {}
					$("#product1Three").val("")
					$("#product2Three").val("")
					$("#product3Three").val("")
				}
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
						html = "<div class='item texto' style='" + size + ";" + color + ";margin-bottom=5%;'>" +
							scope.edit.value +
							"</div>"
					};
					if (scope.edit.name == "imagen") {
						html = "<div class='item imagen' style='+margin-bottom=5%;'>" +
							"<a href='"+scope.edit.url+"'><img src='" + scope.edit.value + "' style='width:100%'></a>" +
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
							size = "font-size:" + scope.edit.size + "px";
						};
						if (scope.edit.color) {
							color = "color:" + scope.edit.color
						};
						if (scope.edit.backColor) {
							backColor = "background-color:" + scope.edit.backColor
						};
						html = "<div class='item boton' style=';margin-bottom=5%;'>" +
							"<button style='border:none;" + size + ";" + color + ";" + backColor + ";'>" +
							scope.edit.value +
							"</button>"
						"</div>"
					};
					$("#body").append(html)
					$("#editModal").modal('hide');
					scope.edit = {}
				}
			}
		};
	});
