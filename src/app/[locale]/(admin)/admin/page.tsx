import { fetchUsers } from "@/lib/api"
/**
 * @fileoverview This file allows user manager by admin
 * @description Admin can block, unblock, delete, add to admins, remove from admin
 * @description Admin is able to remove access from itself 
 * 
 */
export default async function Dashboard() {
    const users = await fetchUsers();

    return <div className="">
        <h1 className="text2xl">User Management</h1>
        <ul className="mt-4 space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="border p-2 rounded">
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
}