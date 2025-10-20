import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Sponsor = () => {
  const plans = [
    {
      name: "Featured",
      price: "$99",
      period: "/month",
      features: [
        "Featured badge on your listing",
        "Priority placement in category",
        "Social media promotion",
        "Monthly analytics report"
      ]
    },
    {
      name: "Sponsored",
      price: "$199",
      period: "/month",
      features: [
        "All Featured benefits",
        "Top of homepage placement",
        "Dedicated newsletter feature",
        "Priority support",
        "Custom showcase section"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "All Sponsored benefits",
        "Multiple listings",
        "Custom integration",
        "Dedicated account manager",
        "Quarterly strategy sessions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-24">
        <div className="mx-auto max-w-4xl text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Sponsor WebInspire
          </h1>
          <p className="text-xl text-muted-foreground">
            Get your design in front of thousands of creative professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular ? 'ring-2 ring-primary shadow-xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-muted-foreground mb-6">
            Have questions? <Link to="/" className="text-primary hover:underline">Contact us</Link>
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-6">
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Explore
              </Link>
              <Link to="/sponsor" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Sponsor
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                About
              </Link>
              <Link to="/submit" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Submit
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2025 WebInspire. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sponsor;
