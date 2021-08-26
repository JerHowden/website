import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return initialProps
	}

	render() {
		return (
			<Html lang='en-US' className='bg'>
				<Head />
					
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
					{/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/> */}
					{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"/> */}
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"/>
					<body>
						<Main />
						<NextScript />
					</body>
			</Html>
		)
	}
}

export default MyDocument