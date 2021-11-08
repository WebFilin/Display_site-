
function showElementsWebsite() {


   const pcDispl = document.querySelector(".pc__displ");
   const pc = document.querySelector(".pc__container");
   const pcDispFrame = document.querySelector(".pc__displ_frame");
   pcDispl.addEventListener("click", pcZoom);

   const telDispl = document.querySelector(".tel__displ");
   const tel = document.querySelector(".tel__container");
   const telDispFrame = document.querySelector(".tel__displ_frame");
   telDispl.addEventListener("click", telZoom);

   const tabletDispl = document.querySelector(".tablet__displ");
   const tablet = document.querySelector(".tablet__container");
   const tabDispFrame = document.querySelector(".tablet__displ_frame");
   tabletDispl.addEventListener("click", tabletZoom);

   const arrowRotate = document.querySelector(".arrow-rotate-tablet");
   arrowRotate.addEventListener("click", rotateTabletAll);

   // Zoom PC
   function pcZoom() {
      pc.classList.add("js-add-pc-zoom");
      pcDispFrame.classList.add("js-add-pc-scroll");
      tabletDispl.addEventListener("click", tabletZoom,);
      motionAllGadgets();
      returnSizeTablet();
      returnSizeTel();
      hiddenTabletArrow();
      removeTelScroll();
      removeTabletScroll();
   }

   // Zoom tel
   function telZoom() {
      tel.classList.add("js-add-tel-zoom");
      tabletDispl.addEventListener("click", tabletZoom,);
      removeAnimationPcMotion();
      returnSizeTablet();
      addTelScroll();
      removeRotateTabletVertImg();
   }

   // Zoom tablet
   function tabletZoom() {
      tablet.classList.add("js-add-tablet-zoom");
      removeAnimationPcMotion();
      returnSizeTel();
      removeTelScroll();
      addTabletScroll();
      tabletArrowShow();
      removeRotateTabletVertImg()
   }

   function returnSizeTel() {
      tel.classList.remove("js-add-tel-zoom");
      hiddenTabletArrow();

   }

   function returnSizeTablet() {
      tablet.classList.remove("js-add-tablet-zoom");
      tablet.classList.remove("js-add-rotate-tablet")
      hiddenTabletArrow();
      removeTabletScroll();
      removeTelScroll();
   }

   function motionAllGadgets() {
      tel.classList.add("js-add-pc-tel-motion");
      tablet.classList.add("js-add-pc-tablet-motion");
      hiddenTabletArrow();
      rotateTabletVertImg();
   }

   function removeAnimationPcMotion() {
      tablet.classList.remove("js-add-pc-tablet-motion");
      tel.classList.remove("js-add-pc-tel-motion");
      pc.classList.remove("js-add-pc-zoom");
      pcDispFrame.classList.remove("js-add-pc-scroll");
      hiddenTabletArrow();
   }


   function rotateTabletAll() {
      tablet.classList.toggle("js-add-rotate-tablet");
      tabDispFrame.classList.toggle("js-add-rotate-tab-img-vert");
      tabletDispl.removeEventListener("click", tabletZoom,);
   }


   function tabletArrowShow() {
      arrowRotate.classList.add(".js-add-arrow-show");
      arrowRotate.classList.remove("arrow-rotate-tablet");
   }

   function hiddenTabletArrow() {
      arrowRotate.classList.add("arrow-rotate-tablet");
   }

   function addTelScroll() {
      telDispFrame.classList.add("js-add-tel-scroll");
   }
   function removeTelScroll() {
      telDispFrame.classList.remove("js-add-tel-scroll");
   }
   function addTabletScroll() {
      tabDispFrame.classList.add("js-add-tab-scroll");
   }

   function removeTabletScroll() {
      tabDispFrame.classList.remove("js-add-tab-scroll");
   }

   function rotateTabletVertImg() {
      tabDispFrame.classList.add("js-add-rotate-tab-img-vert");
   }


   function removeRotateTabletVertImg() {
      tabDispFrame.classList.remove("js-add-rotate-tab-img-vert");
   }

}

showElementsWebsite();