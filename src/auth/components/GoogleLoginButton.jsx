import {GoogleLogin} from "@react-oauth/google";

export default function GoogleLoginButton(params) {
    return (
        <GoogleLogin
            onSuccess={params.onSuccess}
            onError={params.onError}
            text="continue_with"
            locale="hr"
            useOneTap={true}
        />
    )
}
