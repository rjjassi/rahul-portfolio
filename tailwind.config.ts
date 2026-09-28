import type { Config } from 'tailwindcss'
const config: Config = {content:['./app/**/*.{js,ts,jsx,tsx,mdx}'],theme:{extend:{fontFamily:{sans:['Inter','ui-sans-serif','system-ui']},boxShadow:{glow:'0 0 60px rgba(56,189,248,.12)'}}},plugins:[]}
export default config
