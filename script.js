// 图片文件名列表
var imageList = ["7.jpg", "2.jpg", "1.jpg", "12.jpg"];
var currentIndex = 0;
var displayedImage = document.getElementById("displayed-image");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

// 上一页按钮点击事件
prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    updateImage();
});

// 下一页按钮点击事件
nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % imageList.length;
    updateImage();
});

// 更新显示的图片
function updateImage() {
    var imageUrl = imageList[currentIndex];
    displayedImage.src = imageUrl;
}
