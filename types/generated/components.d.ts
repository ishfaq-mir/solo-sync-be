import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageCarouselsDisplayCarousel extends Schema.Component {
  collectionName: 'components_image_carousels_display_carousels';
  info: {
    displayName: 'display-carousel';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'image-carousels.display-carousel': ImageCarouselsDisplayCarousel;
    }
  }
}
