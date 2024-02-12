import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "My Portfolio | Projects "
   
  }
  
export default function ProjectPageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    
    <section>
     
      {children}
    </section>
    )
  }
  