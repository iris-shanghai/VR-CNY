function sendResultToServer(e){$(".scene .loading").show(),$.post(website_url+"accept_avatar.php",{data:e},function(e){e&&$(".result").fadeOut(1e3,function(){var t='<hr /><div class="container"><h2>Result is:</h2><img src="cache/result'+e+'.jpg" /><button class="button download" onclick="window.open(\'cache/result'+e+'.jpg\');">download result image</button><button class="button" onclick="$(\'.send_email\').toggle();">Send by Email</button><form method="post" action="email.php" class="send_email"><input name="file" value="'+e+'" type="hidden" /><input class="text" name="name" value="" type="text" placeholder="Your Name" /><input class="text" name="email" value="" type="text" placeholder="Your Email" /><input class="button" type="submit" name="submit" /></form></div>';$(this).html(t),$(this).fadeIn(1e3),$(".scene .loading").hide()})})}function Head(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Fringe(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Eye(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Eyebrow(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Mouth(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Top(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Body(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Cloth(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Leg(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Foot(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function Background(e,t,o,i,a,n,r){this.x=e,this.y=t,this.x2=o,this.y2=i,this.w=a,this.h=n,this.image=r,this.iSpr=0}function clear(){ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height),ctx2.clearRect(0,0,ctx2.canvas.width,ctx2.canvas.height),ctx3.clearRect(0,0,ctx3.canvas.width,ctx3.canvas.height),ctx4.clearRect(0,0,ctx4.canvas.width,ctx4.canvas.height)}function drawScene(){clear(),ctx.drawImage(oBackground.image,oBackground.x2+oBackground.iSpr*oBackground.w,oBackground.y2,oBackground.w,oBackground.h,oBackground.x,oBackground.y,oBackground.w,oBackground.h),ctx.drawImage(oHead.image,oHead.x2+oHead.iSpr*oHead.w,oHead.y2,oHead.w,oHead.h,oHead.x+headPosX_onFacebuild,oHead.y+headPosY_onFacebuild,oHead.w,oHead.h),ctx.drawImage(oEyebrow.image,oEyebrow.x2+oEyebrow.iSpr*oEyebrow.w,oEyebrow.y2,oEyebrow.w,oEyebrow.h,oEyebrow.x+headPosX_onFacebuild,oEyebrow.y+headPosY_onFacebuild,oEyebrow.w,oEyebrow.h),ctx.drawImage(oEye.image,oEye.x2+oEye.iSpr*oEye.w,oEye.y2,oEye.w,oEye.h,oEye.x+headPosX_onFacebuild,oEye.y+headPosY_onFacebuild,oEye.w,oEye.h),ctx.drawImage(oMouth.image,oMouth.x2+oMouth.iSpr*oMouth.w,oMouth.y2,oMouth.w,oMouth.h,oMouth.x+headPosX_onFacebuild,oMouth.y+headPosY_onFacebuild,oMouth.w,oMouth.h),ctx2.drawImage(oFringe.image,oFringe.x2+oFringe.iSpr*oFringe.w,oFringe.y2,oFringe.w,oFringe.h,oFringe.x+headPosX_onFacebuild,oFringe.y+headPosY_onFacebuild,oFringe.w,oFringe.h),ctx3.drawImage(oBackground.image,oBackground.x2+oBackground.iSpr*oBackground.w,oBackground.y2,oBackground.w,oBackground.h,oBackground.x,oBackground.y,oBackground.w,oBackground.h),ctx3.drawImage(oBody.image,oBody.x2+oBody.iSpr*oBody.w,oBody.y2,oBody.w,oBody.h,oBody.x,oBody.y,oBody.w,oBody.h),ctx3.drawImage(oFoot.image,oFoot.x2+oFoot.iSpr*oFoot.w,oFoot.y2,oFoot.w,oFoot.h,oFoot.x,oFoot.y,oFoot.w,oFoot.h),ctx3.drawImage(oCloth.image,oCloth.x2+oCloth.iSpr*oCloth.w,oCloth.y2,oCloth.w,oCloth.h,oCloth.x,oCloth.y,oCloth.w,oCloth.h),ctx3.drawImage(oHead.image,oHead.x2+oHead.iSpr*oHead.w,oHead.y2,oHead.w,oHead.h,oHead.x+headPosX,oHead.y+headPosY,oHead.w*headScale,oHead.h*headScale),ctx3.drawImage(oEyebrow.image,oEyebrow.x2+oEyebrow.iSpr*oEyebrow.w,oEyebrow.y2,oEyebrow.w,oEyebrow.h,oEyebrow.x+headPosX,oEyebrow.y+headPosY,oEyebrow.w*headScale,oEyebrow.h*headScale),ctx3.drawImage(oEye.image,oEye.x2+oEye.iSpr*oEye.w,oEye.y2,oEye.w,oEye.h,oEye.x+headPosX,oEye.y+headPosY,oEye.w*headScale,oEye.h*headScale),ctx3.drawImage(oFringe.image,oFringe.x2+oFringe.iSpr*oFringe.w,oFringe.y2,oFringe.w,oFringe.h,oFringe.x+headPosX,oFringe.y+headPosY,oFringe.w*headScale,oFringe.h*headScale),ctx3.drawImage(oMouth.image,oMouth.x2+oMouth.iSpr*oMouth.w,oMouth.y2,oMouth.w,oMouth.h,oMouth.x+headPosX,oMouth.y+headPosY,oMouth.w*headScale,oMouth.h*headScale),ctx4.drawImage(canvas3,0,0),userMsg.text=$("#msg").val(),userMsg.context=ctx4,ctx4.font=userMsg.font,ctx4.fillStyle=userMsg.fillStyle,wrapText(userMsg.context,userMsg.text,userMsg.x,userMsg.y,userMsg.maxWidth,userMsg.lineHeight)}function exportResult(){var e,t;t=document.createElement("canvas"),e=t.getContext("2d"),t.width=330,t.height=330;var o=ctx4.getImageData(5,5,330,477);o.data;e.putImageData(o,0,0),zdata2=ctx4.getImageData(5,5,330,477),e.putImageData(zdata2,0,0);var i=t.toDataURL("image/jpeg",1);$("#face_result").attr("src",i),sendResultToServer(i)}function wrapText(e,t,o,i,a,n){for(var r=t.split(""),s="",p=0;p<r.length;p++){var c=s+r[p]+"",d=e.measureText(c),l=d.width;l>a&&p>0?(e.fillText(s,o,i),s=r[p]+"",i+=n):s=c}e.fillText(s,o,i)}function assetsPrepare(e,t){"number"==typeof timer&&clearInterval(timer),canvas=document.getElementById("scene"),ctx=canvas.getContext("2d"),canvas2=document.getElementById("scene2"),ctx2=canvas2.getContext("2d"),canvas3=document.getElementById("scene3"),ctx3=canvas3.getContext("2d"),canvas4=document.getElementById("scene4"),ctx4=canvas4.getContext("2d");var o=new Image;o.src=website_url+"images/data/"+e+"/eyes.png",o.onload=function(){assetsItems.push(this)};var i=new Image;i.src=website_url+"images/data/"+e+"/eyebrow.png",i.onload=function(){assetsItems.push(this)};var a=new Image;a.src=website_url+"images/data/"+e+"/mouths.png",a.onload=function(){assetsItems.push(this)};var n=new Image;n.src=website_url+"images/data/"+e+"/face.png",n.onload=function(){assetsItems.push(this)};var r=new Image;r.src=website_url+"images/data/"+e+"/fringes.png",r.onload=function(){assetsItems.push(this)};var s=new Image;s.src=website_url+"images/data/"+e+"/body.png",s.onload=function(){assetsItems.push(this)};var p=new Image;p.src=website_url+"images/data/"+e+"/cloth.png",p.onload=function(){assetsItems.push(this)};var c=new Image;c.src=website_url+"images/data/"+e+"/foot.png",c.onload=function(){assetsItems.push(this)};var d=new Image;d.src=website_url+"images/data/"+e+"/background.png",d.onload=function(){assetsItems.push(this)},oHead=new Head(0,0,0,0,340,340,n),oFringe=new Fringe(0,0,0,0,340,340,r),oEye=new Eye(0,0,0,0,340,340,o),oEyebrow=new Eyebrow(0,0,0,0,340,340,i),oMouth=new Mouth(0,0,0,0,340,340,a),oBody=new Body(0,0,0,0,340,477,s),oCloth=new Cloth(0,0,0,0,340,477,p),oFoot=new Foot(0,0,0,0,340,477,c),oBackground=new Background(0,0,0,0,340,340,d),loader=setInterval(function(){console.log(assetsItems.length),9==assetsItems.length&&(clearInterval(loader),timer=setInterval(drawScene,100),assetsItems=[],$.magnificPopup.close(),t())},100)}function checkAssetsLoad(e){console.log(assetsItems.length),9==assetsItems.length&&(clearInterval(loader),timer=setInterval(drawScene,100),assetsItems=[],$.magnificPopup.close())}function checkPortrait(){document.documentElement.clientHeight>document.documentElement.clientWidth?$("body").removeClass("portraitPls"):$("body").addClass("portraitPls")}var website_url="/",gender="female",canvas,ctx,canvas2,ctx2,oHead,oFringe,oEyebrow,oEye,oMouth,oTop,faceObject=[oHead,oFringe,oEyebrow,oEye,oMouth,oTop],oColors,oColorEyebrow,oColorEye,oColorTop,oColorBack,canvas3,ctx3,canvas4,ctx4,oBody,oCloth,oLeg,oFoot,oAccessory,oBackground,headPosX_onFacebuild=0,headPosY_onFacebuild=175,allObject={male:{oHead:{iSpr:0,typeSwiper:null,selector:".headSwiperType"},oFringe:{iSpr:0,typeSwiper:null,selector:".fringeSwiperType"},oEyebrow:{iSpr:0,typeSwiper:null,selector:".eyebrowSwiperType"},oEye:{iSpr:0,typeSwiper:null,selector:".eyeSwiperType"},oMouth:{iSpr:0,typeSwiper:null,selector:".mouthSwiperType"},oCloth:{iSpr:0,typeSwiper:null,selector:".clothSwiperType"},oFoot:{iSpr:0,typeSwiper:null,selector:".footSwiperType"},oBackground:{iSpr:0,typeSwiper:null,selector:".backgroundSwiperType"}},female:{oHead:{iSpr:0,typeSwiper:null,selector:".headSwiperType"},oFringe:{iSpr:0,typeSwiper:null,selector:".fringeSwiperType"},oEyebrow:{iSpr:0,typeSwiper:null,selector:".eyebrowSwiperType"},oEye:{iSpr:0,typeSwiper:null,selector:".eyeSwiperType"},oMouth:{iSpr:0,typeSwiper:null,selector:".mouthSwiperType"},oCloth:{iSpr:0,typeSwiper:null,selector:".clothSwiperType"},oFoot:{iSpr:0,typeSwiper:null,selector:".footSwiperType"},oBackground:{iSpr:0,typeSwiper:null,selector:".backgroundSwiperType"}}},headScale=.3,headPosX=125,headPosY=10,timer,loader,userMsg={context:"",text:$("#msg").val(),maxWidth:100,lineHeight:25,x:0,y:50,font:"25pt Calibri",fillStyle:"#333"},assetsItems=[],iSel=0,app={step:0,swiperLayer:$(".elementSwiper"),femaleSwiperLayer:$(".elementSwiper.female"),maleSwiperLayer:$(".elementSwiper.male"),gameStart:$(".gameStart"),gameSteps:$(".nextStep,.prevStep"),nextStep:$(".nextStep"),prevStep:$(".prevStep"),faceItem:$(".faceItem"),bodyItem:$(".bodyItem"),generate:$("#generate"),stepProgram:[{container:$(".startup"),stepFunction:function(){app.swiperLayer.hide(),this.container.show().siblings().hide(),app.faceItem.hide(),app.bodyItem.hide(),app.generate.hide(),app.gameSteps.hide(),app.gameStart.show(),$(".btnBegin").on("click",function(){app.step=app.step+1,app.stepProgram[app.step].stepFunction(),$.magnificPopup.close()}),$(".open-popup-link").magnificPopup({type:"inline",midClick:!0,removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect")}}})}},{container:$(".genderBuild"),stepFunction:function(){var e=this.container;app.swiperLayer.hide(),this.container.show().siblings().hide(),app.faceItem.hide(),app.bodyItem.hide(),app.generate.hide(),app.gameSteps.hide(),app.nextStep.show(),app.gameStart.hide(),clearInterval(timer),(new WOW).init(),$(".genderBox .item").on("click",function(){gender=$(this).attr("val"),e.data("gender",gender).data("justSelect",!0),$(this).siblings().removeClass("active").end().addClass("active"),app.nextStep.removeClass("disable")}),e.data("gender")||app.nextStep.addClass("disable")}},{container:$(".faceBuild"),stepFunction:function(){app.swiperLayer.hide(),"female"==gender?app.femaleSwiperLayer.show():app.maleSwiperLayer.show();var e=this.container,t=function(){$.magnificPopup.open({items:{src:$('<div class="white-popup" ><p>loading Assets...</p></div>')},type:"inline"}),assetsPrepare(gender,function(){e.data("gender",gender)})};if(app.faceItem.show(),this.container.show().siblings().hide(),0==app.faceItem.filter(".active").length?app.faceItem.eq(0).trigger("click"):app.faceItem.filter(".active").trigger("click"),app.generate.hide(),app.prevStep.show(),document.documentElement.clientHeight<500&&(headPosY_onFacebuild=90),e.data("gender")?e.data("gender")==gender?console.log("same gender"):(console.log("different gender"),t()):t(),"female"==gender){new Swiper(app.femaleSwiperLayer,{onSlideChangeStart:function(e){console.log(e.activeIndex)}}),new Swiper(".female.elementSwiper .headSwiperType",{onSlideChangeStart:function(e){oHead.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".female.elementSwiper .fringeSwiperType",{onSlideChangeStart:function(e){oFringe.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".female.elementSwiper .eyebrowSwiperType",{onSlideChangeStart:function(e){oEyebrow.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".female.elementSwiper .eyeSwiperType",{onSlideChangeStart:function(e){oEye.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".female.elementSwiper .mouthSwiperType",{onSlideChangeStart:function(e){oMouth.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".female.elementSwiper .backgroundSwiperType",{onSlideChangeStart:function(e){oBackground.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".female.elementSwiper .clothSwiperType",{onSlideChangeStart:function(e){oCloth.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".female.elementSwiper .footSwiperType",{onSlideChangeStart:function(e){oFoot.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"})}else{new Swiper(app.maleSwiperLayer,{onSlideChangeStart:function(e){console.log(e.activeIndex)}}),new Swiper(".male.elementSwiper .headSwiperType",{onSlideChangeStart:function(e){oHead.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".male.elementSwiper .fringeSwiperType",{onSlideChangeStart:function(e){oFringe.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".male.elementSwiper .eyebrowSwiperType",{onSlideChangeStart:function(e){oEyebrow.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".male.elementSwiper .eyeSwiperType",{onSlideChangeStart:function(e){oEye.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".male.elementSwiper .mouthSwiperType",{onSlideChangeStart:function(e){oMouth.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".male.elementSwiper .backgroundSwiperType",{onSlideChangeStart:function(e){oBackground.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".male.elementSwiper .clothSwiperType",{onSlideChangeStart:function(e){oCloth.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"}),new Swiper(".male.elementSwiper .footSwiperType",{onSlideChangeStart:function(e){oFoot.iSpr=parseInt(e.activeIndex)},centeredSlides:!0,slidesPerView:5,direction:"vertical"})}}},{container:$(".bodyBuild"),stepFunction:function(){app.swiperLayer.show(),this.container.show().siblings().hide(),app.bodyItem.show().eq(0).trigger("click"),app.generate.hide()}},{container:$(".msgBuild"),stepFunction:function(){app.swiperLayer.hide(),this.container.show().siblings().hide(),app.faceItem.hide(),app.bodyItem.hide(),app.generate.show(),app.gameStart.hide()}}]};$(function(){checkPortrait(),$(window).on("resize",checkPortrait),$("#generate button").click(function(){exportResult()}),app.nextStep.on("click",function(){app.step<app.stepProgram.length-1&&0==app.nextStep.hasClass("disable")&&(app.step=app.step+1,app.stepProgram[app.step].stepFunction())}),app.prevStep.on("click",function(){app.step>0&&0==$(this).hasClass("disable")&&(app.step=app.step-1,app.stepProgram[app.step].stepFunction())}),app.stepProgram[app.step].stepFunction()});