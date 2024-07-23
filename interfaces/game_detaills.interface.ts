export interface GameDetails {
  components: Component[];
  meta: GameDetailsMeta;
  header: Header[];
}

export interface Component {
  fetcherName?: string;
  status?: number;
  errors?: Error[];
  meta: ComponentMeta;
  data?: ComponentData;
  links?: ComponentLinks;
}

export interface ComponentData {
  id: null | string;
  items: PurpleItem[];
  title?: null;
}

export interface PurpleItem {
  id: string;
  type: Type;
  title: string;
  slug: string;
  date: Date;
  url: null;
  isVideo: null;
  description: string;
  tags: Tag[];
  author: Author;
  image: Image;
}

export interface Author {
  byline: Byline;
  firstName: FirstName;
  id: string;
  lastName: LastName;
  username: Username;
}

export enum Byline {
  DanielleTurchiano = 'Danielle Turchiano',
  JonBitner = 'Jon Bitner',
  LukeDaugherty = 'Luke Daugherty',
  MetacriticFeaturesEditor = 'Metacritic Features Editor',
}

export enum FirstName {
  Danielle = 'Danielle',
  Jason = 'Jason',
  Jon = 'Jon',
  Luke = 'Luke',
}

export enum LastName {
  Bitner = 'Bitner',
  Daugherty = 'Daugherty',
  Dietz = 'Dietz',
  Turchiano = 'Turchiano',
}

export enum Username {
  DturchianoMc = 'dturchiano-mc',
  JbitnerMc = 'jbitner-mc',
  Jdietzmc = 'jdietzmc',
  LdaughertryMc = 'ldaughertry-mc',
}

export interface Image {
  id: string;
  filename: string;
  dateCreated: DateCreated;
  alt: null;
  credits: null | string;
  path: string;
  cropGravity: null;
  crop: null;
  caption: string;
  typeName: null;
  imageUrl: null;
  width: number;
  height: number;
  sType: null;
  bucketType: null;
  bucketPath: null;
  mediaType: null;
}

export interface DateCreated {
  date: Date;
  timezone: Timezone;
}

export enum Timezone {
  UTC = 'UTC',
}

export interface Tag {
  id: string;
  name: Name;
  slug: Slug;
}

export enum Name {
  Game = 'Game',
  Games = 'Games',
}

export enum Slug {
  Game = 'game',
  Games = 'games',
}

export enum Type {
  ContentArticle = 'content_article',
  ContentGallery = 'content_gallery',
}

export interface Error {
  code: number;
  reason: string;
  message: string;
}

export interface ComponentLinks {
  self: First;
  prev?: First;
  next?: First;
  first?: First;
  last?: First;
}

export interface First {
  href: null | string;
}

export interface ComponentMeta {
  componentName: string;
  componentDisplayName: string;
  componentType: string;
}

export interface Header {
  data: HeaderData;
  links: HeaderLinks;
  meta: ComponentMeta;
}

export interface HeaderData {
  id: string;
  title: string;
  componentLabel: null | string;
  root: string;
  items?: FluffyItem[];
}

export interface FluffyItem {
  title: string;
  link: string;
}

export interface HeaderLinks {
  self: First;
}

export interface GameDetailsMeta {
  edition: string;
  title: null;
  id: null;
  slug: null;
  category: null;
  description: null;
  pageType: string;
  section: null;
  image: null;
  typeName: null;
  franchises: any[];
  platforms: any[];
  genres: any[];
  publishers: any[];
  game: null;
  score: null;
}
