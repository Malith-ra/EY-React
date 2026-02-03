import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getUsers, type User } from '../../api/users';

export default function UsersPage() {
  const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900">Users</h1>
          <p className="mt-1 text-slate-600 text-sm">
            Manage and view registered users
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white shadow border border-slate-200 overflow-hidden">
          {/* Loading */}
          {isLoading && (
            <div className="p-10 text-center text-slate-600">
              Loading users...
            </div>
          )}

          {/* Error */}
          {isError && (
            <div className="p-6">
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {(error as Error).message}
              </div>
            </div>
          )}

          {/* Table */}
          {users && users.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-600 sticky top-0">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Email</th>
                    <th className="px-6 py-4 font-semibold">Company</th>
                    <th className="px-6 py-4 font-semibold text-right">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {users.map((u) => (
                    <tr
                      key={u.id}
                      onClick={() => navigate(`/users/${u.id}`)}
                      className="group cursor-pointer transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">
                          {u.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          @{u.username}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-slate-700">{u.email}</td>

                      <td className="px-6 py-4 text-slate-700">
                        {u.company?.name ?? '—'}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 group-hover:text-slate-900">
                          View
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Empty state */}
          {users && users.length === 0 && (
            <div className="p-10 text-center text-slate-500">
              No users found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-4 text-xs text-slate-500">
          Total users:{' '}
          <span className="font-semibold">{users?.length ?? 0}</span>
        </div>
      </div>
    </div>
  );
}
