import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Leaf, 
  Users, 
  MapPin, 
  Bell, 
  Star,
  CheckCircle,
  ArrowRight,
  Car
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/campus-rideshare-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Members Only",
      description: "Only verified college students and staff can join, ensuring a safe and trusted community.",
      highlight: true,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Matching",
      description: "Instantly connect with drivers and passengers heading in the same direction.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Sharing",
      description: "Split fuel costs fairly and save money on your daily commute.",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco-friendly",
      description: "Reduce carbon footprint by sharing rides and promoting sustainable transportation.",
      highlight: true,
    },
  ];

  const benefits = [
    "Save money on transportation costs",
    "Reduce campus parking congestion",
    "Meet fellow students and build community",
    "Contribute to environmental sustainability",
    "Convenient door-to-door transportation",
    "Flexible scheduling for events and classes"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Campus</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Rideshare
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
                Connect with your campus community for safe, convenient, and eco-friendly rides. 
                Share the journey with verified students and staff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Link to="/register">
                  <Button size="lg" variant="campus" className="text-lg px-8 py-6">
                    Join Campus Community
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Campus Rideshare Community" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Campus Rideshare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for college communities, our platform prioritizes safety, 
              convenience, and sustainability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Thousands of Students Already Saving Money & Time
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/register">
                  <Button variant="campus" size="lg">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">5,000+</h3>
                  <p className="text-muted-foreground mb-4">Active Campus Members</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <div className="text-lg font-semibold text-primary">250+</div>
                      <div className="text-sm text-muted-foreground">Daily Rides</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-secondary">$50</div>
                      <div className="text-sm text-muted-foreground">Avg. Monthly Savings</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Safety First, Always
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your safety is our top priority. We've built multiple layers of security 
              to ensure you can ride with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Verified Users</h3>
                <p className="text-muted-foreground">
                  All users must verify their college email and student/staff ID
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Rating System</h3>
                <p className="text-muted-foreground">
                  Rate and review your ride experiences to maintain quality
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Bell className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
                <p className="text-muted-foreground">
                  Stay informed with live notifications and trip tracking
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Campus Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join your campus rideshare community today and experience smarter, 
            safer, and more sustainable transportation.
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Campus Rideshare</span>
              </div>
              <p className="text-background/70 mb-4">
                Connecting campus communities through safe, sustainable, and smart transportation solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community Guidelines</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
            <p>&copy; 2024 Campus Rideshare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;