'use strict';

angular.module('brianDAC.html-tables-editor', [])
	.directive('bdac', function() {
		return {
			restrict: 'E',
			scope: {
				products: '=products',
				html: '=html',
			},
			templateUrl: 'template.html',
			link: function(scope, elements, attrs) {
				scope.edit = {};
				scope.socialMedia = {
					facebook:"#",
					twitter:"#",
					google:"#",
					vimeo:"#",
					pinterest:"#",
					instagram:"#",
					linkedin:"#"
				};
				scope.productTitles = [];
				for (var i = 0; i < scope.products.length; i++) {
					scope.productTitles.push(scope.products[i].title)
				};
				scope.seeOnline = function () {
					$("#seeOnline").css('display','none');
					var win = window.open();
						win.document.write($("#toEmail").html());
						win.document.close();
					$("#seeOnline").css('display','block');
				}
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
				setInterval(function () {
					$("#seeOnline").css('display','none');
					scope.html= $("#toEmail").html()
					$("#seeOnline").css('display','block');
				},10000)
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
				$(".item").mouseover(function () {
					console.log($(this))
					console.log(this)
					$(this).addClass('editButtons')
				})
				$(".item").hover(function () {
					console.log($(this))
					console.log(this)
					$(this).addClass('editButtons')
				})

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
				scope.deleteItem = function () {
					console.log('here')
					$('.editButtons').remove()
				}
				scope.editItem = function () {
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
							source:scope.productTitles
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
							source:scope.productTitles
						})
						$("#editProduct2Two").val("")
						$("#editProduct2Two").autocomplete({
							source:scope.productTitles
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
							source:scope.productTitles
						})
						$("#editProduct2Three").val("")
						$("#editProduct2Three").autocomplete({
							source:scope.productTitles
						})
						$("#editProduct3Three").val("")
						$("#editProduct3Three").autocomplete({
							source:scope.productTitles
						})
						scope.$apply()
						$('#changeModal').modal('show');
						scope.onEdit = true;
					};
				}
				scope.updateItem = function () {
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
						scope.edit.item.attr('href',scope.edit.url);
						scope.edit.item.children().attr('src',scope.edit.value);
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
							price = "Precio: "+product.price.toFixed(2);
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
							price = "Precio: "+product.price.toFixed(2);
						var valTwo = $("#editProduct2Two").val(),
							indexTwo = scope.productTitles.indexOf(valTwo),
							productTwo = scope.products[indexTwo],
							titleTwo = productTwo.title,
							urlTwo = productTwo.permalink,
							thumbNailUrlTwo = productTwo.thumbnail,
							priceTwo = "Precio: "+productTwo.price.toFixed(2);
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
							price = "Precio: "+product.price.toFixed(2);
						var valTwo = $("#editProduct2Three").val(),
							indexTwo = scope.productTitles.indexOf(valTwo),
							productTwo = scope.products[indexTwo],
							titleTwo = productTwo.title,
							urlTwo = productTwo.permalink,
							thumbNailUrlTwo = productTwo.thumbnail,
							priceTwo = "Precio: "+productTwo.price.toFixed(2);
						var valThree = $("#editProduct3Three").val(),
							indexThree = scope.productTitles.indexOf(valThree),
							productThree = scope.products[indexThree],
							titleThree = productThree.title,
							urlThree = productThree.permalink,
							thumbNailUrlThree = productThree.thumbnail,
							priceThree = "Precio: "+productThree.price.toFixed(2);
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

function deleteItem () {
	$('.editButtons').remove()
}

function editItem () {
	angular.element('.editButtons').scope().editItem()
}

$(document).on("mouseover", ".item",function() {
	if (!$(this).has(".bar").length) {
		$(this).append("<div class='bar'>" +
		    "<span onclick='deleteItem()' class='iconEdit'><i class='iconEdit fa fa-trash' aria-hidden='true'></i></span>" +
		    "<span onclick='editItem()' class='iconEdit'><i class='iconEdit fa fa-pencil' aria-hidden='true'></i></span>" +
		    "</div>")
		$(this).addClass('editButtons')		
	}
})
$(document).on("mouseout", ".item",function(e) {
	if (e.relatedTarget.className != "bar" && e.relatedTarget.className != "iconEdit" && e.relatedTarget.className != "iconEdit fa fa-pencil" && e.relatedTarget.className != "iconEdit fa fa-trash" ) {
		$(this).removeClass('editButtons')
		$('.bar').remove()
	};
})
$(document).ready(function() {
    $("#socialMediaHeader").hover(function() {
        $(this).append("<div class='bar'>" +
            "<span data-target='#socialModal' data-toggle='modal'><i class='fa fa-pencil' aria-hidden='true'></i></span>" +
            "</div>")
        $(this).addClass('editButtons')
    }, function() {
        $(this).removeClass('editButtons')
        $('.bar').remove()
    })

})