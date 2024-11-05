// src/types/elements.ts

// Elementos Básicos
interface BaseElement {
  id: string;
  order: number;
}

interface Title extends BaseElement {
  type: 'title';
  content: string;
  level?: 1 | 2 | 3;
}

interface Text extends BaseElement {
  type: 'text';
  content: string;
}

interface Image extends BaseElement {
  type: 'image';
  src: string;
  alt: string;
}

interface Button extends BaseElement {
  type: 'button';
  label: string;
  url?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

interface Link extends BaseElement {
  type: 'link';
  label: string;
  url: string;
}

interface Input extends BaseElement {
  type: 'input';
  placeholder: string;
  inputType: 'text' | 'email' | 'tel';
}

// Elementos Compostos
interface BigNumber extends BaseElement {
  type: 'big-number';
  number: string;
  title: string;
  description?: string;
}

interface Card extends BaseElement {
  type: 'card';
  title: string;
  text: string;
  button?: Button;
}

// Componentes
interface Component {
  id: string;
  name: string;
  slug: string;
  type: ComponentType;
  content: ComponentContent;
  isActive: boolean;
}

type ComponentType = 'menu' | 'banner' | 'bigNumbers' | 'infoLeft' | 'infoRight' | 'bannerCards' | 'newsLetter' | 'footer';

// Estruturas específicas por tipo
interface MenuContent {
  logo?: Image;
  links: Link[];
}

interface BannerContent {
  title: Title;
  text?: Text;
  image: Image;
  button?: Button;
}

interface BigNumbersContent {
  title?: Title;
  numbers: BigNumber[];
}

interface InfoContent {
  title: Title;
  text: Text;
  image: Image;
  button?: Button;
}

interface BannerCardsContent {
  title?: Title;
  cards: Card[];
}

interface NewsLetterContent {
  title: Title;
  text?: Text;
  input: Input;
  button: Button;
}

interface FooterContent {
  logo?: Image;
  links: Link[][];
  copyright?: Text;
}

type ComponentContent =
  | MenuContent
  | BannerContent
  | BigNumbersContent
  | InfoContent
  | BannerCardsContent
  | NewsLetterContent
  | FooterContent;