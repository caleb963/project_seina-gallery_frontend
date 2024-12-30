import React from 'react';
import './Buy.css';

function Buy() {
    const [formData, setFormData] = useState({ name: '', email: '', paintingId: ''});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '111.00'
                            }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                });
            }
        }).render('#paypal-button-container');
    }, []);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = 'Email is required';
        if (!formData.paintingId) tempErrors.paintingId = "Painting ID is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate a purchase
        if (validate()) {
        alert('Purchase simulated');
        }
    };

    return (
        <section id="buy">
            <h1>Buy</h1>
            <form className='buy__form' onSubmit={handleSubmit}>
                <label className='buy__form-label'>
                    Name:
                    <input className="buy__form-input" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label className='buy__form-label'>
                    Email:
                    <input className="buy__form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors. email && <span className="buy__form-error">{errors.email}</span>}
                </label>
                <label className='buy__form-label'>
                    Painting ID: 
                    <input className="buy__form-input" type="text" name="paintingId" value={formData.paintingId} onChange={handleChange} required />
                    {errors.paintingId && <span className="buy__form-error">{errors.paintingId}</span>}
                </label>
                <button type="submit" className='buy__button'>Buy a painting</button>
            </form>
            <div id="paypal-button-container"></div>
        </section>
    );
}

export default Buy;