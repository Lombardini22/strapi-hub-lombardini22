import type { Schema, Struct } from '@strapi/strapi';

export interface CarouselCarousel extends Struct.ComponentSchema {
  collectionName: 'components_carousel_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
    icon: 'picture';
  };
  attributes: {
    slides: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    cookie_policy_url: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    instagram_url: Schema.Attribute.String;
    linkedin_url: Schema.Attribute.String;
    privacy_policy_url: Schema.Attribute.String;
  };
}

export interface HeaderMenuItemHeaderMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_item_header_menu_items';
  info: {
    description: '';
    displayName: 'header_menu_item';
  };
  attributes: {
    box_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    company_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    menu_items: Schema.Attribute.Component<
      'header-menu-item.header-menu-item',
      true
    >;
  };
}

export interface MarqueeMarquee extends Struct.ComponentSchema {
  collectionName: 'components_marquee_marquees';
  info: {
    displayName: 'Marquee';
    icon: 'quote';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface StringString extends Struct.ComponentSchema {
  collectionName: 'components_string_strings';
  info: {
    description: '';
    displayName: 'string';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface VenueTextSectionVenueTextSection
  extends Struct.ComponentSchema {
  collectionName: 'components_venue_text_section_venue_text_sections';
  info: {
    description: '';
    displayName: 'Venue Text Section';
  };
  attributes: {
    handwriting: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    paragraph: Schema.Attribute.Text;
    underline: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'carousel.carousel': CarouselCarousel;
      'footer.footer': FooterFooter;
      'header-menu-item.header-menu-item': HeaderMenuItemHeaderMenuItem;
      'header.header': HeaderHeader;
      'marquee.marquee': MarqueeMarquee;
      'string.string': StringString;
      'venue-text-section.venue-text-section': VenueTextSectionVenueTextSection;
    }
  }
}
