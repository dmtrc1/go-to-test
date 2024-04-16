import { useState, useEffect } from 'react';

const useLazyImage = (imageUrl, placeholderUrl) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    image.addEventListener('load', handleImageLoad);

    return () => {
      image.removeEventListener('load', handleImageLoad);
    };
  }, [imageUrl]);

  // const backgroundStyle = {
  //   background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${placeholderUrl}) center/cover no-repeat, var(--black)`,
  // };

  let image = placeholderUrl;

  if (imageLoaded) {
    image = imageUrl;
    // backgroundStyle.background = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${imageUrl}) center/cover no-repeat, var(--black)`
  }

  return image;
};

export default useLazyImage;
