import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import MusicPage from "./pages/MusicPage";
import MusicDetail from "./pages/MusicDetail";
import MerchPage from "./pages/MerchPage";
import MerchDetail from "./pages/MerchDetail";
import VideosPage from "./pages/VideosPage";
import VideoDetail from "./pages/VideoDetail";
import TourPage from "./pages/TourPage";
import TourDetail from "./pages/TourDetail";
import InfoPage from "./pages/InfoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route element={<Layout />}>
            <Route path="/music" element={<MusicPage />} />
            <Route path="/music/:slug" element={<MusicDetail />} />
            <Route path="/merch" element={<MerchPage />} />
            <Route path="/merch/:slug" element={<MerchDetail />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/videos/:slug" element={<VideoDetail />} />
            <Route path="/tour" element={<TourPage />} />
            <Route path="/tour/:slug" element={<TourDetail />} />
            <Route path="/info" element={<InfoPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
