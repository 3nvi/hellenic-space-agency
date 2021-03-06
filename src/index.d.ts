declare module '*.jpg';
declare module '*.png';

declare interface Page<Data = any> {
  pageContext: {
    originalPath: string;
    lang: 'el' | 'en';
  };
  data: Data;
}

declare module 'react-reveal/Fade' {
  type FadeProps = {
    out?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    big?: boolean;
    mirror?: boolean;
    opposite?: boolean;
    duration?: number;
    timeout?: number;
    distance?: string;
    delay?: number;
    count?: number;
    forever?: boolean;
  };

  const FadeComponent: React.FC<FadeProps>;

  export default FadeComponent;
}
