import nookies from 'nookies';
import { firebaseAdmin } from './firebaseAdmin';

const cors_api_base_url = "http://sentiment-cors.tenant-lorenzschmidt.knative.chi.coreweave.com"
export const generator_api_url = "https://sentiment-predictor-default.tenant-lorenzschmidt.knative.chi.coreweave.com/v1/models/sentiment:predict"
export const generator_api_url_cors = `${cors_api_base_url}/v1/models/sentiment:predict`


export const onlyQueryProps = (ctx) => ({
    props: {
        query: ctx.query
    }
})

export const blankServerProps = {
    props: {

    }
}

export const redirectToLogin = {
    redirect: {
      permanent: false,
      destination: "/auth/login",
    },
    props: {

    },
};

export const redirectToDashboard = {
    redirect: {
      permanent: false,
      destination: "/app",
    },
    props: {

    },
};

export const verifyAuthenticatedAsAdmin = async (ctx) => {
    try {
        const cookies = nookies.get(ctx);
        const user = await firebaseAdmin.auth().verifyIdToken(cookies.token);
  
        const custom_claims = await (await firebaseAdmin.auth().getUser(user.uid)).customClaims
        console.log({custom_claims})
        if (custom_claims.account_type !== "Admin") {
            return redirectToDashboard;
        } else {
            return blankServerProps
        }
    } catch (err) {
        return redirectToLogin
    }
}

export const verifyAuthenticatedClient = async (ctx) => {
    try {
        const cookies = nookies.get(ctx);
        await firebaseAdmin.auth().verifyIdToken(cookies.token);
  
        return blankServerProps
    } catch (err) {
        return redirectToLogin
    }
}