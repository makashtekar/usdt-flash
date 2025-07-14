import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Activity, CheckCircle, Clock, DollarSign, Users, Layers } from "lucide-react";

export default function Technology() {
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
                  <Link href="/technology" className="px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-400">
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
            Built for Performance and Security
          </h1>
          <div className="relative">
            <div className="w-full h-64 gradient-bg-full rounded-lg flex items-center justify-center mb-8 glow-blue">
              <Layers className="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Solana Blockchain Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">The Blockchain Advantage: Powered by Solana</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              USDT Flash is not built on a slow, expensive, or outdated network. We have built USDT Flash as a token on the <strong className="text-cyan-400">Solana blockchain</strong>, one of the highest-performing networks in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Why Solana?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 glow-blue">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-slate-100">Unmatched Speed</h4>
                    <p className="text-slate-300">
                      Capable of processing over 65,000 transactions per second, ensuring your transactions are virtually instant.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 glow-green">
                    <DollarSign className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-slate-100">Minimal Cost</h4>
                    <p className="text-slate-300">
                      The network's efficiency allows for transaction fees that are consistently less than a cent.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 glow-cyan">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-slate-100">Proven Security</h4>
                    <p className="text-slate-300">
                      A robust, decentralized network of validators ensures the integrity and security of every transaction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 glow-blue">
                    <Activity className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-slate-100">Scalability</h4>
                    <p className="text-slate-300">
                      Ready for mass adoption without the congestion and high fees that plague other networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 gradient-bg-secondary rounded-lg flex items-center justify-center glow-cyan">
                <Activity className="w-32 h-32 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-slate-800/50 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Performance That Speaks</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real numbers that demonstrate Solana's superior performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-blue">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-slate-100">65,000+</CardTitle>
                <CardDescription className="text-slate-300">Transactions Per Second</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-green">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-slate-100">$0.00025</CardTitle>
                <CardDescription className="text-slate-300">Average Transaction Fee</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-cyan">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl text-slate-100">400ms</CardTitle>
                <CardDescription className="text-slate-300">Block Time</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-blue">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Users className="w-8 h-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-slate-100">1,000+</CardTitle>
                <CardDescription className="text-slate-300">Validator Nodes</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Contracts & Security */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">Our Smart Contracts: Audited for Your Peace of Mind</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trust is paramount. The smart contracts that govern the USDT Flash token, our staking pools, and swap functionalities have undergone rigorous, independent security audits. We believe in transparency and verifiable security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-blue">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-center text-slate-100">Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Independent security audits</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Multi-signature wallet protection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Formal verification processes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Continuous monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="dark-card hover:shadow-xl transition-shadow duration-300 glow-cyan">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl text-center text-slate-100">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Open-source code</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Public audit reports</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Community governance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Regular updates</span>
                  </li>
                </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl mb-8">
              Join thousands of users who have already discovered the speed and efficiency of USDT Flash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white transform hover:scale-105 transition-all duration-300">
                Start Trading Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white transform hover:scale-105 transition-all duration-300">
                Read Documentation
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