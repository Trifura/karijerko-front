import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../auth/store/actions';

export default function VerifyEmail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get('token');

    useEffect(() => {
        if (token) {
            dispatch(verifyEmail(token)).then((result) => {
                if (result.meta.requestStatus === 'fulfilled') {
                    navigate('/login');
                } else {
                    navigate('/email-verified-failure');
                }
            });
        }
    }, [dispatch, token, navigate]);

    return (
        <div>
            Potvrđujemo vašu e-mail adresu...
        </div>
    );
}
