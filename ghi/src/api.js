import { useEffect, useState } from "react";
let internalToken = null;

export async function getProtectedView() {
  const url = `${process.env.REACT_APP_EVENTS_HOST}/api/protected/`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${internalToken}`
    }
  });
  if (response.ok) {
    const result = await response.json();
    console.log(result);
  } else {
    console.log('failed');
  }
}

export async function getPublicView() {
  const url = `${process.env.REACT_APP_EVENTS_HOST}/api/public/`;
  const response = await fetch(url);
  if (response.ok) {
    const result = await response.json();
    console.log(result);
  } else {
    console.log('failed');
  }
}

async function getToken() {
  const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/users/me/token/`;
  const response = await fetch(url, {
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    internalToken = data.token;
    return internalToken;
  }
  return false;
}

export function useToken() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    console.log('running useToken');
    async function fetchToken() {
      const token = await getToken();
      setToken(token);
    }
    if (!token) {
      fetchToken();
    }
  }, [token]);

  async function logout() {
    if (token) {
      const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/token/refresh/logout/`;
      await fetch(url, {method: 'delete', credentials: 'include'});
      internalToken = null;
      setToken(null);
    }
  }

  async function signup(username, email, password) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/users/`;
    const response = await fetch(url, {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify({username, email, password, first_name: '', last_name: ''}),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      return await login(username, password);
    }
    return false;
  }

  async function login(username, password) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/login/`;
    const form = new FormData();
    form.append('username', username);
    form.append('password', password);
    const response = await fetch(url, {
      method: 'post',
      credentials: 'include',
      body: form,
    });
    if (response.ok) {
      console.log("this is login response", response.body);
      const token = await getToken();
      setToken(token);
    }
    return false;
  }

  return [token, logout, signup, login];
}
