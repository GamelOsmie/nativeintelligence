"use strict";!function(e,t){var o=e(t);o.on("elementor/frontend/init",(function(){var t=elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initPoopArtPerspektiveHA(),this.initHoverAnimator()},initPoopArtPerspektiveHA:function(){this.isEdit&&(this.$element.addClass("ob-has-background-overlay"),"yes"===this.getElementSettings("_ob_perspektive_use")&&this.$element.addClass("ob-use-perspektive"),"yes"===this.getElementSettings("_ob_widget_stalker_use")&&this.$element.addClass("ob-got-stalker"))},initHoverAnimator:function(){this.routeHoverAnimator()},onElementChange:function(e){"_ob_perspektive_use"===e&&("yes"===this.getElementSettings("_ob_perspektive_use")?this.$element.addClass("ob-use-perspektive"):this.$element.removeClass("ob-use-perspektive")),"_ob_allow_hoveranimator"===e&&this.routeHoverAnimator(),-1!==["_ob_hoveranimator_opacity_hover","_ob_hoveranimator_y_hover","_ob_hoveranimator_x_hover","_ob_hoveranimator_rot_hover","_ob_hoveranimator_scalex_hover","_ob_hoveranimator_scaley_hover","_ob_hoveranimator_blur_hover"].indexOf(e)&&this.isHoverAnimator()&&this.doHoverAnimator(),"_ob_widget_stalker_use"===e&&this.routeWidgetStalkerWidget()},isWidgetStalkerWidget:function(){return this.$element.hasClass("ob-got-stalker")},routeWidgetStalkerWidget:function(){this.isWidgetStalkerWidget()||"yes"!==this.getElementSettings("_ob_widget_stalker_use")?this.$element.removeClass("ob-got-stalker"):this.$element.addClass("ob-got-stalker")},isPerspektive:function(){return this.$element.hasClass("ob-use-perspektive")},isHoverAnimator:function(){return this.$element.hasClass("ob-is-hoveranimal")},routeHoverAnimator:function(){this.isEdit?(this.isHoverAnimator()||"yes"!==this.getElementSettings("_ob_allow_hoveranimator")||(this.$element.addClass("ob-is-hoveranimal"),this.doHoverAnimator()),this.isHoverAnimator()&&"yes"!==this.getElementSettings("_ob_allow_hoveranimator")&&(this.$element.removeClass("ob-is-hoveranimal"),this.stopHoverAnimator())):!this.isEdit&&this.isHoverAnimator()&&this.doHoverAnimator()},doHoverAnimator:function(){var t=this.$element,o=t.parent().closest(".ob-is-hoveranimator");if(o.length){var s,n,i,r,l,a,d,h,m=o.data("id");this.isEdit?(s=this.getElementSettings("_ob_hoveranimator_opacity_hover"),n=this.getElementSettings("_ob_hoveranimator_y_hover"),i=this.getElementSettings("_ob_hoveranimator_x_hover"),r=this.getElementSettings("_ob_hoveranimator_rot_hover"),a=this.getElementSettings("_ob_hoveranimator_scalex_hover"),l=this.getElementSettings("_ob_hoveranimator_scaley_hover"),d=this.getElementSettings("_ob_hoveranimator_blur_hover")):this.isEdit||(s=(h=e.parseJSON(t.attr("data-settings")))._ob_hoveranimator_opacity_hover,n=h._ob_hoveranimator_y_hover,i=h._ob_hoveranimator_x_hover,r=h._ob_hoveranimator_rot_hover,a=h._ob_hoveranimator_scalex_hover,l=h._ob_hoveranimator_scaley_hover,d=h._ob_hoveranimator_blur_hover);var _={opacity:s.size,top:n.size+n.unit,left:i.size+i.unit,transform:"rotate("+r.size+"deg) scaleX("+a.size+") scaleY("+l.size+")",filter:"blur("+d.size+d.unit+")"};o.on("mouseenter."+m,(function(){t.css(_)})),o.on("mouseleave."+m,(function(){t.removeAttr("style")}))}},stopHoverAnimator:function(){var e=this.$element,t=this.$element.parent().closest(".ob-is-hoveranimator");if(t.length){var o=t.data("id"),s={opacity:"",top:"",left:"",transform:"",filter:""};t.on("mouseenter."+o,(function(){e.css(s)})),t.on("mouseleave."+o,(function(){e.removeAttr("style")}))}}}),n=elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initHarakiri()},initHarakiri:function(){this.isEdit&&"inherit"!==this.getElementSettings("_ob_harakiri_writing_mode")&&this.$element.addClass("ob-harakiri")},onElementChange:function(e){"_ob_harakiri_writing_mode"===e&&("inherit"!==this.getElementSettings("_ob_harakiri_writing_mode")?this.$element.addClass("ob-harakiri"):this.$element.removeClass("ob-harakiri"))}}),i={widget:t,"heading.default":n,"text-editor.default":n,section:elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initSectionExtends()},isBreakingBad:function(){return this.$element.hasClass("ob-is-breaking-bad")},isGlider:function(){return this.$element.hasClass("ob-is-glider")},isInnerSection:function(){return this.$element.hasClass("elementor-inner-section")},onElementChange:function(e){"_ob_bbad_use_it"===e&&("yes"===this.getElementSettings("_ob_bbad_use_it")?this.$element.addClass("ob-is-breaking-bad"):this.$element.removeClass("ob-is-breaking-bad")),"_ob_glider_is_slider"===e&&("yes"===this.getElementSettings("_ob_glider_is_slider")?(this.$element.addClass("ob-is-glider"),this.addClassesRouteGlider(".elementor-element-"+this.$element.attr("data-id"),"addClass"),this.initSwiperElements()):"yes"!=this.getElementSettings("_ob_glider_is_slider")&&(this.$element.removeClass("ob-is-glider"),this.addClassesRouteGlider(".elementor-element-"+this.$element.attr("data-id"),"removeClass"))),"_ob_bbad_sssic_use"===e&&this.isInnerSection()&&("yes"===this.getElementSettings("_ob_bbad_sssic_use")?this.$element.addClass("ob-is-sticky-inner-section"):this.$element.removeClass("ob-is-sticky-inner-section"))},addClassesRouteGlider:function(t,o){var s=e(t).children(".elementor-container").first();s.length&&s.addClass("swiper-container");var n=e(s).children(".elementor-row").first();n.length&&"addClass"==o?(n.addClass("swiper-wrapper"),e(n).children("div.elementor-column").addClass("swiper-slide")):(e(s).children("div.elementor-column").wrapAll('<div class="swiper-wrapper" />'),e(s).children(".swiper-wrapper").first().children("div.elementor-column").addClass("swiper-slide")),n.length&&"removeClass"==o?(n.removeClass("swiper-wrapper"),e(n).children("div.elementor-column").removeClass("swiper-slide")):(e(s).children("div.elementor-column").unwrap(),e(s).children("div.elementor-column").removeClass("swiper-slide"))},initSectionExtends:function(){if(this.isEdit?("yes"!==this.getElementSettings("_ob_bbad_use_it")||this.isBreakingBad()||this.$element.addClass("ob-is-breaking-bad"),"yes"===this.getElementSettings("_ob_glider_is_slider")&&(this.$element.addClass("ob-is-glider"),this.addClassesRouteGlider(".elementor-element-"+this.$element.attr("data-id"),"addClass"),this.initSwiperElements())):"yes"===this.getElementSettings("_ob_glider_is_slider")&&(this.$element.addClass("ob-is-glider"),this.addClassesRouteGlider(".elementor-element-"+this.$element.attr("data-id"),"addClass"),this.initSwiperElements()),"yes"===this.getElementSettings("_ob_bbad_sssic_use")&&this.isInnerSection()){this.isEdit&&this.$element.addClass("ob-is-sticky-inner-section");var e=this.$element.closest(".elementor-widget-wrap");e.length&&e.addClass("ob-sssic-wrapper")}},initSwiperElements:function(){this.$element.children(".elementor-container .swiper-button-next").first().length||this.$element.children(".elementor-container").first().append('<div class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin" viewBox="0 0 27 44"><path d="M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z"></path></svg></div>'),this.$element.children(".elementor-container .swiper-button-prev").first().length||this.$element.children(".elementor-container").first().append('<div class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin" viewBox="0 0 27 44"><path d="M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z"></path></svg></div>'),this.$element.children(".elementor-container .swiper-pagination").first().length||this.$element.children(".elementor-container").first().append('<div class="swiper-pagination"></div>');var e={};e.pagination_type=this.getElementSettings("_ob_glider_pagination_type"),e.allowTouchMove=this.getElementSettings("_ob_glider_allow_touch_move"),e.autoheight=this.getElementSettings("_ob_glider_auto_h"),e.effect=this.getElementSettings("_ob_glider_effect"),e.loop=this.getElementSettings("_ob_glider_loop"),e.direction=this.getElementSettings("_ob_glider_direction"),e.parallax=this.getElementSettings("_ob_glider_parallax"),e.speed=this.getElementSettings("_ob_glider_speed");var t=this.getElementSettings("_ob_glider_autoplay");e.autoplay=!!t&&{delay:this.getElementSettings("_ob_glider_autoplay_delay")},s(this.$element.attr("data-id"),e)}}),column:elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.$element.find(".elementor-column-wrap").first().length||this.$element.addClass("ob-is-e3");var e=navigator.userAgent.toLowerCase();e.indexOf("chrome")>-1&&this.teleporterChromeResize(),this.initColumnExtends()},teleporterChromeResize:function(){if(this.isTeleporter()){var e=this,t=this.$element.attr("data-id");o.on("resize",(function(){e.$element.closest(".ob-is-teleporter").addClass("ob-chrome-resize"),clearTimeout(t),t=setTimeout((function(){var t=parseInt(e.$element.closest(".ob-is-teleporter").css("height")),o=e.$element.find(".elementor-column-wrap").first();o.length?o.css({height:t}):e.$element.find(".elementor-widget-wrap").first().css({height:t}),e.$element.closest(".ob-is-teleporter").removeClass("ob-chrome-resize")}),500)})),o.trigger("resize")}},isTeleporter:function(){return this.$element.hasClass("ob-is-teleporter")},isHoverAnimatorCol:function(){return this.$element.hasClass("ob-is-hoveranimator")},isWidgetStalkerCol:function(){return this.$element.hasClass("ob-is-stalker")},initColumnExtends:function(){this.isEdit&&"use-teleporter"===this.getElementSettings("_ob_teleporter_use")&&(this.$element.addClass("ob-is-teleporter"),this.$element.find(".elementor-widget-wrap").first().addClass("ob-tele-midget"),this.doTeleporterEditor()),!this.isEdit&&this.isTeleporter()&&(this.$element.find(".elementor-widget-wrap").first().addClass("ob-tele-midget"),this.doTeleporter()),this.isEdit&&"yes"===this.getElementSettings("_ob_column_hoveranimator")&&this.$element.addClass("ob-is-hoveranimator"),this.isEdit&&"yes"===this.getElementSettings("_ob_bbad_is_stalker")&&this.$element.addClass("ob-is-stalker")},onElementChange:function(e){"_ob_teleporter_overlay_color"===e?this.$element.find('div[class*="ob-teleporter-"] > .ob-tele-overlay').css("background-color",this.getElementSettings("_ob_teleporter_overlay_color")):"_ob_teleporter_no_pass_tablet"===e?"no-tablet"===this.getElementSettings("_ob_teleporter_no_pass_tablet")?this.$element.addClass("ob-tele-no-tablet"):this.$element.removeClass("ob-tele-no-tablet"):"_ob_teleporter_no_pass_mobile"===e&&("no-mobile"===this.getElementSettings("_ob_teleporter_no_pass_mobile")?this.$element.addClass("ob-tele-no-mobile"):this.$element.removeClass("ob-tele-no-mobile")),"_ob_column_hoveranimator"===e&&this.routeHoverAnimatorCol(),"_ob_bbad_is_stalker"===e&&this.routeWidgetStalkerCol()},routeHoverAnimatorCol:function(){this.isHoverAnimatorCol()||"yes"!==this.getElementSettings("_ob_column_hoveranimator")?this.$element.removeClass("ob-is-hoveranimator"):this.$element.addClass("ob-is-hoveranimator")},routeWidgetStalkerCol:function(){this.isWidgetStalkerCol()||"yes"!==this.getElementSettings("_ob_bbad_is_stalker")?this.$element.removeClass("ob-is-stalker"):this.$element.addClass("ob-is-stalker")},doTeleporterEditor:function(){if("use-teleporter"===this.getElementSettings("_ob_teleporter_use")){var t=this.$element.find(".elementor-widget-wrap").first();if(t.length&&(t.wrapInner('<div class="widget-wrap-children" />'),t.find(".elementor-background-overlay").first().length&&t.find(".elementor-background-overlay").first().insertBefore(t.find(".elementor-background-overlay").first().parent())),"do-pass"===this.getElementSettings("_ob_teleporter_pass")){var o=this,s=this.$element,n=this.$element.attr("data-id");"no-tablet"===this.getElementSettings("_ob_teleporter_no_pass_tablet")&&this.$element.addClass("ob-tele-no-tablet"),"no-mobile"===this.getElementSettings("_ob_teleporter_no_pass_mobile")&&this.$element.addClass("ob-tele-no-mobile");var i="section"===this.getElementSettings("_ob_teleporter_pass_element")?this.$element.closest(".elementor-section"):this.$element.closest(".elementor-container");if(i.length){i.css("overflow","hidden");var r=this.getElementSettings("_ob_teleporter_pass_effect"),l='<div class="ob-teleporter-'+n+" ob-tele-eff-"+r+'" data-id-teleporter="'+n+'"><div class="ob-tele-overlay" style="background-color: '+this.getElementSettings("_ob_teleporter_overlay_color")+';"></div></div>';e(".ob-teleporter-"+n).length||this.$element.prepend(l),this.$element.off("mouseenter mouseleave"),this.$element.on("mouseenter mouseleave",(function(t){if("mouseenter"===t.type){if("no-tablet"===o.getElementSettings("_ob_teleporter_no_pass_tablet")&&"tablet"===elementorFrontend.getCurrentDeviceMode())return;if("no-mobile"===o.getElementSettings("_ob_teleporter_no_pass_mobile")&&"mobile"===elementorFrontend.getCurrentDeviceMode())return;if("do-pass"!==o.getElementSettings("_ob_teleporter_pass"))return;var r={"background-color":e(".ob-teleporter-"+n).css("background-color"),"background-image":e(".ob-teleporter-"+n).css("background-image"),"background-position":e(".ob-teleporter-"+n).css("background-position"),"background-size":e(".ob-teleporter-"+n).css("background-size"),"background-repeat":e(".ob-teleporter-"+n).css("background-repeat")};if("section"===o.getElementSettings("_ob_teleporter_pass_element")){var l=i.children().not(".elementor-container").detach();i.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-"+n)),i.prepend(l)}else i.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-"+n));e(".ob-teleporter-"+n).css(r).hide(),e(".ob-teleporter-"+n).addClass("ob-teleporter-hover").show()}else i.removeClass("ob-tele-mom-hover"),setTimeout((function(){e(".ob-teleporter-"+n).removeAttr("style").removeClass("ob-teleporter-hover"),s.prepend(e(".ob-teleporter-"+n))}),100)}))}}}},doTeleporter:function(){var t=e.parseJSON(this.$element.attr("data-settings"));if("use-teleporter"===t._ob_teleporter_use){var o=this.$element.find(".elementor-widget-wrap").first();o.length&&(o.wrapInner('<div class="widget-wrap-children" />'),o.find(".elementor-background-overlay").first().length&&o.find(".elementor-background-overlay").first().insertBefore(o.find(".elementor-background-overlay").first().parent()));var s=this.$element,n=this.$element.attr("data-id");if("no-tablet"===t._ob_teleporter_no_pass_tablet&&this.$element.addClass("ob-tele-no-tablet"),"no-mobile"===t._ob_teleporter_no_pass_mobile&&this.$element.addClass("ob-tele-no-mobile"),void 0!==t._ob_teleporter_link){var i=t._ob_teleporter_link;if(""===i.url)return;this.$element.off("click.obTeleporter"),this.$element.on("click.obTeleporter",(function(){i.is_external?window.open(i.url):location.href=i.url}))}if("do-pass"===t._ob_teleporter_pass){var r="section"===t._ob_teleporter_pass_element?this.$element.closest(".elementor-section"):this.$element.closest(".elementor-container");if(r.length){r.css("overflow","hidden");var l=t._ob_teleporter_pass_effect,a='<div class="ob-teleporter-'+n+" ob-tele-eff-"+l+'" data-id-teleporter="'+n+'"><div class="ob-tele-overlay" style="background-color: '+t._ob_teleporter_overlay_color+';"></div>';e(".ob-teleporter-"+n).length||this.$element.prepend(a),this.$element.off("mouseenter mouseleave"),this.$element.on("mouseenter",(function(){if(!("no-tablet"===t._ob_teleporter_no_pass_tablet&&"tablet"===elementorFrontend.getCurrentDeviceMode()||"no-mobile"===t._ob_teleporter_no_pass_mobile&&"mobile"===elementorFrontend.getCurrentDeviceMode())){var o={"background-color":e(".ob-teleporter-"+n).css("background-color"),"background-image":e(".ob-teleporter-"+n).css("background-image"),"background-position":e(".ob-teleporter-"+n).css("background-position"),"background-size":e(".ob-teleporter-"+n).css("background-size"),"background-repeat":e(".ob-teleporter-"+n).css("background-repeat")};if("section"===t._ob_teleporter_pass_element){var s=r.children().not(".elementor-container").detach();r.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-"+n)),r.prepend(s)}else r.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-"+n));e(".ob-teleporter-"+n).css(o).hide(),e(".ob-teleporter-"+n).show().addClass("ob-teleporter-hover")}})),this.$element.on("mouseleave",(function(){r.removeClass("ob-tele-mom-hover"),setTimeout((function(){e(".ob-teleporter-"+n).removeAttr("style").removeClass("ob-teleporter-hover"),s.prepend(e(".ob-teleporter-"+n))}),100)}))}}}}}),"search-form.default":elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initSearchCop()},onElementChange:function(e){"_ob_searchcop_srch_options"===e&&this.routeSearchCop()},initSearchCop:function(){this.routeSearchCop()},routeSearchCop:function(){var e=this.getElementSettings("_ob_searchcop_srch_options");if("post"===e||"page"===e){var t=this.$element.find(".elementor-search-form__container");if(!t.length)return;var o='<input type="hidden" name="post_type" value="'+e+'" />';t.prepend(o)}}}),"button.default":elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initButterButton()},isButterButton:function(){return this.$element.hasClass("ob-is-butterbutton")},onElementChange:function(e){"_ob_butterbutton_use_it"===e&&this.routeButterButton()},initButterButton:function(){this.isEdit&&"yes"===this.getElementSettings("_ob_butterbutton_use_it")&&this.$element.addClass("ob-is-butterbutton")},routeButterButton:function(){this.isButterButton()||"yes"!==this.getElementSettings("_ob_butterbutton_use_it")?this.$element.removeClass("ob-is-butterbutton"):this.$element.addClass("ob-is-butterbutton")}}),"image.default":elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initPhotoMorph()},isPhotoMorph:function(){return this.$element.hasClass("ob-photomorph")},onElementChange:function(e){"_ob_photomorph_use"===e&&this.routePhotoMorph()},initPhotoMorph:function(){this.isEdit&&"yes"===this.getElementSettings("_ob_photomorph_use")&&this.$element.addClass("ob-photomorph")},routePhotoMorph:function(){this.isPhotoMorph()||"yes"!==this.getElementSettings("_ob_photomorph_use")?this.$element.removeClass("ob-photomorph"):this.$element.addClass("ob-photomorph")}}),"post-comments.theme_comments":elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initCommentz()},isCommentz:function(){return this.$element.hasClass("ob-commentz")},onElementChange:function(e){"_ob_commentz_use"===e&&this.routeCommentz()},initCommentz:function(){this.isEdit&&"yes"===this.getElementSettings("_ob_commentz_use")&&this.$element.addClass("ob-commentz")},routeCommentz:function(){this.isCommentz()||"yes"!==this.getElementSettings("_ob_commentz_use")?this.$element.removeClass("ob-commentz"):this.$element.addClass("ob-commentz")}}),"spacer.default":elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initSpaceRat()},isSpaceRat:function(){return this.$element.hasClass("ob-spacerat")},onElementChange:function(e){"_ob_spacerat_use"===e&&this.routeSpaceRat()},initSpaceRat:function(){if(this.isEdit&&"yes"===this.getElementSettings("_ob_spacerat_use")&&this.$element.addClass("ob-spacerat"),!this.isEdit&&"yes"===this.getElementSettings("_ob_spacerat_use")){var t=e.parseJSON(this.$element.attr("data-settings"));if(void 0!==t._ob_spacerat_link){var o=t._ob_spacerat_link;if(""===o.url)return;this.$element.off("click.obSpacerat"),this.$element.on("click.obSpacerat",(function(){o.is_external?window.open(o.url):location.href=o.url}))}}},routeSpaceRat:function(){this.isSpaceRat()||"yes"!==this.getElementSettings("_ob_spacerat_use")?this.$element.removeClass("ob-spacerat"):this.$element.addClass("ob-spacerat")}})};e.each(i,(function(e,t){elementorFrontend.hooks.addAction("frontend/element_ready/"+e,(function(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})}))}))}));var s=function(t,o){var s,n=e(".elementor-element-"+t+" .swiper-container").first(),i=n.parent().parent().find("nav.glider-controller"),r={allowTouchMove:"yes"===o.allowTouchMove,autoHeight:"yes"===o.autoheight,effect:o.effect,loop:o.loop,direction:"fade"===o.effect?"horizontal":o.direction,parallax:"yes"===o.parallax,speed:o.speed,navigation:{nextEl:".elementor-element-"+t+" .swiper-button-next",prevEl:".elementor-element-"+t+" .swiper-button-prev"},pagination:{el:".elementor-element-"+t+" .swiper-pagination",type:o.pagination_type,clickable:!0},autoplay:o.autoplay,watchOverflow:!0};if("undefined"==typeof Swiper){new(0,elementorFrontend.utils.swiper)(n,r).then((e=>{s=e}))}else s=new Swiper(n,r);n.find(".glider-control").on("click",(function(t){void 0!==e(this).data("gotoslide")&&s.slideTo(parseInt(e(this).data("gotoslide"))-1),t.preventDefault()})),i.find(".glider-control").on("click",(function(t){void 0!==e(this).data("gotoslide")&&s.slideTo(parseInt(e(this).data("gotoslide"))-1),t.preventDefault()}))}}(jQuery,window);