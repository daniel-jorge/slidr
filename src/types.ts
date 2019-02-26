import { ReactNode } from 'react';

export interface SlidrPage {
  title?: ReactNode;
  background?: ReactNode;
  content: ReactNode;
  header?: boolean | ReactNode;
}

export interface SlidrDocument {
  name: string;
  theme: any;
  header?: ReactNode;
  navigation?: ReactNode;
  background?: ReactNode;
  pages: SlidrPage[];
}
