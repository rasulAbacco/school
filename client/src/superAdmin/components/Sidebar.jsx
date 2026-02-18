// client/src/superadmin/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  UserCog,
  Users,
  ShieldCheck,
  CreditCard,
  ReceiptText,
  BarChart3,
  Headphones,
  Settings,
  X,
  GraduationCap,
} from "lucide-react";

/* ✅ Super Admin Navigation */
const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/superadmin/dashboard" },
  { icon: Building2, label: "Schools", to: "/schools" },
  { icon: UserCog, label: "School Admins", to: "/superadmin/school-admins" },
  { icon: Users, label: "Users Management", to: "/superadmin/users" },
  { icon: ShieldCheck, label: "Roles & Permissions", to: "/superadmin/roles" },
  { icon: CreditCard, label: "Subscription Plans", to: "/superadmin/plans" },
  { icon: ReceiptText, label: "Transactions", to: "/superadmin/transactions" },
  { icon: BarChart3, label: "Reports & Analytics", to: "/superadmin/reports" },
  { icon: Settings, label: "Global Settings", to: "/superadmin/settings" },
];

const initials = (name = "SA") =>
  name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export default function Sidebar({ isOpen, onClose, user }) {
  const { pathname } = useLocation();
  const isActive = (to) => pathname === to || pathname.startsWith(to + "/");

  const displayName = user?.name || "Super Admin";
  const displayRole = user?.role || "Platform Owner";

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{
            background: "rgba(106,137,167,0.35)",
            backdropFilter: "blur(2px)",
          }}
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50
          flex flex-col w-64 h-screen
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        style={{ background: "#2f3e52", fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── Logo ── */}
        <div
          className="flex items-center justify-between px-5 h-16 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(136,189,242,0.12)" }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #FFD56A, #F59E0B)",
              }}
            >
              <GraduationCap size={18} color="#fff" />
            </div>

            <div className="leading-tight">
              <p className="font-bold text-sm" style={{ color: "#fff" }}>
                SchoolHub
              </p>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "#FBBF24" }}
              >
                Super Admin Panel
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="md:hidden rounded-lg p-1 transition-opacity hover:opacity-60"
            style={{
              color: "#FBBF24",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Nav items ── */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
          {NAV.map(({ icon: Icon, label, to }) => {
            const active = isActive(to);

            return (
              <Link
                key={to}
                to={to}
                onClick={onClose}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 relative"
                  style={{
                    background: active
                      ? "rgba(251,191,36,0.18)"
                      : "transparent",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!active)
                      e.currentTarget.style.background =
                        "rgba(251,191,36,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active)
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  {/* Active left bar */}
                  {active && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                      style={{ background: "#FBBF24" }}
                    />
                  )}

                  <Icon
                    size={17}
                    style={{
                      color: active ? "#FBBF24" : "#94A3B8",
                      flexShrink: 0,
                    }}
                  />

                  <span
                    className="text-sm"
                    style={{
                      color: active ? "#fff" : "#CBD5E1",
                      fontWeight: active ? 600 : 400,
                    }}
                  >
                    {label}
                  </span>

                  {/* Active dot */}
                  {active && (
                    <span
                      className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#FBBF24" }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* ── User card ── */}
        <div
          className="px-3 py-3 flex-shrink-0"
          style={{ borderTop: "1px solid rgba(136,189,242,0.12)" }}
        >
          <div
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
            style={{ background: "rgba(251,191,36,0.12)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #F59E0B, #B45309)",
                color: "#fff",
              }}
            >
              {initials(displayName)}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate text-white">
                {displayName}
              </p>
              <p className="text-[11px] truncate text-yellow-300">
                {displayRole}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
