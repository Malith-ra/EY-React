import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getUserById, type User } from '../../api/users';

export default function UserDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const userId = Number(id);

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery<User>({
    queryKey: ['user', userId],
    queryFn: () => getUserById(userId),
    enabled: Number.isFinite(userId) && userId > 0,
  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/users"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline"
          >
            ← Back to Users
          </Link>

          <div className="text-xs text-slate-500">
            User ID: <span className="font-semibold">{id ?? '-'}</span>
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="mt-6 rounded-2xl bg-white border border-slate-200 shadow p-10 text-center text-slate-600">
            Loading user details...
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="mt-6 rounded-2xl bg-white border border-slate-200 shadow p-6">
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {(error as Error)?.message || 'Failed to load user.'}
            </div>
          </div>
        )}

        {/* Content */}
        {user && (
          <div className="mt-6 space-y-6">
            {/* Header Card */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow overflow-hidden">
              <div className="h-24 mb-3 bg-gradient-to-r from-slate-900 to-slate-700" />
              <div className="p-6 -mt-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 shadow flex items-center justify-center text-xl font-bold text-slate-900">
                      {user.name?.trim()?.charAt(0).toUpperCase() || 'U'}
                    </div>

                    <div>
                      <h1 className="text-2xl font-bold text-slate-900">
                        {user.name}
                      </h1>
                      <p className="text-sm text-slate-600 mt-1">
                        @{user.username}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    Active
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Email
                    </p>
                    <p className="mt-1 text-slate-900 text-sm break-all">
                      {user.email}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Phone
                    </p>
                    <p className="mt-1 text-slate-900 text-sm">{user.phone}</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Website
                    </p>
                    <p className="mt-1 text-slate-900 text-sm">
                      {user.website}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company */}
              <div className="rounded-2xl bg-white border border-slate-200 shadow p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Company
                </h2>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Name</p>
                    <p className="mt-1 text-slate-900">
                      {user.company?.name ?? '—'}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Catch Phrase
                    </p>
                    <p className="mt-1 text-slate-700">
                      {user.company?.catchPhrase ?? '—'}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Business
                    </p>
                    <p className="mt-1 text-slate-700">
                      {user.company?.bs ?? '—'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-2xl bg-white border border-slate-200 shadow p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Address
                </h2>
                <div className="mt-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        Street
                      </p>
                      <p className="mt-1 text-slate-900">
                        {user.address?.street ?? '—'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        Suite
                      </p>
                      <p className="mt-1 text-slate-900">
                        {user.address?.suite ?? '—'}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        City
                      </p>
                      <p className="mt-1 text-slate-900">
                        {user.address?.city ?? '—'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        Zipcode
                      </p>
                      <p className="mt-1 text-slate-900">
                        {user.address?.zipcode ?? '—'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-end gap-3">
              <Link
                to="/users"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                Back
              </Link>

              <button
                type="button"
                onClick={() => alert('Connect your API here')}
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Edit user
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
