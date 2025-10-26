import React from 'react';

const RemainingDevOps = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg p-8 border border-slate-700">
        <h1 className="text-3xl font-bold mb-4">🚀 Remaining DevOps Tasks - Production Deployment</h1>
        <p className="text-slate-300 mb-6">Current Status: <span className="text-green-400 font-semibold">✅ Backend 100% ready, multi-tenant data migrated locally</span></p>

        <p className="mb-6">What&apos;s Left: DNS configuration, SSL setup, and production deployment</p>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-xl font-semibold mb-3">📋 Task Overview</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm table-auto">
            <thead>
              <tr className="text-left text-slate-300">
                <th className="pr-4">#</th>
                <th className="pr-4">Task</th>
                <th className="pr-4">Status</th>
                <th className="pr-4">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">1</td>
                <td>Re-import tenant data with FK handling</td>
                <td className="text-yellow-300">⏳ Pending</td>
                <td>15 min</td>
              </tr>
              <tr className="bg-slate-800">
                <td className="py-2">2</td>
                <td>Configure Cloudflare DNS</td>
                <td className="text-yellow-300">⏳ Pending</td>
                <td>30 min</td>
              </tr>
              <tr>
                <td className="py-2">3</td>
                <td>Enable SSL Certificates</td>
                <td className="text-yellow-300">⏳ Pending</td>
                <td>15 min</td>
              </tr>
              <tr className="bg-slate-800">
                <td className="py-2">4</td>
                <td>Deploy to Production Server</td>
                <td className="text-yellow-300">⏳ Pending</td>
                <td>1 hour</td>
              </tr>
              <tr>
                <td className="py-2">5</td>
                <td>Test & Verify</td>
                <td className="text-yellow-300">⏳ Pending</td>
                <td>30 min</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">Total Estimated Time: <span className="font-semibold">~2.5 hours</span></p>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Task 1: Re-import Tenant Data (Fix Foreign Keys)</h2>
        <p className="text-slate-300 mb-2 font-semibold">Title</p>
        <p className="mb-2">Complete Data Migration with Foreign Key Handling</p>
        <p className="text-slate-300 mb-2 font-semibold">What it helps</p>
        <ul className="list-disc ml-5 mb-4 text-slate-300">
          <li>Ensures ALL data is properly imported (users, students, teachers, classes)</li>
          <li>Fixes FK constraint issues that prevented full import</li>
          <li>Both tenants will have complete datasets</li>
        </ul>
        <p className="mb-4"><strong>Tools:</strong> PostgreSQL psql client, migration script, WSL terminal</p>
        <p className="mb-4"><strong>Estimated Time:</strong> 15 minutes</p>
        <p className="mb-4"><strong>Core Steps (summary):</strong></p>
        <ol className="list-decimal ml-5 text-slate-300 mb-6">
          <li>Clear incomplete tenant schemas and records</li>
          <li>Re-run the migration script that handles FKs</li>
          <li>Verify expected counts for each tenant</li>
        </ol>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Task 2: Configure Cloudflare DNS</h2>
        <p className="mb-2">Set up wildcard DNS so multi-tenant subdomains resolve to your production server.</p>
        <p className="mb-3 text-slate-300"><strong>Highlights:</strong> Add root, www and wildcard A records; enable Cloudflare proxy.</p>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Task 3: Enable SSL Certificates</h2>
        <p className="mb-2">Use Cloudflare SSL (recommended) or Let&apos;s Encrypt for wildcard certificates. Enable &quot;Always Use HTTPS&quot; and set SSL mode to &quot;Full (strict)&quot;.</p>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Task 4: Deploy to Production Server</h2>
        <p className="mb-2">Provision a VPS, install Node.js and PM2, build the app, and run it under PM2. Optionally configure Nginx to proxy and handle wildcard hostnames.</p>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Task 5: Test & Verify</h2>
        <p className="mb-3">End-to-end checks: connectivity, SSL, tenant isolation, logs and basic performance metrics.</p>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Checklist</h2>
        <ul className="list-none ml-0 text-slate-300 space-y-2">
          <li>☐ Task 1: Data re-imported with all records</li>
          <li>☐ Task 2: Cloudflare DNS configured</li>
          <li>☐ Task 3: SSL enabled and verified</li>
          <li>☐ Task 4: App deployed and running with PM2</li>
          <li>☐ Task 5: Tests passed and tenant isolation verified</li>
        </ul>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Troubleshooting Quick Reference</h2>
        <p className="text-slate-300 mb-2">DNS not resolving: use nslookup and dnschecker.org. SSL: verify Cloudflare SSL mode and &quot;Always Use HTTPS&quot; setting. App not starting: check PM2 logs and .env values.</p>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Expected Timeline</h2>
        <p className="text-slate-300 mb-4">Day 1: Tasks 1-3 (~1 hour). Day 2: Task 4 (~1 hour). Day 3: Task 5 (~30 minutes). Total: ~2.5 hours (spread across DNS propagation).</p>

        <hr className="border-slate-700 my-6" />

        <h2 className="text-lg font-semibold mb-2">Success Definition</h2>
        <ul className="ml-5 text-slate-300">
          <li>✅ https://schoolnetglobal.excella.rw loads with 🔒</li>
          <li>✅ https://schoolnetglobal.demo-tenant.rw loads with 🔒</li>
          <li>✅ Both tenants show different data and tenant detection logs appear</li>
          <li>✅ App runs 24/7 with PM2 and logs are accessible</li>
        </ul>


      </div>
    </div>
  );
};

export default RemainingDevOps;
