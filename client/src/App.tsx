import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { AnimatePresence, motion, Variants } from "framer-motion";
import ErrorBoundary from "./components/misc/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { ScrollProgressIndicator } from "./components/misc/ScrollProgressIndicator";
import { CustomCursor } from "./components/misc/CustomCursor";
import { useLenis } from "./hooks/useLenis";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import PermanentMakeup from "./pages/PermanentMakeup";
import SkinAndFacials from "./pages/SkinAndFacials";
import Massage from "./pages/Massage";
import About from "./pages/About";
import MeetTheTeam from "./pages/MeetTheTeam";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' as const } },
};

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/">
          <PageWrapper><Home /></PageWrapper>
        </Route>
        <Route path="/treatments">
          <PageWrapper><Treatments /></PageWrapper>
        </Route>
        <Route path="/permanent-makeup">
          <PageWrapper><PermanentMakeup /></PageWrapper>
        </Route>
        <Route path="/skin-facials">
          <PageWrapper><SkinAndFacials /></PageWrapper>
        </Route>
        <Route path="/massage">
          <PageWrapper><Massage /></PageWrapper>
        </Route>
        <Route path="/about">
          <PageWrapper><About /></PageWrapper>
        </Route>
        <Route path="/team">
          <PageWrapper><MeetTheTeam /></PageWrapper>
        </Route>
        <Route path="/gallery">
          <PageWrapper><Gallery /></PageWrapper>
        </Route>
        <Route path="/reviews">
          <PageWrapper><Reviews /></PageWrapper>
        </Route>
        <Route path="/faq">
          <PageWrapper><FAQ /></PageWrapper>
        </Route>
        <Route path="/contact">
          <PageWrapper><Contact /></PageWrapper>
        </Route>
        <Route path="/booking">
          <PageWrapper><Booking /></PageWrapper>
        </Route>
        <Route path="/privacy">
          <PageWrapper><Privacy /></PageWrapper>
        </Route>
        <Route path="/terms">
          <PageWrapper><Terms /></PageWrapper>
        </Route>
        <Route path="/disclaimer">
          <PageWrapper><Disclaimer /></PageWrapper>
        </Route>
        <Route path="/404">
          <PageWrapper><NotFound /></PageWrapper>
        </Route>
        <Route>
          <PageWrapper><NotFound /></PageWrapper>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function AppInner() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <ScrollProgressIndicator />
      <Header />
      <main className="pb-16 md:pb-0">
        <Router />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppInner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
