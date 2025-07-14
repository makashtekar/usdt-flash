import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ArrowRight, Zap, DollarSign, Sprout, ArrowRightLeft, TrendingUp, Activity, Lock, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.15)_1px,_transparent_0)] bg-[size:20px_20px] opacity-30"></div>
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10 opacity-50"></div>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-700/50 dark-nav">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <div className="w-8 h-8 gradient-bg-full rounded-lg flex items-center justify-center glow-blue">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              USDT FLASH
            </span>
          </div>
          
          <NavigationMenu className="hidden md:flex animate-fade-in-down">
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
                  <Link href="/compliance" className="px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">
                    Compliance
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="animate-fade-in-right">
            <Button className="dark-button glow-cyan">
              Get USDT Flash
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className=" mx-auto px-4 py-20 text-center hero-dark">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-fade-in-up animate-pulse-gradient">
            USDT FLASH: The Speed of Now.
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Experience instant, near-zero fee transactions for everything from daily payments to decentralized finance. Power your world with USDT Flash.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" className="dark-button glow-cyan transform hover:scale-105 transition-all duration-300">
              Get USDT Flash
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transform hover:scale-105 transition-all duration-300">
              Explore Yield Farming
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Showcase */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Key Features</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover what makes USDT Flash the future of digital transactions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="dark-card hover:shadow-xl transition-all duration-300 animate-slide-in-left hover:transform hover:scale-105 glow-blue">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-zoom-in animation-delay-300 glow-blue">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <CardTitle className="text-slate-100">Blazing-Fast Speed</CardTitle>
              <CardDescription className="text-slate-300">
                Transactions confirm in seconds, not minutes. Send and receive funds globally at the speed of thought.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="dark-card hover:shadow-xl transition-all duration-300 animate-slide-in-up animation-delay-200 hover:transform hover:scale-105 glow-green">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-zoom-in animation-delay-500 glow-green">
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <CardTitle className="text-slate-100">Ultra-Low Fees</CardTitle>
              <CardDescription className="text-slate-300">
                Keep more of your money. Our efficient network means transaction fees are a fraction of a cent, making microtransactions a reality.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="dark-card hover:shadow-xl transition-all duration-300 animate-slide-in-right animation-delay-400 hover:transform hover:scale-105 glow-cyan">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-zoom-in animation-delay-700 glow-cyan">
                <Sprout className="w-8 h-8 text-cyan-400" />
              </div>
              <CardTitle className="text-slate-100">Lucrative Yield Farming</CardTitle>
              <CardDescription className="text-slate-300">
                Put your assets to work. Stake USDT Flash in our liquidity pools to earn competitive, passive rewards.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="dark-card hover:shadow-xl transition-all duration-300 animate-slide-in-right animation-delay-600 hover:transform hover:scale-105 glow-blue">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-zoom-in animation-delay-900 glow-blue">
                <ArrowRightLeft className="w-8 h-8 text-orange-400" />
              </div>
              <CardTitle className="text-slate-100">Effortless Swaps</CardTitle>
              <CardDescription className="text-slate-300">
                Instantly convert your USDT Flash to any major token directly on our platform. Your assets, your control.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Live Metrics Dashboard */}
      <section className="bg-slate-800/50 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Live Metrics</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real-time performance data from our network
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-green">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-slate-100">$0.0001</CardTitle>
                <CardDescription className="text-slate-300">Average Transaction Fee</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-blue">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-slate-100">1,500+</CardTitle>
                <CardDescription className="text-slate-300">Transactions Per Second (TPS)</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="dark-card text-center hover:shadow-xl transition-shadow duration-300 glow-cyan">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl text-slate-100">$7.8M</CardTitle>
                <CardDescription className="text-slate-300">Total Value Locked (TVL)</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Why Choose USDT Flash?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how USDT Flash compares to other major cryptocurrencies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full dark-card rounded-lg shadow-lg overflow-hidden">
              <thead className="gradient-bg-full">
                <tr>
                  <th className="px-6 py-4 text-left text-white">Feature</th>
                  <th className="px-6 py-4 text-center text-white">USDT Flash</th>
                  <th className="px-6 py-4 text-center text-white">Bitcoin (BTC)</th>
                  <th className="px-6 py-4 text-center text-white">Ethereum (ETH)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="hover:bg-slate-700/50">
                  <td className="px-6 py-4 font-medium text-slate-100">Avg. Transaction Time</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      ~2 Seconds
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-slate-400">10-60 Minutes</td>
                  <td className="px-6 py-4 text-center text-slate-400">1-3 Minutes</td>
                </tr>
                <tr className="hover:bg-slate-700/50">
                  <td className="px-6 py-4 font-medium text-slate-100">Avg. Fee</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      ~$0.0001
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-slate-400">~$5-10</td>
                  <td className="px-6 py-4 text-center text-slate-400">~$3-8</td>
                </tr>
                <tr className="hover:bg-slate-700/50">
                  <td className="px-6 py-4 font-medium text-slate-100">Use Case</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                      Payments, DeFi, Swaps
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-slate-400">Store of Value</td>
                  <td className="px-6 py-4 text-center text-slate-400">Smart Contracts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-bg-full text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Join thousands of users who have already discovered the speed and efficiency of USDT Flash.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white transform hover:scale-105 transition-all duration-300">
              Start Trading Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              Learn More
            </Button>
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
                <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">API</Link></li>
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
