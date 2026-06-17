import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { cld } from '../lib/cloudinary';

const CloudinaryImage = ({ publicId, alt, className, width = 600, height = 400 }) => {
  const image = cld
    .image(publicId)
    .resize(fill().width(width).height(height))
    .delivery(quality(auto()))
    .delivery(format(auto()));

  return (
    <AdvancedImage
      cldImg={image}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default CloudinaryImage;
