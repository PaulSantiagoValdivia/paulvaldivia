export const metadata = {

  title: 'Sntiavo Valdivia',
  openGraph: {
    title: 'portafolio',
    description: '',
  },
}
export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Outfit:wght@200;400;800&family=Syne:wght@800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, backgroundColor: '#030303' }}>
        {children}
      </body>
    </html>
  );
}