import { useEffect, useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  Clock3,
  Loader2,
  MessageCircle,
  RefreshCw,
  Search,
  Trash2,
  Users,
  X,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const statuses = ["new", "contacted", "qualified", "closed"];

function AdminPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchInquiries = async () => {
    try {
      setRefreshing(true);

      const response = await fetch(`${API_URL}/api/admin/inquiries`, {
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load inquiries.");
      }

      setInquiries(data.inquiries);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);
  const logout = async () => {
    await fetch(`${API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/admin/login";
  };
  const updateStatus = async (id, status) => {
    try {
      const response = awaitfetch(`${API_URL}/api/admin/inquiries/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to update status.");
      }

      setInquiries((current) =>
        current.map((inquiry) =>
          inquiry._id === id
            ? {
                ...inquiry,
                status,
              }
            : inquiry,
        ),
      );
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const deleteInquiry = async (id) => {
    const confirmed = window.confirm("Delete this inquiry?");

    if (!confirmed) return;

    try {
      const response = fetch(`${API_URL}/api/admin/inquiries/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete inquiry.");
      }

      setInquiries((current) =>
        current.filter((inquiry) => inquiry._id !== id),
      );
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const filteredInquiries = useMemo(() => {
    const query = search.toLowerCase().trim();

    return inquiries.filter((inquiry) => {
      const matchesStatus =
        statusFilter === "all" || inquiry.status === statusFilter;

      if (!matchesStatus) return false;

      if (!query) return true;

      return [
        inquiry.name,
        inquiry.whatsapp,
        inquiry.businessType,
        inquiry.interestedIn,
        inquiry.problem,
      ]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query));
    });
  }, [inquiries, search, statusFilter]);

  const counts = useMemo(
    () => ({
      all: inquiries.length,
      new: inquiries.filter((item) => item.status === "new").length,
      contacted: inquiries.filter((item) => item.status === "contacted").length,
      qualified: inquiries.filter((item) => item.status === "qualified").length,
      closed: inquiries.filter((item) => item.status === "closed").length,
    }),
    [inquiries],
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <div>
            <div className="text-lg font-black">Lead Dashboard</div>

            <div className="mt-1 text-xs font-medium text-slate-400">
              Landing page inquiries
            </div>
          </div>

          <button
            type="button"
            onClick={fetchInquiries}
            disabled={refreshing}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            <RefreshCw size={15} className={refreshing ? "animate-spin" : ""} />
            Refresh
          </button>
          <button
            type="button"
            onClick={logout}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard label="Total" value={counts.all} icon={Users} />

          <StatCard label="New" value={counts.new} icon={Clock3} />

          <StatCard
            label="Contacted"
            value={counts.contacted}
            icon={MessageCircle}
          />

          <StatCard label="Qualified" value={counts.qualified} icon={Check} />

          <StatCard label="Closed" value={counts.closed} icon={Check} />
        </div>

        {/* Filters */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search leads..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none focus:border-blue-500"
            >
              <option value="all">All statuses</option>

              {statuses.map((status) => (
                <option key={status} value={status}>
                  {capitalize(status)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Leads */}
        <div className="mt-5">
          {loading ? (
            <div className="flex min-h-64 items-center justify-center rounded-2xl border border-slate-200 bg-white">
              <Loader2 className="animate-spin text-blue-600" size={25} />
            </div>
          ) : filteredInquiries.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {filteredInquiries.map((inquiry) => (
                <InquiryCard
                  key={inquiry._id}
                  inquiry={inquiry}
                  onStatusChange={updateStatus}
                  onDelete={deleteInquiry}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {label}
        </div>

        <Icon size={17} className="text-blue-600" />
      </div>

      <div className="mt-3 text-3xl font-black">{value}</div>
    </div>
  );
}

function InquiryCard({ inquiry, onStatusChange, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-black">{inquiry.name}</h3>

              <StatusBadge status={inquiry.status} />
            </div>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
              <span>{inquiry.businessType}</span>

              <span>{inquiry.whatsapp}</span>
            </div>

            {inquiry.interestedIn && (
              <div className="mt-4 inline-flex rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                {inquiry.interestedIn}
              </div>
            )}

            <p
              className={`mt-4 max-w-3xl text-sm leading-6 text-slate-600 ${
                expanded ? "" : "line-clamp-2"
              }`}
            >
              {inquiry.problem}
            </p>

            {inquiry.problem.length > 150 && (
              <button
                type="button"
                onClick={() => setExpanded((current) => !current)}
                className="mt-2 text-xs font-bold text-blue-600"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>

          <div className="flex shrink-0 flex-wrap gap-2">
            <a
              href={`https://wa.me/${inquiry.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3.5 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => onDelete(inquiry._id)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2.5 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 bg-slate-50 px-5 py-3 sm:px-6">
        <span className="mr-2 text-xs font-bold text-slate-400">Status</span>

        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => onStatusChange(inquiry._id, status)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              inquiry.status === status
                ? "bg-slate-950 text-white"
                : "bg-white text-slate-500 hover:bg-slate-100"
            }`}
          >
            {capitalize(status)}
          </button>
        ))}

        <span className="ml-auto text-xs text-slate-400">
          {formatDate(inquiry.createdAt)}
        </span>
      </div>
    </article>
  );
}

function StatusBadge({ status }) {
  const styles = {
    new: "bg-blue-50 text-blue-700",
    contacted: "bg-amber-50 text-amber-700",
    qualified: "bg-emerald-50 text-emerald-700",
    closed: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] font-black ${styles[status]}`}
    >
      {capitalize(status)}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <Users size={20} />
      </div>

      <h3 className="mt-4 font-black">No inquiries found</h3>

      <p className="mt-2 text-sm text-slate-400">
        New landing-page inquiries will appear here.
      </p>
    </div>
  );
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatDate(value) {
  if (!value) return "";

  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default AdminPage;
