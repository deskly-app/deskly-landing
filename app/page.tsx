"use client";
import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TechStack } from "@/components/TechStack";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import {
  Calendar,
  Users,
  BarChart3,
  BookOpen,
  Book,
  CalendarDays,
  Utensils,
  Shirt,
  Contact,
  UserCog,
  Globe,
  Zap,
  Code,
  Monitor,
  Shield,
  Lock,
  RefreshCw,
  Download,
} from "lucide-react";

function App() {
  const dashboardFeatures = [
    {
      icon: Calendar,
      title: "Timetable Management",
      description:
        "View and track your daily class schedule with real-time updates.",
    },
    {
      icon: Users,
      title: "Attendance Tracking",
      description:
        "Monitor attendance records and get notified about low attendance warnings.",
    },
    {
      icon: BarChart3,
      title: "Grade & Marks Portal",
      description:
        "Access semester grades, internal marks, and academic performance analytics.",
    },
    {
      icon: BookOpen,
      title: "Course Information",
      description:
        "Browse enrolled courses with detailed syllabus and faculty information.",
    },
    {
      icon: Book,
      title: "Curriculum Browser",
      description:
        "Explore course curriculum, subjects, and academic requirements.",
    },
    {
      icon: CalendarDays,
      title: "Academic Calendar",
      description:
        "Stay updated with important dates, holidays, and exam schedules.",
    },
  ];

  const campusServices = [
    {
      icon: Utensils,
      title: "Mess Management",
      description: "View mess menu, balance, and meal preferences.",
    },
    {
      icon: Shirt,
      title: "Laundry Services",
      description: "Track laundry machine availability and booking status.",
    },
    {
      icon: Contact,
      title: "Contact Directory",
      description:
        "Quick access to department contacts and faculty information.",
    },
    {
      icon: UserCog,
      title: "Profile Management",
      description: "Update personal information and manage account settings.",
    },
  ];

  const technicalFeatures = [
    {
      icon: Globe,
      title: "Direct API",
      description:
        "Direct integration with VTOP APIs for real-time data access.",
    },
    {
      icon: Zap,
      title: "Live Data Sync",
      description: "Real-time synchronization of academic and campus data.",
    },
    {
      icon: Code,
      title: "Native",
      description: "Native desktop application built with Electron.",
    },
    {
      icon: Monitor,
      title: "System Tray App",
      description: "Runs in system tray for quick access and notifications.",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Secure authentication and data handling.",
    },
    {
      icon: Lock,
      title: "Keytar Encryption",
      description: "Credentials encrypted using Keytar for security.",
    },
    {
      icon: RefreshCw,
      title: "Auto-Updates",
      description: "Automatic updates to keep the app current.",
    },
    {
      icon: Download,
      title: "Electron-Updater",
      description: "Powered by Electron-Updater for seamless updates.",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />

        <section
          id="sso"
          className="py-32 bg-card/20 border-t border-border scroll-mt-24"
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <FeatureSection
              painPoint="Authentication"
              title="Secure, Persistent Sessions"
              description="Stop logging in every time. Deskly uses Electron-Store and Keytar to securely encrypt your credentials in the System Keychain, maintaining your VIT Chennai session across restarts."
              solutionTitle="Token Management"
              imageSrc="https://picsum.photos/seed/securitylogin/800/450"
            />

            <FeatureSection
              painPoint="Real-time Data"
              title="Never Miss a Class"
              description="Our Direct VTOP Integration bypasses slow portals. We fetch data directly from vtopcc.vit.ac.in to give you instant updates on class changes and attendance drops."
              solutionTitle="Live Sync Engine"
              imageSrc="https://picsum.photos/seed/scheduleview/800/450"
              reversed={true}
            />

            <FeatureSection
              painPoint="Workflow Continuity"
              title="Zero Interruptions, Zero Captchas"
              description="Our intelligent background service detects session invalidation instantly. Deskly performs an auto-relogin the moment your token expires, completely bypassing manual captcha entry."
              solutionTitle="Silent Re-Authentication"
              imageSrc="https://picsum.photos/seed/nocaptcha/800/450"
            />

            <FeatureSection
              painPoint="Maintenance"
              title="Always on the Cutting Edge"
              description="Forget about manual downloads. Deskly integrates electron-updater to silently fetch and install the latest features and security patches in the background, ensuring you're always running the best version."
              solutionTitle="Seamless OTA Updates"
              imageSrc="https://picsum.photos/seed/autoupdate/800/450"
              reversed={true}
            />
          </div>
        </section>

        <FeatureGrid
          id="features"
          badge="Complete Academic Dashboard"
          title="Your Entire Semester. One View."
          description="Comprehensive tools designed to keep you ahead of your academic requirements."
          features={dashboardFeatures}
        />

        <FeatureGrid
          badge="Campus Services Integration"
          title="Navigate Campus Like a Pro"
          description="Integrated utilities that make living at VIT easier and more predictable."
          features={campusServices}
        />

        <FeatureGrid
          badge="Technical Features"
          title="Built for Performance"
          description="Advanced technical features ensuring reliability and security."
          features={technicalFeatures}
        />

        <TechStack />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
