import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

const sectionHeader = {
    title: '',
    paragraph: ''
  };

function App() {
	const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_uGoq5ABJztRAhk' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			onClick={displayRazorpay}
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Donate $5
		// 		</a>
		// 	</header>
		// </div>
        <section>
        <div className="container" style={{alignItems:"center"}}>
          <div>
            <SectionHeader data={sectionHeader} className="center-content" />
              <center>
                <br/><br/>
                <h2>Payments</h2>
                <p className="m-0" style={{fontSize:"14px", textAlign:"left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br/>
                <a href="#" onClick={displayRazorpay} target="_blank" rel="noopener noreferrer" className="button button-primary button-wide-mobile button-sm" style={{backgroundColor:"#3d946e", margin:"1%", borderRadius:"20px"}}>Donate $5</a>
                <a href="/Declaration" className="button button-primary button-wide-mobile button-sm" style={{backgroundColor:"#3d946e", margin:"1%", borderRadius:"20px"}}>Cancel</a>
              </center>
          </div>
        </div>
      </section>
	)
}

export default App