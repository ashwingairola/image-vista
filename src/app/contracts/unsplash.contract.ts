export namespace Unsplash {
  export interface ISearchResult {
    results: IPhoto[];
    total: number;
    total_pages: number;
  }

  export interface IPhoto {
    height: number;
    width: number;
    alt_description: string;
    categories: any[];
    color: string;
    created_at: Date;
    current_user_collections: any[];
    description: string;
    id: string;
    liked_by_user: boolean;
    likes: number;
    links: {
      download?: string;
      download_location?: string;
      html?: string;
      self?: string;
    };
    tags: any[];
    updated_at: Date;
    urls: {
      full?: string;
      raw?: string;
      regular?: string;
      small?: string;
      thumb?: string;
    };
    user: IArtist;
  }

  export interface IArtist {
    id: string;
    first_name: string;
    last_name: string;
    name: string;
    accepted_tos: boolean;
    bio: string;
    location: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    total_collections: number;
    total_likes: number;
    total_photos: number;
    instagram_username?: string;
    twitter_username?: string;
  }
}
