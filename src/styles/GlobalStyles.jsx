const GlobaleStyles = () => (
  <style>{`
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/playfair-display@5.0.0/index.css');
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.0/index.css');
        
        * {
            font-family: 'Inter', san-serif;
        }
        h1,h2,h3,h4,h5,h6 {
            font-family: 'Playfair Display', serif
        }
        html {
            scroll-behavior: smooth;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #F9F7F2 }
        ::-webkit-scrollbar-thumb { background: #C84B31; border-radius:4px }
    `}</style>
);

export default GlobaleStyles;