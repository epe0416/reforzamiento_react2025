export interface GiphyRandomResponse {
    data: Gif;
    meta: Meta;
}

export interface Gif {
    type:                       string;
    id:                         string;
    url:                        string;
    slug:                       string;
    bitly_gif_url:              string;
    bitly_url:                  string;
    embed_url:                  string;
    username:                   string;
    source:                     string;
    title:                      string;
    rating:                     string;
    content_url:                string;
    source_tld:                 string;
    source_post_url:            string;
    source_caption:             string;
    is_sticker:                 number;
    import_datetime:            Date;
    trending_datetime:          string;
    images:                     Images;
    user:                       User;
    analytics_response_payload: string;
    analytics:                  Analytics;
    alt_text:                   string;
    is_low_contrast:            boolean;
}

export interface Analytics {
    onload:  Onclick;
    onclick: Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    original:                 Original;
    downsized:                Downsized;
    downsized_large:          Downsized;
    downsized_medium:         Downsized;
    downsized_small:          Downsized;
    downsized_still:          Downsized;
    fixed_height:             Downsized;
    fixed_height_downsampled: Downsized;
    fixed_height_small:       Downsized;
    fixed_height_small_still: Downsized;
    fixed_height_still:       Downsized;
    fixed_width:              Downsized;
    fixed_width_downsampled:  Downsized;
    fixed_width_small:        Downsized;
    fixed_width_small_still:  Downsized;
    fixed_width_still:        Downsized;
    looping:                  Downsized;
    original_still:           Downsized;
    original_mp4:             Downsized;
    preview:                  Downsized;
    preview_gif:              Downsized;
    "480w_still":             The480WStill;
}

export interface The480WStill {
    height: string;
    width:  string;
    size:   string;
    url:    string;
}

export interface Downsized {
}

export interface Original {
    height: string;
    width:  string;
    size:   string;
    url:    string;
    frames: string;
    hash:   string;
}

export interface User {
    avatar_url:    string;
    banner_image:  string;
    banner_url:    string;
    profile_url:   string;
    username:      string;
    display_name:  string;
    description:   string;
    instagram_url: string;
    website_url:   string;
    is_verified:   boolean;
}

export interface Meta {
    status:      number;
    msg:         string;
    response_id: string;
}
