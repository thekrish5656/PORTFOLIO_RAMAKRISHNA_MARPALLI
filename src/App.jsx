import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-blue-700 mb-4"
        >
          MARPALLI RAMAKRISHNA
        </motion.h1>
        <p className="text-xl text-gray-600 mb-6">Full Stack Developer</p>
        <p className="max-w-2xl mx-auto text-gray-500">
          Passionate full stack developer focused on building scalable web
          applications and clean user experiences. I enjoy transforming ideas
          into real-world digital products using modern technologies and agile
          development practices.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-blue-700 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">
                Technologies
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React JS</p>
                <p>SQL</p>
                <p>Bootstrap</p>
                <p>Python</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">
                Tools
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>GitHub</p>
                <p>GitHub Actions</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">
                Methodologies
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Agile</p>
                <p>Scrum</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center text-blue-700">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Gamified Learning Platform for Rural Education
              </h3>
              <p className="text-gray-600">
                Developed an interactive learning platform designed to improve
                education engagement for rural students using gamification
                techniques, rewards, and progress tracking.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Portfolio Website
              </h3>
              <p className="text-gray-600">
                Designed and developed a modern responsive personal portfolio
                website to showcase projects, skills, and professional
                experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-blue-700">
          Connect With Me
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <Button className="rounded-2xl flex gap-2">
            <Linkedin size={18} /> LinkedIn
          </Button>

          <Button className="rounded-2xl flex gap-2">
            <Github size={18} /> GitHub
          </Button>

          <Button className="rounded-2xl flex gap-2">
            <Mail size={18} /> Gmail
          </Button>

          <Button className="rounded-2xl flex gap-2">
            <Phone size={18} /> Phone
          </Button>
        </div>
      </section>
    </div>
  );
    }
