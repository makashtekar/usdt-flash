import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ArrowRight, Shield, Scale, FileText, Users, AlertTriangle, CheckCircle, Zap } from "lucide-react";

export default function Compliance() {
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
                  <Link href="/about" className="px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">
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
                  <Link href="/compliance" className="px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-400">
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
            A Commitment to Trust and Regulation
          </h1>
          <div className="relative">
            <div className="w-full h-64 gradient-bg-full rounded-lg flex items-center justify-center mb-8 glow-blue">
              <div className="flex items-center space-x-8">
                <Shield className="w-20 h-20 text-white opacity-50" />
                <Scale className="w-20 h-20 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Responsibly Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">Operating Responsibly in a Digital World</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            USDT Flash is committed to building a sustainable and trustworthy ecosystem. We believe that innovation and regulatory compliance go hand-in-hand. Our goal is to operate with full transparency and adhere to the legal frameworks of the jurisdictions we serve, with a primary focus on India.
          </p>
        </div>
      </section>

      {/* Regulatory Standing in India */}
      <section className="bg-slate-800/50 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">Our Regulatory Standing in India</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Ensuring compliance with Indian regulations and building trust through transparency
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-blue">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                    <FileText className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-center text-slate-100">Financial Intelligence Unit (FIU-IND)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-center">
                    USDT Flash is in the process of registering as a reporting entity with the Financial Intelligence Unit of India (FIU-IND). This ensures we meet our obligations in preventing financial crimes.
                  </p>
                </CardContent>
              </Card>

              <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-cyan">
                <CardHeader>
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl text-center text-slate-100">KYC/AML Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-center">
                    We implement strict Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures for our direct services. This helps protect our users and ensures a secure platform for all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Taxation Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">Understanding Indian Taxation</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We are transparent about the tax implications for our users in India. As per the current regulations (Income Tax Act, 1961):
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-blue">
              <CardHeader>
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <span className="text-red-400 font-bold text-lg">30%</span>
                </div>
                <CardTitle className="text-xl text-center text-slate-100">Profit Tax</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center">
                  A flat <strong className="text-red-400">30% tax</strong> is applicable on any profits made from crypto-asset transactions in India.
                </p>
              </CardContent>
            </Card>

            <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-cyan">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <span className="text-orange-400 font-bold text-lg">1%</span>
                </div>
                <CardTitle className="text-xl text-center text-slate-100">TDS (Tax Deducted at Source)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center">
                  A <strong className="text-orange-400">1% Tax Deducted at Source (TDS)</strong> is applied to crypto transactions above specified limits.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-100">Important Advisory</h3>
                <p className="text-slate-300">
                  We strongly advise all our users to maintain transaction records and consult with a qualified tax professional to ensure they meet their obligations under Indian tax law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="bg-slate-800/50 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">Our Compliance Framework</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Built-in compliance features that protect users and ensure regulatory adherence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-green">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-center text-slate-100">Transaction Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Real-time monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Suspicious activity detection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Automated reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-blue">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-center text-slate-100">User Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Multi-level KYC</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Document verification</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Regular updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-cyan">
                <CardHeader>
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl text-center text-slate-100">Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Secure data storage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Privacy protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg-full text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join our compliant and secure platform to experience the future of digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white transform hover:scale-105 transition-all duration-300">
                Get USDT Flash
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white transform hover:scale-105 transition-all duration-300">
                Learn More
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