"use client";
import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, DollarSign, Users, Zap, AlertCircle, TrendingUp } from 'lucide-react';

const ExcellaRoadmap = () => {
  const [expandedPhase, setExpandedPhase] = useState<string | null>('phase1');

  const roadmap = [
    {
      id: 'phase1',
      title: 'Phase 1: Multi-Tenant Foundation',
      subtitle: 'Make Money Fast - Stay Monolith',
      duration: '4 weeks',
      revenue: '$0 → First paying schools',
      priority: 'CRITICAL',
      color: 'from-red-500 to-orange-500',
      weeks: [
        {
          week: 'Week 1',
          title: 'Multi-Tenancy Core Setup',
          goal: 'Add tenant isolation to existing system',
          tasks: [
            {
              title: 'Database Multi-Tenancy',
              items: [
                'Add tenant_id column to all 53 tables',
                'Create tenants table (id, name, subdomain, status, created_at)',
                'Create tenant_settings table for per-school configs',
                'Add database indexes on (tenant_id, *) for all tables',
                'Write migration script to add tenant_id to existing data'
              ],
              owner: 'Backend Dev',
              hours: 16
            },
            {
              title: 'Tenant Middleware',
              items: [
                'Create middleware to extract tenant from subdomain',
                'Add tenant context to all API routes',
                'Update all database queries to filter by tenant_id',
                'Create tenant validation middleware',
                'Add tenant switching for super admin'
              ],
              owner: 'Backend Dev',
              hours: 12
            },
            {
              title: 'Subdomain Routing',
              items: [
                'Configure Cloudflare for wildcard DNS (*.excella.com)',
                'Set up SSL certificates for wildcard domain',
                'Update Next.js middleware for subdomain detection',
                'Test subdomain routing (school-a.excella.com)',
                'Add fallback for www and root domain'
              ],
              owner: 'DevOps',
              hours: 8
            }
          ]
        },
        {
          week: 'Week 2',
          title: 'Tenant Management System',
          goal: 'Build school onboarding & admin portal',
          tasks: [
            {
              title: 'Tenant Provisioning API',
              items: [
                'POST /api/tenants/create - New school signup',
                'POST /api/tenants/:id/provision - Auto-create admin account',
                'GET /api/tenants/:id - Get tenant details',
                'PATCH /api/tenants/:id - Update tenant settings',
                'DELETE /api/tenants/:id/deactivate - Soft delete tenant'
              ],
              owner: 'Backend Dev',
              hours: 12
            },
            {
              title: 'School Onboarding Flow',
              items: [
                'Create signup page with school details form',
                'Add subdomain availability checker',
                'Build welcome email template',
                'Create default admin account on signup',
                'Add onboarding checklist for new schools'
              ],
              owner: 'Frontend Dev',
              hours: 16
            },
            {
              title: 'Super Admin Dashboard',
              items: [
                'Build admin.excella.com portal',
                'List all tenants with stats',
                'Tenant activation/deactivation controls',
                'View tenant usage metrics',
                'Login as tenant admin feature'
              ],
              owner: 'Frontend Dev',
              hours: 12
            }
          ]
        },
        {
          week: 'Week 3',
          title: 'Billing & Payment Integration',
          goal: 'Get ready to charge schools',
          tasks: [
            {
              title: 'Stripe Integration',
              items: [
                'Set up Stripe account & API keys',
                'Install @stripe/stripe-js and stripe package',
                'Create subscription products in Stripe',
                'Implement Stripe Checkout for subscriptions',
                'Add webhook endpoint for subscription events'
              ],
              owner: 'Backend Dev',
              hours: 10
            },
            {
              title: 'Subscription Management',
              items: [
                'Create subscriptions table (tenant_id, stripe_id, plan, status)',
                'Build subscription status checking middleware',
                'Add trial period handling (14 days free)',
                'Create billing portal page for school admins',
                'Handle failed payment scenarios'
              ],
              owner: 'Backend Dev',
              hours: 14
            },
            {
              title: 'Pricing Tiers',
              items: [
                'Define pricing: Starter ($99), Growth ($299), Enterprise ($799)',
                'Create pricing page on marketing site',
                'Add usage limits per tier (students, storage, features)',
                'Build upgrade/downgrade flow',
                'Add billing history view'
              ],
              owner: 'Full Stack',
              hours: 12
            }
          ]
        },
        {
          week: 'Week 4',
          title: 'Testing & First Schools',
          goal: 'Launch to 3-5 pilot schools',
          tasks: [
            {
              title: 'Multi-Tenant Testing',
              items: [
                'Create 3 test tenants (school-test-a, school-test-b, school-test-c)',
                'Test data isolation between tenants',
                'Verify all 247 API endpoints work with tenant_id',
                'Test simultaneous logins across tenants',
                'Performance test with 100 concurrent users per tenant'
              ],
              owner: 'QA/Dev',
              hours: 16
            },
            {
              title: 'Documentation',
              items: [
                'Write school admin onboarding guide',
                'Create video tutorial for signup process',
                'Document tenant provisioning process',
                'Add troubleshooting guide',
                'Create support email templates'
              ],
              owner: 'Tech Writer',
              hours: 8
            },
            {
              title: 'Launch Preparation',
              items: [
                'Deploy to production (Railway/Vercel)',
                'Set up basic monitoring (Sentry)',
                'Configure backup schedules per tenant',
                'Create support ticketing system',
                'Onboard first 3-5 pilot schools (free/discounted)'
              ],
              owner: 'DevOps/Sales',
              hours: 12
            }
          ]
        }
      ]
    },
    {
      id: 'phase2',
      title: 'Phase 2: Performance & Scale',
      subtitle: 'Optimize for 10-20 schools',
      duration: '4 weeks',
      revenue: '$2k-5k MRR',
      priority: 'HIGH',
      color: 'from-orange-500 to-yellow-500',
      weeks: [
        {
          week: 'Week 5',
          title: 'Caching Layer',
          goal: 'Speed up platform 10x',
          tasks: [
            {
              title: 'Redis Setup',
              items: [
                'Deploy Redis on Upstash or Railway',
                'Install ioredis package',
                'Create cache utility with tenant namespacing',
                'Cache dashboard stats (5 min TTL)',
                'Cache student progress data (1 min TTL)'
              ],
              owner: 'Backend Dev',
              hours: 10
            },
            {
              title: 'Query Optimization',
              items: [
                'Identify slow queries with EXPLAIN ANALYZE',
                'Add composite indexes on frequently joined columns',
                'Implement query result caching',
                'Add pagination to all list endpoints',
                'Optimize N+1 queries in student dashboard'
              ],
              owner: 'Backend Dev',
              hours: 14
            },
            {
              title: 'Session Management',
              items: [
                'Move sessions from database to Redis',
                'Implement sliding session expiration',
                'Add concurrent session limiting per user',
                'Cache user permissions in Redis',
                'Test session performance under load'
              ],
              owner: 'Backend Dev',
              hours: 8
            }
          ]
        },
        {
          week: 'Week 6',
          title: 'File Storage Migration',
          goal: 'Move files out of server, reduce costs',
          tasks: [
            {
              title: 'Cloudflare R2 Setup',
              items: [
                'Create R2 bucket with tenant prefixes',
                'Install @aws-sdk/client-s3 for R2',
                'Generate presigned URLs for direct uploads',
                'Update file upload API to use R2',
                'Migrate existing Cloudinary files to R2'
              ],
              owner: 'Backend Dev',
              hours: 12
            },
            {
              title: 'CDN Integration',
              items: [
                'Configure Cloudflare CDN for R2',
                'Update all file URLs to use CDN',
                'Add image optimization with Cloudflare',
                'Implement lazy loading for images',
                'Test file access speed across regions'
              ],
              owner: 'Full Stack',
              hours: 10
            },
            {
              title: 'File Management',
              items: [
                'Add file metadata table per tenant',
                'Implement file versioning',
                'Add file deletion/cleanup cron job',
                'Track storage usage per tenant',
                'Add storage quota enforcement'
              ],
              owner: 'Backend Dev',
              hours: 10
            }
          ]
        },
        {
          week: 'Week 7',
          title: 'Database Optimization',
          goal: 'Handle 20+ schools smoothly',
          tasks: [
            {
              title: 'Connection Pooling',
              items: [
                'Set up PgBouncer for connection pooling',
                'Configure pool size based on load',
                'Update database connection config',
                'Monitor connection usage per tenant',
                'Test under concurrent load'
              ],
              owner: 'DevOps',
              hours: 8
            },
            {
              title: 'Database Scaling',
              items: [
                'Set up read replica for reports',
                'Route heavy queries to read replica',
                'Add database backup automation',
                'Implement point-in-time recovery',
                'Test failover scenarios'
              ],
              owner: 'DevOps',
              hours: 14
            },
            {
              title: 'Switch to Prisma',
              items: [
                'Migrate from Drizzle ORM to Prisma',
                'Generate Prisma schema from existing database',
                'Update all queries to use Prisma',
                'Add tenant context to Prisma middleware',
                'Test all CRUD operations'
              ],
              owner: 'Backend Dev',
              hours: 20
            }
          ]
        },
        {
          week: 'Week 8',
          title: 'Monitoring & Alerts',
          goal: 'Know about problems before customers do',
          tasks: [
            {
              title: 'Logging Setup',
              items: [
                'Integrate Datadog or Better Stack',
                'Add structured logging with tenant_id tags',
                'Log all API errors with context',
                'Set up log retention policy',
                'Create log dashboard per tenant'
              ],
              owner: 'DevOps',
              hours: 10
            },
            {
              title: 'Performance Monitoring',
              items: [
                'Set up Datadog APM or New Relic',
                'Track API response times per endpoint',
                'Monitor database query performance',
                'Add custom metrics (logins, lessons completed)',
                'Create performance dashboard'
              ],
              owner: 'DevOps',
              hours: 12
            },
            {
              title: 'Alert System',
              items: [
                'Configure alerts for error rate > 5%',
                'Alert on API response time > 2s',
                'Alert on database connection pool > 80%',
                'Set up uptime monitoring (Better Uptime)',
                'Create on-call rotation for critical alerts'
              ],
              owner: 'DevOps',
              hours: 8
            }
          ]
        }
      ]
    },
    {
      id: 'phase3',
      title: 'Phase 3: Feature Enhancement',
      subtitle: 'Build what schools actually pay for',
      duration: '6 weeks',
      revenue: '$5k-15k MRR',
      priority: 'MEDIUM',
      color: 'from-yellow-500 to-green-500',
      weeks: [
        {
          week: 'Week 9-10',
          title: 'Parent Portal 2.0',
          goal: 'Deliver promised parental features',
          tasks: [
            {
              title: 'Live Notifications System',
              items: [
                'Real-time grade updates via Socket.io',
                'Attendance notifications (absent, late)',
                'Assignment submission alerts',
                'Teacher message notifications',
                'Email digest for daily summary'
              ],
              owner: 'Full Stack',
              hours: 24
            },
            {
              title: 'Enhanced Reporting',
              items: [
                'Student progress dashboard with charts',
                'Comparative performance analytics',
                'Attendance trends visualization',
                'Exportable reports (PDF/Excel)',
                'Scheduled weekly reports via email'
              ],
              owner: 'Full Stack',
              hours: 20
            },
            {
              title: 'Parent-Teacher Communication',
              items: [
                'Direct messaging between parents and teachers',
                'Meeting scheduling system',
                'Announcement center',
                'File sharing for homework/reports',
                'Communication history tracking'
              ],
              owner: 'Full Stack',
              hours: 20
            }
          ]
        },
        {
          week: 'Week 11-12',
          title: 'Advanced Analytics',
          goal: 'Data insights schools love',
          tasks: [
            {
              title: 'Student Analytics',
              items: [
                'Learning pace tracking',
                'Subject strength/weakness analysis',
                'Engagement metrics (time spent, completion rate)',
                'Predictive performance alerts',
                'Personalized learning recommendations'
              ],
              owner: 'Full Stack',
              hours: 24
            },
            {
              title: 'Teacher Analytics',
              items: [
                'Class performance overview',
                'Grading efficiency metrics',
                'Content effectiveness tracking',
                'Student engagement by teacher',
                'Workload distribution analysis'
              ],
              owner: 'Full Stack',
              hours: 20
            },
            {
              title: 'School Admin Dashboard',
              items: [
                'School-wide performance metrics',
                'Enrollment trends',
                'Financial overview (payments, subscriptions)',
                'Teacher performance summary',
                'System usage statistics'
              ],
              owner: 'Full Stack',
              hours: 16
            }
          ]
        },
        {
          week: 'Week 13-14',
          title: 'White-Labeling & Customization',
          goal: 'Let schools brand the platform',
          tasks: [
            {
              title: 'Tenant Theming',
              items: [
                'Custom logo upload per school',
                'Color scheme customization (primary, secondary)',
                'Custom domain support (school.com → schoolname.excella.com)',
                'Email template customization',
                'Login page branding'
              ],
              owner: 'Frontend Dev',
              hours: 20
            },
            {
              title: 'Feature Flags',
              items: [
                'Implement Unleash or PostHog feature flags',
                'Per-tenant feature toggles',
                'Gradual rollout system',
                'A/B testing framework',
                'Feature usage tracking'
              ],
              owner: 'Full Stack',
              hours: 16
            },
            {
              title: 'Custom Workflows',
              items: [
                'Configurable grading scales per school',
                'Custom attendance policies',
                'School-specific academic calendars',
                'Custom report card templates',
                'Flexible notification preferences'
              ],
              owner: 'Backend Dev',
              hours: 24
            }
          ]
        }
      ]
    },
    {
      id: 'phase4',
      title: 'Phase 4: Scaling Preparation',
      subtitle: 'Get ready for 50+ schools',
      duration: '4 weeks',
      revenue: '$15k-30k MRR',
      priority: 'MEDIUM',
      color: 'from-green-500 to-blue-500',
      weeks: [
        {
          week: 'Week 15-16',
          title: 'Infrastructure Hardening',
          goal: 'Prepare for serious scale',
          tasks: [
            {
              title: 'Rate Limiting',
              items: [
                'Implement per-tenant API rate limits',
                'Use Upstash Rate Limit or unkey.dev',
                'Add rate limit headers to responses',
                'Create rate limit exceeded page',
                'Monitor rate limit hits per tenant'
              ],
              owner: 'Backend Dev',
              hours: 12
            },
            {
              title: 'Background Jobs',
              items: [
                'Set up BullMQ with Redis',
                'Move report generation to background jobs',
                'Async email sending queue',
                'Scheduled cleanup tasks',
                'Job monitoring dashboard'
              ],
              owner: 'Backend Dev',
              hours: 16
            },
            {
              title: 'Security Hardening',
              items: [
                'Add Arcjet for bot protection',
                'Implement CSRF protection',
                'Add SQL injection prevention',
                'Set up WAF (Web Application Firewall)',
                'Security audit and penetration testing'
              ],
              owner: 'DevOps/Security',
              hours: 20
            }
          ]
        },
        {
          week: 'Week 17-18',
          title: 'Compliance & Audit',
          goal: 'Build trust with schools',
          tasks: [
            {
              title: 'Data Privacy',
              items: [
                'GDPR compliance audit',
                'Add data export API for tenants',
                'Implement data deletion workflows',
                'Create privacy policy per tenant',
                'Add consent management'
              ],
              owner: 'Backend Dev/Legal',
              hours: 20
            },
            {
              title: 'Audit Logging',
              items: [
                'Log all grade changes with user_id',
                'Track sensitive data access',
                'Student data modification logs',
                'Export audit logs per tenant',
                'Retention policy (7 years)'
              ],
              owner: 'Backend Dev',
              hours: 16
            },
            {
              title: 'Backup & Recovery',
              items: [
                'Automated daily backups per tenant',
                'Point-in-time recovery testing',
                'Disaster recovery runbook',
                'Backup restoration testing',
                'Cross-region backup replication'
              ],
              owner: 'DevOps',
              hours: 12
            }
          ]
        }
      ]
    },
    {
      id: 'phase5',
      title: 'Phase 5: Microservices Planning',
      subtitle: 'Prepare for the big split (50+ schools)',
      duration: '4 weeks',
      revenue: '$30k-50k MRR',
      priority: 'LOW',
      color: 'from-blue-500 to-purple-500',
      weeks: [
        {
          week: 'Week 19-20',
          title: 'Service Boundary Design',
          goal: 'Plan the microservices architecture',
          tasks: [
            {
              title: 'Domain Analysis',
              items: [
                'Map 247 API endpoints to services',
                'Identify service dependencies',
                'Define service boundaries (10 services)',
                'Design inter-service communication',
                'Plan data ownership per service'
              ],
              owner: 'Architect/Senior Dev',
              hours: 24
            },
            {
              title: 'Database Strategy',
              items: [
                'Plan database per service vs shared',
                'Design data migration strategy',
                'Identify shared vs service-specific tables',
                'Plan for eventual consistency',
                'Design distributed transactions approach'
              ],
              owner: 'Architect/DBA',
              hours: 20
            },
            {
              title: 'Infrastructure Design',
              items: [
                'Choose Kubernetes vs serverless',
                'Design API Gateway (Kong)',
                'Plan service mesh (Istio)',
                'Design message queue architecture',
                'Create deployment pipeline design'
              ],
              owner: 'DevOps/Architect',
              hours: 20
            }
          ]
        },
        {
          week: 'Week 21-22',
          title: 'Monolith Refactoring',
          goal: 'Prepare code for extraction',
          tasks: [
            {
              title: 'Code Modularization',
              items: [
                'Reorganize code into service modules',
                'Extract shared utilities to packages',
                'Create clear module boundaries',
                'Remove circular dependencies',
                'Add interface layers between modules'
              ],
              owner: 'Full Team',
              hours: 32
            },
            {
              title: 'API Standardization',
              items: [
                'Standardize API response formats',
                'Implement consistent error handling',
                'Add API versioning (/v1/)',
                'Create OpenAPI/Swagger docs',
                'Add API contract tests'
              ],
              owner: 'Backend Team',
              hours: 24
            },
            {
              title: 'Testing Infrastructure',
              items: [
                'Add E2E tests for critical flows',
                'Integration tests per module',
                'Contract tests for service boundaries',
                'Performance benchmarking suite',
                'Chaos engineering setup'
              ],
              owner: 'QA/Dev',
              hours: 28
            }
          ]
        }
      ]
    },
    {
      id: 'phase6',
      title: 'Phase 6: First Service Extraction',
      subtitle: 'Extract Auth Service (pilot)',
      duration: '6 weeks',
      revenue: '$50k+ MRR',
      priority: 'SCALING',
      color: 'from-purple-500 to-pink-500',
      weeks: [
        {
          week: 'Week 23-24',
          title: 'Auth Service Creation',
          goal: 'Extract authentication to standalone service',
          tasks: [
            {
              title: 'Service Setup',
              items: [
                'Create auth-service repo (NestJS)',
                'Set up dedicated PostgreSQL for auth',
                'Implement JWT with tenant context',
                'Migrate all /api/auth/* endpoints',
                'Add OAuth 2.0 support'
              ],
              owner: 'Backend Dev',
              hours: 32
            },
            {
              title: 'API Gateway',
              items: [
                'Deploy Kong API Gateway',
                'Configure routing to auth service',
                'Add rate limiting per tenant',
                'Implement API key management',
                'Set up gateway monitoring'
              ],
              owner: 'DevOps',
              hours: 24
            },
            {
              title: 'Migration & Testing',
              items: [
                'Blue-green deployment setup',
                'Run auth service parallel to monolith',
                'Test with 10% traffic',
                'Gradual rollout to 100%',
                'Rollback plan and testing'
              ],
              owner: 'DevOps/QA',
              hours: 28
            }
          ]
        },
        {
          week: 'Week 25-28',
          title: 'Remaining Services',
          goal: 'Extract all 10 services',
          tasks: [
            {
              title: 'Service Extraction Order',
              items: [
                'Week 25: File Service (independent)',
                'Week 26: User Management Service',
                'Week 27: Academic Service',
                'Week 28: Assessment + Communication Services'
              ],
              owner: 'Full Team',
              hours: 160
            },
            {
              title: 'Service Mesh',
              items: [
                'Deploy Istio service mesh',
                'Configure service-to-service auth',
                'Implement circuit breakers',
                'Add retry policies',
                'Distributed tracing setup'
              ],
              owner: 'DevOps',
              hours: 32
            },
            {
              title: 'Data Migration',
              items: [
                'Migrate data to service databases',
                'Set up data synchronization',
                'Validate data integrity',
                'Performance testing per service',
                'Complete monolith deprecation'
              ],
              owner: 'Backend/DBA',
              hours: 40
            }
          ]
        }
      ]
    }
  ];

  const getStatusIcon = (phaseId:any) => {
    if (phaseId === 'phase1') return <Clock className="w-5 h-5" />;
    return <Circle className="w-5 h-5" />;
  };

  const totalWeeks = roadmap.reduce((acc, phase) => {
    return acc + phase.weeks.length;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Excella School Platform Roadmap
          </h1>
          <p className="text-slate-300 text-lg mb-6">
            Your complete journey: Monolith → Multi-Tenant SaaS → Microservices
          </p>
          
          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-slate-400 text-sm">Total Duration</span>
              </div>
              <p className="text-2xl font-bold">{totalWeeks} Weeks</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span className="text-slate-400 text-sm">Target Revenue</span>
              </div>
              <p className="text-2xl font-bold">$50k MRR</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-slate-400 text-sm">Target Schools</span>
              </div>
              <p className="text-2xl font-bold">50+ Schools</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-slate-400 text-sm">Phases</span>
              </div>
              <p className="text-2xl font-bold">{roadmap.length} Phases</p>
            </div>
          </div>
        </div>

        {/* Roadmap Phases */}
        <div className="space-y-6">
          {roadmap.map((phase, phaseIndex) => (
            <div key={phase.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              {/* Phase Header */}
              <div
                className={`bg-gradient-to-r ${phase.color} p-6 cursor-pointer`}
                onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(phase.id)}
                    <div>
                      <h2 className="text-2xl font-bold">{phase.title}</h2>
                      <p className="text-white/80 mt-1">{phase.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-white/80">Duration</p>
                        <p className="font-bold text-lg">{phase.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Revenue Goal</p>
                        <p className="font-bold text-lg">{phase.revenue}</p>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                        phase.priority === 'CRITICAL' ? 'bg-red-500' :
                        phase.priority === 'HIGH' ? 'bg-orange-500' :
                        phase.priority === 'MEDIUM' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}>
                        {phase.priority}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase Content */}
              {expandedPhase === phase.id && (
                <div className="p-6">
                  {phase.weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="mb-8 last:mb-0">
                      {/* Week Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">
                          {week.week}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{week.title}</h3>
                          <p className="text-slate-400">{week.goal}</p>
                        </div>
                      </div>

                      {/* Tasks */}
                      <div className="grid gap-4 ml-4">
                        {week.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="bg-slate-750 rounded-lg p-4 border border-slate-600">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-lg font-semibold text-blue-300">{task.title}</h4>
                              <div className="flex items-center gap-3 text-sm">
                                <span className="text-slate-400">{task.owner}</span>
                                <span className="bg-slate-700 px-3 py-1 rounded">{task.hours}h</span>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {task.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-slate-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Milestones */}
        <div className="mt-12 bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-400" />
            Key Milestones & Decision Points
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Week 4: First Paying Schools</h3>
                <p className="text-slate-300 mb-2">
                  Launch multi-tenant platform with billing. Get 3-5 schools paying (even if discounted).
                </p>
                <p className="text-yellow-300 text-sm">
                  🎯 Decision: If schools love it, continue. If not, pivot features before scaling.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Week 8: Performance Baseline</h3>
                <p className="text-slate-300 mb-2">
                  Platform optimized for 10-20 schools. All monitoring in place.
                </p>
                <p className="text-yellow-300 text-sm">
                  🎯 Decision: Can handle more schools? Scale marketing. Slow? Optimize more.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Week 14: $10k MRR Check</h3>
                <p className="text-slate-300 mb-2">
                  20-30 schools paying. White-labeling and advanced features live.
                </p>
                <p className="text-yellow-300 text-sm">
                  🎯 Decision: Hit $10k MRR? Continue to microservices. Not yet? Focus on sales, not tech.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Week 22: Microservices Go/No-Go</h3>
                <p className="text-slate-300 mb-2">
                  At 40-50 schools, $30k+ MRR. Monolith refactored and ready.
                </p>
                <p className="text-yellow-300 text-sm">
                  🎯 Decision: Clear bottlenecks? Start extraction. Monolith still fine? Stay longer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Week 28: Microservices Complete</h3>
                <p className="text-slate-300 mb-2">
                  All 10 services extracted. Ready to scale to 100+ schools.
                </p>
                <p className="text-yellow-300 text-sm">
                  🎯 Achievement: You've built a real SaaS platform. Time to scale aggressively.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Success Factors */}
        <div className="mt-12 bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-xl p-8 border border-red-700">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-red-400" />
            Critical Success Factors (Don't Skip These!)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Phase 1 (Weeks 1-4)</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• MUST test tenant isolation thoroughly - one bug affects all schools</li>
                <li>• MUST get billing working - no revenue = dead project</li>
                <li>• MUST onboard real schools early - don't build in vacuum</li>
                <li>• MUST set up basic monitoring - you need to know when things break</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-orange-300">Phase 2 (Weeks 5-8)</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• MUST add caching - slow = schools leave</li>
                <li>• MUST move files to CDN - hosting costs kill margins</li>
                <li>• MUST add database pooling - connection limits hit fast</li>
                <li>• MUST monitor per-tenant metrics - spot problem schools early</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-yellow-300">Phase 3 (Weeks 9-14)</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• MUST ship features schools ask for - not what you think they need</li>
                <li>• MUST get analytics right - schools make decisions with data</li>
                <li>• MUST add white-labeling - schools want their brand</li>
                <li>• MUST track feature usage - kill unused features</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-green-300">Phase 4+ (Weeks 15-28)</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• MUST add rate limiting - protect from abuse</li>
                <li>• MUST get compliance done - schools need this for contracts</li>
                <li>• MUST test backups - you will need them</li>
                <li>• ONLY split to microservices if truly needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resource Requirements */}
        <div className="mt-12 bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold mb-6">Team & Resource Requirements</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Phase 1-2 (Weeks 1-8)</h3>
              <div className="space-y-3 text-slate-300">
                <p><strong>Team:</strong> 2-3 devs (1 backend, 1 frontend, 0.5 DevOps)</p>
                <p><strong>Cost:</strong> $30-100/month hosting</p>
                <p><strong>Focus:</strong> Ship fast, get paying customers</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">Phase 3-4 (Weeks 9-18)</h3>
              <div className="space-y-3 text-slate-300">
                <p><strong>Team:</strong> 3-4 devs (2 backend, 1 frontend, 1 DevOps)</p>
                <p><strong>Cost:</strong> $200-500/month hosting + tools</p>
                <p><strong>Focus:</strong> Scale operations, add features</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-300">Phase 5-6 (Weeks 19-28)</h3>
              <div className="space-y-3 text-slate-300">
                <p><strong>Team:</strong> 5-7 devs (3 backend, 2 frontend, 2 DevOps)</p>
                <p><strong>Cost:</strong> $1k-3k/month infrastructure</p>
                <p><strong>Focus:</strong> Microservices transformation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-slate-400 pb-8">
          <p className="text-lg mb-2">
            Remember: Revenue validates everything. Ship fast, learn faster, scale when needed.
          </p>
          <p className="text-sm">
            This roadmap is aggressive but achievable. Adjust based on your team size and resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExcellaRoadmap;