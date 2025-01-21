export interface ComponentMeta {
  title: string
  description: string
  slug: string
}

export interface ComponentLayoutProps {
  meta: ComponentMeta
  children: React.ReactNode
}

