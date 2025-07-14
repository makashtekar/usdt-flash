import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ArrowRight, Users, Target, Award, Heart, Zap, Globe, Shield, Code, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.15)_1px,_transparent_0)] bg-[size:20px_20px] opacity-30"></div>
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10 opacity-50"></div>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-700/50 dark-nav">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg-full rounded-lg flex items-center justify-center glow-blue">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              USDT FLASH
            </span>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-400">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/technology" className="px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">
                    Technology
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/compliance" className="px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">
                    Compliance
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button className="dark-button glow-cyan">
            Get USDT Flash
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center hero-dark">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Empowering a Financially Connected World
          </h1>
          <div className="relative">
            <div className="w-full h-64 gradient-bg-full rounded-lg flex items-center justify-center mb-8 glow-blue">
              <Users className="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-blue">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-center text-slate-100">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center">
                  To build a decentralized financial ecosystem that is accessible, efficient, and fair for everyone. We believe in a world where financial tools are not controlled by a few, but are open to all, enabling seamless global commerce and individual empowerment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-cyan">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <Heart className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl text-center text-slate-100">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center">
                  Our mission is to provide a scalable and user-friendly cryptocurrency, <strong className="text-cyan-400">USDT Flash</strong>, that solves the critical challenges of speed and cost on the blockchain. We are dedicated to creating real-world utility, from everyday payments to advanced DeFi applications, all while maintaining the highest standards of security and transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-800/50 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">The Core Team</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Meet the passionate professionals building the future of decentralized finance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-blue">
              <CardHeader>
                <div className="w-20 h-20 gradient-bg-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-slate-100">[Founder Name]</CardTitle>
                <CardDescription className="text-slate-300">Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Brief bio highlighting experience in blockchain and fintech
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">LinkedIn</Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">Twitter</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-cyan">
              <CardHeader>
                <div className="w-20 h-20 gradient-bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-slate-100">[Lead Developer Name]</CardTitle>
                <CardDescription className="text-slate-300">Lead Blockchain Architect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Brief bio on technical expertise, previous projects, and security focus
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">LinkedIn</Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">Twitter</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-green">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-slate-100">[Marketing Lead Name]</CardTitle>
                <CardDescription className="text-slate-300">Head of Growth & Community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Brief bio on experience in tech marketing and community building
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">LinkedIn</Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">Twitter</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-blue">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-slate-100">[Compliance Officer Name]</CardTitle>
                <CardDescription className="text-slate-300">Compliance & Legal Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Brief bio on expertise in financial regulations and Indian law
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">LinkedIn</Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">Twitter</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg-full text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8">
              Be part of the revolution that&apos;s making finance accessible, efficient, and fair for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white transform hover:scale-105 transition-all duration-300">
                Learn More
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white transform hover:scale-105 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-slate-700/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-bg-full rounded-lg flex items-center justify-center glow-blue">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  USDT FLASH
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                The fastest, most efficient way to transact with digital assets.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-slate-100">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Features</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Yield Farming</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Token Swaps</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-slate-100">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/technology" className="text-slate-400 hover:text-cyan-400 transition-colors">Technology</Link></li>
                <li><Link href="/compliance" className="text-slate-400 hover:text-cyan-400 transition-colors">Compliance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-slate-100">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 USDT Flash. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 