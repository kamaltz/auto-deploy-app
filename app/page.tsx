"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Impor komponen dari Shadcn/ui dan ikon dari Lucide
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  GraduationCap,
  UserCircle,
} from "lucide-react";

export default function Home() {
  // Ref untuk menargetkan container utama animasi
  const mainContainer = useRef(null);

  // Hook useGSAP untuk animasi yang aman di React
  useGSAP(
    () => {
      // Animasi semua elemen dengan class .reveal
      gsap.from(".reveal", {
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        stagger: 0.2, // Efek muncul satu per satu
      });
    },
    { scope: mainContainer }
  ); // Scope animasi hanya di dalam container ini

  return (
    <main
      ref={mainContainer}
      className="bg-slate-950 text-white min-h-screen flex items-center justify-center p-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Latar belakang gradien subtil */}
        <div className="absolute top-0 left-0 h-96 w-96 bg-purple-900/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-sky-900/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Card className="w-full max-w-2xl bg-slate-900/60 border-slate-700 backdrop-blur-sm z-10 reveal">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <UserCircle size={48} className="text-sky-400" />
            <div>
              <CardTitle className="text-3xl font-bold text-white reveal">
                Dena Kamal D.
              </CardTitle>
              <Badge
                variant="outline"
                className="border-sky-400 text-sky-400 mt-2 reveal"
              >
                Vibe Coding Developer & AI Prompter Expert
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 reveal">
              <GraduationCap className="text-slate-400" />
              <p>
                <span className="font-semibold">2206090</span> - Institut
                Teknologi Garut
              </p>
            </div>
            <p className="text-slate-300 reveal">
              Mahasiswa proaktif dengan semangat dalam pengembangan perangkat
              lunak modern, fokus pada solusi inovatif menggunakan Next.js,
              TypeScript, dan Python.
            </p>
            <div className="flex flex-wrap gap-3 pt-4 reveal">
              <Button
                variant="outline"
                className="border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <Mail className="mr-2 h-4 w-4" /> Kontak Email
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
