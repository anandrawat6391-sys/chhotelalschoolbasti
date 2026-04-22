import { Switch, Route } from "wouter";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
      <WhatsAppButton />
    </TooltipProvider>
  );
}

export default App;