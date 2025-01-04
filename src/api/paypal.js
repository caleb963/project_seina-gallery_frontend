import { loadScript } from '@paypal/paypal-js';

export const initializePaypal =  async () => {
    try {
        const paypal = await loadScript({
            "client-id": "AZPlhFVjoili6Jzeu704M_gDNmju2Ufs9OeDbAC6ivvtgWmtHIAGbqRReQbsDM3Ujfw_wtiSaz1klUqf",
            currency: "USD",
        });

        if (!paypal) {
            throw new Error('Paypal SDK no se cargo correctamente.');
        }

        return paypal;
    } catch (error) {
        console.error('Error al inicializar Paypal:' , error);
        throw error;
    }
};