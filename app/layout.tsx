import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rahul Jaiswal | DevOps • Azure • Kubernetes • DevSecOps',
  description: 'Portfolio of Rahul Jaiswal — DevOps and DevSecOps engineer focused on Azure, Kubernetes, automation and AI infrastructure.',
  openGraph: {title:'Rahul Jaiswal — DevOps & Cloud Engineering',description:'Azure • Kubernetes • DevSecOps • AI Infrastructure',type:'website'}
}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
