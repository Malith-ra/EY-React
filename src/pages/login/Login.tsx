import React, { useMemo, useState } from 'react';

type Errors = {
  email?: string;
  password?: string;
};

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitted, setSubmitted] = useState(false);

  const errors: Errors = useMemo(() => {
    const e: Errors = {};

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) {
      e.email = 'Email is required.';
    } else {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
      if (!ok) e.email = 'Please enter a valid email.';
    }

    if (!trimmedPassword) {
      e.password = 'Password is required.';
    }

    return e;
  }, [email, password]);

  const showEmailError = (submitted || touched.email) && !!errors.email;
  const showPasswordError =
    (submitted || touched.password) && !!errors.password;

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length === 0) {
      // ✅ Replace with your API call
      console.log('Login payload:', { email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-slate-900 text-center">
          Sign in
        </h1>
        <p className="text-sm text-slate-500 text-center mt-2">
          Use your email and password to continue
        </p>

        <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="you@example.com"
              className={[
                'w-full rounded-lg border px-3 py-2 outline-none transition',
                showEmailError
                  ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'border-slate-300 focus:ring-2 focus:ring-slate-200',
              ].join(' ')}
              aria-invalid={showEmailError}
              aria-describedby={showEmailError ? 'email-error' : undefined}
            />
            {showEmailError && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              placeholder="••••••••"
              className={[
                'w-full rounded-lg border px-3 py-2 outline-none transition',
                showPasswordError
                  ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'border-slate-300 focus:ring-2 focus:ring-slate-200',
              ].join(' ')}
              aria-invalid={showPasswordError}
              aria-describedby={
                showPasswordError ? 'password-error' : undefined
              }
            />
            {showPasswordError && (
              <p id="password-error" className="mt-1 text-sm text-red-600">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-black rounded-lg bg-slate-900 px-4 py-2.5 font-semibold hover:bg-slate-800 active:bg-slate-950 transition"
          >
            Sign in
          </button>

          <div className="text-center text-sm text-slate-500">
            Forgot password?{' '}
            <a className="text-slate-900 font-medium hover:underline" href="#">
              Reset
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
