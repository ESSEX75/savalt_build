export interface ILink {
    variant: 'telegramLink' | 'whatsappLink' | 'mailLink' | 'base' | 'baseButton';
    color: 'white' | 'orange';
    display: 'centeringButtonContent' | 'nonFlex';
    fontSize: 'button' | 'description' | 'subtext';
    linkSize: 'button' | 'base';
    src?: string;
    children?: string;
    href: string;
}

export interface IStyleLink {
    variant: 'telegramLink' | 'whatsappLink' | 'mailLink' | 'base' | 'baseButton';
    display: 'centeringButtonContent' | 'nonFlex';
    color: 'white' | 'orange';
    fontSize: 'button' | 'description' | 'subtext';
    linkSize: 'button' | 'base';
}
