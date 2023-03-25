const getMaxImgSizeOnScreen = () => {
  const imgs = document.querySelectorAll('img');
  const result = [];

  imgs.forEach((img) => {
    const { top, left, bottom, right, width, height } = img.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    if (
      (top >= 0 && left >= 0 && bottom <= viewportHeight && right <= viewportWidth) || // fully visible
      (bottom >= 0 && right >= 0 && top <= viewportHeight && left <= viewportWidth) || // partially visible
      (top < 0 && bottom >= viewportHeight) // image is bigger than viewport or only showing at the bottom
    ) {
      result.push(width * height);
    }
  });

  return Math.max(...result);
}

module.exports = getMaxImgSizeOnScreen;