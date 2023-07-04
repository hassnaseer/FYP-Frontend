import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyEmail } from 'Redux/Auth/action';

const EmailVerificationPage = () => {
  const params = window.location.search;
  const token = params.split("?")[1]
  const dispatch = useDispatch();
  console.log(token, "console here")

  useEffect(() => {
    dispatch(verifyEmail(token));
  }, [token]);

  return (
    <div>
      <p>Email is verifying, please wait...</p>
    </div>
  );
};

export default EmailVerificationPage;
