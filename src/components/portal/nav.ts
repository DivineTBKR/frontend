import {
  Activity,
  Bell,
  Calendar,
  FileText,
  FlaskConical,
  LayoutDashboard,
  MessageSquare,
  Pill,
  Settings,
  Sparkles,
  Stethoscope,
  Users,
  ClipboardCheck,
  Brain,
  Building2,
  CreditCard,
  Shield,
  LineChart,
  Headphones,
  FileSearch,
} from "lucide-react";
import type { NavSection } from "./PortalShell";

export const patientNav: NavSection[] = [
  {
    items: [
      { label: "Dashboard", to: "/patient", icon: LayoutDashboard },
      { label: "AI Consultation", to: "/patient/ai-consultation", icon: Sparkles, badge: "New" },
      { label: "Health Timeline", to: "/patient/timeline", icon: Activity },
    ],
  },
  {
    title: "Records",
    items: [
      { label: "Medical Archive", to: "/patient/archive", icon: FileText },
      { label: "Prescriptions", to: "/patient/prescriptions", icon: Pill, badge: 2 },
      { label: "Lab Results", to: "/patient/lab-results", icon: FlaskConical },
    ],
  },
  {
    title: "Care",
    items: [
      { label: "Appointments", to: "/patient/appointments", icon: Calendar },
      { label: "Doctor Messages", to: "/patient/messages", icon: MessageSquare, badge: 3 },
      { label: "Notifications", to: "/patient/notifications", icon: Bell },
    ],
  },
  {
    title: "Account",
    items: [{ label: "Settings", to: "/patient/settings", icon: Settings }],
  },
];

export const doctorNav: NavSection[] = [
  {
    items: [
      { label: "Dashboard", to: "/doctor", icon: LayoutDashboard },
      { label: "Pending Reviews", to: "/doctor/reviews", icon: ClipboardCheck, badge: 7 },
      { label: "Patients", to: "/doctor/patients", icon: Users },
    ],
  },
  {
    title: "Clinical",
    items: [
      { label: "AI Analyses", to: "/doctor/analyses", icon: Brain },
      { label: "Prescriptions", to: "/doctor/prescriptions", icon: Pill },
      { label: "Appointments", to: "/doctor/appointments", icon: Calendar },
      { label: "Messages", to: "/doctor/messages", icon: MessageSquare, badge: 4 },
    ],
  },
  {
    title: "Practice",
    items: [
      { label: "Analytics", to: "/doctor/analytics", icon: LineChart },
      { label: "Templates", to: "/doctor/templates", icon: FileSearch },
      { label: "Settings", to: "/doctor/settings", icon: Settings },
    ],
  },
];

export const adminNav: NavSection[] = [
  {
    items: [
      { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
      { label: "Clinics", to: "/admin/clinics", icon: Building2 },
      { label: "Doctors", to: "/admin/doctors", icon: Stethoscope },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "AI Management", to: "/admin/ai", icon: Brain },
      { label: "Billing", to: "/admin/billing", icon: CreditCard },
      { label: "Security", to: "/admin/security", icon: Shield },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Support", to: "/admin/support", icon: Headphones },
      { label: "Settings", to: "/admin/settings", icon: Settings },
    ],
  },
];
