var canvas = document.getElementById("canvas");
var orgimage, imageGray, redImage, rainbowImage, ukrainianFlag, rusFlag, greenImage, blueImage = null; 
var imageUpload = document.getElementById("upload");



function imageUploader() {
    orgimage = new SimpleImage(imageUpload);
    imageGray = new SimpleImage(imageUpload);
    redImage =  new SimpleImage(imageUpload);
    rainbowImage = new SimpleImage(imageUpload);
    rusFlag = new SimpleImage(imageUpload);
    ukrainianFlag = new SimpleImage(imageUpload);
    greenImage = new SimpleImage(imageUpload);
    blueImage = new SimpleImage(imageUpload);
    orgimage.drawTo(canvas);
}

function doGray() {
    for (var pixel of imageGray.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();
        var result = (red + green + blue)/3 ;
        pixel.setRed(result);
        pixel.setGreen(result);
        pixel.setBlue(result);
      }
      return imageGray;
}


function loaded(image) {
  if (image =! null || image.complete()){
    return true;
  } else{
    /*i'm having a bug here : this next line supposed to alert the user
    when he/she trying to use a filter while the canvas is empty :( 
    haven't found the solution yet */
    alert("Image is not loaded ");
    return false;
  }
}

function grayFilter(){
  if ( loaded(imageGray) ){
    doGray();
    imageGray.drawTo(canvas);
  } 
}



function doRed(){
for (var pixel of redImage.values()){
     var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
     
     if (avg < 128){
         pixel.setRed(2*avg);
         pixel.setGreen(0);
         pixel.setBlue(0);
     } else {
         pixel.setRed(255);
         pixel.setGreen((2*avg)-255);
         pixel.setBlue((2*avg)-255);
     }
}
   return redImage;
}

function doRedFilter(){
  if (loaded(redImage)){
    doRed();
    redImage.drawTo(canvas);
    /*I wrote the following code so that the red filter doesn't apply 
    on the picture again when you came back to this filter after applying 
    another filter (this is the current solution i found )
    note : with this current code double clicking on the filter button resets 
    the image to original 
    */  
    redImage = new SimpleImage(imageUpload);
  }
  
}

function reset(){
  if(loaded(orgimage)){
    orgimage.drawTo(canvas);
    imageGray, rainbowImage, rusFlag, greenImage = new SimpleImage(imageUpload); 
    redImage = new SimpleImage(imageUpload);
  }

}


/* rainbow filter will not be used for now*/
/*function doRainbow(){
  for (var pixel of rainbowImage.values()){
    var w = rainbowImage.getWidth();
    var h = rainbowImage.getHeight();
    var x = pixel.getX();
    var y = pixel.getY();
    
    if (y <= h/7 ){
        pixel.setRed(255);
    } if (y > (h/7) && y <= (h*2)/7){
        pixel.setRed(255);
        pixel.setGreen(127);
    } if (y > (h*2)/7 && y <= (h*3)/7){
        pixel.setRed(255);
        pixel.setGreen(255);
    } if (y > (h*3)/7 && y <= (h*4)/7){
        pixel.setGreen(255);
    } if (y > (h*4)/7 && y <= (h*5)/7){
        pixel.setBlue(255);
    } if (y > (h*5)/7 && y <= (h*6)/7){
        pixel.setRed(75);
        pixel.setBlue(130);
    } if (y > (h*6)/7 && y <= h){
        pixel.setRed(143);
        pixel.setBlue(255);
    }
} return rainbowImage;
}


function rainbow(){
  if (loaded(rainbowImage)){
    doRainbow();
    rainbowImage.drawTo(canvas);
  }
}*/

/******************************************* */
function doUkrainianFlag(){
  for (var pixel of ukrainianFlag.values()){
     var w = ukrainianFlag.getWidth();
    var h = ukrainianFlag.getHeight();
    var x = pixel.getX();
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    
    if(y <= h/2 ){  //0, 87, 183 (-some values from all to make it transparent)
        //pixel.setRed(0);
        pixel.setGreen(60);
        pixel.setBlue(200);
       
    } if (y > h/2){ //255, 215, 0 (-some values from all to make it transparent)
        pixel.setRed(215);
        pixel.setGreen(185);
        //pixel.setBlue(0);
    } 
} return ukrainianFlag;
}
 
function ukrainianFlagFilter(){
  if (loaded(ukrainianFlag)){
    doUkrainianFlag();
    ukrainianFlag.drawTo(canvas);
  }
}
/******************************************* */


function doRusFlag(){
  for (var pixel of rusFlag.values()){
     var w = rusFlag.getWidth();
    var h = rusFlag.getHeight();
    var x = pixel.getX();
    var y = pixel.getY();
    
    if(y <= h/3 ){
        pixel.setAlpha(50);
       
    } if (y > h/3 && y <= (h*2)/3){
        pixel.setBlue(255);
    } if (y > (h*2)/3 && y <= h ){
        pixel.setRed(255);
    }
} return rusFlag;
}
 
function rusFlagFilter(){
  if (loaded(rusFlag)){
    doRusFlag();
    rusFlag.drawTo(canvas);
  }
}

function dogreen(){
  
for (var pixel of greenImage.values()){
     var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
     
     if (avg < 128){
         pixel.setRed(0);
         pixel.setGreen(2*avg);
         pixel.setBlue(0);
     } else {
         pixel.setRed((2*avg)-255);
         pixel.setGreen(255);
         pixel.setBlue((2*avg)-255);
     }
} return greenImage;
}

function greenFilter(){
  if (loaded(greenImage)){
    dogreen();
  greenImage.drawTo(canvas);
/*I wrote the following code so that the green filter doesn't apply 
on the picture again when you came back to this code after applying another
filter (this is the current solution i found )
note : with this current code double clicking on the filter button resets the
image to original 
*/    
    greenImage = new SimpleImage(imageUpload);
  }
}

function doblue(){
  
  for (var pixel of blueImage.values()){
     var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
     
     if (avg < 128){
         pixel.setRed(0);
         pixel.setGreen(0);
         pixel.setBlue(2*avg);
     } else {
         pixel.setRed((2*avg)-255);
         pixel.setGreen((2*avg)-255);
         pixel.setBlue(255);
     }
} return blueImage;
}


function blueFilter(){
  if (loaded(blueImage)){
    doblue();
  blueImage.drawTo(canvas);
/*I wrote the following code so that the blue filter doesn't
apply on the picture again when you came back to this code after
applying another filter (this is the current solution i found )
note : with this current code double clicking on the filter button
resets the image to original 
*/    
    blueImage = new SimpleImage(imageUpload);
  }
}